'use strict';
/* ================================================================
   ENSET MOHAMMEDIA — Application Logic
   ================================================================ */

/* ---- STATE ---- */
let state = {
  page: 'home',
  topic: null,
  cat: null,
  tab: 'course',
  exerciseLevel: 'all',
  quiz: { active: false, idx: 0, score: 0, answered: false, questions: [], mode: 'topic' },
  exam: { active: false, timer: null, remaining: 0, questions: [], answers: [], idx: 0, config: {} },
  bookmarks: JSON.parse(localStorage.getItem('enset_bookmarks') || '[]'),
  progress: JSON.parse(localStorage.getItem('enset_progress') || '{}'),
  recent: JSON.parse(localStorage.getItem('enset_recent') || '[]'),
  searchQuery: ''
};

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderHomeGrids();
  updateGlobalProgress();
  updateBMCountHome();
  checkUrlHash();
});

function checkUrlHash() {
  const h = window.location.hash;
  if (h === '#exams') navClick(null, 'exams');
  else if (h === '#exam') navClick(null, 'exam');
  else showPage('home');
}

/* ================================================================
   NAVIGATION
   ================================================================ */
function navClick(e, page) {
  if (e) e.preventDefault();
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const target = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (target) target.classList.add('active');
  closeMobileSidebar();
  if (page === 'home') showPage('home');
  else if (page === 'exams') showExamsPage();
  else if (page === 'exam') showExamBlanc();
  else if (page === 'bookmarks') showBookmarks();
}

function navTopicClick(e, id, cat) {
  if (e) e.preventDefault();
  document.querySelectorAll('.nav-sub').forEach(el => el.classList.remove('active'));
  if (e && e.currentTarget) e.currentTarget.classList.add('active');
  closeMobileSidebar();
  showTopic(id, cat);
}

function toggleGroup(g) {
  const grp = document.getElementById(`group-${g}`);
  if (grp) grp.classList.toggle('open');
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

/* ================================================================
   PAGE SYSTEM
   ================================================================ */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById(`page-${name}`);
  if (pg) pg.classList.add('active');
  state.page = name;
  window.scrollTo(0, 0);
}

/* ================================================================
   HOME PAGE
   ================================================================ */
function renderHomeGrids() {
  renderGrid('math-grid', MATH_TOPICS);
  renderGrid('info-grid', INFO_TOPICS);
  renderHeroStats();
}

