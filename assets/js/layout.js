/* ===== layout.js — সব পেজের topbar + sidebar + page title এক জায়গা থেকে বানায় =====
   মেনু বদলাতে data/menu.js, লোগো বদলাতে assets/img/logo.png এডিট করুন */
(function () {
  const D = window.DATA, C = D.config, S = D.student, B = document.body;
  const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
  window.fmt = (n) => Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  window.logout = () => { sessionStorage.removeItem('smuct_auth'); location.href = '../index.html'; };

  // login guard
  if (C.requireLogin && !B.dataset.public && !sessionStorage.getItem('smuct_auth')) { location.replace('../index.html'); return; }
  if (B.classList.contains('auth')) return;          // change-password এর নিজস্ব layout

  const here = decodeURIComponent(location.pathname.split('/').pop() + location.search);
  const flat = D.menu.flatMap((m) => m.children || [m]);
  const page = B.dataset.page || (flat.find((m) => decodeURIComponent(m.href) === here) || {}).key || '', title = B.dataset.title || '';
  const parts = [];
  D.menu.forEach((m) => {
    if (m.children) {
      const open = m.children.some((c) => c.key === page);
      parts.push(`<div class="group ${open ? 'open' : ''}"><button class="item" data-toggle><i class="fa-solid ${m.icon} ic"></i>${m.label}<i class="fa-solid fa-chevron-right chev"></i></button><div class="sub">` +
        m.children.map((c) => `<a class="item ${c.key === page ? 'active' : ''}" href="${c.href}">${c.label}</a>`).join('') + `</div></div>`);
    } else {
      parts.push(`<a class="item ${m.small ? 'small' : ''} ${m.key === page ? 'active' : ''}" href="${m.href}"><i class="fa-solid ${m.icon} ic"></i>${m.label}</a>`);
    }
  });

  const top = el(`<header class="topbar"><div class="left"><a href="dashboard.html"><img class="logo" src="../assets/img/logo.png" alt="${C.short}"></a>
    <button class="burger" id="burger" aria-label="Menu"><i class="fa-solid fa-bars"></i></button></div>
    <div class="user"><span>${S.name}</span><img src="${S.photo}" alt=""><button class="power" title="Logout" onclick="logout()"><i class="fa-solid fa-power-off"></i></button></div></header>`);
  const side = el(`<nav class="sidebar">${parts.join('')}<div class="foot">${C.footer}</div></nav>`);
  const loader = el('<div class="loader"><i class="fa-solid fa-rotate"></i></div>');
  const main = el(`<main class="main"><div class="page-head"><h1>${title}</h1><div class="tools">
    <button style="--c:#22c5d3" title="Print" onclick="window.print()"><i class="fa-solid fa-print"></i></button>
    <button style="--c:#ee4b4b" title="Fullscreen" id="fs"><i class="fa-solid fa-expand"></i></button>
    <button style="--c:#f0b429" title="Refresh" id="rf"><i class="fa-solid fa-rotate"></i></button>
    <button style="--c:#35b5d6" title="Width" id="wd"><i class="fa-solid fa-left-right"></i></button></div></div><div class="content"></div></main>`);
  const pg = document.getElementById('page');
  main.querySelector('.content').appendChild(pg);
  B.prepend(main); B.prepend(loader); B.prepend(side); B.prepend(top);
  if (!title) main.querySelector('.page-head h1').remove();

  // interactions
  document.getElementById('burger').onclick = () => B.classList.toggle(innerWidth <= 900 ? 'side-open' : 'side-collapsed');
  document.getElementById('fs').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  document.getElementById('rf').onclick = () => { B.classList.add('loading'); setTimeout(() => location.reload(), 250); };
  document.getElementById('wd').onclick = () => B.classList.toggle('compact');
  side.querySelectorAll('[data-toggle]').forEach((b) => b.onclick = () => b.parentElement.classList.toggle('open'));
  document.addEventListener('click', (e) => {             // পেজ বদলের সময় spinner
    const a = e.target.closest('a[href]');
    if (!a || a.target || e.metaKey || e.ctrlKey || a.getAttribute('href').startsWith('#') || a.hasAttribute('data-noload')) return;
    e.preventDefault(); B.classList.add('loading'); setTimeout(() => (location.href = a.href), 220);
  });
  window.addEventListener('pageshow', () => B.classList.remove('loading'));
  if (innerWidth <= 900) B.classList.remove('side-open');
})();
