import { Code2, Monitor, Users, CalendarDays } from "lucide-react";
import HamsterMascot, { HamsterMascotHandle } from "./HamsterMascot";
import { RefObject } from "react";

interface HeroCardProps {
  hamsterRef: RefObject<HamsterMascotHandle | null>;
}

const features = [
  { icon: <Code2 size={22} className="text-white" />, line1: "เรียนรู้พื้นฐาน", line2: "การเขียนโค้ด", floatClass: "animate-icon-float" },
  { icon: <Monitor size={22} className="text-white" />, line1: "ลงมือทำ", line2: "โปรเจกต์จริง", floatClass: "animate-icon-float-1" },
  { icon: <Users size={22} className="text-white" />, line1: "พัฒนาทักษะ", line2: "พร้อมต่อยอด", floatClass: "animate-icon-float-2" },
];

export default function HeroCard({ hamsterRef }: HeroCardProps) {
  return (
    <div
      className="flex flex-col rounded-[30px] relative overflow-hidden"
      style={{
        background: "var(--card-bg)",
        boxShadow: "0 20px 50px rgba(20,40,90,0.08)",
        padding: "36px 36px 32px 36px",
      }}
    >
      {/* Title */}
      <div className="mb-2">
        <h1
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 900,
            color: "var(--ink)",
            fontSize: 52,
            lineHeight: 1.1,
          }}
        >
          Hamster
        </h1>
        <h1
          className="flex items-center gap-1"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 900,
            color: "var(--primary)",
            fontSize: 52,
            lineHeight: 1.1,
          }}
        >
          <span>P</span>
          <PawIcon />
          <span>p Camp</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="leading-relaxed mb-5" style={{ color: "var(--text-slate)", fontSize: 17 }}>
        ตัวจริง เรียนรู้ ลงมือทำ<br />
        สร้างโปรเจกต์จบใน{" "}
        <span style={{ color: "var(--primary)", fontWeight: 700 }}>5 วัน</span>
      </p>

      {/* Features + Hamster row */}
      <div className="flex items-end gap-2 mb-5">
        {/* Feature list */}
        <div className="flex flex-col gap-4 flex-1">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${f.floatClass}`}
                style={{ background: "var(--primary)" }}
              >
                {f.icon}
              </div>
              <div>
                <div className="font-semibold leading-tight" style={{ color: "var(--ink)", fontSize: 15 }}>{f.line1}</div>
                <div className="leading-tight" style={{ color: "var(--ink)", fontSize: 15 }}>{f.line2}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hamster */}
        <div className="flex-shrink-0 w-52">
          <HamsterMascot ref={hamsterRef} />
        </div>
      </div>

      {/* Schedule box */}
      <div
        className="rounded-2xl px-5 py-4 flex items-center gap-4"
        style={{ background: "var(--ink)" }}
      >
        <div
          className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center"
          style={{ background: "var(--white)" }}
        >
          <CalendarDays size={22} style={{ color: "var(--ink)" }} />
        </div>
        <div>
          <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>เวลารอบสด</p>
          <p className="font-bold leading-tight" style={{ color: "var(--white)", fontSize: 20 }}>19:30 – 21:30 น.</p>
          <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>ทุกวัน • 5 วันเต็ม</p>
        </div>
      </div>
    </div>
  );
}

function PawIcon() {
  return (
    <svg
      width="44" height="44" viewBox="0 0 40 40" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block -mb-1 animate-icon-float"
      aria-hidden
    >
      <ellipse cx="20" cy="24" rx="9" ry="8" fill="#0468FA" />
      <ellipse cx="12" cy="18" rx="4" ry="5" fill="#0468FA" />
      <ellipse cx="28" cy="18" rx="4" ry="5" fill="#0468FA" />
      <ellipse cx="16" cy="13" rx="3" ry="4" fill="#0468FA" />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill="#0468FA" />
    </svg>
  );
}
