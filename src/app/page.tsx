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
        <Perks />
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
          <Slot k="logo" size={44} label="" plain />
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
              <span className="on">แล้วเจอกันที่สถานีแรก</span>
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

/** กลุ่มรูปกลม ๆ พร้อมบับเบิลคำทักทาย */
function Cluster() {
  return (
    <div className="cluster">
      <Slot k="main" size={190} label="ตัวหลัก" style={{ left: "30%", top: "34%" }} main />
      <Slot k="a" size={104} label="" style={{ left: "2%", top: "12%" }} />
      <Slot k="b" size={92} label="" style={{ left: "0%", top: "56%" }} />
      <Slot k="c" size={112} label="" style={{ right: "6%", top: "4%" }} />
      <Slot k="d" size={98} label="" style={{ right: "0%", top: "44%" }} />
      <Slot k="e" size={88} label="" style={{ left: "38%", bottom: "0%" }} />

      <span className="bubble b-navy" style={{ left: "4%", top: "42%" }}>
        ยินดีต้อนรับ!
      </span>
      <span className="bubble b-brand" style={{ right: "2%", top: "26%", animationDelay: "1.2s" }}>
        มาเล่นด้วยกัน!
      </span>
      <span className="bubble b-white" style={{ right: "10%", bottom: "18%", animationDelay: "2.1s" }}>
        สวัสดี~
      </span>

      <span className="chip" style={{ left: "22%", top: "2%", animationDelay: ".6s" }}>
        💬
      </span>
      <span className="chip" style={{ left: "12%", bottom: "16%", animationDelay: "1.8s" }}>
        🎮
      </span>
      <span className="chip" style={{ right: "16%", bottom: "2%", animationDelay: "2.6s" }}>
        🏆
      </span>
    </div>
  );
}

/** ช่องรูป — มีไฟล์ก็แสดงรูป ไม่มีก็เป็นวงกลมประ ๆ รอไว้ */
function Slot({
  k,
  size,
  label,
  style,
  main,
  plain,
}: {
  k: string;
  size: number;
  label: string;
  style?: React.CSSProperties;
  main?: boolean;
  plain?: boolean;
}) {
  const src = IMG[k];
  const base: React.CSSProperties = {
    width: size,
    height: size,
    ...(plain ? { position: "relative" } : {}),
    ...style,
  };
  return (
    <span className={`slot${main ? " slot-main" : ""}`} style={base}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" />
      ) : (
        <span>
          {label && (
            <>
              <strong style={{ display: "block", color: "var(--brand)", fontSize: 12.5 }}>{label}</strong>
            </>
          )}
          {!plain && <span style={{ opacity: 0.75 }}>ใส่รูปตรงนี้</span>}
        </span>
      )}
    </span>
  );
}

/* ─────────── ตัวเลข ─────────── */
function Stats() {
  return (
    <section className="wrap" style={{ paddingTop: 62 }}>
      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.l}>
            <b className="num">{s.n}</b>
            <span>{s.l}</span>
          </div>
        ))}
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
            <button className="btn" type="submit" style={{ padding: "14px 30px" }}>
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
