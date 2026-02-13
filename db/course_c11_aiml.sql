-- ============================================================
-- Course C11: AI/ML Fundamentals for Developers
-- Comprehensive course to kickstart AI journey
-- ============================================================

-- Insert Course
INSERT INTO courses (id, title, slug, description, icon, color, difficulty, sort_order) VALUES
(11, 'AI/ML Fundamentals', 'ai-ml-fundamentals', 'Master the foundations of Artificial Intelligence and Machine Learning. From Python basics to building your first neural network — a practical guide for developers.', '🤖', '#10b981', 'intermediate', 11);

-- Insert Categories for AI/ML
INSERT INTO categories (id, name, slug, description, icon, sort_order) VALUES
(46, 'AI Fundamentals', 'ai-fundamentals', 'Introduction to AI concepts and types', 'brain', 46),
(47, 'Python for AI', 'python-for-ai', 'Python libraries for data science and ML', 'python', 47),
(48, 'Data Preprocessing', 'data-preprocessing', 'Data cleaning and feature engineering', 'data', 48),
(49, 'Machine Learning', 'machine-learning', 'ML algorithms and techniques', 'ml', 49),
(50, 'Neural Networks', 'neural-networks', 'Deep learning fundamentals', 'neural', 50),
(51, 'Model Deployment', 'model-deployment', 'ML model evaluation and deployment', 'deploy', 51);

-- Insert Levels for Course 11
INSERT INTO levels (id, course_id, title, description, sort_order) VALUES
(46, 11, 'Introduction to AI/ML', 'Understand what AI and ML are, their types, and real-world applications', 1),
(47, 11, 'Python for Data Science', 'Master NumPy, Pandas, and Matplotlib for data manipulation', 2),
(48, 11, 'Data Preprocessing', 'Learn to clean, transform, and prepare data for ML models', 3),
(49, 11, 'Machine Learning Algorithms', 'Implement classification, regression, and clustering algorithms', 4),
(50, 11, 'Neural Networks & Deep Learning', 'Build your first neural network from scratch', 5),
(51, 11, 'Model Evaluation & Deployment', 'Evaluate models and deploy them to production', 6);

-- ============================================================
-- LEVEL 1: Introduction to AI/ML (Lessons 227-230)
-- ============================================================

INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(227, 46, 46, 11, 'What is Artificial Intelligence?', 'what-is-ai', 'beginner', 'Understand AI fundamentals, history, and types of AI systems', 1);

UPDATE lessons SET description = '
<h2>What is Artificial Intelligence?</h2>

<p>Artificial Intelligence (AI) is the simulation of human intelligence in machines programmed to think and learn like humans. It encompasses a wide range of technologies that enable computers to perform tasks that typically require human intelligence.</p>

<h3>Types of AI</h3>

<table>
<tr><th>Type</th><th>Description</th><th>Example</th></tr>
<tr><td><strong>Narrow AI (ANI)</strong></td><td>Specialized in one task</td><td>Siri, Chess engines, Spam filters</td></tr>
<tr><td><strong>General AI (AGI)</strong></td><td>Human-level intelligence</td><td>Theoretical (not yet achieved)</td></tr>
<tr><td><strong>Super AI (ASI)</strong></td><td>Surpasses human intelligence</td><td>Hypothetical future AI</td></tr>
</table>

<h3>AI vs Machine Learning vs Deep Learning</h3>

<pre class="code-example">
AI (Artificial Intelligence)
 └── Machine Learning (ML)
      └── Deep Learning (DL)
           └── Neural Networks
                └── Transformers (GPT, BERT)
</pre>

<ul>
<li><strong>AI</strong>: Broad field of making intelligent machines</li>
<li><strong>ML</strong>: Subset of AI that learns from data</li>
<li><strong>DL</strong>: Subset of ML using neural networks</li>
</ul>

<h3>Real-World AI Applications</h3>

<table>
<tr><th>Industry</th><th>Application</th></tr>
<tr><td>Healthcare</td><td>Disease diagnosis, drug discovery, medical imaging</td></tr>
<tr><td>Finance</td><td>Fraud detection, algorithmic trading, risk assessment</td></tr>
<tr><td>Transportation</td><td>Self-driving cars, route optimization, traffic prediction</td></tr>
<tr><td>E-commerce</td><td>Recommendation systems, chatbots, price optimization</td></tr>
<tr><td>Security</td><td>Threat detection, facial recognition, anomaly detection</td></tr>
</table>

<h3>The AI Development Pipeline</h3>

<pre class="code-example">
1. Problem Definition → What are we solving?
2. Data Collection    → Gather relevant data
3. Data Preprocessing → Clean and prepare data
4. Model Selection    → Choose algorithm
5. Training           → Teach the model
6. Evaluation         → Test performance
7. Deployment         → Put into production
8. Monitoring         → Track and improve
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🤖 Interactive Demo</span>
        <span class="demo-title">AI Decision Tree Simulator</span>
    </div>
    
    <div class="demo-visual">
        <div class="demo-ai-classifier">
            <h4>🎯 AI Image Classifier Simulation</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">
                See how AI classifies images using pattern recognition
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px;">
                <button class="demo-btn demo-btn-sm ai-sample" data-type="cat" style="font-size: 2rem; padding: 20px;">🐱</button>
                <button class="demo-btn demo-btn-sm ai-sample" data-type="dog" style="font-size: 2rem; padding: 20px;">🐕</button>
                <button class="demo-btn demo-btn-sm ai-sample" data-type="car" style="font-size: 2rem; padding: 20px;">🚗</button>
            </div>
            
            <div id="ai-process" style="display: none;">
                <div style="background: var(--main-bg); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">AI Processing Steps:</div>
                    <div id="ai-steps" style="font-family: var(--font-mono); font-size: 0.85rem;"></div>
                </div>
                
                <div id="ai-result" style="background: #f0fff4; border: 1px solid #c6f6d5; border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="font-size: 1.5rem; margin-bottom: 8px;" id="result-icon"></div>
                    <div style="font-weight: 600; color: #276749;" id="result-text"></div>
                    <div style="font-size: 0.85rem; color: #38a169;" id="result-confidence"></div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="demo-explanation">
        <span class="explanation-icon">💡</span>
        <div class="explanation-text">
            <p><strong>How AI Classification Works:</strong></p>
            <p>1. <strong>Feature Extraction</strong> - Identifies patterns (edges, colors, shapes)</p>
            <p>2. <strong>Pattern Matching</strong> - Compares with learned examples</p>
            <p>3. <strong>Probability Calculation</strong> - Assigns confidence scores</p>
            <p>4. <strong>Classification</strong> - Returns the most likely category</p>
        </div>
    </div>
</div>

