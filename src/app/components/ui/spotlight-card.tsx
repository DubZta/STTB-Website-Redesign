import React, { useRef, useState, useEffect } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
  glowColor?: string;
}

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  size = "md",
  width,
  height,
  customSize = false,
  glowColor = "rgba(30,64,175,0.50)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const SOFT_OPACITY = 0.8;
  const NEON_OPACITY = 1;

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const distance = Math.sqrt(dx * dx + dy * dy);

      const ACTIVATION_DISTANCE = 140;

      if (distance < ACTIVATION_DISTANCE) {
        const strength = 1 - distance / ACTIVATION_DISTANCE;
        setOpacity(strength);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const style: React.CSSProperties = {
    ...(width !== undefined && {
      width: typeof width === "number" ? `${width}px` : width,
    }),
    ...(height !== undefined && {
      height: typeof height === "number" ? `${height}px` : height,
    }),
  };

  return (
    <div
      ref={cardRef}
      style={style}
      className={`
        relative overflow-hidden rounded-2xl
        ${!customSize ? sizeMap[size] || sizeMap.md : ""}
        ${!customSize ? "aspect-[3/4]" : ""}
        shadow-[0_0_30px_rgba(30,64,175,0.15)]
        ${className}
      `}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 blur-2xl"
        style={{
          opacity: opacity * 0.8,
          background: `radial-gradient(
            circle at ${position.x}px ${position.y}px,
            ${glowColor.replace(/0\.\d+\)$/, '0.8)')},
            transparent 60%
          )`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 blur-md"
        style={{
          opacity,
          background: `radial-gradient(
            circle at ${position.x}px ${position.y}px,
            ${glowColor},
            transparent 45%
          )`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity,
          padding: "1px",
          background: `radial-gradient(
            circle at ${position.x}px ${position.y}px,
            ${glowColor},
            transparent 35%
          )`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export { GlowCard };