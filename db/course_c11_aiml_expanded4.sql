-- ============================================================
-- Course C11: AI/ML - MLOps & Production (Lessons 252-256)
-- ============================================================

-- Lesson 252: Hyperparameter Tuning
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(252, 51, 55, 11, 'Hyperparameter Tuning', 'hyperparameter-tuning', 'advanced', 'Optimize model performance with Grid Search, Random Search, and Bayesian methods', 26);

UPDATE lessons SET description = '
<h2>Hyperparameter Tuning</h2>

<p>Hyperparameters are settings that control the learning process itself. Proper tuning can dramatically improve model performance.</p>

<h3>Parameters vs Hyperparameters</h3>

<pre class="code-example">
PARAMETERS (learned during training):
- Neural network weights
- Linear regression coefficients
- Decision tree split thresholds

HYPERPARAMETERS (set before training):
- Learning rate
- Number of layers/neurons
- Tree depth, number of trees
- Regularization strength
</pre>

<h3>Grid Search</h3>

<pre class="code-example">
Try ALL combinations of hyperparameters:

param_grid = {
    "max_depth": [3, 5, 7],
    "n_estimators": [50, 100, 200]
}

Total combinations: 3 × 3 = 9 experiments

Pros: Thorough, finds best in search space
Cons: Exponentially expensive (curse of dimensionality)

from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier()
grid_search = GridSearchCV(
    model, 
    param_grid,
    cv=5,
    scoring="accuracy",
    n_jobs=-1  # Use all CPU cores
)
grid_search.fit(X_train, y_train)

print(f"Best params: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_:.3f}")
</pre>

<h3>Random Search</h3>

<pre class="code-example">
Randomly sample from parameter distributions:

from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

param_dist = {
    "max_depth": randint(3, 20),
    "n_estimators": randint(50, 500),
    "min_samples_split": randint(2, 20),
    "learning_rate": uniform(0.01, 0.3)
}

random_search = RandomizedSearchCV(
    model,
    param_dist,
    n_iter=100,  # Number of random combinations
    cv=5,
    random_state=42,
    n_jobs=-1
)
random_search.fit(X_train, y_train)

Why Random Search often beats Grid Search:
- Same budget explores more of each dimension
- Not all hyperparameters equally important
- Often 60 random trials ≈ exhaustive grid search
</pre>

<h3>Bayesian Optimization</h3>

<pre class="code-example">
SMART search using previous results:

1. Build probabilistic model of objective function
2. Choose next point to maximize expected improvement
3. Evaluate, update model, repeat

# Using Optuna
import optuna

def objective(trial):
    params = {
        "max_depth": trial.suggest_int("max_depth", 3, 20),
        "n_estimators": trial.suggest_int("n_estimators", 50, 500),
        "learning_rate": trial.suggest_float("learning_rate", 0.01, 0.3)
    }
    
    model = XGBClassifier(**params)
    score = cross_val_score(model, X, y, cv=5).mean()
    return score

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=50)

print(f"Best params: {study.best_params}")
print(f"Best score: {study.best_value:.3f}")
</pre>

<h3>Best Practices</h3>

<table>
<tr><th>Tip</th><th>Description</th></tr>
<tr><td>Start coarse, refine</td><td>Wide range first, then zoom in</td></tr>
<tr><td>Use log scale</td><td>For learning rate, regularization</td></tr>
<tr><td>Early stopping</td><td>Dont waste time on bad configs</td></tr>
<tr><td>Validation set</td><td>Never tune on test data!</td></tr>
<tr><td>Track experiments</td><td>Use MLflow, W&B, etc.</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">🔍 Interactive Demo</span>
        <span class="demo-title">Grid Search vs Random Search</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div>
                <h4 style="text-align: center;">Grid Search</h4>
                <canvas id="grid-canvas" width="200" height="200" style="background: #1a1a2e; border-radius: 8px;"></canvas>
                <div style="text-align: center; font-size: 0.85rem; margin-top: 8px;">Points evaluated: <span id="grid-count">0</span></div>
            </div>
            <div>
                <h4 style="text-align: center;">Random Search</h4>
                <canvas id="random-canvas" width="200" height="200" style="background: #1a1a2e; border-radius: 8px;"></canvas>
                <div style="text-align: center; font-size: 0.85rem; margin-top: 8px;">Points evaluated: <span id="random-count">0</span></div>
            </div>
        </div>
        
        <div style="margin-top: 16px;">
            <button class="demo-btn" id="search-run">▶ Run 25 Evaluations</button>
            <button class="demo-btn demo-btn-sm" id="search-reset">Reset</button>
        </div>
        
        <div style="margin-top: 16px; background: var(--main-bg); padding: 12px; border-radius: 8px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; text-align: center;">
                <div>Grid Search Best: <strong id="grid-best">-</strong></div>
                <div>Random Search Best: <strong id="random-best">-</strong></div>
            </div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>Grid search evaluates a fixed grid of points. Random search samples randomly, often exploring more unique values per dimension with the same budget.</p>
        </div>
    </div>
</div>

