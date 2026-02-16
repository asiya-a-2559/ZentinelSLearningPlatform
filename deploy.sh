#!/bin/bash
# ============================================================
# ZentinelS Learning Platform — Deploy Script
# Usage:
#   ./deploy.sh              Full deploy (build + deploy WAR)
#   ./deploy.sh --db         Reset database + full deploy
#   ./deploy.sh --restart    Restart Tomcat only
#   ./deploy.sh --status     Check if app is running
# ============================================================

set -e

# ── Paths ───────────────────────────────────────────────────
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
JAVA_HOME="${JAVA_HOME:-/home/asiya-2559/development/software/JDK/JDK_17/jdk-17.0.11_linux-x64_bin/jdk-17.0.11}"
CATALINA_HOME="${CATALINA_HOME:-/home/asiya-2559/development/software/tomcat/apache-tomcat-9.0.115}"
WAR_NAME="securitylab.war"
APP_URL="http://localhost:8080/securitylab/"

# ── Database Config ─────────────────────────────────────────
DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-3306}"
DB_NAME="${DB_NAME:-securitylab}"
DB_USER="${DB_USER:-root}"
DB_PASS="${DB_PASS:-}"

# ── Colors ──────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()   { echo -e "${GREEN}[✓]${NC} $1"; }
warn()  { echo -e "${YELLOW}[!]${NC} $1"; }
err()   { echo -e "${RED}[✗]${NC} $1"; }
info()  { echo -e "${BLUE}[→]${NC} $1"; }
header(){ echo -e "\n${BLUE}═══════════════════════════════════════${NC}"; echo -e "${BLUE}  $1${NC}"; echo -e "${BLUE}═══════════════════════════════════════${NC}"; }

# ── Pre-flight Checks ──────────────────────────────────────
check_prereqs() {
    header "Pre-flight Checks"

    # Java
    if [ -x "$JAVA_HOME/bin/java" ]; then
        JAVA_VER=$("$JAVA_HOME/bin/java" -version 2>&1 | head -1)
        log "Java: $JAVA_VER"
    else
        err "Java not found at $JAVA_HOME"
        exit 1
    fi

    # Maven
    if command -v mvn &>/dev/null; then
        MVN_VER=$(mvn --version 2>&1 | head -1)
        log "Maven: $MVN_VER"
    else
        err "Maven not found. Install Maven 3.8+"
        exit 1
    fi

    # Tomcat
    if [ -d "$CATALINA_HOME" ]; then
        log "Tomcat: $CATALINA_HOME"
    else
        err "Tomcat not found at $CATALINA_HOME"
        exit 1
    fi

    # MySQL
    if command -v mysql &>/dev/null; then
        log "MySQL client: $(which mysql)"
    else
        warn "MySQL client not found — skip --db flag"
    fi

    # Project
    if [ -f "$PROJECT_DIR/pom.xml" ]; then
        log "Project: $PROJECT_DIR"
    else
        err "pom.xml not found in $PROJECT_DIR"
        exit 1
    fi
}

# ── Database Setup ──────────────────────────────────────────
setup_database() {
    header "Database Setup"

    if [ ! -f "$PROJECT_DIR/db/data/schema.sql" ]; then
        err "db/data/schema.sql not found"
        exit 1
    fi

    # Build mysql command
    if [ -n "$DB_PASS" ]; then
        MYSQL_CMD="mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS"
    else
        MYSQL_CMD="mysql -h $DB_HOST -P $DB_PORT -u $DB_USER"
    fi

    info "Loading schema into MySQL ($DB_USER@$DB_HOST:$DB_PORT/$DB_NAME)..."
    $MYSQL_CMD < "$PROJECT_DIR/db/data/schema.sql" 2>/dev/null

    # Verify
    LESSON_COUNT=$($MYSQL_CMD "$DB_NAME" -sNe "SELECT COUNT(*) FROM lessons;" 2>/dev/null)
    QUIZ_COUNT=$($MYSQL_CMD "$DB_NAME" -sNe "SELECT COUNT(*) FROM quiz_questions;" 2>/dev/null)
    COURSE_COUNT=$($MYSQL_CMD "$DB_NAME" -sNe "SELECT COUNT(*) FROM courses;" 2>/dev/null)

    log "Database loaded: $COURSE_COUNT courses, $LESSON_COUNT lessons, $QUIZ_COUNT quiz questions"
}