<script>
(function() {
    const samples = document.querySelectorAll(".ai-sample");
    const processDiv = document.getElementById("ai-process");
    const stepsDiv = document.getElementById("ai-steps");
    const resultIcon = document.getElementById("result-icon");
    const resultText = document.getElementById("result-text");
    const resultConf = document.getElementById("result-confidence");
    
    const classifications = {
        cat: { icon: "🐱", label: "Cat (Felis catus)", confidence: 94.7 },
        dog: { icon: "🐕", label: "Dog (Canis lupus)", confidence: 96.2 },
        car: { icon: "🚗", label: "Vehicle - Automobile", confidence: 98.1 }
    };
    
    samples.forEach(btn => {
        btn.onclick = async function() {
            const type = this.dataset.type;
            processDiv.style.display = "block";
            stepsDiv.innerHTML = "";
            resultIcon.textContent = "";
            resultText.textContent = "";
            resultConf.textContent = "";
            
            const steps = [
                "📥 Loading image data...",
                "🔍 Extracting features (edges, textures, colors)...",
                "🧠 Running through neural network layers...",
                "📊 Calculating class probabilities...",
                "✅ Classification complete!"
            ];
            
            for (let i = 0; i < steps.length; i++) {
                await new Promise(r => setTimeout(r, 400));
                stepsDiv.innerHTML += `<div style="color: ${i === steps.length-1 ? "#38a169" : "#4a5568"}; margin: 4px 0;">${steps[i]}</div>`;
            }
            
            await new Promise(r => setTimeout(r, 300));
            const result = classifications[type];
            resultIcon.textContent = result.icon;
            resultText.textContent = `Detected: ${result.label}`;
            resultConf.textContent = `Confidence: ${result.confidence}%`;
        };
    });
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Knowledge Check</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> A spam email filter that learns from user feedback is an example of:</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Artificial General Intelligence (AGI)</div>
            <div class="lab-option" data-correct="true">Narrow AI with Machine Learning</div>
            <div class="lab-option" data-correct="false">Super Artificial Intelligence (ASI)</div>
            <div class="lab-option" data-correct="false">Rule-based Expert System only</div>
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
                ? "✅ <strong>Correct!</strong> Spam filters are Narrow AI systems that use ML to improve from user feedback (marking emails as spam/not spam)."
                : "❌ <strong>Not quite.</strong> Spam filters are Narrow AI (specialized for one task) that use Machine Learning to adapt based on user feedback.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Narrow AI with Machine Learning'
WHERE id = 227;

-- Lesson 228: Machine Learning Types
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(228, 46, 46, 11, 'Types of Machine Learning', 'ml-types', 'beginner', 'Learn about Supervised, Unsupervised, and Reinforcement Learning', 2);

UPDATE lessons SET description = '
<h2>Types of Machine Learning</h2>

<p>Machine Learning algorithms are categorized based on how they learn from data. Understanding these types is fundamental to choosing the right approach for your problem.</p>

<h3>1. Supervised Learning</h3>

<p>The algorithm learns from <strong>labeled data</strong> — input-output pairs where the correct answer is provided.</p>

<pre class="code-example">
# Supervised Learning Example
Training Data:
  Input (Features)    →  Output (Label)
  [email text]        →  "spam" or "not spam"
  [house size, rooms] →  price ($450,000)
  [tumor image]       →  "malignant" or "benign"
</pre>

<table>
<tr><th>Task</th><th>Output Type</th><th>Algorithms</th><th>Example</th></tr>
<tr><td><strong>Classification</strong></td><td>Categories</td><td>Logistic Regression, SVM, Random Forest</td><td>Email → Spam/Not Spam</td></tr>
<tr><td><strong>Regression</strong></td><td>Continuous values</td><td>Linear Regression, Decision Trees</td><td>Features → House Price</td></tr>
</table>

<h3>2. Unsupervised Learning</h3>

<p>The algorithm finds patterns in <strong>unlabeled data</strong> — no correct answers provided.</p>

<pre class="code-example">
# Unsupervised Learning Example
Training Data:
  Input (Features only, no labels)
  [customer purchase history]
  [website browsing patterns]
  [sensor readings]

Output: Discovers hidden patterns/groups
</pre>

<table>
<tr><th>Task</th><th>Purpose</th><th>Algorithms</th><th>Example</th></tr>
<tr><td><strong>Clustering</strong></td><td>Group similar items</td><td>K-Means, DBSCAN, Hierarchical</td><td>Customer segmentation</td></tr>
<tr><td><strong>Dimensionality Reduction</strong></td><td>Reduce features</td><td>PCA, t-SNE, UMAP</td><td>Data visualization</td></tr>
<tr><td><strong>Association</strong></td><td>Find relationships</td><td>Apriori, FP-Growth</td><td>Market basket analysis</td></tr>
</table>

<h3>3. Reinforcement Learning</h3>

<p>The algorithm learns through <strong>trial and error</strong> — receives rewards or penalties for actions.</p>

<pre class="code-example">
# Reinforcement Learning Loop
Agent → takes Action → Environment
  ↑                        ↓
  ←── Reward/Penalty ←────←

Example: Game AI
- State: Current game position
- Action: Move left, right, jump
- Reward: +10 for coin, -100 for death
- Goal: Maximize total reward
</pre>

<h3>Choosing the Right Type</h3>

<pre class="code-example">
Do you have labeled data?
├── Yes → SUPERVISED LEARNING
│   ├── Predicting categories? → Classification
│   └── Predicting numbers? → Regression
│
├── No → UNSUPERVISED LEARNING
│   ├── Finding groups? → Clustering
│   └── Reducing complexity? → Dimensionality Reduction
│
└── Learning from interaction? → REINFORCEMENT LEARNING
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🎮 Interactive Demo</span>
        <span class="demo-title">ML Types Explorer</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: flex; gap: 12px; margin-bottom: 20px;">
            <button class="demo-btn demo-btn-sm ml-type-btn active" data-type="supervised">Supervised</button>
            <button class="demo-btn demo-btn-sm ml-type-btn" data-type="unsupervised">Unsupervised</button>
            <button class="demo-btn demo-btn-sm ml-type-btn" data-type="reinforcement">Reinforcement</button>
        </div>
        
        <div id="ml-demo-area" style="background: var(--card-bg); border: 1px solid var(--border-light); border-radius: 12px; padding: 20px; min-height: 250px;">
            <!-- Supervised Learning Demo -->
            <div id="demo-supervised" class="ml-demo-panel">
                <h4 style="margin-bottom: 12px;">📊 Supervised: Fruit Classifier</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Training with labeled examples</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="background: #f0fff4; padding: 12px; border-radius: 8px;">
                        <div style="font-weight: 600; margin-bottom: 8px;">Training Data (Labeled)</div>
                        <div style="font-family: var(--font-mono); font-size: 0.8rem;">
                            🍎 Red, Round → Apple<br>
                            🍊 Orange, Round → Orange<br>
                            🍌 Yellow, Long → Banana
                        </div>
                    </div>
                    <div>
                        <div style="font-weight: 600; margin-bottom: 8px;">Test New Fruit:</div>
                        <select id="fruit-test" style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--border-light);">
                            <option value="">Select features...</option>
                            <option value="apple">Red + Round</option>
                            <option value="orange">Orange + Round</option>
                            <option value="banana">Yellow + Long</option>
                        </select>
                        <div id="fruit-result" style="margin-top: 12px; padding: 12px; background: var(--main-bg); border-radius: 6px; display: none;"></div>
                    </div>
                </div>
            </div>
            
            <!-- Unsupervised Learning Demo -->
            <div id="demo-unsupervised" class="ml-demo-panel" style="display: none;">
                <h4 style="margin-bottom: 12px;">🔍 Unsupervised: Customer Clustering</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Finding patterns without labels</p>
                
                <div id="cluster-viz" style="position: relative; height: 180px; background: #fafafa; border-radius: 8px; overflow: hidden;">
                    <div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); font-size: 0.75rem; color: var(--text-muted);">Spending →</div>
                    <div style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%) rotate(-90deg); font-size: 0.75rem; color: var(--text-muted);">Income →</div>
                </div>
                <button class="demo-btn" id="run-clustering" style="margin-top: 12px;">Run K-Means Clustering</button>
            </div>
            
            <!-- Reinforcement Learning Demo -->
            <div id="demo-reinforcement" class="ml-demo-panel" style="display: none;">
                <h4 style="margin-bottom: 12px;">🎮 Reinforcement: Grid World Agent</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Learning through rewards and penalties</p>
                
                <div style="display: grid; grid-template-columns: auto 1fr; gap: 20px;">
                    <div id="rl-grid" style="display: grid; grid-template-columns: repeat(4, 40px); gap: 2px;"></div>
                    <div>
                        <div style="font-size: 0.85rem; margin-bottom: 8px;">
                            🤖 Agent | 🎯 Goal (+100) | 💀 Trap (-50)
                        </div>
                        <div id="rl-score" style="font-family: var(--font-mono); margin-bottom: 8px;">Score: 0</div>
                        <button class="demo-btn demo-btn-sm" id="rl-step">Step →</button>
                        <button class="demo-btn demo-btn-sm" id="rl-reset">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const typeBtns = document.querySelectorAll(".ml-type-btn");
    const panels = document.querySelectorAll(".ml-demo-panel");
    
    typeBtns.forEach(btn => {
        btn.onclick = function() {
            typeBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            panels.forEach(p => p.style.display = "none");
            document.getElementById("demo-" + this.dataset.type).style.display = "block";
        };
    });
    
    // Supervised Demo
    const fruitTest = document.getElementById("fruit-test");
    const fruitResult = document.getElementById("fruit-result");
    fruitTest.onchange = function() {
        if (!this.value) { fruitResult.style.display = "none"; return; }
        const fruits = { apple: "🍎 Apple", orange: "🍊 Orange", banana: "🍌 Banana" };
        fruitResult.style.display = "block";
        fruitResult.innerHTML = `<strong>Prediction:</strong> ${fruits[this.value]}<br><span style="color: #38a169;">✓ Based on learned patterns</span>`;
    };
    
    // Unsupervised Demo
    const clusterViz = document.getElementById("cluster-viz");
    const points = [];
    for (let i = 0; i < 30; i++) {
        const cluster = Math.floor(Math.random() * 3);
        const cx = [70, 200, 280][cluster];
        const cy = [50, 130, 60][cluster];
        points.push({ x: cx + (Math.random() - 0.5) * 60, y: cy + (Math.random() - 0.5) * 40, cluster: -1 });
    }
    
    function renderPoints() {
        clusterViz.innerHTML = points.map((p, i) => {
            const colors = ["#e53e3e", "#38a169", "#3182ce", "#805ad5"];
            const color = p.cluster >= 0 ? colors[p.cluster] : "#a0aec0";
            return `<div style="position: absolute; left: ${p.x}px; top: ${p.y}px; width: 10px; height: 10px; background: ${color}; border-radius: 50%;"></div>`;
        }).join("");
    }
    renderPoints();
    
    document.getElementById("run-clustering").onclick = function() {
        const centroids = [{x: 70, y: 50}, {x: 200, y: 130}, {x: 280, y: 60}];
        points.forEach(p => {
            let minDist = Infinity, closest = 0;
            centroids.forEach((c, i) => {
                const dist = Math.sqrt((p.x - c.x)**2 + (p.y - c.y)**2);
                if (dist < minDist) { minDist = dist; closest = i; }
            });
            p.cluster = closest;
        });
        renderPoints();
        centroids.forEach((c, i) => {
            const colors = ["#e53e3e", "#38a169", "#3182ce"];
            clusterViz.innerHTML += `<div style="position: absolute; left: ${c.x-8}px; top: ${c.y-8}px; width: 16px; height: 16px; background: ${colors[i]}; border: 2px solid white; border-radius: 50%;"></div>`;
        });
    };
    
    // Reinforcement Demo
    const rlGrid = document.getElementById("rl-grid");
    const grid = [
        ["", "", "", "🎯"],
        ["", "💀", "", ""],
        ["", "", "💀", ""],
        ["🤖", "", "", ""]
    ];
    let agentPos = {r: 3, c: 0};
    let score = 0;
    
    function renderGrid() {
        rlGrid.innerHTML = "";
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                const cell = document.createElement("div");
                cell.style.cssText = "width: 40px; height: 40px; background: #f0f0f0; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;";
                cell.textContent = (r === agentPos.r && c === agentPos.c) ? "🤖" : grid[r][c];
                rlGrid.appendChild(cell);
            }
        }
        document.getElementById("rl-score").textContent = "Score: " + score;
    }
    renderGrid();
    
    document.getElementById("rl-step").onclick = function() {
        const moves = [{r: -1, c: 0}, {r: 0, c: 1}, {r: 1, c: 0}, {r: 0, c: -1}];
        const goalR = 0, goalC = 3;
        
        // Simple greedy: move toward goal
        let bestMove = moves[0], bestDist = Infinity;
        moves.forEach(m => {
            const nr = agentPos.r + m.r, nc = agentPos.c + m.c;
            if (nr >= 0 && nr < 4 && nc >= 0 && nc < 4) {
                const dist = Math.abs(nr - goalR) + Math.abs(nc - goalC);
                if (dist < bestDist) { bestDist = dist; bestMove = m; }
            }
        });
        
        agentPos.r += bestMove.r;
        agentPos.c += bestMove.c;
        
        const cell = grid[agentPos.r][agentPos.c];
        if (cell === "🎯") { score += 100; alert("🎉 Goal reached! +100"); }
        else if (cell === "💀") { score -= 50; alert("💀 Trap! -50"); }
        else { score -= 1; } // Step cost
        
        renderGrid();
    };
    
    document.getElementById("rl-reset").onclick = function() {
        agentPos = {r: 3, c: 0};
        score = 0;
        renderGrid();
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Match the ML Type</span>
    </div>
    <div class="lab-body">
        <p><strong>Scenario:</strong> Netflix wants to recommend movies to users based on what similar users have watched, WITHOUT any explicit ratings.</p>
        <p>What type of ML is most appropriate?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">Supervised Learning - Classification</div>
            <div class="lab-option" data-correct="true">Unsupervised Learning - Clustering</div>
            <div class="lab-option" data-correct="false">Reinforcement Learning</div>
            <div class="lab-option" data-correct="false">Supervised Learning - Regression</div>
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
                ? "✅ <strong>Correct!</strong> Clustering groups users with similar viewing patterns together, then recommends what others in the cluster watched."
                : "❌ <strong>Not quite.</strong> Since there are no explicit labels (ratings), we use Unsupervised Learning (Clustering) to find groups of similar users.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'Unsupervised Learning - Clustering'
WHERE id = 228;

-- Lesson 229: Your First ML Model
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(229, 46, 46, 11, 'Your First ML Model in Python', 'first-ml-model', 'beginner', 'Build a simple classifier using scikit-learn in just 10 lines of code', 3);

UPDATE lessons SET description = '
<h2>Your First ML Model in Python</h2>

<p>Let''s build a working ML model in just a few lines of Python code! We''ll use <strong>scikit-learn</strong>, the most popular ML library.</p>

<h3>Installation</h3>

<pre class="code-example">
pip install scikit-learn numpy pandas
</pre>

<h3>The Iris Dataset</h3>

<p>We''ll use the famous Iris flower dataset — classifying flowers based on their measurements.</p>

<pre class="code-example">
# Features (X):
- Sepal length (cm)
- Sepal width (cm)  
- Petal length (cm)
- Petal width (cm)

# Labels (y):
- Setosa (0)
- Versicolor (1)
- Virginica (2)
</pre>

<h3>Complete Code: 10 Lines ML Model</h3>

<pre class="code-example">
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. Load data
iris = load_iris()
X, y = iris.data, iris.target

# 2. Split into training (80%) and testing (20%)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Create and train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# 4. Make predictions
predictions = model.predict(X_test)

# 5. Evaluate accuracy
accuracy = accuracy_score(y_test, predictions)
print(f"Model Accuracy: {accuracy * 100:.1f}%")
# Output: Model Accuracy: 96.7%
</pre>

<h3>Understanding Each Step</h3>

<table>
<tr><th>Step</th><th>Code</th><th>What It Does</th></tr>
<tr><td>1</td><td><code>load_iris()</code></td><td>Loads built-in dataset</td></tr>
<tr><td>2</td><td><code>train_test_split()</code></td><td>Splits data for training/testing</td></tr>
<tr><td>3</td><td><code>model.fit()</code></td><td>Trains the model on data</td></tr>
<tr><td>4</td><td><code>model.predict()</code></td><td>Makes predictions on new data</td></tr>
<tr><td>5</td><td><code>accuracy_score()</code></td><td>Measures how accurate it is</td></tr>
</table>

<h3>Making Predictions on New Flowers</h3>

<pre class="code-example">
# New flower measurements
new_flower = [[5.1, 3.5, 1.4, 0.2]]  # [sepal_l, sepal_w, petal_l, petal_w]

# Predict species
prediction = model.predict(new_flower)
species = iris.target_names[prediction[0]]

print(f"This flower is: {species}")
# Output: This flower is: setosa
</pre>

<h3>Common Algorithms Comparison</h3>

<table>
<tr><th>Algorithm</th><th>Best For</th><th>Speed</th><th>Accuracy</th></tr>
<tr><td>Logistic Regression</td><td>Binary classification</td><td>⚡ Fast</td><td>Good</td></tr>
<tr><td>Random Forest</td><td>General purpose</td><td>Medium</td><td>⭐ Excellent</td></tr>
<tr><td>SVM</td><td>Small-medium datasets</td><td>Slow</td><td>Very Good</td></tr>
<tr><td>K-Nearest Neighbors</td><td>Simple problems</td><td>⚡ Fast</td><td>Good</td></tr>
<tr><td>Neural Networks</td><td>Complex patterns</td><td>Slow</td><td>⭐ Excellent</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">🌸 Interactive Demo</span>
        <span class="demo-title">Iris Flower Classifier</span>
    </div>
    
    <div class="demo-visual">
        <div class="demo-browser">
            <div class="browser-bar">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="browser-url">🤖 ML Model Simulator</span>
            </div>
            <div class="browser-content">
                <h4 style="margin-bottom: 16px;">Enter Flower Measurements</h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
                    <div class="demo-field">
                        <label>Sepal Length (cm)</label>
                        <input type="number" id="sepal-l" class="demo-input" value="5.1" step="0.1" min="4" max="8">
                    </div>
                    <div class="demo-field">
                        <label>Sepal Width (cm)</label>
                        <input type="number" id="sepal-w" class="demo-input" value="3.5" step="0.1" min="2" max="5">
                    </div>
                    <div class="demo-field">
                        <label>Petal Length (cm)</label>
                        <input type="number" id="petal-l" class="demo-input" value="1.4" step="0.1" min="1" max="7">
                    </div>
                    <div class="demo-field">
                        <label>Petal Width (cm)</label>
                        <input type="number" id="petal-w" class="demo-input" value="0.2" step="0.1" min="0.1" max="3">
                    </div>
                </div>
                
                <button class="demo-btn" id="classify-btn">🔮 Classify Flower</button>
                
                <div id="ml-result" style="margin-top: 20px; display: none;">
                    <div style="background: var(--main-bg); padding: 16px; border-radius: 8px; margin-bottom: 12px;">
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">Model Processing:</div>
                        <div id="ml-steps" style="font-family: var(--font-mono); font-size: 0.8rem;"></div>
                    </div>
                    
                    <div id="prediction-result" style="background: #f0fff4; border: 1px solid #c6f6d5; padding: 20px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 8px;" id="flower-emoji"></div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: #276749;" id="flower-name"></div>
                        <div style="font-size: 0.85rem; color: #38a169;" id="flower-conf"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const classifyBtn = document.getElementById("classify-btn");
    
    classifyBtn.onclick = async function() {
        const sl = parseFloat(document.getElementById("sepal-l").value);
        const sw = parseFloat(document.getElementById("sepal-w").value);
        const pl = parseFloat(document.getElementById("petal-l").value);
        const pw = parseFloat(document.getElementById("petal-w").value);
        
        const resultDiv = document.getElementById("ml-result");
        const stepsDiv = document.getElementById("ml-steps");
        resultDiv.style.display = "block";
        stepsDiv.innerHTML = "";
        
        const steps = [
            `📥 Input: [${sl}, ${sw}, ${pl}, ${pw}]`,
            "🔄 Normalizing features...",
            "🌲 Running through Random Forest (100 trees)...",
            "📊 Aggregating votes from decision trees...",
            "✅ Classification complete!"
        ];
        
        for (const step of steps) {
            await new Promise(r => setTimeout(r, 300));
            stepsDiv.innerHTML += `<div style="margin: 4px 0;">${step}</div>`;
        }
        
        // Simple rule-based classification (simulating ML)
        let species, emoji, confidence;
        if (pl < 2.5) {
            species = "Iris Setosa";
            emoji = "🌸";
            confidence = 97.5;
        } else if (pw < 1.75) {
            species = "Iris Versicolor";
            emoji = "🌺";
            confidence = 94.2;
        } else {
            species = "Iris Virginica";
            emoji = "🌷";
            confidence = 95.8;
        }
        
        await new Promise(r => setTimeout(r, 200));
        document.getElementById("flower-emoji").textContent = emoji;
        document.getElementById("flower-name").textContent = species;
        document.getElementById("flower-conf").textContent = `Confidence: ${confidence}%`;
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">💻 Code Challenge</span>
    </div>
    <div class="lab-body">
        <p><strong>Fill in the blank:</strong> To train a scikit-learn model on your data, you call:</p>
        
        <pre class="code-example" style="background: var(--main-bg); padding: 16px; border-radius: 8px;">
model = RandomForestClassifier()
model.<span style="background: #fef3c7; padding: 2px 8px; border-radius: 4px;">____</span>(X_train, y_train)
        </pre>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">model.train(X_train, y_train)</div>
            <div class="lab-option" data-correct="true">model.fit(X_train, y_train)</div>
            <div class="lab-option" data-correct="false">model.learn(X_train, y_train)</div>
            <div class="lab-option" data-correct="false">model.build(X_train, y_train)</div>
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
                ? "✅ <strong>Correct!</strong> In scikit-learn, <code>.fit()</code> is the method used to train any model on your data."
                : "❌ <strong>Not quite.</strong> The correct method is <code>.fit()</code> — this is the standard API across all scikit-learn models.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'fit'
WHERE id = 229;

-- ============================================================
-- LEVEL 2: Python for Data Science (Lessons 230-233)
-- ============================================================

INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(230, 47, 47, 11, 'NumPy Essentials', 'numpy-essentials', 'beginner', 'Master NumPy arrays for efficient numerical computing', 4);

UPDATE lessons SET description = '
<h2>NumPy Essentials</h2>

<p>NumPy (Numerical Python) is the foundation of data science in Python. It provides fast, efficient arrays and mathematical operations.</p>

<h3>Why NumPy?</h3>

<pre class="code-example">
# Python list vs NumPy array speed comparison
Python List:  1,000,000 additions → 150ms
NumPy Array:  1,000,000 additions → 1ms (150x faster!)

Why? NumPy uses:
- Contiguous memory blocks
- Vectorized operations (SIMD)
- C-optimized code under the hood
</pre>

<h3>Creating Arrays</h3>

<pre class="code-example">
import numpy as np

# From Python list
arr = np.array([1, 2, 3, 4, 5])

# Quick creation functions
zeros = np.zeros(5)           # [0, 0, 0, 0, 0]
ones = np.ones(5)             # [1, 1, 1, 1, 1]
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]
random = np.random.rand(5)    # 5 random floats 0-1

# 2D Arrays (Matrices)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

identity = np.eye(3)  # 3x3 identity matrix
</pre>

<h3>Array Operations (Vectorized)</h3>

<pre class="code-example">
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

# Element-wise operations (no loops needed!)
a + b      # [11, 22, 33, 44]
a * b      # [10, 40, 90, 160]
a ** 2     # [1, 4, 9, 16]
np.sqrt(a) # [1.0, 1.41, 1.73, 2.0]

# Broadcasting (array + scalar)
a + 10     # [11, 12, 13, 14]
a * 2      # [2, 4, 6, 8]
</pre>

<h3>Array Indexing & Slicing</h3>

<pre class="code-example">
arr = np.array([10, 20, 30, 40, 50])

arr[0]      # 10 (first element)
arr[-1]     # 50 (last element)
arr[1:4]    # [20, 30, 40] (slice)
arr[::2]    # [10, 30, 50] (every 2nd)

# 2D indexing
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

matrix[0, 0]    # 1 (row 0, col 0)
matrix[1, :]    # [4, 5, 6] (entire row 1)
matrix[:, 2]    # [3, 6, 9] (entire col 2)
matrix[0:2, 1:] # [[2, 3], [5, 6]] (submatrix)
</pre>

<h3>Essential Statistics</h3>

<pre class="code-example">
data = np.array([23, 45, 67, 89, 12, 34, 56])

np.mean(data)   # 46.57 (average)
np.median(data) # 45.0 (middle value)
np.std(data)    # 24.8 (standard deviation)
np.min(data)    # 12
np.max(data)    # 89
np.sum(data)    # 326
np.argmax(data) # 3 (index of max value)
</pre>

<h3>Reshaping Arrays</h3>

<pre class="code-example">
arr = np.arange(12)  # [0, 1, 2, ..., 11]

# Reshape to 3x4 matrix
matrix = arr.reshape(3, 4)
# [[0, 1, 2, 3],
#  [4, 5, 6, 7],
#  [8, 9, 10, 11]]

# Flatten back to 1D
flat = matrix.flatten()  # [0, 1, 2, ..., 11]

# Transpose (swap rows/cols)
transposed = matrix.T
# [[0, 4, 8],
#  [1, 5, 9],
#  [2, 6, 10],
#  [3, 7, 11]]
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🔢 Interactive Demo</span>
        <span class="demo-title">NumPy Array Playground</span>
    </div>
    
    <div class="demo-visual">
        <div class="demo-browser">
            <div class="browser-bar">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="browser-url">NumPy Interactive Console</span>
            </div>
            <div class="browser-content" style="background: #1a1a2e; color: #e0e0e0; font-family: var(--font-mono); font-size: 0.85rem;">
                <div style="margin-bottom: 12px; color: #68d391;">>>> import numpy as np</div>
                
                <div style="margin-bottom: 8px;">Create array:</div>
                <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                    <button class="demo-btn demo-btn-sm np-op" data-op="create">np.array([1,2,3,4,5])</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="zeros">np.zeros(5)</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="random">np.random.rand(5)</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="arange">np.arange(0,10,2)</button>
                </div>
                
                <div id="np-array" style="background: #252545; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                    <span style="color: #ffd700;">arr = </span><span id="np-arr-val">[1, 2, 3, 4, 5]</span>
                </div>
                
                <div style="margin-bottom: 8px;">Operations:</div>
                <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                    <button class="demo-btn demo-btn-sm np-op" data-op="add">arr + 10</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="mul">arr * 2</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="square">arr ** 2</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="sqrt">np.sqrt(arr)</button>
                </div>
                
                <div style="margin-bottom: 8px;">Statistics:</div>
                <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                    <button class="demo-btn demo-btn-sm np-op" data-op="mean">np.mean(arr)</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="sum">np.sum(arr)</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="max">np.max(arr)</button>
                    <button class="demo-btn demo-btn-sm np-op" data-op="std">np.std(arr)</button>
                </div>
                
                <div id="np-result" style="background: #1e3a2f; padding: 12px; border-radius: 6px; color: #68d391;">
                    <span style="color: #888;">>>> </span><span id="np-result-text">Click an operation above</span>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    let arr = [1, 2, 3, 4, 5];
    const arrVal = document.getElementById("np-arr-val");
    const resultText = document.getElementById("np-result-text");
    
    const ops = document.querySelectorAll(".np-op");
    ops.forEach(btn => {
        btn.onclick = function() {
            const op = this.dataset.op;
            let result;
            
            switch(op) {
                case "create": arr = [1,2,3,4,5]; result = "Array created"; break;
                case "zeros": arr = [0,0,0,0,0]; result = "Array created with zeros"; break;
                case "random": arr = Array.from({length: 5}, () => Math.random().toFixed(3)); result = "Random array created"; break;
                case "arange": arr = [0,2,4,6,8]; result = "Range array created"; break;
                case "add": result = arr.map(x => parseFloat(x) + 10).join(", "); break;
                case "mul": result = arr.map(x => parseFloat(x) * 2).join(", "); break;
                case "square": result = arr.map(x => Math.pow(parseFloat(x), 2).toFixed(2)).join(", "); break;
                case "sqrt": result = arr.map(x => Math.sqrt(parseFloat(x)).toFixed(3)).join(", "); break;
                case "mean": result = (arr.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) / arr.length).toFixed(3); break;
                case "sum": result = arr.reduce((a,b) => parseFloat(a) + parseFloat(b), 0).toFixed(2); break;
                case "max": result = Math.max(...arr.map(x => parseFloat(x))); break;
                case "std": 
                    const mean = arr.reduce((a,b) => parseFloat(a) + parseFloat(b), 0) / arr.length;
                    const variance = arr.reduce((acc, val) => acc + Math.pow(parseFloat(val) - mean, 2), 0) / arr.length;
                    result = Math.sqrt(variance).toFixed(3);
                    break;
            }
            
            arrVal.textContent = "[" + arr.join(", ") + "]";
            resultText.textContent = result;
        };
    });
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 NumPy Challenge</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> What does this NumPy code return?</p>
        
        <pre class="code-example" style="background: #1a1a2e; color: #e0e0e0; padding: 16px; border-radius: 8px;">
