/**
 * ZentinelS Admin Console
 * Terminal-style admin interface for platform management
 */

// ==================== GLOBALS ====================
const API_BASE = 'api/admin';
let currentUser = null;
let currentSection = 'dashboard';
let courses = [];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        // Check authentication and admin access
        const user = await checkAuth();
        if (!user) {
            showAccessDenied('Please login to access the admin console.');
            return;
        }
        
        currentUser = user;
        
        // Check if user is admin or instructor
        const isAdmin = await checkAdminAccess();
        if (!isAdmin) {
            showAccessDenied('Only admin and instructor accounts can access this area.');
            return;
        }
        
        // Show admin app
        hideLoading();
        document.getElementById('admin-app').classList.remove('hidden');
        
        // Setup UI
        setupUserInfo();
        setupNavigation();
        setupEventListeners();
        startServerClock();
        
        // Load initial data
        await loadDashboard();
        await loadCoursesForFilters();
        
    } catch (error) {
        console.error('Init error:', error);
        showAccessDenied('Failed to initialize admin console.');
    }
}

async function checkAuth() {
    try {
        const resp = await fetch('api/auth/me');
        if (!resp.ok) return null;
        const data = await resp.json();
        return data.user || data;
    } catch {
        return null;
    }
}

async function checkAdminAccess() {
    try {
        const resp = await fetch(`${API_BASE}/stats`);
        return resp.ok;
    } catch {
        return false;
    }
}

function hideLoading() {
    document.getElementById('loading-screen').classList.add('hidden');
}

function showAccessDenied(message) {
    hideLoading();
    const denied = document.getElementById('access-denied');
    denied.querySelector('p').textContent = message || 'Access denied.';
    denied.classList.remove('hidden');
}

function setupUserInfo() {
    document.getElementById('admin-name').textContent = currentUser.displayName || currentUser.username;
    // Role will be shown based on access (if they got here, they're admin/instructor)
    document.getElementById('admin-role').textContent = 'ADMIN';
}

function setupNavigation() {
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            navigateTo(section);
        });
    });
    
    // Handle hash navigation
    if (window.location.hash) {
        const section = window.location.hash.slice(1);
        navigateTo(section);
    }
}

function navigateTo(section) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-section="${section}"]`)?.classList.add('active');
    
    // Update sections
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${section}`)?.classList.add('active');
    
    currentSection = section;
    window.location.hash = section;
    
    // Load section data
    switch (section) {
        case 'dashboard': loadDashboard(); break;
        case 'activity': loadActivity(); break;
        case 'users': loadUsers(); break;
        case 'courses': loadCourses(); break;
        case 'lessons': loadLessons(); break;
        case 'quizzes': loadQuizzes(); break;
        case 'analytics': loadAnalytics(); break;
    }
}

function setupEventListeners() {
    // Logout
    document.getElementById('btn-logout').addEventListener('click', logout);
    
    // Search inputs with debounce
    document.getElementById('user-search')?.addEventListener('input', debounce(loadUsers, 500));
    document.getElementById('user-role-filter')?.addEventListener('change', loadUsers);
    document.getElementById('lesson-search')?.addEventListener('input', debounce(loadLessons, 500));
    document.getElementById('lesson-course-filter')?.addEventListener('change', loadLessons);
    document.getElementById('quiz-search')?.addEventListener('input', debounce(loadQuizzes, 500));
    document.getElementById('quiz-lesson-filter')?.addEventListener('change', loadQuizzes);
}

function startServerClock() {
    const updateTime = () => {
        const now = new Date();
        document.getElementById('server-time').textContent = now.toLocaleTimeString();
    };
    updateTime();
    setInterval(updateTime, 1000);
}

async function logout() {
    try {
        await fetch('api/auth/logout', { method: 'POST' });
    } finally {
        window.location.href = 'index.html';
    }
}

// ==================== API HELPERS ====================
async function apiGet(endpoint) {
    const resp = await fetch(`${API_BASE}/${endpoint}`);
    if (!resp.ok) throw new Error(`API error: ${resp.status}`);
    return resp.json();
}

