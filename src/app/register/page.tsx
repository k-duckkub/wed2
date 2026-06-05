"use client";
import { useRef } from "react";
import HeroCard from "@/components/register/HeroCard";
import RegisterWizard from "@/components/register/RegisterWizard";
import { HamsterMascotHandle } from "@/components/register/HamsterMascot";

export default function RegisterPage() {
  const hamsterRef = useRef<HamsterMascotHandle>(null);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8" style={{ background: "var(--page-bg)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <HeroCard hamsterRef={hamsterRef} />
        <RegisterWizard hamsterRef={hamsterRef} />
      </div>
    </main>
  );
}
