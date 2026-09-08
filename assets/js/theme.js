// Theme toggle. The pre-paint theme read lives inline in each page's <head>;
// this only handles the button label and the click.
(function () {
  function isDark() {
    var explicit = document.documentElement.getAttribute('data-theme');
    if (explicit) return explicit === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function label() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    var dark = isDark();
    btn.textContent = dark ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  window.toggleTheme = function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    label();
  };

  label();
})();
