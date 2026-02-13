-- ============================================================
-- Course C11: AI/ML - Regression, Clustering & Advanced Topics
-- ============================================================

-- ============================================================
-- REGRESSION & CLUSTERING (Lessons 242-246)
-- ============================================================

INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(242, 49, 53, 11, 'Polynomial Regression', 'polynomial-regression', 'intermediate', 'Model non-linear relationships with polynomial features', 16);

UPDATE lessons SET description = '
<h2>Polynomial Regression</h2>

<p>When data has a curved relationship, linear regression falls short. Polynomial regression adds polynomial terms to capture non-linear patterns.</p>

<h3>The Problem with Linear Models</h3>

<pre class="code-example">
Data with curved relationship:

Price │     ✦
      │   ✦   ✦
      │ ✦       ✦
      │✦          ✦
      └───────────────
           Time

Linear fit: ───────── (Poor fit!)
Polynomial: ⌒⌒⌒⌒⌒⌒⌒ (Much better!)
</pre>

<h3>How It Works</h3>

<pre class="code-example">
Transform features by adding polynomial terms:

Original: y = w₁x + b  (straight line)

Degree 2: y = w₁x + w₂x² + b  (parabola)

Degree 3: y = w₁x + w₂x² + w₃x³ + b  (cubic curve)

Example with one feature (size):
Original: [size]
Degree 2: [size, size²]
Degree 3: [size, size², size³]
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline

# Create polynomial features + linear regression
poly_model = Pipeline([
    ("poly", PolynomialFeatures(degree=2, include_bias=False)),
    ("linear", LinearRegression())
])

# Fit the model
poly_model.fit(X_train, y_train)

# Predict
predictions = poly_model.predict(X_test)

# Access coefficients
linear_model = poly_model.named_steps["linear"]
print(f"Coefficients: {linear_model.coef_}")
print(f"Intercept: {linear_model.intercept_}")
</pre>

<h3>Choosing the Degree</h3>

<pre class="code-example">
Degree too low (underfitting):
- Misses the pattern
- High bias, low variance

Degree too high (overfitting):
- Fits noise, not signal
- Low bias, high variance

Use cross-validation to find optimal degree!

from sklearn.model_selection import cross_val_score

