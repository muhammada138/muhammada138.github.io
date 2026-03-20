import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import MuteToggle from './MuteToggle';

const links = [
  { label: 'about',    href: '/about',   external: false },
  { label: 'projects', href: '/projects',external: false },
  { label: 'resume',   href: '/resume',  external: false },
  { label: 'github',   href: 'https://github.com/muhammada138',          external: true },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/muhammada138/',external: true },
  { label: 'email',    href: null,       external: false },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const row = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function playHoverSound() {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem('muted') === 'true') return;
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.07);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.07);
  } catch {}
}

export default function HomeNav() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [emailLabel, setEmailLabel] = useState('email');
  const [calgaryTime, setCalgaryTime] = useState('--:--');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function tick() {
      setCalgaryTime(
        new Date().toLocaleTimeString('en-CA', {
          timeZone: 'America/Edmonton',
          hour: '2-digit', minute: '2-digit', hour12: false,
        })
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function copyEmail() {
    navigator.clipboard.writeText('muhammada138@hotmail.com').then(() => {
      setEmailLabel('copied ✓');
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setEmailLabel('email'), 2000);
    });
  }

  const anyHovered = hovered !== null;
  const dim = (id: string) => ({
    opacity: anyHovered && hovered !== id ? 0.15 : 1,
    transition: 'opacity 0.22s ease',
  });

  const linkClass = `text-[12px] text-[#0d1124] dark:text-[#dde0f0] no-underline
    hover:text-gold transition-colors duration-150 w-fit`;

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[460px]">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <span className="text-[12px] font-medium tracking-tight text-[#0d1124] dark:text-[#dde0f0]">
            Muhammad Abdullah
          </span>
          <div className="flex items-center gap-3">
            <MuteToggle />
            <ThemeToggle />
          </div>
        </motion.header>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="text-[10px] tracking-[0.12em] uppercase mb-10 text-[#7a82a4] dark:text-[#4b5070]"
        >
          Computer Science
        </motion.p>

        {/* Nav — single continuous block, no divider */}
        <motion.nav
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-[5px]"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map(({ label, href, external }) => {
            if (label === 'email') {
              return (
                <motion.div
                  key="email"
                  variants={row}
                  style={dim('email')}
                  whileHover={{ x: 5 }}
                  transition={{ x: { type: 'spring', stiffness: 500, damping: 30 } }}
                  onMouseEnter={() => { setHovered('email'); playHoverSound(); }}
                  className="group flex items-center gap-3 w-fit cursor-default"
                >
                  <span className="text-[12px] text-[#0d1124] dark:text-[#dde0f0]">
                    <span className="group-hover:hidden">email</span>
                    <a
                      href="mailto:muhammada138@hotmail.com"
                      className="hidden group-hover:inline text-gold no-underline hover:opacity-70 transition-opacity"
                    >
                      muhammada138@hotmail.com
                    </a>
                  </span>
                  <button
                    onClick={copyEmail}
                    className="hidden group-hover:inline text-[10px] text-[#5a6080] dark:text-[#4b5070]
                               hover:text-[#0d1124] dark:hover:text-[#dde0f0] transition-colors
                               bg-transparent border-none cursor-pointer font-[inherit]"
                  >
                    {emailLabel === 'copied ✓' ? emailLabel : 'copy'}
                  </button>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={label}
                href={href!}
                variants={row}
                style={dim(label)}
                whileHover={{ x: 5 }}
                transition={{ x: { type: 'spring', stiffness: 500, damping: 30 } }}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                onMouseEnter={() => { setHovered(label); playHoverSound(); }}
                className={linkClass}
              >
                {label}
              </motion.a>
            );
          })}
        </motion.nav>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-2 mt-12 text-[10px] text-[#7a82a4] dark:text-[#4b5070]"
        >
          <span
            className="w-[4px] h-[4px] rounded-full flex-shrink-0"
            style={{ background: '#C89B3C', opacity: 0.55 }}
          />
          <span>{calgaryTime} · Calgary, AB</span>
        </motion.footer>

      </div>
    </div>
  );
}