<span style="color: #68d391;">import</span> numpy <span style="color: #68d391;">as</span> np

arr = np.array([[1, 2, 3],
                [4, 5, 6]])
result = arr[:, 1]
<span style="color: #68d391;">print</span>(result)
        </pre>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">[1, 2, 3]</div>
            <div class="lab-option" data-correct="true">[2, 5]</div>
            <div class="lab-option" data-correct="false">[4, 5, 6]</div>
            <div class="lab-option" data-correct="false">[[2], [5]]</div>
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
                ? "✅ <strong>Correct!</strong> <code>arr[:, 1]</code> means \"all rows, column 1\" — extracting the second column [2, 5]."
                : "❌ <strong>Not quite.</strong> <code>[:, 1]</code> selects all rows (<code>:</code>) and column index 1, giving us [2, 5].";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = '[2, 5]'
WHERE id = 230;

-- Lesson 231: Pandas for Data Analysis
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(231, 47, 47, 11, 'Pandas for Data Analysis', 'pandas-essentials', 'beginner', 'Work with DataFrames for data manipulation and analysis', 5);

UPDATE lessons SET description = '
<h2>Pandas for Data Analysis</h2>

<p>Pandas is the most powerful data manipulation library in Python. It provides DataFrames — 2D labeled data structures perfect for working with tabular data.</p>

