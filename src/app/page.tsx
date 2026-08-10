"use client";

import { useEffect, useState } from "react";

/**
 * props สำหรับของที่ต้องเผยตัวตอนเลื่อนถึง
 * cls   คลาสเดิมของ element
 * delay หน่วงกี่ ms หลังจากตัวแรกของกลุ่มเริ่ม
 * kind  "" จางพร้อมลอยขึ้น | "fade" จางเฉย ๆ | "draw" ลากเส้น | "wipe" กวาดซ้ายไปขวา
 */
function rv(
  cls = "",
  delay = 0,
  kind: "" | "fade" | "draw" | "wipe" = "",
  extra?: React.CSSProperties,
) {
  const k = kind ? ` rv-${kind}` : "";
  return {
    className: `${cls}${cls ? " " : ""}rv${k}`.trim(),
    style: { transitionDelay: `${delay}ms`, ...extra },
  };
}

/**
 * เผยตัวทีละชิ้นตอนเลื่อนถึง แล้วเลิกเฝ้า — เลื่อนกลับขึ้นไปไม่เล่นซ้ำ
 * ตั้ง rootMargin ล่าง -12% เพื่อให้เริ่มตอนโผล่พ้นขอบล่างมานิดหนึ่ง
 * ไม่ใช้ threshold เพราะบล็อกที่สูงกว่าจอจะไม่มีวันถึงเกณฑ์
 */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ═════════════════════════════════════════════
   HamsterHub — หน้าขอบคุณ + คอมมูนิตี้
   ═════════════════════════════════════════════ */

/**
 * ช่องรูปทั้งหมดอยู่ตรงนี้ที่เดียว
 * ใส่ path เช่น "/img/main.jpg" แล้วรูปจะขึ้นแทนช่องประ ๆ ทันที
 * ปล่อยเป็น null ไว้ก่อนก็ได้ ไม่พัง
 */
const IMG: Record<string, string | null> = {
  logo: null, //  80×80   โลโก้ในแถบเมนู
  main: null, // 320×320  รูปตัวหลักกลางกลุ่ม
  a: null, //    150×150
  b: null, //    130×130
  c: null, //    120×120
  d: null, //    140×140
  e: null, //    110×110
};

const ORDER = { id: "HH-0428", depart: "14 สิงหาคม" };

const MENU = ["หน้าแรก", "คอร์สเรียน", "เวิร์กช็อป", "คอมมูนิตี้", "โปรเจคเด่น"];

const STATS = [
  { n: "12,000+", l: "เพื่อนร่วมทาง" },
  { n: "200+", l: "คอร์สและเวิร์กช็อป" },
  { n: "1,500+", l: "โปรเจกต์จากน้องๆ" },
  { n: "99%", l: "ความพึงพอใจ" },
];

const PERKS = [
  { icon: "trophy", label: "CHALLENGE", text: "ส่งผลงานประจำเดือน มีโค้ชคอมเมนต์ให้ทุกชิ้น", dark: false },
  { icon: "cap", label: "WORKSHOP", text: "เวิร์กช็อปสดจากผู้เชี่ยวชาญ ทุกเสาร์ 10:00 น.", dark: false },
  { icon: "chat", label: "COMMUNITY", text: "แลกเปลี่ยนผลงานและไอเดียกับเพื่อนในรุ่น", dark: true },
  { icon: "gift", label: "SPECIAL EVENT", text: "กิจกรรมและสิทธิพิเศษสำหรับสมาชิกเท่านั้น", dark: false },
] as const;

/** อีโมจิที่พุ่งออกมาตอนกดปุ่มเข้าคอมมูนิตี้ */
const CONFETTI = ["🐹", "✨", "🎉", "🧡", "⭐", "🎈"];

