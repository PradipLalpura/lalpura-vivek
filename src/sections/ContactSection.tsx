import { ExternalLink, Mail, Phone } from 'lucide-react';
import { ContactTile } from '../components/Buttons';
import { FadeIn } from '../components/FadeIn';

export function ContactSection() {
  return (
    <section id="contact" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center z-30 relative">
      <FadeIn delay={0}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] leading-none tracking-normal mb-12 sm:mb-16 md:mb-20">
          Let&apos;s Connect
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center mb-24 md:mb-32">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <FadeIn delay={0.15} y={20}>
            <ContactTile 
              icon={Mail} 
              text="lalpuravivek@gmail.com" 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lalpuravivek%40gmail.com"
              target="_blank"
              ariaLabel="Email Vivek Lalpura in Gmail"
            />
          </FadeIn>
          
          <FadeIn delay={0.3} y={20}>
            <ContactTile 
              icon={ExternalLink} 
              text="linkedin.com/in/vivek-lalpura" 
              href="http://linkedin.com/in/vivek-lalpura/" 
              target="_blank"
              ariaLabel="Open Vivek Lalpura LinkedIn profile"
            />
          </FadeIn>

          <FadeIn delay={0.45} y={20}>
            <ContactTile 
              icon={Phone} 
              text="+91 7405115231" 
              href="tel:+917405115231" 
              ariaLabel="Call Vivek Lalpura"
            />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={10} className="w-full text-center">
        <p className="text-[#0C0C0C] opacity-50 text-xs font-medium uppercase tracking-wider">
          &copy; 2026 Vivek Lalpura - Open to Australian Sponsorship / Skilled Migration.
        </p>
      </FadeIn>
    </section>
  );
}
