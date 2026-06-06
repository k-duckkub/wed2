"use client";
import { useState, useRef, useCallback } from "react";
import { User, Smile, Calendar, Phone, Ticket, ArrowRight } from "lucide-react";
import { HamsterMascotHandle } from "./HamsterMascot";
import { RefObject } from "react";

interface FormData {
  fullName: string;
  nickname: string;
  age: string;
  phone: string;
  code: string;
}

interface StepConfig {
  field: keyof FormData;
  infoTitle: string;
  infoSub: string;
  InputIcon: React.ElementType;
  placeholder: string;
  type: string;
  optional?: boolean;
}

const STEPS: StepConfig[] = [
  {
    field: "fullName",
    infoTitle: "ยินดีที่ได้รู้จักครับ",
    infoSub: "ขอทราบชื่อจริงของคุณหน่อยครับ",
    InputIcon: User,
    placeholder: "ตัวอย่าง สมชาย ใจดี",
    type: "text",
  },
  {
    field: "nickname",
    infoTitle: "เรียกคุณว่าอะไรดีครับ",
    infoSub: "บอกชื่อเล่นให้แฮมหน่อยน้า",
    InputIcon: Smile,
    placeholder: "ตัวอย่าง ก้อง",
    type: "text",
  },
  {
    field: "age",
    infoTitle: "อายุเท่าไหร่แล้วครับ",
    infoSub: "จะได้จัดกิจกรรมให้เหมาะกับคุณ",
    InputIcon: Calendar,
    placeholder: "ตัวอย่าง 15",
    type: "number",
  },
  {
    field: "phone",
    infoTitle: "ขอเบอร์ติดต่อหน่อยครับ",
    infoSub: "ไว้ส่งรายละเอียดค่ายให้คุณ",
    InputIcon: Phone,
    placeholder: "08x-xxx-xxxx",
    type: "tel",
  },
  {
    field: "code",
    infoTitle: "มีโค้ดส่วนลดไหมครับ",
    infoSub: "ถ้ามีใส่ได้เลย ไม่มีกดข้ามได้น้า",
    InputIcon: Ticket,
    placeholder: "ตัวอย่าง HAMSTER10",
    type: "text",
    optional: true,
  },
];

interface RegisterWizardProps {
  hamsterRef: RefObject<HamsterMascotHandle | null>;
}

