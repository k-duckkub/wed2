"use client";
import { useState, useRef, useCallback } from "react";
import { User, Smile, Cake, Phone, Ticket, ArrowRight, PartyPopper, Check } from "lucide-react";
import { HamsterMascotHandle } from "./HamsterMascot";
import { RefObject } from "react";

interface FormData { fullName: string; nickname: string; age: string; phone: string; code: string; }
interface StepConfig {
  field: keyof FormData; infoTitle: string; infoSub: string;
  InputIcon: React.ElementType; placeholder: string; type: string; optional?: boolean;
  errorMsg: string;
}

const STEPS: StepConfig[] = [
  { field: "fullName", infoTitle: "ยินดีที่ได้รู้จักครับ", infoSub: "ขอทราบชื่อจริงของคุณหน่อยครับ", InputIcon: User, placeholder: "ตัวอย่าง สมชาย ใจดี", type: "text", errorMsg: "กรอกชื่อ-นามสกุลด้วยน้า" },
  { field: "nickname", infoTitle: "เรียกคุณว่าอะไรดีครับ", infoSub: "บอกชื่อเล่นให้แฮมหน่อยน้า", InputIcon: Smile, placeholder: "ตัวอย่าง ก้อง", type: "text", errorMsg: "ใส่ชื่อเล่นด้วยน้า" },
  { field: "age", infoTitle: "อายุเท่าไหร่แล้วครับ", infoSub: "จะได้จัดกิจกรรมให้เหมาะกับคุณ", InputIcon: Cake, placeholder: "ตัวอย่าง 15", type: "number", errorMsg: "ใส่อายุ 5–99 ปีด้วยน้า" },
  { field: "phone", infoTitle: "ขอเบอร์ติดต่อหน่อยครับ", infoSub: "ไว้ส่งรายละเอียดค่ายให้คุณ", InputIcon: Phone, placeholder: "08x-xxx-xxxx", type: "tel", errorMsg: "เบอร์ต้อง 9–10 หลักน้า" },
  { field: "code", infoTitle: "มีโค้ดส่วนลดไหมครับ", infoSub: "ถ้ามีใส่ได้เลย ไม่มีกดข้ามได้น้า", InputIcon: Ticket, placeholder: "ตัวอย่าง HAMSTER10", type: "text", optional: true, errorMsg: "" },
];

interface Props { hamsterRef: RefObject<HamsterMascotHandle | null>; }

