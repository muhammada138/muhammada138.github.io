import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface Props {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
  wide?: boolean;
}

export default function PageShell({ children, backHref = '/', backLabel = 'back', wide = false }: Props) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6">
      <div className={`w-full ${wide ? 'max-w-[640px]' : 'max-w-[460px]'} py-16`}>

        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-14"
        >
          <a
            href={backHref}
            className="text-[12px] no-underline text-[#7a82a4] dark:text-[#4b5070]
                       hover:text-[#0d1124] dark:hover:text-[#dde0f0] transition-colors duration-150"
          >
            ← {backLabel}
          </a>
          <ThemeToggle />
        </motion.header>

        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>

      </div>
    </div>
  );
}