<h3>Creating DataFrames</h3>

<pre class="code-example">
import pandas as pd

# From dictionary
df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "city": ["NYC", "LA", "Chicago"]
})

#      name  age     city
# 0   Alice   25      NYC
# 1     Bob   30       LA
# 2 Charlie   35  Chicago

# From CSV file
df = pd.read_csv("data.csv")

# From Excel
df = pd.read_excel("data.xlsx")
</pre>

<h3>Exploring Data</h3>

<pre class="code-example">
# First look at data
df.head()       # First 5 rows
df.tail()       # Last 5 rows
df.shape        # (rows, columns) tuple
df.info()       # Data types and memory
df.describe()   # Statistical summary

# Column names
df.columns      # [''name'', ''age'', ''city'']

# Data types
df.dtypes
# name    object
# age      int64
# city    object
</pre>

<h3>Selecting Data</h3>

<pre class="code-example">
# Select single column
df["name"]              # Returns Series
df[["name", "age"]]     # Returns DataFrame

# Select rows by index
df.iloc[0]              # First row
df.iloc[0:3]            # First 3 rows
df.iloc[0, 1]           # Row 0, Column 1

# Select by label
df.loc[0, "name"]       # "Alice"
df.loc[0:2, ["name", "city"]]

# Conditional selection (filtering)
df[df["age"] > 25]      # Rows where age > 25
df[df["city"] == "NYC"] # Rows where city is NYC
</pre>

