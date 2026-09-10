/**
 * main.js
 * ------------------------------------------------------------------
 * Renders repeatable content (skills, projects, timeline, facts,
 * social links) from SITE_DATA, and wires up navigation, scroll
 * reveal, the hero terminal animation, and the contact form.
 * No external libraries — everything below is plain JS.
 * ------------------------------------------------------------------
 */

'use strict';

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.75c0-1.24 1-2.25 2.25-2.25S16.5 11.5 16.5 12.75v3.75M12 10.5v6"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7.5 8.5L4.5 20H7l5-5.7L16.5 20H20l-7.8-8.9L19.5 4H17l-4.6 5.2L8 4H4Z"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M10 14 20 4M6 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1"/></svg>`,
};

/* ---- helpers ---------------------------------------------------- */

function isPlaceholder(value) {
  return typeof value === 'string' && value.trim().toLowerCase().startsWith('todo');
}

function resolveHref(value, fallback = '#') {
  return value && !isPlaceholder(value) ? value : fallback;
}

/* ---- render: social links ---------------------------------------- */

function renderSocials() {
  const { socials } = SITE_DATA;
  const items = [
    { url: socials.github, label: 'GitHub', icon: ICONS.github, show: true },
    { url: socials.linkedin, label: 'LinkedIn', icon: ICONS.linkedin, show: true },
    { url: socials.x.url, label: 'X (Twitter)', icon: ICONS.x, show: socials.x.show },
  ];

  const markup = items
    .filter((item) => item.show)
    .map(
      (item) => `
      <a class="social-link" href="${resolveHref(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
        ${item.icon}
      </a>`
    )
    .join('');

  document.querySelectorAll('[data-socials]').forEach((el) => {
    el.innerHTML = markup;
  });
}

function renderContactEmail() {
  const el = document.getElementById('contactEmail');
  if (!el) return;
  const email = SITE_DATA.person.email;

  if (isPlaceholder(email)) {
    el.textContent = email.replace(/^TODO:\s*/i, '');
    el.href = '#';
  } else {
    el.textContent = email;
    el.href = `mailto:${email}`;
  }
}

/* ---- render: narrative text (name, tagline, intro, bio, etc.) ------- */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderNarrative() {
  const { person, hero, about, contact, footer } = SITE_DATA;

  document.querySelectorAll('[data-person-name]').forEach((el) => {
    el.textContent = person.name;
  });

  const eyebrow = document.getElementById('heroEyebrow');
  if (eyebrow) {
    eyebrow.innerHTML = person.tagline
      .map((t) => `<span>${t}</span>`)
      .join('<span class="dot" aria-hidden="true">•</span>');
  }

  setText('heroIntro', hero.intro);
  setText('aboutBio', about.bio);
  setText(
    'aboutEducation',
    `${about.education.degree} — ${about.education.school} (${about.education.period})`
  );
  setText('contactLede', contact.invite);
  setText('footerTagline', footer.tagline);
}

/* ---- render: about facts + tags ----------------------------------- */

function renderAboutFacts() {
  const el = document.getElementById('aboutFacts');
  if (!el) return;
  el.innerHTML = SITE_DATA.about.facts
    .map(
      (fact) => `
      <div class="fact">
        <span class="fact__value">${fact.value}</span>
        <span class="fact__label">${fact.label}</span>
      </div>`
    )
    .join('');
}

function renderAboutTags() {
  const el = document.getElementById('aboutTags');
  if (!el) return;
  el.innerHTML = SITE_DATA.about.focusAreas
    .map((area) => `<span class="tag">${area}</span>`)
    .join('');
}

/* ---- render: skills ------------------------------------------------ */

function renderSkills() {
  const el = document.getElementById('skillGroups');
  if (!el) return;
  el.innerHTML = SITE_DATA.skills
    .map(
      (group, i) => `
      <div class="skill-group" data-reveal style="--reveal-index:${i}">
        <h3 class="skill-group__title"><span class="hash">#</span>${group.group}</h3>
        <div class="skill-group__chips">
          ${group.items
            .map((item) => `<span class="skill-chip">${item}</span>`)
            .join('')}
        </div>
      </div>`
    )
    .join('');
}

/* ---- render: projects ----------------------------------------------- */

