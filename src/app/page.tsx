/* ─────────────────────────────────────────────
   HamsterHub — thank-you page
   Content sourced from hamsterhub.co
   ───────────────────────────────────────────── */

const MUTED = "var(--muted)";

/** ข้อมูลกิจกรรม — รูปแบบการแข่ง Game Jam */
const ACTIVITY = [
  { label: "ระยะเวลา", value: "72 ชั่วโมง (3 วัน)", icon: "clock" },
  { label: "ขนาดทีม", value: "2 – 5 คน", icon: "team" },
  { label: "รูปแบบ", value: "ออนไลน์ผ่าน Discord", icon: "portal" },
  { label: "อายุผู้เข้าร่วม", value: "10 – 22 ปี", icon: "scroll" },
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
    tag: "Subscription",
    title: "Starways",
    desc:
      "คอร์สรายเดือน ยกเลิกได้ทุกเมื่อ ปูพื้นฐานสาย Game หรือ Data Science ให้แน่น แล้วต่อยอดสู่โปรเจกต์ระดับประเทศ มาพร้อมระบบ House ที่มีพี่ Mentor ดูแลตลอดทาง",
    href: "https://www.hamsterhub.co/starways",
  },
  {
    tag: "Competition",
    title: "Hamster Hub Game Jam",
    desc:
      "สนามแข่งพัฒนาเกมจากหัวข้อที่กำหนด ภายใน 72 ชั่วโมง รวมพลคนสร้างเกมจากทั่วประเทศไว้ในที่เดียว",
    href: "https://www.hamsterhub.co/gamejam",
  },
  {
    tag: "Camp",
    title: "Smart Camp",
    desc:
      "ค่าย 3 วัน 2 คืน เรียนรู้กระบวนการออกแบบและสร้างเกมด้วย Unity พร้อมแนะนำเส้นทางต่อยอดสำหรับคนอยากทำเกมเป็นอาชีพ",
    href: "https://www.hamsterhub.co/",
  },
  {
    tag: "Course",
    title: "Roblox Creator Camp",
    desc:
      "เริ่มสร้างเกมบน Roblox Studio ตั้งแต่ศูนย์ เหมาะกับคนเพิ่งเริ่ม อยากมีเกมเป็นของตัวเองไว้อวดเพื่อน",
    href: "https://www.hamsterhub.co/course/378",
  },
  {
    tag: "Course",
    title: "Unity — First Person Shooting",
    desc:
      "ลงมือสร้างเกมแนว FPS ด้วย Unity ตั้งแต่ระบบการเคลื่อนที่ การยิง ไปจนถึงการประกอบฉากให้เล่นได้จริง",
    href: "https://www.hamsterhub.co/course/719",
  },
  {
    tag: "Course",
    title: "Python พื้นฐานแน่น",
    desc:
      "เขียนโปรแกรมภาษา Python แบบปูพื้นฐานให้แน่น เป็นบันไดขั้นแรกสู่สาย Data Science และงานพัฒนาอื่น ๆ",
    href: "https://www.hamsterhub.co/course/1027",
  },
] as const;

/** เวทีระดับประเทศที่ชาว HamsterHub ไปลุยกัน */
const STAGES = ["NSC", "YSC", "Thailand Game Show", "Global Game Jam", "The New Gen"];

