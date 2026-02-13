-- ============================================================
-- Course C11: AI/ML - Deep Learning & CNNs (Lessons 247-251)
-- ============================================================

-- New Level for Advanced Neural Networks
INSERT INTO levels (id, course_id, title, level_number, sort_order) VALUES
(56, 11, 'Advanced Deep Learning', 6, 6);

-- Lesson 247: Convolutional Neural Networks
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(247, 50, 56, 11, 'Convolutional Neural Networks', 'cnn-deep-learning', 'advanced', 'Image recognition with convolution layers and filters', 21);

UPDATE lessons SET description = '
<h2>Convolutional Neural Networks (CNNs)</h2>

<p>CNNs are specialized neural networks designed for processing structured grid data like images. They automatically learn spatial hierarchies of features.</p>

<h3>Why CNNs for Images?</h3>

<pre class="code-example">
Problem with regular neural networks for images:
- 28×28 image = 784 pixels = 784 inputs
- 224×224 RGB image = 150,528 inputs!
- Fully connected: millions of parameters
- Loses spatial information

CNNs solve this with:
1. LOCAL CONNECTIVITY: Each neuron sees small region
2. WEIGHT SHARING: Same filter across image
3. TRANSLATION INVARIANCE: Cat is cat anywhere
</pre>

<h3>CNN Architecture Components</h3>

<pre class="code-example">
┌──────────────────────────────────────────────────────┐
│  INPUT → CONV → RELU → POOL → CONV → RELU → POOL →  │
│                                                      │
│           → FLATTEN → FC → FC → OUTPUT              │
└──────────────────────────────────────────────────────┘

1. CONVOLUTION LAYER
   - Slides filter/kernel across image
   - Detects features (edges, textures, shapes)
   - Output: Feature maps

2. ACTIVATION (ReLU)
   - Non-linearity
   - ReLU(x) = max(0, x)

3. POOLING LAYER
   - Downsamples feature maps
   - Max pooling: takes maximum in window
   - Reduces parameters and computation

4. FULLY CONNECTED (FC)
   - Flattened features → classification
   - Final layer: softmax for probabilities
</pre>

<h3>Convolution Operation</h3>

<pre class="code-example">
Image (5×5)           Filter (3×3)         Output (3×3)
┌─────────────────┐   ┌─────────────┐
│ 1  2  3  4  5   │   │ 1  0  -1 │
│ 6  7  8  9  10  │ * │ 1  0  -1 │  =  Slide and sum
│ 11 12 13 14 15  │   │ 1  0  -1 │
│ 16 17 18 19 20  │   └─────────────┘
│ 21 22 23 24 25  │
└─────────────────┘

First position: 1×1 + 2×0 + 3×(-1) + 6×1 + 7×0 + 8×(-1)
              + 11×1 + 12×0 + 13×(-1) = -6

This filter detects VERTICAL EDGES!
</pre>

<h3>Implementation with Keras</h3>

<pre class="code-example">
import tensorflow as tf
from tensorflow.keras import layers, models

# Build CNN
model = models.Sequential([
    # First conv block
    layers.Conv2D(32, (3, 3), activation="relu", input_shape=(28, 28, 1)),
    layers.MaxPooling2D((2, 2)),
    
    # Second conv block
    layers.Conv2D(64, (3, 3), activation="relu"),
    layers.MaxPooling2D((2, 2)),
    
    # Third conv block
    layers.Conv2D(64, (3, 3), activation="relu"),
    
    # Classification head
    layers.Flatten(),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.5),
    layers.Dense(10, activation="softmax")
])

model.compile(optimizer="adam",
              loss="sparse_categorical_crossentropy",
              metrics=["accuracy"])

# Train
model.fit(X_train, y_train, epochs=10, validation_split=0.2)
</pre>

<h3>Famous CNN Architectures</h3>

<table>
<tr><th>Architecture</th><th>Year</th><th>Key Innovation</th></tr>
<tr><td>LeNet-5</td><td>1998</td><td>First practical CNN (digits)</td></tr>
<tr><td>AlexNet</td><td>2012</td><td>ReLU, Dropout, GPU training</td></tr>
<tr><td>VGGNet</td><td>2014</td><td>Small filters (3×3) stacked</td></tr>
<tr><td>ResNet</td><td>2015</td><td>Skip connections (152 layers!)</td></tr>
<tr><td>EfficientNet</td><td>2019</td><td>Compound scaling</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">🖼️ Interactive Demo</span>
        <span class="demo-title">CNN: Convolution Visualizer</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center;">
            <div>
                <h4 style="margin-bottom: 8px;">Input Image (7×7)</h4>
                <canvas id="cnn-input" width="140" height="140" style="background: #1a1a2e; border-radius: 8px;"></canvas>
            </div>
            
            <div style="text-align: center;">
                <div style="font-size: 1.5rem;">→</div>
                <div style="margin: 8px 0;">
                    <select id="cnn-filter" style="padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                        <option value="edge-h">Horizontal Edge</option>
                        <option value="edge-v">Vertical Edge</option>
                        <option value="sharpen">Sharpen</option>
                        <option value="blur">Blur</option>
                    </select>
                </div>
                <div id="cnn-kernel" style="font-family: var(--font-mono); font-size: 0.7rem; background: var(--main-bg); padding: 8px; border-radius: 6px; white-space: pre;"></div>
            </div>
            
            <div>
                <h4 style="margin-bottom: 8px;">Feature Map (5×5)</h4>
                <canvas id="cnn-output" width="100" height="100" style="background: #1a1a2e; border-radius: 8px;"></canvas>
            </div>
        </div>
        
        <button class="demo-btn" id="cnn-convolve" style="margin-top: 16px;">▶ Apply Convolution</button>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>The filter slides across the image, computing element-wise multiplication and sum at each position. Different filters detect different features!</p>
        </div>
    </div>
