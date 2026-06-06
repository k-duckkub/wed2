"use client";
import { Code2, Monitor, Users, CalendarDays } from "lucide-react";
import HamsterMascot, { HamsterMascotHandle } from "./HamsterMascot";
import { RefObject } from "react";

const features = [
  { icon: <Code2 size={20} color="white" />, line1: "เรียนรู้พื้นฐาน", line2: "การเขียนโค้ด", delay: "0s" },
  { icon: <Monitor size={20} color="white" />, line1: "ลงมือทำ", line2: "โปรเจกต์จริง", delay: "0.6s" },
  { icon: <Users size={20} color="white" />, line1: "พัฒนาทักษะ", line2: "พร้อมต่อยอด", delay: "1.2s" },
];

export default function LeftPanel({ hamsterRef }: { hamsterRef: RefObject<HamsterMascotHandle | null> }) {
  return (
    <div style={{
      width: "45%", height: "100%",
      background: "#F4F8FE",
      display: "flex", flexDirection: "column",
      padding: 48, position: "relative", overflow: "hidden",
      boxSizing: "border-box",
    }}>
      {/* Title */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 900, color: "#00215E", fontSize: 64, lineHeight: 1.1 }}>Hamster</div>
        <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontWeight: 900, color: "#0165FF", fontSize: 64, lineHeight: 1.1, display: "flex", alignItems: "center", gap: 4 }}>
          <span>P</span><PawIcon /><span>p Camp</span>
        </div>
      </div>

      {/* Subtitle */}
      <p style={{ color: "#4B5563", fontSize: 20, lineHeight: 1.6, margin: "0 0 28px" }}>
        ตัวจริง เรียนรู้ ลงมือทำ<br />
        สร้างโปรเจกต์จบใน <span style={{ color: "#0165FF", fontWeight: 700 }}>5 วัน</span>
      </p>

      {/* Features */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48, height: 48, borderRadius: "50%", background: "#0165FF",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                animation: `iconFloat 4s ease-in-out ${f.delay} infinite`,
              }}
            >{f.icon}</div>
            <div>
              <div style={{ color: "#1F2937", fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{f.line1}</div>
              <div style={{ color: "#1F2937", fontSize: 15, lineHeight: 1.3 }}>{f.line2}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Hamster */}
      <div style={{ position: "absolute", bottom: 120, right: -50, width: 280, zIndex: 10 }}>
        <HamsterMascot ref={hamsterRef} />
      </div>

      {/* Schedule box — floating */}
      <div style={{
        background: "#00215E", borderRadius: 24, padding: "16px 22px",
        display: "flex", alignItems: "center", gap: 16,
        animation: "floatBox 3s ease-in-out infinite",
        position: "relative", zIndex: 5,
      }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <CalendarDays size={22} color="#00215E" />
        </div>
        <div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, margin: 0 }}>เวลารอบสด</p>
          <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: "2px 0" }}>19:30 – 21:30 น.</p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, margin: 0 }}>ทุกวัน • 5 วันเต็ม</p>
        </div>
      </div>

      <style>{`
        @keyframes iconFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes floatBox { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>
    </div>
  );
}

function PawIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 40 40" fill="none" style={{ animation: "iconFloat 4s ease-in-out infinite" }}>
      <ellipse cx="20" cy="24" rx="9" ry="8" fill="#0165FF" />
      <ellipse cx="12" cy="18" rx="4" ry="5" fill="#0165FF" />
      <ellipse cx="28" cy="18" rx="4" ry="5" fill="#0165FF" />
      <ellipse cx="16" cy="13" rx="3" ry="4" fill="#0165FF" />
      <ellipse cx="24" cy="13" rx="3" ry="4" fill="#0165FF" />
    </svg>
  );
}