/** เป้าหมายในอนาคต */
const ROADMAP = [
  {
    phase: "I",
    title: "ปูพื้นฐานให้แน่น",
    desc:
      "เริ่มจากคอร์สที่ใช่ ไม่ว่าจะเป็นสาย Game หรือ Data Science เก็บพื้นฐานให้ครบก่อนลงสนามจริง",
  },
  {
    phase: "II",
    title: "ประชุม Standup ทุกวัน",
    desc:
      "ฝึกรายงานความคืบหน้าสั้น ๆ ทุกวันแบบทีมพัฒนามืออาชีพ — เมื่อวานทำอะไร วันนี้จะทำอะไร ติดปัญหาตรงไหน ทำให้งานไม่ค้างและทีมเห็นภาพตรงกัน",
  },
  {
    phase: "III",
    title: "ลงมือทำโปรเจกต์จริง",
    desc:
      "แปลงสิ่งที่เรียนเป็นผลงานของตัวเอง มีพี่ Mentor ในระบบ House คอยรีวิวและดันให้ไปต่อจนจบโปรเจกต์",
  },
  {
    phase: "IV",
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
    <main>
      {/* ══════════════ HERO ══════════════ */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "92px 24px 76px",
        }}
      >
        <div className="rise">
          <Seal />
        </div>

        <p className="eyebrow rise" style={{ margin: "32px 0 0", animationDelay: "0.1s" }}>
          Registration Complete
        </p>

        <h1
          className="display rise"
          style={{
            fontSize: "clamp(42px, 9.4vw, 100px)",
            lineHeight: 1,
            margin: "16px 0 0",
            animationDelay: "0.18s",
          }}
        >
          Thank You
        </h1>

        <div className="rule rise" style={{ margin: "28px 0", animationDelay: "0.26s" }}>
          <Diamond />
        </div>

        <p
          className="rise"
          style={{
            maxWidth: 580,
            margin: 0,
            fontSize: 16,
            lineHeight: 1.95,
            color: MUTED,
            animationDelay: "0.32s",
          }}
        >
          ขอบคุณที่ลงทะเบียนกับ <strong style={{ color: "var(--gold)", fontWeight: 600 }}>HamsterHub</strong>
          <br />
          ทีมงานจะติดต่อกลับพร้อมรายละเอียดกิจกรรมให้เร็ว ๆ นี้
          <br />
          ระหว่างนี้มาดูกันว่ามีอะไรรออยู่บ้าง
        </p>

        <div
          className="rise"
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 38,
            animationDelay: "0.4s",
          }}
        >
          <a className="btn btn-primary" href="#activity">
            ข้อมูลกิจกรรม
          </a>
          <a className="btn btn-ghost" href="#courses">
            คอร์สอื่น ๆ
          </a>
        </div>
      </section>

      {/* ══════════════ ข้อมูลกิจกรรม ══════════════ */}
      <Section id="activity" eyebrow="The Event" title="ข้อมูลกิจกรรม">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(212px, 1fr))",
            gap: 18,
            marginBottom: 26,
          }}
        >
          {ACTIVITY.map((a) => (
            <div
              key={a.label}
              className="panel panel-hover"
              style={{ padding: "26px 20px", textAlign: "center" }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}>
                <Glyph name={a.icon} />
              </div>
              <p className="eyebrow" style={{ margin: "0 0 9px", fontSize: 9.5 }}>
                {a.label}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: "var(--gold-bright)",
                  lineHeight: 1.6,
                }}
              >
                {a.value}
              </p>
            </div>
          ))}
        </div>

        <div className="panel" style={{ padding: "28px 30px" }}>
          <p className="eyebrow" style={{ margin: "0 0 18px" }}>
            How It Works
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 13 }}>
            {ACTIVITY_NOTES.map((n) => (
              <li key={n} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, marginTop: 5 }}>
                  <Diamond size={11} />
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.85, color: MUTED }}>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ══════════════ คอร์สอื่น ๆ ══════════════ */}
      <Section id="courses" eyebrow="Keep Going" title="คอร์สอื่น ๆ ที่น่าสนใจ">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(288px, 1fr))",
            gap: 20,
          }}
        >
          {COURSES.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-hover"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: 112,
                  position: "relative",
                  background:
                    "radial-gradient(72% 100% at 50% 0%, rgba(255,164,86,0.30), transparent 72%), linear-gradient(180deg, #0d3a55, #061c2e)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span className="tag" style={{ position: "absolute", top: 12, left: 12 }}>
                  {c.tag}
                </span>
                <div
                  className="seal-glow"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Diamond size={20} />
                </div>
              </div>

              <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--gold-bright)",
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.85, color: MUTED, flex: 1 }}>
                  {c.desc}
                </p>
                <span className="link-more">
                  ดูรายละเอียด <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* เวทีระดับประเทศ */}
        <div className="panel" style={{ marginTop: 26, padding: "26px 28px", textAlign: "center" }}>
          <p className="eyebrow" style={{ margin: "0 0 8px" }}>
            National Stages
          </p>
          <p style={{ margin: "0 0 18px", fontSize: 14, lineHeight: 1.85, color: MUTED }}>
            ชาว HamsterHub ไปลุยกันมาแล้วบนเวทีเหล่านี้
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {STAGES.map((s) => (
              <span
                key={s}
                style={{
                  padding: "8px 16px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "var(--gold)",
                  border: "1px solid var(--line)",
                  background: "rgba(8,30,48,0.5)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════════ เป้าหมายในอนาคต ══════════════ */}
      <Section eyebrow="The Road Ahead" title="เป้าหมายในอนาคต">
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          {ROADMAP.map((r, i) => (
            <div key={r.phase} style={{ display: "flex", gap: 22 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    display: "grid",
                    placeItems: "center",
                    transform: "rotate(45deg)",
                    border: "1px solid var(--gold)",
                    background:
                      "linear-gradient(135deg, rgba(255,164,86,0.22), rgba(4,20,34,0.9))",
                  }}
                >
                  <span
                    className="display"
                    style={{ transform: "rotate(-45deg)", fontSize: 13, letterSpacing: "0.05em" }}
                  >
                    {r.phase}
                  </span>
                </div>
                {i < ROADMAP.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      flex: 1,
                      minHeight: 48,
                      background: "linear-gradient(180deg, var(--line), transparent)",
                    }}
                  />
                )}
              </div>

              <div style={{ paddingBottom: i < ROADMAP.length - 1 ? 36 : 0, paddingTop: 5 }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 17.5,
                    fontWeight: 700,
                    color: "var(--gold-bright)",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.9, color: MUTED, maxWidth: 560 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer
        style={{
          borderTop: "1px solid var(--line)",
          marginTop: 32,
          padding: "52px 24px 60px",
          textAlign: "center",
        }}
      >
        <div className="rule" style={{ marginBottom: 24 }}>
          <Diamond size={14} />
        </div>

        <p className="display" style={{ fontSize: 22, margin: "0 0 10px" }}>
          HamsterHub
        </p>
        <p style={{ margin: "0 0 26px", fontSize: 13.5, lineHeight: 1.9, color: MUTED }}>
          ชมรมเท่ ๆ สำหรับคนครีเอทีฟ
        </p>

        <div
          style={{
            display: "flex",
            gap: 22,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow"
              style={{ textDecoration: "none", fontSize: 10 }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          className="btn btn-primary"
          href="https://www.hamsterhub.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          กลับสู่ HamsterHub.co
        </a>

        <p style={{ margin: "34px 0 0", fontSize: 11.5, color: "rgba(123,147,165,0.6)" }}>
          © 2026 Hamster Hub · All rights reserved.
        </p>
      </footer>
    </main>
  );
}

/* ─────────────────────────────────────────────
   Building blocks
   ───────────────────────────────────────────── */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: "74px 24px", maxWidth: 1080, margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: 44 }}>
        <p className="eyebrow" style={{ margin: "0 0 13px" }}>
          {eyebrow}
        </p>
        <h2 className="display-th" style={{ fontSize: "clamp(25px, 4.4vw, 40px)", margin: "0 0 20px" }}>
          {title}
        </h2>
        <div className="rule">
          <Diamond size={14} />
        </div>
      </header>
      {children}
    </section>
  );
}

function Diamond({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="var(--gold)" strokeWidth="1.2" opacity="0.9" />
      <path d="M12 7 L17 12 L12 17 L7 12 Z" fill="var(--gold)" opacity="0.55" />
    </svg>
  );
}

/** Crest — diamond frame with a check, wrapped in a glow. */
function Seal() {
  return (
    <div style={{ position: "relative", width: 132, height: 132 }}>
      <div
        className="seal-glow"
        style={{
          position: "absolute",
          inset: -34,
          background: "radial-gradient(circle, rgba(255,166,80,0.42), transparent 66%)",
          filter: "blur(6px)",
        }}
      />
      <svg width="132" height="132" viewBox="0 0 132 132" fill="none" style={{ position: "relative" }}>
        <path d="M66 6 L126 66 L66 126 L6 66 Z" stroke="var(--gold)" strokeWidth="1.2" opacity="0.55" />
        <path
          d="M66 20 L112 66 L66 112 L20 66 Z"
          stroke="var(--gold)"
          strokeWidth="1.4"
          fill="rgba(255,164,86,0.09)"
        />
        {["M66 0 L66 12", "M66 120 L66 132", "M0 66 L12 66", "M120 66 L132 66"].map((d) => (
          <path key={d} d={d} stroke="var(--gold)" strokeWidth="1.2" opacity="0.75" />
        ))}
        <path
          d="M48 66 L61 79 L86 54"
          stroke="var(--gold-bright)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Small line glyphs for the activity panels. */
function Glyph({ name }: { name: "clock" | "team" | "portal" | "scroll" }) {
  const common: React.SVGProps<SVGSVGElement> = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "clock")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    );

  if (name === "team")
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5.5a3.2 3.2 0 0 1 0 6M17.5 20a6 6 0 0 0-2.2-4.6" />
      </svg>
    );

  if (name === "portal")
    return (
      <svg {...common}>
        <ellipse cx="12" cy="12" rx="6" ry="9" />
        <ellipse cx="12" cy="12" rx="9" ry="4.5" />
      </svg>
    );

  return (
    <svg {...common}>
      <path d="M6 4h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
      <path d="M9 9h7M9 13h7M9 17h4" />
    </svg>
  );
}