const FAQ = [
  {
    q: "HamsterHub คืออะไร?",
    a: "คอมมูนิตี้การเรียนรู้สำหรับน้องๆ ที่อยากสร้างเกม เว็บ และโปรเจกต์ของตัวเอง มีทั้งคอร์ส เวิร์กช็อปสด และเพื่อนร่วมทางอีก 12,000 คน",
  },
  {
    q: "สมัครแล้วต้องทำอะไรต่อ?",
    a: "เข้าคอมมูนิตี้ไปทักทายเพื่อนร่วมรุ่นก่อนได้เลย จากนั้นรอทีมงานส่งลิงก์ห้องเรียนและตารางรอบแรกไปให้ทางอีเมล ไม่ต้องเตรียมอะไรเพิ่ม",
  },
  {
    q: "เรียนไม่ทันย้อนดูได้ไหม?",
    a: "ได้ทุกคลาส เวิร์กช็อปสดทุกครั้งมีคลิปย้อนหลังให้ดูซ้ำได้ไม่จำกัด ไม่มีวันหมดอายุ ติดตรงไหนถามในคอมมูนิตี้ได้ตลอด",
  },
  {
    q: "ผู้ปกครองติดตามผลได้อย่างไร?",
    a: "เราส่งสรุปความคืบหน้าและผลงานของน้องให้ทางอีเมลทุกเดือน และเปิดให้เข้ามาดูผลงานในคอมมูนิตี้ได้ตลอดเวลา",
  },
];

/** อวตารในกลุ่ม — สีวงพาสเทลไว้ก่อน ใส่รูปจริงทีหลังได้ที่ IMG */
const VOICES = [
  { q: "ลูกกลับมาเล่าทุกวันว่าวันนี้ทำอะไรได้เพิ่ม ไม่เคยเห็นตื่นเต้นกับการเรียนขนาดนี้", name: "คุณแม่ของน้องเม่น", role: "ผู้ปกครอง", av: "👩", bg: "#ffe0d2", stars: 5 },
  { q: "เข้ามาแบบไม่รู้อะไรเลย ตอนนี้ทำเกมส่งเพื่อนเล่นได้แล้ว พี่ ๆ ใจดีมาก ถามอะไรก็ตอบ", name: "น้องข้าวปั้น", role: "ผู้เรียน อายุ 12", av: "🧒", bg: "#d9ecff", stars: 5 },
  { q: "ชอบตรงที่ไม่มีใครหัวเราะเวลาเราทำพลาด เลยกล้าลองอะไรใหม่ ๆ ตลอด", name: "น้องมีมี่", role: "ผู้เรียน อายุ 14", av: "👧", bg: "#e2f5e0", stars: 4 },
];

/** 1. ข้อมูลกิจกรรม — สิ่งที่จะเกิดขึ้นหลังโอนเงิน เรียงตามเวลาจริง */
const AGENDA = [
  {
    when: "วันนี้",
    tag: "ทำได้เลย",
    h: "เข้าคอมมูนิตี้ของรุ่น",
    d: "กดปุ่มเข้าคอมมูนิตี้ด้านบน แล้วแนะนำตัวในห้องต้อนรับ จะได้รู้จักเพื่อนร่วมรุ่นก่อนวันเรียนจริง",
    now: true,
  },
  {
    when: "ภายใน 24 ชม.",
    tag: "รอรับอีเมล",
    h: "อีเมลยืนยันและตารางเรียน",
    d: "ทีมงานส่งลิงก์ห้องเรียน ตารางรอบแรก และรายการอุปกรณ์ที่ต้องเตรียมไปให้ทางอีเมลที่ใช้สมัคร",
    now: false,
  },
  {
    when: "1 วันก่อนเริ่ม",
    tag: "ไม่บังคับ",
    h: "รอบซ้อมระบบ",
    d: "เปิดห้องให้เข้ามาลองไมค์ ลองกล้อง และติดตั้งโปรแกรมล่วงหน้า วันจริงจะได้ไม่ต้องเสียเวลาแก้ปัญหา",
    now: false,
  },
  {
    when: ORDER.depart,
    tag: "วันออกเดินทาง",
    h: "คลาสแรก 10:00 น.",
    d: "เริ่มจากทำความรู้จักกัน แล้วลงมือสร้างชิ้นงานแรกให้เสร็จภายในวันเดียว ไม่มีการบรรยายยาว",
    now: false,
  },
];

