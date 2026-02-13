-- ============================================================
-- Course C11: AI/ML - Quiz Questions for Expanded Lessons
-- ============================================================

-- Quiz Questions for Lesson 237: Logistic Regression
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(237, 'What function does logistic regression use to output probabilities?', 'ReLU function', 'Sigmoid function', 'Linear function', 'Softmax function', 'B', 'The sigmoid function maps any input to a value between 0 and 1, making it ideal for binary classification probabilities.', 1),
(237, 'When should you use logistic regression over linear regression?', 'When predicting continuous values', 'When the target is binary (0 or 1)', 'When dealing with images', 'When features are categorical', 'B', 'Logistic regression is designed for binary classification problems where the output should be a probability between 0 and 1.', 2);

-- Quiz Questions for Lesson 238: Decision Trees
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(238, 'What metric does a decision tree typically use for splitting?', 'Mean squared error only', 'Gini impurity or entropy', 'Cosine similarity', 'Euclidean distance', 'B', 'Decision trees use impurity measures like Gini impurity or information gain (entropy) to determine the best splits.', 1),
(238, 'What is a major disadvantage of decision trees?', 'Cannot handle categorical features', 'Prone to overfitting', 'Too slow to train', 'Cannot produce probability estimates', 'B', 'Decision trees can easily overfit by creating overly complex trees that memorize training data rather than learning patterns.', 2);

-- Quiz Questions for Lesson 239: Random Forest
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(239, 'How does Random Forest combine predictions from multiple trees?', 'Uses only the best tree', 'Averaging (regression) or voting (classification)', 'Stacking', 'Weighted by tree depth', 'B', 'Random Forest aggregates predictions by averaging for regression or majority voting for classification.', 1),
(239, 'What technique does Random Forest use to create diverse trees?', 'Using different algorithms', 'Bagging (bootstrap aggregating)', 'Gradient descent', 'Different learning rates', 'B', 'Random Forest uses bagging - training each tree on a random bootstrap sample of the data with random feature subsets.', 2);

-- Quiz Questions for Lesson 240: Support Vector Machines
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(240, 'What does SVM try to find between classes?', 'The closest points', 'The maximum margin hyperplane', 'The center of each class', 'The minimum distance', 'B', 'SVM finds the hyperplane that maximizes the margin (distance) between the closest points of different classes.', 1),
(240, 'What is the purpose of the kernel trick in SVM?', 'Speed up training', 'Handle missing values', 'Transform data to higher dimensions without explicit computation', 'Reduce overfitting', 'C', 'The kernel trick allows SVM to operate in high-dimensional space without explicitly computing the transformed features.', 2);

-- Quiz Questions for Lesson 241: K-Nearest Neighbors
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(241, 'What does KNN use to make predictions?', 'Learned weights', 'The K closest training examples', 'A decision tree', 'Gradient descent', 'B', 'KNN is a lazy learner - it stores training data and classifies new points based on the majority class of K nearest neighbors.', 1),
(241, 'What happens when K is set to 1 in KNN?', 'Model becomes more robust', 'Model becomes more sensitive to noise', 'Training becomes faster', 'Accuracy always improves', 'B', 'With K=1, predictions are based on single nearest neighbor, making the model very sensitive to noise and outliers.', 2);

-- Quiz Questions for Lesson 242: Polynomial Regression
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(242, 'What problem does polynomial regression solve that linear regression cannot?', 'Classification tasks', 'Non-linear relationships', 'Missing data', 'Multicollinearity', 'B', 'Polynomial regression can capture curved/non-linear relationships by adding polynomial terms like x², x³, etc.', 1),
(242, 'What risk increases with higher polynomial degrees?', 'Underfitting', 'Overfitting', 'Slower prediction', 'Memory usage', 'B', 'Higher degree polynomials have more flexibility and can fit noise in the training data, leading to overfitting.', 2);