function renderGrid(containerId, topics) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = topics.map(t => {
    const pct = getTopicProgress(t.id);
    const done = pct === 100;
    return `<div class="topic-card" onclick="showTopic('${t.id}','${t.cat}')" style="--card-color:${t.color}">
      <div class="tc-icon" style="background:${t.color}22; color:${t.color}">${t.icon}</div>
      <div class="tc-title">${t.title}</div>
      <div class="tc-sub">${t.subtitle}</div>
      <div class="tc-meta">
        <span class="tc-badge ${t.cat === 'math' ? 'badge-math' : 'badge-info'}">${t.cat === 'math' ? 'Maths' : 'Info'}</span>
        <span class="tc-badge">${t.exercises?.length || 0} exercices</span>
        <span class="tc-badge">${t.quiz?.length || 0} QCM</span>
        ${done ? '<span class="tc-badge done">✓ Complété</span>' : ''}
      </div>
      <div class="tc-progress"><div class="tc-progress-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

function renderHeroStats() {
  const el = document.getElementById('hero-stats');
  if (!el) return;
  const totalTopics = ALL_TOPICS.length;
  const totalExercises = ALL_TOPICS.reduce((s, t) => s + (t.exercises?.length || 0), 0);
  const totalQuiz = ALL_TOPICS.reduce((s, t) => s + (t.quiz?.length || 0), 0);
  const annalesCount = ANNALES.length;
  el.innerHTML = [
    ['22', 'Matières'],
    [totalExercises, 'Exercices corrigés'],
    [totalQuiz + AI_QUESTIONS.math.length + AI_QUESTIONS.info.length, 'Questions QCM'],
    [annalesCount, 'Annales officielles']
  ].map(([n, l]) => `<div class="hero-stat"><div class="hero-stat-num">${n}</div><div class="hero-stat-label">${l}</div></div>`).join('');
}

/* ================================================================
   TOPIC PAGE
   ================================================================ */
function showTopic(id, cat) {
  const topic = ALL_TOPICS.find(t => t.id === id);
  if (!topic) return;
  state.topic = topic;
  state.cat = cat;
  state.tab = 'course';
  addToRecent(id);

  // Open group in sidebar
  toggleGroup(cat === 'math' ? 'math' : 'info');
  document.querySelectorAll('.nav-sub').forEach(el => el.classList.remove('active'));
  const sub = document.querySelector(`.nav-sub[data-id="${id}"]`);
  if (sub) sub.classList.add('active');

  // Render header
  const bm = state.bookmarks.includes(id);
  document.getElementById('topic-header').innerHTML = `
    <div class="topic-header-inner">
      <div class="topic-header-icon" style="background:${topic.color}22;color:${topic.color}">${topic.icon}</div>
      <div class="topic-header-info">
        <div class="topic-header-back" onclick="navClick(null,'home')">← Retour au tableau de bord</div>
        <h1>${topic.title}</h1>
        <div class="topic-header-sub">${topic.subtitle}</div>
        <div class="topic-header-actions">
          <button class="bm-btn ${bm ? 'active' : ''}" id="bm-btn-${id}" onclick="toggleBookmark('${id}')">
            ${bm ? '★ Sauvegardé' : '☆ Sauvegarder'}
          </button>
          <button class="bm-btn" onclick="switchTab('quiz');startQuiz('${id}')">🎯 Quiz rapide</button>
        </div>
      </div>
    </div>`;

  // Tabs
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === 0));

  renderCourse(topic);
  renderExercises(topic);
  renderQuizIntro(topic);
  showPage('topic');
}

function switchTab(tab) {
  state.tab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase().includes(
      tab === 'course' ? '📖' : tab === 'exercises' ? '✏️' : '🎯'
    ) || (tab === 'course' && b.textContent.includes('Cours'))
      || (tab === 'exercises' && b.textContent.includes('Exercices'))
      || (tab === 'quiz' && b.textContent.includes('Quiz')));
  });
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.getElementById(`tab-${tab}`)?.classList.add('active');
}

/* ================================================================
   COURSE CONTENT
   ================================================================ */
function renderCourse(topic) {
  const el = document.getElementById('course-content');
  if (!el || !topic.course) return;
  el.innerHTML = topic.course;
  // Mark topic as "viewed"
  markProgress(topic.id, 'viewed');
}

/* ================================================================
   EXERCISES
   ================================================================ */
function renderExercises(topic) {
  const el = document.getElementById('exercises-body');
  if (!el) return;
  const exs = topic.exercises || [];
  if (!exs.length) { el.innerHTML = '<div class="muted">Aucun exercice disponible pour ce chapitre.</div>'; return; }

  el.innerHTML = `
    <div class="exercises-header">
      <h2>Exercices — ${topic.title}</h2>
      <div class="level-filters">
        ${['all','facile','moyen','difficile','expert'].map(l =>
          `<button class="level-btn ${l==='all'?'active':''}" onclick="filterLevel(this,'${l}','exercises-list')">${l==='all'?'Tous':l.charAt(0).toUpperCase()+l.slice(1)}</button>`
        ).join('')}
      </div>
    </div>
    <div id="exercises-list">
      ${exs.map((ex, i) => `
        <div class="exercise-card" data-level="${ex.level}">
          <div class="ex-header" onclick="toggleEx(this)">
            <div class="ex-num">${i+1}</div>
            <div class="ex-title">${ex.title}</div>
            <span class="ex-level level-${ex.level}">${ex.level}</span>
            <span class="ex-toggle">+</span>
          </div>
          <div class="ex-body">
            <div class="ex-question">${ex.question}</div>
            <button class="show-sol-btn" onclick="toggleSolution(this)">Voir la correction</button>
            <div class="ex-solution">${ex.solution}</div>
          </div>
        </div>`
      ).join('')}
    </div>`;
}

function toggleEx(header) {
  const body = header.nextElementSibling;
  const toggle = header.querySelector('.ex-toggle');
  const open = body.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.textContent = open ? '×' : '+';
}

function toggleSolution(btn) {
  const sol = btn.nextElementSibling;
  const open = sol.classList.toggle('open');
  btn.textContent = open ? 'Masquer la correction' : 'Voir la correction';
}

function filterLevel(btn, level, listId) {
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const list = document.getElementById(listId);
  if (!list) return;
  list.querySelectorAll('.exercise-card').forEach(card => {
    card.style.display = (level === 'all' || card.dataset.level === level) ? '' : 'none';
  });
}

/* ================================================================
   QUIZ SYSTEM
   ================================================================ */
function renderQuizIntro(topic) {
  const el = document.getElementById('quiz-body');
  if (!el) return;
  const count = topic.quiz?.length || 0;
  el.innerHTML = `
    <div class="quiz-intro">
      <h2>Quiz QCM — ${topic.title}</h2>
      <p>${count} questions officielles + questions supplémentaires IA générées au niveau concours ENSET.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="start-quiz-btn" onclick="startQuiz('${topic.id}')">🎯 Démarrer le Quiz (${count} questions)</button>
        <button class="start-quiz-btn" style="background:var(--accent2);color:var(--bg)" onclick="startAIQuiz('${topic.cat}')">🤖 Quiz IA — Niveau Expert</button>
      </div>
    </div>`;
}

function startQuiz(topicId) {
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  if (!topic || !topic.quiz?.length) return;
  switchTab('quiz');
  const questions = shuffle([...topic.quiz]);
  state.quiz = { active: true, idx: 0, score: 0, answered: false, questions, mode: 'topic', topicId };
  renderQuizQuestion();
}

function startAIQuiz(cat) {
  switchTab('quiz');
  const pool = cat === 'math' ? AI_QUESTIONS.math : AI_QUESTIONS.info;
  const questions = shuffle([...pool]).slice(0, Math.min(15, pool.length));
  state.quiz = { active: true, idx: 0, score: 0, answered: false, questions, mode: 'ai', cat };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const el = document.getElementById('quiz-body');
  if (!el) return;
  const { questions, idx, score } = state.quiz;
  if (idx >= questions.length) { renderQuizResult(); return; }
  const q = questions[idx];
  const pct = Math.round((idx / questions.length) * 100);
  const letters = ['A', 'B', 'C', 'D'];
  el.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress">
        <div class="q-progress-bar"><div class="q-progress-fill" style="width:${pct}%"></div></div>
        <div class="q-num">Question ${idx + 1} / ${questions.length} · Score : ${score}</div>
      </div>
      <div class="quiz-card">
        <div class="q-text">${q.q}</div>
        <div class="q-options" id="q-opts">
          ${q.opts.map((opt, i) => `
            <div class="q-option" onclick="selectAnswer(${i})">
              <div class="q-option-letter">${letters[i]}</div>
              <div>${opt}</div>
            </div>`).join('')}
        </div>
        <div class="q-feedback" id="q-feedback"></div>
        <div class="q-actions">
          <button class="q-btn q-btn-secondary" onclick="skipQuestion()">Passer →</button>
          <button class="q-btn q-btn-primary hidden" id="q-next" onclick="nextQuestion()">Suivant →</button>
        </div>
      </div>
    </div>`;
  state.quiz.answered = false;
}

function selectAnswer(idx) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  const q = state.quiz.questions[state.quiz.idx];
  const opts = document.querySelectorAll('.q-option');
  opts.forEach(o => o.classList.add('disabled'));
  const correct = idx === q.ans;
  opts[idx].classList.add(correct ? 'correct' : 'wrong');
  if (!correct) opts[q.ans].classList.add('correct');
  const fb = document.getElementById('q-feedback');
  fb.className = `q-feedback show ${correct ? 'correct' : 'wrong'}`;
  fb.innerHTML = correct
    ? `✓ Correct ! ${q.exp}`
    : `✗ Incorrect. La bonne réponse est <strong>${q.opts[q.ans]}</strong>. ${q.exp}`;
  if (correct) state.quiz.score++;
  document.getElementById('q-next')?.classList.remove('hidden');
  document.querySelector('.q-btn-secondary')?.classList.add('hidden');
}