async function apiPost(endpoint, data) {
    const resp = await fetch(`${API_BASE}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || `API error: ${resp.status}`);
    }
    return resp.json();
}

async function apiDelete(endpoint) {
    const resp = await fetch(`${API_BASE}/${endpoint}`, { method: 'DELETE' });
    if (!resp.ok) throw new Error(`API error: ${resp.status}`);
    return resp.json();
}

// ==================== DASHBOARD ====================
async function loadDashboard() {
    try {
        const stats = await apiGet('stats');
        
        // Update stat cards
        document.getElementById('stat-users').textContent = stats.totalUsers || 0;
        document.getElementById('stat-courses').textContent = stats.totalCourses || 0;
        document.getElementById('stat-lessons').textContent = stats.totalLessons || 0;
        document.getElementById('stat-quizzes').textContent = stats.totalQuizzes || 0;
        document.getElementById('stat-completions').textContent = stats.completedLessons || 0;
        document.getElementById('stat-avg-score').textContent = stats.avgQuizScore ? `${stats.avgQuizScore}%` : 'N/A';
        document.getElementById('stat-new-users').textContent = stats.newUsersThisWeek || 0;
        document.getElementById('stat-attempts').textContent = stats.quizAttempts || 0;
        
        // Users by role
        renderUsersByRole(stats.usersByRole || []);
        
        // Course progress
        renderCourseProgress(stats.courseStats || []);
        
    } catch (error) {
        console.error('Dashboard error:', error);
        showToast('Failed to load dashboard', 'error');
    }
}

function renderUsersByRole(roleData) {
    const container = document.getElementById('users-by-role');
    const total = roleData.reduce((sum, r) => sum + r.count, 0) || 1;
    
    container.innerHTML = roleData.map(r => `
        <div class="role-bar">
            <span class="role-name">${r.role}</span>
            <div class="role-bar-fill">
                <div class="role-bar-inner ${r.role}" style="width: ${(r.count / total) * 100}%"></div>
            </div>
            <span class="role-count">${r.count}</span>
        </div>
    `).join('');
}

function renderCourseProgress(courseStats) {
    const container = document.getElementById('course-progress');
    const maxLessons = Math.max(...courseStats.map(c => c.totalLessons)) || 1;
    
    container.innerHTML = courseStats.map(c => `
        <div class="course-bar">
            <span class="course-name" title="${c.title}">C${c.id}</span>
            <div class="course-bar-fill">
                <div class="course-bar-inner" style="width: ${(c.totalLessons / maxLessons) * 100}%"></div>
            </div>
            <span class="course-stats">${c.completed}/${c.totalLessons}</span>
        </div>
    `).join('');
}

// ==================== ACTIVITY ====================
async function loadActivity() {
    try {
        const data = await apiGet('activity');
        const tbody = document.querySelector('#activity-table tbody');
        
        tbody.innerHTML = data.map(a => `
            <tr>
                <td>${formatDate(a.updatedAt)}</td>
                <td>
                    <strong>${a.displayName || a.username}</strong>
                    <br><small style="color: var(--text-muted)">@${a.username}</small>
                </td>
                <td>${a.lessonTitle}</td>
                <td>
                    ${a.completed 
                        ? '<span class="badge badge-completed">Completed</span>' 
                        : '<span class="badge">In Progress</span>'}
                </td>
                <td>${a.quizScore !== null ? `${a.quizScore}%` : '-'}</td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Activity error:', error);
        showToast('Failed to load activity', 'error');
    }
}

