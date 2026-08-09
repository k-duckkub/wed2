"use client";

import { useMemo, useState } from "react";

/* ═════════════════════════════════════════════
   HamsterHub — หน้าหลังชำระเงิน
   ═════════════════════════════════════════════ */

/**
 * รูปทั้งหมดอยู่ตรงนี้ที่เดียว
 * วางไฟล์ลง /public/img/ ตามชื่อด้านล่าง แล้วรูปจะขึ้นเอง
 * ยังไม่มีไฟล์ก็ไม่พัง — ช่องนั้นจะเป็นพื้นส้มอ่อนรอไว้
 */
const IMG = {
  heroBg: "/img/hero-bg.jpg", //           1920×1100 ฉากหลังใหญ่ด้านบน
  heroHamster: "/img/hero-hamster.png", // 900×760   แฮมสเตอร์ (PNG พื้นใส)
  courseMain: "/img/course-main.jpg", //   840×620   คอร์สที่สั่งซื้อ
  up1: "/img/course-1.jpg", //             560×340   คอร์สขายต่อ 1
  up2: "/img/course-2.jpg", //             560×340   คอร์สขายต่อ 2
  up3: "/img/course-3.jpg", //             560×340   คอร์สขายต่อ 3
};

/**
 * ข้อมูลคำสั่งซื้อ — ของจริงต้องดึงมาจากหลังบ้าน
 * ตอนนี้เป็นค่าตัวอย่างไว้ดูหน้าตาก่อน
 */
const ORDER = {
  id: "HH-2569-08144",
  date: "9 สิงหาคม 2569",
  email: "you@example.com",
  method: "บัตรเครดิต ลงท้าย 4242",
  course: "วาดภาพดิจิทัล สำหรับมือใหม่",
  level: "ระดับเริ่มต้น",
  price: 1490,
};

const STEPS = [
  { state: "done", title: "ชำระเงินสำเร็จ", note: "เรารับเงินเรียบร้อยแล้ว" },
  { state: "done", title: "ส่งอีเมลยืนยันแล้ว", note: `ส่งไปที่ ${ORDER.email} — ถ้าไม่เจอ ลองดูในเมลขยะ` },
  { state: "now", title: "เข้าเรียนได้เลย", note: "คอร์สเปิดให้เข้าแล้ว ไม่มีวันหมดอายุ" },
  { state: "next", title: "เข้ากลุ่มคอมมูนิตี้", note: "ไว้ถามพี่ ๆ และส่งผลงานให้เพื่อนดู" },
] as const;

/** 1) กิจกรรม */
const EVENTS = [
  {
    id: "ws-light-shadow",
    d: "15",
    m: "ส.ค.",
    title: "เวิร์กช็อปสด: วาดแสงและเงาให้ภาพมีมิติ",
    desc: "สอนสดพร้อมตอบคำถาม เก็บคลิปย้อนหลังให้ด้วย",
    time: "19:30 – 21:00 น.",
    where: "ออนไลน์ (Zoom)",
    seatsLeft: 12,
    seatsAll: 40,
    startUtc: "20260815T123000Z",
    endUtc: "20260815T140000Z",
    tag: "เวิร์กช็อป",
  },
  {
    id: "community-night",
    d: "22",
    m: "ส.ค.",
    title: "Community Night: รีวิวผลงานสด",
    desc: "ส่งงานเข้ามาให้พี่ ๆ รีวิวสด ๆ ไม่ต้องเก่งก็ส่งได้",
    time: "20:00 – 21:00 น.",
    where: "ออนไลน์ (Discord)",
    seatsLeft: 31,
    seatsAll: 60,
    startUtc: "20260822T130000Z",
    endUtc: "20260822T140000Z",
    tag: "คอมมูนิตี้",
  },
  {
    id: "monthly-challenge",
    d: "31",
    m: "ส.ค.",
    title: "Challenge ประจำเดือน: “เมืองในฝัน”",
    desc: "ส่งผลงาน 1 ชิ้น ลุ้นรางวัลและได้ลงหน้าแกลเลอรี",
    time: "ปิดรับ 23:59 น.",
    where: "ส่งผ่านเว็บ",
    seatsLeft: 0,
    seatsAll: 0,
    startUtc: "20260831T160000Z",
    endUtc: "20260831T165900Z",
    tag: "แข่งขัน",
  },
];

