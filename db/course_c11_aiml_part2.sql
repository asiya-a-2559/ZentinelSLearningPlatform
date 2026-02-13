-- ============================================================
-- Course C11: AI/ML Fundamentals - Additional Lessons
-- ============================================================

-- Lesson 234: TensorFlow/Keras Basics
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(234, 50, 50, 11, 'Deep Learning with TensorFlow/Keras', 'tensorflow-keras-basics', 'intermediate', 'Build neural networks easily with TensorFlow and Keras', 8);

UPDATE lessons SET description = '
<h2>Deep Learning with TensorFlow/Keras</h2>

<p>TensorFlow is Google''s open-source deep learning framework. Keras is its high-level API that makes building neural networks incredibly simple.</p>

<h3>Installation</h3>

<pre class="code-example">
pip install tensorflow

# For GPU support (much faster training)
pip install tensorflow-gpu
</pre>

<h3>Your First Neural Network with Keras</h3>

<pre class="code-example">
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# Define the model architecture
model = keras.Sequential([
    layers.Dense(128, activation="relu", input_shape=(784,)),
    layers.Dropout(0.2),  # Prevent overfitting
    layers.Dense(64, activation="relu"),
    layers.Dense(10, activation="softmax")  # 10 classes
])

# Compile the model
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

# View model architecture
model.summary()
</pre>

<h3>Model Summary Output</h3>

<pre class="code-example">
Model: "sequential"
_________________________________________________________________
Layer (type)                Output Shape              Param #   
=================================================================
dense (Dense)               (None, 128)               100480    
dropout (Dropout)           (None, 128)               0         
dense_1 (Dense)             (None, 64)                8256      
dense_2 (Dense)             (None, 10)                650       
=================================================================
Total params: 109,386
Trainable params: 109,386
Non-trainable params: 0
</pre>

<h3>Training the Model</h3>

<pre class="code-example">
# Load MNIST dataset (handwritten digits)
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()

# Preprocess: Flatten and normalize
X_train = X_train.reshape(-1, 784) / 255.0
X_test = X_test.reshape(-1, 784) / 255.0

# Train the model
history = model.fit(
    X_train, y_train,
    epochs=10,
    batch_size=32,
    validation_split=0.2,  # Use 20% for validation
    verbose=1
)

# Output:
# Epoch 1/10
# 1500/1500 [======] - 3s - loss: 0.3521 - accuracy: 0.8965
# Epoch 10/10
# 1500/1500 [======] - 2s - loss: 0.0432 - accuracy: 0.9867
</pre>

<h3>Evaluating and Using the Model</h3>

<pre class="code-example">
# Evaluate on test set
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {test_acc * 100:.2f}%")  # ~98%

# Make predictions
predictions = model.predict(X_test[:5])
predicted_classes = predictions.argmax(axis=1)
print(f"Predicted: {predicted_classes}")
print(f"Actual:    {y_test[:5]}")

# Save the model
model.save("digit_classifier.h5")

# Load later
loaded_model = keras.models.load_model("digit_classifier.h5")
</pre>

<h3>Common Layer Types</h3>

<table>
<tr><th>Layer</th><th>Use Case</th><th>Example</th></tr>
<tr><td><code>Dense</code></td><td>Fully connected layer</td><td>Classification, regression</td></tr>
<tr><td><code>Conv2D</code></td><td>Image feature extraction</td><td>Image classification</td></tr>
<tr><td><code>LSTM</code></td><td>Sequential data</td><td>Text, time series</td></tr>
<tr><td><code>Dropout</code></td><td>Regularization</td><td>Prevent overfitting</td></tr>
<tr><td><code>BatchNormalization</code></td><td>Stabilize training</td><td>Deep networks</td></tr>
</table>

<h3>Callbacks for Better Training</h3>

<pre class="code-example">
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

callbacks = [
    # Stop if no improvement for 3 epochs
    EarlyStopping(patience=3, restore_best_weights=True),
    
    # Save best model
    ModelCheckpoint("best_model.h5", save_best_only=True)
]