// ==================== USERS ====================
async function loadUsers() {
    try {
        const search = document.getElementById('user-search')?.value || '';
        const role = document.getElementById('user-role-filter')?.value || '';
        
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (role) params.append('role', role);
        
        const data = await apiGet(`users?${params}`);
        const tbody = document.querySelector('#users-table tbody');
        
        tbody.innerHTML = data.users.map(u => `
            <tr>
                <td>${u.id}</td>
                <td><strong>${u.username}</strong></td>
                <td>${u.email}</td>
                <td>${u.displayName || '-'}</td>
                <td><span class="badge badge-${u.role}">${u.role}</span></td>
                <td>${u.lessonsCompleted}</td>
                <td>${u.avgScore !== null ? `${u.avgScore}%` : '-'}</td>
                <td>${formatDate(u.createdAt, true)}</td>
                <td>
                    <button class="btn-action btn-view" onclick="viewUser(${u.id})">View</button>
                    <button class="btn-action btn-edit" onclick="editUser(${u.id}, '${u.role}', '${escape(u.displayName || '')}')">Edit</button>
                    <button class="btn-action btn-delete" onclick="deleteUser(${u.id}, '${escape(u.username)}')">Delete</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Users error:', error);
        showToast('Failed to load users', 'error');
    }
}

async function viewUser(id) {
    try {
        const user = await apiGet(`users/${id}`);
        
        const content = `
            <div class="user-detail">
                <div class="form-row">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" value="${user.username}" disabled>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" value="${user.email}" disabled>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Display Name</label>
                        <input type="text" value="${user.displayName || ''}" disabled>
                    </div>
                    <div class="form-group">
                        <label>Role</label>
                        <input type="text" value="${user.role}" disabled>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Lessons Completed</label>
                        <input type="text" value="${user.lessonsCompleted}" disabled>
                    </div>
                    <div class="form-group">
                        <label>Average Score</label>
                        <input type="text" value="${user.avgScore !== null ? user.avgScore + '%' : 'N/A'}" disabled>
                    </div>
                </div>
                <div class="form-group">
                    <label>Recent Progress</label>
                    <div style="max-height: 200px; overflow-y: auto; background: var(--bg-dark); padding: 10px; border-radius: 8px;">
                        ${user.recentProgress.length ? user.recentProgress.map(p => `
                            <div style="padding: 8px 0; border-bottom: 1px solid var(--border-color);">
                                <strong>${p.lessonTitle}</strong>
                                ${p.completed ? '<span class="badge badge-completed" style="margin-left: 10px;">✓</span>' : ''}
                                ${p.quizScore !== null ? `<span style="margin-left: 10px; color: var(--accent-cyan);">${p.quizScore}%</span>` : ''}
                            </div>
                        `).join('') : '<div style="color: var(--text-muted);">No progress yet</div>'}
                    </div>
                </div>
            </div>
        `;
        
        showModal('User Details: ' + user.username, content, null);
        document.getElementById('modal-save').style.display = 'none';
        
    } catch (error) {
        showToast('Failed to load user details', 'error');
    }
}

function editUser(id, currentRole, currentDisplayName) {
    const content = `
        <div class="form-group">
            <label>Display Name</label>
            <input type="text" id="edit-display-name" value="${currentDisplayName}">
        </div>
        <div class="form-group">
            <label>Role</label>
            <select id="edit-role">
                <option value="student" ${currentRole === 'student' ? 'selected' : ''}>Student</option>
                <option value="instructor" ${currentRole === 'instructor' ? 'selected' : ''}>Instructor</option>
                <option value="admin" ${currentRole === 'admin' ? 'selected' : ''}>Admin</option>
            </select>
        </div>
    `;
    
    showModal('Edit User', content, async () => {
        try {
            const displayName = document.getElementById('edit-display-name').value;
            const role = document.getElementById('edit-role').value;
            
            await apiPost(`users/${id}`, { displayName, role });
            showToast('User updated successfully', 'success');
            closeModal();
            loadUsers();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });
}

async function deleteUser(id, username) {
    if (!confirm(`Are you sure you want to delete user "${username}"? This will also delete all their progress.`)) {
        return;
    }
    
    try {
        await apiDelete(`users/${id}`);
        showToast('User deleted successfully', 'success');
        loadUsers();
    } catch (error) {
        showToast('Failed to delete user', 'error');
    }
}

// ==================== COURSES ====================
async function loadCourses() {
    try {
        const data = await apiGet('courses');
        const tbody = document.querySelector('#courses-table tbody');
        
        courses = data; // Store for filters
        
        tbody.innerHTML = data.map(c => `
            <tr>
                <td>${c.id}</td>
                <td><strong>${c.title}</strong></td>
                <td>${c.slug}</td>
                <td>${c.lessonCount}</td>
                <td>${c.quizCount}</td>
                <td>
                    <button class="btn-action btn-view" onclick="filterLessonsByCourse(${c.id})">View Lessons</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Courses error:', error);
        showToast('Failed to load courses', 'error');
    }
}

async function loadCoursesForFilters() {
    try {
        const data = await apiGet('courses');
        courses = data;
        
        // Populate lesson course filter
        const lessonFilter = document.getElementById('lesson-course-filter');
        if (lessonFilter) {
            lessonFilter.innerHTML = '<option value="">All Courses</option>' +
                data.map(c => `<option value="${c.id}">C${c.id}: ${c.title}</option>`).join('');
        }
    } catch (error) {
        console.error('Failed to load courses for filters:', error);
    }
}

function filterLessonsByCourse(courseId) {
    navigateTo('lessons');
    document.getElementById('lesson-course-filter').value = courseId;
    loadLessons();
}

// ==================== LESSONS ====================
async function loadLessons() {
    try {
        const courseId = document.getElementById('lesson-course-filter')?.value || '';
        const search = document.getElementById('lesson-search')?.value || '';
        
        const params = new URLSearchParams();
        if (courseId) params.append('courseId', courseId);
        if (search) params.append('search', search);
        
        const data = await apiGet(`lessons?${params}`);
        const tbody = document.querySelector('#lessons-table tbody');
        
        // Update quiz filter
        updateQuizLessonFilter(data.lessons);
        
        tbody.innerHTML = data.lessons.map(l => `
            <tr>
                <td>${l.id}</td>
                <td>C${l.courseId}</td>
                <td><strong>${l.title}</strong></td>
                <td><span class="badge badge-${l.difficulty || 'beginner'}">${l.difficulty || 'beginner'}</span></td>
                <td>${l.descriptionLength.toLocaleString()} chars</td>
                <td>${l.quizCount}</td>
                <td>
                    <button class="btn-action btn-edit" onclick="editLesson(${l.id}, '${escape(l.title)}', '${l.difficulty || 'beginner'}')">Edit</button>
                    <button class="btn-action btn-view" onclick="filterQuizzesByLesson(${l.id})">Quizzes</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Lessons error:', error);
        showToast('Failed to load lessons', 'error');
    }
}

function editLesson(id, title, difficulty) {
    const content = `
        <div class="form-group">
            <label>Title</label>
            <input type="text" id="edit-lesson-title" value="${title}">
        </div>
        <div class="form-group">
            <label>Difficulty</label>
            <select id="edit-lesson-difficulty">
                <option value="beginner" ${difficulty === 'beginner' ? 'selected' : ''}>Beginner</option>
                <option value="intermediate" ${difficulty === 'intermediate' ? 'selected' : ''}>Intermediate</option>
                <option value="advanced" ${difficulty === 'advanced' ? 'selected' : ''}>Advanced</option>
            </select>
        </div>
    `;
    
    showModal('Edit Lesson', content, async () => {
        try {
            const newTitle = document.getElementById('edit-lesson-title').value;
            const newDifficulty = document.getElementById('edit-lesson-difficulty').value;
            
            await apiPost(`lessons/${id}`, { title: newTitle, difficulty: newDifficulty });
            showToast('Lesson updated successfully', 'success');
            closeModal();
            loadLessons();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });
}

function updateQuizLessonFilter(lessons) {
    const filter = document.getElementById('quiz-lesson-filter');
    if (filter && lessons) {
        const currentValue = filter.value;
        filter.innerHTML = '<option value="">All Lessons</option>' +
            lessons.map(l => `<option value="${l.id}">${l.title}</option>`).join('');
        filter.value = currentValue;
    }
}

function filterQuizzesByLesson(lessonId) {
    navigateTo('quizzes');
    document.getElementById('quiz-lesson-filter').value = lessonId;
    loadQuizzes();
}

// ==================== QUIZZES ====================
async function loadQuizzes() {
    try {
        const lessonId = document.getElementById('quiz-lesson-filter')?.value || '';
        const search = document.getElementById('quiz-search')?.value || '';
        
        const params = new URLSearchParams();
        if (lessonId) params.append('lessonId', lessonId);
        if (search) params.append('search', search);
        
        const data = await apiGet(`quizzes?${params}`);
        const tbody = document.querySelector('#quizzes-table tbody');
        
        tbody.innerHTML = data.quizzes.map(q => `
            <tr>
                <td>${q.id}</td>
                <td>${q.lessonTitle}</td>
                <td style="max-width: 400px;">
                    <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${q.question}
                    </div>
                </td>
                <td><strong>${q.correct}</strong></td>
                <td>
                    <button class="btn-action btn-view" onclick='viewQuiz(${JSON.stringify(q).replace(/'/g, "\\'")})''>View</button>
                    <button class="btn-action btn-edit" onclick='editQuiz(${JSON.stringify(q).replace(/'/g, "\\'")})'>Edit</button>
                    <button class="btn-action btn-delete" onclick="deleteQuiz(${q.id})">Delete</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Quizzes error:', error);
        showToast('Failed to load quizzes', 'error');
    }
}

