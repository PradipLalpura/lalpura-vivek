import { useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const marqueeImages1 = [
  '/Work images/Work 1/1.jpeg', '/Work images/Work 2/1.jpeg', '/Work images/Work 3/1.jpeg', '/Work images/Work 4/1.jpeg', '/Work images/Work 5/1.jpeg',
  '/Work images/Work 1/1.jpeg', '/Work images/Work 2/1.jpeg', '/Work images/Work 3/1.jpeg', '/Work images/Work 4/1.jpeg', '/Work images/Work 5/1.jpeg',
  '/Work images/Work 1/1.jpeg', '/Work images/Work 2/1.jpeg', '/Work images/Work 3/1.jpeg', '/Work images/Work 4/1.jpeg', '/Work images/Work 5/1.jpeg'
];

const marqueeImages2 = [
  '/Work images/Work 1/2.jpeg', '/Work images/Work 2/2.jpeg', '/Work images/Work 3/2.jpeg', '/Work images/Work 4/2.jpeg', '/Work images/Work 5/2.jpeg',
  '/Work images/Work 1/2.jpeg', '/Work images/Work 2/2.jpeg', '/Work images/Work 3/2.jpeg', '/Work images/Work 4/2.jpeg', '/Work images/Work 5/2.jpeg',
  '/Work images/Work 1/2.jpeg', '/Work images/Work 2/2.jpeg', '/Work images/Work 3/2.jpeg', '/Work images/Work 4/2.jpeg', '/Work images/Work 5/2.jpeg'
];

const LOOP_WIDTH = 5 * (420 + 12); // 2160px

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  useEffect(() => {
    let animationFrameId: number;
    let autoOffset = 0;
    
    const update = () => {
      autoOffset -= 0.6; // ~36px per sec
      
      let scrollOffset = 0;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollAmount = window.innerHeight - rect.top;
        scrollOffset = scrollAmount * 0.3;
      }

      const total1 = autoOffset - scrollOffset - 200;
      const total2 = -autoOffset + scrollOffset - 200 - LOOP_WIDTH;
      
      x1.set(wrap(-LOOP_WIDTH, 0, total1));
      x2.set(wrap(-LOOP_WIDTH, 0, total2));
      
      animationFrameId = requestAnimationFrame(update);
    };
    
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [x1, x2]);

  return (
    <section ref={containerRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      {/* Row 1: moves left as we scroll down */}
      <motion.div 
        className="flex gap-3 will-change-transform"
        style={{ x: x1 }}
      >
        {marqueeImages1.map((src, i) => (
          <img
            key={`row1-${i}`}
            src={src}
            alt="Construction estimation portfolio preview"
            loading="lazy"
            decoding="async"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </motion.div>

      {/* Row 2: moves right as we scroll down */}
      <motion.div 
        className="flex gap-3 will-change-transform"
        style={{ x: x2 }}
      >
        {marqueeImages2.map((src, i) => (
          <img
            key={`row2-${i}`}
            src={src}
            alt="Construction drawing and estimating work preview"
            loading="lazy"
            decoding="async"
            className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
          />
        ))}
      </motion.div>
    </section>
  );
}
