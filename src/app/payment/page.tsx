"use client";

import { useState } from "react";
import { rv, useReveal } from "@/lib/reveal";
import "./payment.css";

/**
 * ช่องรูปทั้งหมดอยู่ตรงนี้ที่เดียว — เหมือนหน้า thank you
 * ปล่อยเป็น null ไว้ก่อนได้ จะมีของสำรองที่วาดด้วย CSS/SVG แทน
 */
const PAY_IMG: Record<string, string | null> = {
  mascot: null, // ตัวละครแฮมสเตอร์นักผจญภัย
  ticket: null, // ภาพปกกิจกรรมในการ์ดตั๋ว
  qr: null, // ภาพ QR สำหรับสแกนจ่ายเงินจริง (ต้องมาจากธนาคาร/PromptPay จริง)
};

const EVENT = {
  pass: "ADVENTURE PASS",
  title: "SciGame Lab Camp",
  date: "14 - 16 ส.ค. 2567",
  time: "19:00 - 21:00 น.",
  place: "เรียนสดออนไลน์ ผ่าน Discord",
  price: "190",
};

const BANK = {
  name: "ธนาคารกรุงไทย",
  code: "KRUNGTHAI BANK",
  short: "KTB",
  acctName: "บริษัท เอ็กซ์ซิส (ประเทศไทย) จำกัด",
  acctNo: "015-1-56503-1",
};

const STEPS = [
  "โอนเงินแล้ว",
  "ถ่ายสลิป/หลักฐาน",
  "แจ้งชำระเงินให้ทีมงาน",
];

export default function PaymentPage() {
  useReveal();
  return (
    <div className="pay">
      <SecurityBar />
      <Hero />
      <PaySection />
      <BottomBar />
    </div>
  );
}

/* ─────────── ป้ายความปลอดภัย ─────────── */
function SecurityBar() {
  return (
    <div className="pay-secbar">
      <div {...rv("pay-sec", 0, "fade")}>
        <span className="lock" aria-hidden="true">
          <LockIcon />
        </span>
        <span>
          <b>การชำระเงินปลอดภัย 100%</b>
          <span>ข้อมูลของคุณจะถูกเข้ารหัส</span>
        </span>
      </div>
    </div>
  );
}

/* ─────────── ฮีโร่: ประตูมิติ + การ์ดตั๋ว ─────────── */
function Hero() {
  const src = PAY_IMG.mascot;
  const ticketImg = PAY_IMG.ticket;

  return (
    <section className="pay-hero">
      {/* การ์ดตั๋วต้องเป็นพี่น้องกับ .pay-scene ไม่ใช่ลูก — .pay-scene มี
          overflow:hidden ไว้ตัดขอบซีนให้โค้งมน ถ้าตั๋วอยู่ข้างในแล้วดัน
          ขึ้นด้วย margin ติดลบ ส่วนบนของการ์ด (ป้าย + หัวข้อ) จะโดนตัดหาย
          ไปเลยที่ความกว้างหน้าจอปานกลาง (เจอบั๊กนี้จริงตอนทดสอบ) */}
      <div {...rv("pay-scene", 70)}>
        <Portal />

        <div className="pay-mascot">
          <span className="face">
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt="" />
            ) : (
              <span aria-hidden="true">🐹</span>
            )}
          </span>
          <span className="pack" aria-hidden="true" />
        </div>
      </div>

      <div {...rv("pay-ticket", 260)}>
        <span className="pay-thumb">
          {ticketImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={ticketImg} alt="" />
          ) : (
            <span aria-hidden="true">🧪</span>
          )}
        </span>

        <div>
          <p className="pay-pass">{EVENT.pass}</p>
          <p className="pay-title">{EVENT.title}</p>
          <ul className="pay-meta">
            <li>
              <CalendarIcon /> {EVENT.date}
            </li>
            <li>
              <ClockIcon /> {EVENT.time}
            </li>
            <li>
              <ScreenIcon /> {EVENT.place}
            </li>
          </ul>
        </div>

        <div className="pay-price">
          <p className="lb">ค่าเข้าร่วมการผจญภัย</p>
          <b>฿{EVENT.price}</b>
        </div>
      </div>
    </section>
  );
}

