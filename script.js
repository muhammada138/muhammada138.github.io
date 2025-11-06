// Smooth cross-fade for internal navigation
(function () {
  const isInternal = url =>
    url.origin === window.location.origin &&
    !url.href.startsWith('mailto:') &&
    !url.href.startsWith('tel:');

  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;

    const url = new URL(a.href, window.location.href);
    if (!isInternal(url)) return;

    e.preventDefault();
    const main = document.querySelector('.page');
    if (!main) { window.location = url.href; return; }

    main.classList.add('exit');
    setTimeout(() => { window.location = url.href; }, 180);
  });
})();
