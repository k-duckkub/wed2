"use client";
import { useRef } from "react";
import HeroCard from "@/components/register/HeroCard";
import RegisterWizard from "@/components/register/RegisterWizard";
import { HamsterMascotHandle } from "@/components/register/HamsterMascot";

export default function RegisterPage() {
  const hamsterRef = useRef<HamsterMascotHandle>(null);
  return (
    <main style={{
      minHeight: "100vh",
      background: "var(--page-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      boxSizing: "border-box",
    }}>
      {/* align-items: stretch → การ์ดขวายืดสูงเท่าการ์ดซ้ายอัตโนมัติ */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "stretch",
        gap: 28,
        width: "100%",
        maxWidth: 1200,
      }}>
        <HeroCard hamsterRef={hamsterRef} />
        <RegisterWizard hamsterRef={hamsterRef} />
      </div>
    </main>
  );
}