/** 2. คอร์สอื่น ๆ ที่น่าสนใจ — ราคายังไม่ใส่ เพราะยังไม่ได้ยืนยันจากทีม */
const COURSES = [
  {
    k: "c1",
    tag: "GAME",
    h: "Roblox Creator Camp",
    d: "สร้างเกมของตัวเองบน Roblox Studio ตั้งแต่วางแมพ ใส่ระบบ ไปจนถึงเขียนสคริปต์ Lua",
    meta: ["อายุ 10–15 ปี", "8 สัปดาห์", "ออนไลน์สด"],
    bg: "#ffe6d2",
    face: "🎮",
  },
  {
    k: "c2",
    tag: "CODE",
    h: "Unity FPS ฉบับเริ่มต้น",
    d: "ทำเกมยิงมุมมองบุคคลที่หนึ่งด้วย Unity และ C# จบคอร์สได้เกมที่เล่นได้จริงหนึ่งเกม",
    meta: ["อายุ 12–18 ปี", "10 สัปดาห์", "ออนไลน์สด"],
    bg: "#dce8ff",
    face: "🕹️",
  },
  {
    k: "c3",
    tag: "AI",
    h: "Python สำหรับนักสร้าง",
    d: "เขียน Python จากศูนย์ แล้วต่อยอดไปทำบอทและงาน AI เล็ก ๆ ที่ใช้ได้จริงในชีวิตประจำวัน",
    meta: ["อายุ 12–18 ปี", "8 สัปดาห์", "ออนไลน์สด"],
    bg: "#e0f3e4",
    face: "🐍",
  },
];

/** 3. เป้าหมายในอนาคต — standup คือข้อแรกตามที่ทีมอยากทำ */
const ROADMAP = [
  {
    s: "กำลังทำอยู่",
    h: "Daily Standup ทุกเช้า",
    d: "ห้องสั้น 15 นาทีก่อนเริ่มวัน ให้น้องเล่าว่าเมื่อวานทำอะไร วันนี้จะทำอะไร และติดตรงไหนอยู่ เป็นวิธีทำงานแบบทีมจริงที่เด็กเริ่มได้ตั้งแต่วันนี้",
    on: true,
  },
  {
    s: "เร็ว ๆ นี้",
    h: "กระดานผลงานของรุ่น",
    d: "รวมโปรเจกต์ของทุกคนไว้ที่เดียว ย้อนดูได้ว่าแต่ละคนพัฒนามาถึงไหนแล้ว",
    on: false,
  },
  {
    s: "กำลังออกแบบ",
    h: "ระบบจับคู่พี่โค้ช",
    d: "จับคู่น้องกับพี่โค้ชที่สนใจเรื่องเดียวกัน ได้คุยกันสม่ำเสมอตลอดคอร์ส ไม่ใช่แค่ตอนมีคำถาม",
    on: false,
  },
  {
    s: "ปีหน้า",
    h: "เวทีโชว์ผลงานประจำปี",
    d: "พาผลงานของน้องออกไปโชว์นอกคอมมูนิตี้ ทั้งงานเกมและเวทีประกวดระดับประเทศ",
    on: false,
  },
];

const FOOT = [
  { h: "เกี่ยวกับ", items: ["เรื่องราวของเรา", "ทีมโค้ช", "ข่าวสาร", "ร่วมงานกับเรา"] },
  { h: "เรียนรู้", items: ["คอร์สทั้งหมด", "เวิร์กช็อป", "Challenge", "โปรเจกต์เด่น"] },
  { h: "ช่วยเหลือ", items: ["คำถามที่พบบ่อย", "ติดต่อเรา", "สำหรับผู้ปกครอง", "เงื่อนไขการใช้งาน"] },
];

export default function ThankYouPage() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Agenda />
        <Perks />
        <Courses />
        <Voices />
        <Roadmap />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