<h3>Data Manipulation</h3>

<pre class="code-example">
# Add new column
df["salary"] = [50000, 60000, 70000]

# Calculated column
df["age_in_10_years"] = df["age"] + 10

# Apply function to column
df["name_upper"] = df["name"].apply(str.upper)

# Drop column
df = df.drop("salary", axis=1)

# Rename columns
df = df.rename(columns={"name": "full_name"})
</pre>

<h3>Grouping and Aggregation</h3>

<pre class="code-example">
# Sample sales data
sales = pd.DataFrame({
    "product": ["A", "B", "A", "B", "A"],
    "region": ["East", "East", "West", "West", "East"],
    "revenue": [100, 200, 150, 250, 120]
})

# Group by product
sales.groupby("product")["revenue"].sum()
# product
# A    370
# B    450

# Multiple aggregations
sales.groupby("product")["revenue"].agg(["sum", "mean", "count"])
#          sum    mean  count
# product
# A        370  123.33      3
# B        450  225.00      2
</pre>

<h3>Handling Missing Data</h3>

<pre class="code-example">
# Check for missing values
df.isnull().sum()

# Drop rows with missing values
df_clean = df.dropna()

# Fill missing values
df["age"].fillna(df["age"].mean(), inplace=True)  # Fill with mean
df["city"].fillna("Unknown", inplace=True)         # Fill with value
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-info">🐼 Interactive Demo</span>
        <span class="demo-title">Pandas DataFrame Explorer</span>
    </div>
    
    <div class="demo-visual">
        <div style="margin-bottom: 16px;">
            <strong>Sample Dataset:</strong> Employee Data
        </div>
        
        <div style="overflow-x: auto; margin-bottom: 16px;">
            <table id="pandas-table" style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                <thead>
                    <tr style="background: var(--main-bg);">
                        <th style="padding: 10px; border: 1px solid var(--border-light); text-align: left;">name</th>
                        <th style="padding: 10px; border: 1px solid var(--border-light); text-align: left;">dept</th>
                        <th style="padding: 10px; border: 1px solid var(--border-light); text-align: right;">salary</th>
                        <th style="padding: 10px; border: 1px solid var(--border-light); text-align: right;">years</th>
                    </tr>
                </thead>
                <tbody id="pandas-tbody"></tbody>
            </table>
        </div>
        
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
            <button class="demo-btn demo-btn-sm pd-op" data-op="all">Show All</button>
            <button class="demo-btn demo-btn-sm pd-op" data-op="filter-eng">Filter: Engineering</button>
            <button class="demo-btn demo-btn-sm pd-op" data-op="filter-salary">Filter: Salary > 70k</button>
            <button class="demo-btn demo-btn-sm pd-op" data-op="sort">Sort by Salary ↓</button>
            <button class="demo-btn demo-btn-sm pd-op" data-op="group">GroupBy Dept (Avg)</button>
        </div>
        
        <div id="pd-result" style="background: #1a1a2e; color: #68d391; padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.85rem;">
            <span style="color: #888;">>>> </span>df.head()
        </div>
    </div>
</div>

