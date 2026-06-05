import { Code2, Monitor, Users, CalendarDays } from "lucide-react";
import HamsterMascot, { HamsterMascotHandle } from "./HamsterMascot";
import { RefObject } from "react";

interface HeroCardProps {
  hamsterRef: RefObject<HamsterMascotHandle | null>;
}

const features = [
  { icon: <Code2 size={20} className="text-white" />, line1: "เรียนรู้พื้นฐาน", line2: "การเขียนโค้ด", floatClass: "animate-icon-float" },
  { icon: <Monitor size={20} className="text-white" />, line1: "ลงมือทำ", line2: "โปรเจกต์จริง", floatClass: "animate-icon-float-1" },
  { icon: <Users size={20} className="text-white" />, line1: "พัฒนาทักษะ", line2: "พร้อมต่อยอด", floatClass: "animate-icon-float-2" },
];

export default function HeroCard({ hamsterRef }: HeroCardProps) {
  return (
    <div
      className="flex flex-col rounded-[30px]"
      style={{
        background: "var(--card-bg)",
        boxShadow: "0 20px 50px rgba(20,40,90,0.08)",
        padding: "32px",
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ fontFamily: "var(--font-poppins),Poppins,sans-serif", fontWeight: 900, color: "var(--ink)", fontSize: 48, lineHeight: 1.1, margin: 0 }}>
          Hamster
        </h1>
        <h1 className="flex items-center" style={{ fontFamily: "var(--font-poppins),Poppins,sans-serif", fontWeight: 900, color: "var(--primary)", fontSize: 48, lineHeight: 1.1, margin: 0 }}>
          <span>P</span><PawIcon /><span>p Camp</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p style={{ color: "var(--text-slate)", fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
        ตัวจริง เรียนรู้ ลงมือทำ<br />
        สร้างโปรเจกต์จบใน <span style={{ color: "var(--primary)", fontWeight: 700 }}>5 วัน</span>
      </p>

      {/* Features + Hamster */}
      <div className="flex items-end" style={{ gap: 8, marginBottom: 20 }}>
        <div className="flex flex-col" style={{ gap: 14, flex: 1 }}>
          {features.map((f, i) => (
            <div key={i} className="flex items-center" style={{ gap: 12 }}>
              <div
                className={`rounded-full flex items-center justify-center ${f.floatClass}`}
                style={{ width: 44, height: 44, background: "var(--primary)", flexShrink: 0 }}
              >
                {f.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)", lineHeight: 1.3 }}>{f.line1}</div>
                <div style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.3 }}>{f.line2}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flexShrink: 0, width: 200 }}>
          <HamsterMascot ref={hamsterRef} />
        </div>
      </div>

      {/* Schedule box */}
      <div className="flex items-center" style={{ background: "var(--ink)", borderRadius: 16, padding: "14px 20px", gap: 16 }}>
        <div className="flex items-center justify-center rounded-full" style={{ width: 48, height: 48, background: "var(--white)", flexShrink: 0 }}>
          <CalendarDays size={20} style={{ color: "var(--ink)" }} />
        </div>
        <div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, margin: 0 }}>เวลารอบสด</p>
          <p style={{ color: "var(--white)", fontSize: 19, fontWeight: 700, margin: "2px 0 0", lineHeight: 1.2 }}>19:30 – 21:30 น.</p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: "2px 0 0" }}>ทุกวัน • 5 วันเต็ม</p>
        </div>
      </div>
    </div>
  );
}

function PawIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="inline-block animate-icon-float" style={{ marginBottom: -4 }} aria-hidden>
      <ellipse cx="20" cy="24" rx="9" ry="8" fill="#0468FA" />
      <ellipse cx="12" cy="18" rx="4" ry="5" fill="#0468FA" />
      <ellipse cx="28" cy="18" rx="4" ry="5" fill="#0468FA" />
      <ellipse cx="16" cy="13" rx="3" ry="4" fill="#0468FA" />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill="#0468FA" />
    </svg>
  );
}
