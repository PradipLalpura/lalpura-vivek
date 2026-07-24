import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ViewWorkButton } from '../components/Buttons';
import { FadeIn } from '../components/FadeIn';
import { Modal } from '../components/Modal';
import { ImageGallery } from '../components/ImageGallery';

const works = [
  {
    num: "01",
    label: "Residential Construction",
    name: "Portfolio Sample",
    images: {
      left1: "/Work images/Work 1/2.jpeg",
      left2: "/Work images/Work 1/3.jpeg",
      right: "/Work images/Work 1/1.jpeg"
    },
    gallery: [
      "/Work images/Work 1/1.jpeg",
      "/Work images/Work 1/2.jpeg",
      "/Work images/Work 1/3.jpeg",
      "/Work images/Work 1/4.jpeg",
      "/Work images/Work 1/5.jpeg",
      "/Work images/Work 1/6.jpeg",
      "/Work images/Work 1/7.jpeg",
      "/Work images/Work 1/8.jpeg"
    ]
  },
  {
    num: "02",
    label: "Commercial Construction",
    name: "Portfolio Sample",
    images: {
      left1: "/Work images/Work 2/2.jpeg",
      left2: "/Work images/Work 2/3.jpeg",
      right: "/Work images/Work 2/1.jpeg"
    },
    gallery: [
      "/Work images/Work 2/1.jpeg",
      "/Work images/Work 2/2.jpeg",
      "/Work images/Work 2/3.jpeg",
      "/Work images/Work 2/4.jpeg",
      "/Work images/Work 2/5.jpeg",
      "/Work images/Work 2/6.jpeg",
      "/Work images/Work 2/7.jpeg",
      "/Work images/Work 2/8.jpeg"
    ]
  },
  {
    num: "03",
    label: "Industrial Construction",
    name: "Portfolio Sample",
    images: {
      left1: "/Work images/Work 3/2.jpeg",
      left2: "/Work images/Work 3/3.jpeg",
      right: "/Work images/Work 3/1.jpeg"
    },
    gallery: [
      "/Work images/Work 3/1.jpeg",
      "/Work images/Work 3/2.jpeg",
      "/Work images/Work 3/3.jpeg",
      "/Work images/Work 3/4.jpeg",
      "/Work images/Work 3/5.jpeg",
      "/Work images/Work 3/6.jpeg",
      "/Work images/Work 3/7.jpeg",
      "/Work images/Work 3/8.jpeg"
    ]
  },
  {
    num: "04",
    label: "Site Development & Civil Works",
    name: "Portfolio Sample",
    images: {
      left1: "/Work images/Work 4/2.jpeg",
      left2: "/Work images/Work 4/3.jpeg",
      right: "/Work images/Work 4/1.jpeg"
    },
    gallery: [
      "/Work images/Work 4/1.jpeg",
      "/Work images/Work 4/2.jpeg",
      "/Work images/Work 4/3.jpeg",
      "/Work images/Work 4/4.jpeg",
      "/Work images/Work 4/5.jpeg",
      "/Work images/Work 4/6.jpeg",
      "/Work images/Work 4/7.jpeg",
      "/Work images/Work 4/8.jpeg"
    ]
  },
  {
    num: "05",
    label: "Project Management & Estimation",
    name: "Portfolio Sample",
    images: {
      left1: "/Work images/Work 5/2.jpeg",
      left2: "/Work images/Work 5/3.jpeg",
      right: "/Work images/Work 5/1.jpeg"
    },
    gallery: [
      "/Work images/Work 5/1.jpeg",
      "/Work images/Work 5/2.jpeg",
      "/Work images/Work 5/3.jpeg",
      "/Work images/Work 5/4.jpeg",
      "/Work images/Work 5/5.jpeg",
      "/Work images/Work 5/6.jpeg",
      "/Work images/Work 5/7.jpeg",
      "/Work images/Work 5/8.jpeg"
    ]
  }
];

export function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="work" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pb-32">
      <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 mb-16 sm:mb-20">
        <FadeIn delay={0}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] leading-none tracking-normal">
            Work
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-col relative px-5 sm:px-8 md:px-10">
        {works.map((work, index) => (
          <WorkCard 
            key={work.num} 
            work={work} 
            index={index} 
            totalCards={works.length} 
            onView={() => setSelectedWork(work)}
          />
        ))}
      </div>

      <Modal 
        isOpen={!!selectedWork} 
        onClose={() => setSelectedWork(null)}
        title={selectedWork ? `${selectedWork.num} - ${selectedWork.label}` : ""}
      >
        {selectedWork && (
          <div className="flex flex-col gap-8">
            <ImageGallery 
              images={selectedWork.gallery} 
            />
          </div>
        )}
      </Modal>
    </section>
  );
}

function WorkCard({ work, index, totalCards, onView }: { work: any; index: number; totalCards: number; onView: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  // Z-index increases by 10 for each subsequent card
  const zIndex = (index + 1) * 10;

  return (
    <div ref={containerRef} className="h-screen w-full sticky top-0 flex items-start justify-center" style={{ zIndex }}>
      <motion.div 
        style={{ 
          scale,
          marginTop: `calc(${index * 28}px + 6rem)` // offset each card slightly down
        }}
        className="w-full max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 transform-origin-top shadow-2xl relative"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#D7E2EA]/20 pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,6vw,80px)] leading-none">{work.num}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">{work.name}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,3vw,2.5rem)] leading-tight">{work.label}</h3>
            </div>
          </div>
          <ViewWorkButton onClick={onView} />
        </div>

        {/* Bottom Row - Images */}
        <div className="flex flex-row w-full gap-4 h-full min-h-[300px]">
          {/* Left Column - 40% */}
          <div className="flex flex-col w-[40%] gap-4">
            <img 
              src={work.images.left1} 
              alt={`${work.label} detail 1`} 
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img 
              src={work.images.left2} 
              alt={`${work.label} detail 2`} 
              loading="lazy"
              decoding="async"
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-grow"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          
          {/* Right Column - 60% */}
          <div className="w-[60%]">
            <img 
              src={work.images.right} 
              alt={`${work.label} main`} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