-- Quiz Questions for Lesson 243: K-Means Clustering
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(243, 'K-Means is what type of learning?', 'Supervised classification', 'Unsupervised clustering', 'Reinforcement learning', 'Semi-supervised learning', 'B', 'K-Means is unsupervised - it groups data into K clusters without any labeled training data.', 1),
(243, 'What does the Elbow Method help determine?', 'The best features to use', 'The optimal number of clusters', 'The learning rate', 'The convergence time', 'B', 'The Elbow Method plots inertia vs K to find the point where adding more clusters gives diminishing returns.', 2);

-- Quiz Questions for Lesson 244: Gradient Boosting
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(244, 'How does Gradient Boosting differ from Random Forest?', 'Uses neural networks', 'Builds trees sequentially, each correcting previous errors', 'Uses SVM as base learner', 'Only works for regression', 'B', 'Gradient Boosting builds trees sequentially where each tree tries to correct the residual errors of all previous trees.', 1),
(244, 'What does a lower learning rate in boosting typically require?', 'Fewer trees', 'More trees for same performance', 'Less training data', 'Deeper trees', 'B', 'Lower learning rate means smaller steps, so more trees are needed to reach the same level of performance.', 2);

-- Quiz Questions for Lesson 245: PCA
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(245, 'What does PCA primarily aim to preserve?', 'Original feature names', 'Maximum variance in fewer dimensions', 'Exact distances between points', 'Class labels', 'B', 'PCA finds directions (principal components) that capture maximum variance in the data.', 1),
(245, 'If 3 PCs explain 95% of variance from 100 features, what does this indicate?', 'PCA failed', 'Original features were highly correlated', 'Need more components', 'Data is too complex', 'B', 'When few components capture most variance, the original features contained redundant/correlated information.', 2);

-- Quiz Questions for Lesson 246: Naive Bayes
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(246, 'What assumption makes Naive Bayes "naive"?', 'Data is normally distributed', 'All features are independent given the class', 'Only works for binary classification', 'Requires large datasets', 'B', 'Naive Bayes assumes conditional independence - that features dont influence each other given the class label.', 1),
(246, 'Naive Bayes is particularly effective for which task?', 'Image classification', 'Text classification and spam detection', 'Time series forecasting', 'Recommendation systems', 'B', 'Naive Bayes works well for text classification where the independence assumption is reasonable and high dimensions are common.', 2);

-- Quiz Questions for Lesson 247: CNN
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(247, 'What does a convolutional layer in a CNN detect?', 'Global patterns across entire image', 'Local patterns through sliding filters', 'Only edges', 'Color histogram', 'B', 'Convolution layers apply filters that slide across the image to detect local features like edges, textures, shapes.', 1),
(247, 'What is the main benefit of weight sharing in CNNs?', 'Faster training only', 'Fewer parameters and translation invariance', 'Better accuracy', 'Handles larger images', 'B', 'Weight sharing means the same filter is used across the entire image, reducing parameters and enabling translation invariance.', 2);

-- Quiz Questions for Lesson 248: RNN
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(248, 'What makes RNNs suitable for sequential data?', 'Convolutional layers', 'Hidden state that carries information across time steps', 'Pooling layers', 'Attention mechanism only', 'B', 'RNNs maintain a hidden state that passes information from one time step to the next, enabling sequence modeling.', 1),
(248, 'What problem do LSTMs solve that basic RNNs cannot?', 'Slow training', 'Learning long-term dependencies', 'Handling images', 'Parallel processing', 'B', 'LSTMs use gates to control information flow, preventing vanishing gradients and enabling learning of long-term patterns.', 2);

-- Quiz Questions for Lesson 249: Transfer Learning
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(249, 'What is the main advantage of transfer learning?', 'Always gives better accuracy', 'Achieves good results with limited data', 'Eliminates need for any training', 'Works only for image tasks', 'B', 'Transfer learning leverages pre-trained knowledge, allowing good performance with much less task-specific data.', 1),
(249, 'In feature extraction, what happens to pre-trained layers?', 'They are retrained completely', 'They are frozen and only new layers train', 'They are removed', 'They are averaged together', 'B', 'Feature extraction freezes pre-trained layers (keeping learned features) and only trains the new classification head.', 2);

