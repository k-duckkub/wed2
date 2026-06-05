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
      <div
        className="grid grid-cols-1 md:grid-cols-2 w-full"
        style={{ gap: 24, maxWidth: 1100 }}
      >
        <HeroCard hamsterRef={hamsterRef} />
        <RegisterWizard hamsterRef={hamsterRef} />
      </div>
    </main>
  );
}
