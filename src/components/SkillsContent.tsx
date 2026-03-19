import PageShell from './PageShell';

const skills = [
  { name: 'HTML / CSS',   level: 'Lv.7' },
  { name: 'JavaScript',   level: 'Lv.6' },
  { name: 'Python',       level: 'Lv.5' },
  { name: 'Algorithms',   level: 'Lv.5' },
  { name: 'C / C++',      level: 'Lv.4' },
  { name: 'Git',          level: 'Lv.4' },
];

export default function SkillsContent() {
  return (
    <PageShell>
      <p className="text-[10px] tracking-[0.15em] uppercase mb-8 text-[#7a82a4] dark:text-[#4b5070]">
        Skills
      </p>

      <div className="flex flex-col">
        {skills.map(({ name, level }) => (
          <div
            key={name}
            className="flex items-baseline justify-between py-[10px]
                       border-b border-[#0d1124]/8 dark:border-[#dde0f0]/6 last:border-b-0"
          >
            <span className="text-[13px] text-[#0d1124] dark:text-[#dde0f0]">{name}</span>
            <span className="text-[11px] tracking-[0.04em] text-[#7a82a4] dark:text-[#4b5070]">{level}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