function viewQuiz(quiz) {
    const content = `
        <div class="form-group">
            <label>Question</label>
            <textarea disabled style="min-height: 80px;">${quiz.question}</textarea>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Option A ${quiz.correct === 'A' ? '✓' : ''}</label>
                <input type="text" value="${quiz.optionA}" disabled style="${quiz.correct === 'A' ? 'border-color: var(--accent-green);' : ''}">
            </div>
            <div class="form-group">
                <label>Option B ${quiz.correct === 'B' ? '✓' : ''}</label>
                <input type="text" value="${quiz.optionB}" disabled style="${quiz.correct === 'B' ? 'border-color: var(--accent-green);' : ''}">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Option C ${quiz.correct === 'C' ? '✓' : ''}</label>
                <input type="text" value="${quiz.optionC}" disabled style="${quiz.correct === 'C' ? 'border-color: var(--accent-green);' : ''}">
            </div>
            <div class="form-group">
                <label>Option D ${quiz.correct === 'D' ? '✓' : ''}</label>
                <input type="text" value="${quiz.optionD}" disabled style="${quiz.correct === 'D' ? 'border-color: var(--accent-green);' : ''}">
            </div>
        </div>
        <div class="form-group">
            <label>Explanation</label>
            <textarea disabled>${quiz.explanation || 'No explanation provided.'}</textarea>
        </div>
    `;
    
    showModal('Quiz Question', content, null);
    document.getElementById('modal-save').style.display = 'none';
}

