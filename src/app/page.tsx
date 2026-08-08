/* ═════════════════════════════════════════════
   HamsterHub — หน้า Thank You
   ═════════════════════════════════════════════ */

/**
 * รูปทั้งหมดของหน้านี้อยู่ตรงนี้ที่เดียว
 * วางไฟล์ลง /public/img/ ตามชื่อด้านล่าง แล้วรูปจะขึ้นเอง
 * ยังไม่มีไฟล์ก็ไม่พัง — ช่องนั้นจะเป็นพื้นส้มอ่อนรอไว้
 */
const IMG = {
  heroBg: "/img/hero-bg.jpg", //           1920×1100 ฉากหลังใหญ่เต็มจอด้านบน
  heroHamster: "/img/hero-hamster.png", // 900×760   แฮมสเตอร์นั่งโน้ตบุ๊ก (PNG พื้นใส)
  courseMain: "/img/course-main.jpg", //   840×620   ภาพคอร์สที่สั่งซื้อ
  rec1: "/img/course-1.jpg", //            560×340   คอร์สแนะนำ 1
  rec2: "/img/course-2.jpg", //            560×340   คอร์สแนะนำ 2
};

/** คอร์สที่ลูกค้าเพิ่งซื้อ */
const PURCHASED = {
  title: "วาดภาพดิจิทัล",
  subtitle: "สำหรับมือใหม่",
};

/** คอร์สเรียนแนะนำ */
const RECOMMENDED = [
  { img: IMG.rec1, title: "Procreate", desc: "วาดภาพบน iPad อย่างมืออาชีพ", level: "ระดับกลาง", price: "1,290.-" },
  { img: IMG.rec2, title: "พื้นฐานการถ่ายภาพ", desc: "สำหรับมือใหม่", level: "ระดับเริ่มต้น", price: "990.-" },
];

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/HamsterHubThailand/", icon: "facebook" },
  { name: "YouTube", href: "https://www.hamsterhub.co/", icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/hamsterhub_ig/", icon: "instagram" },
  { name: "LINE", href: "https://page.line.me/jkm4247u", icon: "line" },
];

/** ฝุ่นแสงลอย — ตำแหน่งคงที่ เพื่อให้ผลลัพธ์ตรงกันทุกครั้งที่ render */
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