export default function RegisterWizard({ hamsterRef }: RegisterWizardProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({ fullName: "", nickname: "", age: "", phone: "", code: "" });
  const [submitted, setSubmitted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"in" | "out">("in");
  const animRef = useRef(false);

  const current = STEPS[step];

  const validateStep = () => {
    const val = formData[current.field];
    if (current.optional) return true;
    if (!val.trim()) return false;
    if (current.field === "age") {
      const n = parseInt(val);
      return n >= 5 && n <= 99;
    }
    if (current.field === "phone") {
      return val.replace(/\D/g, "").length >= 9;
    }
    if (current.field === "fullName") {
      return val.trim().split(" ").length >= 2;
    }
    return val.trim().length > 0;
  };

  const goNext = useCallback(() => {
    if (!validateStep() || animRef.current) return;
    animRef.current = true;
    setSlideDir("out");
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setSlideDir("in");
      setAnimating(false);
      animRef.current = false;
    }, 200);
  }, [step, formData]);

  const goSkip = useCallback(() => {
    if (animRef.current) return;
    animRef.current = true;
    setSlideDir("out");
    setAnimating(true);
    setTimeout(() => {
      setSubmitted(true);
      setAnimating(false);
      animRef.current = false;
    }, 200);
  }, []);

  const handleSubmit = useCallback(() => {
    if (animRef.current) return;
    setSubmitted(true);
  }, []);

  const handleChange = (val: string) => {
    setFormData((prev) => ({ ...prev, [current.field]: val }));
    hamsterRef.current?.triggerNod();
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-[30px] p-8 gap-6"
        style={{ background: "var(--card-bg)", boxShadow: "0 20px 50px rgba(20,40,90,0.08)", minHeight: 420 }}
      >
        <div className="text-5xl">🐹</div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--ink)" }}>
            ลงทะเบียนสำเร็จแล้วครับ!
          </h2>
          <p style={{ color: "var(--text-muted)" }}>ขอบคุณที่สนใจ Hamster Pop Camp</p>
          {formData.code && (
            <p className="mt-2 text-sm font-medium" style={{ color: "var(--primary)" }}>
              โค้ด: {formData.code}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--card-bg)",
        boxShadow: "0 20px 50px rgba(20,40,90,0.08)",
        borderRadius: 30,
        padding: "48px 44px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Static header */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "var(--ink)", fontWeight: 700, fontSize: 30, margin: "0 0 8px" }}>ลงทะเบียนเข้าร่วม</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 15, margin: "0 0 14px" }}>กรอกข้อมูลเพื่อสิทธิ์เข้าร่วมค่าย</p>
        {/* Step dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === step ? 20 : 8,
                height: 8,
                background: i === step ? "var(--primary)" : "var(--border)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated content */}
      <div
        className="flex flex-col transition-all duration-200"
        style={{
          gap: 24,
          opacity: animating ? 0 : 1,
          transform: animating
            ? slideDir === "out" ? "translateY(-12px)" : "translateY(12px)"
            : "translateY(0)",
        }}
      >
        {/* Info bubble */}
        <div
          className="flex items-center rounded-2xl"
          style={{ background: "var(--info-bg)", padding: "18px 20px", gap: 16 }}
        >
          <div
            className="rounded-full flex-shrink-0 flex items-center justify-center animate-icon-float"
            style={{ width: 48, height: 48, background: "var(--paw-blue)" }}
          >
            <PawSVG />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 15, color: "var(--ink)", margin: 0, lineHeight: 1.3 }}>
              {current.infoTitle}
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "3px 0 0", lineHeight: 1.3 }}>
              {current.infoSub}
            </p>
          </div>
        </div>

        {/* Input */}
        <div
          className="flex items-center rounded-2xl transition-all duration-200"
          style={{
            background: "var(--white)",
            border: "1.5px solid var(--border)",
            height: 64,
            padding: "0 20px",
            gap: 12,
          }}
          onFocus={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 4px rgba(4,104,250,0.12)";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <current.InputIcon size={20} style={{ color: "var(--placeholder)", flexShrink: 0 }} />
          <input
            className="flex-1 outline-none bg-transparent"
            style={{ color: "var(--ink)", fontSize: 15 }}
            type={current.type}
            placeholder={current.placeholder}
            value={formData[current.field]}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={() => hamsterRef.current?.triggerNod()}
            min={current.field === "age" ? 5 : undefined}
            max={current.field === "age" ? 99 : undefined}
            autoComplete="off"
          />
        </div>

        {/* Buttons */}
        {step < 4 ? (
          <NextButton onClick={goNext} />
        ) : (
          <div className="flex" style={{ gap: 10 }}>
            <button
              onClick={goSkip}
              className="flex-1 font-semibold transition-all duration-150 active:scale-95"
              style={{
                borderRadius: 9999,
                height: 60,
                border: "2px solid var(--border)",
                color: "var(--text-slate)",
                background: "transparent",
                fontSize: 15,
              }}
            >
              ข้าม
            </button>
            <NextButton onClick={handleSubmit} label="ยืนยัน" />
          </div>
        )}
      </div>
    </div>
  );
}

function NextButton({ onClick, label = "ถัดไป" }: { onClick: () => void; label?: string }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="flex items-center justify-center gap-2 font-semibold text-white transition-all duration-150 relative"
      style={{
        borderRadius: 9999,
        height: 60,
        fontSize: 16,
        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
        boxShadow: hovered
          ? "0 16px 32px rgba(4,104,250,0.45)"
          : "0 12px 24px rgba(4,104,250,0.35)",
        transform: pressed ? "scale(0.96)" : hovered ? "scale(1.02)" : "scale(1)",
        flex: 1,
      }}
    >
      <span>{label}</span>
      <ArrowRight
        size={20}
        style={{
          transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          position: "absolute",
          right: 20,
        }}
      />
    </button>
  );
}

function PawSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="26" rx="10" ry="9" fill="white" />
      <ellipse cx="11" cy="18" rx="4.5" ry="5.5" fill="white" />
      <ellipse cx="29" cy="18" rx="4.5" ry="5.5" fill="white" />
      <ellipse cx="15.5" cy="12" rx="3.5" ry="4.5" fill="white" />
      <ellipse cx="24.5" cy="12" rx="3.5" ry="4.5" fill="white" />
    </svg>
  );
}

