// smooth page transitions
document.querySelectorAll('a[href]').forEach(link => {
  const isInternal = link.host === window.location.host;
  if (!isInternal) return;

  link.addEventListener('click', e => {
    const main = document.querySelector('main');
    e.preventDefault();
    main.classList.add('exiting');
    setTimeout(() => {
      window.location = link.href;
    }, 200);
  });
});