/* ─────────── แถบเมนู ─────────── */
function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a {...rv("brand", 0, "fade")} href="#top">
          <Slot k="logo" size={44} face="🐹" bg="var(--brand-soft)" plain />
          <b>HamsterHub</b>
        </a>

        <nav className="menu">
          {MENU.map((m, i) => (
            <a key={m} {...rv("swap", 540 + i * 55, "fade")} href="#top">
              {/* ตัวสำรองสีส้มเลื่อนเข้ามาจากขอบที่เมาส์เข้า — Direction Hover */}
              <span className="swap-in">
                <span>{m}</span>
                <span aria-hidden="true">{m}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="navbtns">
          <a {...rv("navlink", 820, "fade")} href="#top">
            เข้าสู่ระบบ
          </a>
          <a {...rv("btn btn-sm", 880, "fade")} href="#top">
            สมัครสมาชิก
          </a>
        </div>
      </div>
    </header>
  );
}

/**
 * อีโมจิพุ่งออกจากปุ่มตอนกด แล้วตกลงตามแรงโน้มถ่วง
 * ยืมไอเดียมาจาก Emoji Burst ของ Originkit แต่เขียนเองด้วย CSS ล้วน
 * ไม่ต้องพึ่งไลบรารีอนิเมชันใด ๆ
 */
function burst(e: React.MouseEvent<HTMLElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const r = e.currentTarget.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;

  const layer = document.createElement("div");
  layer.className = "burst-layer";
  document.body.appendChild(layer);

  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.textContent = CONFETTI[i % CONFETTI.length];
    // กระจายขึ้นบนเป็นรูปพัด แล้วปล่อยให้ตกเอง
    const ang = -Math.PI / 2 + (Math.random() - 0.5) * 2.1;
    const dist = 90 + Math.random() * 130;
    s.style.left = `${cx}px`;
    s.style.top = `${cy}px`;
    s.style.setProperty("--dx", `${Math.cos(ang) * dist}px`);
    s.style.setProperty("--dy", `${Math.sin(ang) * dist}px`);
    s.style.setProperty("--rot", `${(Math.random() - 0.5) * 540}deg`);
    s.style.setProperty("--sz", `${14 + Math.random() * 12}px`);
    s.style.animationDelay = `${Math.random() * 90}ms`;
    layer.appendChild(s);
  }

  window.setTimeout(() => layer.remove(), 1800);
}

