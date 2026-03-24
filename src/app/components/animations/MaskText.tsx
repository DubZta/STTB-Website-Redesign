import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

interface MaskTextProps {
  children: React.ReactNode;
  type?: 'lines' | 'words' | 'chars';
  className?: string;
  delay?: number;
  once?: boolean;
}

const splitConfig = {
  lines: { duration: 0.9, stagger: 0.1 },
  words: { duration: 0.7, stagger: 0.08 },
  chars: { duration: 0.5, stagger: 0.02 }
};

const MaskText: React.FC<MaskTextProps> = ({
  children,
  type = 'lines',
  className = '',
  delay = 0,
  once = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const typesToSplit =
        type === 'lines' ? 'lines' :
          type === 'words' ? 'lines,words' :
            'lines,words,chars';

      const split = new SplitText(containerRef.current, {
        type: typesToSplit,
        linesClass: 'overflow-hidden',
      });

      split.lines.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        wrapper.style.display = 'block';
        wrapper.className = 'line-mask';

        if (line.parentNode) {
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        }
      });

      const targets = split[type];
      const config = splitConfig[type];

      gsap.from(targets, {
        yPercent: 120,
        duration: config.duration,
        stagger: config.stagger,
        delay,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: once,
          toggleActions: "play none none none"
        }
      });

      gsap.set(containerRef.current, { visibility: 'visible' });
    }, containerRef);

    return () => ctx.revert();
  }, [type, delay, once, children]);

  return (
    <div
      ref={containerRef}
      className={`relative invisible ${className}`}
    >
      {children}
    </div>
  );
};

export default MaskText;