</div>

<script>
(function() {
    const inputCanvas = document.getElementById("cnn-input");
    const outputCanvas = document.getElementById("cnn-output");
    const inputCtx = inputCanvas.getContext("2d");
    const outputCtx = outputCanvas.getContext("2d");
    
    // Simple 7x7 image with pattern
    const image = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 255, 255, 255, 255, 255, 0],
        [0, 255, 0, 0, 0, 255, 0],
        [0, 255, 0, 255, 0, 255, 0],
        [0, 255, 0, 0, 0, 255, 0],
        [0, 255, 255, 255, 255, 255, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    
    const filters = {
        "edge-h": [[-1, -2, -1], [0, 0, 0], [1, 2, 1]],
        "edge-v": [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]],
        "sharpen": [[0, -1, 0], [-1, 5, -1], [0, -1, 0]],
        "blur": [[1/9, 1/9, 1/9], [1/9, 1/9, 1/9], [1/9, 1/9, 1/9]]
    };
    
    function drawImage() {
        inputCtx.fillStyle = "#1a1a2e";
        inputCtx.fillRect(0, 0, 140, 140);
        
        for (let y = 0; y < 7; y++) {
            for (let x = 0; x < 7; x++) {
                const val = image[y][x];
                inputCtx.fillStyle = `rgb(${val}, ${val}, ${val})`;
                inputCtx.fillRect(x * 20, y * 20, 18, 18);
            }
        }
    }
    
    function displayKernel(filter) {
        const f = filters[filter];
        const html = f.map(row => row.map(v => v.toFixed(1).padStart(5)).join(" ")).join("\\n");
        document.getElementById("cnn-kernel").textContent = html;
    }
    
    drawImage();
    displayKernel("edge-h");
    
    document.getElementById("cnn-filter").onchange = function() {
        displayKernel(this.value);
    };
    
    document.getElementById("cnn-convolve").onclick = async function() {
        const filter = filters[document.getElementById("cnn-filter").value];
        
        outputCtx.fillStyle = "#1a1a2e";
        outputCtx.fillRect(0, 0, 100, 100);
        
        // Convolve with animation
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                // Calculate convolution
                let sum = 0;
                for (let fy = 0; fy < 3; fy++) {
                    for (let fx = 0; fx < 3; fx++) {
                        sum += image[y + fy][x + fx] * filter[fy][fx];
                    }
                }
                
                // Normalize to 0-255
                sum = Math.max(0, Math.min(255, Math.abs(sum)));
                
                // Highlight region in input
                drawImage();
                inputCtx.strokeStyle = "#4c9aff";
                inputCtx.lineWidth = 2;
                inputCtx.strokeRect(x * 20, y * 20, 60, 60);
                
                // Draw output pixel
                outputCtx.fillStyle = `rgb(${sum}, ${sum}, ${sum})`;
                outputCtx.fillRect(x * 20, y * 20, 18, 18);
                
                await new Promise(r => setTimeout(r, 100));
            }
        }
        
        drawImage();
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 CNN Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What is the main purpose of pooling layers in CNN?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Increase image resolution</div>
            <div class="lab-option" data-correct="false">Add non-linearity</div>
            <div class="lab-option" data-correct="true">Reduce spatial dimensions and computation</div>
            <div class="lab-option" data-correct="false">Learn new features</div>
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
                ? "✅ <strong>Correct!</strong> Pooling reduces spatial size, decreasing computation and helping prevent overfitting while maintaining important features."
                : "❌ <strong>Not quite.</strong> Pooling downsamples feature maps to reduce dimensions, computation, and help with translation invariance.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Reduce spatial dimensions and computation'
WHERE id = 247;

-- Lesson 248: Recurrent Neural Networks
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(248, 50, 56, 11, 'Recurrent Neural Networks', 'rnn-sequence-models', 'advanced', 'Sequential data processing with memory and hidden states', 22);

UPDATE lessons SET description = '
<h2>Recurrent Neural Networks (RNNs)</h2>

<p>RNNs process sequential data by maintaining a "memory" of previous inputs through hidden states. Perfect for time series, text, and speech.</p>

<h3>Why RNNs for Sequences?</h3>

<pre class="code-example">
Problem: Regular networks cant handle variable-length sequences

Text: "The cat sat on the ___"
- Need context from previous words
- Word meaning depends on position
- Variable length inputs

Solution: RNN has MEMORY
- Hidden state carries information forward
- Same weights applied at each time step
- Can handle any sequence length
</pre>

<h3>RNN Architecture</h3>

<pre class="code-example">
         h₀        h₁        h₂        h₃
          ↓         ↓         ↓         ↓
    ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
x₀ →│  RNN  │→│  RNN  │→│  RNN  │→│  RNN  │→ output
    │ Cell  │ │ Cell  │ │ Cell  │ │ Cell  │
    └───────┘ └───────┘ └───────┘ └───────┘
         ↑         ↑         ↑         ↑
        "The"    "cat"     "sat"     "on"

At each step t:
  hₜ = tanh(Wₓₕ · xₜ + Wₕₕ · hₜ₋₁ + b)
  yₜ = Wₕᵧ · hₜ

Same weights (W) used at every time step!
</pre>