/** ประตูมิติเรืองแสง + ซุ้มหิน + ประกายลอย — วาดด้วย SVG ล้วน ไม่พึ่งไฟล์ภาพ */
function Portal() {
  return (
    <svg className="portal" viewBox="0 0 800 460" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="portalGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#9db8ff" stopOpacity=".9" />
          <stop offset="45%" stopColor="#6d8dff" stopOpacity=".5" />
          <stop offset="100%" stopColor="#6d8dff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pillar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2340" />
          <stop offset="100%" stopColor="#0a0d18" />
        </linearGradient>
      </defs>

      {/* พื้นซุ้มหินสองข้าง */}
      <rect x="0" y="60" width="90" height="400" fill="url(#pillar)" />
      <rect x="710" y="60" width="90" height="400" fill="url(#pillar)" />

      {/* วงแสงประตู */}
      <circle cx="230" cy="220" r="160" fill="url(#portalGlow)" />
      <circle cx="230" cy="220" r="150" fill="none" stroke="#b9c8ff" strokeOpacity=".5" strokeWidth="1.5" />
      <circle cx="230" cy="220" r="118" fill="none" stroke="#dfe6ff" strokeOpacity=".35" strokeWidth="1" />

      {/* ประกายลอย */}
      {[
        [140, 90], [340, 130], [420, 260], [120, 320], [300, 60], [500, 340], [60, 200],
      ].map(([x, y], i) => (
        <circle key={i} className="spark" cx={x} cy={y} r={i % 2 ? 2 : 1.4} fill="#eef2ff">
          <animate attributeName="opacity" values="0;1;0" dur={`${2.4 + i * 0.4}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ─────────── ส่วนชำระเงิน ─────────── */
function PaySection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BANK.acctNo.replace(/-/g, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // เบราว์เซอร์บางตัว/บางสิทธิ์ไม่ให้เขียนคลิปบอร์ด ปล่อยให้พี่คัดลอกเลขด้วยมือแทน
    }
  };

  return (
    <section className="pay-section">
      <div className="pay-wrap">
        <div className="pay-h2">
          <span className="chest" aria-hidden="true">
            <ChestIcon />
          </span>
          <b {...rv("", 0, "fade")}>เตรียมเสบียงก่อนออกเดินทาง</b>
        </div>
        <p {...rv("pay-h2sub", 60, "fade")}>
          ชำระค่าเข้าร่วมการผจญภัยจำนวน <b>฿{EVENT.price}</b> — โอนเงินจากธนาคารทุกแอปได้เลย
        </p>

        <div className="pay-grid">
          <div {...rv("pay-card", 130)}>
            <div className="pay-bank-hd">
              <span className="logo" aria-hidden="true">{BANK.short}</span>
              <span>
                <b>{BANK.name}</b>
                <span>{BANK.code}</span>
              </span>
            </div>

            <div className="pay-row">
              <p className="lb">ชื่อบัญชี</p>
              <p style={{ margin: 0, fontSize: 14.5, fontWeight: 700, color: "var(--pay-ink)" }}>
                {BANK.acctName}
              </p>
            </div>

            <div className="pay-row">
              <p className="lb">เลขที่บัญชี</p>
              <div className="val">
                <p className="pay-acct">{BANK.acctNo}</p>
                <button className={`pay-copy${copied ? " done" : ""}`} type="button" onClick={copy}>
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  {copied ? "คัดลอกแล้ว" : "คัดลอกเลขบัญชี"}
                </button>
              </div>
            </div>
          </div>

          <div className="pay-or" aria-hidden="true">หรือ</div>

          <div {...rv("pay-card", 200)}>
            <div className="pay-qr-card">
              <h3>สแกนเพื่อชำระเงิน</h3>
              <div className="pay-qr">
                {PAY_IMG.qr ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={PAY_IMG.qr} alt={`QR ชำระเงิน ${BANK.acctName}`} />
                ) : (
                  <>
                    <QrPlaceholder />
                    <span className="badge" aria-hidden="true">🐹</span>
                  </>
                )}
              </div>
              <p className="pay-qr-cap">สแกน QR ผ่านแอปธนาคาร</p>
            </div>

            <ol className="pay-steps">
              {STEPS.map((s, i) => (
                <li className="pay-step" key={s}>
                  <i aria-hidden="true">{i + 1}</i>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ลายกริดแทน QR จริง — ใส่รูปจริงที่ PAY_IMG.qr เมื่อมีจากธนาคาร */
function QrPlaceholder() {
  const cells: number[] = [];
  // สุ่มแบบ deterministic (ไม่ใช้ Math.random) กัน hydration mismatch
  for (let i = 0; i < 100; i++) cells.push(((i * 37 + (i % 7) * 13) % 100) / 100);
  return (
    <svg className="ph" viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
      {cells.map((v, i) => {
        const x = (i % 10) * 10;
        const y = Math.floor(i / 10) * 10;
        const corner =
          (x < 30 && y < 30) || (x >= 70 && y < 30) || (x < 30 && y >= 70);
        if (corner) return null;
        return v > 0.52 ? <rect key={i} x={x + 1} y={y + 1} width="8" height="8" fill="currentColor" /> : null;
      })}
      {[[3, 3], [73, 3], [3, 73]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x={x + 8} y={y + 8} width="8" height="8" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

/* ─────────── แถบล่าง LINE ─────────── */
function BottomBar() {
  return (
    <div className="pay-bar">
      <div className="pay-bar-inner">
        <a className="pay-notify" href="#" onClick={(e) => e.preventDefault()}>
          <span className="ic" aria-hidden="true">
            <LineIcon />
          </span>
          <span className="tx">
            <b>แจ้งชำระเงิน / ส่งสลิปให้ทีมงาน</b>
            <span>คลิกเพื่อแจ้งชำระเงินผ่าน LINE OA</span>
          </span>
        </a>
        <a className="pay-friend" href="#" onClick={(e) => e.preventDefault()}>
          <LineIcon /> เพิ่มเพื่อน
        </a>
      </div>
    </div>
  );
}

/* ─────────── ไอคอน ─────────── */
function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2.4" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="15.4" r="1.5" fill="currentColor" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2.4" stroke="currentColor" strokeWidth="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ScreenIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="12.5" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 20.5h7M12 17v3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ChestIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 10.5A2.5 2.5 0 0 1 6 8h12a2.5 2.5 0 0 1 2.5 2.5V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3.5 13h17M10.5 13v2a1.5 1.5 0 0 0 3 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 8c0-2.5 2-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="8.5" y="8.5" width="12" height="12" rx="2.2" stroke="currentColor" strokeWidth="2" />
      <path d="M15.5 8.5V6a2 2 0 0 0-2-2H5.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.48 3 2 6.7 2 11.2c0 4 3.5 7.4 8.3 8.1.3.06.7.2.8.44.1.24.06.6.03.85l-.14.83c-.04.24-.2.95.83.52 1.03-.44 5.55-3.27 7.58-5.6C20.94 14.5 22 12.94 22 11.2 22 6.7 17.52 3 12 3z" />
    </svg>
  );
}
