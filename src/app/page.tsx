/* ─────────────────────────────────────────────
   HamsterHub — thank-you page
   Content sourced from hamsterhub.co
   ───────────────────────────────────────────── */

const ACTIVITY = [
  { label: "ระยะเวลา", value: "72", unit: "ชั่วโมง" },
  { label: "ขนาดทีม", value: "2–5", unit: "คน" },
  { label: "อายุ", value: "10–22", unit: "ปี" },
  { label: "จัดที่", value: "Discord", unit: "ออนไลน์" },
] as const;

const RULES = [
  "พัฒนาเกมจากหัวข้อที่กำหนดให้ ภายในเวลาที่จำกัด",
  "ใช้ Game Engine ใดก็ได้ — Unity, Unreal หรือ Godot",
  "ฝึกทำงานเป็นทีม แก้ปัญหาเฉพาะหน้า และปิดงานให้จบตามเวลา",
  "รอบ Specials จะย่นเวลาเหลือ 48 ชั่วโมง",
];

/** การ์ดเด่น */
const FEATURED = {
  tag: "รายเดือน · ยกเลิกได้ทุกเมื่อ",
  title: "Starways",
  desc: "ปูพื้นฐานสาย Game หรือ Data Science ให้แน่น แล้วต่อยอดสู่โปรเจกต์ระดับประเทศ",
  points: ["ระบบ House มีพี่ Mentor ดูแล", "ลงมือทำโปรเจกต์จริง", "คอมมูนิตี้คนสายเดียวกัน"],
  href: "https://www.hamsterhub.co/starways",
};

const COURSES = [
  {
    n: "01",
    tag: "แข่งขัน",
    title: "Hamster Hub Game Jam",
    desc: "สนามแข่งพัฒนาเกมจากหัวข้อที่กำหนด ภายใน 72 ชั่วโมง รวมพลคนสร้างเกมจากทั่วประเทศ",
    href: "https://www.hamsterhub.co/gamejam",
    from: "#ff9a3d",
    to: "#e0431a",
  },
  {
    n: "02",
    tag: "แข่งขัน",
    title: "Game Jam Specials",
    desc: "รอบพิเศษที่ย่นเวลาเหลือ 48 ชั่วโมง เร่งเครื่องกว่าเดิม เหมาะกับคนที่อยากลองของ",
    href: "https://www.hamsterhub.co/gamejam",
    from: "#ff7a3d",
    to: "#c9390d",
  },
  {
    n: "03",
    tag: "ค่าย",
    title: "Smart Camp",
    desc: "ค่าย 3 วัน 2 คืน เรียนรู้กระบวนการออกแบบและสร้างเกมด้วย Unity แบบลงมือทำจริง",
    href: "https://www.hamsterhub.co/",
    from: "#ffb457",
    to: "#f2681f",
  },
  {
    n: "04",
    tag: "คอร์ส",
    title: "Roblox Creator Camp",
    desc: "เริ่มสร้างเกมบน Roblox Studio ตั้งแต่ศูนย์ เหมาะกับคนเพิ่งเริ่มอยากมีเกมเป็นของตัวเอง",
    href: "https://www.hamsterhub.co/course/378",
    from: "#ff8a4c",
    to: "#d2430f",
  },
  {
    n: "05",
    tag: "คอร์ส",
    title: "Unity — FPS",
    desc: "สร้างเกมแนว First Person Shooting ตั้งแต่ระบบเคลื่อนที่ การยิง ไปจนถึงประกอบฉากให้เล่นได้จริง",
    href: "https://www.hamsterhub.co/course/719",
    from: "#ffa63d",
    to: "#e85b16",
  },
  {
    n: "06",
    tag: "คอร์ส",
    title: "Python พื้นฐานแน่น",
    desc: "ปูพื้นฐาน Python ให้แน่น เป็นบันไดขั้นแรกสู่สาย Data Science และงานพัฒนาอื่น ๆ",
    href: "https://www.hamsterhub.co/course/1027",
    from: "#ffc36b",
    to: "#f2681f",
  },
] as const;

const STAGES = ["NSC", "YSC", "Thailand Game Show", "Global Game Jam", "The New Gen"];