function nextQuestion() { state.quiz.idx++; renderQuizQuestion(); }
function skipQuestion() { state.quiz.idx++; renderQuizQuestion(); }

function renderQuizResult() {
  const el = document.getElementById('quiz-body');
  const { score, questions } = state.quiz;
  const pct = Math.round((score / questions.length) * 100);
  const deg = Math.round((pct / 100) * 360);
  const label = pct >= 80 ? '🏆 Excellent !' : pct >= 60 ? '✓ Bien' : pct >= 40 ? '📚 À revoir' : '⚠ Insuffisant';
  if (state.quiz.topicId) markProgress(state.quiz.topicId, 'quiz', pct);
  el.innerHTML = `
    <div class="quiz-result">
      <div class="result-score-circle" style="--pct:${deg}deg">
        <div class="result-score-text">${pct}%</div>
      </div>
      <div class="result-label">${label}</div>
      <div class="result-sub">${score} / ${questions.length} réponses correctes</div>
      <div class="result-actions">
        <button class="q-btn q-btn-primary" onclick="${state.quiz.topicId ? `startQuiz('${state.quiz.topicId}')` : `startAIQuiz('${state.quiz.cat}')`}">🔄 Recommencer</button>
        <button class="q-btn q-btn-secondary" onclick="switchTab('course')">📖 Revoir le cours</button>
        ${state.quiz.topicId ? `<button class="q-btn q-btn-secondary" onclick="switchTab('exercises')">✏️ Exercices</button>` : ''}
      </div>
    </div>`;
}