function renderProjects() {
  const el = document.getElementById('projectsGrid');
  if (!el) return;
  el.innerHTML = SITE_DATA.projects
    .map((project, i) => {
      const techTags = project.tech.map((t) => `<span class="tag">${t}</span>`).join('');
      const hasDemo = project.demo && !isPlaceholder(project.demo);
      const demoBtn = hasDemo
        ? `<a class="btn btn--secondary btn--small" href="${project.demo}" target="_blank" rel="noopener noreferrer">${ICONS.external} Live Demo</a>`
        : '';
      const codeTitle = isPlaceholder(project.github)
        ? 'Add your repository link in js/data.js'
        : 'View source on GitHub';

      return `
      <article class="project-card" data-reveal style="--reveal-index:${i % 2}">
        <div class="project-card__window">
          <span class="terminal__dot"></span><span class="terminal__dot"></span><span class="terminal__dot"></span>
          <span class="project-card__filename">${project.file}</span>
        </div>
        <div class="project-card__preview">
          <span class="project-card__glyph">${project.type}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.name}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tech">${techTags}</div>
          <div class="project-card__actions">
            <a class="btn btn--secondary btn--small" href="${resolveHref(project.github)}" target="_blank" rel="noopener noreferrer" title="${codeTitle}">
              ${ICONS.github} View Code
            </a>
            ${demoBtn}
          </div>
        </div>
      </article>`;
    })
    .join('');
}

/* ---- render: journey timeline ---------------------------------------- */

function renderTimeline() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = SITE_DATA.journey
    .map(
      (item, i) => `
      <div class="timeline__item${item.current ? ' is-current' : ''}" data-reveal style="--reveal-index:${i}">
        <span class="timeline__marker"></span>
        <span class="timeline__date">${item.date}</span>
        <h3 class="timeline__title">${item.title}</h3>
        <p class="timeline__desc">${item.description}</p>
      </div>`
    )
    .join('');
}

/* ---- nav: scroll state, mobile menu, active section -------------------- */

function wireNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const desktopLinks = document.querySelectorAll('.nav__link');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const closeMobile = () => {
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const willOpen = !mobileNav.classList.contains('is-open');
    mobileNav.classList.toggle('is-open', willOpen);
    mobileNav.setAttribute('aria-hidden', String(!willOpen));
    toggle.classList.toggle('is-open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobile));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobile();
  });

  const sections = document.querySelectorAll('main section[id]');
  const linkFor = (id) => document.querySelector(`.nav__link[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        desktopLinks.forEach((link) => link.classList.remove('is-active'));
        const link = linkFor(entry.target.id);
        if (link) link.classList.add('is-active');
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---- scroll reveal ------------------------------------------------------ */

function wireScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

/* ---- hero terminal typing animation -------------------------------------- */

function typeHeroTerminal() {
  const el = document.getElementById('terminalBody');
  if (!el) return;

  const lines = [
    'const alexa = {',
    '  role: "Software Engineering student",',
    '  builds: ["web apps", "android apps"],',
    '  stack: ["Python", "Flask", "Kotlin", "JS"],',
    '  focus: "clean, useful software",',
    '  status: "currently building..."',
    '};',
  ];
  const full = lines.join('\n');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  el.innerHTML = '';
  const textNode = document.createTextNode('');
  const cursor = document.createElement('span');
  cursor.className = 'terminal__cursor';
  el.append(textNode, cursor);

  if (prefersReduced) {
    textNode.data = full;
    return;
  }

  let i = 0;
  const tick = () => {
    if (i > full.length) return;
    textNode.data = full.slice(0, i);
    i += 1;
    setTimeout(tick, 16 + Math.random() * 26);
  };
  tick();
}

/* ---- contact form (mailto — no backend) ----------------------------------- */

function wireContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in every field before sending.';
      return;
    }

    const ownerEmail = SITE_DATA.person.email;
    if (isPlaceholder(ownerEmail)) {
      status.textContent = 'Add a real email address in js/data.js to enable this form.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app…';
    form.reset();
  });
}

/* ---- init ------------------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
  renderNarrative();
  renderSocials();
  renderContactEmail();
  renderAboutFacts();
  renderAboutTags();
  renderSkills();
  renderProjects();
  renderTimeline();

  wireNav();
  wireScrollReveal();
  wireContactForm();
  typeHeroTerminal();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