function editQuiz(quiz) {
    const content = `
        <div class="form-group">
            <label>Question</label>
            <textarea id="edit-question" style="min-height: 80px;">${quiz.question}</textarea>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Option A</label>
                <input type="text" id="edit-optionA" value="${quiz.optionA}">
            </div>
            <div class="form-group">
                <label>Option B</label>
                <input type="text" id="edit-optionB" value="${quiz.optionB}">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Option C</label>
                <input type="text" id="edit-optionC" value="${quiz.optionC}">
            </div>
            <div class="form-group">
                <label>Option D</label>
                <input type="text" id="edit-optionD" value="${quiz.optionD}">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Correct Answer</label>
                <select id="edit-correct">
                    <option value="A" ${quiz.correct === 'A' ? 'selected' : ''}>A</option>
                    <option value="B" ${quiz.correct === 'B' ? 'selected' : ''}>B</option>
                    <option value="C" ${quiz.correct === 'C' ? 'selected' : ''}>C</option>
                    <option value="D" ${quiz.correct === 'D' ? 'selected' : ''}>D</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Explanation</label>
            <textarea id="edit-explanation">${quiz.explanation || ''}</textarea>
        </div>
    `;
    
    showModal('Edit Quiz Question', content, async () => {
        try {
            const data = {
                question: document.getElementById('edit-question').value,
                optionA: document.getElementById('edit-optionA').value,
                optionB: document.getElementById('edit-optionB').value,
                optionC: document.getElementById('edit-optionC').value,
                optionD: document.getElementById('edit-optionD').value,
                correct: document.getElementById('edit-correct').value,
                explanation: document.getElementById('edit-explanation').value
            };
            
            await apiPost(`quizzes/${quiz.id}`, data);
            showToast('Quiz question updated', 'success');
            closeModal();
            loadQuizzes();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });
}

function showAddQuizModal() {
    const lessonId = document.getElementById('quiz-lesson-filter')?.value || '';
    
    const content = `
        <div class="form-group">
            <label>Lesson ID *</label>
            <input type="number" id="add-lessonId" value="${lessonId}" required>
        </div>
        <div class="form-group">
            <label>Question *</label>
            <textarea id="add-question" style="min-height: 80px;" required></textarea>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Option A *</label>
                <input type="text" id="add-optionA" required>
            </div>
            <div class="form-group">
                <label>Option B *</label>
                <input type="text" id="add-optionB" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Option C *</label>
                <input type="text" id="add-optionC" required>
            </div>
            <div class="form-group">
                <label>Option D *</label>
                <input type="text" id="add-optionD" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Correct Answer *</label>
                <select id="add-correct">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Explanation</label>
            <textarea id="add-explanation"></textarea>
        </div>
    `;
    
    showModal('Add Quiz Question', content, async () => {
        try {
            const data = {
                lessonId: parseInt(document.getElementById('add-lessonId').value),
                question: document.getElementById('add-question').value,
                optionA: document.getElementById('add-optionA').value,
                optionB: document.getElementById('add-optionB').value,
                optionC: document.getElementById('add-optionC').value,
                optionD: document.getElementById('add-optionD').value,
                correct: document.getElementById('add-correct').value,
                explanation: document.getElementById('add-explanation').value
            };
            
            if (!data.lessonId || !data.question || !data.optionA || !data.optionB || !data.optionC || !data.optionD) {
                showToast('Please fill in all required fields', 'error');
                return;
            }
            
            await apiPost('quizzes', data);
            showToast('Quiz question added', 'success');
            closeModal();
            loadQuizzes();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });
}

async function deleteQuiz(id) {
    if (!confirm('Are you sure you want to delete this quiz question?')) {
        return;
    }
    
    try {
        await apiDelete(`quizzes/${id}`);
        showToast('Quiz question deleted', 'success');
        loadQuizzes();
    } catch (error) {
        showToast('Failed to delete quiz question', 'error');
    }
}

// ==================== ANALYTICS ====================
async function loadAnalytics() {
    try {
        const data = await apiGet('progress');
        
        // Top users table
        const topUsersBody = document.querySelector('#top-users-table tbody');
        topUsersBody.innerHTML = data.topUsers.map((u, i) => `
            <tr>
                <td><strong>#${i + 1}</strong></td>
                <td>
                    <strong>${u.displayName || u.username}</strong>
                    <br><small style="color: var(--text-muted)">@${u.username}</small>
                </td>
                <td>${u.completed}</td>
                <td>${u.avgScore !== null ? `${u.avgScore}%` : '-'}</td>
            </tr>
        `).join('');
        
        // Course completion rates
        const completionContainer = document.getElementById('course-completion-bars');
        completionContainer.innerHTML = data.courseRates.map(c => {
            const percent = c.totalLessons > 0 ? Math.round((c.completions / c.totalLessons) * 100) : 0;
            return `
                <div class="completion-item">
                    <div class="completion-header">
                        <span class="completion-name">${c.title}</span>
                        <span class="completion-percent">${percent}%</span>
                    </div>
                    <div class="completion-bar">
                        <div class="completion-fill" style="width: ${percent}%"></div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Daily activity chart
        const chartContainer = document.getElementById('daily-activity-chart');
        const maxActivity = Math.max(...data.dailyActivity.map(d => d.activity), 1);
        chartContainer.innerHTML = data.dailyActivity.map(d => {
            const height = (d.activity / maxActivity) * 180;
            return `<div class="activity-bar" style="height: ${height}px" data-date="${d.date}" title="${d.date}: ${d.activity} activities"></div>`;
        }).join('');
        
    } catch (error) {
        console.error('Analytics error:', error);
        showToast('Failed to load analytics', 'error');
    }
}

// ==================== MODAL HELPERS ====================
function showModal(title, content, onSave) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').classList.remove('hidden');
    
    const saveBtn = document.getElementById('modal-save');
    saveBtn.style.display = onSave ? 'block' : 'none';
    saveBtn.onclick = onSave;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
}

// Close modal on overlay click
document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
        closeModal();
    }
});

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== UTILITY FUNCTIONS ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function formatDate(dateStr, dateOnly = false) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    if (dateOnly) {
        return date.toLocaleDateString();
    }
    return date.toLocaleString();
}

function escape(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}
