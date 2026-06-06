"use client";
import { useRef } from "react";
import HeroCard from "@/components/register/HeroCard";
import RegisterWizard from "@/components/register/RegisterWizard";
import { HamsterMascotHandle } from "@/components/register/HamsterMascot";

export default function RegisterPage() {
  const hamsterRef = useRef<HamsterMascotHandle>(null);

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--page-bg)", padding: "32px 40px" }}
    >
      {/* items-stretch = การ์ดสองใบสูงเท่ากันเสมอ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
          width: "100%",
          maxWidth: 980,
          alignItems: "stretch",
        }}
      >
        <HeroCard hamsterRef={hamsterRef} />
        <RegisterWizard hamsterRef={hamsterRef} />
      </div>
    </main>
  );
}