<script>
(function() {
    const gridCanvas = document.getElementById("grid-canvas");
    const randomCanvas = document.getElementById("random-canvas");
    const gridCtx = gridCanvas.getContext("2d");
    const randomCtx = randomCanvas.getContext("2d");
    
    // True function (unknown to search)
    function trueFunction(x, y) {
        // Peak at (130, 70)
        const dx = x - 130, dy = y - 70;
        return Math.exp(-(dx*dx + dy*dy) / 3000);
    }
    
    function drawBackground(ctx) {
        ctx.fillStyle = "#1a1a2e";
        ctx.fillRect(0, 0, 200, 200);
        
        // Draw heatmap
        for (let x = 0; x < 200; x += 10) {
            for (let y = 0; y < 200; y += 10) {
                const val = trueFunction(x + 5, y + 5);
                const intensity = Math.floor(val * 100);
                ctx.fillStyle = `rgba(76, 154, 255, ${val * 0.3})`;
                ctx.fillRect(x, y, 10, 10);
            }
        }
        
        // Axes labels
        ctx.fillStyle = "#fff";
        ctx.font = "10px sans-serif";
        ctx.fillText("Param 1 →", 70, 195);
        ctx.save();
        ctx.translate(10, 130);
        ctx.rotate(-Math.PI/2);
        ctx.fillText("Param 2 →", 0, 0);
        ctx.restore();
    }
    
    drawBackground(gridCtx);
    drawBackground(randomCtx);
    
    let gridPoints = [];
    let randomPoints = [];
    
    document.getElementById("search-reset").onclick = function() {
        gridPoints = [];
        randomPoints = [];
        drawBackground(gridCtx);
        drawBackground(randomCtx);
        document.getElementById("grid-count").textContent = "0";
        document.getElementById("random-count").textContent = "0";
        document.getElementById("grid-best").textContent = "-";
        document.getElementById("random-best").textContent = "-";
    };
    
    document.getElementById("search-run").onclick = async function() {
        // Grid: 5x5 grid
        const gridStep = 40;
        let gridBest = 0;
        
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const x = 20 + i * gridStep;
                const y = 20 + j * gridStep;
                const score = trueFunction(x, y);
                gridBest = Math.max(gridBest, score);
                
                gridCtx.beginPath();
                gridCtx.arc(x, y, 6, 0, Math.PI * 2);
                gridCtx.fillStyle = score > 0.5 ? "#38a169" : "#e53e3e";
                gridCtx.fill();
                gridCtx.strokeStyle = "#fff";
                gridCtx.lineWidth = 1;
                gridCtx.stroke();
                
                document.getElementById("grid-count").textContent = (i * 5 + j + 1);
                await new Promise(r => setTimeout(r, 50));
            }
        }
        
        // Random: 25 random points
        let randomBest = 0;
        for (let i = 0; i < 25; i++) {
            const x = 10 + Math.random() * 180;
            const y = 10 + Math.random() * 180;
            const score = trueFunction(x, y);
            randomBest = Math.max(randomBest, score);
            
            randomCtx.beginPath();
            randomCtx.arc(x, y, 6, 0, Math.PI * 2);
            randomCtx.fillStyle = score > 0.5 ? "#38a169" : "#e53e3e";
            randomCtx.fill();
            randomCtx.strokeStyle = "#fff";
            randomCtx.lineWidth = 1;
            randomCtx.stroke();
            
            document.getElementById("random-count").textContent = (i + 1);
            await new Promise(r => setTimeout(r, 50));
        }
        
        document.getElementById("grid-best").textContent = gridBest.toFixed(3);
        document.getElementById("random-best").textContent = randomBest.toFixed(3);
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Hyperparameter Tuning Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Why might Random Search outperform Grid Search with same budget?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Random is faster to compute</div>
            <div class="lab-option" data-correct="true">Explores more unique values per dimension</div>
            <div class="lab-option" data-correct="false">Random uses better algorithms</div>
            <div class="lab-option" data-correct="false">Grid Search only works for small datasets</div>
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
                ? "✅ <strong>Correct!</strong> Not all hyperparameters are equally important. Random search explores more unique values for each dimension, increasing chances of finding good values for important params."
                : "❌ <strong>Not quite.</strong> Random search covers more unique values per dimension - if some params matter more than others, youre more likely to find good values for them.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Explores more unique values per dimension'
WHERE id = 252;

-- Lesson 253: Feature Engineering
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(253, 48, 51, 11, 'Feature Engineering', 'feature-engineering', 'intermediate', 'Create powerful features for better model performance', 27);

UPDATE lessons SET description = '
<h2>Feature Engineering</h2>

<p>Feature engineering is the art of creating new features from raw data. Often more impactful than choosing the perfect algorithm!</p>

<h3>Why Feature Engineering Matters</h3>

<pre class="code-example">
"Applied machine learning is basically feature engineering"
                                    - Andrew Ng

Raw data → Feature Engineering → Better predictions

Example: Predicting house prices
Raw: purchase_date = "2020-03-15"

Engineered features:
- year = 2020
- month = 3
- quarter = 1
- day_of_week = Sunday
- is_weekend = True
- days_since_2000 = 7379
- season = Spring
</pre>

<h3>Numeric Feature Transformations</h3>

<pre class="code-example">
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# SCALING
scaler = StandardScaler()  # mean=0, std=1
X_scaled = scaler.fit_transform(X)

minmax = MinMaxScaler()    # range [0,1]
X_normalized = minmax.fit_transform(X)

# LOG TRANSFORM (for skewed data)
X["log_price"] = np.log1p(X["price"])  # log(1+x) for zeros

# BINNING
X["age_group"] = pd.cut(X["age"], 
                        bins=[0, 18, 35, 55, 100],
                        labels=["child", "young", "middle", "senior"])

# POLYNOMIAL FEATURES
from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X[["feature1", "feature2"]])
# Creates: [f1, f2, f1², f2², f1*f2]
</pre>

