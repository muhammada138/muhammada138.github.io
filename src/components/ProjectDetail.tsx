import { motion } from 'framer-motion';
import PageShell from './PageShell';
import type { Project } from '../data/projects';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const line = {
  hidden: { opacity: 0, y: 6 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};

interface Props {
  project: Project;
}

export default function ProjectDetail({ project }: Props) {
  return (
    <PageShell backHref="/projects" backLabel="projects">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-[10px] tracking-[0.15em] uppercase mb-10 text-[#7a82a4] dark:text-[#4b5070]"
      >
        Project
      </motion.p>

      {/* Title + tagline */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <h1 className="text-[18px] font-medium tracking-tight text-[#0d1124] dark:text-[#dde0f0] mb-1">
          {project.title}
        </h1>
        <p className="text-[12px] text-[#7a82a4] dark:text-[#4b5070]">
          {project.tagline}
        </p>
      </motion.div>

      {/* Image placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full aspect-video rounded-sm mb-10
                   bg-[#0d1124]/4 dark:bg-[#dde0f0]/4
                   flex items-center justify-center"
      >
        <span className="text-[10px] tracking-[0.1em] uppercase text-[#7a82a4] dark:text-[#4b5070]">
          screenshot coming soon
        </span>
      </motion.div>

      {/* Overview */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-10"
      >
        <motion.p
          variants={line}
          className="text-[10px] tracking-[0.12em] uppercase mb-4 text-[#7a82a4] dark:text-[#4b5070]"
        >
          Overview
        </motion.p>
        {project.overview.map((point, i) => (
          <motion.p
            key={i}
            variants={line}
            className="text-[12px] leading-[1.8] text-[#5a6280] dark:text-[#6b7090] mb-2"
          >
            — {point}
          </motion.p>
        ))}
      </motion.div>

      {/* Meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex items-center gap-6 mb-10"
      >
        <div>
          <p className="text-[9px] tracking-[0.12em] uppercase text-[#7a82a4] dark:text-[#4b5070] mb-1">
            Stack
          </p>
          <p className="text-[11px] text-[#0d1124] dark:text-[#dde0f0]">
            {project.tech.join(', ')}
          </p>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.12em] uppercase text-[#7a82a4] dark:text-[#4b5070] mb-1">
            Status
          </p>
          <p className="text-[11px] text-[#0d1124] dark:text-[#dde0f0]">
            {project.status}
          </p>
        </div>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="flex items-center gap-5"
      >
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] no-underline text-[#7a82a4] dark:text-[#4b5070]
                     hover:text-gold transition-colors duration-150"
        >
          view on github ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] no-underline text-[#7a82a4] dark:text-[#4b5070]
                       hover:text-gold transition-colors duration-150"
          >
            live site ↗
          </a>
        )}
      </motion.div>
    </PageShell>
  );
}
