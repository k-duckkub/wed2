"use client";

import { useState } from "react";

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
  { icon: "🏆", label: "CHALLENGE", text: "ส่งผลงานประจำเดือน มีโค้ชคอมเมนต์ให้ทุกชิ้น", dark: false },
  { icon: "🎓", label: "WORKSHOP", text: "เวิร์กช็อปสดจากผู้เชี่ยวชาญ ทุกเสาร์ 10:00 น.", dark: false },
  { icon: "💬", label: "COMMUNITY", text: "แลกเปลี่ยนผลงานและไอเดียกับเพื่อนในรุ่น", dark: true },
  { icon: "🎁", label: "SPECIAL EVENT", text: "กิจกรรมและสิทธิพิเศษสำหรับสมาชิกเท่านั้น", dark: false },
];

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
        <a className="brand" href="#top">
          <Slot k="logo" size={44} face="🐹" bg="var(--brand-soft)" plain />
          <b>HamsterHub</b>
        </a>

        <nav className="menu">
          {MENU.map((m) => (
            <a key={m} href="#top">
              {m}
            </a>
          ))}
        </nav>

        <div className="navbtns">
          <a className="navlink" href="#top">
            เข้าสู่ระบบ
          </a>
          <a className="btn btn-sm" href="#top">
            สมัครสมาชิก
          </a>
        </div>
      </div>
    </header>
  );
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

        <div className="finder">
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
            <span className="status">
              <i /> ชำระเงินสำเร็จ · #{ORDER.id}
            </span>

            <h1 className="h1" style={{ marginTop: 26 }}>
              ขอบคุณที่ขึ้นขบวน
              <br />
              เดียวกับพวกเรา
              <br />
              <span className="hdr-wrap">
                <span className="on">แล้วเจอกันที่สถานีแรก</span>
                <Swoosh />
              </span>
            </h1>

            <p className="lead" style={{ marginTop: 22, maxWidth: 520 }}>
              ที่นั่งของน้องเม่นถูกจองแล้ว รถไฟออกเดินทาง {ORDER.depart} ระหว่างนี้
              ไปทักทายเพื่อนร่วมรุ่นในคอมมูนิตี้ก่อนได้เลย
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <a className="btn" href="#top">
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
    <svg className="track" width="300" height="74" viewBox="0 0 300 74" fill="none" aria-hidden="true">
      <path
        d="M6 62 C 62 62 66 14 136 14 S 214 52 294 22"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeDasharray="2 11"
        strokeLinecap="round"
        opacity=".55"
      />
      <circle cx="136" cy="14" r="7" fill="var(--brand)" />
    </svg>
  );
}