<h3>Categorical Feature Encoding</h3>

<pre class="code-example">
# ONE-HOT ENCODING
pd.get_dummies(df["color"])  # color_red, color_blue, color_green

from sklearn.preprocessing import OneHotEncoder
encoder = OneHotEncoder(sparse=False)
X_encoded = encoder.fit_transform(X[["color"]])

# LABEL ENCODING (for ordinal categories)
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df["size_encoded"] = le.fit_transform(df["size"])  
# small→0, medium→1, large→2

# TARGET ENCODING (powerful but use carefully!)
# Replace category with mean of target variable
df["city_target_enc"] = df.groupby("city")["price"].transform("mean")
</pre>

<h3>Date/Time Features</h3>

<pre class="code-example">
df["date"] = pd.to_datetime(df["date"])

# Extract components
df["year"] = df["date"].dt.year
df["month"] = df["date"].dt.month
df["day"] = df["date"].dt.day
df["dayofweek"] = df["date"].dt.dayofweek
df["hour"] = df["date"].dt.hour
df["is_weekend"] = df["date"].dt.dayofweek >= 5

# Cyclical encoding (for circular features like hours, months)
df["hour_sin"] = np.sin(2 * np.pi * df["hour"] / 24)
df["hour_cos"] = np.cos(2 * np.pi * df["hour"] / 24)
# Now hour 23 is close to hour 0!
</pre>

<h3>Text Features</h3>

<pre class="code-example">
from sklearn.feature_extraction.text import TfidfVectorizer

# TF-IDF
tfidf = TfidfVectorizer(max_features=1000)
X_tfidf = tfidf.fit_transform(df["text"])

# Simple text stats
df["text_length"] = df["text"].str.len()
df["word_count"] = df["text"].str.split().str.len()
df["has_question"] = df["text"].str.contains("\?").astype(int)
df["caps_ratio"] = df["text"].str.count(r"[A-Z]") / df["text_length"]
</pre>

<h3>Interaction Features</h3>

<pre class="code-example">
# Combine features that might interact
df["price_per_sqft"] = df["price"] / df["sqft"]
df["rooms_per_person"] = df["rooms"] / df["people"]
df["bmi"] = df["weight"] / (df["height"] ** 2)

# Ratio features often very powerful!
df["income_to_debt"] = df["income"] / (df["debt"] + 1)
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">🔧 Interactive Demo</span>
        <span class="demo-title">Feature Engineering: Date Features</span>
    </div>
    
    <div class="demo-visual">
        <div class="demo-field" style="margin-bottom: 16px;">
            <label>Input Date:</label>
            <input type="date" id="fe-date" value="2024-12-25" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-light);">
        </div>
        
        <button class="demo-btn" id="fe-extract">🔄 Extract Features</button>
        
        <div id="fe-output" style="display: none; margin-top: 16px;">
            <h4 style="margin-bottom: 12px;">Extracted Features:</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;" id="fe-features"></div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>A single date field can generate many useful features! These engineered features capture patterns like seasonality, weekday effects, and trends.</p>
        </div>
    </div>
</div>

<script>
(function() {
    document.getElementById("fe-extract").onclick = function() {
        const dateStr = document.getElementById("fe-date").value;
        const date = new Date(dateStr);
        
        const features = {
            "year": date.getFullYear(),
            "month": date.getMonth() + 1,
            "day": date.getDate(),
            "day_of_week": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()],
            "is_weekend": date.getDay() === 0 || date.getDay() === 6 ? "Yes" : "No",
            "quarter": Math.ceil((date.getMonth() + 1) / 3),
            "week_of_year": Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000)),
            "days_in_year": Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000)),
            "is_month_start": date.getDate() <= 5 ? "Yes" : "No",
            "is_month_end": date.getDate() >= 25 ? "Yes" : "No",
            "season": ["Winter", "Winter", "Spring", "Spring", "Spring", "Summer", "Summer", "Summer", "Fall", "Fall", "Fall", "Winter"][date.getMonth()],
            "sin_month": Math.sin(2 * Math.PI * (date.getMonth() + 1) / 12).toFixed(3)
        };
        
        const container = document.getElementById("fe-features");
        container.innerHTML = "";
        
        for (const [name, value] of Object.entries(features)) {
            const div = document.createElement("div");
            div.style.cssText = "background: var(--main-bg); padding: 12px; border-radius: 8px; text-align: center;";
            div.innerHTML = `
                <div style="font-size: 0.8rem; color: var(--text-muted);">${name}</div>
                <div style="font-size: 1.1rem; font-weight: 600; color: #4c9aff;">${value}</div>
            `;
            container.appendChild(div);
        }
        
        document.getElementById("fe-output").style.display = "block";
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Feature Engineering Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> For a "hour of day" feature (0-23), how should you encode it for ML?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Use as-is (numeric 0-23)</div>
            <div class="lab-option" data-correct="false">One-hot encode (24 features)</div>
            <div class="lab-option" data-correct="true">Cyclical encoding (sin/cos)</div>
            <div class="lab-option" data-correct="false">Normalize to 0-1</div>
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
                ? "✅ <strong>Correct!</strong> Hours are cyclical (23 is close to 0). Sin/cos encoding preserves this circular relationship: hour_sin = sin(2π×hour/24), hour_cos = cos(2π×hour/24)."
                : "❌ <strong>Not quite.</strong> Hours are cyclical - 23:00 is close to 00:00. Cyclical encoding (sin/cos) preserves this circular nature.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Cyclical encoding (sin/cos)'