export default function RightPanel({ hamsterRef }: Props) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState<FormData>({ fullName: "", nickname: "", age: "", phone: "", code: "" });
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const [animating, setAnimating] = useState(false);
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const animRef = useRef(false);

  const current = STEPS[step];

  const validate = (s: number, data: FormData) => {
    const cfg = STEPS[s]; const val = data[cfg.field];
    if (cfg.optional) return true;
    if (!val.trim()) return false;
    if (cfg.field === "age") { const n = parseInt(val); return n >= 5 && n <= 99; }
    if (cfg.field === "phone") return val.replace(/\D/g, "").length >= 9;
    if (cfg.field === "fullName") return val.trim().split(/\s+/).length >= 2;
    return val.trim().length > 0;
  };

  const transition = (newStep: number | "done", dir: "left" | "right") => {
    if (animRef.current) return;
    animRef.current = true;
    setSlideDir(dir);
    setAnimating(true);
    setTimeout(() => {
      if (newStep === "done") setDone(true);
      else setStep(newStep);
      setError("");
      setAnimating(false);
      animRef.current = false;
    }, 220);
  };

  const goNext = () => {
    if (!validate(step, formData)) {
      setError(current.errorMsg);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      return;
    }
    if (step === 4) { transition("done", "left"); hamsterRef.current?.triggerCelebrate?.(); }
    else transition(step + 1, "left");
  };
  const goBack = () => { if (step > 0) transition(step - 1, "right"); };
  const goSkip = () => { transition("done", "left"); hamsterRef.current?.triggerCelebrate?.(); };
  const goReset = () => { setDone(false); setStep(0); setFormData({ fullName: "", nickname: "", age: "", phone: "", code: "" }); };

  const handleChange = (val: string) => {
    setFormData(prev => ({ ...prev, [current.field]: val }));
    if (error) setError("");
    hamsterRef.current?.triggerNod();
  };

  const contentStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating ? `translateX(${slideDir === "left" ? -24 : 24}px)` : "translateX(0)",
    transition: "opacity 0.22s ease, transform 0.22s ease",
  };

  if (done) {
    return (
      <div style={panelStyle}>
        <div style={{ width: "100%" }}>
          {/* Success icon */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0165FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
              <Check size={28} color="white" strokeWidth={3} />
            </div>
            <h2 style={{ color: "#00215E", fontWeight: 700, fontSize: 30, margin: "0 0 6px" }}>ลงทะเบียนสำเร็จ!</h2>
            <p style={{ color: "#747A86", fontSize: 15, margin: 0 }}>ขอบคุณที่สนใจ Hamster Pop Camp 🎉</p>
          </div>

          {/* Info bubble */}
          <div style={{ background: "#E5EFFF", borderRadius: 20, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#0165FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <PartyPopper size={22} color="white" />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 15, color: "#00215E", margin: 0 }}>ลงทะเบียนสำเร็จแล้ว! 🎉</p>
              <p style={{ fontSize: 13, color: "#747A86", margin: "3px 0 0" }}>แฮมจะส่งรายละเอียดค่ายไปให้เร็ว ๆ นี้น้า</p>
            </div>
          </div>

          {/* Summary */}
          <div style={{ background: "#F4F8FE", borderRadius: 20, padding: "16px 20px", marginBottom: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "ชื่อจริง", value: formData.fullName },
              { label: "ชื่อเล่น", value: formData.nickname },
              { label: "อายุ", value: formData.age ? `${formData.age} ปี` : "-" },
              { label: "เบอร์โทร", value: formData.phone },
              ...(formData.code ? [{ label: "โค้ดส่วนลด", value: formData.code }] : []),
            ].map((r) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#747A86", fontSize: 14 }}>{r.label}</span>
                <span style={{ color: "#00215E", fontSize: 14, fontWeight: 600 }}>{r.value}</span>
              </div>
            ))}
          </div>

          <PrimaryButton onClick={goReset} label="เสร็จสิ้น" />
        </div>
      </div>
    );
  }

  return (
    <div style={panelStyle}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 style={{ color: "#00215E", fontWeight: 700, fontSize: 38, margin: "0 0 8px" }}>ลงทะเบียนเข้าร่วม</h2>
          <p style={{ color: "#747A86", fontSize: 17, margin: "0 0 20px" }}>กรอกข้อมูลเพื่อสิทธิ์เข้าร่วมค่าย</p>
          {/* Step dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
            {STEPS.map((_, i) => (
              <div key={i} style={{
                height: 8, borderRadius: 9999,
                width: i === step ? 24 : 8,
                background: i <= step ? "#0165FF" : "#E8ECF5",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>
        </div>

        {/* Animated content */}
        <div style={contentStyle}>
          {/* Chat bubble */}
          <div style={{ background: "#E5EFFF", borderRadius: 24, padding: "22px 24px", display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 54, height: 54, borderRadius: "50%", background: "#0165FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <PawSVG />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 18, color: "#00215E", margin: 0 }}>{current.infoTitle}</p>
              <p style={{ fontSize: 15, color: "#747A86", margin: "4px 0 0" }}>{current.infoSub}</p>
            </div>
          </div>

          {/* Input */}
          <InputBox
            cfg={current}
            value={formData[current.field]}
            onChange={handleChange}
            onKeyDown={() => hamsterRef.current?.triggerNod()}
            hasError={!!error}
          />
          {error && <p style={{ color: "#E53E3E", fontSize: 13, margin: "6px 0 0 4px" }}>{error}</p>}

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {step === 0 ? (
              <PrimaryButton onClick={goNext} label="ถัดไป" shaking={shaking} />
            ) : step < 4 ? (
              <>
                <GhostButton onClick={goBack} label="← ย้อนกลับ" flex={38} />
                <PrimaryButton onClick={goNext} label="ถัดไป" shaking={shaking} flex={62} />
              </>
            ) : (
              <>
                <GhostButton onClick={goSkip} label="ข้าม" flex={38} />
                <PrimaryButton onClick={goNext} label="ยืนยัน" shaking={shaking} flex={62} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const panelStyle: React.CSSProperties = {
  width: "55%", height: "100%",
  background: "white",
  display: "flex", flexDirection: "column",
  alignItems: "center", justifyContent: "center",
  padding: "48px 60px",
  boxSizing: "border-box",
};

function InputBox({ cfg, value, onChange, onKeyDown, hasError }: {
  cfg: StepConfig; value: string;
  onChange: (v: string) => void; onKeyDown: () => void; hasError: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      background: "#F9FAFB",
      border: `1.5px solid ${hasError ? "#FC8181" : focused ? "#0165FF" : "#E8ECF5"}`,
      borderRadius: 18, height: 76, padding: "0 24px",
      boxShadow: focused ? "0 0 0 4px rgba(1,101,255,0.12)" : hasError ? "0 0 0 3px rgba(252,129,129,0.2)" : "none",
      transition: "box-shadow 0.2s, border-color 0.2s",
    }}>
      <cfg.InputIcon size={20} style={{ color: "#A3A6AB", flexShrink: 0 }} />
      <input
        className="flex-1 outline-none bg-transparent"
        style={{ color: "#00215E", fontSize: 18, width: "100%" }}
        type={cfg.type}
        placeholder={cfg.placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        min={cfg.field === "age" ? 5 : undefined}
        max={cfg.field === "age" ? 99 : undefined}
        autoComplete="off"
      />
    </div>
  );
}

function PrimaryButton({ onClick, label, shaking, flex }: { onClick: () => void; label: string; shaking?: boolean; flex?: number }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
      style={{
        flex: flex ?? 1, height: 76, borderRadius: 9999,
        background: "linear-gradient(135deg, #0165FF 0%, #0052CC 100%)",
        color: "white", fontSize: 22, fontWeight: 600, border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8, position: "relative",
        boxShadow: hovered ? "0 16px 32px rgba(1,101,255,0.45)" : "0 8px 20px rgba(1,101,255,0.3)",
        transform: pressed ? "scale(0.96)" : hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.15s, box-shadow 0.15s",
        animation: shaking ? "shake 0.4s ease" : undefined,
      }}>
      <span>{label}</span>
      <ArrowRight size={18} style={{ position: "absolute", right: 20, transition: "transform 0.2s", transform: hovered ? "translateX(4px)" : "translateX(0)" }} />
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}`}</style>
    </button>
  );
}

function GhostButton({ onClick, label, flex }: { onClick: () => void; label: string; flex?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        flex: flex ?? 1, height: 76, borderRadius: 9999,
        background: hovered ? "rgba(1,101,255,0.06)" : "transparent",
        color: "#0165FF", fontSize: 15, fontWeight: 600,
        border: "1.5px solid #E8ECF5", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.15s",
      }}>
      {label}
    </button>
  );
}

function PawSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="26" rx="10" ry="9" fill="white" />
      <ellipse cx="11" cy="18" rx="4.5" ry="5.5" fill="white" />
      <ellipse cx="29" cy="18" rx="4.5" ry="5.5" fill="white" />
      <ellipse cx="15.5" cy="12" rx="3.5" ry="4.5" fill="white" />
      <ellipse cx="24.5" cy="12" rx="3.5" ry="4.5" fill="white" />
    </svg>
  );
}
