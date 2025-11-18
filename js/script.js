// js/script.js
// Basic mock data and interactions for Student + Questions pages.
// Save this to js/script.js and expand later.

// ---------- Mock data ----------
const MOCK_QUESTIONS_KEY = 'teletutor_questions_v1';

const sampleQuestions = [
  {
    id: 1,
    title: "How do I solve limits with L'Hôpital's Rule?",
    description: "I'm stuck on an indeterminate form 0/0 example. Steps please.",
    subject: "Calculus",
    urgency: "Medium",
    postedBy: "Emily Chen",
    timePosted: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    responses: 2,
    answered: true
  },
  {
    id: 2,
    title: "Chain rule vs. product rule - when to use which?",
    description: "Two sample problems where I'm unsure which rule applies.",
    subject: "Calculus",
    urgency: "Low",
    postedBy: "Marcus Johnson",
    timePosted: Date.now() - 1000 * 60 * 60 * 5, // 5 hours ago
    responses: 0,
    answered: false
  },
  {
    id: 3,
    title: "Help with integration by parts!",
    description: "Integration by parts with trig and ln — walkthrough requested.",
    subject: "Calculus",
    urgency: "High",
    postedBy: "Sarah Williams",
    timePosted: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    responses: 1,
    answered: false
  }
];

const sampleTutors = [
  { id: 't1', name: 'Dr. Alex Rivera', expertise: 'Calculus', rating: 4.9, online: true },
  { id: 't2', name: 'Jennifer Park', expertise: 'Calculus', rating: 4.7, online: false },
  { id: 't3', name: 'Michael Thompson', expertise: 'Calculus', rating: 4.8, online: true }
];

// ---------- Helpers ----------
function readQuestionsFromStorage() {
  const raw = localStorage.getItem(MOCK_QUESTIONS_KEY);
  if (!raw) {
    localStorage.setItem(MOCK_QUESTIONS_KEY, JSON.stringify(sampleQuestions));
    return [...sampleQuestions];
  }
  try {
    return JSON.parse(raw);
  } catch {
    localStorage.setItem(MOCK_QUESTIONS_KEY, JSON.stringify(sampleQuestions));
    return [...sampleQuestions];
  }
}
function writeQuestionsToStorage(list) {
  localStorage.setItem(MOCK_QUESTIONS_KEY, JSON.stringify(list));
}
function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts)/1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
  return `${Math.floor(diff/86400)}d ago`;
}

// ---------- Render functions ----------
function renderQuestions(filter = 'all') {
  const container = document.getElementById('questions-list') || document.getElementById('active-questions');
  if (!container) return;
  const all = readQuestionsFromStorage();
  let list = all.slice().reverse(); // newest first

  if (filter === 'answered') list = list.filter(q => q.answered);
  if (filter === 'unanswered') list = list.filter(q => !q.answered);

  container.innerHTML = '';
  list.forEach(q => {
    const card = document.createElement('div');
    card.className = (container.id === 'questions-list') ? 'question-card' : 'card';
    card.innerHTML = `
      <div>
        <h3>${escapeHtml(q.title)}</h3>
        <div class="question-meta">${q.subject} • ${timeAgo(q.timePosted)} • ${q.postedBy} • ${q.responses} responses</div>
        <p class="muted">${escapeHtml(q.description).slice(0,200)}${q.description.length>200?'...':''}</p>
      </div>
      <div style="text-align:right">
        <div class="badge">${q.urgency}</div>
        <div style="margin-top:.6rem"><a class="btn" href="tutor-profile.html">View</a></div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTutors() {
  const container = document.getElementById('tutors-list');
  if (!container) return;
  container.innerHTML = '';
  sampleTutors.forEach(t => {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <h3>${t.name}</h3>
      <div class="muted">${t.expertise} • ${t.rating}★</div>
      <p style="margin-top:.5rem">${t.online ? '<span class="badge" style="background:var(--secondary); color:white">Online</span>' : '<span class="badge">Offline</span>'}</p>
      <div style="margin-top:.6rem"><a class="btn primary" href="tutor-profile.html">Request Session</a></div>
    `;
    container.appendChild(el);
  });
}

function renderRecentAnswers() {
  const container = document.getElementById('recent-answers');
  if (!container) return;
  // simple mock
  container.innerHTML = '';
  const sample = [
    { tutor: 'Dr. Alex Rivera', snippet: "Use substitution and check the derivative of the inner function." },
    { tutor: 'Jennifer Park', snippet: "Try rewriting and simplify the fraction first." }
  ];
  sample.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${s.tutor}</h3><p class="muted">${s.snippet}</p>`;
    container.appendChild(card);
  });
}

// ---------- Ask question handlers ----------
function attachAskFormHandler() {
  const askForm = document.getElementById('ask-form');
  if (!askForm) return;
  askForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const title = document.getElementById('title').value.trim();
    const desc = document.getElementById('description').value.trim();
    const subject = document.getElementById('subject').value;
    const urgency = document.getElementById('urgency').value;
    if (!title || !desc) {
      alert('Please fill title and description.');
      return;
    }
    const list = readQuestionsFromStorage();
    const newQ = {
      id: Date.now(),
      title, description: desc, subject, urgency,
      postedBy: 'You (Aron)', timePosted: Date.now(), responses: 0, answered: false
    };
    list.push(newQ);
    writeQuestionsToStorage(list);
    // redirect back to dashboard or questions
    window.location.href = 'student-dashboard.html';
  });
}

// For modal in dashboard:
function initStudentDashboard({ name = 'Student', subscription = 'Free' } = {}) {
  document.getElementById('student-name').textContent = name.split(' ')[0] || name;
  document.getElementById('subscription-badge').textContent = subscription;
  renderQuestions('all'); // active questions area (uses same source)
  renderTutors();
  renderRecentAnswers();

  // modal show/hide
  const askBtn = document.getElementById('ask-question-btn');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const cancelBtn = document.getElementById('modal-cancel');
  if (askBtn) askBtn.addEventListener('click', () => overlay.classList.remove('hidden'));
  if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
  if (cancelBtn) cancelBtn.addEventListener('click', () => overlay.classList.add('hidden'));

  // modal form submit
  const modalForm = document.getElementById('modal-ask-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('q-title').value.trim();
      const desc = document.getElementById('q-desc').value.trim();
      const subject = document.getElementById('q-subject').value;
      const urgency = document.getElementById('q-urgency').value;
      if (!title || !desc) { alert('Please fill required fields.'); return; }
      const list = readQuestionsFromStorage();
      const newQ = { id: Date.now(), title, description: desc, subject, urgency, postedBy: name, timePosted: Date.now(), responses:0, answered:false };
      list.push(newQ);
      writeQuestionsToStorage(list);
      overlay.classList.add('hidden');
      renderQuestions('all'); // refresh active questions
    });
  }
}

// ---------- Filters ----------
function filterQuestions(status) {
  if (status === 'all') renderQuestions('all');
  else if (status === 'answered') renderQuestions('answered');
  else if (status === 'unanswered') renderQuestions('unanswered');
}

// ---------- Utility ----------
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[m]; });
}

// Expose some functions globally for inline onclick use
window.renderQuestions = renderQuestions;
window.filterQuestions = filterQuestions;
window.attachAskFormHandler = attachAskFormHandler;
window.initStudentDashboard = initStudentDashboard;
