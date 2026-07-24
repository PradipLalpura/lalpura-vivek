import { FadeIn } from '../components/FadeIn';

const faqs = [
  {
    question: 'Who is Vivek Lalpura?',
    answer:
      'Vivek Lalpura is a civil engineer and construction estimation manager with more than five years of experience across roofing, cladding, earthworks, and quantity takeoff.'
  },
  {
    question: 'What estimating work does Vivek specialize in?',
    answer:
      'He specializes in roofing estimates, cladding estimates, earthworks estimates, civil project estimation, and digital quantity takeoff for Australian construction teams.'
  },
  {
    question: 'Which software does Vivek use?',
    answer:
      'His workflow includes AppliCad Roof Wizard, Bluebeam Revu, MudShark, iScaf, Revit, AutoCAD, SketchUp, Buildxact, AroFlo, Microsoft Office, Virtual Estimator, and OnScreen Takeoff.'
  },
  {
    question: 'Does Vivek work with Australian clients?',
    answer:
      'Yes. The portfolio focuses on Australian construction estimating work, and Vivek is open to Australian sponsorship and skilled migration opportunities.'
  }
];

export function FAQSection() {
  return (
    <section id="answers" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0}>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.24em] text-[#D7E2EA]/55">
            Quick Answers
          </p>
          <h2 className="hero-heading text-center text-[clamp(2.5rem,9vw,120px)] font-black uppercase leading-none tracking-normal">
            FAQ
          </h2>
        </FadeIn>

        <div className="mt-12 sm:mt-16 space-y-3">
          {faqs.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.08} y={20}>
              <details className="group rounded-2xl border border-[#D7E2EA]/20 bg-white/[0.03] px-5 py-5 transition-colors open:bg-white/[0.06] sm:px-7">
                <summary className="flex cursor-pointer list-none items-center gap-4 text-[#D7E2EA] marker:hidden">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-[#D7E2EA]/45 transition-colors group-open:border-[#D7E2EA] group-open:bg-[#D7E2EA]">
                    <span className="h-2.5 w-2.5 scale-0 rounded-sm bg-[#0C0C0C] transition-transform group-open:scale-100" />
                  </span>
                  <span className="text-lg font-semibold leading-snug sm:text-2xl">
                    {item.question}
                  </span>
                </summary>
                <p className="pl-10 pt-4 text-base font-light leading-relaxed text-[#D7E2EA]/75 sm:text-lg">
                  {item.answer}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