/* ─────────── ฮีโร่ ─────────── */
function Hero() {
  const receipt = () => {
    const txt = [
      "HAMSTER HUB — ใบเสร็จรับเงิน",
      "==============================",
      `เลขคำสั่งซื้อ : #${ORDER.id}`,
      `สถานะ         : ชำระเงินสำเร็จ`,
      `ออกเดินทาง    : ${ORDER.depart}`,
      "",
      "ขอบคุณที่ขึ้นขบวนเดียวกับพวกเรา",
      "hamsterhub.co",
    ].join("\n");
    const blob = new Blob(["﻿" + txt], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt-${ORDER.id}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="wrap" id="top" style={{ paddingTop: 26 }}>
      <div className="hero">
        <Track />

        <div {...rv("finder", 700)}>
          <div className="fcell">
            <p className="k">
              คอร์ส <Caret />
            </p>
            <p className="v">เลือกสิ่งที่อยากสร้าง</p>
          </div>
          <div className="fcell">
            <p className="k">
              รอบเรียน <Caret />
            </p>
            <p className="v">เพิ่มวันที่</p>
          </div>
          <button className="fbtn" type="button" aria-label="ค้นหา">
            <Search />
          </button>
        </div>

        <div className="hero-grid">
          <div>
            <span {...rv("status shiny", 0)}>
              <i /> ชำระเงินสำเร็จ · #{ORDER.id}
            </span>

            <h1 {...rv("h1", 70, "", { marginTop: 26 })}>
              ขอบคุณที่ขึ้นขบวน
              <br />
              เดียวกับพวกเรา
              <br />
              <span className="hdr-wrap">
                <span className="on">แล้วเจอกันที่สถานีแรก</span>
                {/* เส้นใต้มาทีหลังตัวหนังสือ ~0.6 วิ ตามคลิป */}
                <Swoosh delay={680} />
              </span>
            </h1>

            <p {...rv("lead", 150, "", { marginTop: 22, maxWidth: 520 })}>
              ที่นั่งของน้องเม่นถูกจองแล้ว รถไฟออกเดินทาง {ORDER.depart} ระหว่างนี้
              ไปทักทายเพื่อนร่วมรุ่นในคอมมูนิตี้ก่อนได้เลย
            </p>

            <div
              {...rv("", 220, "", {
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginTop: 32,
              })}
            >
              <a className="btn btn-pop" href="#top" onClick={burst}>
                เข้าคอมมูนิตี้ <span aria-hidden="true">→</span>
              </a>
              <button className="btn-w" type="button" onClick={receipt}>
                ดาวน์โหลดใบเสร็จ
              </button>
            </div>
          </div>

          <Cluster />
        </div>
      </div>
    </section>
  );
}

/** เส้นทางประ ๆ ตกแต่งมุมบนซ้ายของฮีโร่ */
function Track() {
  return (
    <svg
      {...rv("track", 980, "wipe")}
      width="300" height="74" viewBox="0 0 300 74" fill="none" aria-hidden="true"
    >
      <path
        d="M6 62 C 62 62 66 14 136 14 S 214 52 294 22"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeDasharray="2 11"
        strokeLinecap="round"
        opacity=".47"
      />
      <circle cx="136" cy="14" r="7" fill="var(--brand)" />
    </svg>
  );
}

/** กลุ่มอวตาร พร้อมบับเบิลคำทักทายและชิปโซเชียล */
function Cluster() {
  return (
    <div className="cluster">
      <span {...rv("panel", 240, "", { left: "26%", top: "26%", width: "52%", height: "44%" })} />
      <Squiggle delay={1080} />

      {/* คนกลางมาก่อน แล้วค่อยไล่ออกไปรอบ ๆ ทีละ 70ms */}
      <Slot k="main" size={132} bg="#cfe4ff" face="🧑" style={{ left: "34%", top: "31%" }} main delay={280} />
      <Slot k="a" size={80} bg="#dff2e3" face="🧒" style={{ left: "4%", top: "13%" }} delay={350} />
      <Slot k="c" size={74} bg="#e6e0ff" face="🧑‍🦱" style={{ right: "4%", top: "17%" }} delay={420} />
      <Slot k="b" size={86} bg="#ffdfe0" face="👧" style={{ left: "2%", top: "58%" }} delay={490} />
      <Slot k="d" size={80} bg="#ffe6cf" face="👦" style={{ right: "0%", top: "47%" }} delay={560} />
      <Slot k="e" size={66} bg="#d9f0f5" face="🧒" style={{ left: "44%", bottom: "2%" }} delay={630} />

      <span {...rv("bubble", 720, "fade", { left: "26%", top: "16%" })}>
        ยินดีต้อนรับ!
      </span>
      <span {...rv("bubble b-brand tail-r", 800, "fade", { right: "2%", top: "36%", animationDelay: "1.3s" })}>
        มาเล่นด้วยกัน!
      </span>
      <span {...rv("bubble tail-r", 880, "fade", { right: "20%", bottom: "14%", animationDelay: "2.2s" })}>
        สวัสดี~
      </span>

      <span {...rv("soc-chip", 940, "fade", { left: "6%", top: "39%", animationDelay: ".7s" })}>
        <IgIcon />
      </span>
      <span {...rv("soc-chip", 1000, "fade", { right: "24%", bottom: "1%", animationDelay: "1.9s" })}>
        <TtIcon />
      </span>
      <span {...rv("soc-chip", 1060, "fade", { left: "62%", top: "19%", animationDelay: "2.7s" })}>
        <FbIcon />
      </span>
    </div>
  );
}

/** ช่องรูป — มีไฟล์ก็แสดงรูป ไม่มีก็เป็นวงสีพาสเทลพร้อมหน้าการ์ตูน */
function Slot({
  k,
  size,
  bg,
  face,
  style,
  main,
  plain,
  delay,
}: {
  k: string;
  size: number;
  bg?: string;
  face?: string;
  style?: React.CSSProperties;
  main?: boolean;
  plain?: boolean;
  /** ใส่เมื่ออยากให้ช่องนี้เผยตัวตอนเลื่อนถึง ไม่ใส่ก็แสดงเลย (เช่นโลโก้ในเมนู) */
  delay?: number;
}) {
  const src = IMG[k];
  const base = `slot${main ? " slot-main" : ""}`;
  const look: React.CSSProperties = {
    width: size,
    height: size,
    background: bg ?? "var(--brand-soft)",
    fontSize: Math.round(size * 0.42),
    ...(plain ? { position: "relative", boxShadow: "none" } : {}),
    ...style,
  };
  const props =
    delay === undefined
      ? { className: base, style: look }
      : rv(base, delay, "", look);

  return (
    <span {...props}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" />
      ) : (
        <span aria-hidden="true">{face ?? "🐹"}</span>
      )}
    </span>
  );
}

