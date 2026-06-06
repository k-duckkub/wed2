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
      style={{
        background: "var(--card-bg)",
        boxShadow: "0 20px 50px rgba(20,40,90,0.08)",
        borderRadius: 30,
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: 10 }}>
        <h1 style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 900,
          color: "var(--ink)",
          fontSize: 52,
          lineHeight: 1.1,
          margin: 0,
        }}>Hamster</h1>
        <h1 style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 900,
          color: "var(--primary)",
          fontSize: 52,
          lineHeight: 1.1,
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}>
          <span>P</span><PawIcon /><span>p Camp</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p style={{ color: "var(--text-slate)", fontSize: 17, lineHeight: 1.6, marginBottom: 20 }}>
        ตัวจริง เรียนรู้ ลงมือทำ<br />
        สร้างโปรเจกต์จบใน{" "}
        <span style={{ color: "var(--primary)", fontWeight: 700 }}>5 วัน</span>
      </p>

      {/* Features + Hamster — flex-1 ให้ยืดเต็มพื้นที่ว่าง */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, flex: 1, marginBottom: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                className={f.floatClass}
                style={{
                  flexShrink: 0,
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {f.icon}
              </div>
              <div>
                <div style={{ color: "var(--ink)", fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{f.line1}</div>
                <div style={{ color: "var(--ink)", fontSize: 15, lineHeight: 1.3 }}>{f.line2}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flexShrink: 0, width: 210 }}>
          <HamsterMascot ref={hamsterRef} />
        </div>
      </div>

      {/* Schedule box */}
      <div style={{
        background: "var(--ink)",
        borderRadius: 16,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "var(--white)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <CalendarDays size={22} style={{ color: "var(--ink)" }} />
        </div>
        <div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, margin: 0 }}>เวลารอบสด</p>
          <p style={{ color: "var(--white)", fontSize: 20, fontWeight: 700, margin: "2px 0" }}>19:30 – 21:30 น.</p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>ทุกวัน • 5 วันเต็ม</p>
        </div>
      </div>
    </div>
  );
}

function PawIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" fill="none" className="animate-icon-float" aria-hidden>
      <ellipse cx="20" cy="24" rx="9" ry="8" fill="#0468FA" />
      <ellipse cx="12" cy="18" rx="4" ry="5" fill="#0468FA" />
      <ellipse cx="28" cy="18" rx="4" ry="5" fill="#0468FA" />
      <ellipse cx="16" cy="13" rx="3" ry="4" fill="#0468FA" />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill="#0468FA" />
    </svg>
  );
}
