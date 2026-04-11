import { useState } from 'react';
import { motion } from 'framer-motion';
import PageShell from './PageShell';
import { projects } from '../data/projects';
import { playHoverSound } from '../utils/audio';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsContent() {
  const [hovered, setHovered] = useState<string | null>(null);
  const anyHovered = hovered !== null;

  return (
    <PageShell>
      <p className="text-[10px] tracking-[0.15em] uppercase mb-10 text-[#7a82a4] dark:text-[#4b5070]">
        Projects
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
        onMouseLeave={() => setHovered(null)}
      >
        {projects.map(({ slug, title, tagline, tech }) => (
          <motion.a
            key={slug}
            href={`/projects/${slug}`}
            variants={item}
            onMouseEnter={() => { setHovered(slug); playHoverSound(); }}
            style={{
              opacity: anyHovered && hovered !== slug ? 0.15 : 1,
              transition: 'opacity 0.15s ease',
            }}
            className="group flex items-baseline justify-between py-4
                       border-b border-[#0d1124]/8 dark:border-[#dde0f0]/6
                       last:border-b-0 no-underline"
          >
            <div>
              <span className="text-[12px] font-medium text-[#0d1124] dark:text-[#dde0f0]
                               group-hover:text-gold transition-colors duration-150">
                {title}
              </span>
              <span className="block text-[11px] mt-0.5 text-[#7a82a4] dark:text-[#4b5070]">
                {tagline}
              </span>
            </div>
            <span className="text-[10px] text-[#7a82a4] dark:text-[#4b5070] ml-6 flex-shrink-0
                             group-hover:text-gold transition-colors duration-150">
              →
            </span>
          </motion.a>
        ))}
      </motion.div>
    </PageShell>
  );
}
