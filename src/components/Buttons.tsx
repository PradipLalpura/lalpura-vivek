import type { LucideIcon } from 'lucide-react';

export function ContactButton() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className="group relative overflow-hidden rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer transition-transform"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      <div className="absolute inset-0 bg-white/15 origin-bottom scale-y-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100 z-0 rounded-full" />
      <span className="relative z-10">Contact Me</span>
    </button>
  );
}

export function ViewWorkButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative overflow-hidden rounded-full border-2 border-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#D7E2EA] origin-bottom scale-y-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100 z-0" />
      <span className="relative z-10 text-[#D7E2EA] group-hover:text-[#0C0C0C] transition-colors duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        View Work
      </span>
    </button>
  );
}

interface ContactTileProps {
  icon: LucideIcon;
  text: string;
  href: string;
  ariaLabel?: string;
  target?: string;
  download?: boolean | string;
}

export function ContactTile({ icon: Icon, text, href, ariaLabel, target, download }: ContactTileProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      download={download}
      className="group relative overflow-hidden flex items-center gap-2.5 rounded-full border-2 border-[#0C0C0C] font-medium uppercase tracking-widest px-10 py-4 sm:px-12 sm:py-5 text-base sm:text-lg transition-colors"
    >
      <div className="absolute inset-0 bg-[#0C0C0C] origin-bottom scale-y-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-y-100 z-0" />
      <div className="relative z-10 flex items-center gap-2.5 text-[#0C0C0C] group-hover:text-white transition-colors duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        <span>{text}</span>
      </div>
    </a>
  );
}
