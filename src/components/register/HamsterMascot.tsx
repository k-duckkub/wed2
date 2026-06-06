"use client";
import { useRef, useCallback, forwardRef, useImperativeHandle, useEffect, useState } from "react";

export interface HamsterMascotHandle {
  triggerNod: () => void;
  triggerCelebrate: () => void;
}

const HamsterMascot = forwardRef<HamsterMascotHandle>((_, ref) => {
  const [isNodding, setIsNodding] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [celebFrame, setCelebFrame] = useState(0);
  const throttleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerNod = useCallback(() => {
    if (throttleRef.current || isCelebrating) return;
    setIsNodding(true);
    throttleRef.current = setTimeout(() => { throttleRef.current = null; }, 350);
  }, [isCelebrating]);

  useEffect(() => {
    if (!isNodding) return;
    const t = setTimeout(() => setIsNodding(false), 450);
    return () => clearTimeout(t);
  }, [isNodding]);

  const triggerCelebrate = useCallback(() => {
    setIsCelebrating(true);
    setCelebFrame(0);
    // bounce 3 times then return to idle
    let f = 0;
    const interval = setInterval(() => {
      f++;
      setCelebFrame(f);
      if (f >= 6) { clearInterval(interval); setIsCelebrating(false); setCelebFrame(0); }
    }, 180);
  }, []);

  useImperativeHandle(ref, () => ({ triggerNod, triggerCelebrate }), [triggerNod, triggerCelebrate]);

  const celebBounce = isCelebrating
    ? celebFrame % 2 === 0
      ? "translateY(-14px) rotate(-8deg) scale(1.08)"
      : "translateY(0px) rotate(8deg) scale(1)"
    : undefined;

  const idleStyle: React.CSSProperties = {
    transformOrigin: "bottom center",
    transition: isCelebrating
      ? "transform 0.18s cubic-bezier(0.22,1,0.36,1)"
      : "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
    transform: isCelebrating
      ? celebBounce
      : isNodding
      ? "rotate(8deg) translateY(4px)"
      : undefined,
  };

  return (
    <div className="relative flex justify-center items-end select-none pointer-events-none">
      <div
        className="animate-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-56 rounded-[60%_40%_70%_30%/50%_50%_60%_40%] opacity-70"
        style={{ background: "var(--blob)", zIndex: 0 }}
      />
      <img
        src="/Untitled_design_12.png"
        alt="Hamster mascot"
        className={`relative z-10 w-56 h-auto object-contain ${!isNodding && !isCelebrating ? "animate-float" : ""}`}
        style={idleStyle}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    </div>
  );
});

HamsterMascot.displayName = "HamsterMascot";
export default HamsterMascot;