<script>
(function() {
    const data = [
        {name: "Alice", dept: "Engineering", salary: 85000, years: 3},
        {name: "Bob", dept: "Sales", salary: 65000, years: 5},
        {name: "Charlie", dept: "Engineering", salary: 95000, years: 7},
        {name: "Diana", dept: "Marketing", salary: 70000, years: 2},
        {name: "Eve", dept: "Engineering", salary: 78000, years: 4},
        {name: "Frank", dept: "Sales", salary: 72000, years: 6}
    ];
    
    const tbody = document.getElementById("pandas-tbody");
    const resultDiv = document.getElementById("pd-result");
    
    function renderTable(rows) {
        tbody.innerHTML = rows.map(r => `
            <tr>
                <td style="padding: 10px; border: 1px solid var(--border-light);">${r.name}</td>
                <td style="padding: 10px; border: 1px solid var(--border-light);">${r.dept}</td>
                <td style="padding: 10px; border: 1px solid var(--border-light); text-align: right;">$${r.salary.toLocaleString()}</td>
                <td style="padding: 10px; border: 1px solid var(--border-light); text-align: right;">${r.years}</td>
            </tr>
        `).join("");
    }
    
    renderTable(data);
    
    document.querySelectorAll(".pd-op").forEach(btn => {
        btn.onclick = function() {
            const op = this.dataset.op;
            let result, cmd;
            
            switch(op) {
                case "all":
                    renderTable(data);
                    cmd = "df.head(6)";
                    break;
                case "filter-eng":
                    result = data.filter(r => r.dept === "Engineering");
                    renderTable(result);
                    cmd = `df[df["dept"] == "Engineering"]  # ${result.length} rows`;
                    break;
                case "filter-salary":
                    result = data.filter(r => r.salary > 70000);
                    renderTable(result);
                    cmd = `df[df["salary"] > 70000]  # ${result.length} rows`;
                    break;
                case "sort":
                    result = [...data].sort((a, b) => b.salary - a.salary);
                    renderTable(result);
                    cmd = `df.sort_values("salary", ascending=False)`;
                    break;
                case "group":
                    const groups = {};
                    data.forEach(r => {
                        if (!groups[r.dept]) groups[r.dept] = [];
                        groups[r.dept].push(r.salary);
                    });
                    const grouped = Object.entries(groups).map(([dept, sals]) => ({
                        name: dept,
                        dept: "-",
                        salary: Math.round(sals.reduce((a,b)=>a+b,0)/sals.length),
                        years: "-"
                    }));
                    tbody.innerHTML = `
                        <tr style="background: var(--main-bg); font-weight: 600;">
                            <td style="padding: 10px; border: 1px solid var(--border-light);">Department</td>
                            <td style="padding: 10px; border: 1px solid var(--border-light);" colspan="2">Avg Salary</td>
                            <td style="padding: 10px; border: 1px solid var(--border-light);">Count</td>
                        </tr>
                    ` + Object.entries(groups).map(([dept, sals]) => `
                        <tr>
                            <td style="padding: 10px; border: 1px solid var(--border-light);">${dept}</td>
                            <td style="padding: 10px; border: 1px solid var(--border-light);" colspan="2">$${Math.round(sals.reduce((a,b)=>a+b,0)/sals.length).toLocaleString()}</td>
                            <td style="padding: 10px; border: 1px solid var(--border-light);">${sals.length}</td>
                        </tr>
                    `).join("");
                    cmd = `df.groupby("dept")["salary"].mean()`;
                    break;
            }
            
            resultDiv.innerHTML = `<span style="color: #888;">>>> </span>${cmd}`;
        };
    });
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Pandas Challenge</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> To select all rows where the "status" column equals "active", you write:</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">df.select(status="active")</div>
            <div class="lab-option" data-correct="false">df.filter("status", "active")</div>
            <div class="lab-option" data-correct="true">df[df["status"] == "active"]</div>
            <div class="lab-option" data-correct="false">df.where(status=="active")</div>
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
                ? "✅ <strong>Correct!</strong> Boolean indexing <code>df[condition]</code> is the standard way to filter DataFrames in Pandas."
                : "❌ <strong>Not quite.</strong> Pandas uses boolean indexing: <code>df[df[\\"column\\"] == value]</code> to filter rows.";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'df[df["status"] == "active"]'
WHERE id = 231;

-- ============================================================
-- LEVEL 4: Machine Learning Algorithms (Lessons 232-235)
-- ============================================================

INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(232, 49, 49, 11, 'Linear Regression', 'linear-regression', 'intermediate', 'Predict continuous values with the most fundamental ML algorithm', 6);

UPDATE lessons SET description = '
<h2>Linear Regression</h2>

<p>Linear Regression is the "Hello World" of machine learning — a simple yet powerful algorithm for predicting continuous values.</p>

<h3>The Concept</h3>

<p>Linear regression finds the best-fit line through data points to make predictions.</p>

<pre class="code-example">
y = mx + b

Where:
- y = predicted value (target)
- x = input feature
- m = slope (weight/coefficient)  
- b = y-intercept (bias)

Goal: Find m and b that minimize prediction errors
</pre>

<h3>Visual Understanding</h3>

<pre class="code-example">
Price ($)
  │
  │                    ✦  
  │                ✦ ─── Best fit line
  │            ✦ ───
  │        ✦ ───
  │    ✦ ───  ✦
  │✦ ───
  └────────────────── Size (sqft)

Prediction: For 1500 sqft → $300,000
</pre>

<h3>Implementation with Scikit-learn</h3>

<pre class="code-example">
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import numpy as np

# Sample data: House sizes and prices
X = np.array([[1000], [1200], [1500], [1800], [2000], [2200]])  # Size
y = np.array([200000, 240000, 300000, 360000, 400000, 440000])  # Price

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# View learned parameters
print(f"Slope (m): {model.coef_[0]:.2f}")      # ~200 (price per sqft)
print(f"Intercept (b): {model.intercept_:.2f}") # base price

# Make prediction
new_house = [[1700]]
predicted_price = model.predict(new_house)
print(f"Predicted: ${predicted_price[0]:,.0f}")  # ~$340,000
</pre>

<h3>Multiple Linear Regression</h3>

<p>With multiple features, the equation becomes:</p>

<pre class="code-example">
y = w₁x₁ + w₂x₂ + w₃x₃ + ... + b

Example: House price prediction
y = (w₁ × sqft) + (w₂ × bedrooms) + (w₃ × age) + b

# Code
X = df[["sqft", "bedrooms", "age"]]  # Multiple features
y = df["price"]

model = LinearRegression()
model.fit(X, y)

# Coefficients for each feature
for feature, coef in zip(X.columns, model.coef_):
    print(f"{feature}: {coef:.2f}")
</pre>

<h3>Evaluating the Model</h3>

<pre class="code-example">
from sklearn.metrics import mean_squared_error, r2_score

# Make predictions on test set
y_pred = model.predict(X_test)

# Mean Squared Error (lower is better)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)  # Root MSE (same units as y)

# R² Score (0 to 1, higher is better)
r2 = r2_score(y_test, y_pred)
print(f"R² Score: {r2:.3f}")  # 0.95 = explains 95% of variance
</pre>

<h3>When to Use Linear Regression</h3>

<table>
<tr><th>Use When</th><th>Avoid When</th></tr>
<tr><td>✅ Linear relationship between variables</td><td>❌ Non-linear patterns</td></tr>
<tr><td>✅ Predicting continuous values</td><td>❌ Predicting categories</td></tr>
<tr><td>✅ Need interpretable model</td><td>❌ Many outliers in data</td></tr>
<tr><td>✅ Fast training required</td><td>❌ Complex interactions</td></tr>
</table>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-success">📈 Interactive Demo</span>
        <span class="demo-title">House Price Predictor</span>
    </div>
    
    <div class="demo-visual">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4 style="margin-bottom: 12px;">🏠 Training Data</h4>
                <canvas id="regression-chart" width="280" height="200" style="background: #fafafa; border-radius: 8px;"></canvas>
            </div>
            
            <div>
                <h4 style="margin-bottom: 12px;">🔮 Predict Price</h4>
                
                <div class="demo-field">
                    <label>House Size (sqft)</label>
                    <input type="range" id="house-size" min="800" max="2500" value="1500" style="width: 100%;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
                        <span>800</span>
                        <span id="size-value" style="font-weight: 600; color: var(--accent-blue);">1500 sqft</span>
                        <span>2500</span>
                    </div>
                </div>
                
                <div id="lr-result" style="background: #f0fff4; border: 1px solid #c6f6d5; padding: 20px; border-radius: 8px; text-align: center; margin-top: 16px;">
                    <div style="font-size: 0.85rem; color: var(--text-muted);">Predicted Price</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #276749;" id="predicted-price">$300,000</div>
                    <div style="font-size: 0.75rem; color: #38a169; font-family: var(--font-mono);">
                        y = 200×<span id="formula-x">1500</span> + 0 = <span id="formula-result">$300,000</span>
                    </div>
                </div>
                
                <div style="margin-top: 12px; font-size: 0.85rem; color: var(--text-muted);">
                    <strong>Model:</strong> Price = $200 × sqft<br>
                    <strong>R² Score:</strong> 0.98
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    const canvas = document.getElementById("regression-chart");
    const ctx = canvas.getContext("2d");
    const sizeSlider = document.getElementById("house-size");
    const sizeValue = document.getElementById("size-value");
    const predictedPrice = document.getElementById("predicted-price");
    const formulaX = document.getElementById("formula-x");
    const formulaResult = document.getElementById("formula-result");
    
    // Training data
    const data = [
        {x: 900, y: 180000},
        {x: 1100, y: 220000},
        {x: 1300, y: 260000},
        {x: 1500, y: 300000},
        {x: 1700, y: 340000},
        {x: 1900, y: 380000},
        {x: 2100, y: 420000},
        {x: 2300, y: 460000}
    ];
    
    // Linear regression: y = 200x + 0
    const slope = 200;
    const intercept = 0;
    
    function drawChart(predX) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Axes
        ctx.strokeStyle = "#e2e8f0";
        ctx.beginPath();
        ctx.moveTo(40, 10);
        ctx.lineTo(40, 170);
        ctx.lineTo(270, 170);
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = "#718096";
        ctx.font = "10px sans-serif";
        ctx.fillText("Price ($)", 5, 20);
        ctx.fillText("Size (sqft)", 230, 185);
        
        // Regression line
        ctx.strokeStyle = "#4c9aff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(40, 160);
        ctx.lineTo(270, 20);
        ctx.stroke();
        
        // Data points
        data.forEach(d => {
            const px = 40 + (d.x - 800) / 1700 * 230;
            const py = 170 - (d.y - 100000) / 400000 * 160;
            
            ctx.fillStyle = "#4c9aff";
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Prediction point
        if (predX) {
            const px = 40 + (predX - 800) / 1700 * 230;
            const predY = slope * predX;
            const py = 170 - (predY - 100000) / 400000 * 160;
            
            ctx.fillStyle = "#e53e3e";
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.fill();
            
            // Vertical line to x-axis
            ctx.strokeStyle = "#e53e3e";
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px, 170);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }
    
    function updatePrediction() {
        const size = parseInt(sizeSlider.value);
        const price = slope * size;
        
        sizeValue.textContent = size + " sqft";
        predictedPrice.textContent = "$" + price.toLocaleString();
        formulaX.textContent = size;
        formulaResult.textContent = "$" + price.toLocaleString();
        
        drawChart(size);
    }
    
    sizeSlider.oninput = updatePrediction;
    updatePrediction();
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Regression Challenge</span>
    </div>
    <div class="lab-body">
        <p>A linear regression model has learned: <code>y = 150x + 50000</code></p>
        <p><strong>Question:</strong> What price would it predict for a 2000 sqft house?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">$300,000</div>
            <div class="lab-option" data-correct="true">$350,000</div>
            <div class="lab-option" data-correct="false">$400,000</div>
            <div class="lab-option" data-correct="false">$250,000</div>
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
                ? "✅ <strong>Correct!</strong> y = 150 × 2000 + 50000 = 300000 + 50000 = $350,000"
                : "❌ <strong>Not quite.</strong> Calculate: y = 150 × 2000 + 50000 = 300000 + 50000 = $350,000";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = '$350,000'
WHERE id = 232;

-- ============================================================
-- LEVEL 5: Neural Networks (Lessons 233-235)
-- ============================================================

INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, sort_order) VALUES
(233, 50, 50, 11, 'Neural Networks from Scratch', 'neural-networks-basics', 'intermediate', 'Understand how neural networks learn through forward and backward propagation', 7);

UPDATE lessons SET description = '
<h2>Neural Networks from Scratch</h2>

<p>Neural networks are inspired by the human brain — interconnected neurons that learn patterns from data.</p>

<h3>The Perceptron: Simplest Neural Network</h3>

<pre class="code-example">
       x₁ ──┐
             ├──► Σ ──► f(z) ──► output
       x₂ ──┘
        │
     weights (w₁, w₂)

Math:
z = w₁x₁ + w₂x₂ + b  (weighted sum + bias)
output = f(z)         (activation function)
</pre>

<h3>Activation Functions</h3>

<pre class="code-example">
# Sigmoid: Squashes output to 0-1
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# ReLU: Max of 0 and input (most popular)
def relu(z):
    return np.maximum(0, z)

# Softmax: For multi-class classification
def softmax(z):
    exp_z = np.exp(z - np.max(z))
    return exp_z / exp_z.sum()
</pre>

<h3>Multi-Layer Network Architecture</h3>

<pre class="code-example">
Input Layer    Hidden Layer    Output Layer
    (4)            (3)            (2)
    
    ○──────────────○
    ○──────────────○──────────────○
    ○──────────────○──────────────○
    ○                              

Features      Learning         Prediction
(raw data)    (patterns)       (result)

Each connection has a weight (learned during training)
</pre>

<h3>Forward Propagation</h3>

<pre class="code-example">
import numpy as np

class SimpleNN:
    def __init__(self, input_size, hidden_size, output_size):
        # Initialize random weights
        self.W1 = np.random.randn(input_size, hidden_size) * 0.01
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.01
        self.b2 = np.zeros((1, output_size))
    
    def forward(self, X):
        # Layer 1: Input → Hidden
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = self.relu(self.z1)
        
        # Layer 2: Hidden → Output
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        self.a2 = self.sigmoid(self.z2)
        
        return self.a2
    
    def relu(self, z):
        return np.maximum(0, z)
    
    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))
