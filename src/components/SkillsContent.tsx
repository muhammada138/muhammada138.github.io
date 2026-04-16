import { motion } from 'framer-motion';
import PageShell from './PageShell';

const skills = [
  { name: 'React / Next.js', level: 'Lv.7' },
  { name: 'JavaScript / TS', level: 'Lv.7' },
  { name: 'Python / FastAPI', level: 'Lv.6' },
  { name: 'Django / Postgres', level: 'Lv.6' },
  { name: 'Tailwind / CSS', level: 'Lv.7' },
  { name: 'Algorithms',      level: 'Lv.5' },
  { name: 'Git / CI-CD',     level: 'Lv.5' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export default function SkillsContent() {
  return (
    <PageShell>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-[10px] tracking-[0.15em] uppercase mb-8 text-[#7a82a4] dark:text-[#4b5070]"
      >
        Skills
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col"
      >
        {skills.map(({ name, level }) => (
          <motion.div
            key={name}
            variants={item}
            className="flex items-baseline justify-between py-[10px]
                       border-b border-[#0d1124]/8 dark:border-[#dde0f0]/6 last:border-b-0"
          >
            <span className="text-[13px] text-[#0d1124] dark:text-[#dde0f0]">{name}</span>
            <span className="text-[11px] tracking-[0.04em] text-[#7a82a4] dark:text-[#4b5070]">{level}</span>
          </motion.div>
        ))}
      </motion.div>
    </PageShell>
  );
}