/* ================================================================
   ANNALES PAGE
   ================================================================ */
function showExamsPage() {
  renderAnnalesGrid('all');
  document.getElementById('annale-detail').innerHTML = `
    <div class="muted">Cliquez sur une annale pour afficher les questions et corrections détaillées.</div>`;
  showPage('exams');
}

function renderAnnalesGrid(filter) {
  const el = document.getElementById('annales-grid');
  if (!el) return;
  const filtered = filter === 'all' ? ANNALES : ANNALES.filter(a => a.cat === filter);
  el.innerHTML = filtered.map(a => `
    <div class="annale-card" onclick="showAnnaleDetail('${a.id}')">
      <div class="annale-year">${a.year}</div>
      <div class="annale-subject">${a.title}</div>
      <div class="annale-meta">
        <span class="annale-tag ${a.cat === 'info' ? 'annale-info-tag' : 'annale-math-tag'}">${a.subject}</span>
        <span class="annale-tag">${a.difficulty}</span>
        ${a.tags.slice(0, 2).map(t => `<span class="annale-tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');
}

function filterExams(cat, btn) {
  document.querySelectorAll('.exam-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAnnalesGrid(cat);
}

function showAnnaleDetail(id) {
  const annale = ANNALES.find(a => a.id === id);
  if (!annale) return;
  const el = document.getElementById('annale-detail');
  el.innerHTML = `
    <div class="annale-detail-header">
      <div style="font-size:.75rem;color:var(--gold);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px">${annale.subject} · ${annale.year}</div>
      <h2 style="margin-bottom:8px">${annale.title}</h2>
      <p style="color:var(--text2);font-size:.9rem">${annale.desc}</p>
      <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
        ${annale.tags.map(t => `<span class="annale-tag">${t}</span>`).join('')}
      </div>
    </div>
    ${annale.parts.map((part, pi) => `
      <div class="annale-section">
        <div class="annale-section-header" onclick="toggleAnnaleSection(this)">
          <span>${part.title}</span>
          <span>▼</span>
        </div>
        <div class="annale-section-body" ${pi === 0 ? 'class="annale-section-body open"' : ''}>
          ${part.questions.map((q, qi) => `
            <div class="q-item">
              <div class="q-item-num">Question ${q.num}</div>
              <div class="q-item-text">${q.text}</div>
              <button class="correction-btn" onclick="toggleCorrection(this)">▶ Voir la correction</button>
              <div class="correction-text"><strong>Correction :</strong><br><br>${q.correction.replace(/\n/g,'<br>')}</div>
            </div>`).join('')}
        </div>
      </div>`).join('')}`;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Open first section
  const firstBody = el.querySelector('.annale-section-body');
  if (firstBody) firstBody.classList.add('open');
}

function toggleAnnaleSection(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
  const arr = header.querySelector('span:last-child');
  if (arr) arr.textContent = body.classList.contains('open') ? '▲' : '▼';
}

function toggleCorrection(btn) {
  const div = btn.nextElementSibling;
  const open = div.classList.toggle('open');
  btn.textContent = open ? '▼ Masquer la correction' : '▶ Voir la correction';
}

/* ================================================================
   EXAMEN BLANC
   ================================================================ */
function showExamBlanc() {
  const el = document.getElementById('exam-body');
  el.innerHTML = `
    <div class="page-header">
      <div class="page-eyebrow">Simulation officielle</div>
      <h1 class="page-title">Examen Blanc ENSET</h1>
      <p class="page-desc">Questions IA-générées au niveau du vrai concours · Chronométré · Score instantané</p>
    </div>
    <div class="exam-config">
      <h2>Configurer votre examen</h2>
      <p>Choisissez la durée et les matières. L'examen sera chronométré et corrigé automatiquement.</p>
      <div class="config-grid">
        <div class="config-item">
          <label>Durée</label>
          <select id="exam-duration">
            <option value="30">30 minutes</option>
            <option value="60" selected>1 heure</option>
            <option value="120">2 heures</option>
          </select>
        </div>
        <div class="config-item">
          <label>Matière</label>
          <select id="exam-subject">
            <option value="mixed">Mixte (Maths + Info)</option>
            <option value="math">Mathématiques uniquement</option>
            <option value="info">Informatique uniquement</option>
          </select>
        </div>
        <div class="config-item">
          <label>Nombre de questions</label>
          <select id="exam-count">
            <option value="15">15 questions</option>
            <option value="25" selected>25 questions</option>
            <option value="40">40 questions</option>
          </select>
        </div>
        <div class="config-item">
          <label>Difficulté</label>
          <select id="exam-diff">
            <option value="all">Toutes</option>
            <option value="moyen">Moyen</option>
            <option value="difficile">Difficile</option>
            <option value="expert">Expert / Brutal</option>
          </select>
        </div>
      </div>
      <button class="start-exam-btn" onclick="startExam()">⏱ Démarrer l'Examen Blanc</button>
    </div>`;
  showPage('exam');
}

function buildExamPool(subject, diff) {
  let pool = [];
  // Topic quizzes
  ALL_TOPICS.forEach(t => {
    if (subject === 'mixed' || t.cat === subject) {
      (t.quiz || []).forEach(q => pool.push({ ...q, src: t.title, cat: t.cat }));
    }
  });
  // AI questions
  if (subject === 'mixed' || subject === 'math') AI_QUESTIONS.math.forEach(q => pool.push({ ...q, src: 'IA Maths', cat: 'math' }));
  if (subject === 'mixed' || subject === 'info') AI_QUESTIONS.info.forEach(q => pool.push({ ...q, src: 'IA Info', cat: 'info' }));

  if (diff !== 'all') pool = pool.filter(q => q.diff === diff || !q.diff);
  return shuffle(pool);
}

function startExam() {
  const dur = parseInt(document.getElementById('exam-duration').value) * 60;
  const sub = document.getElementById('exam-subject').value;
  const cnt = parseInt(document.getElementById('exam-count').value);
  const diff = document.getElementById('exam-diff').value;
  const pool = buildExamPool(sub, diff);
  const questions = pool.slice(0, Math.min(cnt, pool.length));
  if (!questions.length) { alert('Pas assez de questions pour cette configuration.'); return; }
  state.exam = {
    active: true, idx: 0, score: 0, answers: new Array(questions.length).fill(null),
    questions, config: { dur, sub, cnt, diff },
    remaining: dur, timer: null
  };
  renderExamSession();
  startTimer();
}

function startTimer() {
  if (state.exam.timer) clearInterval(state.exam.timer);
  state.exam.timer = setInterval(() => {
    state.exam.remaining--;
    updateTimerDisplay();
    if (state.exam.remaining <= 0) { clearInterval(state.exam.timer); finishExam(); }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('exam-timer');
  if (!el) return;
  const t = state.exam.remaining;
  const m = Math.floor(t / 60), s = t % 60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.className = 'timer-display' + (t < 120 ? ' danger' : t < 300 ? ' warning' : '');
}

function renderExamSession() {
  const el = document.getElementById('exam-body');
  const { questions, idx, remaining, config } = state.exam;
  const q = questions[idx];
  const letters = ['A','B','C','D'];
  const answered = state.exam.answers[idx] !== null;
  el.innerHTML = `
    <div class="exam-timer-bar">
      <span style="font-weight:600">Examen Blanc ENSET · Question ${idx+1}/${questions.length}</span>
      <div style="display:flex;align-items:center;gap:12px">
        <span style="font-size:.82rem;color:var(--text2)">Score: ${state.exam.score}/${idx}</span>
        <span class="timer-display" id="exam-timer">--:--</span>
        <button class="q-btn q-btn-secondary" style="padding:6px 16px;font-size:.8rem" onclick="finishExam()">Terminer</button>
      </div>
    </div>
    <div style="max-width:720px;margin:0 auto">
      <div style="margin-bottom:12px;font-size:.78rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em">${q.src || 'Concours ENSET'}</div>
      <div class="quiz-card">
        <div class="q-text">${q.q}</div>
        <div class="q-options" id="q-opts">
          ${q.opts.map((opt, i) => `
            <div class="q-option ${answered && i === state.exam.answers[idx] ? (i === q.ans ? 'correct' : 'wrong') : ''} ${answered && i === q.ans ? 'correct' : ''} ${answered ? 'disabled' : ''}"
              onclick="selectExamAnswer(${i})">
              <div class="q-option-letter">${letters[i]}</div>
              <div>${opt}</div>
            </div>`).join('')}
        </div>
        ${answered ? `<div class="q-feedback show ${state.exam.answers[idx] === q.ans ? 'correct' : 'wrong'}">
          ${state.exam.answers[idx] === q.ans ? '✓ Correct !' : `✗ Incorrect. Réponse : <strong>${q.opts[q.ans]}</strong>.`} ${q.exp || ''}
        </div>` : ''}
        <div class="q-actions" style="margin-top:16px">
          ${idx > 0 ? `<button class="q-btn q-btn-secondary" onclick="navExam(${idx-1})">← Précédente</button>` : ''}
          ${idx < questions.length - 1
            ? `<button class="q-btn q-btn-primary" onclick="navExam(${idx+1})">Suivante →</button>`
            : `<button class="q-btn q-btn-primary" onclick="finishExam()">Terminer l'examen</button>`}
        </div>
      </div>
      <div style="margin-top:16px;display:flex;flex-wrap:wrap;gap:6px">
        ${questions.map((_, i) => {
          const a = state.exam.answers[i];
          let cls = 'var(--border)';
          if (a !== null) cls = (a === questions[i].ans ? 'var(--success)' : 'var(--danger)');
          return `<div onclick="navExam(${i})" style="width:32px;height:32px;border-radius:6px;border:2px solid ${cls};
            background:${i===idx?'var(--gold)':'transparent'};color:${i===idx?'var(--bg)':'var(--text2)'};
            display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:.78rem;font-weight:600">${i+1}</div>`;
        }).join('')}
      </div>
    </div>`;
  updateTimerDisplay();
}

function selectExamAnswer(optIdx) {
  if (state.exam.answers[state.exam.idx] !== null) return;
  state.exam.answers[state.exam.idx] = optIdx;
  if (optIdx === state.exam.questions[state.exam.idx].ans) state.exam.score++;
  renderExamSession();
}

function navExam(idx) {
  state.exam.idx = idx;
  renderExamSession();
}

function finishExam() {
  if (state.exam.timer) clearInterval(state.exam.timer);
  const { questions, answers, score } = state.exam;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const timeTaken = state.exam.config.dur - state.exam.remaining;
  const m = Math.floor(timeTaken / 60), s = timeTaken % 60;
  const el = document.getElementById('exam-body');
  const label = pct >= 80 ? '🏆 Excellent !' : pct >= 65 ? '✓ Bien' : pct >= 50 ? '📚 Moyen' : '⚠ Insuffisant';
  const wrongOnes = questions.filter((q, i) => answers[i] !== null && answers[i] !== q.ans);
  el.innerHTML = `
    <div class="page-header">
      <div class="page-eyebrow">Résultats</div>
      <h1 class="page-title">Examen Blanc Terminé</h1>
    </div>
    <div class="quiz-result" style="margin-bottom:24px">
      <div class="result-score-circle" style="--pct:${Math.round((pct/100)*360)}deg">
        <div class="result-score-text">${pct}%</div>
      </div>
      <div class="result-label">${label}</div>
      <div class="result-sub">${score} / ${total} réponses correctes · ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')} passé</div>
      <div class="result-actions">
        <button class="q-btn q-btn-primary" onclick="showExamBlanc()">🔄 Nouvel examen</button>
        <button class="q-btn q-btn-secondary" onclick="navClick(null,'home')">⌂ Tableau de bord</button>
      </div>
    </div>
    ${wrongOnes.length ? `
    <div class="section-title" style="margin-top:32px">Points à retravailler</div>
    ${wrongOnes.map(q => `
      <div class="q-item" style="margin-bottom:12px">
        <div class="q-item-text">${q.q}</div>
        <div style="color:var(--danger);font-size:.85rem;margin-bottom:6px">✗ Réponse correcte : <strong>${q.opts[q.ans]}</strong></div>
        <div style="font-size:.83rem;color:var(--text2)">${q.exp || ''}</div>
      </div>`).join('')}` : ''}`;
  state.exam.active = false;
}

/* ================================================================
   BOOKMARKS
   ================================================================ */
function toggleBookmark(id) {
  const idx = state.bookmarks.indexOf(id);
  if (idx === -1) state.bookmarks.push(id);
  else state.bookmarks.splice(idx, 1);
  localStorage.setItem('enset_bookmarks', JSON.stringify(state.bookmarks));
  const btn = document.getElementById(`bm-btn-${id}`);
  if (btn) {
    const bm = state.bookmarks.includes(id);
    btn.className = `bm-btn ${bm ? 'active' : ''}`;
    btn.textContent = bm ? '★ Sauvegardé' : '☆ Sauvegarder';
  }
  updateBMCountHome();
}

function showBookmarks() {
  const el = document.getElementById('bookmarks-body');
  if (!el) return;
  const bms = ALL_TOPICS.filter(t => state.bookmarks.includes(t.id));
  if (!bms.length) {
    el.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">★</div>
      <h3>Aucun favori sauvegardé</h3>
      <p style="color:var(--text3);font-size:.88rem">Sauvegardez des chapitres depuis leur page pour les retrouver ici.</p>
    </div>`;
  } else {
    el.innerHTML = `<div class="bookmarks-grid">${bms.map(t => `
      <div class="topic-card" onclick="showTopic('${t.id}','${t.cat}')" style="--card-color:${t.color}">
        <div class="tc-icon" style="background:${t.color}22;color:${t.color}">${t.icon}</div>
        <div class="tc-title">${t.title}</div>
        <div class="tc-sub">${t.subtitle}</div>
        <div class="tc-meta">
          <span class="tc-badge">${t.cat === 'math' ? 'Maths' : 'Info'}</span>
          <button onclick="event.stopPropagation();toggleBookmark('${t.id}')" class="tc-badge" style="cursor:pointer;border:none;background:rgba(224,84,84,.1);color:var(--danger)">✕ Retirer</button>
        </div>
      </div>`).join('')}</div>`;
  }
  showPage('bookmarks');
}

function updateBMCountHome() {
  const el = document.getElementById('bm-count-home');
  if (el) el.textContent = `${state.bookmarks.length} sauvegardé${state.bookmarks.length !== 1 ? 's' : ''}`;
}

/* ================================================================
   PROGRESS TRACKING
   ================================================================ */
function markProgress(topicId, type, score) {
  if (!state.progress[topicId]) state.progress[topicId] = {};
  state.progress[topicId][type] = type === 'quiz' ? Math.max(state.progress[topicId][type] || 0, score) : true;
  localStorage.setItem('enset_progress', JSON.stringify(state.progress));
  updateGlobalProgress();
}

function getTopicProgress(topicId) {
  const p = state.progress[topicId];
  if (!p) return 0;
  let score = 0;
  if (p.viewed) score += 33;
  if (p.quiz !== undefined) score += Math.min(67, Math.round((p.quiz / 100) * 67));
  return Math.min(100, score);
}

function updateGlobalProgress() {
  const total = ALL_TOPICS.length;
  const sum = ALL_TOPICS.reduce((s, t) => s + getTopicProgress(t.id), 0);
  const pct = Math.round(sum / total);
  const bar = document.getElementById('global-bar');
  const txt = document.getElementById('global-pct');
  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = `${pct}%`;
}

function resetProgress() {
  if (!confirm('Réinitialiser toute la progression ?')) return;
  state.progress = {};
  state.bookmarks = [];
  state.recent = [];
  localStorage.removeItem('enset_progress');
  localStorage.removeItem('enset_bookmarks');
  localStorage.removeItem('enset_recent');
  renderHomeGrids();
  updateGlobalProgress();
  updateBMCountHome();
}

function addToRecent(id) {
  state.recent = [id, ...state.recent.filter(r => r !== id)].slice(0, 5);
  localStorage.setItem('enset_recent', JSON.stringify(state.recent));
}

/* ================================================================
   GLOBAL SEARCH
   ================================================================ */
function globalSearch(query) {
  if (!query || query.length < 2) {
    closeSearch();
    return;
  }
  document.getElementById('search-overlay').classList.remove('hidden');
  performSearch(query);
}

function performSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) { document.getElementById('search-results').innerHTML = ''; return; }
  const results = [];
  ALL_TOPICS.forEach(t => {
    if (t.title.toLowerCase().includes(q) || t.subtitle.toLowerCase().includes(q)) {
      results.push({ type: t.cat === 'math' ? 'Maths' : 'Info', title: t.title, sub: t.subtitle, action: () => showTopic(t.id, t.cat) });
    }
    (t.exercises || []).forEach(ex => {
      if (ex.title.toLowerCase().includes(q) || ex.question.toLowerCase().includes(q)) {
        results.push({ type: 'Exercice', title: ex.title, sub: t.title, action: () => { showTopic(t.id, t.cat); setTimeout(() => switchTab('exercises'), 300); } });
      }
    });
  });
  ANNALES.forEach(a => {
    if (a.title.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q))) {
      results.push({ type: 'Annale', title: a.title, sub: `${a.year} · ${a.subject}`, action: () => { showExamsPage(); setTimeout(() => showAnnaleDetail(a.id), 200); } });
    }
  });
  const el = document.getElementById('search-results');
  if (!results.length) { el.innerHTML = '<div class="muted" style="padding:16px">Aucun résultat trouvé.</div>'; return; }
  el.innerHTML = results.slice(0, 12).map((r, i) => `
    <div class="search-result-item" onclick="closeSearch();searchResults[${i}].action()">
      <span class="sr-cat">${r.type}</span>
      <div><div class="sr-title">${r.title}</div><div class="sr-sub">${r.sub}</div></div>
    </div>`).join('');
  window.searchResults = results;
}

function closeSearch() {
  document.getElementById('search-overlay').classList.add('hidden');
  document.getElementById('search-overlay-input').value = '';
  document.getElementById('search-results').innerHTML = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('search-overlay').classList.toggle('hidden');
    if (!document.getElementById('search-overlay').classList.contains('hidden'))
      document.getElementById('search-overlay-input').focus();
  }
});

/* ================================================================
   THEME TOGGLE
   ================================================================ */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.querySelector('.ctrl-btn[onclick="toggleTheme()"]').textContent = isDark ? '☾' : '☀';
  localStorage.setItem('enset_theme', isDark ? 'light' : 'dark');
}
// Restore theme
const savedTheme = localStorage.getItem('enset_theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  const btn = document.querySelector('.ctrl-btn[onclick="toggleTheme()"]');
  if (btn) btn.textContent = savedTheme === 'light' ? '☾' : '☀';
}

/* ================================================================
   UTILITIES
   ================================================================ */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
