/* ─────────────────────────────────────────────
   HamsterHub — thank-you page
   Layout after the supplied reference, brand colours from HamStore.
   Content sourced from hamsterhub.co
   ───────────────────────────────────────────── */

/** ข้อมูลกิจกรรม — รูปแบบการแข่ง Game Jam */
const ACTIVITY = [
  { label: "ระยะเวลา", value: "72 ชั่วโมง", note: "3 วันเต็ม", icon: "clock" },
  { label: "ขนาดทีม", value: "2 – 5 คน", note: "จับทีมเองได้", icon: "team" },
  { label: "รูปแบบ", value: "ออนไลน์", note: "ผ่าน Discord", icon: "chat" },
  { label: "อายุผู้เข้าร่วม", value: "10 – 22 ปี", note: "เปิดรับทุกระดับ", icon: "spark" },
] as const;

const ACTIVITY_NOTES = [
  "พัฒนาเกมจากหัวข้อที่กำหนดให้ ภายในเวลาที่จำกัด",
  "ใช้ Game Engine ใดก็ได้ — Unity, Unreal หรือ Godot",
  "ฝึกทำงานเป็นทีม แก้ปัญหาเฉพาะหน้า และปิดงานให้จบตามเวลา",
  "รอบ Specials จะย่นเวลาเหลือ 48 ชั่วโมง",
];

/** คอร์สอื่น ๆ ที่น่าสนใจ */
const COURSES = [
  {
    tag: "รายเดือน",
    title: "Starways",
    desc:
      "ปูพื้นฐานสาย Game หรือ Data Science ให้แน่น แล้วต่อยอดสู่โปรเจกต์ระดับประเทศ มาพร้อมระบบ House ที่มีพี่ Mentor ดูแลตลอดทาง ยกเลิกได้ทุกเมื่อ",
    href: "https://www.hamsterhub.co/starways",
    accent: "#f2681f",
  },
  {
    tag: "แข่งขัน",
    title: "Hamster Hub Game Jam",
    desc:
      "สนามแข่งพัฒนาเกมจากหัวข้อที่กำหนด ภายใน 72 ชั่วโมง รวมพลคนสร้างเกมจากทั่วประเทศไว้ในที่เดียว",
    href: "https://www.hamsterhub.co/gamejam",
    accent: "#e0491a",
  },
  {
    tag: "ค่าย",
    title: "Smart Camp",
    desc:
      "ค่าย 3 วัน 2 คืน เรียนรู้กระบวนการออกแบบและสร้างเกมด้วย Unity พร้อมแนะนำเส้นทางต่อยอดสำหรับคนอยากทำเกมเป็นอาชีพ",
    href: "https://www.hamsterhub.co/",
    accent: "#f5902b",
  },
  {
    tag: "คอร์ส",
    title: "Roblox Creator Camp",
    desc:
      "เริ่มสร้างเกมบน Roblox Studio ตั้งแต่ศูนย์ เหมาะกับคนเพิ่งเริ่ม อยากมีเกมเป็นของตัวเองไว้อวดเพื่อน",
    href: "https://www.hamsterhub.co/course/378",
    accent: "#f2681f",
  },
  {
    tag: "คอร์ส",
    title: "Unity — First Person Shooting",
    desc:
      "ลงมือสร้างเกมแนว FPS ด้วย Unity ตั้งแต่ระบบการเคลื่อนที่ การยิง ไปจนถึงการประกอบฉากให้เล่นได้จริง",
    href: "https://www.hamsterhub.co/course/719",
    accent: "#e0491a",
  },
  {
    tag: "คอร์ส",
    title: "Python พื้นฐานแน่น",
    desc:
      "เขียนโปรแกรมภาษา Python แบบปูพื้นฐานให้แน่น เป็นบันไดขั้นแรกสู่สาย Data Science และงานพัฒนาอื่น ๆ",
    href: "https://www.hamsterhub.co/course/1027",
    accent: "#f5902b",
  },
] as const;

