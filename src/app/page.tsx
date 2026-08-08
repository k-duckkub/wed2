/* ═════════════════════════════════════════════
   HamsterHub — หน้า Thank You
   ═════════════════════════════════════════════ */

/**
 * รูปทั้งหมดของหน้านี้อยู่ตรงนี้ที่เดียว
 * วางไฟล์ลง /public/img/ ตามชื่อด้านล่าง แล้วรูปจะขึ้นเอง
 * ยังไม่มีไฟล์ก็ไม่พัง — ช่องนั้นจะเป็นพื้นส้มอ่อนรอไว้
 */
const IMG = {
  heroHamster: "/img/hero-hamster.png", // 900×760  แฮมสเตอร์นั่งโน้ตบุ๊ก (PNG พื้นใส)
  courseMain: "/img/course-main.jpg", //   840×620  ภาพคอร์สที่สั่งซื้อ
  rec1: "/img/course-1.jpg", //            560×340  คอร์สแนะนำ 1
  rec2: "/img/course-2.jpg", //            560×340  คอร์สแนะนำ 2
  footHamster: "/img/foot-hamster.png", // 340×340  แฮมสเตอร์โบกมือ (PNG พื้นใส)
};

/** คอร์สที่ลูกค้าเพิ่งซื้อ */
const PURCHASED = {
  title: "วาดภาพดิจิทัล",
  subtitle: "สำหรับมือใหม่",
  level: "ระดับเริ่มต้น",
  perks: [
    { icon: "play", label: "เข้าเรียนได้ทันที" },
    { icon: "infinity", label: "เรียนได้ไม่จำกัด" },
    { icon: "badge", label: "ใบประกาศนียบัตร" },
  ],
};

/** คอร์สเรียนแนะนำ */
const RECOMMENDED = [
  { img: IMG.rec1, title: "Procreate", desc: "วาดภาพบน iPad อย่างมืออาชีพ", level: "ระดับกลาง", price: "1,290.-" },
  { img: IMG.rec2, title: "พื้นฐานการถ่ายภาพ", desc: "สำหรับมือใหม่", level: "ระดับเริ่มต้น", price: "990.-" },
];

/** กิจกรรมสำหรับคุณ */
const ACTIVITIES = [
  { icon: "trophy", label: "CHALLENGE", l1: "ส่งผลงาน", l2: "ประจำเดือน" },
  { icon: "people", label: "WORKSHOP", l1: "เวิร์กช็อปสด", l2: "จากผู้เชี่ยวชาญ" },
  { icon: "chat", label: "COMMUNITY", l1: "แลกเปลี่ยนผลงาน", l2: "และไอเดีย" },
  { icon: "gift", label: "SPECIAL EVENT", l1: "สิทธิพิเศษสำหรับ", l2: "สมาชิกเท่านั้น" },
];

/** Hamster Hub ในอนาคต */
const FUTURE = [
  { icon: "sprout", label: "NOW", l1: "คอร์สออนไลน์", l2: "และกิจกรรมสำหรับผู้เรียน", now: true },
  { icon: "people", label: "NEXT", l1: "Community & Workshop", l2: "พื้นที่เรียนรู้และแลกเปลี่ยน" },
  { icon: "gift", label: "COMING SOON", l1: "คอร์สใหม่", l2: "และกิจกรรมพิเศษ" },
  { icon: "rocket", label: "THE FUTURE", l1: "Ecosystem การเรียนรู้", l2: "ที่ครบจบในที่เดียว" },
];

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/HamsterHubThailand/", icon: "facebook" },
  { name: "YouTube", href: "https://www.hamsterhub.co/", icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/hamsterhub_ig/", icon: "instagram" },
  { name: "LINE", href: "https://page.line.me/jkm4247u", icon: "line" },
];