for degree in [1, 2, 3, 4, 5]:
    model = Pipeline([
        ("poly", PolynomialFeatures(degree=degree)),
        ("linear", LinearRegression())
    ])
    scores = cross_val_score(model, X, y, cv=5, scoring="r2")
    print(f"Degree {degree}: R² = {scores.mean():.3f}")
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">📈 Interactive Demo</span>
        <span class="demo-title">Polynomial Regression Fit</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr auto; gap: 24px;">
            <div>
                <canvas id="poly-canvas" width="380" height="280" style="background: #fafafa; border-radius: 8px;"></canvas>
            </div>
            
            <div style="min-width: 140px;">
                <div class="demo-field">
                    <label>Polynomial Degree: <span id="deg-val">1</span></label>
                    <input type="range" id="poly-degree" min="1" max="7" value="1" style="width: 100%;">
                </div>
                
                <div id="poly-metrics" style="margin-top: 16px; background: var(--main-bg); padding: 12px; border-radius: 8px; font-size: 0.85rem;">
                    <div>R² Score: <strong id="poly-r2">0.45</strong></div>
                    <div style="margin-top: 4px; color: var(--text-muted);" id="poly-status">Underfitting</div>
                </div>
                
                <div style="margin-top: 16px; font-size: 0.8rem; color: var(--text-muted);">
                    <div>Degree 1: Linear</div>
                    <div>Degree 2: Quadratic</div>
                    <div>Degree 3+: Higher order</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("poly-canvas");
    const ctx = canvas.getContext("2d");
    
    // Generate curved data with noise
    const dataPoints = [];
    for (let i = 0; i < 25; i++) {
        const x = 20 + i * 14;
        const baseY = 250 - (0.003 * Math.pow(x - 200, 2) + 50);
        const y = baseY + (Math.random() - 0.5) * 40;
        dataPoints.push({x, y});
    }
    
    function drawChart(degree) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw axes
        ctx.strokeStyle = "#e2e8f0";
        ctx.beginPath();
        ctx.moveTo(30, 20);
        ctx.lineTo(30, 260);
        ctx.lineTo(370, 260);
        ctx.stroke();
        
        // Draw data points
        dataPoints.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = "#4c9aff";
            ctx.fill();
        });
        
        // Draw polynomial curve based on degree
        ctx.strokeStyle = "#e53e3e";
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 20; x <= 360; x++) {
            let y;
            if (degree === 1) {
                y = 200 - (x - 190) * 0.1;
            } else if (degree === 2) {
                y = 250 - (0.003 * Math.pow(x - 200, 2) + 50);
            } else if (degree === 3) {
                y = 250 - (0.003 * Math.pow(x - 200, 2) + 50) + Math.sin(x * 0.02) * 5;
            } else {
                y = 250 - (0.003 * Math.pow(x - 200, 2) + 50) + Math.sin(x * 0.05) * (degree * 3);
            }
            
            if (x === 20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Calculate approximate R² based on degree
        let r2, status;
        if (degree === 1) { r2 = 0.45; status = "⚠️ Underfitting"; }
        else if (degree === 2) { r2 = 0.92; status = "✅ Good Fit"; }
        else if (degree === 3) { r2 = 0.94; status = "✅ Good Fit"; }
        else if (degree === 4) { r2 = 0.95; status = "⚠️ Possible Overfit"; }
        else { r2 = 0.99; status = "❌ Overfitting!"; }
        
        document.getElementById("poly-r2").textContent = r2.toFixed(2);
        document.getElementById("poly-status").textContent = status;
    }
    
    drawChart(1);
    
    document.getElementById("poly-degree").oninput = function() {
        const deg = parseInt(this.value);
        document.getElementById("deg-val").textContent = deg;
        drawChart(deg);
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Polynomial Regression Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> High polynomial degree typically leads to:</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Underfitting</div>
            <div class="lab-option" data-correct="true">Overfitting</div>
            <div class="lab-option" data-correct="false">Better generalization</div>
            <div class="lab-option" data-correct="false">Faster training</div>
        </div>
        
        <div class="lab-feedback"></div>
    </div>
</div>

<script>
(function() {
    const options = document.querySelectorAll(".lab-option");
    const feedback = document.querySelector(".lab-feedback");
    let answered = false;
    
    options.forEach(opt => {
        opt.onclick = function() {
            if (answered) return;
            answered = true;
            
            const isCorrect = this.dataset.correct === "true";
            this.classList.add(isCorrect ? "correct" : "wrong");
            if (!isCorrect) document.querySelector("[data-correct=\"true\"]").classList.add("correct");
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> High degree polynomials fit training data too closely, including noise, leading to poor generalization."
                : "❌ <strong>Not quite.</strong> High degree = more flexibility = fitting noise = overfitting!";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Overfitting'
WHERE id = 242;

-- Lesson 243: K-Means Clustering
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(243, 49, 53, 11, 'K-Means Clustering', 'kmeans-clustering', 'intermediate', 'Partition data into K distinct groups', 17);

UPDATE lessons SET description = '
<h2>K-Means Clustering</h2>

<p>K-Means is the most popular unsupervised clustering algorithm. It partitions data into K clusters by minimizing within-cluster distances.</p>

<h3>The Algorithm</h3>

<pre class="code-example">
Step 1: Initialize K centroids randomly

Step 2: Repeat until convergence:
   a) ASSIGN: Each point → nearest centroid
   b) UPDATE: Move centroids to cluster means

    Initial          After Assign      After Update
    ✦ ○ ○ ○         ✦|○ ○ ○          ✦  ○ ○ ○
      ○ ○ ✦            ○ ○|✦            ○ ○  ✦
      
    ✦ = centroid     | = cluster boundary

Converges when assignments dont change
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# Create and fit KMeans
kmeans = KMeans(
    n_clusters=3,         # Number of clusters
    init="k-means++",     # Smart initialization
    n_init=10,            # Run 10 times with different seeds
    max_iter=300,         # Max iterations per run
    random_state=42
)

# Fit and predict cluster labels
labels = kmeans.fit_predict(X)

# Get cluster centers
centers = kmeans.cluster_centers_

# Get inertia (within-cluster sum of squares)
inertia = kmeans.inertia_

# Visualize
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap="viridis")
plt.scatter(centers[:, 0], centers[:, 1], c="red", marker="X", s=200)
plt.show()
</pre>

<h3>The Elbow Method: Choosing K</h3>

<pre class="code-example">
# Plot inertia vs K to find the "elbow"
inertias = []
K_range = range(1, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X)
    inertias.append(kmeans.inertia_)

plt.plot(K_range, inertias, "bo-")
plt.xlabel("Number of Clusters (K)")
plt.ylabel("Inertia")
plt.title("Elbow Method")
plt.show()

# Look for the "elbow" - where adding more clusters
# doesnt significantly reduce inertia
</pre>

<h3>K-Means++ Initialization</h3>

<pre class="code-example">
Problem: Random initialization can lead to poor clusters

Solution: K-Means++ (default in sklearn)
1. Choose first centroid randomly
2. For each remaining centroid:
   - Calculate distance to nearest existing centroid
   - Choose new centroid with probability ∝ distance²
   - Points far from existing centroids more likely to be chosen

Result: Better spread of initial centroids = better final clusters
</pre>

<h3>Limitations</h3>

<table>
<tr><th>Issue</th><th>Description</th><th>Alternative</th></tr>
<tr><td>Assumes spherical clusters</td><td>Struggles with elongated shapes</td><td>DBSCAN, GMM</td></tr>
<tr><td>Must specify K</td><td>Need to know number of clusters</td><td>DBSCAN (auto)</td></tr>
<tr><td>Sensitive to outliers</td><td>Outliers pull centroids</td><td>K-Medoids</td></tr>
<tr><td>Sensitive to scale</td><td>Features must be scaled</td><td>StandardScaler</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">🎯 Interactive Demo</span>
        <span class="demo-title">K-Means Clustering Animation</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr auto; gap: 24px;">
            <div>
                <canvas id="kmeans-canvas" width="380" height="280" style="background: #fafafa; border-radius: 8px;"></canvas>
            </div>
            
            <div style="min-width: 140px;">
                <div class="demo-field">
                    <label>Clusters (K): <span id="k-clusters">3</span></label>
                    <input type="range" id="kmeans-k" min="2" max="5" value="3" style="width: 100%;">
                </div>
                
                <button class="demo-btn" id="kmeans-run" style="margin-top: 12px;">▶ Run K-Means</button>
                <button class="demo-btn demo-btn-sm" id="kmeans-reset" style="margin-top: 8px;">Reset</button>
                
                <div id="kmeans-info" style="margin-top: 16px; font-size: 0.85rem;">
                    <div>Iteration: <strong id="kmeans-iter">0</strong></div>
                    <div>Inertia: <strong id="kmeans-inertia">-</strong></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("kmeans-canvas");
    const ctx = canvas.getContext("2d");
    
    // Generate clustered data
    let data = [];
    function generateData() {
        data = [];
        const centers = [[80, 80], [200, 200], [300, 100], [150, 250]];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 20; j++) {
                data.push({
                    x: centers[i][0] + (Math.random() - 0.5) * 80,
                    y: centers[i][1] + (Math.random() - 0.5) * 80,
                    cluster: -1
                });
            }
        }
    }
    generateData();
    
    const colors = ["#e53e3e", "#38a169", "#4c9aff", "#9f7aea", "#f59e0b"];
    let centroids = [];
    
    function euclidean(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
    
    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw data points
        data.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = p.cluster >= 0 ? colors[p.cluster] : "#a0aec0";
            ctx.fill();
        });
        
        // Draw centroids
        centroids.forEach((c, i) => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, 12, 0, Math.PI * 2);
            ctx.fillStyle = colors[i];
            ctx.fill();
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Cross mark
            ctx.beginPath();
            ctx.moveTo(c.x - 6, c.y - 6);
            ctx.lineTo(c.x + 6, c.y + 6);
            ctx.moveTo(c.x + 6, c.y - 6);
            ctx.lineTo(c.x - 6, c.y + 6);
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.stroke();
        });
    }
    
    drawCanvas();
    
    document.getElementById("kmeans-k").oninput = function() {
        document.getElementById("k-clusters").textContent = this.value;
    };
    
    document.getElementById("kmeans-reset").onclick = function() {
        generateData();
        centroids = [];
        document.getElementById("kmeans-iter").textContent = "0";
        document.getElementById("kmeans-inertia").textContent = "-";
        drawCanvas();
    };
    
    document.getElementById("kmeans-run").onclick = async function() {
        const k = parseInt(document.getElementById("kmeans-k").value);
        
        // Initialize centroids randomly from data
        centroids = [];
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        for (let i = 0; i < k; i++) {
            centroids.push({x: shuffled[i].x, y: shuffled[i].y});
        }
        
        let iteration = 0;
        
        for (let iter = 0; iter < 10; iter++) {
            iteration++;
            
            // Assign points to nearest centroid
            data.forEach(p => {
                let minDist = Infinity;
                centroids.forEach((c, i) => {
                    const dist = euclidean(p, c);
                    if (dist < minDist) {
                        minDist = dist;
                        p.cluster = i;
                    }
                });
            });
            
            drawCanvas();
            await new Promise(r => setTimeout(r, 500));
            
            // Update centroids
            for (let i = 0; i < k; i++) {
                const clusterPoints = data.filter(p => p.cluster === i);
                if (clusterPoints.length > 0) {
                    centroids[i].x = clusterPoints.reduce((s, p) => s + p.x, 0) / clusterPoints.length;
                    centroids[i].y = clusterPoints.reduce((s, p) => s + p.y, 0) / clusterPoints.length;
                }
            }
            
            // Calculate inertia
            let inertia = 0;
            data.forEach(p => {
                inertia += euclidean(p, centroids[p.cluster]) ** 2;
            });
            
            document.getElementById("kmeans-iter").textContent = iteration;
            document.getElementById("kmeans-inertia").textContent = inertia.toFixed(0);
            
            drawCanvas();
            await new Promise(r => setTimeout(r, 500));
        }
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 K-Means Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What does the "elbow" in the elbow method indicate?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">The maximum number of clusters</div>
            <div class="lab-option" data-correct="true">The optimal K where adding more clusters gives diminishing returns</div>
            <div class="lab-option" data-correct="false">The point where all points are correctly clustered</div>
            <div class="lab-option" data-correct="false">The minimum inertia value</div>
        </div>
        
        <div class="lab-feedback"></div>
    </div>
</div>

<script>
(function() {
    const options = document.querySelectorAll(".lab-option");
    const feedback = document.querySelector(".lab-feedback");
    let answered = false;
    
    options.forEach(opt => {
        opt.onclick = function() {
            if (answered) return;
            answered = true;
            
            const isCorrect = this.dataset.correct === "true";
            this.classList.add(isCorrect ? "correct" : "wrong");
            if (!isCorrect) document.querySelector("[data-correct=\"true\"]").classList.add("correct");
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> The elbow is where the rate of inertia decrease sharply slows - adding more K gives marginal improvement."
                : "❌ <strong>Not quite.</strong> The elbow indicates the optimal K beyond which adding more clusters doesnt significantly reduce inertia.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'The optimal K where adding more clusters gives diminishing returns'
WHERE id = 243;

-- Lesson 244: Gradient Boosting (XGBoost)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(244, 49, 53, 11, 'Gradient Boosting & XGBoost', 'gradient-boosting-xgboost', 'advanced', 'Powerful ensemble method that builds trees sequentially', 18);

UPDATE lessons SET description = '
<h2>Gradient Boosting & XGBoost</h2>

<p>Gradient Boosting is an ensemble technique that builds models <strong>sequentially</strong>, where each new model corrects errors of previous ones. XGBoost is its optimized implementation.</p>

<h3>Boosting vs Bagging</h3>

<pre class="code-example">
BAGGING (Random Forest):
- Trees built INDEPENDENTLY in parallel
- Each tree sees random sample
- Final = Average/Vote of all trees
- Reduces VARIANCE

BOOSTING (Gradient Boosting):
- Trees built SEQUENTIALLY
- Each tree corrects previous errors
- Final = Sum of all tree predictions
- Reduces BIAS
</pre>

<h3>How Gradient Boosting Works</h3>

<pre class="code-example">
1. Start with initial prediction (mean for regression)
   F₀(x) = mean(y)

2. For m = 1 to M (number of trees):
   a) Calculate residuals (errors)
      rᵢ = yᵢ - Fₘ₋₁(xᵢ)
   
   b) Fit a tree to predict residuals
      hₘ(x) = tree fitted to residuals
   
   c) Update model
      Fₘ(x) = Fₘ₋₁(x) + η × hₘ(x)
      
   η = learning rate (typically 0.01-0.1)

Example:
Actual: 100
Tree 1 predicts: 80  → Residual: 20
Tree 2 predicts: 15  → New pred: 80+15=95, Residual: 5
Tree 3 predicts: 4   → New pred: 95+4=99, Residual: 1
...
</pre>

<h3>XGBoost Implementation</h3>

<pre class="code-example">
import xgboost as xgb
from sklearn.model_selection import train_test_split

# Create DMatrix (XGBoost optimized data structure)
dtrain = xgb.DMatrix(X_train, label=y_train)
dtest = xgb.DMatrix(X_test, label=y_test)

# Parameters
params = {
    "objective": "binary:logistic",  # or "reg:squarederror"
    "max_depth": 6,
    "learning_rate": 0.1,
    "n_estimators": 100,
    "subsample": 0.8,
    "colsample_bytree": 0.8,
    "eval_metric": "logloss"
}

# Train with early stopping
model = xgb.train(
    params,
    dtrain,
    num_boost_round=1000,
    evals=[(dtest, "test")],
    early_stopping_rounds=50
)

# Or use sklearn API
from xgboost import XGBClassifier

xgb_model = XGBClassifier(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    random_state=42
)
xgb_model.fit(X_train, y_train)
</pre>

<h3>Key Hyperparameters</h3>

<table>
<tr><th>Parameter</th><th>Description</th><th>Typical Range</th></tr>
<tr><td><code>n_estimators</code></td><td>Number of trees</td><td>100-1000</td></tr>
<tr><td><code>learning_rate</code></td><td>Step size (η)</td><td>0.01-0.3</td></tr>
<tr><td><code>max_depth</code></td><td>Max tree depth</td><td>3-10</td></tr>
<tr><td><code>subsample</code></td><td>Row sampling ratio</td><td>0.6-1.0</td></tr>
<tr><td><code>colsample_bytree</code></td><td>Column sampling ratio</td><td>0.6-1.0</td></tr>
</table>

<h3>Why XGBoost Wins Kaggle</h3>

<pre class="code-example">
1. REGULARIZATION: L1/L2 built-in (prevents overfitting)
2. HANDLING MISSING VALUES: Learns best direction for missing
3. TREE PRUNING: Depth-first, prunes backward
4. PARALLEL PROCESSING: Despite sequential nature
5. CROSS-VALIDATION: Built-in CV with early stopping
6. FEATURE IMPORTANCE: Gain, coverage, frequency metrics
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">🚀 Interactive Demo</span>
        <span class="demo-title">Gradient Boosting: Sequential Learning</span>
    </div>
    
    <div class="demo-visual">
        <h4 style="margin-bottom: 12px;">Watch Trees Correct Each Others Errors</h4>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 16px;">
            <div id="boost-tree-0" class="boost-tree" style="background: var(--main-bg); padding: 12px; border-radius: 8px; text-align: center; opacity: 0.3;">
                <div style="font-size: 1.2rem;">🌲</div>
                <div style="font-size: 0.75rem;">Tree 1</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Pred: <span class="tree-pred">-</span></div>
            </div>
            <div id="boost-tree-1" class="boost-tree" style="background: var(--main-bg); padding: 12px; border-radius: 8px; text-align: center; opacity: 0.3;">
                <div style="font-size: 1.2rem;">🌲</div>
                <div style="font-size: 0.75rem;">Tree 2</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Pred: <span class="tree-pred">-</span></div>
            </div>
            <div id="boost-tree-2" class="boost-tree" style="background: var(--main-bg); padding: 12px; border-radius: 8px; text-align: center; opacity: 0.3;">
                <div style="font-size: 1.2rem;">🌲</div>
                <div style="font-size: 0.75rem;">Tree 3</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Pred: <span class="tree-pred">-</span></div>
            </div>
            <div id="boost-tree-3" class="boost-tree" style="background: var(--main-bg); padding: 12px; border-radius: 8px; text-align: center; opacity: 0.3;">
                <div style="font-size: 1.2rem;">🌲</div>
                <div style="font-size: 0.75rem;">Tree 4</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Pred: <span class="tree-pred">-</span></div>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background: #e2e8f0; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; color: var(--text-muted);">Target Value</div>
                <div style="font-size: 1.5rem; font-weight: 700;">100</div>
            </div>
            <div style="background: #bee3f8; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; color: var(--text-muted);">Current Prediction</div>
                <div style="font-size: 1.5rem; font-weight: 700;" id="boost-pred">-</div>
            </div>
            <div style="background: #fed7d7; padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; color: var(--text-muted);">Residual (Error)</div>
                <div style="font-size: 1.5rem; font-weight: 700;" id="boost-residual">-</div>
            </div>
        </div>
        
        <button class="demo-btn" id="boost-run">▶ Run Boosting</button>
        <button class="demo-btn demo-btn-sm" id="boost-reset">Reset</button>
    </div>
</div>

<script>
(function() {
    const target = 100;
    const treePredictions = [60, 25, 10, 4];  // Each tree predicts part of residual
    const learningRate = 0.8;
    
    document.getElementById("boost-run").onclick = async function() {
        let currentPred = 0;
        
        for (let i = 0; i < 4; i++) {
            // Highlight current tree
            document.getElementById("boost-tree-" + i).style.opacity = "1";
            document.getElementById("boost-tree-" + i).style.border = "2px solid #4c9aff";
            
            await new Promise(r => setTimeout(r, 600));
            
            // Tree predicts
            const treePred = treePredictions[i] * learningRate;
            document.querySelectorAll(".tree-pred")[i].textContent = "+" + treePred.toFixed(0);
            
            // Update cumulative prediction
            currentPred += treePred;
            const residual = target - currentPred;
            
            document.getElementById("boost-pred").textContent = currentPred.toFixed(0);
            document.getElementById("boost-residual").textContent = residual.toFixed(0);
            
            document.getElementById("boost-tree-" + i).style.border = "2px solid #38a169";
            
            await new Promise(r => setTimeout(r, 600));
        }
    };
    
    document.getElementById("boost-reset").onclick = function() {
        document.getElementById("boost-pred").textContent = "-";
        document.getElementById("boost-residual").textContent = "-";
        document.querySelectorAll(".boost-tree").forEach(el => {
            el.style.opacity = "0.3";
            el.style.border = "none";
        });
        document.querySelectorAll(".tree-pred").forEach(el => el.textContent = "-");
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 XGBoost Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What does "early stopping" in XGBoost prevent?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Underfitting by adding more trees</div>
            <div class="lab-option" data-correct="true">Overfitting by stopping when validation error stops improving</div>
            <div class="lab-option" data-correct="false">Memory issues by limiting data</div>
            <div class="lab-option" data-correct="false">Slow training by parallel processing</div>
        </div>
        
        <div class="lab-feedback"></div>
    </div>
</div>

<script>
(function() {
    const options = document.querySelectorAll(".lab-option");
    const feedback = document.querySelector(".lab-feedback");
    let answered = false;
    
    options.forEach(opt => {
        opt.onclick = function() {
            if (answered) return;
            answered = true;
            
            const isCorrect = this.dataset.correct === "true";
            this.classList.add(isCorrect ? "correct" : "wrong");
            if (!isCorrect) document.querySelector("[data-correct=\"true\"]").classList.add("correct");
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> Early stopping monitors validation error and stops training when it stops improving, preventing overfitting."
                : "❌ <strong>Not quite.</strong> Early stopping prevents overfitting by halting training when validation performance plateaus or worsens.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Overfitting by stopping when validation error stops improving'
WHERE id = 244;

-- Lesson 245: Principal Component Analysis (PCA)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(245, 48, 53, 11, 'Principal Component Analysis', 'pca', 'advanced', 'Dimensionality reduction by finding principal components', 19);

UPDATE lessons SET description = '
<h2>Principal Component Analysis (PCA)</h2>

<p>PCA reduces dimensionality by projecting data onto directions of maximum variance, creating new features called principal components.</p>

<h3>Why Reduce Dimensions?</h3>

<pre class="code-example">
Problems with high dimensions:
1. Curse of Dimensionality - Data becomes sparse
2. Computational Cost - More features = slower training
3. Overfitting - Too many features relative to samples
4. Visualization - Cant plot > 3 dimensions

PCA helps by:
- Removing redundant/correlated features
- Keeping most information in fewer dimensions
- Enabling visualization of high-dim data
</pre>

<h3>How PCA Works</h3>

<pre class="code-example">
1. STANDARDIZE data (mean=0, std=1)

2. Compute COVARIANCE MATRIX
   - Shows relationships between features

3. Calculate EIGENVECTORS and EIGENVALUES
   - Eigenvectors = directions of max variance (PCs)
   - Eigenvalues = amount of variance in each direction

4. SORT by eigenvalue (highest first)

5. SELECT top k components

6. PROJECT data onto these k dimensions

Original: 100 features
After PCA: 10 components capturing 95% of variance!
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# Step 1: Standardize
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 2: Apply PCA
pca = PCA(n_components=2)  # Reduce to 2D
X_pca = pca.fit_transform(X_scaled)

# Check explained variance
print(f"Variance explained: {pca.explained_variance_ratio_}")
print(f"Total: {sum(pca.explained_variance_ratio_):.2%}")

# Visualize 2D projection
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap="viridis")
plt.xlabel("PC1")
plt.ylabel("PC2")
plt.show()
</pre>

<h3>Choosing Number of Components</h3>

<pre class="code-example">
# Method 1: Keep components explaining 95% variance
pca = PCA(n_components=0.95)  # Keep 95% of variance
X_pca = pca.fit_transform(X_scaled)
print(f"Components needed: {pca.n_components_}")

# Method 2: Scree plot (elbow method)
pca = PCA()
pca.fit(X_scaled)

plt.plot(range(1, len(pca.explained_variance_ratio_) + 1),
         pca.explained_variance_ratio_.cumsum())
plt.xlabel("Number of Components")
plt.ylabel("Cumulative Explained Variance")
plt.axhline(y=0.95, color="r", linestyle="--")
plt.show()
</pre>

<h3>PCA for Visualization</h3>

<pre class="code-example">
# Reduce high-dimensional data to 2D for plotting
from sklearn.datasets import load_digits

digits = load_digits()
X, y = digits.data, digits.target  # 64 dimensions!

# PCA to 2D
pca = PCA(n_components=2)
X_2d = pca.fit_transform(X)

# Now we can visualize!
plt.scatter(X_2d[:, 0], X_2d[:, 1], c=y, cmap="tab10", alpha=0.6)
plt.colorbar(label="Digit")
plt.title("MNIST Digits in 2D (PCA)")
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🔬 Interactive Demo</span>
        <span class="demo-title">PCA: Dimensionality Reduction</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div>
                <h4 style="margin-bottom: 12px;">Original 2D Data</h4>
                <canvas id="pca-original" width="200" height="200" style="background: #fafafa; border-radius: 8px;"></canvas>
            </div>
            <div>
                <h4 style="margin-bottom: 12px;">Projected onto PC1</h4>
                <canvas id="pca-projected" width="200" height="200" style="background: #fafafa; border-radius: 8px;"></canvas>
            </div>
        </div>
        
        <div style="margin-top: 16px;">
            <div class="demo-field">
                <label>Rotate Principal Component: <span id="pc-angle">45</span>°</label>
                <input type="range" id="pca-rotate" min="0" max="180" value="45" style="width: 100%;">
            </div>
            
            <div id="pca-variance" style="background: var(--main-bg); padding: 12px; border-radius: 8px; margin-top: 12px;">
                <div style="font-size: 0.85rem;">Variance Explained by PC1: <strong id="var-explained">71%</strong></div>
                <div style="height: 8px; background: #e2e8f0; border-radius: 4px; margin-top: 8px; overflow: hidden;">
                    <div id="var-bar" style="height: 100%; background: #4c9aff; width: 71%;"></div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>PCA finds the direction (principal component) that captures the most variance. Rotating shows how different directions capture different amounts of variance.</p>
        </div>
    </div>
</div>

<script>
(function() {
    const origCanvas = document.getElementById("pca-original");
    const projCanvas = document.getElementById("pca-projected");
    const origCtx = origCanvas.getContext("2d");
    const projCtx = projCanvas.getContext("2d");
    
    // Generate correlated data
    const data = [];
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * 140 + 30;
        const y = 200 - (x * 0.7 + (Math.random() - 0.5) * 50);
        data.push({x, y});
    }
    
    function draw(angle) {
        const rad = angle * Math.PI / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        
        // Draw original
        origCtx.clearRect(0, 0, 200, 200);
        origCtx.fillStyle = "#fafafa";
        origCtx.fillRect(0, 0, 200, 200);
        
        // Draw PC direction
        const cx = 100, cy = 100;
        origCtx.strokeStyle = "#e53e3e";
        origCtx.lineWidth = 2;
        origCtx.beginPath();
        origCtx.moveTo(cx - cos * 90, cy + sin * 90);
        origCtx.lineTo(cx + cos * 90, cy - sin * 90);
        origCtx.stroke();
        
        // Draw data points
        data.forEach(p => {
            origCtx.beginPath();
            origCtx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            origCtx.fillStyle = "#4c9aff";
            origCtx.fill();
        });
        
        // Draw projected
        projCtx.clearRect(0, 0, 200, 200);
        projCtx.fillStyle = "#fafafa";
        projCtx.fillRect(0, 0, 200, 200);
        
        // Draw PC1 axis
        projCtx.strokeStyle = "#e53e3e";
        projCtx.lineWidth = 2;
        projCtx.beginPath();
        projCtx.moveTo(20, 100);
        projCtx.lineTo(180, 100);
        projCtx.stroke();
        
        // Project points onto PC1
        let variance = 0;
        const projected = data.map(p => {
            const dx = p.x - cx;
            const dy = p.y - cy;
            const proj = dx * cos - dy * sin;
            variance += proj * proj;
            return proj;
        });
        
        const maxProj = Math.max(...projected.map(Math.abs));
        projected.forEach((proj, i) => {
            const x = 100 + (proj / maxProj) * 70;
            projCtx.beginPath();
            projCtx.arc(x, 100, 4, 0, Math.PI * 2);
            projCtx.fillStyle = "#4c9aff";
            projCtx.fill();
        });
        
        // Calculate variance explained (simplified)
        const totalVar = data.reduce((s, p) => s + (p.x - cx) ** 2 + (p.y - cy) ** 2, 0);
        const varExplained = Math.round((variance / totalVar) * 100);
        
        document.getElementById("var-explained").textContent = varExplained + "%";
        document.getElementById("var-bar").style.width = varExplained + "%";
    }
    
    draw(45);
    
    document.getElementById("pca-rotate").oninput = function() {
        const angle = parseInt(this.value);
        document.getElementById("pc-angle").textContent = angle;
        draw(angle);
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 PCA Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> If first 3 PCs explain 95% variance of 100 features, what does this suggest?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="true">The 100 features were highly correlated/redundant</div>
            <div class="lab-option" data-correct="false">PCA removed important information</div>
            <div class="lab-option" data-correct="false">The data needs more features</div>
            <div class="lab-option" data-correct="false">PCA failed to find patterns</div>
        </div>
        
        <div class="lab-feedback"></div>
    </div>
</div>

<script>
(function() {
    const options = document.querySelectorAll(".lab-option");
    const feedback = document.querySelector(".lab-feedback");
    let answered = false;
    
    options.forEach(opt => {
        opt.onclick = function() {
            if (answered) return;
            answered = true;
            
            const isCorrect = this.dataset.correct === "true";
            this.classList.add(isCorrect ? "correct" : "wrong");
            if (!isCorrect) document.querySelector("[data-correct=\"true\"]").classList.add("correct");
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> If few PCs capture most variance, the original features were correlated and contained redundant information."
                : "❌ <strong>Not quite.</strong> When few components explain most variance, it means original features were highly correlated/redundant.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'The 100 features were highly correlated/redundant'
WHERE id = 245;

-- Lesson 246: Naive Bayes Classifier
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(246, 49, 52, 11, 'Naive Bayes Classifier', 'naive-bayes', 'intermediate', 'Probabilistic classification based on Bayes theorem', 20);

UPDATE lessons SET description = '
<h2>Naive Bayes Classifier</h2>

<p>Naive Bayes is a probabilistic classifier based on Bayes'' theorem with a "naive" assumption of feature independence. Despite its simplicity, it works surprisingly well!</p>

<h3>Bayes Theorem</h3>

<pre class="code-example">
P(A|B) = P(B|A) × P(A) / P(B)

For classification:
P(Class|Features) = P(Features|Class) × P(Class) / P(Features)

Where:
- P(Class|Features) = Posterior (what we want)
- P(Features|Class) = Likelihood 
- P(Class) = Prior probability
- P(Features) = Evidence (constant, can ignore)
</pre>

<h3>The "Naive" Assumption</h3>

<pre class="code-example">
Naive Bayes assumes features are INDEPENDENT given the class:

P(x₁, x₂, ..., xₙ | Class) = P(x₁|Class) × P(x₂|Class) × ... × P(xₙ|Class)

This is rarely true in reality, but still works well!

Example: Email spam detection
P("FREE", "CLICK", "$$$" | Spam) = P("FREE"|Spam) × P("CLICK"|Spam) × P("$$$"|Spam)

Even though these words might be correlated, treating them
as independent still gives good classification results.
</pre>

<h3>Types of Naive Bayes</h3>

<table>
<tr><th>Type</th><th>Feature Distribution</th><th>Use Case</th></tr>
<tr><td>Gaussian NB</td><td>Continuous, normal distribution</td><td>General numeric data</td></tr>
<tr><td>Multinomial NB</td><td>Discrete counts</td><td>Text classification</td></tr>
<tr><td>Bernoulli NB</td><td>Binary (0/1)</td><td>Document classification</td></tr>
</table>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.naive_bayes import GaussianNB, MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer

# For numeric data
gnb = GaussianNB()
gnb.fit(X_train, y_train)
predictions = gnb.predict(X_test)
probabilities = gnb.predict_proba(X_test)

# For text classification
vectorizer = CountVectorizer()
X_train_counts = vectorizer.fit_transform(train_texts)
X_test_counts = vectorizer.transform(test_texts)

mnb = MultinomialNB()
mnb.fit(X_train_counts, y_train)
predictions = mnb.predict(X_test_counts)
</pre>

<h3>Spam Classification Example</h3>

<pre class="code-example">
Training data:
Email 1: "Free money click here" → Spam
Email 2: "Meeting tomorrow at 3pm" → Not Spam
Email 3: "Win free prize now" → Spam

Calculate probabilities:
P(Spam) = 2/3 = 0.67
P(Not Spam) = 1/3 = 0.33

P("free"|Spam) = 2/2 = 1.0
P("free"|Not Spam) = 0/1 = 0.0 (with smoothing: 0.1)

New email: "Free concert tickets"
P(Spam|"free") ∝ P("free"|Spam) × P(Spam) = 1.0 × 0.67 = 0.67
P(Not Spam|"free") ∝ P("free"|Not Spam) × P(Not Spam) = 0.1 × 0.33 = 0.033

→ Classify as SPAM
</pre>

<h3>Pros and Cons</h3>

<table>
<tr><th>✅ Advantages</th><th>❌ Disadvantages</th></tr>
<tr><td>Very fast training and prediction</td><td>Independence assumption often wrong</td></tr>
<tr><td>Works well with high dimensions</td><td>Sensitive to feature scaling</td></tr>
<tr><td>Needs less training data</td><td>Cannot learn feature interactions</td></tr>
<tr><td>Handles missing data well</td><td>Probabilities can be poorly calibrated</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">📧 Interactive Demo</span>
        <span class="demo-title">Naive Bayes: Email Classifier</span>
    </div>
    
    <div class="demo-visual">
        <div style="margin-bottom: 16px;">
            <h4>Enter words (comma-separated):</h4>
            <input type="text" id="nb-input" value="free, money, click" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-light); font-size: 1rem;">
        </div>
        
        <button class="demo-btn" id="nb-classify">🔮 Classify with Naive Bayes</button>
        
        <div id="nb-result" style="display: none; margin-top: 20px;">
            <div style="background: var(--main-bg); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                <h4 style="margin-bottom: 12px;">📊 Probability Calculation</h4>
                <div id="nb-calc" style="font-family: var(--font-mono); font-size: 0.85rem;"></div>
            </div>
            
            <div id="nb-prediction" style="padding: 20px; border-radius: 8px; text-align: center;">
                <div style="font-size: 2.5rem;" id="nb-icon"></div>
                <div style="font-size: 1.2rem; font-weight: 700;" id="nb-label"></div>
                <div style="font-size: 0.9rem;" id="nb-prob"></div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    // Pre-trained probabilities
    const wordProbs = {
        spam: { free: 0.8, money: 0.7, click: 0.75, win: 0.8, prize: 0.7, urgent: 0.6, meeting: 0.1, project: 0.1, hello: 0.2, thanks: 0.2 },
        ham: { free: 0.15, money: 0.2, click: 0.1, win: 0.1, prize: 0.05, urgent: 0.2, meeting: 0.7, project: 0.6, hello: 0.5, thanks: 0.6 }
    };
    const priorSpam = 0.4;
    const priorHam = 0.6;
    
    document.getElementById("nb-classify").onclick = function() {
        const input = document.getElementById("nb-input").value.toLowerCase();
        const words = input.split(",").map(w => w.trim()).filter(w => w);
        
        let pSpam = priorSpam;
        let pHam = priorHam;
        let calcHtml = `<div>Prior: P(Spam)=${priorSpam}, P(Ham)=${priorHam}</div><br>`;
        
        words.forEach(word => {
            const spamProb = wordProbs.spam[word] || 0.5;
            const hamProb = wordProbs.ham[word] || 0.5;
            pSpam *= spamProb;
            pHam *= hamProb;
            calcHtml += `<div>P("${word}"|Spam)=${spamProb} → P(Spam)=${pSpam.toFixed(4)}</div>`;
            calcHtml += `<div>P("${word}"|Ham)=${hamProb} → P(Ham)=${pHam.toFixed(4)}</div><br>`;
        });
        
        // Normalize
        const total = pSpam + pHam;
        const finalSpam = pSpam / total;
        const finalHam = pHam / total;
        
        calcHtml += `<div><strong>Normalized:</strong></div>`;
        calcHtml += `<div>P(Spam|words) = ${(finalSpam * 100).toFixed(1)}%</div>`;
        calcHtml += `<div>P(Ham|words) = ${(finalHam * 100).toFixed(1)}%</div>`;
        
        document.getElementById("nb-calc").innerHTML = calcHtml;
        
        const isSpam = finalSpam > finalHam;
        const resultDiv = document.getElementById("nb-prediction");
        resultDiv.style.background = isSpam ? "#fed7d7" : "#c6f6d5";
        document.getElementById("nb-icon").textContent = isSpam ? "🚫" : "✅";
        document.getElementById("nb-label").textContent = isSpam ? "SPAM" : "Not Spam";
        document.getElementById("nb-label").style.color = isSpam ? "#c53030" : "#276749";
        document.getElementById("nb-prob").textContent = `Confidence: ${(Math.max(finalSpam, finalHam) * 100).toFixed(1)}%`;
        
        document.getElementById("nb-result").style.display = "block";
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Naive Bayes Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Why is Naive Bayes called "naive"?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">It uses simple calculations</div>
            <div class="lab-option" data-correct="true">It assumes all features are independent</div>
            <div class="lab-option" data-correct="false">It was invented by a beginner</div>
            <div class="lab-option" data-correct="false">It ignores the prior probability</div>
        </div>
        
        <div class="lab-feedback"></div>
    </div>
</div>

<script>
(function() {
    const options = document.querySelectorAll(".lab-option");
    const feedback = document.querySelector(".lab-feedback");
    let answered = false;
    
    options.forEach(opt => {
        opt.onclick = function() {
            if (answered) return;
            answered = true;
            
            const isCorrect = this.dataset.correct === "true";
            this.classList.add(isCorrect ? "correct" : "wrong");
            if (!isCorrect) document.querySelector("[data-correct=\"true\"]").classList.add("correct");
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> The naive assumption is that features are conditionally independent given the class, which is rarely true but still works well."
                : "❌ <strong>Not quite.</strong> Naive refers to the independence assumption — assuming features dont influence each other given the class.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'It assumes all features are independent'
WHERE id = 246;