model.fit(X_train, y_train, epochs=50, callbacks=callbacks)
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">✏️ Interactive Demo</span>
        <span class="demo-title">MNIST Digit Classifier</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 200px 1fr; gap: 24px;">
            <div>
                <h4 style="margin-bottom: 12px;">Draw a Digit</h4>
                <canvas id="draw-canvas" width="180" height="180" style="background: #1a1a2e; border-radius: 8px; cursor: crosshair;"></canvas>
                <div style="margin-top: 8px; display: flex; gap: 8px;">
                    <button class="demo-btn demo-btn-sm" id="clear-canvas">Clear</button>
                    <button class="demo-btn" id="predict-digit">Predict</button>
                </div>
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px;">Neural Network Prediction</h4>
                
                <div id="nn-processing" style="display: none; margin-bottom: 16px;">
                    <div style="background: var(--main-bg); padding: 12px; border-radius: 8px; font-family: var(--font-mono); font-size: 0.8rem;">
                        <div id="nn-steps"></div>
                    </div>
                </div>
                
                <div id="prediction-result-tf" style="display: none;">
                    <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
                        <div style="font-size: 4rem; font-weight: 700; color: var(--accent-blue);" id="predicted-digit">-</div>
                        <div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Predicted Digit</div>
                            <div style="font-size: 1.2rem; font-weight: 600; color: #38a169;" id="confidence-text">-</div>
                        </div>
                    </div>
                    
                    <div style="background: var(--main-bg); padding: 12px; border-radius: 8px;">
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">Class Probabilities:</div>
                        <div id="prob-bars"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>This simulates how a trained MNIST model works. Real models process 28×28 pixel images through convolutional and dense layers.</p>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("draw-canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let lastX = 0, lastY = 0;
    
    ctx.fillStyle = "#1a1a2e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    
    canvas.onmousedown = (e) => {
        drawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    };
    canvas.onmouseup = () => drawing = false;
    canvas.onmouseout = () => drawing = false;
    canvas.onmousemove = (e) => {
        if (!drawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    };
    
    document.getElementById("clear-canvas").onclick = () => {
        ctx.fillStyle = "#1a1a2e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        document.getElementById("nn-processing").style.display = "none";
        document.getElementById("prediction-result-tf").style.display = "none";
    };
    
    document.getElementById("predict-digit").onclick = async function() {
        const processing = document.getElementById("nn-processing");
        const result = document.getElementById("prediction-result-tf");
        const stepsDiv = document.getElementById("nn-steps");
        
        processing.style.display = "block";
        result.style.display = "none";
        stepsDiv.innerHTML = "";
        
        const steps = [
            "📥 Preprocessing: Resize to 28x28...",
            "🔢 Normalizing pixel values (0-255 → 0-1)...",
            "🧠 Forward pass through Conv2D layers...",
            "📊 Dense layer activation...",
            "🎯 Softmax output layer...",
            "✅ Prediction complete!"
        ];
        
        for (const step of steps) {
            await new Promise(r => setTimeout(r, 250));
            stepsDiv.innerHTML += `<div style="margin: 4px 0;">${step}</div>`;
        }
        
        // Simulate prediction (random for demo)
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let pixelSum = 0;
        for (let i = 0; i < imgData.data.length; i += 4) {
            pixelSum += imgData.data[i];
        }
        
        // Generate realistic-looking probabilities
        const probs = Array(10).fill(0).map(() => Math.random() * 0.1);
        const predicted = Math.floor(Math.random() * 10);
        probs[predicted] = 0.85 + Math.random() * 0.1;
        const total = probs.reduce((a, b) => a + b);
        probs.forEach((_, i) => probs[i] /= total);
        
        await new Promise(r => setTimeout(r, 200));
        result.style.display = "block";
        document.getElementById("predicted-digit").textContent = predicted;
        document.getElementById("confidence-text").textContent = `Confidence: ${(probs[predicted] * 100).toFixed(1)}%`;
        
        // Probability bars
        const probBars = document.getElementById("prob-bars");
        probBars.innerHTML = probs.map((p, i) => `
            <div style="display: flex; align-items: center; margin: 4px 0;">
                <span style="width: 20px; font-family: var(--font-mono); font-size: 0.8rem;">${i}</span>
                <div style="flex: 1; height: 16px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                    <div style="height: 100%; width: ${p*100}%; background: ${i === predicted ? "#4c9aff" : "#a0aec0"}; transition: width 0.3s;"></div>
                </div>
                <span style="width: 50px; text-align: right; font-family: var(--font-mono); font-size: 0.75rem;">${(p*100).toFixed(1)}%</span>
            </div>
        `).join("");
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Keras Challenge</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What does <code>activation="softmax"</code> do in the output layer?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Outputs values between 0 and 1</div>
            <div class="lab-option" data-correct="true">Outputs probabilities that sum to 1 across all classes</div>
            <div class="lab-option" data-correct="false">Prevents negative values</div>
            <div class="lab-option" data-correct="false">Speeds up training</div>
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
            
            if (!isCorrect) {
                document.querySelector("[data-correct=\\"true\\"]").classList.add("correct");
            }
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> Softmax converts raw outputs into a probability distribution where all values sum to 1, perfect for multi-class classification."
                : "❌ <strong>Not quite.</strong> Softmax ensures outputs are probabilities (0-1) that sum to exactly 1, representing class probabilities.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Outputs probabilities that sum to 1 across all classes'
WHERE id = 234;

-- Lesson 235: Model Evaluation & Deployment
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(235, 51, 51, 11, 'Model Evaluation & Deployment', 'model-evaluation-deployment', 'intermediate', 'Learn to evaluate model performance and deploy to production', 9);

UPDATE lessons SET description = '
<h2>Model Evaluation & Deployment</h2>

<p>Building a model is only half the battle. You need to properly evaluate it and deploy it to production for real-world use.</p>

<h3>Evaluation Metrics</h3>

<h4>For Classification:</h4>

<pre class="code-example">
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, confusion_matrix, classification_report
)

# Confusion Matrix
#                 Predicted
#              Positive  Negative
# Actual  Pos     TP        FN
#         Neg     FP        TN

# Metrics
Accuracy  = (TP + TN) / Total        # Overall correctness
Precision = TP / (TP + FP)           # How many predicted positives are correct
Recall    = TP / (TP + FN)           # How many actual positives were found
F1 Score  = 2 × (Precision × Recall) / (Precision + Recall)
</pre>

<pre class="code-example">
# Example usage
y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]

print(classification_report(y_true, y_pred))
#               precision    recall  f1-score   support
#            0       0.80      0.80      0.80         5
#            1       0.80      0.80      0.80         5
#     accuracy                           0.80        10
</pre>

<h3>Cross-Validation</h3>

<p>Test your model on multiple splits of data for reliable evaluation:</p>

<pre class="code-example">
from sklearn.model_selection import cross_val_score

# 5-fold cross-validation
scores = cross_val_score(model, X, y, cv=5, scoring="accuracy")

print(f"Scores: {scores}")
print(f"Mean: {scores.mean():.3f} (+/- {scores.std() * 2:.3f})")
# Output: Mean: 0.945 (+/- 0.023)
</pre>

<h3>Preventing Overfitting</h3>

<table>
<tr><th>Problem</th><th>Symptom</th><th>Solution</th></tr>
<tr><td>Overfitting</td><td>High train accuracy, low test accuracy</td><td>More data, regularization, dropout</td></tr>
<tr><td>Underfitting</td><td>Low accuracy on both</td><td>More features, complex model</td></tr>
</table>

<pre class="code-example">
# Signs of overfitting:
Train Accuracy: 99.5%
Test Accuracy:  72.3%  ← Big gap!

# Solutions:
1. Add more training data
2. Use regularization (L1/L2)
3. Add Dropout layers
4. Early stopping
5. Reduce model complexity
</pre>

<h3>Saving & Loading Models</h3>

<pre class="code-example">
import joblib

# Scikit-learn models
joblib.dump(model, "model.pkl")
loaded_model = joblib.load("model.pkl")

# Keras models
model.save("model.h5")
loaded_model = keras.models.load_model("model.h5")

# Save in TensorFlow SavedModel format
model.save("saved_model/")
</pre>

<h3>Deploying with Flask API</h3>

<pre class="code-example">
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    features = np.array(data["features"]).reshape(1, -1)
    
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0].max()
    
    return jsonify({
        "prediction": int(prediction),
        "confidence": float(probability)
    })