/** เวทีระดับประเทศที่ชาว HamsterHub ไปลุยกัน */
const STAGES = ["NSC", "YSC", "Thailand Game Show", "Global Game Jam", "The New Gen"];

/** เป้าหมายในอนาคต */
const ROADMAP = [
  {
    n: "01",
    title: "ปูพื้นฐานให้แน่น",
    desc: "เริ่มจากคอร์สที่ใช่ ไม่ว่าจะเป็นสาย Game หรือ Data Science เก็บพื้นฐานให้ครบก่อนลงสนามจริง",
  },
  {
    n: "02",
    title: "ประชุม Standup ทุกวัน",
    desc:
      "ฝึกรายงานความคืบหน้าสั้น ๆ ทุกวันแบบทีมพัฒนามืออาชีพ — เมื่อวานทำอะไร วันนี้จะทำอะไร ติดปัญหาตรงไหน ทำให้งานไม่ค้างและทีมเห็นภาพตรงกัน",
  },
  {
    n: "03",
    title: "ลงมือทำโปรเจกต์จริง",
    desc: "แปลงสิ่งที่เรียนเป็นผลงานของตัวเอง มีพี่ Mentor ในระบบ House คอยรีวิวและดันให้ไปต่อจนจบโปรเจกต์",
  },
  {
    n: "04",
    title: "ต่อยอดสู่เวทีระดับประเทศ",
    desc:
      "เอาผลงานไปลุยเวทีจริงอย่าง NSC, YSC, Thailand Game Show และ Global Game Jam พร้อมสะสมเป็นพอร์ตโฟลิโอ",
  },
] as const;

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/HamsterHubThailand/" },
  { label: "Instagram", href: "https://www.instagram.com/hamsterhub_ig/" },
  { label: "LINE", href: "https://page.line.me/jkm4247u" },
  { label: "X", href: "https://x.com/HamsterHub_" },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ══════════════ HEADER ══════════════ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,0.86)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line-soft)",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "13px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <a
            href="https://www.hamsterhub.co/"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            <HamsterMark />
            <span style={{ fontWeight: 800, fontSize: 16.5, color: "var(--ink)" }}>HamsterHub</span>
          </a>
          <a className="link-more" href="https://www.hamsterhub.co/" style={{ textDecoration: "none" }}>
            กลับหน้าแรก <Chevron />
          </a>
        </div>
      </header>

      <main style={{ position: "relative" }}>
        <div className="haze" />

        {/* ══════════════ HERO ══════════════ */}
        <section
          style={{
            maxWidth: 780,
            margin: "0 auto",
            padding: "84px 24px 76px",
            textAlign: "center",
          }}
        >
          <div className="rise bob" style={{ display: "flex", justifyContent: "center" }}>
            <SuccessBadge />
          </div>

          <p className="eyebrow rise" style={{ margin: "28px 0 0", animationDelay: "0.08s" }}>
            Registration Complete
          </p>

          <h1
            className="display rise"
            style={{ fontSize: "clamp(38px, 7.4vw, 68px)", margin: "14px 0 0", animationDelay: "0.15s" }}
          >
            ขอบคุณที่ลงทะเบียน
            <br />
            กับ <span style={{ color: "var(--brand)" }}>HamsterHub</span>
          </h1>

          <p
            className="lead rise"
            style={{ maxWidth: 520, margin: "22px auto 0", animationDelay: "0.22s" }}
          >
            ทีมงานจะติดต่อกลับพร้อมรายละเอียดกิจกรรมให้เร็ว ๆ นี้
            ระหว่างนี้มาดูกันว่ามีอะไรรออยู่บ้าง
          </p>

          <div
            className="rise"
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 32,
              animationDelay: "0.3s",
            }}
          >
            <a className="btn btn-primary" href="#activity">
              ดูข้อมูลกิจกรรม
            </a>
            <a className="btn btn-ghost" href="#courses">
              คอร์สอื่น ๆ
            </a>
          </div>
        </section>

        {/* ══════════════ ข้อมูลกิจกรรม ══════════════ */}
        <Section id="activity" eyebrow="The Event" title="ข้อมูลกิจกรรม" sub="รูปแบบการแข่งขัน Game Jam ที่คุณลงทะเบียนไว้">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(212px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {ACTIVITY.map((a) => (
              <div key={a.label} className="tile" style={{ padding: "24px 22px" }}>
                <Glyph name={a.icon} />
                <p style={{ margin: "16px 0 6px", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>
                  {a.label}
                </p>
                <p style={{ margin: 0, fontSize: 21, fontWeight: 800, color: "var(--ink)", lineHeight: 1.3 }}>
                  {a.value}
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted)" }}>{a.note}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: "28px 30px" }}>
            <p style={{ margin: "0 0 18px", fontSize: 16, fontWeight: 800, color: "var(--ink)" }}>
              กติกาโดยสรุป
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 14 }}>
              {ACTIVITY_NOTES.map((n) => (
                <li key={n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 2 }}>
                    <CheckDot />
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.8, color: "var(--body)" }}>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ══════════════ คอร์สอื่น ๆ ══════════════ */}
        <Section id="courses" eyebrow="Keep Going" title="คอร์สอื่น ๆ ที่น่าสนใจ" sub="ต่อยอดความสนุกได้ที่ hamsterhub.co">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 20,
            }}
          >
            {COURSES.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: 96,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${c.accent}1f, ${c.accent}08)`,
                    borderBottom: "1px solid var(--line-soft)",
                  }}
                >
                  <HamsterMark size={40} color={c.accent} />
                </div>

                <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span className="chip" style={{ alignSelf: "flex-start", marginBottom: 12 }}>
                    {c.tag}
                  </span>
                  <h3 style={{ margin: "0 0 9px", fontSize: 18, fontWeight: 800, color: "var(--ink)" }}>
                    {c.title}
                  </h3>
                  <p style={{ margin: "0 0 18px", fontSize: 14.5, lineHeight: 1.8, color: "var(--body)", flex: 1 }}>
                    {c.desc}
                  </p>
                  <span className="link-more">
                    ดูรายละเอียด <Chevron />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* เวทีระดับประเทศ */}
          <div className="tile" style={{ marginTop: 20, padding: "28px 30px", textAlign: "center" }}>
            <p style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 800, color: "var(--ink)" }}>
              เวทีระดับประเทศ
            </p>
            <p style={{ margin: "0 0 18px", fontSize: 14.5, lineHeight: 1.8, color: "var(--body)" }}>
              ชาว HamsterHub ไปลุยกันมาแล้วบนเวทีเหล่านี้
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9, justifyContent: "center" }}>
              {STAGES.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════ เป้าหมายในอนาคต ══════════════ */}
        <Section eyebrow="The Road Ahead" title="เป้าหมายในอนาคต" sub="เส้นทางที่เราอยากพาคุณไปให้ถึง">
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            {ROADMAP.map((r, i) => (
              <div key={r.n} style={{ display: "flex", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--brand)",
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 800,
                      boxShadow: "0 5px 14px rgba(242,104,31,0.32)",
                    }}
                  >
                    {r.n}
                  </div>
                  {i < ROADMAP.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 42, background: "var(--brand-soft)", margin: "6px 0" }} />
                  )}
                </div>

                <div style={{ paddingBottom: i < ROADMAP.length - 1 ? 34 : 0, paddingTop: 8 }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 800, color: "var(--ink)" }}>
                    {r.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.85, color: "var(--body)" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══════════════ CTA ══════════════ */}
        <section style={{ padding: "0 24px 80px" }}>
          <div
            className="tile"
            style={{ maxWidth: 1080, margin: "0 auto", padding: "50px 32px", textAlign: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <HamsterMark size={52} />
            </div>
            <h2 className="display" style={{ fontSize: "clamp(23px, 3.6vw, 32px)", margin: "0 0 12px" }}>
              พร้อมลุยต่อหรือยัง?
            </h2>
            <p style={{ margin: "0 auto 26px", maxWidth: 440, fontSize: 15.5, lineHeight: 1.85, color: "var(--body)" }}>
              เข้าไปดูคอร์สและกิจกรรมทั้งหมด แล้วเลือกเส้นทางที่ใช่สำหรับคุณ
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a
                className="btn btn-primary"
                href="https://www.hamsterhub.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ไปที่ HamsterHub.co
              </a>
              <a
                className="btn btn-ghost"
                href="https://page.line.me/jkm4247u"
                target="_blank"
                rel="noopener noreferrer"
              >
                ทักแชทสอบถาม
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer style={{ borderTop: "1px solid var(--line-soft)", padding: "40px 24px 52px" }}>
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <HamsterMark size={30} />
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: "var(--ink)" }}>HamsterHub</p>
                <p style={{ margin: "1px 0 0", fontSize: 13, color: "var(--muted)" }}>
                  ชมรมเท่ ๆ สำหรับคนครีเอทีฟ
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "var(--body)",
                    textDecoration: "none",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <p
            style={{
              maxWidth: 1080,
              margin: "26px auto 0",
              fontSize: 12.5,
              color: "var(--muted)",
              textAlign: "center",
            }}
          >
            © 2026 Hamster Hub · All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

/* ─────────────────────────────────────────────
   Building blocks
   ───────────────────────────────────────────── */

function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: "56px 24px 40px", maxWidth: 1080, margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: 36 }}>
        <p className="eyebrow" style={{ margin: "0 0 12px" }}>
          {eyebrow}
        </p>
        <h2 className="display" style={{ fontSize: "clamp(26px, 4.4vw, 40px)", margin: "0 0 12px" }}>
          {title}
        </h2>
        <p style={{ margin: 0, fontSize: 15.5, color: "var(--muted)" }}>{sub}</p>
      </header>
      {children}
    </section>
  );
}

function Chevron() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckDot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="var(--brand-soft)" />
      <path
        d="M7.5 12.4l3.1 3.1 6-6.4"
        stroke="var(--brand)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Orange check seal for the hero. */
function SuccessBadge() {
  return (
    <div
      style={{
        width: 86,
        height: 86,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background: "var(--brand)",
        boxShadow: "0 14px 34px rgba(242,104,31,0.34)",
      }}
    >
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** Simple hamster face mark. */
function HamsterMark({ size = 30, color = "var(--brand)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="11" cy="10.5" r="5.2" stroke={color} strokeWidth="2.4" />
      <circle cx="29" cy="10.5" r="5.2" stroke={color} strokeWidth="2.4" />
      <circle cx="20" cy="22" r="12.5" stroke={color} strokeWidth="2.4" />
      <circle cx="15.4" cy="20" r="1.9" fill={color} />
      <circle cx="24.6" cy="20" r="1.9" fill={color} />
      <path d="M20 25v1.6" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M16.6 28.4c1 1 2.1 1.5 3.4 1.5s2.4-.5 3.4-1.5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Line glyphs for the activity tiles. */
function Glyph({ name }: { name: "clock" | "team" | "chat" | "spark" }) {
  const wrap = {
    width: 42,
    height: 42,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(16,14,12,0.07)",
  } as const;

  const svg: React.SVGProps<SVGSVGElement> = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand)",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  return (
    <div style={wrap}>
      {name === "clock" && (
        <svg {...svg}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      )}
      {name === "team" && (
        <svg {...svg}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3 20a6 6 0 0 1 12 0" />
          <path d="M16 5.5a3.2 3.2 0 0 1 0 6M17.5 20a6 6 0 0 0-2.2-4.6" />
        </svg>
      )}
      {name === "chat" && (
        <svg {...svg}>
          <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
          <path d="M9 11h6M9 15h4" />
        </svg>
      )}
      {name === "spark" && (
        <svg {...svg}>
          <path d="M12 3l2.2 5.6L20 10.8l-5.8 2.2L12 19l-2.2-6L4 10.8l5.8-2.2z" />
        </svg>
      )}
    </div>
  );
}
