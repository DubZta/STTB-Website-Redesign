import { useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type TiltedCardProps = {
  imageSrc: string;
  altText: string;
  captionText?: string;
  containerHeight?: string | number;
  containerWidth?: string | number;
  imageHeight?: string | number;
  imageWidth?: string | number;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
  onClick?: () => void;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  containerHeight = '400px',
  containerWidth = '100%',
  imageHeight = '250px',
  imageWidth = '100%',
  rotateAmplitude = 8,
  scaleOnHover = 1.03,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
  onClick,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useRef(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const springRotateX = useSpring(rotateX, { stiffness: 140, damping: 18 });
  const springRotateY = useSpring(rotateY, { stiffness: 140, damping: 18 });
  const springScale = useSpring(scale, { stiffness: 160, damping: 20 });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const shouldDisableTilt = useMemo(() => {
    return prefersReducedMotion.current || rotateAmplitude === 0;
  }, [rotateAmplitude]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldDisableTilt || !cardRef.current) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateXValue = clamp(((y - midY) / midY) * -rotateAmplitude, -rotateAmplitude, rotateAmplitude);
    const rotateYValue = clamp(((x - midX) / midX) * rotateAmplitude, -rotateAmplitude, rotateAmplitude);

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    if (shouldDisableTilt) {
      return;
    }
    scale.set(scaleOnHover ?? 1.03);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <div className="relative" style={{ width: containerWidth, height: containerHeight }}>
      <motion.div
        ref={cardRef}
        className="relative h-full w-full rounded-xl overflow-hidden"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <img
          src={imageSrc}
          alt={altText}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            const target = event.currentTarget;
            target.src = '/images/fallback/program-placeholder.webp';
            target.onerror = null;
          }}
          className="block w-full object-cover"
          style={{ height: imageHeight, width: imageWidth }}
        />

        {captionText && (
          <div className="absolute top-3 right-3 bg-white/90 text-slate-900 text-[11px] font-semibold px-2 py-1 rounded-full">
            {captionText}
          </div>
        )}

        {displayOverlayContent && overlayContent}

        {showTooltip && (
          <div className="absolute bottom-3 left-3 text-xs text-white/80">{captionText}</div>
        )}

        {showMobileWarning && (
          <div className="absolute top-3 left-3 text-xs text-white/80">Tilt disabled on mobile</div>
        )}

        <span className="sr-only">Card tilts on hover to reveal program details</span>
      </motion.div>
    </div>
  );
}