if __name__ == "__main__":
    app.run(port=5000)
</pre>

<pre class="code-example">
# API Usage (curl or Python requests)
curl -X POST http://localhost:5000/predict \\
     -H "Content-Type: application/json" \\
     -d ''{"features": [5.1, 3.5, 1.4, 0.2]}''

# Response:
{"prediction": 0, "confidence": 0.97}
</pre>

<h3>Production Checklist</h3>

<pre class="code-example">
✅ Model Evaluation
   □ Cross-validation scores
   □ Confusion matrix analysis
   □ Precision/Recall tradeoffs

✅ Model Optimization
   □ Hyperparameter tuning
   □ Feature selection
   □ Model compression (if needed)

✅ Deployment
   □ API endpoint created
   □ Input validation
   □ Error handling
   □ Logging & monitoring

✅ Monitoring
   □ Track prediction distributions
   □ Monitor for data drift
   □ Set up alerts for anomalies
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">📊 Interactive Demo</span>
        <span class="demo-title">Confusion Matrix Explorer</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div>
                <h4 style="margin-bottom: 12px;">Confusion Matrix</h4>
                <div style="display: grid; grid-template-columns: auto 1fr 1fr; gap: 2px; font-size: 0.85rem;">
                    <div style="padding: 8px;"></div>
                    <div style="padding: 8px; text-align: center; font-weight: 600; background: var(--main-bg);">Pred: Positive</div>
                    <div style="padding: 8px; text-align: center; font-weight: 600; background: var(--main-bg);">Pred: Negative</div>
                    
                    <div style="padding: 8px; font-weight: 600; background: var(--main-bg);">Actual: Positive</div>
                    <div style="padding: 12px; text-align: center; background: #c6f6d5;">
                        <div style="font-size: 0.7rem; color: #276749;">True Positive</div>
                        <input type="number" id="tp" value="85" min="0" max="100" style="width: 50px; text-align: center; font-size: 1.2rem; font-weight: 700; border: none; background: transparent; color: #276749;">
                    </div>
                    <div style="padding: 12px; text-align: center; background: #fed7d7;">
                        <div style="font-size: 0.7rem; color: #c53030;">False Negative</div>
                        <input type="number" id="fn" value="15" min="0" max="100" style="width: 50px; text-align: center; font-size: 1.2rem; font-weight: 700; border: none; background: transparent; color: #c53030;">
                    </div>
                    
                    <div style="padding: 8px; font-weight: 600; background: var(--main-bg);">Actual: Negative</div>
                    <div style="padding: 12px; text-align: center; background: #fed7d7;">
                        <div style="font-size: 0.7rem; color: #c53030;">False Positive</div>
                        <input type="number" id="fp" value="10" min="0" max="100" style="width: 50px; text-align: center; font-size: 1.2rem; font-weight: 700; border: none; background: transparent; color: #c53030;">
                    </div>
                    <div style="padding: 12px; text-align: center; background: #c6f6d5;">
                        <div style="font-size: 0.7rem; color: #276749;">True Negative</div>
                        <input type="number" id="tn" value="90" min="0" max="100" style="width: 50px; text-align: center; font-size: 1.2rem; font-weight: 700; border: none; background: transparent; color: #276749;">
                    </div>
                </div>
                
                <button class="demo-btn" id="calc-metrics" style="margin-top: 12px;">Calculate Metrics</button>
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px;">Metrics</h4>
                <div id="metrics-result" style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background: var(--card-bg); padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Accuracy</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-blue);" id="m-accuracy">-</div>
                        </div>
                        <div style="background: var(--card-bg); padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Precision</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: #9f7aea;" id="m-precision">-</div>
                        </div>
                        <div style="background: var(--card-bg); padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Recall</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: #38a169;" id="m-recall">-</div>
                        </div>
                        <div style="background: var(--card-bg); padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="font-size: 0.8rem; color: var(--text-muted);">F1 Score</div>
                            <div style="font-size: 1.5rem; font-weight: 700; color: #f59e0b;" id="m-f1">-</div>
                        </div>
                    </div>
                    
                    <div id="metric-formulas" style="margin-top: 16px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const calcBtn = document.getElementById("calc-metrics");
    
    calcBtn.onclick = function() {
        const tp = parseInt(document.getElementById("tp").value) || 0;
        const tn = parseInt(document.getElementById("tn").value) || 0;
        const fp = parseInt(document.getElementById("fp").value) || 0;
        const fn = parseInt(document.getElementById("fn").value) || 0;
        
        const total = tp + tn + fp + fn;
        const accuracy = ((tp + tn) / total * 100).toFixed(1);
        const precision = (tp / (tp + fp) * 100).toFixed(1);
        const recall = (tp / (tp + fn) * 100).toFixed(1);
        const f1 = (2 * (precision/100 * recall/100) / (precision/100 + recall/100) * 100).toFixed(1);
        
        document.getElementById("m-accuracy").textContent = accuracy + "%";
        document.getElementById("m-precision").textContent = precision + "%";
        document.getElementById("m-recall").textContent = recall + "%";
        document.getElementById("m-f1").textContent = f1 + "%";
        
        document.getElementById("metric-formulas").innerHTML = `
            Accuracy = (${tp}+${tn})/${total} = ${accuracy}%<br>
            Precision = ${tp}/(${tp}+${fp}) = ${precision}%<br>
            Recall = ${tp}/(${tp}+${fn}) = ${recall}%<br>
            F1 = 2×(${precision}%×${recall}%)/(${precision}%+${recall}%) = ${f1}%
        `;
    };
    
    calcBtn.click(); // Initial calculation
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Evaluation Challenge</span>
    </div>
    <div class="lab-body">
        <p><strong>Scenario:</strong> You''re building a spam detector. Which metric matters most if you want to minimize missing actual spam (even if some legitimate emails get flagged)?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Accuracy</div>
            <div class="lab-option" data-correct="false">Precision</div>
            <div class="lab-option" data-correct="true">Recall</div>
            <div class="lab-option" data-correct="false">F1 Score</div>
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
            
            if (!isCorrect) {
                document.querySelector("[data-correct=\\"true\\"]").classList.add("correct");
            }
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> High Recall = catching most spam (minimizing False Negatives). Precision = fewer legitimate emails flagged as spam."
                : "❌ <strong>Not quite.</strong> Recall measures \"of all actual spam, how much did we catch?\" — minimizing missed spam means maximizing Recall.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Recall'
