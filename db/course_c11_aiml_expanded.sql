-- ============================================================
-- Course C11: AI/ML Fundamentals - Expanded Lessons (11-30)
-- ============================================================

-- Add more levels for organization
INSERT INTO levels (id, course_id, title, description, sort_order) VALUES
(52, 11, 'Classification Algorithms', 'Master classification techniques for categorizing data', 7),
(53, 11, 'Regression & Clustering', 'Predict values and discover patterns in data', 8),
(54, 11, 'Advanced Neural Networks', 'CNNs, RNNs, and modern architectures', 9),
(55, 11, 'Production ML', 'Deploy, monitor, and maintain ML systems', 10);

-- ============================================================
-- CLASSIFICATION ALGORITHMS (Lessons 237-241)
-- ============================================================

INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(237, 49, 52, 11, 'Logistic Regression', 'logistic-regression', 'intermediate', 'Binary classification using the sigmoid function', 11);

UPDATE lessons SET description = '
<h2>Logistic Regression</h2>

<p>Despite its name, Logistic Regression is a <strong>classification</strong> algorithm. It predicts the probability of a binary outcome (Yes/No, Spam/Not Spam, etc.).</p>

<h3>The Sigmoid Function</h3>

<pre class="code-example">
σ(z) = 1 / (1 + e^(-z))

Properties:
- Output always between 0 and 1
- When z = 0, output = 0.5
- When z → ∞, output → 1
- When z → -∞, output → 0

Graph:
  1 |          ___________
    |        /
0.5 |-------•---------------
    |      /
  0 |_____/
    -∞    0    ∞
</pre>

<h3>How It Works</h3>

<pre class="code-example">
# Step 1: Linear combination (like linear regression)
z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b

# Step 2: Apply sigmoid to get probability
P(y=1) = σ(z) = 1 / (1 + e^(-z))

# Step 3: Classify based on threshold (usually 0.5)
if P(y=1) >= 0.5:
    prediction = 1  # Positive class
else:
    prediction = 0  # Negative class
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Sample: Predicting diabetes
# Features: glucose, BMI, age, etc.
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create and train model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Predict probabilities
probabilities = model.predict_proba(X_test)
# Returns: [[P(class=0), P(class=1)], ...]

# Predict classes
predictions = model.predict(X_test)

# Get coefficients (feature importance)
for feature, coef in zip(feature_names, model.coef_[0]):
    print(f"{feature}: {coef:.3f}")
</pre>

<h3>Decision Boundary</h3>

<pre class="code-example">
# The decision boundary is where P(y=1) = 0.5
# This happens when z = 0

w₁x₁ + w₂x₂ + b = 0

# This is a LINE (in 2D) or PLANE (in higher dimensions)
# Points on one side → Class 0
# Points on other side → Class 1
</pre>

<h3>When to Use Logistic Regression</h3>

