"use client";
import { useRef } from "react";
import HeroCard from "@/components/register/HeroCard";
import RegisterWizard from "@/components/register/RegisterWizard";
import { HamsterMascotHandle } from "@/components/register/HamsterMascot";

export default function RegisterPage() {
  const hamsterRef = useRef<HamsterMascotHandle>(null);
  return (
    <main style={{ minHeight: "100vh", background: "var(--page-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, width: "100%", maxWidth: 1380, alignItems: "stretch" }}>
        <HeroCard hamsterRef={hamsterRef} />
        <RegisterWizard hamsterRef={hamsterRef} />
      </div>
    </main>
  );
}
