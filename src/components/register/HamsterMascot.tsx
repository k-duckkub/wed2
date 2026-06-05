"use client";
import { useRef, useCallback, forwardRef, useImperativeHandle, useEffect, useState } from "react";

export interface HamsterMascotHandle {
  triggerNod: () => void;
}

const HamsterMascot = forwardRef<HamsterMascotHandle>((_, ref) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isNodding, setIsNodding] = useState(false);
  const throttleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerNod = useCallback(() => {
    if (throttleRef.current) return;
    setIsNodding(true);
    throttleRef.current = setTimeout(() => {
      throttleRef.current = null;
    }, 350);
  }, []);

  useEffect(() => {
    if (!isNodding) return;
    const t = setTimeout(() => setIsNodding(false), 450);
    return () => clearTimeout(t);
  }, [isNodding]);

  useImperativeHandle(ref, () => ({ triggerNod }), [triggerNod]);

  const idleStyle: React.CSSProperties = {
    transformOrigin: "bottom center",
    transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
    transform: isNodding
      ? "rotate(8deg) translateY(4px)"
      : undefined,
  };

  return (
    <div className="relative flex justify-center items-end select-none pointer-events-none">
      {/* blob behind */}
      <div
        className="animate-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-[60%_40%_70%_30%/50%_50%_60%_40%] opacity-70"
        style={{ background: "var(--blob)", zIndex: 0 }}
      />
      <img
        ref={imgRef}
        src="/Untitled_design_12.png"
        alt="Hamster mascot"
        className={`relative z-10 w-44 h-auto object-contain ${!isNodding ? "animate-float" : ""}`}
        style={idleStyle}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
});

HamsterMascot.displayName = "HamsterMascot";
export default HamsterMascot;