# ── Create setenv.sh ────────────────────────────────────────
setup_tomcat_env() {
    header "Tomcat Environment"

    SETENV="$CATALINA_HOME/bin/setenv.sh"
    if [ ! -f "$SETENV" ]; then
        info "Creating $SETENV with DB environment variables..."
        cat > "$SETENV" <<EOF
#!/bin/bash
export JAVA_HOME="$JAVA_HOME"
export DB_HOST="$DB_HOST"
export DB_PORT="$DB_PORT"
export DB_NAME="$DB_NAME"
export DB_USER="$DB_USER"
export DB_PASS="$DB_PASS"
EOF
        chmod +x "$SETENV"
        log "Created setenv.sh"
    else
        log "setenv.sh already exists"
    fi
}

# ── Build ───────────────────────────────────────────────────
build_project() {
    header "Maven Build"

    cd "$PROJECT_DIR"
    info "Building WAR package..."
    export JAVA_HOME
    mvn clean package -DskipTests -q

    if [ -f "$PROJECT_DIR/target/$WAR_NAME" ]; then
        WAR_SIZE=$(du -h "$PROJECT_DIR/target/$WAR_NAME" | cut -f1)
        log "Build successful: target/$WAR_NAME ($WAR_SIZE)"
    else
        err "Build failed — WAR file not created"
        exit 1
    fi

    # List all dependency JARs
    header "Dependency JARs"
    info "Resolving dependency tree..."
    JAR_LIST=$(mvn dependency:list -DoutputAbsoluteArtifactFilename=false -DincludeScope=runtime -q -DoutputFile=/dev/stdout 2>/dev/null | grep ":.*:.*:" | sed 's/^\s*//' | sort)
    JAR_COUNT=$(echo "$JAR_LIST" | grep -c ":" 2>/dev/null || echo "0")

    echo ""
    echo -e "  ${BLUE}┌─────────────────────────────────────────┐${NC}"
    echo -e "  ${BLUE}│  Dependency JARs ($JAR_COUNT total)${NC}"
    echo -e "  ${BLUE}├─────────────────────────────────────────┤${NC}"
    echo "$JAR_LIST" | while IFS= read -r line; do
        [ -z "$line" ] && continue
        echo -e "  ${BLUE}│${NC}  $line"
    done
    echo -e "  ${BLUE}└─────────────────────────────────────────┘${NC}"
    echo ""

    # Also list JARs bundled inside the WAR
    info "JARs packaged in WAR (WEB-INF/lib/):"
    JAR_IN_WAR=$(jar tf "$PROJECT_DIR/target/$WAR_NAME" 2>/dev/null | grep "WEB-INF/lib/.*\.jar$" | sed 's|WEB-INF/lib/||' | sort)
    BUNDLED_COUNT=$(echo "$JAR_IN_WAR" | grep -c ".jar" 2>/dev/null || echo "0")

    echo "$JAR_IN_WAR" | while IFS= read -r jar; do
        [ -z "$jar" ] && continue
        echo -e "    ${GREEN}✓${NC} $jar"
    done
    log "$BUNDLED_COUNT JARs bundled in WAR"
}

# ── Deploy ──────────────────────────────────────────────────
deploy_war() {
    header "Deploy to Tomcat"

    # Stop Tomcat if running
    if [ -f "$CATALINA_HOME/bin/shutdown.sh" ]; then
        info "Stopping Tomcat..."
        "$CATALINA_HOME/bin/shutdown.sh" 2>/dev/null || true
        sleep 3
    fi

    # Remove old deployment
    if [ -d "$CATALINA_HOME/webapps/securitylab" ]; then
        info "Removing old deployment..."
        rm -rf "$CATALINA_HOME/webapps/securitylab"
    fi
    rm -f "$CATALINA_HOME/webapps/$WAR_NAME"

    # Copy new WAR
    info "Copying WAR to Tomcat..."
    cp "$PROJECT_DIR/target/$WAR_NAME" "$CATALINA_HOME/webapps/"
    log "WAR deployed to $CATALINA_HOME/webapps/$WAR_NAME"

    # Start Tomcat
    info "Starting Tomcat..."
    export JAVA_HOME
    "$CATALINA_HOME/bin/startup.sh" 2>/dev/null

    # Wait for app
    info "Waiting for application to start..."
    for i in $(seq 1 15); do
        sleep 2
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$APP_URL" 2>/dev/null || echo "000")
        if [ "$HTTP_CODE" = "200" ]; then
            log "Application is UP!"
            echo ""
            echo -e "  ${GREEN}╔══════════════════════════════════════════╗${NC}"
            echo -e "  ${GREEN}║  ZentinelS is running at:                ║${NC}"
            echo -e "  ${GREEN}║  ${BLUE}$APP_URL${GREEN}   ║${NC}"
            echo -e "  ${GREEN}║  Login: demo / demo123                   ║${NC}"
            echo -e "  ${GREEN}╚══════════════════════════════════════════╝${NC}"
            echo ""
            return 0
        fi
        printf "."
    done

    warn "Tomcat started but app not responding yet. Check logs:"
    echo "  tail -f $CATALINA_HOME/logs/catalina.out"
}