WHERE id = 253;

-- Lesson 254: Model Deployment with Flask
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(254, 51, 55, 11, 'Model Deployment with Flask', 'model-deployment-flask', 'advanced', 'Serve ML models as REST APIs for production use', 28);

UPDATE lessons SET description = '
<h2>Model Deployment with Flask</h2>

<p>Deploying ML models as REST APIs allows other applications to make predictions. Flask provides a simple way to wrap your model in a web service.</p>

<h3>Deployment Overview</h3>

<pre class="code-example">
Training (offline):
Data → Train Model → Save model.pkl

Serving (online):
Request → Load model → Predict → Response

┌────────────┐    ┌──────────────┐    ┌────────────┐
│   Client   │───▶│  Flask API   │───▶│   Model    │
│ (Web/App)  │◀───│  (Server)    │◀───│ (predict)  │
└────────────┘    └──────────────┘    └────────────┘
     JSON              POST              Inference
</pre>

<h3>Save Your Model</h3>

<pre class="code-example">
import joblib
from sklearn.ensemble import RandomForestClassifier

# Train your model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model and preprocessing
joblib.dump(model, "model.pkl")
joblib.dump(scaler, "scaler.pkl")

# Also save feature names for validation
import json
with open("config.json", "w") as f:
    json.dump({"features": list(X_train.columns)}, f)
</pre>

<h3>Flask API Structure</h3>

<pre class="code-example">
# app.py
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load model at startup (once)
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/health", methods=["GET"])
def health():
    """Health check endpoint"""
    return jsonify({"status": "healthy"})