const ROADMAP = [
  {
    n: "01",
    title: "ปูพื้นฐานให้แน่น",
    desc: "เริ่มจากคอร์สที่ใช่ ไม่ว่าจะเป็นสาย Game หรือ Data Science เก็บพื้นฐานให้ครบก่อนลงสนามจริง",
    highlight: false,
  },
  {
    n: "02",
    title: "ประชุม Standup ทุกวัน",
    desc:
      "ฝึกรายงานความคืบหน้าสั้น ๆ ทุกวันแบบทีมพัฒนามืออาชีพ — เมื่อวานทำอะไร วันนี้จะทำอะไร ติดปัญหาตรงไหน ทำให้งานไม่ค้างและทีมเห็นภาพตรงกัน",
    highlight: true,
  },
  {
    n: "03",
    title: "ลงมือทำโปรเจกต์จริง",
    desc: "แปลงสิ่งที่เรียนเป็นผลงานของตัวเอง มีพี่ Mentor ในระบบ House คอยรีวิวและดันให้ไปต่อจนจบ",
    highlight: false,
  },
  {
    n: "04",
    title: "ต่อยอดสู่เวทีระดับประเทศ",
    desc: "เอาผลงานไปลุยเวทีจริง พร้อมสะสมเป็นพอร์ตโฟลิโอไว้ใช้ต่อในอนาคต",
    highlight: false,
  },
] as const;

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/HamsterHubThailand/" },
  { label: "Instagram", href: "https://www.instagram.com/hamsterhub_ig/" },
  { label: "LINE", href: "https://page.line.me/jkm4247u" },
  { label: "X", href: "https://x.com/HamsterHub_" },
];

