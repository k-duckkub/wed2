"use client";
import { useRef } from "react";
import LeftPanel from "@/components/register/LeftPanel";
import RightPanel from "@/components/register/RightPanel";
import { HamsterMascotHandle } from "@/components/register/HamsterMascot";

export default function RegisterPage() {
  const hamsterRef = useRef<HamsterMascotHandle>(null);
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F9FAFB",
      padding: "24px",
    }}>
      {/* ONE big card, two columns */}
      <div style={{
        width: 1120,
        height: 720,
        borderRadius: 32,
        boxShadow: "0 24px 64px rgba(0,33,94,0.12)",
        display: "flex",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <LeftPanel hamsterRef={hamsterRef} />
        <RightPanel hamsterRef={hamsterRef} />
      </div>
    </main>
  );
}
