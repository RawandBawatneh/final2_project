// Navigation
const showSection = () => {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  const target = document.querySelector(hash);
  if (target) target.classList.add('active');
};

window.addEventListener('hashchange', showSection);
showSection();

// Form logic
const openBtn = document.getElementById('openFormBtn');
const form = document.getElementById('setForm');
const createBtn = document.getElementById('createSetBtn');
const cancelBtn = document.getElementById('cancelBtn');
const input = document.getElementById('setTitleInput');
const list = document.getElementById('setsList');

openBtn?.addEventListener('click', () => {
  form.classList.remove('form-hidden');
  input.focus();
});

const hideForm = () => {
  form.classList.add('form-hidden');
  input.value = '';
};

cancelBtn?.addEventListener('click', hideForm);
createBtn?.addEventListener('click', () => {
  const title = input.value.trim();
  if (!title) return;

  const div = document.createElement('div');
  div.textContent = `Set: ${title}`;
  div.onclick = () => alert(`Opening "${title}" – feature coming soon!`);
  list.prepend(div);
  hideForm();
});

// Shuffle utility
window.shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);