/** 2) ขายต่อ */
const UPSELL = [
  { id: "procreate", img: IMG.up1, title: "Procreate", desc: "วาดภาพบน iPad อย่างมืออาชีพ", level: "ระดับกลาง", price: 1290 },
  { id: "photo", img: IMG.up2, title: "พื้นฐานการถ่ายภาพ", desc: "จัดแสงและองค์ประกอบให้ภาพเล่าเรื่อง", level: "ระดับเริ่มต้น", price: 990 },
  { id: "compose", img: IMG.up3, title: "จัดองค์ประกอบภาพ", desc: "หลักการวางภาพที่ใช้ได้กับทุกงานออกแบบ", level: "ระดับกลาง", price: 890 },
];

const BUNDLE_OFF = 0.2; // เลือก 2 คอร์สขึ้นไป ลด 20%

/** 3) เป้าหมายในอนาคต */
const ROADMAP = [
  { icon: "sprout", label: "ตอนนี้", l1: "คอร์สออนไลน์", l2: "เรียนได้ตลอดชีพ", now: true },
  { icon: "people", label: "ถัดไป", l1: "Workshop & Community", l2: "พื้นที่เรียนรู้และแลกเปลี่ยน" },
  { icon: "gift", label: "เร็ว ๆ นี้", l1: "เส้นทางเรียนรู้", l2: "ไล่ระดับจนจบสายอาชีพ" },
  { icon: "rocket", label: "อนาคต", l1: "Ecosystem ครบวงจร", l2: "เรียน ฝึก ทำงานจริง ในที่เดียว" },
];

const FAQ = [
  { q: "เข้าเรียนยังไง เริ่มตรงไหน?", a: "กดปุ่ม “เริ่มเรียนเลย” ด้านบนได้เลย ระบบจะพาเข้าห้องเรียนทันที หรือเข้าจากลิงก์ในอีเมลยืนยันก็ได้เหมือนกัน ไม่ต้องรอการอนุมัติ" },
  { q: "คอร์สหมดอายุไหม?", a: "ไม่หมดอายุ ซื้อครั้งเดียวเข้าเรียนได้ตลอดชีพ รวมถึงเนื้อหาที่อัปเดตเพิ่มในอนาคตด้วย" },
  { q: "ไม่ได้รับอีเมลยืนยัน ทำยังไงดี?", a: "ลองดูในกล่องจดหมายขยะก่อน ถ้ายังไม่เจอ ทักหาเราทาง LINE พร้อมแจ้งเลขคำสั่งซื้อ เดี๋ยวส่งให้ใหม่ภายในวันเดียวกัน" },
  { q: "ขอคืนเงินได้ไหม?", a: "ได้ภายใน 7 วันนับจากวันที่ชำระเงิน ถ้าเรียนแล้วรู้สึกว่าไม่ใช่ ทักมาบอกเหตุผลสั้น ๆ เราคืนให้เต็มจำนวน ไม่ถามซ้ำ" },
  { q: "ใบเสร็จ/ใบกำกับภาษีขอได้ไหม?", a: "กดปุ่ม “ดาวน์โหลดใบเสร็จ” ได้เลย ถ้าต้องการใบกำกับภาษีเต็มรูปแบบในนามบริษัท แจ้งชื่อและเลขผู้เสียภาษีมาทาง LINE ได้" },
];

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/HamsterHubThailand/", icon: "facebook" },
  { name: "YouTube", href: "https://www.hamsterhub.co/", icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/hamsterhub_ig/", icon: "instagram" },
  { name: "LINE", href: "https://page.line.me/jkm4247u", icon: "line" },
];

const MOTES = [
  { l: "6%", s: 7, d: 26, delay: 0 },
  { l: "15%", s: 4, d: 34, delay: 5 },
  { l: "24%", s: 9, d: 30, delay: 11 },
  { l: "33%", s: 5, d: 38, delay: 2 },
  { l: "44%", s: 6, d: 28, delay: 16 },
  { l: "53%", s: 3, d: 36, delay: 8 },
  { l: "62%", s: 8, d: 32, delay: 21 },
  { l: "71%", s: 5, d: 27, delay: 13 },
  { l: "80%", s: 7, d: 35, delay: 4 },
  { l: "89%", s: 4, d: 30, delay: 18 },
  { l: "96%", s: 6, d: 33, delay: 9 },
];

