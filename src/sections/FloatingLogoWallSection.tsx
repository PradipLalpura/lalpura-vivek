import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';

import abnLogo from '../assets/company-logos/abn-group.png';
import cartergrangeLogo from '../assets/company-logos/cartergrange.png';
import candsLogo from '../assets/company-logos/cands.png';
import longIslandLogo from '../assets/company-logos/long-island-homes.png';
import metriconLogo from '../assets/company-logos/metricon.png';
import dsBuiltLogo from '../assets/company-logos/ds-built.png';
import gjGardnerLogo from '../assets/company-logos/gj-gardner.png';
import ghanHomesLogo from '../assets/company-logos/ghan-homes.png';
import glenvillLogo from '../../Builder logos/Glenvill Homes.svg';
import hermitageLogo from '../assets/company-logos/hermitage-homes.png';
import toplineBuilderLogo from '../assets/company-logos/topline-roofing.png';
import yhbLogo from '../assets/company-logos/yhb-group.png';
import fairviewLogo from '../../Contractor Logos/fairview-logo-inline.svg';
import maroondahLogo from '../assets/company-logos/maroondah-roofing.png';
import midlandLogo from '../assets/company-logos/midland-roofing.png';
import screenshotLogo from '../assets/company-logos/contractor-partner.png';
import toplineRoofsLogo from '../../Contractor Logos/topline-roofs-logo-black.svg';

type LogoItem = {
  name: string;
  src: string;
  width: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  nudgeY: number;
};

const logos: LogoItem[] = [
  { name: 'ABN Group', src: abnLogo, width: { mobile: 142, tablet: 178, desktop: 210 }, nudgeY: -4 },
  { name: 'Carter Grange', src: cartergrangeLogo, width: { mobile: 190, tablet: 260, desktop: 325 }, nudgeY: 0 },
  { name: 'Long Island Homes', src: longIslandLogo, width: { mobile: 220, tablet: 300, desktop: 360 }, nudgeY: -2 },
  { name: 'Metricon', src: metriconLogo, width: { mobile: 164, tablet: 210, desktop: 252 }, nudgeY: 1 },
  { name: 'D&S Built', src: dsBuiltLogo, width: { mobile: 112, tablet: 148, desktop: 176 }, nudgeY: -3 },
  { name: 'G.J. Gardner Homes', src: gjGardnerLogo, width: { mobile: 172, tablet: 230, desktop: 290 }, nudgeY: 1 },
  { name: 'Ghan Homes', src: ghanHomesLogo, width: { mobile: 152, tablet: 198, desktop: 235 }, nudgeY: -2 },
  { name: 'Glenvill Homes', src: glenvillLogo, width: { mobile: 235, tablet: 330, desktop: 410 }, nudgeY: 0 },
  { name: 'Hermitage Homes', src: hermitageLogo, width: { mobile: 156, tablet: 210, desktop: 260 }, nudgeY: 2 },
  { name: 'Topline Roofing', src: toplineBuilderLogo, width: { mobile: 142, tablet: 184, desktop: 220 }, nudgeY: -1 },
  { name: 'YHB Group', src: yhbLogo, width: { mobile: 104, tablet: 128, desktop: 150 }, nudgeY: -4 },
  { name: 'Fairview', src: fairviewLogo, width: { mobile: 190, tablet: 250, desktop: 310 }, nudgeY: 1 },
  { name: 'Maroondah Roofing', src: maroondahLogo, width: { mobile: 174, tablet: 225, desktop: 280 }, nudgeY: -1 },
  { name: 'Midland Roofing', src: midlandLogo, width: { mobile: 116, tablet: 140, desktop: 160 }, nudgeY: 1 },
  { name: 'Contractor Partner', src: screenshotLogo, width: { mobile: 90, tablet: 110, desktop: 130 }, nudgeY: -3 },
  { name: 'Topline Roofs', src: toplineRoofsLogo, width: { mobile: 140, tablet: 180, desktop: 220 }, nudgeY: 2 },
  { name: 'C&S Wall & Floor Specialists', src: candsLogo, width: { mobile: 170, tablet: 225, desktop: 270 }, nudgeY: 0 }
];