export default function ThankYouPage() {
  return (
    <div style={{ paddingBottom: 28 }}>
      {/* ═══════════ TOP BAR ═══════════ */}
      <header className="wrap" style={{ padding: "26px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
            <LogoMark />
            <span style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.12, color: "var(--ink)", letterSpacing: ".01em" }}>
              HAMSTER
              <br />
              HUB
            </span>
          </a>

          <a
            href="https://www.hamsterhub.co/"
            style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "1.5px solid rgba(245,115,31,.4)",
                color: "var(--brand)",
              }}
            >
              <HamsterGlyph size={17} />
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>ไปที่หน้าหลัก</span>
            <Chevron />
          </a>
        </div>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section className="wrap" style={{ position: "relative", paddingTop: 34, paddingBottom: 40 }}>
        <div className="split" style={{ alignItems: "center" }}>
          <div className="rise">
            <h1 className="h1">THANK&nbsp;YOU!</h1>

            <p style={{ margin: "16px 0 0", fontSize: "clamp(19px,2.6vw,25px)", fontWeight: 800, color: "var(--ink)" }}>
              ขอบคุณที่เลือก <span className="on-brand">Hamster Hub</span>{" "}
              <span style={{ color: "var(--brand)" }}>♥</span>
            </p>

            <p className="sub" style={{ margin: "16px 0 0" }}>
              การเรียนรู้ของคุณเริ่มต้นแล้ว
              <br />
              เราได้ส่งข้อมูลการสั่งซื้อไปยังอีเมลของคุณแล้ว
            </p>

            <a className="btn" href="#course" style={{ marginTop: 26 }}>
              เริ่มเรียนเลย
              <span className="dot">
                <ArrowRight />
              </span>
            </a>
          </div>

          {/* แฮมสเตอร์ */}
          <div className="mascot bob" style={{ minHeight: 340 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.heroHamster} alt="" />
          </div>
        </div>
      </section>

      {/* ═══════════ คอร์สที่คุณสั่งซื้อ ═══════════ */}
      <section className="wrap" id="course" style={{ marginBottom: 20 }}>
        <div className="card sec split">
          <div>
            <p className="eyebrow">คอร์สที่คุณสั่งซื้อ</p>
            <h2 className="h2" style={{ margin: "12px 0 0" }}>
              {PURCHASED.title}
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: "clamp(19px,2.4vw,24px)", fontWeight: 700, color: "var(--body)" }}>
              {PURCHASED.subtitle}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "22px 0 0" }}>
              <LevelIcon />
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--body)" }}>{PURCHASED.level}</span>
            </div>

            <div style={{ display: "flex", gap: 26, marginTop: 26, flexWrap: "wrap" }}>
              {PURCHASED.perks.map((p) => (
                <div key={p.label} style={{ textAlign: "center", width: 86 }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span className="ring">
                      <Glyph name={p.icon} />
                    </span>
                  </div>
                  <p className="tiny" style={{ marginTop: 9, fontSize: 12 }}>
                    {p.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="photo"
            style={{ ["--img" as string]: `url(${IMG.courseMain})`, aspectRatio: "4/3", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* ═══════════ คอร์สเรียนแนะนำ ═══════════ */}
      <section className="wrap" style={{ marginBottom: 20 }}>
        <div className="card sec split-nar">
          <div>
            <h2 className="h2">คอร์สเรียนแนะนำ</h2>
            <p className="sub" style={{ marginTop: 10 }}>
              ต่อยอดการเรียนรู้ของคุณ
            </p>
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
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid var(--line-soft)",
                  background: "var(--card)",
                }}
              >
                <div className="photo" style={{ ["--img" as string]: `url(${c.img})`, aspectRatio: "16/9" }}>
                  <span className="pill">แนะนำ</span>
                </div>

                <div style={{ padding: "15px 16px 16px" }}>
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

      {/* ═══════════ กิจกรรมสำหรับคุณ ═══════════ */}
      <section className="wrap" style={{ marginBottom: 20 }}>
        <div className="card sec split-nar">
          <div>
            <h2 className="h2">
              กิจกรรม
              <br />
              สำหรับคุณ
            </h2>
            <p className="tiny" style={{ margin: "14px 0 0" }}>
              อัปเดตกิจกรรมใหม่ ๆ
              <br />
              เพื่อการเรียนรู้และแลกเปลี่ยน
            </p>
            <a className="linkmore" href="https://www.hamsterhub.co/" style={{ marginTop: 16 }}>
              ดูทั้งหมด <Chevron />
            </a>
          </div>

          <div className="four">
            {ACTIVITIES.map((a, i) => (
              <div
                key={a.label}
                style={{
                  textAlign: "center",
                  padding: "0 10px",
                  borderLeft: i === 0 ? "none" : "1px solid var(--line-soft)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span className="disc">
                    <Glyph name={a.icon} size={26} />
                  </span>
                </div>
                <p style={{ margin: "13px 0 0", fontSize: 13, fontWeight: 800, letterSpacing: ".04em", color: "var(--brand)" }}>
                  {a.label}
                </p>
                <p className="tiny" style={{ margin: "7px 0 0", fontSize: 12.5 }}>
                  {a.l1}
                  <br />
                  {a.l2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Hamster Hub ในอนาคต ═══════════ */}
      <section className="wrap" style={{ marginBottom: 20 }}>
        <div className="card sec split-nar">
          <div>
            <h2 className="h2">
              Hamster Hub
              <br />
              <span className="on-brand">ในอนาคต</span>
            </h2>
            <p className="tiny" style={{ margin: "14px 0 0" }}>
              เรากำลังสร้างระบบนิเวศการเรียนรู้
              <br />
              ที่มากกว่าคอร์สออนไลน์
              <br />
              เพื่อให้คุณเติบโตได้ในทุกเส้นทาง
            </p>
          </div>

          <div className="four rail">
            {FUTURE.map((f) => (
              <div key={f.label} style={{ textAlign: "center", padding: "0 6px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className="disc"
                    style={{
                      background: f.now ? "var(--card)" : "var(--brand-soft)",
                      border: f.now ? "2px solid var(--brand)" : "2px solid transparent",
                      boxShadow: f.now ? "0 6px 18px rgba(245,115,31,.26)" : "none",
                    }}
                  >
                    <Glyph name={f.icon} size={26} />
                  </span>
                </div>
                <p style={{ margin: "13px 0 0", fontSize: 13, fontWeight: 800, letterSpacing: ".04em", color: "var(--ink)" }}>
                  {f.label}
                </p>
                <p className="tiny" style={{ margin: "7px 0 0", fontSize: 12.5 }}>
                  {f.l1}
                  <br />
                  {f.l2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="wrap">
        <div
          className="card"
          style={{
            padding: "26px 34px",
            display: "flex",
            alignItems: "center",
            gap: 22,
            flexWrap: "wrap",
          }}
        >
          <div className="mascot" style={{ width: 104, height: 104, flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.footHamster} alt="" />
          </div>

          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ margin: 0, fontSize: 15.5, fontWeight: 600, color: "var(--body)" }}>
              ขอบคุณที่เป็นส่วนหนึ่งของครอบครัว
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 21, fontWeight: 800, color: "var(--brand)" }}>
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
  const s = {
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
    case "play":
      return (
        <svg {...s}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "infinity":
      return (
        <svg {...s}>
          <path d="M6.8 8.5c2 0 3 1.6 5.2 3.5s3.2 3.5 5.2 3.5a3.5 3.5 0 1 0 0-7c-2 0-3 1.6-5.2 3.5s-3.2 3.5-5.2 3.5a3.5 3.5 0 1 1 0-7z" />
        </svg>
      );
    case "badge":
      return (
        <svg {...s}>
          <path d="M6 3h12v11l-6 3.5L6 14z" />
          <path d="M9.5 8.8l1.9 1.9 3.3-3.4" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...s}>
          <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
          <path d="M7 5.5H4.5V8a3 3 0 0 0 3 3M17 5.5h2.5V8a3 3 0 0 1-3 3" />
          <path d="M12 14v3.5M8.5 20.5h7" />
        </svg>
      );
    case "people":
      return (
        <svg {...s}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9.5" r="2.3" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 19a4.6 4.6 0 0 1 4.5-4.4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...s}>
          <path d="M20.5 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-3.5 2.4V11.5A7.5 7.5 0 0 1 11 4h2a7.5 7.5 0 0 1 7.5 7.5z" />
          <path d="M8.6 11h6.8M8.6 14.4h4.2" />
        </svg>
      );
    case "gift":
      return (
        <svg {...s}>
          <rect x="3" y="9" width="18" height="4" rx="1" />
          <path d="M4.6 13v7.4h14.8V13M12 9v11.4" />
          <path d="M12 9S10.6 4 8.2 4a2.1 2.1 0 0 0 0 5M12 9s1.4-5 3.8-5a2.1 2.1 0 0 1 0 5" />
        </svg>
      );
    case "sprout":
      return (
        <svg {...s}>
          <path d="M12 20v-7" />
          <path d="M12 13c0-3.4-2.4-5.6-6-5.6 0 3.4 2.4 5.6 6 5.6z" />
          <path d="M12 13c0-3.9 2.4-6.4 6-6.4 0 3.9-2.4 6.4-6 6.4z" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...s}>
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
        <svg {...s} strokeWidth={1.9}>
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
