import PageShell from './PageShell';

export default function AboutContent() {
  return (
    <PageShell>
      <p className="text-[10px] tracking-[0.15em] uppercase mb-8 text-[#7a82a4] dark:text-[#4b5070]">
        About
      </p>

      <div className="flex flex-col gap-5">

        <h3 className="text-[13px] font-medium text-[#0d1124] dark:text-[#dde0f0]">
          In so few words
        </h3>

        <p className="text-[13px] leading-[1.85] text-[#5a6280] dark:text-[#6b7090]">
          I study Computer Science and enjoy learning how systems work and how thoughtful
          design can improve them. Outside of classes I build small tools, read, and write
          about ideas that connect technology and people.
        </p>

        <p className="text-[13px] leading-[1.85] text-[#5a6280] dark:text-[#6b7090]">
          I was born in{' '}
          <a href="https://en.wikipedia.org/wiki/Lahore" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] underline-hover border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors">
            Lahore
          </a>, spent part of my childhood in{' '}
          <a href="https://en.wikipedia.org/wiki/Al_Ain" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            Al Ain
          </a>, and later moved to{' '}
          <a href="https://en.wikipedia.org/wiki/Calgary" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            Calgary
          </a>. Moving often taught me to adapt easily and find comfort in change.
        </p>

        <p className="text-[13px] leading-[1.85] text-[#5a6280] dark:text-[#6b7090]">
          I am curious about systems, design, and the small details that shape structure.
          I like seeing how lines of code form patterns and how those patterns evolve into
          something larger. That curiosity led me to programming - testing and refining
          until things feel right.
        </p>

        <h3 className="text-[13px] font-medium text-[#0d1124] dark:text-[#dde0f0] mt-3">
          Somewhere beyond
        </h3>

        <p className="text-[13px] leading-[1.85] text-[#5a6280] dark:text-[#6b7090]">
          Outside of computing I have always been drawn to space. I find a sense of calm
          and awe in learning about the universe - particularly{' '}
          <a href="https://en.wikipedia.org/wiki/General_relativity" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            general relativity
          </a> and{' '}
          <a href="https://en.wikipedia.org/wiki/Special_relativity" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            special relativity
          </a>{' '}
          and how they reshape everything we think we know about time and light.
        </p>

        <p className="text-[13px] leading-[1.85] text-[#5a6280] dark:text-[#6b7090]">
          I am especially drawn to black holes -{' '}
          <a href="https://en.wikipedia.org/wiki/Sagittarius_A*" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            Sgr A*
          </a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Messier_87*" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            M87*
          </a>,{' '}
          <a href="https://en.wikipedia.org/wiki/Cygnus_X-1" target="_blank" rel="noreferrer"
            className="text-[#0d1124] dark:text-[#dde0f0] border-b border-[#0d1124]/20 dark:border-[#dde0f0]/20 hover:text-gold hover:border-gold transition-colors no-underline">
            Cygnus X-1
          </a>. Places where our understanding of physics reaches its limit.
        </p>

        <p className="text-[13px] leading-[1.85] text-[#5a6280] dark:text-[#6b7090]">
          On clear nights I like looking up. It reminds me how small we are, and how
          extraordinary it is that we can even comprehend any of it.
        </p>


      </div>
    </PageShell>
  );
}