function getViewportMode(width: number) {
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function getGap(width: number) {
  if (width < 640) return 76;
  if (width < 1024) return 112;
  return 148;
}

export function FloatingLogoWallSection() {
  const prefersReducedMotion = useReducedMotion();
  const rowRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const travelRef = useRef(0);
  const [viewportWidth, setViewportWidth] = useState(() => (
    typeof window === 'undefined' ? 1280 : window.innerWidth
  ));

  const mode = getViewportMode(viewportWidth);
  const gap = getGap(viewportWidth);
  const itemHeight = mode === 'desktop' ? 128 : mode === 'tablet' ? 112 : 96;
  const itemWidths = useMemo(() => logos.map((logo) => logo.width[mode]), [mode]);
  const basePositions = useMemo(() => {
    let cursor = 0;
    return itemWidths.map((width) => {
      const position = cursor;
      cursor += width + gap;
      return position;
    });
  }, [gap, itemWidths]);
  const loopWidth = useMemo(() => (
    itemWidths.reduce((total, width) => total + width, 0) + logos.length * gap
  ), [gap, itemWidths]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let animationFrame = 0;
    let previousTime = performance.now();
    const speed = mode === 'desktop' ? 64 : mode === 'tablet' ? 54 : 44;
    const centerX = viewportWidth / 2;
    const initialFocusOffset = centerX - basePositions[1] - itemWidths[1] / 2;
    travelRef.current = initialFocusOffset;

    const render = (now: number) => {
      const deltaSeconds = Math.min((now - previousTime) / 1000, 0.05);
      previousTime = now;

      if (!prefersReducedMotion) {
        travelRef.current += speed * deltaSeconds;
      } else {
        travelRef.current = initialFocusOffset;
      }

      const travel = travelRef.current;
      const offset = (((travel % loopWidth) + loopWidth) % loopWidth) - loopWidth;

      itemRefs.current.forEach((element, index) => {
        if (!element) return;

        const logoIndex = index % logos.length;
        const copyIndex = Math.floor(index / logos.length);
        const x = basePositions[logoIndex] + copyIndex * loopWidth + offset;
        const y = logos[logoIndex].nudgeY;

        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        element.style.opacity = '1';
        element.style.filter = 'none';
      });

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    render(performance.now());
    return () => cancelAnimationFrame(animationFrame);
  }, [basePositions, itemWidths, loopWidth, mode, prefersReducedMotion, viewportWidth]);

  const repeatedLogos = useMemo(() => (
    Array.from({ length: 3 }, (_, copyIndex) => (
      logos.map((logo, logoIndex) => ({ ...logo, key: `${copyIndex}-${logo.name}`, logoIndex }))
    )).flat()
  ), []);

  return (
    <section
      id="trusted-builders"
      className="relative isolate overflow-hidden bg-[#F5F2EC] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      aria-labelledby="trusted-builders-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn delay={0} y={34} className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[#0C0C0C]/60">
            COMPANIES WORKED WITH
          </p>
          <h2
            id="trusted-builders-heading"
            className="hero-heading text-[clamp(2.85rem,7.4vw,104px)] font-black uppercase leading-none tracking-normal text-[#0C0C0C]"
            style={{
              WebkitTextFillColor: '#0C0C0C',
              animation: 'none',
              background: 'none'
            }}
          >
            TRUSTED BY<br />BUILDERS &amp; CONTRACTORS
          </h2>
        </FadeIn>

        <div
          data-logo-conveyor
          className="relative -mx-5 mt-12 h-[220px] overflow-hidden sm:-mx-8 sm:mt-16 sm:h-[250px] md:-mx-10 md:h-[300px] lg:mt-20"
          style={{ height: mode === 'desktop' ? 300 : mode === 'tablet' ? 250 : 220 }}
        >
          <div className="relative h-full">
            <div ref={rowRef} className="absolute inset-0 top-1/2 h-28 -translate-y-1/2 sm:h-32 md:h-36">
              {repeatedLogos.map((logo, index) => (
                <div
                  key={logo.key}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-logo-marquee-item
                  className="absolute left-0 top-1/2 flex origin-center -translate-y-1/2 items-center justify-center will-change-transform"
                  style={{ width: itemWidths[logo.logoIndex], height: itemHeight }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="block h-auto max-h-full w-full select-none object-contain"
                    style={{ maxHeight: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