/* ─────────── ตัวเลข ─────────── */
function Stats() {
  return (
    <section className="statband">
      <div className="wrap">
        <div className="stats">
          {STATS.map((s, i) => (
            <div {...rv("stat", i * 90)} key={s.l}>
              <b className="num">{s.n}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── 1. ข้อมูลกิจกรรม — ตารางเดินรถ ─────────── */
function Agenda() {
  return (
    <section className="wrap" style={{ paddingTop: 82 }}>
      <div className="hdr-wrap">
        <h2 {...rv("h2", 0)}>ตารางเดินรถของน้อง</h2>
      </div>
      <p {...rv("sub", 90, "", { marginTop: 12, marginBottom: 38, maxWidth: 560 })}>
        ทุกอย่างหลังจากนี้เรียงไว้ให้แล้ว ไม่ต้องเดาว่าต้องทำอะไรต่อ
      </p>

      <ol className="rail-list">
        {AGENDA.map((a, i) => (
          <li {...rv(`stopitem${a.now ? " now" : ""}`, i * 110)} key={a.h}>
            <span className="dotmark" aria-hidden="true" />
            <div className="stopbody">
              <div className="stophead">
                <b className="when">{a.when}</b>
                <span className={`tag${a.now ? " tag-on" : ""}`}>{a.tag}</span>
              </div>
              <h3 className="h3" style={{ marginTop: 8 }}>
                {a.h}
              </h3>
              <p className="sub" style={{ marginTop: 7 }}>
                {a.d}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ─────────── 2. คอร์สอื่น ๆ ที่น่าสนใจ ─────────── */
function Courses() {
  return (
    <section className="wrap" style={{ paddingTop: 96 }}>
      <div className="sec-head">
        <div>
          <h2 {...rv("h2", 0)}>
            ขึ้นรถขบวนถัดไป
            <br />
            <span className="on">ด้วยกันไหม</span>
          </h2>
          <p {...rv("sub", 90, "", { marginTop: 14, maxWidth: 470 })}>
            สมาชิกที่จองที่นั่งแล้วได้สิทธิ์เลือกรอบก่อนเปิดขายทั่วไป
            ทักทีมงานในคอมมูนิตี้เพื่อขอรายละเอียดได้เลย
          </p>
        </div>
        <a {...rv("btn-w", 170)} href="#top">
          ดูคอร์สทั้งหมด <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="ccards">
        {COURSES.map((c, i) => (
          <article {...rv("ccard", 220 + i * 110)} key={c.h}>
            <div className="cthumb" style={{ background: c.bg }}>
              {IMG[c.k] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={IMG[c.k] as string} alt="" />
              ) : (
                <span aria-hidden="true">{c.face}</span>
              )}
              <span className="ctag">{c.tag}</span>
            </div>
            <h3 className="h3" style={{ marginTop: 20 }}>
              {c.h}
            </h3>
            <p className="sub" style={{ marginTop: 9 }}>
              {c.d}
            </p>
            <ul className="cmeta">
              {c.meta.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────── 3. เป้าหมายในอนาคต ─────────── */
function Roadmap() {
  return (
    <section className="roadband">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <h2 {...rv("h2", 0, "", { color: "#fff" })}>
              สถานีต่อไปที่เรากำลังสร้าง
            </h2>
            <p
              {...rv("sub", 90, "", {
                marginTop: 14,
                maxWidth: 520,
                color: "rgba(255,255,255,.78)",
              })}
            >
              เปิดให้ดูตรง ๆ ว่ากำลังทำอะไรอยู่ อยากได้อันไหนก่อน บอกเราได้ในคอมมูนิตี้
            </p>
          </div>
        </div>

        <div className="rcards">
          {ROADMAP.map((r, i) => (
            <article {...rv(`rcard${r.on ? " live" : ""}`, 160 + i * 90)} key={r.h}>
              <span className={`rstat${r.on ? " on" : ""}`}>
                {r.on && <i aria-hidden="true" />}
                {r.s}
              </span>
              <h3 className="h3" style={{ marginTop: 18, color: "#fff" }}>
                {r.h}
              </h3>
              <p style={{ marginTop: 10 }}>{r.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── สิ่งที่รออยู่บนเส้นทาง ─────────── */
function Perks() {
  return (
    <section className="wrap" style={{ paddingTop: 76 }}>
      <h2 {...rv("h2", 0)}>สิ่งที่รออยู่บนเส้นทาง</h2>
      <p {...rv("sub", 90, "", { marginTop: 12, marginBottom: 34 })}>
        สิทธิ์ทั้งหมดเปิดให้น้องแล้วตั้งแต่วันนี้
      </p>

      <div className="cards">
        {PERKS.map((p, i) => {
          const Icon = PERK_ICON[p.icon];
          return (
          <article {...rv(`bcard${p.dark ? " dark" : ""}`, 160 + i * 90)} key={p.label}>
            <div className="ico" aria-hidden="true">
              <Icon />
            </div>
            <p className="lb">{p.label}</p>
            <p>{p.text}</p>
          </article>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────── เสียงจากน้อง ๆ ─────────── */
function Voices() {
  return (
    <section className="wrap" style={{ paddingTop: 96 }}>
      <div className="hdr-wrap">
        <h2 {...rv("h2", 0)}>
          เสียงจากน้อง ๆ
          <br />
          และผู้ปกครอง
        </h2>
        <Sparks delay={620} />
      </div>

      <div className="quotes">
        {VOICES.map((v, i) => (
          <figure {...rv("quote", 140 + i * 110, "", { margin: 0 })} key={v.name}>
            <div className="mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote style={{ margin: 0 }}>
              <p>{v.q}</p>
            </blockquote>
            <figcaption className="who">
              <span className="av" style={{ background: v.bg }} aria-hidden="true">
                {v.av}
              </span>
              <span>
                <b>{v.name}</b>
                <span>{v.role}</span>
                <span className="stars" aria-label={`ให้ ${v.stars} จาก 5 ดาว`}>
                  {"★".repeat(v.stars)}
                  <span style={{ color: "#e4ded7" }}>{"★".repeat(5 - v.stars)}</span>
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ─────────── คำถาม + รับอีเมล ─────────── */
function Faq() {
  const [open, setOpen] = useState(0);
  const [mail, setMail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mail.trim()) return;
    setSent(true);
    setMail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="wrap" style={{ paddingTop: 96 }}>
      <div className="faqgrid">
        <div>
          <h2 {...rv("h2", 0)}>
            มีคำถามอยากถาม
            <br />
            เราตอบให้ทุกข้อ
          </h2>
          <p {...rv("sub", 90, "", { marginTop: 16, marginBottom: 28, maxWidth: 400 })}>
            หรือฝากอีเมลไว้ ทีมงานจะส่งข่าวสารและกิจกรรมดีๆ ไปให้
          </p>

          <form {...rv("mailbar", 170)} onSubmit={submit}>
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="กรอกอีเมลของคุณ"
              aria-label="อีเมลของคุณ"
              required
            />
            <button className="go" type="submit">
              ส่ง
            </button>
          </form>

          <p
            className="sub"
            aria-live="polite"
            style={{ marginTop: 14, color: "var(--brand)", fontWeight: 700, minHeight: 22 }}
          >
            {sent ? "รับอีเมลเรียบร้อย เดี๋ยวเราส่งข่าวไปให้นะ" : ""}
          </p>
        </div>

        <div>
          {FAQ.map((f, i) => {
            const on = open === i;
            return (
              <div {...rv("faqrow", i * 90)} key={f.q}>
                <button
                  className="faqq"
                  type="button"
                  aria-expanded={on}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(on ? -1 : i)}
                >
                  {f.q}
                  <span className="faqbtn" aria-hidden="true">
                    <Right />
                  </span>
                </button>
                <div
                  className="faqa"
                  id={`faq-${i}`}
                  hidden={!on}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ท้ายหน้า ─────────── */
function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div {...rv("", 0)}>
          <p style={{ margin: 0, fontSize: 23, fontWeight: 800, color: "#fff" }}>HamsterHub</p>
          <p className="blurb">
            เรียนรู้ • สนุก • สร้างสรรค์ ไปด้วยกัน กับคอมมูนิตี้นักสร้างรุ่นเล็กที่ใหญ่ที่สุดในไทย
          </p>
          <div className="soc">
            <a href="https://www.facebook.com/HamsterHubThailand/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/hamsterhub_ig/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
            <a href="https://www.hamsterhub.co/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">yt</a>
            <a href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer" aria-label="TikTok">tt</a>
          </div>
        </div>

        {FOOT.map((col, i) => (
          <div {...rv("", 90 + i * 90)} key={col.h}>
            <h4>{col.h}</h4>
            <ul>
              {col.items.map((it) => (
                <li key={it}>
                  <a href="#top">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap">
        <div className="foot-btm">© 2569 HamsterHub · สงวนลิขสิทธิ์</div>
      </div>
    </footer>
  );
}

/* ─────────── ไอคอน ─────────── */
/** ขีดใต้วาดมือ */
function Swoosh({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      {...rv("doodle", delay, "draw", { left: 0, bottom: -6 })}
      width="100%" height="14" viewBox="0 0 300 14" preserveAspectRatio="none"
      fill="none" aria-hidden="true"
    >
      <path d="M4 9 C 70 2 150 2 210 6 S 280 11 296 5" pathLength={1}
        stroke="var(--brand)" strokeWidth="4" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

/** ประกายวาดมือ 3 ขีด */
function Sparks({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      {...rv("doodle", delay, "draw", { right: -34, top: -6 })}
      width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true"
    >
      {/* แยกเป็นสามเส้น จะได้ลากพร้อมกันทั้งสามขีดเหมือนในคลิป */}
      <path d="M4 20 L1 26" pathLength={1} stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 12 L12 3" pathLength={1} stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
      <path d="M23 16 L29 9" pathLength={1} stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** เส้นหยักบาง ๆ ในกลุ่มอวตาร */
function Squiggle({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      {...rv("squiggle", delay, "draw", { right: "-4%", bottom: "4%" })}
      width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true"
    >
      <path d="M6 140 C 60 132 96 108 92 78 S 44 44 56 22 S 118 8 144 30" pathLength={1}
        stroke="#b9b2aa" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────── ไอคอนขยับได้ในการ์ดสิทธิ์ ───────────
   แนวเดียวกับไอคอน Lottie แต่วาดเป็น SVG + CSS เอง
   ถ้าใช้ Lottie จริงต้องลากไลบรารีมาอีกราว 250KB เพื่อไอคอน 4 ตัว
   แบบนี้หนักไม่ถึง 2KB และไม่ต้องโหลดไฟล์จากข้างนอกเลย            */

/** ถ้วยรางวัล — มีแสงวาบพาดตอนโผล่และตอนชี้ */
function TrophyIcon() {
  return (
    <svg className="ic ic-trophy" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path className="cup" d="M9 5h14v8a7 7 0 0 1-14 0z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M9 7H5.5v2A4.5 4.5 0 0 0 10 13.5M23 7h3.5v2a4.5 4.5 0 0 1-4.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 20v4M11 27h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path className="shine" d="M12 7v6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/** หมวกรับปริญญา — พู่แกว่งตอนโผล่และตอนชี้ */
function CapIcon() {
  return (
    <svg className="ic ic-cap" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M2 12 16 6l14 6-14 6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M7 14.5V21c0 2.2 4 4 9 4s9-1.8 9-4v-6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <g className="tassel">
        <path d="M29 12v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="29" cy="20" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

/** บับเบิลแชท — จุดสามจุดเด้งเป็นจังหวะเหมือนกำลังพิมพ์ */
function ChatIcon() {
  return (
    <svg className="ic ic-chat" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 9a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H13l-6 5v-5a3 3 0 0 1-3-3z"
        stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle className="d1" cx="11" cy="13.5" r="1.9" fill="currentColor" />
      <circle className="d2" cx="16" cy="13.5" r="1.9" fill="currentColor" />
      <circle className="d3" cx="21" cy="13.5" r="1.9" fill="currentColor" />
    </svg>
  );
}

/** กล่องของขวัญ — ฝาเปิดแง้มตอนโผล่และตอนชี้ */
function GiftIcon() {
  return (
    <svg className="ic ic-gift" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 15h20v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 15v13" stroke="currentColor" strokeWidth="2.2" />
      <g className="lid">
        <rect x="4" y="9" width="24" height="6" rx="1.6" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M16 9c-1-3-3-5-5-5a2.6 2.6 0 0 0 0 5zM16 9c1-3 3-5 5-5a2.6 2.6 0 0 1 0 5z"
          stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

const PERK_ICON = {
  trophy: TrophyIcon,
  cap: CapIcon,
  chat: ChatIcon,
  gift: GiftIcon,
} as const;

function IgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="#e1306c" stroke="none" />
    </svg>
  );
}
function TtIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
      <path d="M16.5 3c.4 2.2 1.9 3.8 4.1 4v2.7c-1.5.1-2.9-.3-4.1-1.1v5.9c0 3.3-2.4 5.5-5.4 5.5A5.4 5.4 0 0 1 5.7 14c0-3 2.4-5.4 5.5-5.4.3 0 .6 0 .9.1v2.9a2.6 2.6 0 1 0 1.8 2.5V3z" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#1877f2" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.6V13h2.67v8z" />
    </svg>
  );
}

function Caret() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Search() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
function Right() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
