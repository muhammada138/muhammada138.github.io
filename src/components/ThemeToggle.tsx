import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-[10px] tracking-[0.12em] uppercase px-2 py-1 rounded border transition-colors duration-200
        text-frost-500 border-frost-500/30 hover:text-frost-100 hover:border-frost-100/40
        dark:text-frost-500 dark:border-frost-500/30 dark:hover:text-frost-100 dark:hover:border-frost-100/40
        not-dark:text-slate2-500 not-dark:border-slate2-500/30 not-dark:hover:text-slate2-800 not-dark:hover:border-slate2-800/40"
    >
      {isDark ? 'light' : 'dark'}
    </button>
  );
}