/** กลุ่มอวตาร พร้อมบับเบิลคำทักทายและชิปโซเชียล */
function Cluster() {
  return (
    <div className="cluster">
      <span className="panel" style={{ left: "26%", top: "26%", width: "52%", height: "44%" }} />
      <Squiggle />

      <Slot k="main" size={132} bg="#cfe4ff" face="🧑" style={{ left: "34%", top: "31%" }} main />
      <Slot k="a" size={80} bg="#dff2e3" face="🧒" style={{ left: "4%", top: "13%" }} />
      <Slot k="b" size={86} bg="#ffdfe0" face="👧" style={{ left: "2%", top: "58%" }} />
      <Slot k="c" size={74} bg="#e6e0ff" face="🧑‍🦱" style={{ right: "4%", top: "17%" }} />
      <Slot k="d" size={80} bg="#ffe6cf" face="👦" style={{ right: "0%", top: "47%" }} />
      <Slot k="e" size={66} bg="#d9f0f5" face="🧒" style={{ left: "44%", bottom: "2%" }} />

      <span className="bubble" style={{ left: "26%", top: "16%" }}>
        ยินดีต้อนรับ!
      </span>
      <span className="bubble b-brand tail-r" style={{ right: "2%", top: "36%", animationDelay: "1.3s" }}>
        มาเล่นด้วยกัน!
      </span>
      <span className="bubble tail-r" style={{ right: "20%", bottom: "14%", animationDelay: "2.2s" }}>
        สวัสดี~
      </span>

      <span className="soc-chip" style={{ left: "6%", top: "39%", animationDelay: ".7s" }}>
        <IgIcon />
      </span>
      <span className="soc-chip" style={{ right: "24%", bottom: "1%", animationDelay: "1.9s" }}>
        <TtIcon />
      </span>
      <span className="soc-chip" style={{ left: "62%", top: "19%", animationDelay: "2.7s" }}>
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
}: {
  k: string;
  size: number;
  bg?: string;
  face?: string;
  style?: React.CSSProperties;
  main?: boolean;
  plain?: boolean;
}) {
  const src = IMG[k];
  return (
    <span
      className={`slot${main ? " slot-main" : ""}`}
      style={{
        width: size,
        height: size,
        background: bg ?? "var(--brand-soft)",
        fontSize: Math.round(size * 0.42),
        ...(plain ? { position: "relative", boxShadow: "none" } : {}),
        ...style,
      }}
    >
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
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
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
        <h2 className="h2">ตารางเดินรถของน้อง</h2>
      </div>
      <p className="sub" style={{ marginTop: 12, marginBottom: 38, maxWidth: 560 }}>
        ทุกอย่างหลังจากนี้เรียงไว้ให้แล้ว ไม่ต้องเดาว่าต้องทำอะไรต่อ
      </p>

      <ol className="rail-list">
        {AGENDA.map((a) => (
          <li className={`stopitem${a.now ? " now" : ""}`} key={a.h}>
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
          <h2 className="h2">
            ขึ้นรถขบวนถัดไป
            <br />
            <span className="on">ด้วยกันไหม</span>
          </h2>
          <p className="sub" style={{ marginTop: 14, maxWidth: 470 }}>
            สมาชิกที่จองที่นั่งแล้วได้สิทธิ์เลือกรอบก่อนเปิดขายทั่วไป
            ทักทีมงานในคอมมูนิตี้เพื่อขอรายละเอียดได้เลย
          </p>
        </div>
        <a className="btn-w" href="#top">
          ดูคอร์สทั้งหมด <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="ccards">
        {COURSES.map((c) => (
          <article className="ccard" key={c.h}>
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
            <h2 className="h2" style={{ color: "#fff" }}>
              สถานีต่อไปที่เรากำลังสร้าง
            </h2>
            <p className="sub" style={{ marginTop: 14, maxWidth: 520, color: "rgba(255,255,255,.78)" }}>
              เปิดให้ดูตรง ๆ ว่ากำลังทำอะไรอยู่ อยากได้อันไหนก่อน บอกเราได้ในคอมมูนิตี้
            </p>
          </div>
        </div>

        <div className="rcards">
          {ROADMAP.map((r) => (
            <article className={`rcard${r.on ? " live" : ""}`} key={r.h}>
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
      <h2 className="h2">สิ่งที่รออยู่บนเส้นทาง</h2>
      <p className="sub" style={{ marginTop: 12, marginBottom: 34 }}>
        สิทธิ์ทั้งหมดเปิดให้น้องแล้วตั้งแต่วันนี้
      </p>

      <div className="cards">
        {PERKS.map((p) => (
          <article className={`bcard${p.dark ? " dark" : ""}`} key={p.label}>
            <div className="ico" aria-hidden="true">
              {p.icon}
            </div>
            <p className="lb">{p.label}</p>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─────────── เสียงจากน้อง ๆ ─────────── */
function Voices() {
  return (
    <section className="wrap" style={{ paddingTop: 96 }}>
      <div className="hdr-wrap">
        <h2 className="h2">
          เสียงจากน้อง ๆ
          <br />
          และผู้ปกครอง
        </h2>
        <Sparks />
      </div>

      <div className="quotes">
        {VOICES.map((v) => (
          <figure className="quote" key={v.name} style={{ margin: 0 }}>
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
          <h2 className="h2">
            มีคำถามอยากถาม
            <br />
            เราตอบให้ทุกข้อ
          </h2>
          <p className="sub" style={{ marginTop: 16, marginBottom: 28, maxWidth: 400 }}>
            หรือฝากอีเมลไว้ ทีมงานจะส่งข่าวสารและกิจกรรมดีๆ ไปให้
          </p>

          <form className="mailbar" onSubmit={submit}>
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
              <div className="faqrow" key={f.q}>
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
        <div>
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

        {FOOT.map((col) => (
          <div key={col.h}>
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
function Swoosh() {
  return (
    <svg className="doodle" width="100%" height="14" viewBox="0 0 300 14" preserveAspectRatio="none"
      style={{ left: 0, bottom: -6 }} fill="none" aria-hidden="true">
      <path d="M4 9 C 70 2 150 2 210 6 S 280 11 296 5" stroke="var(--brand)" strokeWidth="4" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

/** ประกายวาดมือ 3 ขีด */
function Sparks() {
  return (
    <svg className="doodle" width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true"
      style={{ right: -34, top: -6 }}>
      <path d="M4 20 L1 26M14 12 L12 3M23 16 L29 9" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** เส้นหยักบาง ๆ ในกลุ่มอวตาร */
function Squiggle() {
  return (
    <svg className="squiggle" width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true"
      style={{ right: "-4%", bottom: "4%" }}>
      <path d="M6 140 C 60 132 96 108 92 78 S 44 44 56 22 S 118 8 144 30"
        stroke="#b9b2aa" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

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
