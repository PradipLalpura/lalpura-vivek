import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-[#D7E2EA]/40 bg-[#0C0C0C]/85 text-[#D7E2EA] shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] sm:bottom-7 sm:right-7 ${isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