</pre>

<h3>Backpropagation: How Networks Learn</h3>

<pre class="code-example">
# The learning process:
1. Forward pass: Make prediction
2. Calculate error (loss)
3. Backward pass: Calculate gradients
4. Update weights: w = w - learning_rate * gradient

Loss function (Binary Cross-Entropy):
L = -[y·log(ŷ) + (1-y)·log(1-ŷ)]

Gradient descent update:
W = W - α * ∂L/∂W
b = b - α * ∂L/∂b

Where α = learning rate (typically 0.001 to 0.1)
</pre>

<h3>Training Loop</h3>

<pre class="code-example">
def train(self, X, y, epochs=1000, lr=0.01):
    for epoch in range(epochs):
        # Forward pass
        output = self.forward(X)
        
        # Calculate loss
        loss = -np.mean(y * np.log(output + 1e-8) + 
                       (1-y) * np.log(1-output + 1e-8))
        
        # Backward pass (gradients)
        m = X.shape[0]
        dz2 = output - y
        dW2 = np.dot(self.a1.T, dz2) / m
        db2 = np.sum(dz2, axis=0, keepdims=True) / m
        
        da1 = np.dot(dz2, self.W2.T)
        dz1 = da1 * (self.z1 > 0)  # ReLU derivative
        dW1 = np.dot(X.T, dz1) / m
        db1 = np.sum(dz1, axis=0, keepdims=True) / m
        
        # Update weights
        self.W2 -= lr * dW2
        self.b2 -= lr * db2
        self.W1 -= lr * dW1
        self.b1 -= lr * db1
        
        if epoch % 100 == 0:
            print(f"Epoch {epoch}, Loss: {loss:.4f}")