<h3>The Vanishing Gradient Problem</h3>

<pre class="code-example">
Long sequences → gradients vanish/explode

"The cat, which was adopted last week from 
 the shelter down the street, sat on the mat"
 
 Word "sat" depends on "cat" from many steps ago!
 
 Problem: Gradients multiply through time
 - If < 1: vanish (forget long-term)
 - If > 1: explode (unstable training)

Solution: LSTM and GRU architectures
</pre>

<h3>LSTM: Long Short-Term Memory</h3>

<pre class="code-example">
LSTM adds GATES to control information flow:

1. FORGET GATE: What to remove from memory
   fₜ = σ(Wf · [hₜ₋₁, xₜ] + bf)

2. INPUT GATE: What new info to add
   iₜ = σ(Wi · [hₜ₋₁, xₜ] + bi)
   C̃ₜ = tanh(Wc · [hₜ₋₁, xₜ] + bc)

3. CELL STATE UPDATE:
   Cₜ = fₜ * Cₜ₋₁ + iₜ * C̃ₜ

4. OUTPUT GATE: What to output
   oₜ = σ(Wo · [hₜ₋₁, xₜ] + bo)
   hₜ = oₜ * tanh(Cₜ)

Cell state = highway for gradients to flow!
</pre>

<h3>Implementation</h3>

<pre class="code-example">
import tensorflow as tf
from tensorflow.keras import layers, models

# Simple RNN for text classification
model = models.Sequential([
    layers.Embedding(vocab_size, 64, input_length=max_len),
    layers.SimpleRNN(64, return_sequences=True),
    layers.SimpleRNN(32),
    layers.Dense(1, activation="sigmoid")
])

# LSTM version (better for long sequences)
model = models.Sequential([
    layers.Embedding(vocab_size, 64),
    layers.LSTM(64, return_sequences=True),
    layers.LSTM(32),
    layers.Dense(1, activation="sigmoid")
])

# Bidirectional LSTM (reads forward AND backward)
model = models.Sequential([
    layers.Embedding(vocab_size, 64),
    layers.Bidirectional(layers.LSTM(64)),
    layers.Dense(1, activation="sigmoid")
])

model.compile(optimizer="adam", 
              loss="binary_crossentropy",
              metrics=["accuracy"])
</pre>

<h3>RNN Applications</h3>