/** จัดรูปแบบตัวเลขเอง ไม่ใช้ toLocaleString เพราะ locale ฝั่ง server/client อาจต่างกันจน hydration เพี้ยน */
function baht(n: number) {
  const s = Math.round(n).toString();
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ThankYouPage() {
  return (
    <>
      <div className="world" />
      <div className="motes" aria-hidden="true">
        {MOTES.map((m) => (
          <i
            key={m.l}
            style={{
              left: m.l,
              bottom: "-8vh",
              width: m.s,
              height: m.s,
              animationDuration: `${m.d}s`,
              animationDelay: `-${m.delay}s`,
            }}
          />
        ))}
      </div>

      <div style={{ paddingBottom: 34 }}>
        <TopBar />
        <Hero />

        <main>
          <OrderAndSteps />
          <Events />
          <Upsell />
          <Roadmap />
          <Support />
        </main>

        <Footer />
      </div>
    </>
  );
}

/* ─────────────── บาร์บน ─────────────── */
function TopBar() {
  return (
    <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}>
      <div className="wrap" style={{ padding: "24px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
            <LogoMark />
            <span style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.12, color: "var(--ink)" }}>
              HAMSTER
              <br />
              HUB
            </span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-s" href="#support">
              <LifeIcon /> ต้องการความช่วยเหลือ
            </a>
            <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>ไปที่หน้าหลัก</span>
              <Chevron />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─────────────── Hero ─────────────── */
function Hero() {
  return (
    <section className="hero" style={{ ["--img" as string]: `url(${IMG.heroBg})` }}>
      <span className="sun" style={{ width: 540, height: 540, right: "4%", top: "10%" }} />
      <span className="sun" style={{ width: 320, height: 320, left: "-4%", bottom: "8%", animationDelay: "3.5s", opacity: 0.7 }} />

      <div className="wrap" style={{ width: "100%" }}>
        <div className="split">
          <div className="rise">
            <span className="badge">
              <span className="tick">
                <Tick />
              </span>
              ชำระเงินสำเร็จ
            </span>

            <h1 className="h1" style={{ marginTop: 18 }}>
              THANK&nbsp;YOU!
            </h1>

            <p style={{ margin: "16px 0 0", fontSize: "clamp(19px,2.6vw,25px)", fontWeight: 800, color: "var(--ink)" }}>
              ขอบคุณที่เลือก <span className="on-brand">Hamster Hub</span>{" "}
              <span style={{ color: "var(--brand)" }}>♥</span>
            </p>

            <p className="sub" style={{ margin: "14px 0 0", maxWidth: 460 }}>
              คอร์ส <strong style={{ color: "var(--ink)" }}>{ORDER.course}</strong> พร้อมให้เข้าเรียนแล้ว
              เราส่งอีเมลยืนยันไปให้เรียบร้อย
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <a className="btn" href="https://www.hamsterhub.co/">
                เริ่มเรียนเลย <ArrowRight />
              </a>
              <a className="btn-2" href="#order">
                ดูรายละเอียดคำสั่งซื้อ
              </a>
            </div>
          </div>

          <div className="mascot bob">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.heroHamster} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── คำสั่งซื้อ + ขั้นตอนถัดไป ─────────────── */
function OrderAndSteps() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ORDER.id);
    } catch {
      // เบราว์เซอร์ที่ไม่ให้สิทธิ์คลิปบอร์ด — ยังบอกผู้ใช้ว่าเลขคืออะไรได้อยู่
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const receipt = () => {
    const lines = [
      "HAMSTER HUB — ใบเสร็จรับเงิน",
      "================================",
      `เลขคำสั่งซื้อ : ${ORDER.id}`,
      `วันที่        : ${ORDER.date}`,
      `อีเมล         : ${ORDER.email}`,
      `ชำระโดย       : ${ORDER.method}`,
      "",
      "รายการ",
      `- ${ORDER.course} (${ORDER.level})`,
      `  ${baht(ORDER.price)}.-`,
      "",
      `ยอดรวมทั้งสิ้น : ${baht(ORDER.price)}.-`,
      "",
      "ขอบคุณที่เลือก Hamster Hub",
      "hamsterhub.co",
    ].join("\n");
    download(`receipt-${ORDER.id}.txt`, lines, "text/plain;charset=utf-8");
  };

  return (
    <section className="wrap overlap" id="order" style={{ marginBottom: 22 }}>
      <div className="cols">
        {/* ใบเสร็จ */}
        <div className="card sec">
          <div className="shead" style={{ marginBottom: 18 }}>
            <div>
              <p className="eyebrow">คำสั่งซื้อของคุณ</p>
              <h2 className="h2" style={{ marginTop: 8 }}>
                {ORDER.course}
              </h2>
            </div>
          </div>

          <div className="split" style={{ gap: 26, alignItems: "start" }}>
            <div
              className="photo frame"
              style={{ ["--img" as string]: `url(${IMG.courseMain})`, aspectRatio: "4/3", borderRadius: 16 }}
            />

            <div>
              <dl className="kv">
                <dt>เลขคำสั่งซื้อ</dt>
                <dd className="num">
                  {ORDER.id}
                  <button className="copybtn" data-done={copied} onClick={copy} type="button">
                    {copied ? <Tick size={12} /> : <CopyIcon />}
                    {copied ? "คัดลอกแล้ว" : "คัดลอก"}
                  </button>
                </dd>

                <dt>วันที่</dt>
                <dd className="num">{ORDER.date}</dd>

                <dt>ชำระโดย</dt>
                <dd className="num">{ORDER.method}</dd>

                <dt>ส่งอีเมลไปที่</dt>
                <dd>{ORDER.email}</dd>

                <dt>ยอดชำระ</dt>
                <dd className="num" style={{ fontSize: 20, color: "var(--brand-deep)" }}>
                  {baht(ORDER.price)}.-
                </dd>
              </dl>

              <button className="btn-2" onClick={receipt} type="button" style={{ marginTop: 20, width: "100%" }}>
                <DownloadIcon /> ดาวน์โหลดใบเสร็จ
              </button>

              <p className="tiny" style={{ marginTop: 12 }}>
                รับประกันคืนเงินภายใน 7 วัน ถ้าเรียนแล้วรู้สึกว่าไม่ใช่
              </p>
            </div>
          </div>
        </div>

        {/* ขั้นตอนถัดไป */}
        <div className="card sec">
          <p className="eyebrow">ขั้นตอนถัดไป</p>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 14, fontSize: 24 }}>
            ทำต่อได้เลย
          </h2>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step" data-state={s.state} key={s.title}>
                <span className="mark">{s.state === "done" ? <Tick size={14} /> : i + 1}</span>
                <div>
                  <p className="st">{s.title}</p>
                  <p className="tiny" style={{ marginTop: 3 }}>
                    {s.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="stack" style={{ marginTop: 18 }}>
            <a className="btn" href="https://www.hamsterhub.co/">
              เริ่มเรียนเลย <ArrowRight />
            </a>
            <a className="btn-2" href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer">
              เข้ากลุ่มคอมมูนิตี้
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 1) กิจกรรม ─────────────── */
function Events() {
  return (
    <section className="wrap" id="events" style={{ marginBottom: 22 }}>
      <div className="card sec">
        <div className="shead">
          <div>
            <p className="eyebrow">กิจกรรม</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              กิจกรรมที่กำลังจะถึง
            </h2>
            <p className="sub" style={{ marginTop: 8 }}>
              สมาชิกคอร์สเข้าร่วมได้ฟรีทุกกิจกรรม
            </p>
          </div>
          <a className="btn-s" href="https://www.hamsterhub.co/">
            ดูทั้งหมด <Chevron />
          </a>
        </div>

        <div className="stack">
          {EVENTS.map((e) => {
            const hasSeats = e.seatsAll > 0;
            const taken = hasSeats ? ((e.seatsAll - e.seatsLeft) / e.seatsAll) * 100 : 0;
            const nearlyFull = hasSeats && e.seatsLeft <= e.seatsAll * 0.25;

            return (
              <article className="evt" key={e.id}>
                <div className="date">
                  <b className="num">{e.d}</b>
                  <span>{e.m}</span>
                </div>

                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
                    <h3 className="h3">{e.title}</h3>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 999,
                        background: "var(--brand-soft)",
                        color: "var(--brand-deep)",
                        fontSize: 11.5,
                        fontWeight: 800,
                      }}
                    >
                      {e.tag}
                    </span>
                  </div>

                  <p className="tiny" style={{ marginTop: 6 }}>
                    {e.desc}
                  </p>

                  <div className="meta">
                    <span>
                      <ClockIcon /> {e.time}
                    </span>
                    <span>
                      <PinIcon /> {e.where}
                    </span>
                    {hasSeats && (
                      <span style={nearlyFull ? { color: "var(--brand-deep)", fontWeight: 700 } : undefined}>
                        <SeatIcon /> เหลือ {e.seatsLeft} จาก {e.seatsAll} ที่นั่ง
                      </span>
                    )}
                  </div>

                  {hasSeats && (
                    <div className="seats" aria-hidden="true">
                      <i style={{ width: `${taken}%` }} />
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                  <button className="btn-s" type="button" onClick={() => addToCalendar(e)}>
                    <CalIcon /> เพิ่มลงปฏิทิน
                  </button>
                  <a
                    className="btn-s"
                    style={{ background: "var(--brand)", color: "#fff", borderColor: "var(--brand)" }}
                    href="https://www.hamsterhub.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ลงชื่อเข้าร่วม
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 2) ขายต่อ ─────────────── */
function Upsell() {
  const [picked, setPicked] = useState<string[]>([UPSELL[0].id]);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const { subtotal, total, saved } = useMemo(() => {
    const sub = UPSELL.filter((u) => picked.includes(u.id)).reduce((s, u) => s + u.price, 0);
    const off = picked.length >= 2 ? BUNDLE_OFF : 0;
    const t = Math.round(sub * (1 - off));
    return { subtotal: sub, total: t, saved: sub - t };
  }, [picked]);

  return (
    <section className="wrap" id="more" style={{ marginBottom: 22 }}>
      <div className="card sec">
        <div className="shead">
          <div>
            <p className="eyebrow">เรียนต่อ</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              คอร์สที่ไปด้วยกันได้ดี
            </h2>
            <p className="sub" style={{ marginTop: 8 }}>
              เลือก 2 คอร์สขึ้นไป ลดทันที {Math.round(BUNDLE_OFF * 100)}%
            </p>
          </div>
        </div>

        <div className="two" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", marginBottom: 18 }}>
          {UPSELL.map((u) => (
            <div key={u.id} className="lift" style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--line-soft)", background: "#fff", boxShadow: "var(--sh)" }}>
              <div className="photo frame" style={{ ["--img" as string]: `url(${u.img})`, aspectRatio: "16/9" }} />
              <div style={{ padding: "14px 15px 15px" }}>
                <p className="h3">{u.title}</p>
                <p className="tiny" style={{ marginTop: 5, minHeight: 34 }}>
                  {u.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                  <LevelIcon size={14} />
                  <span className="tiny" style={{ fontSize: 12, flex: 1 }}>
                    {u.level}
                  </span>
                  <span className="num" style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)" }}>
                    {baht(u.price)}.-
                  </span>
                </div>

                <label className="pick" style={{ marginTop: 12 }}>
                  <input
                    type="checkbox"
                    checked={picked.includes(u.id)}
                    onChange={() => toggle(u.id)}
                    aria-label={`เลือกคอร์ส ${u.title}`}
                  />
                  <span className="box">
                    <Tick size={13} />
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>
                    {picked.includes(u.id) ? "เลือกแล้ว" : "เลือกคอร์สนี้"}
                  </span>
                  <span />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <div>
            <p className="tiny" style={{ color: "rgba(255,255,255,.6)" }} aria-live="polite">
              เลือกไว้ {picked.length} คอร์ส
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 26, fontWeight: 900 }} className="num">
              {saved > 0 && <span className="was">{baht(subtotal)}.-</span>}
              {baht(total)}.-
            </p>
            {saved > 0 && <span className="save">ประหยัด {baht(saved)}.-</span>}
          </div>

          <a
            className="btn"
            href="https://www.hamsterhub.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={picked.length === 0}
            tabIndex={picked.length === 0 ? -1 : undefined}
            style={picked.length === 0 ? { opacity: 0.45, pointerEvents: "none" } : undefined}
          >
            {picked.length === 0 ? "เลือกอย่างน้อย 1 คอร์ส" : "ซื้อคอร์สที่เลือก"} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 3) เป้าหมายในอนาคต ─────────────── */
function Roadmap() {
  return (
    <section className="wrap" style={{ marginBottom: 22 }}>
      <div className="card sec">
        <div className="shead">
          <div>
            <p className="eyebrow">เป้าหมายในอนาคต</p>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Hamster Hub กำลังจะไปทางไหน
            </h2>
            <p className="sub" style={{ marginTop: 8, maxWidth: 560 }}>
              เรากำลังสร้างระบบนิเวศการเรียนรู้ที่มากกว่าคอร์สออนไลน์ เพื่อให้คุณเติบโตได้ในทุกเส้นทาง
            </p>
          </div>
        </div>

        <div className="road">
          {ROADMAP.map((r) => (
            <div className="stage" data-now={r.now ? "true" : "false"} key={r.label}>
              <div className="dot">
                <Glyph name={r.icon} size={26} />
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 14, fontWeight: 800, color: r.now ? "var(--brand-deep)" : "var(--ink)" }}>
                {r.label}
              </p>
              <p className="tiny" style={{ margin: "6px 0 0", fontSize: 12.5 }}>
                {r.l1}
                <br />
                {r.l2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ช่วยเหลือ ─────────────── */
function Support() {
  return (
    <section className="wrap" id="support" style={{ marginBottom: 22 }}>
      <div className="cols">
        <div className="card sec">
          <p className="eyebrow">คำถามที่พบบ่อย</p>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 6, fontSize: 26 }}>
            สงสัยอะไรไหม?
          </h2>

          {FAQ.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <div className="card sec" style={{ display: "flex", flexDirection: "column" }}>
          <p className="eyebrow">ติดต่อเรา</p>
          <h2 className="h2" style={{ marginTop: 8, fontSize: 24 }}>
            ยังไม่หายสงสัย?
          </h2>
          <p className="sub" style={{ marginTop: 10 }}>
            ทักมาได้เลย ทีมงานตอบกลับภายใน 24 ชั่วโมง ในวันทำการ
          </p>

          <div className="soft" style={{ padding: "14px 16px", marginTop: 18 }}>
            <p className="tiny" style={{ color: "var(--body)" }}>
              เวลาทักมา แนบ<strong style={{ color: "var(--ink)" }}>เลขคำสั่งซื้อ</strong>{" "}
              <span className="num" style={{ fontWeight: 700, color: "var(--brand-deep)" }}>
                {ORDER.id}
              </span>{" "}
              มาด้วย จะช่วยได้เร็วขึ้นมาก
            </p>
          </div>

          <div className="stack" style={{ marginTop: 18 }}>
            <a className="btn" href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer">
              ทักแชททาง LINE <ArrowRight />
            </a>
            <a className="btn-2" href="mailto:support@hamsterhub.co">
              ส่งอีเมลหาเรา
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
function Footer() {
  return (
    <footer className="wrap">
      <div className="card" style={{ padding: "26px 34px", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <p style={{ margin: 0, fontSize: 15.5, fontWeight: 600, color: "var(--body)" }}>
            ขอบคุณที่เป็นส่วนหนึ่งของครอบครัว
          </p>
          <p style={{ margin: "2px 0 0", fontSize: 22, fontWeight: 800, color: "var(--brand)" }}>Hamster Hub ♥</p>
          <p className="tiny" style={{ margin: "6px 0 0" }}>
            มาเรียนรู้ เติบโต และสนุกไปด้วยกันนะ!
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--body)" }}>ติดต่อและติดตามเรา</span>
          <div style={{ display: "flex", gap: 9 }}>
            {SOCIALS.map((s) => (
              <a key={s.name} className="social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Glyph name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="tiny" style={{ textAlign: "center", marginTop: 20, fontSize: 12.5 }}>
        © 2569 Hamster Hub · สงวนลิขสิทธิ์
      </p>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ตัวช่วย
   ───────────────────────────────────────────── */

function download(filename: string, text: string, mime: string) {
  const blob = new Blob(["﻿" + text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** ICS ต้อง escape เครื่องหมายบางตัว ไม่งั้นไฟล์เสีย */
const esc = (s: string) => s.replace(/[\\;,]/g, (m) => "\\" + m).replace(/\n/g, "\\n");

function addToCalendar(e: (typeof EVENTS)[number]) {
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hamster Hub//TH",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${e.id}@hamsterhub.co`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${e.startUtc}`,
    `DTEND:${e.endUtc}`,
    `SUMMARY:${esc(e.title)}`,
    `DESCRIPTION:${esc(e.desc)}`,
    `LOCATION:${esc(e.where)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  download(`${e.id}.ics`, ics, "text/calendar;charset=utf-8");
}

/* ─────────────────────────────────────────────
   ไอคอน
   ───────────────────────────────────────────── */

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M7 5h7v11.5h12V5h7v30h-7V23.5H14V35H7z" fill="var(--brand)" />
    </svg>
  );
}

function Tick({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12M7.5 10.5L12 15l4.5-4.5M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.9" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function SeatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.9" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 19a4.6 4.6 0 0 1 4.5-4.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function LifeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" />
      <path d="M9.4 9.4a3.7 3.7 0 0 1 5.2 0M9.4 14.6a3.7 3.7 0 0 0 5.2 0M9.4 9.4L5.6 5.6M14.6 9.4l3.8-3.8M9.4 14.6l-3.8 3.8M14.6 14.6l3.8 3.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function LevelIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="14" width="4" height="7" rx="1" fill="var(--brand)" />
      <rect x="10" y="10" width="4" height="11" rx="1" fill="var(--brand)" opacity=".45" />
      <rect x="17" y="5" width="4" height="16" rx="1" fill="var(--brand)" opacity=".45" />
    </svg>
  );
}

function Glyph({ name, size = 20 }: { name: string; size?: number }) {
  const stroke = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "sprout":
      return (
        <svg {...stroke}>
          <path d="M12 20v-7" />
          <path d="M12 13c0-3.4-2.4-5.6-6-5.6 0 3.4 2.4 5.6 6 5.6z" />
          <path d="M12 13c0-3.9 2.4-6.4 6-6.4 0 3.9-2.4 6.4-6 6.4z" />
        </svg>
      );
    case "people":
      return (
        <svg {...stroke}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9.5" r="2.3" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 19a4.6 4.6 0 0 1 4.5-4.4" />
        </svg>
      );
    case "gift":
      return (
        <svg {...stroke}>
          <rect x="3" y="9" width="18" height="4" rx="1" />
          <path d="M4.6 13v7.4h14.8V13M12 9v11.4" />
          <path d="M12 9S10.6 4 8.2 4a2.1 2.1 0 0 0 0 5M12 9s1.4-5 3.8-5a2.1 2.1 0 0 1 0 5" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...stroke}>
          <path d="M12 2.6c3.2 2.3 5 5.7 5 9.4l-2.4 3.4H9.4L7 12c0-3.7 1.8-7.1 5-9.4z" />
          <circle cx="12" cy="10.4" r="1.9" />
          <path d="M9.4 15.4L7 18.6l3-.6M14.6 15.4l2.4 3.2-3-.6M10.6 20.4h2.8" />
        </svg>
      );
    case "facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.02 1.46-4.02 4.13V9.9H7.6V13h2.67v8z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.6 7.6c-.23-1.75-.94-2.4-2.66-2.5C16.9 5 14.6 5 12 5s-4.9 0-6.94.1c-1.72.1-2.43.75-2.66 2.5C2.2 9 2.2 10.4 2.2 12s0 3 .2 4.4c.23 1.75.94 2.4 2.66 2.5C7.1 19 9.4 19 12 19s4.9 0 6.94-.1c1.72-.1 2.43-.75 2.66-2.5.2-1.4.2-2.8.2-4.4s0-3-.2-4.4zM10.2 15.1V8.9l5.2 3.1z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...stroke} strokeWidth={1.9}>
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "line":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3C6.9 3 2.8 6.4 2.8 10.5c0 3.7 3.2 6.8 7.6 7.4.3.06.7.2.8.45.09.23.06.58.03.81l-.13.78c-.04.23-.18.9.79.49s5.2-3.07 7.1-5.25c1.3-1.42 1.9-2.87 1.9-4.68C21 6.4 17.1 3 12 3zM8.3 13h-1.9a.5.5 0 0 1-.5-.5v-3.8a.5.5 0 0 1 1 0V12h1.4a.5.5 0 0 1 0 1zm2-.5a.5.5 0 0 1-1 0V8.7a.5.5 0 0 1 1 0zm4.5 0a.5.5 0 0 1-.9.3l-1.95-2.65v2.35a.5.5 0 0 1-1 0V8.7a.5.5 0 0 1 .9-.3l1.95 2.65V8.7a.5.5 0 0 1 1 0zm3.2-2.4a.5.5 0 0 1 0 1h-1.4v.9h1.4a.5.5 0 0 1 0 1h-1.9a.5.5 0 0 1-.5-.5V8.7a.5.5 0 0 1 .5-.5h1.9a.5.5 0 0 1 0 1h-1.4v.9z" />
        </svg>
      );
    default:
      return null;
  }
}