WHERE id = 235;

-- Lesson 236: Data Preprocessing for ML
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(236, 48, 48, 11, 'Data Preprocessing for ML', 'data-preprocessing', 'intermediate', 'Clean, transform, and prepare your data for machine learning', 10);

UPDATE lessons SET description = '
<h2>Data Preprocessing for ML</h2>

<p>Data preprocessing is often 80% of the work in ML projects. Clean data leads to better models!</p>

<h3>The Preprocessing Pipeline</h3>

<pre class="code-example">
Raw Data → Clean → Transform → Encode → Scale → Ready for ML

1. Handle missing values
2. Remove duplicates
3. Encode categorical variables
4. Scale numerical features
5. Handle outliers
6. Feature engineering
</pre>

<h3>1. Handling Missing Data</h3>

<pre class="code-example">
import pandas as pd
import numpy as np

# Check for missing values
df.isnull().sum()
df.info()

# Strategy 1: Drop rows with missing values
df_clean = df.dropna()

# Strategy 2: Fill with statistics
df["age"].fillna(df["age"].mean(), inplace=True)      # Mean
df["salary"].fillna(df["salary"].median(), inplace=True)  # Median
df["city"].fillna(df["city"].mode()[0], inplace=True) # Mode

# Strategy 3: Fill with specific value
df["status"].fillna("Unknown", inplace=True)

