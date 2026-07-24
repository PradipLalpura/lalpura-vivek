import { useState, useRef } from 'react';
import type { ReactNode, MouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    
    // Check if within padding
    if (Math.abs(distX) < width / 2 + padding && Math.abs(distY) < height / 2 + padding) {
      setIsActive(true);
      const moveX = distX / strength;
      const moveY = distY / strength;
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0)`);
    } else {
      setIsActive(false);
      setTransform("translate3d(0px, 0px, 0)");
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setTransform("translate3d(0px, 0px, 0)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