-- Quiz Questions for Lesson 250: Regularization
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(250, 'What is the main purpose of regularization?', 'Speed up training', 'Prevent overfitting', 'Increase model complexity', 'Handle missing data', 'B', 'Regularization adds constraints/penalties to prevent models from fitting noise in training data.', 1),
(250, 'Which regularization technique can drive weights exactly to zero?', 'L2 (Ridge)', 'L1 (Lasso)', 'Dropout', 'Batch normalization', 'B', 'L1 regularization can shrink weights to exactly zero, effectively performing feature selection.', 2);

-- Quiz Questions for Lesson 251: Cross-Validation
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(251, 'Why is K-Fold CV better than a single train/test split?', 'Its faster', 'It uses all data for testing across folds', 'It prevents overfitting', 'It requires less data', 'B', 'K-Fold ensures every sample is used for testing exactly once, providing a more reliable performance estimate.', 1),
(251, 'For time series data, which CV strategy is appropriate?', 'Regular K-Fold', 'Stratified K-Fold', 'TimeSeriesSplit', 'Leave-One-Out', 'C', 'TimeSeriesSplit ensures training always happens on past data and testing on future data, respecting temporal order.', 2);

-- Quiz Questions for Lesson 252: Hyperparameter Tuning
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(252, 'What is a hyperparameter?', 'A parameter learned during training', 'A setting configured before training', 'The model output', 'The loss function value', 'B', 'Hyperparameters are settings (like learning rate, tree depth) set before training, unlike parameters learned during training.', 1),
(252, 'Why might random search outperform grid search with the same budget?', 'Its always faster', 'It explores more unique values per dimension', 'It uses better algorithms', 'Grid search only works for small datasets', 'B', 'Random search samples more unique values for each parameter, increasing chances of finding good values for important params.', 2);

-- Quiz Questions for Lesson 253: Feature Engineering
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(253, 'Why is feature engineering important?', 'It replaces the need for good algorithms', 'Good features often matter more than algorithm choice', 'It speeds up training', 'It reduces data requirements', 'B', 'Well-engineered features can dramatically improve model performance, often more than switching algorithms.', 1),
(253, 'For cyclical features like hour-of-day, what encoding is best?', 'One-hot encoding', 'Min-max scaling', 'Sin/cos transformation', 'Label encoding', 'C', 'Sin/cos encoding preserves the cyclical nature where hour 23 is close to hour 0, unlike other encodings.', 2);

-- Quiz Questions for Lesson 254: Flask Deployment
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(254, 'Why save models with joblib instead of training in the API?', 'Joblib is faster', 'Training at request time would be too slow', 'Flask cannot run scikit-learn', 'Models cannot be serialized', 'B', 'Training happens once offline; the saved model is loaded once at startup and reused for fast predictions.', 1),
(254, 'What should a production ML API always include?', 'GPU support', 'Input validation and error handling', 'Real-time training', 'Database connection', 'B', 'Production APIs must validate inputs and handle errors gracefully to prevent crashes and security issues.', 2);

-- Quiz Questions for Lesson 255: MLOps
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(255, 'What is data drift?', 'When model weights change', 'When input distribution differs from training', 'When API response slows', 'When features are removed', 'B', 'Data drift occurs when the distribution of input features in production differs from what the model was trained on.', 1),
(255, 'Why is model monitoring critical in production?', 'To save compute costs', 'Models can silently degrade without alerting users', 'To improve training speed', 'Required by regulations only', 'B', 'Unlike software bugs that crash, ML models can silently make bad predictions - monitoring catches degradation early.', 2);

-- Quiz Questions for Lesson 256: NLP
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(256, 'What is the purpose of lemmatization in NLP?', 'Remove punctuation', 'Reduce words to their base/dictionary form', 'Split text into sentences', 'Detect sentiment', 'B', 'Lemmatization reduces inflected words to their lemma (base form), e.g., running, runs, ran → run.', 1),
(256, 'What advantage does TF-IDF have over simple word counts?', 'Faster computation', 'Downweights common words, emphasizes distinctive terms', 'Preserves word order', 'Uses less memory', 'B', 'TF-IDF gives lower scores to words common across documents and higher scores to distinctive terms.', 2);
