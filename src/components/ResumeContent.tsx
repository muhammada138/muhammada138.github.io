import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import MuteToggle from './MuteToggle';

const DRIVE_EMBED = 'https://drive.google.com/file/d/1t7TC6VrpLjBYv1bLeaDoaUx38S8Kbdyo/preview';
const DRIVE_LINK  = 'https://drive.google.com/file/d/1t7TC6VrpLjBYv1bLeaDoaUx38S8Kbdyo/view';

export default function ResumeContent() {
  return (
    <div className="w-full min-h-screen flex flex-col px-6 py-10 max-w-[860px] mx-auto">

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-8"
      >
        <a
          href="/"
          className="text-[12px] font-medium tracking-tight no-underline
                     text-[#0d1124] dark:text-[#dde0f0]
                     hover:text-gold transition-colors duration-150"
        >
          Muhammad Abdullah
        </a>
        <div className="flex items-center gap-3">
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] text-[#7a82a4] dark:text-[#4b5070]
                       hover:text-[#0d1124] dark:hover:text-[#dde0f0]
                       transition-colors no-underline"
          >
            open ↗
          </a>
          <MuteToggle />
          <ThemeToggle />
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 w-full rounded-sm overflow-hidden
                   border border-[#0d1124]/8 dark:border-[#dde0f0]/6"
        style={{ minHeight: '80vh' }}
      >
        <iframe
          src={DRIVE_EMBED}
          className="w-full h-full"
          style={{ minHeight: '80vh', border: 'none' }}
          allow="autoplay"
          title="Resume"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6"
      >
        <a
          href="/"
          className="text-[10px] no-underline text-[#7a82a4] dark:text-[#4b5070]
                     hover:text-[#0d1124] dark:hover:text-[#dde0f0] transition-colors duration-150"
        >
          ← back
        </a>
      </motion.div>

    </div>
  );
}
