import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C]">
      <FadeIn delay={0} y={40} className="w-full text-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-normal text-[clamp(3rem,12vw,160px)]">
          About me
        </h2>
      </FadeIn>

      <div className="mt-10 sm:mt-14 md:mt-16 text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px] text-[clamp(1.25rem,2.6vw,1.75rem)]">
        <AnimatedText text="With more than five years of experience in construction estimation, I focus on roofing, cladding, and earthworks for Australian clients. I enjoy building precise, reliable numbers that help construction teams deliver with confidence. Let's build your next project together!" />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </div>
    </section>
  );
}