@app.route("/predict", methods=["POST"])
def predict():
    """Main prediction endpoint"""
    try:
        # Get JSON data
        data = request.get_json()
        
        # Extract features
        features = np.array([[
            data["age"],
            data["income"],
            data["score"]
        ]])
        
        # Preprocess
        features_scaled = scaler.transform(features)
        
        # Predict
        prediction = model.predict(features_scaled)[0]
        probability = model.predict_proba(features_scaled)[0]
        
        return jsonify({
            "prediction": int(prediction),
            "probability": float(max(probability)),
            "status": "success"
        })
        
    except Exception as e:
        return jsonify({"error": str(e), "status": "error"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
</pre>

<h3>Client Request Example</h3>

<pre class="code-example">
# Python client
import requests

response = requests.post(
    "http://localhost:5000/predict",
    json={"age": 35, "income": 75000, "score": 720}
)
result = response.json()
print(f"Prediction: {result["prediction"]}")
print(f"Confidence: {result["probability"]*100:.1f}%")

# curl command
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d \'{"age": 35, "income": 75000, "score": 720}\'
</pre>

<h3>Production Best Practices</h3>

<pre class="code-example">
1. INPUT VALIDATION
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    
    # Validate required fields
    required = ["age", "income", "score"]
    if not all(k in data for k in required):
        return jsonify({"error": "Missing fields"}), 400
    
    # Validate types and ranges
    if not 0 < data["age"] < 120:
        return jsonify({"error": "Invalid age"}), 400

2. LOGGING
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    logger.info(f"Prediction request: {request.json}")
    # ...

3. USE GUNICORN FOR PRODUCTION
gunicorn -w 4 -b 0.0.0.0:5000 app:app
# -w 4: 4 worker processes
</pre>

<h3>Dockerize Your API</h3>

<pre class="code-example">
# Dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:5000", "app:app"]

# requirements.txt
flask==2.0.1
gunicorn==20.1.0
scikit-learn==1.0.2
joblib==1.1.0
numpy==1.21.0

# Build and run
docker build -t ml-api .
docker run -p 5000:5000 ml-api
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🚀 Interactive Demo</span>
        <span class="demo-title">Flask API: Prediction Request</span>
    </div>
    
    <div class="demo-visual">
        <h4 style="margin-bottom: 12px;">Loan Approval Predictor</h4>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
            <div class="demo-field">
                <label>Age</label>
                <input type="number" id="api-age" value="35" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
            </div>
            <div class="demo-field">
                <label>Income ($)</label>
                <input type="number" id="api-income" value="75000" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
            </div>
            <div class="demo-field">
                <label>Credit Score</label>
                <input type="number" id="api-score" value="720" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
            </div>
        </div>
        
        <button class="demo-btn" id="api-send">📤 Send POST Request</button>
        
        <div id="api-flow" style="display: none; margin-top: 20px;">
            <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 8px; align-items: center;">
                <div id="api-request" style="background: #e2e8f0; padding: 12px; border-radius: 8px; font-size: 0.75rem; font-family: var(--font-mono);"></div>
                <div style="font-size: 1.5rem;">→</div>
                <div style="background: #bee3f8; padding: 12px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.2rem;">⚙️</div>
                    <div style="font-size: 0.8rem;">Flask API</div>
                </div>
                <div style="font-size: 1.5rem;">→</div>
                <div id="api-response" style="background: #c6f6d5; padding: 12px; border-radius: 8px; font-size: 0.75rem; font-family: var(--font-mono);"></div>
            </div>
        </div>
        
        <div id="api-result" style="display: none; margin-top: 20px; padding: 20px; border-radius: 8px; text-align: center;">
            <div style="font-size: 2rem;" id="api-icon"></div>
            <div style="font-size: 1.2rem; font-weight: 700;" id="api-label"></div>
            <div style="font-size: 0.9rem;" id="api-prob"></div>
        </div>
    </div>
</div>

<script>
(function() {
    document.getElementById("api-send").onclick = async function() {
        const age = parseInt(document.getElementById("api-age").value);
        const income = parseInt(document.getElementById("api-income").value);
        const score = parseInt(document.getElementById("api-score").value);
        
        // Show request
        const reqJson = JSON.stringify({age, income, score}, null, 2);
        document.getElementById("api-request").innerHTML = `POST /predict<br><pre>${reqJson}</pre>`;
        document.getElementById("api-flow").style.display = "block";
        document.getElementById("api-response").textContent = "Processing...";
        document.getElementById("api-result").style.display = "none";
        
        await new Promise(r => setTimeout(r, 800));
        
        // Simulate prediction logic
        const normalizedScore = (score - 300) / 550;
        const normalizedIncome = income / 100000;
        const normalizedAge = (age - 18) / 62;
        const prob = 0.3 + normalizedScore * 0.4 + normalizedIncome * 0.2 + (normalizedAge > 0.3 ? 0.1 : 0);
        const prediction = prob > 0.65 ? 1 : 0;
        
        // Show response
        const response = {
            prediction: prediction,
            probability: parseFloat(prob.toFixed(3)),
            status: "success"
        };
        document.getElementById("api-response").innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
        
        // Show result
        const resultDiv = document.getElementById("api-result");
        if (prediction === 1) {
            resultDiv.style.background = "#c6f6d5";
            document.getElementById("api-icon").textContent = "✅";
            document.getElementById("api-label").textContent = "APPROVED";
            document.getElementById("api-label").style.color = "#276749";
        } else {
            resultDiv.style.background = "#fed7d7";
            document.getElementById("api-icon").textContent = "❌";
            document.getElementById("api-label").textContent = "DENIED";
            document.getElementById("api-label").style.color = "#c53030";
        }
        document.getElementById("api-prob").textContent = `Confidence: ${(prob * 100).toFixed(1)}%`;
        resultDiv.style.display = "block";
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Flask Deployment Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Why use Gunicorn instead of Flasks built-in server in production?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Gunicorn is easier to configure</div>
            <div class="lab-option" data-correct="true">Gunicorn handles multiple concurrent requests with worker processes</div>
            <div class="lab-option" data-correct="false">Flask server cannot load ML models</div>
            <div class="lab-option" data-correct="false">Gunicorn provides better security</div>
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
                ? "✅ <strong>Correct!</strong> Flasks dev server is single-threaded. Gunicorn spawns multiple workers to handle concurrent requests efficiently in production."
                : "❌ <strong>Not quite.</strong> Gunicorn (or uWSGI) provides production-grade concurrency with multiple worker processes, unlike Flasks single-threaded dev server.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Gunicorn handles multiple concurrent requests with worker processes'
WHERE id = 254;

-- Lesson 255: Model Monitoring & MLOps
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(255, 51, 55, 11, 'Model Monitoring & MLOps', 'mlops-monitoring', 'advanced', 'Track model performance and detect drift in production', 29);

UPDATE lessons SET description = '
<h2>Model Monitoring & MLOps</h2>

<p>ML models degrade over time! Production monitoring detects issues before they impact users. MLOps practices ensure reliable ML systems.</p>

<h3>Why Models Fail in Production</h3>

<pre class="code-example">
1. DATA DRIFT: Input distribution changes
   Training: Users aged 20-40
   Production: Users aged 15-60 (new demographics!)

2. CONCEPT DRIFT: Relationship between X and Y changes
   Before COVID: In-person shopping patterns
   After COVID: Online shopping patterns (same features, different meaning!)

3. LABEL DRIFT: Target distribution changes
   Training: 10% fraud rate
   Production: 25% fraud rate (more attacks!)

Models dont know when theyre wrong - YOU have to monitor!
</pre>

<h3>Key Metrics to Track</h3>

<pre class="code-example">
┌─────────────────────────────────────────────────────┐
│            PRODUCTION MONITORING DASHBOARD           │
├─────────────────────────────────────────────────────┤
│                                                      │
│  📊 Model Performance        🔄 Data Quality         │
│  ├─ Accuracy: 94.2%          ├─ Missing: 0.1%       │
│  ├─ Precision: 92.1%         ├─ Outliers: 2.3%      │
│  ├─ Recall: 96.5%            └─ Schema errors: 0    │
│  └─ F1: 94.3%                                       │
│                                                      │
│  ⚡ Latency                   📈 Throughput          │
│  ├─ P50: 45ms                ├─ Requests: 12.3k/hr  │
│  ├─ P95: 120ms               └─ Errors: 0.02%       │
│  └─ P99: 250ms                                      │
│                                                      │
│  🎯 Business Metrics                                 │
│  ├─ Conversions: +12%                               │
│  └─ False positives: 3.2%                           │
│                                                      │
└─────────────────────────────────────────────────────┘
</pre>

<h3>Detecting Data Drift</h3>

<pre class="code-example">
from scipy import stats
import numpy as np

def detect_drift(reference_data, new_data, threshold=0.05):
    """Use KS test to detect distribution drift"""
    results = {}
    
    for column in reference_data.columns:
        statistic, p_value = stats.ks_2samp(
            reference_data[column],
            new_data[column]
        )
        
        results[column] = {
            "statistic": statistic,
            "p_value": p_value,
            "drift_detected": p_value < threshold
        }
        
        if p_value < threshold:
            print(f"⚠️ DRIFT in {column}: p={p_value:.4f}")
    
    return results

# Monitor weekly
drift_results = detect_drift(train_data, this_week_data)
</pre>

<h3>MLOps Pipeline</h3>

<pre class="code-example">
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Data      │───▶│   Train     │───▶│   Evaluate  │
│  Pipeline   │    │   Model     │    │   & Test    │
└─────────────┘    └─────────────┘    └─────────────┘
       │                                     │
       │                                     ▼
       │                            ┌─────────────┐
       │                            │   Register  │
       │                            │   Model     │
       │                            └─────────────┘
       │                                     │
       ▼                                     ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Monitor   │◀───│   Serve     │◀───│   Deploy    │
│   & Alert   │    │   API       │    │   (CD)      │
└─────────────┘    └─────────────┘    └─────────────┘
       │
       ▼
Retrain if drift detected!
</pre>

<h3>Setting Up Alerts</h3>

<pre class="code-example">
# Example with simple thresholds
import logging

def check_model_health(metrics):
    alerts = []
    
    # Performance degradation
    if metrics["accuracy"] < 0.90:
        alerts.append("⚠️ Accuracy dropped below 90%!")
    
    # Latency spike
    if metrics["p95_latency"] > 200:
        alerts.append("⚠️ P95 latency exceeds 200ms!")
    
    # Error rate
    if metrics["error_rate"] > 0.01:
        alerts.append("🚨 Error rate above 1%!")
    
    # Prediction distribution shift
    if metrics["positive_rate"] > 0.30:
        alerts.append("⚠️ Unusual positive prediction rate!")
    
    for alert in alerts:
        logging.warning(alert)
        send_slack_notification(alert)
    
    return alerts

# Run hourly
check_model_health(get_current_metrics())
</pre>

<h3>Tools for MLOps</h3>

<table>
<tr><th>Category</th><th>Tools</th></tr>
<tr><td>Experiment Tracking</td><td>MLflow, Weights & Biases, Neptune</td></tr>
<tr><td>Model Registry</td><td>MLflow, DVC, Kubeflow</td></tr>
<tr><td>Serving</td><td>TensorFlow Serving, Seldon, BentoML</td></tr>
<tr><td>Monitoring</td><td>Evidently, Whylogs, Arize</td></tr>
<tr><td>Orchestration</td><td>Airflow, Kubeflow, Prefect</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">📉 Interactive Demo</span>
        <span class="demo-title">Model Drift Detection</span>
    </div>
    
    <div class="demo-visual">
        <h4 style="margin-bottom: 12px;">Weekly Accuracy Trend</h4>
        
        <canvas id="drift-chart" width="400" height="200" style="background: #fafafa; border-radius: 8px;"></canvas>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
            <div style="background: var(--main-bg); padding: 12px; border-radius: 8px;">
                <div style="font-size: 0.85rem; color: var(--text-muted);">Current Accuracy</div>
                <div style="font-size: 1.5rem; font-weight: 700;" id="drift-accuracy">94.5%</div>
            </div>
            <div style="background: var(--main-bg); padding: 12px; border-radius: 8px;">
                <div style="font-size: 0.85rem; color: var(--text-muted);">Status</div>
                <div style="font-size: 1.5rem; font-weight: 700;" id="drift-status">✅ Healthy</div>
            </div>
        </div>
        
        <button class="demo-btn" id="drift-simulate" style="margin-top: 16px;">📊 Simulate Drift</button>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>Models can degrade over time due to data drift. Regular monitoring and alerts help catch issues before they impact users!</p>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("drift-chart");
    const ctx = canvas.getContext("2d");
    
    let weeks = [1, 2, 3, 4, 5, 6, 7, 8];
    let accuracies = [94.5, 94.3, 94.6, 94.2, 94.4, 94.1, 94.3, 94.5];
    
    function drawChart() {
        ctx.clearRect(0, 0, 400, 200);
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, 400, 200);
        
        // Draw axes
        ctx.strokeStyle = "#e2e8f0";
        ctx.beginPath();
        ctx.moveTo(40, 20);
        ctx.lineTo(40, 170);
        ctx.lineTo(380, 170);
        ctx.stroke();
        
        // Draw threshold line at 90%
        ctx.strokeStyle = "#e53e3e";
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        const threshold = 170 - (90 - 85) * 10;
        ctx.moveTo(40, threshold);
        ctx.lineTo(380, threshold);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = "#e53e3e";
        ctx.font = "10px sans-serif";
        ctx.fillText("Alert: 90%", 340, threshold - 5);
        
        // Draw line
        ctx.strokeStyle = "#4c9aff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        accuracies.forEach((acc, i) => {
            const x = 50 + i * 42;
            const y = 170 - (acc - 85) * 10;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();
        
        // Draw points
        accuracies.forEach((acc, i) => {
            const x = 50 + i * 42;
            const y = 170 - (acc - 85) * 10;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = acc < 90 ? "#e53e3e" : "#4c9aff";
            ctx.fill();
        });
        
        // X-axis labels
        ctx.fillStyle = "#718096";
        ctx.font = "10px sans-serif";
        weeks.forEach((w, i) => {
            ctx.fillText("W" + w, 45 + i * 42, 185);
        });
    }
    
    drawChart();
    
    document.getElementById("drift-simulate").onclick = async function() {
        // Simulate drift
        const driftAccuracies = [93.8, 92.5, 91.0, 89.5, 88.0];
        
        for (let i = 0; i < driftAccuracies.length; i++) {
            weeks.push(weeks.length + 1);
            accuracies.push(driftAccuracies[i]);
            if (weeks.length > 12) {
                weeks.shift();
                accuracies.shift();
            }
            
            drawChart();
            
            document.getElementById("drift-accuracy").textContent = driftAccuracies[i].toFixed(1) + "%";
            
            if (driftAccuracies[i] < 90) {
                document.getElementById("drift-status").textContent = "⚠️ ALERT!";
                document.getElementById("drift-status").style.color = "#c53030";
            }
            
            await new Promise(r => setTimeout(r, 500));
        }
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 MLOps Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What is "concept drift" in production ML?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">The model weights changing over time</div>
            <div class="lab-option" data-correct="false">Input data having different distributions</div>
            <div class="lab-option" data-correct="true">The relationship between features and target changing</div>
            <div class="lab-option" data-correct="false">The API response time increasing</div>
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
                ? "✅ <strong>Correct!</strong> Concept drift means the patterns learned during training no longer apply - the underlying relationship between inputs and outputs has changed."
                : "❌ <strong>Not quite.</strong> Concept drift is when the relationship between X and Y changes, making the learned patterns obsolete (different from data drift).";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'The relationship between features and target changing'
WHERE id = 255;

-- Lesson 256: Natural Language Processing Intro
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(256, 50, 56, 11, 'Natural Language Processing', 'nlp-introduction', 'advanced', 'Process and analyze text data with NLP techniques', 30);

UPDATE lessons SET description = '
<h2>Natural Language Processing (NLP)</h2>

<p>NLP enables computers to understand, interpret, and generate human language. Its behind chatbots, translation, sentiment analysis, and more.</p>

<h3>NLP Pipeline</h3>

<pre class="code-example">
Raw Text → Preprocessing → Feature Extraction → Model → Output

"The cats are playing!"
        ↓
Tokenize: ["The", "cats", "are", "playing", "!"]
        ↓
Lowercase: ["the", "cats", "are", "playing", "!"]
        ↓
Remove punctuation: ["the", "cats", "are", "playing"]
        ↓
Lemmatize: ["the", "cat", "be", "play"]
        ↓
Remove stopwords: ["cat", "play"]
        ↓
Vectorize: [0, 0, 1, 0, 0, 0, 1, 0, ...]
</pre>

<h3>Text Preprocessing</h3>

<pre class="code-example">
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import re

# Download required data
nltk.download("punkt")
nltk.download("stopwords")
nltk.download("wordnet")

def preprocess_text(text):
    # Lowercase
    text = text.lower()
    
    # Remove special characters
    text = re.sub(r"[^a-z\s]", "", text)
    
    # Tokenize
    tokens = word_tokenize(text)
    
    # Remove stopwords
    stop_words = set(stopwords.words("english"))
    tokens = [t for t in tokens if t not in stop_words]
    
    # Lemmatize
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(t) for t in tokens]
    
    return tokens

preprocess_text("The cats are playing in the garden!")
# Output: ["cat", "playing", "garden"]
</pre>

<h3>Text Vectorization</h3>

<pre class="code-example">
# BAG OF WORDS
from sklearn.feature_extraction.text import CountVectorizer

corpus = ["I love machine learning",
          "Machine learning is amazing",
          "Deep learning is a subset"]

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)
print(vectorizer.get_feature_names_out())
# [amazing, deep, is, learning, love, machine, subset]

# TF-IDF (better than raw counts)
from sklearn.feature_extraction.text import TfidfVectorizer

tfidf = TfidfVectorizer()
X_tfidf = tfidf.fit_transform(corpus)
# Words common across documents get lower weights
# Rare/distinctive words get higher weights
</pre>

<h3>Word Embeddings</h3>

<pre class="code-example">
Word embeddings capture semantic meaning!

king - man + woman ≈ queen

Using pre-trained embeddings (Word2Vec, GloVe):

from gensim.models import Word2Vec
from gensim.downloader import load

# Load pre-trained GloVe
glove = load("glove-wiki-gigaword-100")

# Find similar words
glove.most_similar("python")
# [(programming, 0.72), (perl, 0.68), (language, 0.65), ...]

# Word arithmetic
glove.most_similar(positive=["king", "woman"], negative=["man"])
# [(queen, 0.89), (princess, 0.74), ...]
</pre>

<h3>Common NLP Tasks</h3>

<table>
<tr><th>Task</th><th>Description</th><th>Example</th></tr>
<tr><td>Sentiment Analysis</td><td>Detect positive/negative tone</td><td>"Great product!" → Positive</td></tr>
<tr><td>Named Entity Recognition</td><td>Identify names, places, orgs</td><td>"Apple in Cupertino" → [Apple/ORG, Cupertino/LOC]</td></tr>
<tr><td>Text Classification</td><td>Categorize documents</td><td>Email → Spam/Not Spam</td></tr>
<tr><td>Machine Translation</td><td>Translate between languages</td><td>English → Spanish</td></tr>
<tr><td>Question Answering</td><td>Answer questions from text</td><td>ChatGPT, search engines</td></tr>
<tr><td>Summarization</td><td>Condense long texts</td><td>Article → Summary</td></tr>
</table>

<h3>Modern NLP: Transformers</h3>

<pre class="code-example">
# Using Hugging Face Transformers
from transformers import pipeline

# Sentiment analysis
classifier = pipeline("sentiment-analysis")
classifier("I love this product!")
# [{label: POSITIVE, score: 0.9998}]

# Named Entity Recognition
ner = pipeline("ner")
ner("Apple was founded by Steve Jobs in Cupertino")
# [{entity: ORG, word: Apple}, {entity: PER, word: Steve Jobs}, ...]

# Question Answering
qa = pipeline("question-answering")
qa(question="Who founded Apple?",
   context="Apple was founded by Steve Jobs in 1976.")
# {answer: Steve Jobs, score: 0.98}
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">📝 Interactive Demo</span>
        <span class="demo-title">NLP Text Preprocessing</span>
    </div>
    
    <div class="demo-visual">
        <div class="demo-field" style="margin-bottom: 16px;">
            <label>Enter text to preprocess:</label>
            <textarea id="nlp-input" rows="3" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-light); resize: vertical;">The quick brown foxes are jumping over the lazy dogs! Its amazing.</textarea>
        </div>
        
        <button class="demo-btn" id="nlp-process">🔄 Process Text</button>
        
        <div id="nlp-steps" style="display: none; margin-top: 20px;"></div>
    </div>
</div>

<script>
(function() {
    const stopwords = ["the", "a", "an", "is", "are", "was", "were", "it", "its", "be", "been", "being", "have", "has", "had", "do", "does", "did", "will", "would", "could", "should", "may", "might", "must", "over", "under", "again", "further", "then", "once"];
    
    function lemmatize(word) {
        const lemmas = {
            "foxes": "fox", "dogs": "dog", "jumping": "jump", "running": "run",
            "cats": "cat", "playing": "play", "amazing": "amaze", "quickly": "quick"
        };
        return lemmas[word] || word;
    }
    
    document.getElementById("nlp-process").onclick = async function() {
        const text = document.getElementById("nlp-input").value;
        const container = document.getElementById("nlp-steps");
        container.innerHTML = "";
        container.style.display = "block";
        
        const steps = [];
        
        // Step 1: Original
        steps.push({name: "Original", result: text});
        
        // Step 2: Lowercase
        let processed = text.toLowerCase();
        steps.push({name: "Lowercase", result: processed});
        
        // Step 3: Remove punctuation
        processed = processed.replace(/[^a-z\s]/g, "");
        steps.push({name: "Remove Punctuation", result: processed});
        
        // Step 4: Tokenize
        let tokens = processed.split(/\s+/).filter(t => t.length > 0);
        steps.push({name: "Tokenize", result: JSON.stringify(tokens)});
        
        // Step 5: Remove stopwords
        tokens = tokens.filter(t => !stopwords.includes(t));
        steps.push({name: "Remove Stopwords", result: JSON.stringify(tokens)});
        
        // Step 6: Lemmatize
        tokens = tokens.map(t => lemmatize(t));
        steps.push({name: "Lemmatize", result: JSON.stringify(tokens)});
        
        // Animate steps
        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];
            const div = document.createElement("div");
            div.style.cssText = "background: var(--main-bg); padding: 12px; border-radius: 8px; margin-bottom: 8px; opacity: 0; transition: opacity 0.3s;";
            div.innerHTML = `
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">Step ${i + 1}: ${step.name}</div>
                <div style="font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">${step.result}</div>
            `;
            container.appendChild(div);
            
            await new Promise(r => setTimeout(r, 300));
            div.style.opacity = "1";
        }
        
        // Final token count
        const final = document.createElement("div");
        final.style.cssText = "background: #c6f6d5; padding: 16px; border-radius: 8px; margin-top: 12px; text-align: center;";
        final.innerHTML = `<strong>${tokens.length}</strong> meaningful tokens extracted!`;
        container.appendChild(final);
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 NLP Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What advantage does TF-IDF have over simple word counts (Bag of Words)?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">It runs faster</div>
            <div class="lab-option" data-correct="true">It downweights common words and emphasizes distinctive terms</div>
            <div class="lab-option" data-correct="false">It preserves word order</div>
            <div class="lab-option" data-correct="false">It reduces vocabulary size</div>
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
                ? "✅ <strong>Correct!</strong> TF-IDF gives lower weights to words appearing in many documents (like the, is) and higher weights to distinctive terms that characterize specific documents."
                : "❌ <strong>Not quite.</strong> TF-IDF weighs terms by their distinctiveness - common words get low scores while rare/distinctive words get high scores.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'It downweights common words and emphasizes distinctive terms'
WHERE id = 256;