<table>
<tr><th>Task</th><th>Input</th><th>Output</th><th>Example</th></tr>
<tr><td>Many-to-One</td><td>Sequence</td><td>Single</td><td>Sentiment analysis</td></tr>
<tr><td>One-to-Many</td><td>Single</td><td>Sequence</td><td>Image captioning</td></tr>
<tr><td>Many-to-Many</td><td>Sequence</td><td>Sequence</td><td>Translation, NER</td></tr>
<tr><td>Seq-to-Seq</td><td>Sequence</td><td>Sequence</td><td>Chatbot, summarization</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">📝 Interactive Demo</span>
        <span class="demo-title">RNN: Sentiment Analysis</span>
    </div>
    
    <div class="demo-visual">
        <div style="margin-bottom: 16px;">
            <h4>Enter a sentence:</h4>
            <input type="text" id="rnn-input" value="This movie was absolutely amazing" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border-light); font-size: 1rem;">
        </div>
        
        <button class="demo-btn" id="rnn-analyze">🔄 Process with RNN</button>
        
        <div id="rnn-viz" style="display: none; margin-top: 20px;">
            <h4 style="margin-bottom: 12px;">Word-by-Word Processing:</h4>
            <div id="rnn-words" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;"></div>
            
            <div style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
                <div style="margin-bottom: 8px;">Hidden State Evolution:</div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span>😞 Negative</span>
                    <div style="flex: 1; height: 24px; background: linear-gradient(to right, #e53e3e, #ecc94b, #38a169); border-radius: 12px; position: relative;">
                        <div id="rnn-marker" style="position: absolute; top: -4px; width: 16px; height: 32px; background: #1a1a2e; border-radius: 8px; transition: left 0.3s;"></div>
                    </div>
                    <span>😊 Positive</span>
                </div>
            </div>
            
            <div id="rnn-result" style="margin-top: 16px; padding: 20px; border-radius: 8px; text-align: center;">
                <div style="font-size: 2rem;" id="rnn-emoji"></div>
                <div style="font-size: 1.2rem; font-weight: 700;" id="rnn-sentiment"></div>
                <div style="font-size: 0.9rem; color: var(--text-muted);" id="rnn-score"></div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const positiveWords = ["amazing", "great", "excellent", "wonderful", "fantastic", "love", "best", "good", "beautiful", "happy", "awesome", "perfect"];
    const negativeWords = ["bad", "terrible", "awful", "horrible", "hate", "worst", "boring", "waste", "disappointing", "poor", "annoying"];
    
    document.getElementById("rnn-analyze").onclick = async function() {
        const text = document.getElementById("rnn-input").value.toLowerCase();
        const words = text.split(/\\s+/).filter(w => w);
        
        document.getElementById("rnn-viz").style.display = "block";
        document.getElementById("rnn-words").innerHTML = "";
        
        let hiddenState = 0.5;  // Start neutral
        
        for (let i = 0; i < words.length; i++) {
            const word = words[i].replace(/[^a-z]/g, "");
            
            // Create word chip
            const chip = document.createElement("div");
            chip.style.cssText = "padding: 8px 12px; background: var(--main-bg); border-radius: 6px; font-size: 0.9rem; opacity: 0.4; transition: all 0.3s;";
            chip.textContent = words[i];
            document.getElementById("rnn-words").appendChild(chip);
            
            await new Promise(r => setTimeout(r, 300));
            
            // Update hidden state based on word
            if (positiveWords.includes(word)) {
                hiddenState = hiddenState * 0.7 + 0.9 * 0.3;
                chip.style.background = "#c6f6d5";
            } else if (negativeWords.includes(word)) {
                hiddenState = hiddenState * 0.7 + 0.1 * 0.3;
                chip.style.background = "#fed7d7";
            } else {
                hiddenState = hiddenState * 0.9 + 0.5 * 0.1;  // Slight decay to neutral
            }
            
            chip.style.opacity = "1";
            
            // Move marker
            const markerPos = hiddenState * 100;
            document.getElementById("rnn-marker").style.left = `calc(${markerPos}% - 8px)`;
            
            await new Promise(r => setTimeout(r, 200));
        }
        
        // Final result
        const resultDiv = document.getElementById("rnn-result");
        if (hiddenState > 0.6) {
            resultDiv.style.background = "#c6f6d5";
            document.getElementById("rnn-emoji").textContent = "😊";
            document.getElementById("rnn-sentiment").textContent = "Positive";
            document.getElementById("rnn-sentiment").style.color = "#276749";
        } else if (hiddenState < 0.4) {
            resultDiv.style.background = "#fed7d7";
            document.getElementById("rnn-emoji").textContent = "😞";
            document.getElementById("rnn-sentiment").textContent = "Negative";
            document.getElementById("rnn-sentiment").style.color = "#c53030";
        } else {
            resultDiv.style.background = "#fefcbf";
            document.getElementById("rnn-emoji").textContent = "😐";
            document.getElementById("rnn-sentiment").textContent = "Neutral";
            document.getElementById("rnn-sentiment").style.color = "#975a16";
        }
        document.getElementById("rnn-score").textContent = `Confidence: ${(Math.abs(hiddenState - 0.5) * 200).toFixed(0)}%`;
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 RNN Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What problem does LSTM solve that simple RNN cannot?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Processing images</div>
            <div class="lab-option" data-correct="true">Learning long-term dependencies</div>
            <div class="lab-option" data-correct="false">Faster training speed</div>
            <div class="lab-option" data-correct="false">Handling larger vocabularies</div>
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
                ? "✅ <strong>Correct!</strong> LSTMs use gates and cell state to maintain gradients over long sequences, solving the vanishing gradient problem."
                : "❌ <strong>Not quite.</strong> LSTM solves the vanishing gradient problem, allowing learning of long-term dependencies in sequences.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Learning long-term dependencies'
WHERE id = 248;

-- Lesson 249: Transfer Learning
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(249, 50, 56, 11, 'Transfer Learning', 'transfer-learning', 'advanced', 'Leverage pre-trained models for new tasks', 23);

UPDATE lessons SET description = '
<h2>Transfer Learning</h2>

<p>Transfer learning reuses knowledge from a model trained on one task to solve a different but related task. Its the secret weapon for achieving state-of-the-art results with limited data.</p>

<h3>Why Transfer Learning?</h3>

<pre class="code-example">
Problem: Training from scratch requires:
- Millions of labeled samples
- Days/weeks of training
- Expensive GPU compute
- Risk of overfitting with small data

Transfer Learning benefits:
- Use pre-trained knowledge
- Need only hundreds of samples
- Train in minutes/hours
- Better generalization
</pre>

<h3>How It Works</h3>

<pre class="code-example">
Pre-trained Model (ImageNet - 1M images, 1000 classes):

┌─────────────────────────────────────────────────┐
│ Conv1 → Conv2 → Conv3 → Conv4 → Conv5 → FC1000 │
│   ↓       ↓       ↓       ↓       ↓       ↓     │
│ edges  textures shapes  parts  objects classes  │
│        [GENERIC FEATURES]      [SPECIFIC]       │
└─────────────────────────────────────────────────┘

Strategy 1: FEATURE EXTRACTION
- Keep all conv layers frozen
- Replace only final FC layer
- Train new FC for your classes

Strategy 2: FINE-TUNING
- Keep early layers frozen
- Unfreeze later layers
- Retrain on your data with small learning rate
</pre>

<h3>Implementation with Keras</h3>

<pre class="code-example">
from tensorflow.keras.applications import VGG16, ResNet50
from tensorflow.keras import layers, models

# Load pre-trained model (without top classification layer)
base_model = VGG16(
    weights="imagenet",
    include_top=False,
    input_shape=(224, 224, 3)
)

# Freeze base model
base_model.trainable = False

# Add custom classification head
model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation="relu"),
    layers.Dropout(0.5),
    layers.Dense(num_classes, activation="softmax")
])

# Train with frozen base (feature extraction)
model.compile(optimizer="adam", 
              loss="categorical_crossentropy",
              metrics=["accuracy"])
model.fit(X_train, y_train, epochs=10)

# Fine-tune: Unfreeze last few layers
base_model.trainable = True
for layer in base_model.layers[:-4]:
    layer.trainable = False

# Recompile with lower learning rate
model.compile(optimizer=tf.keras.optimizers.Adam(1e-5),
              loss="categorical_crossentropy",
              metrics=["accuracy"])
model.fit(X_train, y_train, epochs=10)
</pre>

<h3>Pre-trained Models Available</h3>