# Strategy 4: Forward/Backward fill (time series)
df["price"].fillna(method="ffill", inplace=True)
</pre>

<h3>2. Encoding Categorical Variables</h3>

<pre class="code-example">
from sklearn.preprocessing import LabelEncoder, OneHotEncoder

# Label Encoding (ordinal data)
# Converts: ["low", "medium", "high"] → [0, 1, 2]
le = LabelEncoder()
df["size"] = le.fit_transform(df["size"])

# One-Hot Encoding (nominal data)
# Converts: ["red", "blue", "green"] → 3 binary columns
df = pd.get_dummies(df, columns=["color"])
# Result: color_red, color_blue, color_green

# Or using sklearn
ohe = OneHotEncoder(sparse=False)
encoded = ohe.fit_transform(df[["color"]])
</pre>

<h3>3. Feature Scaling</h3>

<pre class="code-example">
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# StandardScaler: Mean=0, Std=1 (Z-score normalization)
# Best for: Most ML algorithms (SVM, Linear Regression)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# MinMaxScaler: Scale to range [0, 1]
# Best for: Neural networks, image data
minmax = MinMaxScaler()
X_normalized = minmax.fit_transform(X)

# Formula comparison:
# StandardScaler: z = (x - mean) / std
# MinMaxScaler: x_norm = (x - min) / (max - min)
</pre>

