
// Cursor glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeThumb').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}
// Load saved theme
const saved = localStorage.getItem('theme');
if (saved) {
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeThumb').textContent = saved === 'light' ? '☀️' : '🌙';
}

// Animated stat counters
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .exp-item, .project-card').forEach(el => {
  revealObserver.observe(el);
});

// Counter trigger on stats bar
const statsObs = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounters();
    statsObs.disconnect();
  }
}, { threshold: 0.3 });
statsObs.observe(document.querySelector('.stats-bar'));

// Project filter
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.cat || '';
    if (cat === 'all' || cats.includes(cat)) {
      card.style.display = '';
      setTimeout(() => card.classList.add('visible'), 50);
    } else {
      card.style.display = 'none';
    }
  });
}

// Typewriter for hero title
const titles = [
  'Full-Stack Developer',
  'Cybersecurity Student',
  'Cloud Engineer',
  'AI Integrator',
  'Backend Architect'
];
let tIdx = 0, cIdx = 0, deleting = false;
const tw = document.querySelector('.hero-title');
if (tw) {
  function typeWrite() {
    const current = titles[tIdx];
    if (!deleting) {
      tw.innerHTML = current.slice(0, cIdx + 1) + ' <span style="color:var(--accent2);font-weight:500;">@</span> TEK-UP<span class="typewriter"> </span>';
      cIdx++;
      if (cIdx === current.length) { deleting = true; setTimeout(typeWrite, 1500); return; }
    } else {
      tw.innerHTML = current.slice(0, cIdx - 1) + ' <span style="color:var(--accent2);font-weight:500;">@</span> TEK-UP<span class="typewriter"> </span>';
      cIdx--;
      if (cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % titles.length; }
    }
    setTimeout(typeWrite, deleting ? 45 : 75);
  }
  typeWrite();
}



// Nav active link on scroll
const sections = document.querySelectorAll('section[id], div[id="hero"]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
        link.style.color = 'var(--accent)';
      }
    }
  });
});