<table>
<tr><th>Domain</th><th>Models</th><th>Trained On</th></tr>
<tr><td>Images</td><td>VGG, ResNet, EfficientNet</td><td>ImageNet (1.2M images)</td></tr>
<tr><td>Text</td><td>BERT, GPT, RoBERTa</td><td>Wikipedia, Books, Web</td></tr>
<tr><td>Audio</td><td>Wav2Vec, Whisper</td><td>Thousands of hours speech</td></tr>
</table>

<h3>When to Use Each Strategy</h3>

<pre class="code-example">
                    │ Similar Task │ Different Task │
───────────────────┼──────────────┼────────────────┤
Large Dataset      │ Fine-tune    │ Fine-tune      │
Small Dataset      │ Feature Ext. │ Feature Ext.*  │

*May need to fine-tune more layers if tasks are very different

Rule of thumb:
- Small data + similar task → Feature extraction
- Large data → Fine-tuning
- Different task → May need deeper fine-tuning
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">🔄 Interactive Demo</span>
        <span class="demo-title">Transfer Learning: Feature Extraction</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div>
                <h4>Training from Scratch</h4>
                <div style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
                    <div style="margin-bottom: 8px;">Data needed: <strong style="color: #e53e3e;">~100,000 images</strong></div>
                    <div style="margin-bottom: 8px;">Training time: <strong style="color: #e53e3e;">~24 hours</strong></div>
                    <div style="margin-bottom: 12px;">Accuracy: <strong>78%</strong></div>
                    <div style="height: 20px; background: #e2e8f0; border-radius: 10px; overflow: hidden;">
                        <div style="height: 100%; width: 78%; background: #e53e3e;"></div>
                    </div>
                </div>
            </div>
            
            <div>
                <h4>With Transfer Learning</h4>
                <div style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
                    <div style="margin-bottom: 8px;">Data needed: <strong style="color: #38a169;">~1,000 images</strong></div>
                    <div style="margin-bottom: 8px;">Training time: <strong style="color: #38a169;">~30 minutes</strong></div>
                    <div style="margin-bottom: 12px;">Accuracy: <strong>95%</strong></div>
                    <div style="height: 20px; background: #e2e8f0; border-radius: 10px; overflow: hidden;">
                        <div style="height: 100%; width: 95%; background: #38a169;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <h4 style="margin-top: 24px;">Pre-trained Feature Layers</h4>
        <div id="tl-layers" style="display: flex; gap: 4px; margin-top: 12px;"></div>
        
        <div style="margin-top: 16px;">
            <label>Layers to Fine-tune: <span id="tl-count">0</span></label>
            <input type="range" id="tl-slider" min="0" max="5" value="0" style="width: 100%;">
        </div>
        
        <div style="margin-top: 12px; font-size: 0.85rem; color: var(--text-muted);">
            <span id="tl-status">Feature Extraction Mode: All layers frozen, only classifier trains</span>
        </div>
    </div>
</div>