const CONFETTI = [
  { l: "6%", d: "0s", c: "#f2681f", r: 2.9 },
  { l: "14%", d: ".5s", c: "#ffb457", r: 3.4 },
  { l: "23%", d: ".2s", c: "#ff9a3d", r: 3.1 },
  { l: "32%", d: ".9s", c: "#d2430f", r: 3.6 },
  { l: "41%", d: ".35s", c: "#ffc36b", r: 3 },
  { l: "50%", d: ".7s", c: "#f2681f", r: 3.3 },
  { l: "59%", d: ".1s", c: "#ff8a4c", r: 3.5 },
  { l: "68%", d: ".8s", c: "#ffb457", r: 2.8 },
  { l: "77%", d: ".45s", c: "#e0431a", r: 3.2 },
  { l: "86%", d: ".25s", c: "#ff9a3d", r: 3.6 },
  { l: "94%", d: ".65s", c: "#ffc36b", r: 3 },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ══════════ HEADER ══════════ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(255,255,255,.82)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--line-soft)",
        }}
      >
        <Wrap style={{ padding: "13px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <HamsterMark />
            <span style={{ fontWeight: 800, fontSize: 16.5, color: "var(--ink)" }}>HamsterHub</span>
          </a>
          <a href="https://www.hamsterhub.co/" style={{ textDecoration: "none" }}>
            <span className="link-more">
              กลับหน้าแรก <Chevron />
            </span>
          </a>
        </Wrap>
      </header>

      <main>
        {/* ══════════ HERO ══════════ */}
        <section style={{ position: "relative", padding: "92px 24px 96px", textAlign: "center", overflow: "hidden" }}>
          <div className="hero-bg">
            <span className="blob" style={{ width: 420, height: 420, left: "-6%", top: "-12%", background: "#ffb98c" }} />
            <span className="blob" style={{ width: 360, height: 360, right: "-4%", top: "4%", background: "#ffd6a5", animationDelay: "4s" }} />
            <span className="blob" style={{ width: 300, height: 300, left: "38%", bottom: "-14%", background: "#ffc9a8", animationDelay: "8s" }} />
          </div>

          <div className="confetti" aria-hidden="true">
            {CONFETTI.map((c) => (
              <i key={c.l} style={{ left: c.l, background: c.c, animationDelay: c.d, animationDuration: `${c.r}s` }} />
            ))}
          </div>

          <div style={{ position: "relative", maxWidth: 820, margin: "0 auto" }}>
            <div className="rise" style={{ display: "flex", justifyContent: "center" }}>
              <div className="seal">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className="eyebrow rise" style={{ margin: "30px 0 0", animationDelay: ".08s" }}>
              Registration Complete
            </p>

            <h1 className="display rise" style={{ fontSize: "clamp(40px, 8vw, 78px)", margin: "14px 0 0", animationDelay: ".15s" }}>
              ขอบคุณที่ลงทะเบียน
              <br />
              <span
                style={{
                  background: "linear-gradient(120deg, var(--brand-lit), var(--brand) 42%, var(--brand-deep))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                กับ HamsterHub
              </span>
            </h1>

            <p className="lead rise" style={{ maxWidth: 520, margin: "24px auto 0", animationDelay: ".22s" }}>
              ทีมงานจะติดต่อกลับพร้อมรายละเอียดกิจกรรมให้เร็ว ๆ นี้ ระหว่างนี้มาดูกันว่ามีอะไรรออยู่บ้าง
            </p>

            <div
              className="rise"
              style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 34, animationDelay: ".3s" }}
            >
              <a className="btn btn-primary" href="#activity">
                ดูข้อมูลกิจกรรม
              </a>
              <a className="btn btn-ghost" href="#courses">
                คอร์สอื่น ๆ
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ ข้อมูลกิจกรรม — ตั๋ว ══════════ */}
        <section id="activity" style={{ background: "var(--bg-cream)", padding: "76px 24px 84px" }}>
          <Wrap>
            <Head eyebrow="The Event" title="ข้อมูลกิจกรรม" sub="รูปแบบการแข่งขัน Game Jam ที่คุณลงทะเบียนไว้" />

            {/* ตั๋วเข้างาน */}
            <div className="ticket" style={{ marginBottom: 22 }}>
              <div style={{ padding: "34px 34px 32px" }}>
                <span className="chip">Game Jam</span>
                <h3 className="display" style={{ fontSize: "clamp(24px,3.4vw,32px)", margin: "14px 0 26px" }}>
                  Hamster Hub Game Jam
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(112px,1fr))", gap: 18 }}>
                  {ACTIVITY.map((a) => (
                    <div key={a.label}>
                      <p style={{ margin: "0 0 6px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>
                        {a.label}
                      </p>
                      <p style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>{a.value}</p>
                      <p style={{ margin: "2px 0 0", fontSize: 13.5, color: "var(--muted)" }}>{a.unit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ticket-stub">
                <div>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "grid", placeItems: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: ".18em", opacity: 0.8 }}>STATUS</p>
                  <p style={{ margin: "6px 0 0", fontSize: 20, fontWeight: 800 }}>ยืนยันแล้ว</p>
                </div>
              </div>
            </div>

            {/* กติกา */}
            <div className="card" style={{ padding: "30px 32px" }}>
              <p className="display" style={{ fontSize: 19, margin: "0 0 20px" }}>
                กติกาโดยสรุป
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 16 }}>
                {RULES.map((r) => (
                  <div key={r} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, marginTop: 1 }}>
                      <CheckDot />
                    </span>
                    <span style={{ fontSize: 15, lineHeight: 1.75, color: "var(--body)" }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Wrap>
        </section>

        {/* ══════════ คอร์สอื่น ๆ ══════════ */}
        <section id="courses" style={{ padding: "80px 24px 84px" }}>
          <Wrap>
            <Head eyebrow="Keep Going" title="คอร์สอื่น ๆ ที่น่าสนใจ" sub="ต่อยอดความสนุกได้ที่ hamsterhub.co" />

            {/* การ์ดเด่น */}
            <a
              href={FEATURED.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover feature"
              style={{ marginBottom: 20, overflow: "hidden", textDecoration: "none" }}
            >
              <div style={{ padding: "38px 36px" }}>
                <span className="chip">{FEATURED.tag}</span>
                <h3 className="display" style={{ fontSize: "clamp(28px,3.8vw,40px)", margin: "14px 0 12px" }}>
                  {FEATURED.title}
                </h3>
                <p style={{ margin: "0 0 20px", fontSize: 15.5, lineHeight: 1.8, color: "var(--body)", maxWidth: 460 }}>
                  {FEATURED.desc}
                </p>
                <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
                  {FEATURED.points.map((p) => (
                    <div key={p} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <CheckDot />
                      <span style={{ fontSize: 14.5, color: "var(--body)" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <span className="link-more">
                  ดูรายละเอียด <Chevron />
                </span>
              </div>

              <div
                style={{
                  position: "relative",
                  minHeight: 240,
                  background: "linear-gradient(150deg, #ffb457, var(--brand) 55%, var(--brand-deep))",
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <Rings />
                <div className="bob" style={{ position: "relative" }}>
                  <HamsterMark size={92} color="#fff" />
                </div>
              </div>
            </a>

            {/* การ์ดที่เหลือ */}
            <div className="grid-3">
              {COURSES.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover"
                  style={{ display: "flex", flexDirection: "column", textDecoration: "none", overflow: "hidden" }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 92,
                      background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "0 18px 12px",
                      overflow: "hidden",
                    }}
                  >
                    <span className="wm">{c.n}</span>
                    <span
                      style={{
                        position: "relative",
                        padding: "5px 12px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,.9)",
                        color: "var(--brand-deep)",
                        fontSize: 11.5,
                        fontWeight: 800,
                      }}
                    >
                      {c.tag}
                    </span>
                  </div>

                  <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ margin: "0 0 9px", fontSize: 18, fontWeight: 800, color: "var(--ink)" }}>{c.title}</h3>
                    <p style={{ margin: "0 0 18px", fontSize: 14.5, lineHeight: 1.78, color: "var(--body)", flex: 1 }}>{c.desc}</p>
                    <span className="link-more">
                      ดูรายละเอียด <Chevron />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Wrap>
        </section>

        {/* ══════════ แถบมืด: เวที + เป้าหมาย ══════════ */}
        <section className="band-dark" style={{ padding: "80px 0 88px" }}>
          {/* marquee */}
          <div style={{ marginBottom: 76 }}>
            <p className="eyebrow" style={{ textAlign: "center", margin: "0 0 22px", color: "var(--brand-lit)" }}>
              National Stages
            </p>
            <div className="marquee">
              <div>
                {[...STAGES, ...STAGES, ...STAGES].map((s, i) => (
                  <span key={`${s}-${i}`} className="stage-pill">
                    {s}
                  </span>
                ))}
              </div>
              <div aria-hidden="true">
                {[...STAGES, ...STAGES, ...STAGES].map((s, i) => (
                  <span key={`b-${s}-${i}`} className="stage-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p style={{ textAlign: "center", margin: "22px 24px 0", fontSize: 14.5, color: "rgba(255,255,255,.55)" }}>
              ชาว HamsterHub ไปลุยกันมาแล้วบนเวทีเหล่านี้
            </p>
          </div>

          <div style={{ padding: "0 24px" }}>
            <Wrap>
              <div style={{ textAlign: "center", marginBottom: 44 }}>
                <p className="eyebrow" style={{ margin: "0 0 12px", color: "var(--brand-lit)" }}>
                  The Road Ahead
                </p>
                <h2 className="display on-dark" style={{ fontSize: "clamp(26px,4.4vw,42px)", margin: "0 0 12px" }}>
                  เป้าหมายในอนาคต
                </h2>
                <p style={{ margin: 0, fontSize: 15.5, color: "rgba(255,255,255,.5)" }}>เส้นทางที่เราอยากพาคุณไปให้ถึง</p>
              </div>

              <div className="grid-2">
                {ROADMAP.map((r) => (
                  <div
                    key={r.n}
                    style={{
                      position: "relative",
                      padding: "28px 26px",
                      borderRadius: 20,
                      border: r.highlight ? "1px solid rgba(242,104,31,.55)" : "1px solid rgba(255,255,255,.1)",
                      background: r.highlight
                        ? "linear-gradient(150deg, rgba(242,104,31,.18), rgba(255,255,255,.03))"
                        : "rgba(255,255,255,.035)",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 13,
                        display: "grid",
                        placeItems: "center",
                        marginBottom: 16,
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#fff",
                        background: r.highlight
                          ? "linear-gradient(135deg, var(--brand-lit), var(--brand-deep))"
                          : "rgba(255,255,255,.1)",
                        boxShadow: r.highlight ? "0 8px 22px rgba(242,104,31,.4)" : "none",
                      }}
                    >
                      {r.n}
                    </div>
                    <h3 style={{ margin: "0 0 9px", fontSize: 18.5, fontWeight: 800, color: "#fff" }}>{r.title}</h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.8, color: "rgba(255,255,255,.62)" }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section style={{ padding: "78px 24px" }}>
          <Wrap
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 30,
              padding: "58px 32px",
              textAlign: "center",
              background: "linear-gradient(140deg, var(--brand-lit), var(--brand) 46%, var(--brand-deep))",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <Rings />
            <div style={{ position: "relative" }}>
              <div className="bob" style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                <HamsterMark size={58} color="#fff" />
              </div>
              <h2 className="display" style={{ fontSize: "clamp(26px,4vw,38px)", margin: "0 0 12px", color: "#fff" }}>
                พร้อมลุยต่อหรือยัง?
              </h2>
              <p style={{ margin: "0 auto 28px", maxWidth: 440, fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,.9)" }}>
                เข้าไปดูคอร์สและกิจกรรมทั้งหมด แล้วเลือกเส้นทางที่ใช่สำหรับคุณ
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a className="btn btn-light" href="https://www.hamsterhub.co/" target="_blank" rel="noopener noreferrer">
                  ไปที่ HamsterHub.co
                </a>
                <a
                  className="btn"
                  href="https://page.line.me/jkm4247u"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,.55)" }}
                >
                  ทักแชทสอบถาม
                </a>
              </div>
            </div>
          </Wrap>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer style={{ borderTop: "1px solid var(--line-soft)", padding: "40px 24px 54px" }}>
          <Wrap style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <HamsterMark size={32} />
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: "var(--ink)" }}>HamsterHub</p>
                <p style={{ margin: "1px 0 0", fontSize: 13, color: "var(--muted)" }}>ชมรมเท่ ๆ สำหรับคนครีเอทีฟ</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13.5, fontWeight: 600, color: "var(--body)", textDecoration: "none" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Wrap>
          <p style={{ maxWidth: 1120, margin: "26px auto 0", fontSize: 12.5, color: "var(--muted)", textAlign: "center" }}>
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

function Wrap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ maxWidth: 1120, margin: "0 auto", ...style }}>{children}</div>;
}

function Head({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <header style={{ textAlign: "center", marginBottom: 40 }}>
      <p className="eyebrow" style={{ margin: "0 0 12px" }}>
        {eyebrow}
      </p>
      <h2 className="display" style={{ fontSize: "clamp(26px,4.4vw,42px)", margin: "0 0 12px" }}>
        {title}
      </h2>
      <p style={{ margin: 0, fontSize: 15.5, color: "var(--muted)" }}>{sub}</p>
    </header>
  );
}

/** concentric rings used behind gradient panels */
function Rings() {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.22 }}
      preserveAspectRatio="xMidYMid slice"
    >
      {[60, 110, 160, 210, 260].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#fff" strokeWidth="1.4" />
      ))}
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

function CheckDot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="11" fill="var(--brand-soft)" />
      <path d="M7.5 12.4l3.1 3.1 6-6.4" stroke="var(--brand)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamsterMark({ size = 30, color = "var(--brand)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="11" cy="10.5" r="5.2" stroke={color} strokeWidth="2.4" />
      <circle cx="29" cy="10.5" r="5.2" stroke={color} strokeWidth="2.4" />
      <circle cx="20" cy="22" r="12.5" stroke={color} strokeWidth="2.4" />
      <circle cx="15.4" cy="20" r="1.9" fill={color} />
      <circle cx="24.6" cy="20" r="1.9" fill={color} />
      <path d="M20 25v1.6" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16.6 28.4c1 1 2.1 1.5 3.4 1.5s2.4-.5 3.4-1.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
