import PageShell from './PageShell';

const links = [
  { label: 'Email',    href: 'mailto:muhammada138@hotmail.com', external: false },
  { label: 'GitHub',   href: 'https://github.com/muhammada138',           external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammada138/', external: true },
];

export default function ContactContent() {
  return (
    <PageShell>
      <p className="text-[10px] tracking-[0.15em] uppercase mb-8 text-[#7a82a4] dark:text-[#4b5070]">
        Contact
      </p>

      <div className="flex flex-col gap-[6px] mb-8">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="group flex items-center gap-2 w-fit no-underline
                       text-[13px] text-[#0d1124] dark:text-[#dde0f0]
                       hover:text-gold transition-colors duration-150"
          >
            <span
              className="text-[11px] text-gold opacity-0 -translate-x-1
                         group-hover:opacity-100 group-hover:translate-x-0
                         transition-all duration-150"
            >
              →
            </span>
            {label}
          </a>
        ))}
      </div>

      <p className="text-[12px] leading-[1.8] text-[#7a82a4] dark:text-[#4b5070]">
        Open to conversations, internships, and collaborations.<br />
        Best reached by email.
      </p>
    </PageShell>
  );
}
