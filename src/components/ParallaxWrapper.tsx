
import React, { useEffect, useState, useRef } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ 
  children, 
  speed = 0.1, 
  className = '' 
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile or prefers reduced motion
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      // Only apply parallax on desktop for better performance
      if (!isMobile) {
        setScrollY(window.scrollY);
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Skip parallax effect on mobile devices for better performance
  if (isMobile) {
    return (
      <div className={className} ref={elementRef}>
        {children}
      </div>
    );
  }

  return (
    <div 
      ref={elementRef}
      className={`will-change-transform ${className}`}
      style={{ 
        transform: `translate3d(0, ${scrollY * speed}px, 0)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper;