<h3>4. Handling Outliers</h3>

<pre class="code-example">
# Detect outliers using IQR method
Q1 = df["value"].quantile(0.25)
Q3 = df["value"].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Remove outliers
df_clean = df[(df["value"] >= lower_bound) & 
              (df["value"] <= upper_bound)]

# Or cap outliers (Winsorization)
df["value"] = df["value"].clip(lower_bound, upper_bound)
</pre>

<h3>5. Feature Engineering</h3>

<pre class="code-example">
# Create new meaningful features from existing data

# From datetime
df["day_of_week"] = df["date"].dt.dayofweek
df["is_weekend"] = df["day_of_week"].isin([5, 6]).astype(int)
df["month"] = df["date"].dt.month

# Binning continuous variables
df["age_group"] = pd.cut(df["age"], 
    bins=[0, 18, 35, 50, 100],
    labels=["child", "young", "middle", "senior"])

# Interaction features
df["price_per_sqft"] = df["price"] / df["sqft"]

# Text features
df["description_length"] = df["description"].str.len()
df["word_count"] = df["description"].str.split().str.len()
</pre>

<h3>Complete Preprocessing Pipeline</h3>

<pre class="code-example">
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer

# Define transformers for different column types
numeric_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler())
])

categorical_transformer = Pipeline([
    ("imputer", SimpleImputer(strategy="constant", fill_value="missing")),
    ("encoder", OneHotEncoder(handle_unknown="ignore"))
])

# Combine into single preprocessor
preprocessor = ColumnTransformer([
    ("num", numeric_transformer, ["age", "salary", "experience"]),
    ("cat", categorical_transformer, ["department", "city"])
])

# Use in ML pipeline
from sklearn.ensemble import RandomForestClassifier

full_pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier())
])