<table>
<tr><th>✅ Use When</th><th>❌ Avoid When</th></tr>
<tr><td>Binary classification problems</td><td>Multi-class with complex boundaries</td></tr>
<tr><td>Need interpretable model</td><td>Non-linear relationships</td></tr>
<tr><td>Baseline model needed</td><td>Very high dimensional data</td></tr>
<tr><td>Fast training required</td><td>Need probability calibration</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">📊 Interactive Demo</span>
        <span class="demo-title">Logistic Regression: Spam Detector</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div>
                <h4 style="margin-bottom: 12px;">📧 Email Features</h4>
                
                <div class="demo-field">
                    <label>Contains "FREE" (0-10 times)</label>
                    <input type="range" id="feat-free" min="0" max="10" value="0" style="width: 100%;">
                    <span id="feat-free-val" style="font-weight: 600;">0</span>
                </div>
                
                <div class="demo-field">
                    <label>Contains "URGENT" (0-10 times)</label>
                    <input type="range" id="feat-urgent" min="0" max="10" value="0" style="width: 100%;">
                    <span id="feat-urgent-val" style="font-weight: 600;">0</span>
                </div>
                
                <div class="demo-field">
                    <label>Contains "CLICK HERE" (0-10 times)</label>
                    <input type="range" id="feat-click" min="0" max="10" value="0" style="width: 100%;">
                    <span id="feat-click-val" style="font-weight: 600;">0</span>
                </div>
                
                <div class="demo-field">
                    <label>Has Unsubscribe Link</label>
                    <select id="feat-unsub" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px;">🧮 Logistic Regression</h4>
                
                <div style="background: #1a1a2e; color: #e0e0e0; padding: 16px; border-radius: 8px; font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 16px;">
                    <div style="color: #68d391;">// Learned Weights</div>
                    <div>w_free = 0.8</div>
                    <div>w_urgent = 0.6</div>
                    <div>w_click = 0.9</div>
                    <div>w_unsub = -1.5</div>
                    <div>bias = -2.0</div>
                    <div style="margin-top: 8px; color: #ffd700;" id="z-calc"></div>
                    <div style="color: #4c9aff;" id="sigmoid-calc"></div>
                </div>
                
                <div id="spam-result" style="padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 8px;" id="spam-icon">📧</div>
                    <div style="font-size: 1.2rem; font-weight: 700;" id="spam-label">Not Spam</div>
                    <div style="font-size: 0.9rem;" id="spam-prob">Probability: 5%</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const weights = { free: 0.8, urgent: 0.6, click: 0.9, unsub: -1.5 };
    const bias = -2.0;
    
    function sigmoid(z) { return 1 / (1 + Math.exp(-z)); }
    
    function updatePrediction() {
        const free = parseInt(document.getElementById("feat-free").value);
        const urgent = parseInt(document.getElementById("feat-urgent").value);
        const click = parseInt(document.getElementById("feat-click").value);
        const unsub = parseInt(document.getElementById("feat-unsub").value);
        
        document.getElementById("feat-free-val").textContent = free;
        document.getElementById("feat-urgent-val").textContent = urgent;
        document.getElementById("feat-click-val").textContent = click;
        
        const z = weights.free * free + weights.urgent * urgent + weights.click * click + weights.unsub * unsub + bias;
        const prob = sigmoid(z);
        
        document.getElementById("z-calc").textContent = `z = ${z.toFixed(2)}`;
        document.getElementById("sigmoid-calc").textContent = `σ(z) = ${(prob * 100).toFixed(1)}%`;
        
        const resultDiv = document.getElementById("spam-result");
        const isSpam = prob >= 0.5;
        
        resultDiv.style.background = isSpam ? "#fed7d7" : "#c6f6d5";
        document.getElementById("spam-icon").textContent = isSpam ? "🚫" : "✅";
        document.getElementById("spam-label").textContent = isSpam ? "SPAM" : "Not Spam";
        document.getElementById("spam-label").style.color = isSpam ? "#c53030" : "#276749";
        document.getElementById("spam-prob").textContent = `Probability: ${(prob * 100).toFixed(1)}%`;
    }
    
    ["feat-free", "feat-urgent", "feat-click", "feat-unsub"].forEach(id => {
        document.getElementById(id).addEventListener("input", updatePrediction);
    });
    
    updatePrediction();
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Logistic Regression Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> If σ(z) = 0.73, what is the predicted class (threshold = 0.5)?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Class 0 (Negative)</div>
            <div class="lab-option" data-correct="true">Class 1 (Positive)</div>
            <div class="lab-option" data-correct="false">Cannot determine</div>
            <div class="lab-option" data-correct="false">Need more features</div>
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
                ? "✅ <strong>Correct!</strong> Since 0.73 ≥ 0.5, the model predicts Class 1 (Positive)."
                : "❌ <strong>Not quite.</strong> 0.73 is greater than the threshold 0.5, so Class 1 is predicted.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Class 1 (Positive)'
WHERE id = 237;

-- Lesson 238: Decision Trees
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(238, 49, 52, 11, 'Decision Trees', 'decision-trees', 'intermediate', 'Tree-based classification with interpretable rules', 12);

UPDATE lessons SET description = '
<h2>Decision Trees</h2>

<p>Decision Trees make predictions by learning a series of if-then rules from data. They''re highly interpretable and can capture non-linear relationships.</p>

<h3>How Decision Trees Work</h3>

<pre class="code-example">
Example: Should I play tennis?

                    [Outlook?]
                   /    |    \\
              Sunny   Overcast  Rain
                /        |        \\
         [Humidity?]    YES    [Windy?]
           /    \\              /    \\
        High   Normal       True   False
         |       |           |       |
        NO      YES         NO      YES

Decision path for "Sunny + High Humidity":
Outlook=Sunny → Humidity=High → NO (Don''t play)
</pre>

<h3>Key Concepts</h3>

<table>
<tr><th>Term</th><th>Description</th></tr>
<tr><td><strong>Root Node</strong></td><td>Top node, first split</td></tr>
<tr><td><strong>Internal Node</strong></td><td>Decision point (feature test)</td></tr>
<tr><td><strong>Leaf Node</strong></td><td>Final prediction</td></tr>
<tr><td><strong>Depth</strong></td><td>Number of levels in tree</td></tr>
<tr><td><strong>Gini Impurity</strong></td><td>Measure of node purity</td></tr>
<tr><td><strong>Information Gain</strong></td><td>Reduction in entropy after split</td></tr>
</table>

<h3>Splitting Criteria</h3>

<pre class="code-example">
# Gini Impurity (used by CART)
Gini = 1 - Σ(pᵢ)²

# For binary classification:
Gini = 1 - p₀² - p₁²

Example: 70% Class A, 30% Class B
Gini = 1 - 0.7² - 0.3² = 1 - 0.49 - 0.09 = 0.42

Perfect purity (100% one class): Gini = 0
Worst case (50-50): Gini = 0.5
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Create and train
tree = DecisionTreeClassifier(
    max_depth=4,           # Limit tree depth
    min_samples_split=10,  # Min samples to split
    min_samples_leaf=5,    # Min samples in leaf
    criterion="gini"       # or "entropy"
)
tree.fit(X_train, y_train)

