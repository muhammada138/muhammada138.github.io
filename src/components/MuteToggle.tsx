import { useState, useEffect } from 'react';

export default function MuteToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(localStorage.getItem('muted') === 'true');
  }, []);

  function toggle() {
    const next = !muted;
    setMuted(next);
    localStorage.setItem('muted', String(next));
  }

  return (
    <button
      onClick={toggle}
      className="text-[10px] text-[#7a82a4] dark:text-[#4b5070]
                 hover:text-[#0d1124] dark:hover:text-[#dde0f0]
                 transition-colors bg-transparent border-none cursor-pointer font-[inherit]"
    >
      {muted ? '[unmute]' : '[mute]'}
    </button>
  );
}
