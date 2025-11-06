const SAME_HOST = window.location.host;

function restoreBodyOpacity() {
  document.body.classList.remove('is-transitioning');
}

document.querySelectorAll('a[href]').forEach((link) => {
  if (link.host !== SAME_HOST) return;

  link.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    document.body.classList.add('is-transitioning');
    setTimeout(() => {
      window.location.href = link.href;
    }, 150);
  });
});

document.addEventListener('DOMContentLoaded', restoreBodyOpacity, { once: true });
window.addEventListener('pageshow', restoreBodyOpacity);