# ── Status Check ────────────────────────────────────────────
check_status() {
    header "Application Status"

    # Tomcat process
    TOMCAT_PID=$(ps aux | grep "[c]atalina" | awk '{print $2}' | head -1)
    if [ -n "$TOMCAT_PID" ]; then
        log "Tomcat is running (PID: $TOMCAT_PID)"
    else
        err "Tomcat is NOT running"
    fi

    # HTTP check
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$APP_URL" 2>/dev/null || echo "000")
    if [ "$HTTP_CODE" = "200" ]; then
        log "App responding: HTTP $HTTP_CODE — $APP_URL"
    else
        err "App not responding: HTTP $HTTP_CODE"
    fi

    # Database check
    if command -v mysql &>/dev/null; then
        if [ -n "$DB_PASS" ]; then
            MYSQL_CMD="mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS"
        else
            MYSQL_CMD="mysql -h $DB_HOST -P $DB_PORT -u $DB_USER"
        fi
        DB_OK=$($MYSQL_CMD "$DB_NAME" -sNe "SELECT 1;" 2>/dev/null || echo "0")
        if [ "$DB_OK" = "1" ]; then
            COUNTS=$($MYSQL_CMD "$DB_NAME" -sNe \
                "SELECT CONCAT(
                    (SELECT COUNT(*) FROM courses), ' courses, ',
                    (SELECT COUNT(*) FROM lessons), ' lessons, ',
                    (SELECT COUNT(*) FROM quiz_questions), ' quizzes'
                );" 2>/dev/null)
            log "Database OK: $COUNTS"
        else
            err "Database connection failed"
        fi
    fi
}

# ── Restart Tomcat ──────────────────────────────────────────
restart_tomcat() {
    header "Restart Tomcat"

    info "Stopping Tomcat..."
    "$CATALINA_HOME/bin/shutdown.sh" 2>/dev/null || true
    sleep 3

    info "Starting Tomcat..."
    export JAVA_HOME
    "$CATALINA_HOME/bin/startup.sh" 2>/dev/null

    info "Waiting for application..."
    for i in $(seq 1 10); do
        sleep 2
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$APP_URL" 2>/dev/null || echo "000")
        if [ "$HTTP_CODE" = "200" ]; then
            log "ZentinelS is UP at $APP_URL"
            return 0
        fi
        printf "."
    done
    warn "Check logs: tail -f $CATALINA_HOME/logs/catalina.out"
}

# ── Main ────────────────────────────────────────────────────
echo ""
echo -e "${BLUE}  ⚡ ZentinelS — Deploy Script${NC}"
echo ""

case "${1:-}" in
    --db)
        check_prereqs
        setup_database
        setup_tomcat_env
        build_project
        deploy_war
        ;;
    --restart)
        restart_tomcat
        ;;
    --status)
        check_status
        ;;
    --help|-h)
        echo "Usage: $0 [OPTION]"
        echo ""
        echo "  (no flag)    Build + deploy WAR to Tomcat"
        echo "  --db         Reset database + build + deploy"
        echo "  --restart    Restart Tomcat only"
        echo "  --status     Check if app is running"
        echo "  --help       Show this help"
        echo ""
        ;;
    *)
        check_prereqs
        setup_tomcat_env
        build_project
        deploy_war
        ;;
esac