full_pipeline.fit(X_train, y_train)
predictions = full_pipeline.predict(X_test)
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🔧 Interactive Demo</span>
        <span class="demo-title">Data Preprocessing Visualizer</span>
    </div>
    
    <div class="demo-visual">
        <h4 style="margin-bottom: 12px;">Feature Scaling Comparison</h4>
        
        <div style="margin-bottom: 16px;">
            <strong>Original Data:</strong> [10, 20, 30, 100, 500, 1000]
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
                <div style="font-weight: 600; margin-bottom: 12px;">StandardScaler</div>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">z = (x - mean) / std</div>
                <canvas id="standard-canvas" width="200" height="120"></canvas>
                <div id="standard-result" style="font-family: var(--font-mono); font-size: 0.75rem; margin-top: 8px;"></div>
            </div>
            
            <div style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
                <div style="font-weight: 600; margin-bottom: 12px;">MinMaxScaler</div>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">x'' = (x - min) / (max - min)</div>
                <canvas id="minmax-canvas" width="200" height="120"></canvas>
                <div id="minmax-result" style="font-family: var(--font-mono); font-size: 0.75rem; margin-top: 8px;"></div>
            </div>
        </div>
        
        <div style="margin-top: 20px;">
            <h4 style="margin-bottom: 12px;">One-Hot Encoding Demo</h4>
            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                <select id="color-select" style="padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border-light);">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <span style="color: var(--text-muted);">→</span>
                <div id="onehot-result" style="font-family: var(--font-mono); background: #1a1a2e; color: #68d391; padding: 8px 16px; border-radius: 6px;"></div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const data = [10, 20, 30, 100, 500, 1000];
    
    // StandardScaler
    const mean = data.reduce((a, b) => a + b) / data.length;
    const std = Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
    const standardized = data.map(x => ((x - mean) / std).toFixed(2));
    
    // MinMaxScaler
    const min = Math.min(...data);
    const max = Math.max(...data);
    const normalized = data.map(x => ((x - min) / (max - min)).toFixed(2));
    
    // Draw Standard Scaler
    const stdCanvas = document.getElementById("standard-canvas");
    const stdCtx = stdCanvas.getContext("2d");
    stdCtx.fillStyle = "#e2e8f0";
    stdCtx.fillRect(0, 0, 200, 120);
    
    // Draw bars
    standardized.forEach((val, i) => {
        const x = 10 + i * 30;
        const height = (parseFloat(val) + 1) * 30;
        const y = 90 - height;
        stdCtx.fillStyle = "#4c9aff";
        stdCtx.fillRect(x, y, 20, height);
    });
    stdCtx.strokeStyle = "#a0aec0";
    stdCtx.beginPath();
    stdCtx.moveTo(0, 60);
    stdCtx.lineTo(200, 60);
    stdCtx.stroke();
    
    document.getElementById("standard-result").textContent = "[" + standardized.join(", ") + "]";
    
    // Draw MinMax Scaler
    const mmCanvas = document.getElementById("minmax-canvas");
    const mmCtx = mmCanvas.getContext("2d");
    mmCtx.fillStyle = "#e2e8f0";
    mmCtx.fillRect(0, 0, 200, 120);
    
    normalized.forEach((val, i) => {
        const x = 10 + i * 30;
        const height = parseFloat(val) * 80 + 10;
        const y = 100 - height;
        mmCtx.fillStyle = "#38a169";
        mmCtx.fillRect(x, y, 20, height);
    });
    
    document.getElementById("minmax-result").textContent = "[" + normalized.join(", ") + "]";
    
    // One-Hot Encoding
    const colorSelect = document.getElementById("color-select");
    const onehotResult = document.getElementById("onehot-result");
    
    function updateOnehot() {
        const val = colorSelect.value;
        const encoding = {
            red: [1, 0, 0],
            blue: [0, 1, 0],
            green: [0, 0, 1]
        };
        onehotResult.textContent = `[red=${encoding[val][0]}, blue=${encoding[val][1]}, green=${encoding[val][2]}]`;
    }
    
    colorSelect.onchange = updateOnehot;
    updateOnehot();
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Preprocessing Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Which scaler should you use for a neural network with input features ranging from 0 to 10,000?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="true">MinMaxScaler (0 to 1 range)</div>
            <div class="lab-option" data-correct="false">StandardScaler (Z-score)</div>
            <div class="lab-option" data-correct="false">No scaling needed</div>
            <div class="lab-option" data-correct="false">LabelEncoder</div>
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
            
            if (!isCorrect) {
                document.querySelector("[data-correct=\\"true\\"]").classList.add("correct");
            }
            
            feedback.className = "lab-feedback " + (isCorrect ? "lab-feedback-success" : "lab-feedback-error");
            feedback.innerHTML = isCorrect 
                ? "✅ <strong>Correct!</strong> Neural networks work best with inputs in [0,1] range. MinMaxScaler ensures all features are on the same scale."
                : "❌ <strong>Not quite.</strong> Neural networks with sigmoid/tanh activations work best with MinMaxScaler [0,1] range. Large values can cause gradient issues.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'MinMaxScaler (0 to 1 range)'
WHERE id = 236;

-- Additional Quiz Questions
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(234, 'What does model.fit() do in Keras?', 'Creates the model architecture', 'Trains the model on data', 'Makes predictions', 'Evaluates the model', 'B', 'The fit() method trains the model by iterating through the data for the specified number of epochs.'),
(234, 'Which Keras layer is best for image classification?', 'Dense', 'Conv2D', 'LSTM', 'Embedding', 'B', 'Conv2D (Convolutional 2D) layers are designed to extract spatial features from images.'),

(235, 'Cross-validation helps to:', 'Speed up training', 'Get more reliable evaluation metrics', 'Increase accuracy', 'Reduce model size', 'B', 'Cross-validation tests the model on multiple data splits, giving more reliable and less biased evaluation metrics.'),
(235, 'High train accuracy but low test accuracy indicates:', 'Underfitting', 'Overfitting', 'Good generalization', 'Data imbalance', 'B', 'This gap between training and test performance is the classic sign of overfitting — the model memorized training data but cant generalize.'),

(236, 'OneHotEncoder is used for:', 'Numerical features', 'Categorical features', 'Missing values', 'Feature scaling', 'B', 'OneHotEncoder converts categorical variables into binary columns — one column per category.'),
(236, 'StandardScaler transforms data to have:', 'Range [0, 1]', 'Mean=0, Std=1', 'Only positive values', 'Integer values', 'B', 'StandardScaler performs Z-score normalization: (x - mean) / std, resulting in mean=0 and std=1.');