export default function ThankYouPage() {
  return (
    <>
      {/* ฉากหลังต่อเนื่องทั้งหน้า */}
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

      <div style={{ paddingBottom: 32 }}>
        {/* ═══════════ TOP BAR ═══════════ */}
        <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 }}>
          <div className="wrap" style={{ padding: "26px 22px 0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
                <LogoMark />
                <span style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.12, color: "var(--ink)", letterSpacing: ".01em" }}>
                  HAMSTER
                  <br />
                  HUB
                </span>
              </a>

              <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(245,115,31,.45)",
                    background: "rgba(255,255,255,.6)",
                    color: "var(--brand)",
                  }}
                >
                  <HamsterGlyph size={18} />
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>ไปที่หน้าหลัก</span>
                <Chevron />
              </a>
            </div>
          </div>
        </header>

        {/* ═══════════ HERO ═══════════ */}
        <section className="hero" style={{ ["--img" as string]: `url(${IMG.heroBg})` }}>
          {/* ดวงอาทิตย์นวลหลังแฮมสเตอร์ */}
          <span className="sun" style={{ width: 560, height: 560, right: "4%", top: "12%" }} />
          <span
            className="sun"
            style={{ width: 340, height: 340, left: "-4%", bottom: "6%", animationDelay: "3.5s", opacity: 0.7 }}
          />

          <div className="wrap" style={{ width: "100%" }}>
            <div className="split">
              <div className="rise">
                <h1 className="h1">THANK&nbsp;YOU!</h1>

                <p style={{ margin: "18px 0 0", fontSize: "clamp(20px,2.8vw,27px)", fontWeight: 800, color: "var(--ink)" }}>
                  ขอบคุณที่เลือก <span className="on-brand">Hamster Hub</span>{" "}
                  <span style={{ color: "var(--brand)" }}>♥</span>
                </p>

                <p className="sub" style={{ margin: "18px 0 0" }}>
                  การเรียนรู้ของคุณเริ่มต้นแล้ว
                  <br />
                  เราได้ส่งข้อมูลการสั่งซื้อไปยังอีเมลของคุณแล้ว
                </p>

                <a className="btn" href="#course" style={{ marginTop: 30 }}>
                  เริ่มเรียนเลย
                  <span className="dot">
                    <ArrowRight />
                  </span>
                </a>
              </div>

              {/* แฮมสเตอร์ */}
              <div className="mascot bob" style={{ minHeight: 400 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.heroHamster} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ คอร์สที่คุณสั่งซื้อ ═══════════ */}
        <section className="wrap overlap" id="course" style={{ marginBottom: 22 }}>
          <div className="card sec split">
            <div>
              <p className="eyebrow">คอร์สที่คุณสั่งซื้อ</p>
              <h2 className="h2" style={{ margin: "12px 0 0" }}>
                {PURCHASED.title}
              </h2>
              <p style={{ margin: "4px 0 0", fontSize: "clamp(19px,2.4vw,25px)", fontWeight: 700, color: "var(--body)" }}>
                {PURCHASED.subtitle}
              </p>
              <div className="orn" style={{ marginTop: 22 }}>
                <Spark />
              </div>
            </div>

            <div
              className="photo frame"
              style={{ ["--img" as string]: `url(${IMG.courseMain})`, aspectRatio: "4/3", borderRadius: 18 }}
            />
          </div>
        </section>

        {/* ═══════════ คอร์สเรียนแนะนำ ═══════════ */}
        <section className="wrap" style={{ marginBottom: 22 }}>
          <div className="card sec split-nar">
            <div>
              <h2 className="h2">คอร์สเรียนแนะนำ</h2>
              <p className="sub" style={{ marginTop: 10 }}>
                ต่อยอดการเรียนรู้ของคุณ
              </p>
              <div className="orn" style={{ marginTop: 20 }}>
                <Spark />
              </div>
            </div>

            <div className="two">
              {RECOMMENDED.map((c) => (
                <a
                  key={c.title}
                  href="https://www.hamsterhub.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "1px solid var(--line-soft)",
                    background: "var(--card)",
                    boxShadow: "var(--sh)",
                  }}
                >
                  <div className="photo frame" style={{ ["--img" as string]: `url(${c.img})`, aspectRatio: "16/9" }}>
                    <span className="pill">แนะนำ</span>
                  </div>

                  <div style={{ padding: "16px 17px 17px" }}>
                    <p className="h3">{c.title}</p>
                    <p className="tiny" style={{ margin: "5px 0 0" }}>
                      {c.desc}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6, flex: 1, minWidth: 0 }}>
                        <LevelIcon size={14} />
                        <span className="tiny" style={{ fontSize: 12 }}>{c.level}</span>
                      </span>
                      <span style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)" }}>{c.price}</span>
                      <span className="round">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer className="wrap">
          <div
            className="card"
            style={{
              padding: "28px 36px",
              display: "flex",
              alignItems: "center",
              gap: 22,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ margin: 0, fontSize: 15.5, fontWeight: 600, color: "var(--body)" }}>
                ขอบคุณที่เป็นส่วนหนึ่งของครอบครัว
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 22, fontWeight: 800, color: "var(--brand)" }}>
                Hamster Hub ♥
              </p>
              <p className="tiny" style={{ margin: "6px 0 0" }}>
                มาเรียนรู้ เติบโต และสนุกไปด้วยกันนะ!
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--body)" }}>ติดต่อและติดตามเรา</span>
              <div style={{ display: "flex", gap: 9 }}>
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    className="social"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    <Glyph name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Marks & icons
   ───────────────────────────────────────────── */

/** ตัว H ของโลโก้ */
function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M7 5h7v11.5h12V5h7v30h-7V23.5H14V35H7z" fill="var(--brand)" />
    </svg>
  );
}

function HamsterGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.6" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="28" cy="12" r="4.6" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="23" r="11" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="16" cy="21.5" r="1.7" fill="currentColor" />
      <circle cx="24" cy="21.5" r="1.7" fill="currentColor" />
      <path d="M20 26v1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 29c.9.9 1.9 1.3 3 1.3s2.1-.4 3-1.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** ประกายเล็ก ๆ ใช้เป็นหัวเส้นคั่น */
function Spark() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2.5l2 6.2 6.2 2-6.2 2-2 6.2-2-6.2-6.2-2 6.2-2z" fill="var(--brand)" opacity=".85" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** แท่งบอกระดับความยาก */
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
  switch (name) {
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
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
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