</pre>
',
demo_html = '
<div class="demo-scenario">
    <div class="demo-header-bar">
        <span class="demo-badge demo-badge-warning">🧠 Interactive Demo</span>
        <span class="demo-title">Neural Network Visualizer</span>
    </div>
    
    <div class="demo-visual">
        <div style="text-align: center; margin-bottom: 20px;">
            <h4>XOR Problem: Neural Network Learning</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Watch the network learn the XOR pattern (requires hidden layer!)</p>
        </div>
        
        <div style="display: grid; grid-template-columns: auto 1fr; gap: 30px; align-items: start;">
            <div>
                <svg id="nn-viz" width="240" height="200"></svg>
            </div>
            
            <div>
                <div style="margin-bottom: 16px;">
                    <strong>XOR Truth Table:</strong>
                    <table style="font-size: 0.85rem; margin-top: 8px; border-collapse: collapse;">
                        <tr style="background: var(--main-bg);">
                            <th style="padding: 6px 12px; border: 1px solid var(--border-light);">X₁</th>
                            <th style="padding: 6px 12px; border: 1px solid var(--border-light);">X₂</th>
                            <th style="padding: 6px 12px; border: 1px solid var(--border-light);">Y</th>
                            <th style="padding: 6px 12px; border: 1px solid var(--border-light);">Predicted</th>
                        </tr>
                        <tr><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">0</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">0</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">0</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;" class="nn-pred" data-idx="0">-</td></tr>
                        <tr><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">0</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">1</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">1</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;" class="nn-pred" data-idx="1">-</td></tr>
                        <tr><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">1</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">0</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">1</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;" class="nn-pred" data-idx="2">-</td></tr>
                        <tr><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">1</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">1</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;">0</td><td style="padding: 6px 12px; border: 1px solid var(--border-light); text-align: center;" class="nn-pred" data-idx="3">-</td></tr>
                    </table>
                </div>
                
                <div style="margin-bottom: 12px;">
                    <strong>Epoch:</strong> <span id="nn-epoch">0</span> | <strong>Loss:</strong> <span id="nn-loss">-</span>
                </div>
                
                <button class="demo-btn" id="nn-train">▶ Train 1000 Epochs</button>
                <button class="demo-btn demo-btn-sm" id="nn-reset">Reset</button>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    // Draw network visualization
    const svg = document.getElementById("nn-viz");
    const layers = [[30, 60], [30, 140], [120, 40], [120, 100], [120, 160], [210, 100]];
    const connections = [
        [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4],
        [2, 5], [3, 5], [4, 5]
    ];
    
    let weights = connections.map(() => (Math.random() - 0.5) * 2);
    
    function drawNetwork() {
        svg.innerHTML = "";
        // Connections
        connections.forEach((c, i) => {
            const [from, to] = c;
            const color = weights[i] > 0 ? "#38a169" : "#e53e3e";
            const width = Math.abs(weights[i]) * 3 + 1;
            svg.innerHTML += `<line x1="${layers[from][0]}" y1="${layers[from][1]}" x2="${layers[to][0]}" y2="${layers[to][1]}" stroke="${color}" stroke-width="${width}" opacity="0.6"/>`;
        });
        // Nodes
        layers.forEach((pos, i) => {
            const color = i < 2 ? "#4c9aff" : (i < 5 ? "#9f7aea" : "#f59e0b");
            svg.innerHTML += `<circle cx="${pos[0]}" cy="${pos[1]}" r="18" fill="${color}"/>`;
        });
        // Labels
        svg.innerHTML += `<text x="30" y="180" font-size="10" fill="#718096" text-anchor="middle">Input</text>`;
        svg.innerHTML += `<text x="120" y="180" font-size="10" fill="#718096" text-anchor="middle">Hidden</text>`;
        svg.innerHTML += `<text x="210" y="180" font-size="10" fill="#718096" text-anchor="middle">Output</text>`;
    }
    
    drawNetwork();
    
    // Simple XOR neural network
    let W1, W2, b1, b2;
    
    function initWeights() {
        W1 = [[Math.random()-0.5, Math.random()-0.5, Math.random()-0.5],
              [Math.random()-0.5, Math.random()-0.5, Math.random()-0.5]];
        W2 = [[Math.random()-0.5], [Math.random()-0.5], [Math.random()-0.5]];
        b1 = [0, 0, 0];
        b2 = [0];
    }
    initWeights();
    
    const X = [[0, 0], [0, 1], [1, 0], [1, 1]];
    const Y = [[0], [1], [1], [0]];
    
    function sigmoid(x) { return 1 / (1 + Math.exp(-x)); }
    
    function forward(x) {
        const h = [0, 0, 0];
        for (let j = 0; j < 3; j++) {
            h[j] = sigmoid(x[0]*W1[0][j] + x[1]*W1[1][j] + b1[j]);
        }
        let o = 0;
        for (let j = 0; j < 3; j++) {
            o += h[j] * W2[j][0];
        }
        return { h, o: sigmoid(o + b2[0]) };
    }
    
    function train(epochs) {
        const lr = 0.5;
        let loss = 0;
        
        for (let e = 0; e < epochs; e++) {
            loss = 0;
            for (let i = 0; i < 4; i++) {
                const { h, o } = forward(X[i]);
                const y = Y[i][0];
                const err = o - y;
                loss += err * err;
                
                // Backprop
                const do_ = err * o * (1 - o);
                for (let j = 0; j < 3; j++) {
                    const dh = do_ * W2[j][0] * h[j] * (1 - h[j]);
                    W1[0][j] -= lr * dh * X[i][0];
                    W1[1][j] -= lr * dh * X[i][1];
                    b1[j] -= lr * dh;
                    W2[j][0] -= lr * do_ * h[j];
                }
                b2[0] -= lr * do_;
            }
        }
        return loss / 4;
    }
    
    document.getElementById("nn-train").onclick = function() {
        let epoch = 0;
        const interval = setInterval(() => {
            const loss = train(10);
            epoch += 10;
            document.getElementById("nn-epoch").textContent = epoch;
            document.getElementById("nn-loss").textContent = loss.toFixed(4);
            
            // Update predictions
            document.querySelectorAll(".nn-pred").forEach((el, i) => {
                const pred = forward(X[i]).o;
                el.textContent = pred.toFixed(2);
                el.style.color = Math.abs(pred - Y[i][0]) < 0.3 ? "#38a169" : "#e53e3e";
            });
            
            // Update visualization weights
            weights = [W1[0][0], W1[0][1], W1[0][2], W1[1][0], W1[1][1], W1[1][2], W2[0][0], W2[1][0], W2[2][0]];
            drawNetwork();
            
            if (epoch >= 1000) clearInterval(interval);
        }, 20);
    };
    
    document.getElementById("nn-reset").onclick = function() {
        initWeights();
        document.getElementById("nn-epoch").textContent = "0";
        document.getElementById("nn-loss").textContent = "-";
        document.querySelectorAll(".nn-pred").forEach(el => { el.textContent = "-"; el.style.color = ""; });
        weights = connections.map(() => (Math.random() - 0.5) * 2);
        drawNetwork();
    };
})();
</script>
',
lab_html = '
<div class="lab-exercise">
    <div class="lab-header">
        <span class="lab-badge lab-badge-challenge">🧪 Neural Network Quiz</span>
    </div>
    <div class="lab-body">
        <p><strong>Question:</strong> Why cant a single perceptron (no hidden layers) solve the XOR problem?</p>
        
        <div class="lab-options">
            <div class="lab-option" data-correct="false">XOR requires more training data</div>
            <div class="lab-option" data-correct="true">XOR is not linearly separable</div>
            <div class="lab-option" data-correct="false">Perceptrons cant use activation functions</div>
            <div class="lab-option" data-correct="false">XOR needs regression, not classification</div>
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
                ? "✅ <strong>Correct!</strong> XOR outputs cant be separated by a single line. Hidden layers create non-linear decision boundaries."
                : "❌ <strong>Not quite.</strong> A single perceptron can only draw one line to separate classes. XOR requires a non-linear boundary (hidden layers).";
            feedback.style.display = "block";
        };
    });
})();
</script>
',
lab_solution = 'XOR is not linearly separable'
WHERE id = 233;

-- ============================================================
-- Quiz Questions for Course 11
-- ============================================================

INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(227, 'Which type of AI can perform any intellectual task a human can?', 'Narrow AI (ANI)', 'General AI (AGI)', 'Super AI (ASI)', 'Machine Learning', 'B', 'AGI (Artificial General Intelligence) refers to AI with human-level cognitive abilities across all domains.'),
(227, 'Which is the correct hierarchy from broadest to most specific?', 'ML → AI → DL → Neural Networks', 'AI → ML → DL → Neural Networks', 'DL → ML → AI → Neural Networks', 'Neural Networks → DL → ML → AI', 'B', 'AI is the broadest field, ML is a subset of AI, DL is a subset of ML, and Neural Networks are the architecture used in DL.'),

(228, 'A model that learns from labeled examples to predict categories is:', 'Unsupervised Learning', 'Reinforcement Learning', 'Supervised Classification', 'Clustering', 'C', 'Supervised Classification uses labeled data (input-output pairs) to learn to predict categorical outputs.'),
(228, 'K-Means is an example of:', 'Supervised Learning', 'Unsupervised Clustering', 'Reinforcement Learning', 'Regression', 'B', 'K-Means is an unsupervised algorithm that groups similar data points into clusters without labels.'),

(229, 'In scikit-learn, which method trains a model on data?', 'model.train()', 'model.learn()', 'model.fit()', 'model.build()', 'C', 'The .fit() method is the standard API across all scikit-learn models for training.'),
(229, 'What does train_test_split() do?', 'Trains the model', 'Splits data for training and evaluation', 'Tests the model accuracy', 'Splits features from labels', 'B', 'train_test_split() divides your dataset into training and testing subsets for model evaluation.'),

(230, 'What does np.reshape(arr, (3, 4)) do?', 'Creates a 3x4 matrix', 'Multiplies array by 3 and 4', 'Selects rows 3 and 4', 'Filters values between 3 and 4', 'A', 'reshape() transforms the array into a new shape (3 rows, 4 columns) without changing the data.'),
(230, 'NumPy arrays are faster than Python lists because:', 'They use more memory', 'They store data in contiguous memory blocks', 'They have more features', 'They are written in Python', 'B', 'NumPy stores data in contiguous memory and uses vectorized C operations, making it much faster.'),

(231, 'To select rows where column "age" > 25 in Pandas:', 'df.select(age > 25)', 'df[df["age"] > 25]', 'df.filter(age > 25)', 'df.where("age" > 25)', 'B', 'Boolean indexing df[condition] is the standard way to filter DataFrames in Pandas.'),
(231, 'df.groupby("category")["sales"].sum() does:', 'Counts categories', 'Sums sales for each category', 'Creates a new column', 'Sorts by category', 'B', 'groupby() groups rows by category, then sum() aggregates the sales column for each group.'),

(232, 'In y = mx + b, what does m represent?', 'The y-intercept', 'The slope (weight)', 'The prediction', 'The error', 'B', 'm is the slope/coefficient that determines how much y changes for each unit change in x.'),
(232, 'R² = 0.85 means the model explains:', '85% of the variance in the data', '85% of the predictions are correct', 'The error is 85%', '15% of the variance', 'A', 'R² (coefficient of determination) indicates what percentage of the target variance is explained by the model.'),

(233, 'The ReLU activation function returns:', 'Values between 0 and 1', 'max(0, x)', 'Values between -1 and 1', 'The exponential of x', 'B', 'ReLU (Rectified Linear Unit) returns the input if positive, otherwise 0: max(0, x).'),
(233, 'Backpropagation is used to:', 'Make predictions', 'Calculate gradients for weight updates', 'Initialize weights', 'Normalize data', 'B', 'Backpropagation calculates how much each weight contributed to the error, enabling gradient descent updates.');