# Visualize the tree
plt.figure(figsize=(20, 10))
plot_tree(tree, feature_names=feature_names, 
          class_names=class_names, filled=True)
plt.show()

# Feature importance
for name, importance in zip(feature_names, tree.feature_importances_):
    print(f"{name}: {importance:.3f}")
</pre>

<h3>Pros and Cons</h3>

<table>
<tr><th>✅ Advantages</th><th>❌ Disadvantages</th></tr>
<tr><td>Easy to understand and visualize</td><td>Prone to overfitting</td></tr>
<tr><td>No feature scaling needed</td><td>Unstable (small data changes = different tree)</td></tr>
<tr><td>Handles non-linear relationships</td><td>Biased toward dominant classes</td></tr>
<tr><td>Works with categorical features</td><td>Can create overly complex trees</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">🌳 Interactive Demo</span>
        <span class="demo-title">Decision Tree: Loan Approval</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div>
                <h4 style="margin-bottom: 12px;">📋 Applicant Info</h4>
                
                <div class="demo-field">
                    <label>Income Level</label>
                    <select id="dt-income" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                        <option value="high">High (>$80k)</option>
                        <option value="medium">Medium ($40k-$80k)</option>
                        <option value="low">Low (<$40k)</option>
                    </select>
                </div>
                
                <div class="demo-field">
                    <label>Credit Score</label>
                    <select id="dt-credit" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                        <option value="excellent">Excellent (750+)</option>
                        <option value="good">Good (650-749)</option>
                        <option value="poor">Poor (<650)</option>
                    </select>
                </div>
                
                <div class="demo-field">
                    <label>Employment Years</label>
                    <select id="dt-employment" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                        <option value="long">5+ years</option>
                        <option value="medium">2-5 years</option>
                        <option value="short"><2 years</option>
                    </select>
                </div>
                
                <button class="demo-btn" id="dt-predict" style="margin-top: 12px;">🌳 Walk Through Tree</button>
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px;">🌲 Decision Path</h4>
                <div id="dt-path" style="background: var(--main-bg); padding: 16px; border-radius: 8px; min-height: 200px;">
                    <div style="color: var(--text-muted); font-size: 0.9rem;">Click "Walk Through Tree" to see the decision path</div>
                </div>
                
                <div id="dt-result" style="margin-top: 16px; padding: 16px; border-radius: 8px; text-align: center; display: none;">
                    <div style="font-size: 2rem;" id="dt-icon"></div>
                    <div style="font-size: 1.1rem; font-weight: 700;" id="dt-label"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    document.getElementById("dt-predict").onclick = async function() {
        const income = document.getElementById("dt-income").value;
        const credit = document.getElementById("dt-credit").value;
        const employment = document.getElementById("dt-employment").value;
        
        const pathDiv = document.getElementById("dt-path");
        const resultDiv = document.getElementById("dt-result");
        pathDiv.innerHTML = "";
        resultDiv.style.display = "none";
        
        const steps = [];
        let approved = false;
        
        // Decision tree logic
        steps.push({q: "Credit Score?", a: credit, highlight: true});
        
        if (credit === "poor") {
            steps.push({q: "→ Credit is POOR", a: "❌ DENIED", final: true});
            approved = false;
        } else {
            steps.push({q: "Income Level?", a: income, highlight: true});
            
            if (income === "high") {
                steps.push({q: "→ Income is HIGH", a: "✅ APPROVED", final: true});
                approved = true;
            } else if (income === "medium") {
                steps.push({q: "Employment Years?", a: employment, highlight: true});
                
                if (employment === "short") {
                    steps.push({q: "→ Employment < 2 years", a: "❌ DENIED", final: true});
                    approved = false;
                } else {
                    steps.push({q: "→ Stable employment", a: "✅ APPROVED", final: true});
                    approved = true;
                }
            } else {
                steps.push({q: "Employment Years?", a: employment, highlight: true});
                if (employment === "long" && credit === "excellent") {
                    steps.push({q: "→ Long employment + Excellent credit", a: "✅ APPROVED", final: true});
                    approved = true;
                } else {
                    steps.push({q: "→ Low income, insufficient history", a: "❌ DENIED", final: true});
                    approved = false;
                }
            }
        }
        
        // Animate the path
        for (const step of steps) {
            await new Promise(r => setTimeout(r, 500));
            const div = document.createElement("div");
            div.style.cssText = `padding: 8px 12px; margin: 4px 0; border-radius: 6px; ${step.final ? (approved ? "background: #c6f6d5; color: #276749;" : "background: #fed7d7; color: #c53030;") : (step.highlight ? "background: #e2e8f0;" : "")}`;
            div.innerHTML = `<strong>${step.q}</strong> ${step.a}`;
            pathDiv.appendChild(div);
        }
        
        await new Promise(r => setTimeout(r, 300));
        resultDiv.style.display = "block";
        resultDiv.style.background = approved ? "#c6f6d5" : "#fed7d7";
        document.getElementById("dt-icon").textContent = approved ? "✅" : "❌";
        document.getElementById("dt-label").textContent = approved ? "Loan Approved" : "Loan Denied";
        document.getElementById("dt-label").style.color = approved ? "#276749" : "#c53030";
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Decision Tree Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What does a Gini impurity of 0 indicate?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="true">All samples belong to one class (pure node)</div>
            <div class="lab-option" data-correct="false">Equal distribution of all classes</div>
            <div class="lab-option" data-correct="false">The tree has no splits</div>
            <div class="lab-option" data-correct="false">Maximum impurity</div>
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
                ? "✅ <strong>Correct!</strong> Gini = 0 means perfect purity — all samples in that node belong to the same class."
                : "❌ <strong>Not quite.</strong> Gini = 0 indicates a pure node where all samples are from one class. Gini = 0.5 would be maximum impurity for binary classification.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'All samples belong to one class (pure node)'
WHERE id = 238;

-- Lesson 239: Random Forest
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(239, 49, 52, 11, 'Random Forest', 'random-forest', 'intermediate', 'Ensemble of decision trees for robust predictions', 13);

UPDATE lessons SET description = '
<h2>Random Forest</h2>

<p>Random Forest is an <strong>ensemble method</strong> that builds multiple decision trees and combines their predictions. It''s one of the most powerful and widely-used algorithms.</p>

<h3>The Concept: Wisdom of the Crowd</h3>

<pre class="code-example">
Single Decision Tree:
- One tree makes a prediction
- Can overfit to training data
- Unstable (small changes = different tree)

Random Forest:
- Many trees vote on the prediction
- Each tree sees different data (bagging)
- Each tree uses random features
- Final prediction = majority vote (classification)
                   or average (regression)
</pre>

<h3>How Random Forest Works</h3>

<pre class="code-example">
For each tree in the forest:
1. BOOTSTRAP SAMPLING: Take random sample (with replacement)
   - Original: [A, B, C, D, E]
   - Sample 1: [A, A, C, D, E]  (some duplicates, some missing)
   - Sample 2: [B, C, C, D, D]
   
2. RANDOM FEATURE SELECTION: At each split, consider only
   √n features (classification) or n/3 features (regression)
   - All features: [age, income, credit, employment, debt]
   - Random subset: [income, debt] ← only these considered
   
3. BUILD TREE: Grow tree on bootstrap sample with random features

4. NO PRUNING: Let trees grow deep (high variance, low bias)

Final Prediction:
- Classification: Majority vote from all trees
- Regression: Average of all predictions
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.ensemble import RandomForestClassifier

# Create model
rf = RandomForestClassifier(
    n_estimators=100,      # Number of trees
    max_depth=10,          # Max depth per tree
    min_samples_split=5,   # Min samples to split
    max_features="sqrt",   # Features per split
    n_jobs=-1,             # Use all CPU cores
    random_state=42
)

# Train
rf.fit(X_train, y_train)

# Predict
predictions = rf.predict(X_test)
probabilities = rf.predict_proba(X_test)

# Feature importance (averaged across all trees)
importance = pd.DataFrame({
    "feature": feature_names,
    "importance": rf.feature_importances_
}).sort_values("importance", ascending=False)
</pre>

<h3>Out-of-Bag (OOB) Error</h3>

<pre class="code-example">
# Each tree doesn''t see ~37% of data (out-of-bag samples)
# We can use these to estimate error without a test set!

rf = RandomForestClassifier(n_estimators=100, oob_score=True)
rf.fit(X_train, y_train)

print(f"OOB Score: {rf.oob_score_:.3f}")
# No need for separate validation set!
</pre>

<h3>Hyperparameter Tuning</h3>

<table>
<tr><th>Parameter</th><th>Effect</th><th>Typical Values</th></tr>
<tr><td><code>n_estimators</code></td><td>More trees = better (diminishing returns)</td><td>100-500</td></tr>
<tr><td><code>max_depth</code></td><td>Deeper = more complex, risk of overfitting</td><td>10-30 or None</td></tr>
<tr><td><code>min_samples_split</code></td><td>Higher = more regularization</td><td>2-10</td></tr>
<tr><td><code>max_features</code></td><td>Lower = more diversity between trees</td><td>"sqrt", "log2"</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">🌲 Interactive Demo</span>
        <span class="demo-title">Random Forest: Ensemble Voting</span>
    </div>
    
    <div class="demo-visual">
        <h4 style="margin-bottom: 12px;">🗳️ How 5 Trees Vote on Classification</h4>
        
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 20px;">
            <div class="rf-tree" id="tree-0" style="background: var(--main-bg); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 1.5rem;">🌲</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Tree 1</div>
                <div style="font-size: 0.8rem; margin-top: 8px;">Features: A, C</div>
                <div id="vote-0" style="font-size: 1.2rem; font-weight: 700; margin-top: 8px;">?</div>
            </div>
            <div class="rf-tree" id="tree-1" style="background: var(--main-bg); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 1.5rem;">🌲</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Tree 2</div>
                <div style="font-size: 0.8rem; margin-top: 8px;">Features: B, D</div>
                <div id="vote-1" style="font-size: 1.2rem; font-weight: 700; margin-top: 8px;">?</div>
            </div>
            <div class="rf-tree" id="tree-2" style="background: var(--main-bg); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 1.5rem;">🌲</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Tree 3</div>
                <div style="font-size: 0.8rem; margin-top: 8px;">Features: A, B</div>
                <div id="vote-2" style="font-size: 1.2rem; font-weight: 700; margin-top: 8px;">?</div>
            </div>
            <div class="rf-tree" id="tree-3" style="background: var(--main-bg); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 1.5rem;">🌲</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Tree 4</div>
                <div style="font-size: 0.8rem; margin-top: 8px;">Features: C, D</div>
                <div id="vote-3" style="font-size: 1.2rem; font-weight: 700; margin-top: 8px;">?</div>
            </div>
            <div class="rf-tree" id="tree-4" style="background: var(--main-bg); padding: 16px; border-radius: 8px; text-align: center;">
                <div style="font-size: 1.5rem;">🌲</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Tree 5</div>
                <div style="font-size: 0.8rem; margin-top: 8px;">Features: A, D</div>
                <div id="vote-4" style="font-size: 1.2rem; font-weight: 700; margin-top: 8px;">?</div>
            </div>
        </div>
        
        <div style="display: flex; gap: 16px; align-items: center; justify-content: center;">
            <button class="demo-btn" id="rf-vote">🗳️ Run Voting</button>
            <div id="rf-result" style="background: var(--card-bg); border: 2px solid var(--border-light); padding: 16px 24px; border-radius: 8px; display: none;">
                <div style="font-size: 0.8rem; color: var(--text-muted);">Final Prediction</div>
                <div style="font-size: 1.5rem; font-weight: 700;" id="rf-final"></div>
                <div style="font-size: 0.85rem;" id="rf-votes"></div>
            </div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>Each tree uses different random features and bootstrap samples, making them diverse. The ensemble is more robust than any single tree!</p>
        </div>
    </div>
</div>

<script>
(function() {
    document.getElementById("rf-vote").onclick = async function() {
        const votes = [];
        const classes = ["🍎 Apple", "🍊 Orange"];
        
        // Reset
        for (let i = 0; i < 5; i++) {
            document.getElementById("vote-" + i).textContent = "?";
            document.getElementById("tree-" + i).style.borderColor = "";
        }
        document.getElementById("rf-result").style.display = "none";
        
        // Simulate voting
        for (let i = 0; i < 5; i++) {
            await new Promise(r => setTimeout(r, 400));
            const vote = Math.random() > 0.35 ? 0 : 1;  // Slightly biased toward Apple
            votes.push(vote);
            
            const voteEl = document.getElementById("vote-" + i);
            voteEl.textContent = classes[vote];
            document.getElementById("tree-" + i).style.border = `2px solid ${vote === 0 ? "#e53e3e" : "#f59e0b"}`;
        }
        
        // Count votes
        await new Promise(r => setTimeout(r, 500));
        const appleVotes = votes.filter(v => v === 0).length;
        const orangeVotes = votes.filter(v => v === 1).length;
        const winner = appleVotes > orangeVotes ? 0 : 1;
        
        const resultDiv = document.getElementById("rf-result");
        resultDiv.style.display = "block";
        resultDiv.style.borderColor = winner === 0 ? "#e53e3e" : "#f59e0b";
        document.getElementById("rf-final").textContent = classes[winner];
        document.getElementById("rf-votes").textContent = `Votes: ${appleVotes} Apple, ${orangeVotes} Orange`;
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Random Forest Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What is "bagging" in Random Forest?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="true">Bootstrap Aggregating - training on random samples with replacement</div>
            <div class="lab-option" data-correct="false">Removing outliers from the dataset</div>
            <div class="lab-option" data-correct="false">Pruning decision trees</div>
            <div class="lab-option" data-correct="false">Feature scaling before training</div>
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
                ? "✅ <strong>Correct!</strong> Bagging = Bootstrap AGGregatING. Each tree trains on a random sample drawn with replacement."
                : "❌ <strong>Not quite.</strong> Bagging is Bootstrap Aggregating — creating diverse training sets by sampling with replacement.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Bootstrap Aggregating - training on random samples with replacement'
WHERE id = 239;

-- Lesson 240: Support Vector Machines (SVM)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(240, 49, 52, 11, 'Support Vector Machines', 'svm', 'intermediate', 'Find the optimal hyperplane for classification', 14);

UPDATE lessons SET description = '
<h2>Support Vector Machines (SVM)</h2>

<p>SVM finds the optimal <strong>hyperplane</strong> that maximally separates classes. It''s powerful for both linear and non-linear classification.</p>

<h3>The Concept: Maximum Margin</h3>

<pre class="code-example">
Goal: Find the line (hyperplane) that:
1. Separates the two classes
2. Has the MAXIMUM margin (distance to nearest points)

     Class B (●)
        ●
        ●    ← Support Vectors
   ════════════════  ← Decision Boundary
        ○    ← Support Vectors
        ○
     Class A (○)

Margin = Distance between boundary and support vectors
Larger margin = Better generalization
</pre>

<h3>Support Vectors</h3>

<pre class="code-example">
Support Vectors are the critical data points:
- Closest points to the decision boundary
- They "support" (define) the hyperplane
- Only these points affect the model
- Removing other points doesn''t change the boundary

This makes SVM memory-efficient!
</pre>

<h3>The Kernel Trick</h3>

<pre class="code-example">
Problem: Data isn''t always linearly separable

   ○ ○ ● ● ● ○ ○    ← Can''t draw a straight line!

Solution: Project data to higher dimensions

Linear Kernel: K(x, y) = x · y
  - For linearly separable data

Polynomial Kernel: K(x, y) = (x · y + c)^d
  - Captures polynomial relationships

RBF (Gaussian) Kernel: K(x, y) = exp(-γ||x - y||²)
  - Most versatile, handles complex boundaries
  - Creates "circular" decision regions
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler

# IMPORTANT: SVM requires scaled features!
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Linear SVM
svm_linear = SVC(kernel="linear", C=1.0)
svm_linear.fit(X_train_scaled, y_train)

# RBF SVM (most common)
svm_rbf = SVC(kernel="rbf", C=1.0, gamma="scale")
svm_rbf.fit(X_train_scaled, y_train)

# Get support vectors
print(f"Number of support vectors: {len(svm_rbf.support_vectors_)}")

# Predict with probabilities
svm_prob = SVC(kernel="rbf", probability=True)
svm_prob.fit(X_train_scaled, y_train)
probabilities = svm_prob.predict_proba(X_test_scaled)
</pre>

<h3>Key Hyperparameters</h3>

<table>
<tr><th>Parameter</th><th>Description</th><th>Effect</th></tr>
<tr><td><code>C</code></td><td>Regularization</td><td>High C = Less regularization, tighter fit</td></tr>
<tr><td><code>gamma</code></td><td>Kernel coefficient</td><td>High gamma = More complex boundaries</td></tr>
<tr><td><code>kernel</code></td><td>Kernel type</td><td>linear, poly, rbf, sigmoid</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">📐 Interactive Demo</span>
        <span class="demo-title">SVM: Finding the Maximum Margin</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr auto; gap: 24px;">
            <div>
                <canvas id="svm-canvas" width="350" height="280" style="background: #fafafa; border-radius: 8px;"></canvas>
            </div>
            
            <div style="min-width: 160px;">
                <div class="demo-field">
                    <label>Kernel</label>
                    <select id="svm-kernel" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                        <option value="linear">Linear</option>
                        <option value="rbf">RBF (Gaussian)</option>
                    </select>
                </div>
                
                <div class="demo-field">
                    <label>C (Regularization): <span id="c-val">1.0</span></label>
                    <input type="range" id="svm-c" min="0.1" max="10" step="0.1" value="1.0" style="width: 100%;">
                </div>
                
                <button class="demo-btn" id="svm-train" style="margin-top: 12px;">Train SVM</button>
                
                <div style="margin-top: 16px; font-size: 0.85rem;">
                    <div style="color: var(--text-muted);">Legend:</div>
                    <div>🔴 Class A</div>
                    <div>🔵 Class B</div>
                    <div>⭕ Support Vectors</div>
                    <div>━━ Decision Boundary</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("svm-canvas");
    const ctx = canvas.getContext("2d");
    
    // Generate sample data
    const classA = Array.from({length: 15}, () => ({x: 80 + Math.random() * 100, y: 60 + Math.random() * 80, c: 0}));
    const classB = Array.from({length: 15}, () => ({x: 180 + Math.random() * 100, y: 140 + Math.random() * 80, c: 1}));
    const data = [...classA, ...classB];
    
    function drawData(supportVectors = [], boundary = null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw decision boundary
        if (boundary) {
            ctx.strokeStyle = "#4c9aff";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(boundary.x1, boundary.y1);
            ctx.lineTo(boundary.x2, boundary.y2);
            ctx.stroke();
            
            // Draw margin lines
            ctx.strokeStyle = "#4c9aff";
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(boundary.x1 - 30, boundary.y1 - 30);
            ctx.lineTo(boundary.x2 - 30, boundary.y2 - 30);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(boundary.x1 + 30, boundary.y1 + 30);
            ctx.lineTo(boundary.x2 + 30, boundary.y2 + 30);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        
        // Draw data points
        data.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = p.c === 0 ? "#e53e3e" : "#3182ce";
            ctx.fill();
            
            // Mark support vectors
            if (supportVectors.includes(i)) {
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 14, 0, Math.PI * 2);
                ctx.stroke();
            }
        });
    }
    
    drawData();
    
    document.getElementById("svm-c").oninput = function() {
        document.getElementById("c-val").textContent = this.value;
    };
    
    document.getElementById("svm-train").onclick = async function() {
        const kernel = document.getElementById("svm-kernel").value;
        
        // Animate training
        this.textContent = "Training...";
        await new Promise(r => setTimeout(r, 500));
        
        // Find support vectors (closest to boundary)
        const svIndices = [];
        if (kernel === "linear") {
            // Simple linear: find points closest to middle
            const sorted = [...data].map((p, i) => ({...p, i})).sort((a, b) => a.x - b.x);
            svIndices.push(sorted[14].i, sorted[15].i, sorted[16].i);
        } else {
            // RBF: more support vectors
            svIndices.push(...[5, 6, 7, 20, 21, 22]);
        }
        
        // Draw boundary
        const boundary = kernel === "linear" 
            ? {x1: 165, y1: 20, x2: 165, y2: 260}
            : {x1: 150, y1: 30, x2: 180, y2: 250};
        
        drawData(svIndices, boundary);
        this.textContent = "Train SVM";
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 SVM Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Which SVM kernel is best for non-linearly separable data?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Linear kernel</div>
            <div class="lab-option" data-correct="true">RBF (Radial Basis Function) kernel</div>
            <div class="lab-option" data-correct="false">No kernel (raw features)</div>
            <div class="lab-option" data-correct="false">Identity kernel</div>
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
                ? "✅ <strong>Correct!</strong> RBF kernel projects data to infinite dimensions, creating complex non-linear decision boundaries."
                : "❌ <strong>Not quite.</strong> RBF (Gaussian) kernel is the go-to choice for non-linear problems as it can model complex boundaries.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'RBF (Radial Basis Function) kernel'
WHERE id = 240;

-- Lesson 241: K-Nearest Neighbors
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(241, 49, 52, 11, 'K-Nearest Neighbors (KNN)', 'knn', 'beginner', 'Classify based on similarity to neighboring data points', 15);

UPDATE lessons SET description = '
<h2>K-Nearest Neighbors (KNN)</h2>

<p>KNN is one of the simplest ML algorithms. It classifies new data points based on the majority class of their K nearest neighbors.</p>

<h3>The Concept</h3>

<pre class="code-example">
"Tell me who your neighbors are, and I''ll tell you who you are"

Algorithm:
1. Choose K (number of neighbors)
2. Calculate distance to all training points
3. Find K nearest neighbors
4. Vote: Majority class wins

     ●     ●
       ●   
    ○    ?    ●    ← New point "?"
       ○
     ○

If K=3: Nearest are [●, ○, ○] → Predict ○
If K=5: Nearest are [●, ●, ●, ○, ○] → Predict ●
</pre>

<h3>Distance Metrics</h3>

<pre class="code-example">
# Euclidean Distance (most common)
d = √[(x₁-x₂)² + (y₁-y₂)²]

# Manhattan Distance (city block)
d = |x₁-x₂| + |y₁-y₂|

# Minkowski Distance (generalized)
d = (Σ|xᵢ-yᵢ|^p)^(1/p)
  p=1 → Manhattan
  p=2 → Euclidean
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

# IMPORTANT: KNN requires scaled features!
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Create KNN classifier
knn = KNeighborsClassifier(
    n_neighbors=5,           # K value
    weights="uniform",       # or "distance" (weighted by distance)
    metric="euclidean"       # distance metric
)

knn.fit(X_train_scaled, y_train)
predictions = knn.predict(X_test_scaled)

# Find optimal K using cross-validation
from sklearn.model_selection import cross_val_score

k_range = range(1, 31)
scores = []
for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    score = cross_val_score(knn, X_train_scaled, y_train, cv=5).mean()
    scores.append(score)
    
best_k = k_range[scores.index(max(scores))]
print(f"Best K: {best_k}")
</pre>

<h3>Choosing K</h3>

<table>
<tr><th>K Value</th><th>Effect</th></tr>
<tr><td>K = 1</td><td>High variance, sensitive to noise</td></tr>
<tr><td>K small</td><td>Complex boundary, may overfit</td></tr>
<tr><td>K large</td><td>Smooth boundary, may underfit</td></tr>
<tr><td>K = N</td><td>Always predicts majority class</td></tr>
</table>

<pre class="code-example">
Best practices:
- Start with K = √n (n = training samples)
- Use odd K for binary classification (no ties)
- Use cross-validation to find optimal K
- Weight by distance for noisy data
</pre>

<h3>Pros and Cons</h3>

<table>
<tr><th>✅ Advantages</th><th>❌ Disadvantages</th></tr>
<tr><td>Simple to understand</td><td>Slow prediction (calculates all distances)</td></tr>
<tr><td>No training phase</td><td>Requires scaled features</td></tr>
<tr><td>Works well with small datasets</td><td>Struggles with high dimensions</td></tr>
<tr><td>Naturally handles multi-class</td><td>Sensitive to irrelevant features</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">🎯 Interactive Demo</span>
        <span class="demo-title">KNN Classifier</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr auto; gap: 24px;">
            <div>
                <canvas id="knn-canvas" width="350" height="280" style="background: #fafafa; border-radius: 8px; cursor: crosshair;"></canvas>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 8px;">Click anywhere to classify a new point!</div>
            </div>
            
            <div style="min-width: 140px;">
                <div class="demo-field">
                    <label>K (neighbors): <span id="k-val">3</span></label>
                    <input type="range" id="knn-k" min="1" max="9" step="2" value="3" style="width: 100%;">
                </div>
                
                <div style="margin-top: 16px; font-size: 0.85rem;">
                    <div style="color: var(--text-muted);">Legend:</div>
                    <div>🔴 Class A</div>
                    <div>🔵 Class B</div>
                    <div>⭐ New Point</div>
                    <div>━━ Neighbor Links</div>
                </div>
                
                <div id="knn-result" style="margin-top: 16px; padding: 12px; border-radius: 8px; text-align: center; display: none;">
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Prediction</div>
                    <div style="font-size: 1.2rem; font-weight: 700;" id="knn-pred"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("knn-canvas");
    const ctx = canvas.getContext("2d");
    
    // Sample data
    const data = [
        ...Array.from({length: 12}, () => ({x: 60 + Math.random() * 100, y: 50 + Math.random() * 100, c: 0})),
        ...Array.from({length: 12}, () => ({x: 190 + Math.random() * 100, y: 130 + Math.random() * 100, c: 1}))
    ];
    
    function euclidean(p1, p2) {
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
    
    function drawData(newPoint = null, neighbors = []) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fafafa";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw neighbor lines
        if (newPoint && neighbors.length > 0) {
            neighbors.forEach(n => {
                ctx.strokeStyle = n.c === 0 ? "#e53e3e" : "#3182ce";
                ctx.lineWidth = 2;
                ctx.setLineDash([4, 4]);
                ctx.beginPath();
                ctx.moveTo(newPoint.x, newPoint.y);
                ctx.lineTo(data[n.idx].x, data[n.idx].y);
                ctx.stroke();
            });
            ctx.setLineDash([]);
        }
        
        // Draw data points
        data.forEach((p, i) => {
            const isNeighbor = neighbors.some(n => n.idx === i);
            ctx.beginPath();
            ctx.arc(p.x, p.y, isNeighbor ? 10 : 7, 0, Math.PI * 2);
            ctx.fillStyle = p.c === 0 ? "#e53e3e" : "#3182ce";
            ctx.fill();
            if (isNeighbor) {
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });
        
        // Draw new point
        if (newPoint) {
            ctx.beginPath();
            ctx.arc(newPoint.x, newPoint.y, 12, 0, Math.PI * 2);
            ctx.fillStyle = "#ffd700";
            ctx.fill();
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Star shape
            ctx.fillStyle = "#000";
            ctx.font = "16px sans-serif";
            ctx.fillText("⭐", newPoint.x - 8, newPoint.y + 5);
        }
    }
    
    drawData();
    
    document.getElementById("knn-k").oninput = function() {
        document.getElementById("k-val").textContent = this.value;
    };
    
    canvas.onclick = function(e) {
        const rect = canvas.getBoundingClientRect();
        const newPoint = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        
        const k = parseInt(document.getElementById("knn-k").value);
        
        // Calculate distances
        const distances = data.map((p, i) => ({
            idx: i,
            dist: euclidean(newPoint, p),
            c: p.c
        })).sort((a, b) => a.dist - b.dist);
        
        // Get K nearest
        const neighbors = distances.slice(0, k);
        
        // Vote
        const votes = neighbors.reduce((acc, n) => {
            acc[n.c] = (acc[n.c] || 0) + 1;
            return acc;
        }, {});
        
        const prediction = votes[0] > (votes[1] || 0) ? 0 : 1;
        
        drawData(newPoint, neighbors);
        
        // Show result
        const resultDiv = document.getElementById("knn-result");
        resultDiv.style.display = "block";
        resultDiv.style.background = prediction === 0 ? "#fed7d7" : "#bee3f8";
        document.getElementById("knn-pred").textContent = prediction === 0 ? "Class A 🔴" : "Class B 🔵";
        document.getElementById("knn-pred").style.color = prediction === 0 ? "#c53030" : "#2b6cb0";
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 KNN Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Why is feature scaling important for KNN?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="true">Features with larger scales would dominate distance calculations</div>
            <div class="lab-option" data-correct="false">It makes training faster</div>
            <div class="lab-option" data-correct="false">KNN only works with scaled features</div>
            <div class="lab-option" data-correct="false">It reduces the number of neighbors needed</div>
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
                ? "✅ <strong>Correct!</strong> Without scaling, features measured in thousands would dominate over features measured in single digits."
                : "❌ <strong>Not quite.</strong> Distance-based algorithms like KNN are sensitive to scale — features with larger values would unfairly dominate.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Features with larger scales would dominate distance calculations'
WHERE id = 241;