<script>
(function() {
    const layerNames = ["Conv1\\nEdges", "Conv2\\nTextures", "Conv3\\nPatterns", "Conv4\\nParts", "Conv5\\nObjects", "Classifier\\nYour Task"];
    
    const container = document.getElementById("tl-layers");
    layerNames.forEach((name, i) => {
        const layer = document.createElement("div");
        layer.className = "tl-layer";
        layer.id = "tl-layer-" + i;
        layer.style.cssText = "flex: 1; padding: 12px 8px; background: #c6f6d5; border-radius: 6px; text-align: center; font-size: 0.75rem; white-space: pre-line; transition: background 0.3s;";
        if (i < 5) layer.innerHTML = "🔒<br>" + name;
        else layer.innerHTML = "🔓<br>" + name;
        container.appendChild(layer);
    });
    
    document.getElementById("tl-slider").oninput = function() {
        const val = parseInt(this.value);
        document.getElementById("tl-count").textContent = val;
        
        // Update layer visuals
        for (let i = 0; i < 5; i++) {
            const layer = document.getElementById("tl-layer-" + i);
            if (i >= 5 - val) {
                layer.style.background = "#fed7d7";
                layer.innerHTML = "🔓<br>" + layerNames[i];
            } else {
                layer.style.background = "#c6f6d5";
                layer.innerHTML = "🔒<br>" + layerNames[i];
            }
        }
        
        // Update status
        const status = document.getElementById("tl-status");
        if (val === 0) {
            status.textContent = "Feature Extraction Mode: All base layers frozen, only classifier trains";
        } else if (val < 3) {
            status.textContent = "Light Fine-tuning: Top " + val + " layers + classifier train with low learning rate";
        } else {
            status.textContent = "Full Fine-tuning: Most layers retrain - need more data to avoid overfitting!";
        }
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Transfer Learning Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> With limited training data, whats the best transfer learning strategy?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Fine-tune all layers</div>
            <div class="lab-option" data-correct="true">Freeze most layers, train only classifier</div>
            <div class="lab-option" data-correct="false">Train from scratch</div>
            <div class="lab-option" data-correct="false">Use higher learning rate</div>
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
                ? "✅ <strong>Correct!</strong> With limited data, feature extraction (frozen base + trainable classifier) prevents overfitting while leveraging pre-learned features."
                : "❌ <strong>Not quite.</strong> With limited data, freezing pre-trained layers prevents overfitting while still using their learned features.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Freeze most layers, train only classifier'
WHERE id = 249;

-- Lesson 250: Regularization Techniques
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(250, 51, 55, 11, 'Regularization Techniques', 'regularization-techniques', 'intermediate', 'Prevent overfitting with L1, L2, Dropout, and more', 24);

UPDATE lessons SET description = '
<h2>Regularization Techniques</h2>

<p>Regularization prevents overfitting by adding constraints or penalties to the model. Essential for building models that generalize well.</p>

<h3>The Overfitting Problem</h3>

<pre class="code-example">
Training Data:  ★ ★ ★ ★ ★ ★
                 ╲  ╱    ╲
Overfit Line:    ──╲╱──────╲─── (follows every point!)
                
Test Data: New points → Terrible predictions!

Goal: Find the sweet spot between:
- Underfitting (too simple, high bias)
- Overfitting (too complex, high variance)
</pre>

<h3>L1 Regularization (Lasso)</h3>

<pre class="code-example">
Loss = Original Loss + λ × Σ|wᵢ|

Properties:
- Penalty proportional to |weight|
- Drives some weights to EXACTLY ZERO
- Performs feature selection
- Good when you suspect many irrelevant features

from sklearn.linear_model import Lasso

model = Lasso(alpha=0.1)  # λ = 0.1
model.fit(X_train, y_train)

# Check which features were selected
nonzero_features = sum(model.coef_ != 0)
print(f"Selected {nonzero_features} out of {len(model.coef_)} features")
</pre>

<h3>L2 Regularization (Ridge)</h3>

<pre class="code-example">
Loss = Original Loss + λ × Σwᵢ²

Properties:
- Penalty proportional to weight²
- Shrinks weights toward zero but not exactly zero
- Keeps all features but reduces their impact
- Good when you believe all features are relevant

from sklearn.linear_model import Ridge

model = Ridge(alpha=1.0)  # λ = 1.0
model.fit(X_train, y_train)

# All coefficients are non-zero but smaller
print(f"Max coefficient: {max(abs(model.coef_))}")
</pre>

<h3>Elastic Net (L1 + L2)</h3>

<pre class="code-example">
Loss = Original Loss + λ₁×Σ|wᵢ| + λ₂×Σwᵢ²

Best of both worlds:
- Feature selection (from L1)
- Weight shrinkage (from L2)

from sklearn.linear_model import ElasticNet

model = ElasticNet(alpha=0.1, l1_ratio=0.5)
# l1_ratio: 0 = pure L2, 1 = pure L1
model.fit(X_train, y_train)
</pre>

<h3>Dropout (Neural Networks)</h3>

<pre class="code-example">
Training: Randomly "drop" neurons with probability p

Layer Input:  [0.5, 0.3, 0.8, 0.2, 0.9]
                ↓     ✗     ↓     ✗     ↓
Dropout(0.4): [0.83,  0,  1.33,  0,  1.5]  (scaled by 1/(1-p))

Why it works:
- Prevents co-adaptation of neurons
- Ensemble effect (different networks each batch)
- Forces redundant representations

from tensorflow.keras import layers

model = Sequential([
    layers.Dense(128, activation="relu"),
    layers.Dropout(0.5),  # 50% dropout
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.3),  # 30% dropout
    layers.Dense(10, activation="softmax")
])
</pre>

<h3>Other Techniques</h3>

<table>
<tr><th>Technique</th><th>How</th><th>When to Use</th></tr>
<tr><td>Early Stopping</td><td>Stop when validation error increases</td><td>Any iterative training</td></tr>
<tr><td>Data Augmentation</td><td>Create synthetic training data</td><td>Limited training data</td></tr>
<tr><td>Batch Normalization</td><td>Normalize layer inputs</td><td>Deep networks</td></tr>
<tr><td>Weight Decay</td><td>L2 in optimizer</td><td>Neural networks</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">⚖️ Interactive Demo</span>
        <span class="demo-title">Regularization: L1 vs L2</span>
    </div>
    
    <div class="demo-visual">
        <h4 style="margin-bottom: 12px;">Feature Weight Comparison</h4>
        
        <div id="reg-weights" style="background: var(--main-bg); padding: 16px; border-radius: 8px; margin-bottom: 16px;"></div>
        
        <div class="demo-field">
            <label>Regularization Strength (λ): <span id="reg-val">0.5</span></label>
            <input type="range" id="reg-lambda" min="0" max="2" step="0.1" value="0.5" style="width: 100%;">
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
            <div style="text-align: center;">
                <h5>L1 (Lasso)</h5>
                <div style="font-size: 0.85rem; color: var(--text-muted);">Non-zero features: <strong id="l1-nonzero">6</strong>/8</div>
            </div>
            <div style="text-align: center;">
                <h5>L2 (Ridge)</h5>
                <div style="font-size: 0.85rem; color: var(--text-muted);">Non-zero features: <strong id="l2-nonzero">8</strong>/8</div>
            </div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p>L1 drives weights to exactly zero (feature selection), while L2 shrinks all weights but keeps them non-zero. Watch how they differ as λ increases!</p>
        </div>
    </div>
</div>

<script>
(function() {
    const featureNames = ["age", "income", "score", "visits", "noise1", "noise2", "noise3", "noise4"];
    const originalWeights = [2.5, 1.8, 1.2, 0.9, 0.4, 0.3, 0.2, 0.1];
    
    function updateWeights(lambda) {
        const container = document.getElementById("reg-weights");
        container.innerHTML = "";
        
        let l1NonZero = 0, l2NonZero = 0;
        
        featureNames.forEach((name, i) => {
            const original = originalWeights[i];
            
            // L1: Shrinks by constant, can go to zero
            const l1Weight = Math.max(0, original - lambda * 0.8);
            
            // L2: Shrinks proportionally, never exactly zero
            const l2Weight = original / (1 + lambda * 2);
            
            if (l1Weight > 0.01) l1NonZero++;
            if (l2Weight > 0.01) l2NonZero++;
            
            const row = document.createElement("div");
            row.style.cssText = "display: grid; grid-template-columns: 80px 1fr 1fr; gap: 8px; margin-bottom: 8px; align-items: center;";
            
            row.innerHTML = `
                <div style="font-size: 0.85rem;">${name}</div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="height: 16px; background: #e53e3e; border-radius: 3px; transition: width 0.3s;" 
                         style="width: ${l1Weight / 3 * 100}%;"></div>
                    <span style="font-size: 0.75rem; min-width: 35px;">${l1Weight.toFixed(2)}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="height: 16px; background: #4c9aff; border-radius: 3px; transition: width 0.3s;" 
                         style="width: ${l2Weight / 3 * 100}%;"></div>
                    <span style="font-size: 0.75rem; min-width: 35px;">${l2Weight.toFixed(2)}</span>
                </div>
            `;
            
            // Set widths after creating element
            const bars = row.querySelectorAll("div[style*=\\"height: 16px\\"]");
            bars[0].style.width = (l1Weight / 3 * 100) + "%";
            bars[1].style.width = (l2Weight / 3 * 100) + "%";
            
            container.appendChild(row);
        });
        
        document.getElementById("l1-nonzero").textContent = l1NonZero;
        document.getElementById("l2-nonzero").textContent = l2NonZero;
    }
    
    updateWeights(0.5);
    
    document.getElementById("reg-lambda").oninput = function() {
        const val = parseFloat(this.value);
        document.getElementById("reg-val").textContent = val.toFixed(1);
        updateWeights(val);
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Regularization Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Which regularization technique is best for automatic feature selection?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="true">L1 (Lasso)</div>
            <div class="lab-option" data-correct="false">L2 (Ridge)</div>
            <div class="lab-option" data-correct="false">Dropout</div>
            <div class="lab-option" data-correct="false">Early Stopping</div>
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
                ? "✅ <strong>Correct!</strong> L1 regularization can drive coefficients to exactly zero, effectively removing features from the model."
                : "❌ <strong>Not quite.</strong> L1 (Lasso) is unique in driving some weights to exactly zero, performing automatic feature selection.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'L1 (Lasso)'
WHERE id = 250;

-- Lesson 251: Cross-Validation
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(251, 51, 55, 11, 'Cross-Validation Strategies', 'cross-validation', 'intermediate', 'Robust model evaluation with K-fold and variants', 25);

UPDATE lessons SET description = '
<h2>Cross-Validation Strategies</h2>

<p>Cross-validation provides robust model evaluation by using all data for both training and testing. Essential for reliable performance estimates and hyperparameter tuning.</p>

<h3>Why Cross-Validation?</h3>

<pre class="code-example">
Problem with single train/test split:
- Results depend on which samples end up where
- May get lucky/unlucky split
- Waste data (20-30% held out)

Cross-validation benefits:
- Every sample used for testing exactly once
- More reliable performance estimate
- Detect overfitting better
</pre>

<h3>K-Fold Cross-Validation</h3>

<pre class="code-example">
5-Fold CV Example:

Fold 1: [TEST] [train] [train] [train] [train]
Fold 2: [train] [TEST] [train] [train] [train]
Fold 3: [train] [train] [TEST] [train] [train]
Fold 4: [train] [train] [train] [TEST] [train]
Fold 5: [train] [train] [train] [train] [TEST]

Process:
1. Split data into K equal parts (folds)
2. For each fold:
   - Train on K-1 folds
   - Test on remaining fold
3. Average performance across all folds

Final Score = (Score₁ + Score₂ + ... + Scoreₖ) / K
</pre>

<h3>Implementation</h3>

<pre class="code-example">
from sklearn.model_selection import cross_val_score, KFold
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier()

# Quick way - returns array of scores
scores = cross_val_score(model, X, y, cv=5, scoring="accuracy")
print(f"Accuracy: {scores.mean():.3f} (+/- {scores.std()*2:.3f})")

# More control with KFold
kfold = KFold(n_splits=5, shuffle=True, random_state=42)

for fold, (train_idx, test_idx) in enumerate(kfold.split(X)):
    X_train, X_test = X[train_idx], X[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]
    
    model.fit(X_train, y_train)
    score = model.score(X_test, y_test)
    print(f"Fold {fold+1}: {score:.3f}")
</pre>

<h3>Stratified K-Fold</h3>

<pre class="code-example">
For imbalanced classification:
- Regular K-Fold might have uneven class distribution
- Stratified ensures each fold has same class proportions

Original: 90% class 0, 10% class 1
Regular KFold: Fold might have 95% class 0, 5% class 1 😕
Stratified: Each fold has ~90% class 0, ~10% class 1 ✓

from sklearn.model_selection import StratifiedKFold

skfold = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=skfold, scoring="f1")
</pre>

<h3>Time Series CV</h3>

<pre class="code-example">
For sequential data (cant shuffle!):

TimeSeriesSplit (3 splits):
Split 1: [train] [train] [TEST]  □     □     □
Split 2: [train] [train] [train] [TEST] □     □
Split 3: [train] [train] [train] [train] [TEST] □

Always train on past, test on future!

from sklearn.model_selection import TimeSeriesSplit

tscv = TimeSeriesSplit(n_splits=5)
for train_idx, test_idx in tscv.split(X):
    # train_idx always before test_idx
    ...
</pre>

<h3>Leave-One-Out CV</h3>

<pre class="code-example">
K = N (number of samples)
- Train on N-1, test on 1
- Repeat N times
- Maximum use of data
- Very slow for large datasets

from sklearn.model_selection import LeaveOneOut

loo = LeaveOneOut()
scores = cross_val_score(model, X, y, cv=loo)
print(f"LOOCV Accuracy: {scores.mean():.3f}")
</pre>

<h3>Choosing CV Strategy</h3>

<table>
<tr><th>Scenario</th><th>Recommended CV</th></tr>
<tr><td>Balanced classification</td><td>K-Fold (K=5 or 10)</td></tr>
<tr><td>Imbalanced classification</td><td>Stratified K-Fold</td></tr>
<tr><td>Time series data</td><td>TimeSeriesSplit</td></tr>
<tr><td>Small dataset (&lt;100)</td><td>Leave-One-Out</td></tr>
<tr><td>Grouped data</td><td>GroupKFold</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">📊 Interactive Demo</span>
        <span class="demo-title">K-Fold Cross-Validation</span>
    </div>
    
    <div class="demo-visual">
        <div class="demo-field" style="margin-bottom: 16px;">
            <label>Number of Folds: <span id="cv-k">5</span></label>
            <input type="range" id="cv-slider" min="2" max="10" value="5" style="width: 100%;">
        </div>
        
        <div id="cv-folds" style="background: var(--main-bg); padding: 16px; border-radius: 8px;"></div>
        
        <button class="demo-btn" id="cv-run" style="margin-top: 16px;">▶ Run Cross-Validation</button>
        
        <div id="cv-results" style="display: none; margin-top: 16px; background: var(--main-bg); padding: 16px; border-radius: 8px;">
            <h4 style="margin-bottom: 12px;">Results</h4>
            <div id="cv-scores"></div>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-light);">
                <strong>Final: <span id="cv-final"></span></strong>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    function drawFolds(k) {
        const container = document.getElementById("cv-folds");
        container.innerHTML = "";
        
        for (let fold = 0; fold < k; fold++) {
            const row = document.createElement("div");
            row.style.cssText = "display: flex; gap: 4px; margin-bottom: 8px; align-items: center;";
            row.innerHTML = `<span style="width: 50px; font-size: 0.85rem;">Fold ${fold + 1}:</span>`;
            
            for (let i = 0; i < k; i++) {
                const block = document.createElement("div");
                block.className = "cv-block";
                block.dataset.fold = fold;
                block.dataset.idx = i;
                block.style.cssText = `flex: 1; height: 30px; border-radius: 4px; transition: background 0.3s; background: ${i === fold ? "#fed7d7" : "#c6f6d5"};`;
                block.innerHTML = `<span style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 0.7rem;">${i === fold ? "TEST" : "train"}</span>`;
                row.appendChild(block);
            }
            
            const scoreSpan = document.createElement("span");
            scoreSpan.className = "cv-score";
            scoreSpan.style.cssText = "width: 60px; text-align: right; font-size: 0.85rem; color: var(--text-muted);";
            scoreSpan.textContent = "-";
            row.appendChild(scoreSpan);
            
            container.appendChild(row);
        }
    }
    
    drawFolds(5);
    
    document.getElementById("cv-slider").oninput = function() {
        const k = parseInt(this.value);
        document.getElementById("cv-k").textContent = k;
        drawFolds(k);
        document.getElementById("cv-results").style.display = "none";
    };
    
    document.getElementById("cv-run").onclick = async function() {
        const k = parseInt(document.getElementById("cv-slider").value);
        const scores = [];
        const scoreSpans = document.querySelectorAll(".cv-score");
        
        for (let fold = 0; fold < k; fold++) {
            // Highlight current fold
            const blocks = document.querySelectorAll(`.cv-block[data-fold="${fold}"]`);
            blocks.forEach(b => b.style.opacity = "1");
            
            await new Promise(r => setTimeout(r, 400));
            
            // Generate "score"
            const score = 0.85 + Math.random() * 0.1;
            scores.push(score);
            scoreSpans[fold].textContent = score.toFixed(3);
            scoreSpans[fold].style.color = "#276749";
            
            await new Promise(r => setTimeout(r, 200));
        }
        
        // Show results
        const mean = scores.reduce((a, b) => a + b) / k;
        const std = Math.sqrt(scores.reduce((a, b) => a + (b - mean) ** 2, 0) / k);
        
        document.getElementById("cv-results").style.display = "block";
        document.getElementById("cv-scores").innerHTML = scores.map((s, i) => 
            `<span style="margin-right: 12px;">Fold ${i+1}: ${s.toFixed(3)}</span>`
        ).join("");
        document.getElementById("cv-final").textContent = `${mean.toFixed(3)} (+/- ${(std * 2).toFixed(3)})`;
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Cross-Validation Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> For imbalanced classification, which CV method should you use?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Regular K-Fold</div>
            <div class="lab-option" data-correct="true">Stratified K-Fold</div>
            <div class="lab-option" data-correct="false">Leave-One-Out</div>
            <div class="lab-option" data-correct="false">TimeSeriesSplit</div>
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
                ? "✅ <strong>Correct!</strong> Stratified K-Fold preserves class proportions in each fold, crucial for imbalanced data."
                : "❌ <strong>Not quite.</strong> Stratified K-Fold ensures each fold has the same class distribution as the original dataset.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Stratified K-Fold'
WHERE id = 251;
