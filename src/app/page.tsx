/* ═════════════════════════════════════════════
   HamsterHub — thank-you page
   Layout follows the supplied reference; content
   sourced from hamsterhub.co
   ═════════════════════════════════════════════ */

/**
 * ทุกรูปในหน้านี้อยู่ตรงนี้ที่เดียว
 * วางไฟล์ลง /public/img/ ตามชื่อด้านล่างแล้วรูปจะขึ้นเอง
 * ยังไม่มีไฟล์ก็ไม่พัง — จะใช้ gradient รองไว้ให้
 */
const IMG = {
  hero: "/img/hero.jpg", //            1920×1080 ภาพพื้นหลังหลัก
  news1: "/img/news-1.jpg", //          640×360
  news2: "/img/news-2.jpg", //          640×360
  news3: "/img/news-3.jpg", //          640×360
  why: "/img/why.png", //               600×700  ตัวละคร/มาสคอต (PNG พื้นใส)
  trailer: "/img/trailer.jpg", //       960×540
  media1: "/img/media-1.jpg", //        480×320
  media2: "/img/media-2.jpg", //        480×320
  media3: "/img/media-3.jpg", //        480×320
};

const NAV = [
  { label: "หน้าแรก", href: "https://www.hamsterhub.co/" },
  { label: "เกี่ยวกับเรา", href: "https://www.hamsterhub.co/", on: true },
  { label: "คอร์ส", href: "https://www.hamsterhub.co/starways" },
  { label: "กิจกรรม", href: "https://www.hamsterhub.co/gamejam" },
  { label: "แกลเลอรี", href: "https://hamsterhub.co/gallery" },
];

/** ── ข้อมูลกิจกรรม (แถวการ์ดข่าว) ── */
const ACTIVITY_CARDS = [
  {
    tag: "รายละเอียด",
    tagColor: "var(--tag-green)",
    img: IMG.news1,
    title: "แข่ง 72 ชั่วโมง ทีมละ 2–5 คน",
    meta: "รูปแบบการแข่ง",
    body: "พัฒนาเกมจากหัวข้อที่กำหนดให้ ภายในเวลาที่จำกัด จับทีมกันเองได้ 2–5 คน เปิดรับอายุ 10–22 ปี",
  },
  {
    tag: "กติกา",
    tagColor: "var(--tag-blue)",
    img: IMG.news2,
    title: "ใช้ Engine ไหนก็ได้",
    meta: "เครื่องมือ",
    body: "Unity, Unreal หรือ Godot เลือกที่ถนัดได้เลย ไม่มีข้อจำกัดเรื่องโปรแกรมที่ใช้",
  },
  {
    tag: "เตรียมตัว",
    tagColor: "var(--tag-purple)",
    img: IMG.news3,
    title: "จัดออนไลน์ผ่าน Discord",
    meta: "สถานที่",
    body: "ทุกอย่างเกิดขึ้นบน Discord ทีมงานจะส่งลิงก์เข้าห้องให้ก่อนวันงาน รอบ Specials ย่นเหลือ 48 ชั่วโมง",
  },
];

/** ── ทำไมต้อง HamsterHub ── */
const WHY_POINTS = [
  { icon: "shield", l1: "ระบบ House", l2: "มีพี่ Mentor ดูแล" },
  { icon: "trophy", l1: "เวทีระดับประเทศ", l2: "NSC · YSC · Game Show" },
];

/** ── คอร์สอื่น ๆ (แท็บ + แผงหลัก) ── */
const COURSES = [
  {
    key: "starways",
    tab1: "STARWAYS",
    tab2: "รายเดือน",
    title: "Starways",
    body:
      "ปูพื้นฐานสาย Game หรือ Data Science ให้แน่น แล้วต่อยอดสู่โปรเจกต์ระดับประเทศ มาพร้อมระบบ House ที่มีพี่ Mentor ดูแลตลอดทาง ยกเลิกได้ทุกเมื่อ",
    href: "https://www.hamsterhub.co/starways",
  },
  { key: "gamejam", tab1: "GAME JAM", tab2: "แข่งขัน", title: "Hamster Hub Game Jam", body: "สนามแข่งพัฒนาเกมจากหัวข้อที่กำหนด ภายใน 72 ชั่วโมง", href: "https://www.hamsterhub.co/gamejam" },
  { key: "camp", tab1: "SMART CAMP", tab2: "ค่าย", title: "Smart Camp", body: "ค่าย 3 วัน 2 คืน เรียนออกแบบและสร้างเกมด้วย Unity", href: "https://www.hamsterhub.co/" },
  { key: "roblox", tab1: "ROBLOX", tab2: "คอร์ส", title: "Roblox Creator Camp", body: "เริ่มสร้างเกมบน Roblox Studio ตั้งแต่ศูนย์", href: "https://www.hamsterhub.co/course/378" },
  { key: "python", tab1: "PYTHON", tab2: "คอร์ส", title: "Python พื้นฐานแน่น", body: "บันไดขั้นแรกสู่สาย Data Science", href: "https://www.hamsterhub.co/course/1027" },
];

/** ── เป้าหมายในอนาคต (แถวการ์ดล่าง) ── */
const GOALS = [
  {
    tag: "ขั้นที่ 1",
    img: IMG.media1,
    title: "ปูพื้นฐานให้แน่น",
    body: "เริ่มจากคอร์สที่ใช่ เก็บพื้นฐานให้ครบก่อนลงสนามจริง",
  },
  {
    tag: "ขั้นที่ 2",
    img: IMG.media2,
    title: "ประชุม Standup ทุกวัน",
    body: "รายงานสั้น ๆ ทุกวันแบบทีมพัฒนามืออาชีพ — เมื่อวานทำอะไร วันนี้จะทำอะไร ติดปัญหาตรงไหน",
    highlight: true,
  },
  {
    tag: "ขั้นที่ 3",
    img: IMG.media3,
    title: "ต่อยอดสู่เวทีจริง",
    body: "ทำโปรเจกต์ของตัวเองจนจบ แล้วเอาไปลุยเวทีระดับประเทศ",
  },
];

const FOOTER_NAV = ["หน้าแรก", "เกี่ยวกับเรา", "คอร์ส", "กิจกรรม", "แกลเลอรี", "ติดต่อเรา", "คำถามที่พบบ่อย"];

export default function ThankYouPage() {
  return (
    <div style={{ background: "var(--abyss)" }}>
      {/* ═══════════ NAV ═══════════ */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "16px 28px",
        }}
      >
        <div className="topbar">
          <a href="https://www.hamsterhub.co/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
            <Crest size={30} />
          </a>

          <nav className="topnav">
            {NAV.map((n) => (
              <a key={n.label} className={`navlink${n.on ? " on" : ""}`} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          {/* HamCoin */}
          <div
            className="coin"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px 6px 8px",
              borderRadius: 999,
              border: "1px solid var(--line)",
              background: "rgba(4,20,32,.6)",
            }}
          >
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(180deg,#ffd98a,#e2701d)", display: "grid", placeItems: "center", fontSize: 10, fontWeight: 800, color: "#3a1a05" }}>
              ฿
            </span>
            <div style={{ lineHeight: 1.1 }}>
              <p style={{ margin: 0, fontSize: 12.5, fontWeight: 700, color: "var(--gold-lit)" }}>1,240</p>
              <p className="eyebrow" style={{ margin: 0, fontSize: 8 }}>HamCoin</p>
            </div>
          </div>

          <span className="eyebrow" style={{ fontSize: 10 }}>TH</span>

          <a className="btn btn-orange" href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", fontSize: 12.5 }}>
            <ChatIcon /> ทักแชท
          </a>
        </div>
      </header>

      {/* ═══════════ HERO ═══════════ */}
      <section
        className="slot"
        style={{
          position: "relative",
          minHeight: 660,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "150px 28px 90px",
          backgroundImage: `url(${IMG.hero})`,
        }}
      >
        {/* ล่างจางลงไปหาสีพื้น */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(3,16,26,.62) 0%, rgba(3,16,26,.15) 34%, rgba(3,16,26,.72) 78%, var(--abyss) 100%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", width: "100%" }}>
          {/* โลโก้กลาง */}
          <div className="rise float" style={{ display: "flex", justifyContent: "center", marginBottom: 44 }}>
            <div style={{ textAlign: "center" }}>
              <Crest size={76} />
              <p className="display" style={{ fontSize: 42, margin: "10px 0 0", letterSpacing: ".14em" }}>
                HamsterHub
              </p>
            </div>
          </div>

          {/* บล็อกข้อความชิดซ้าย */}
          <div className="rise" style={{ maxWidth: 620, animationDelay: ".15s" }}>
            <p className="eyebrow" style={{ margin: "0 0 12px", color: "var(--orange)" }}>
              Registration Complete
            </p>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 22, flexWrap: "wrap" }}>
              <h1 className="display-th" style={{ fontSize: "clamp(28px,4.2vw,42px)", margin: 0, flex: 1, minWidth: 280 }}>
                ขอบคุณที่ลงทะเบียน
                <br />
                กับ HamsterHub
              </h1>
              <a className="btn btn-orange" href="#activity" style={{ marginTop: 6 }}>
                ดูข้อมูลกิจกรรม
              </a>
            </div>

            <p className="body-sm" style={{ margin: "18px 0 0", maxWidth: 500 }}>
              การลงทะเบียนของคุณเสร็จสมบูรณ์แล้ว ทีมงานจะติดต่อกลับพร้อมรายละเอียดกิจกรรมให้เร็ว ๆ นี้
              ระหว่างนี้เลื่อนลงไปดูกันได้เลยว่ามีอะไรรออยู่บ้าง
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ ข้อมูลกิจกรรม (การ์ดข่าว) ═══════════ */}
      <section id="activity" style={{ padding: "0 28px 84px", marginTop: -40, position: "relative", zIndex: 5 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {ACTIVITY_CARDS.map((c, i) => (
              <article key={c.title} className="framed lift" style={{ background: "rgba(7,38,57,.55)", border: "1px solid var(--line-soft)" }}>
                <div className="slot" style={{ height: 168, backgroundImage: `url(${c.img})`, position: "relative" }}>
                  <span className="tag" style={{ position: "absolute", top: 10, left: 10, background: c.tagColor, zIndex: 2 }}>
                    {c.tag}
                  </span>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(3,16,26,.9))", zIndex: 1 }} />
                  <div style={{ position: "absolute", left: 16, right: 16, bottom: 12, zIndex: 2 }}>
                    <p className="display-th" style={{ fontSize: 16, margin: 0 }}>{c.title}</p>
                    <p className="eyebrow" style={{ margin: "4px 0 0", fontSize: 8.5 }}>{c.meta}</p>
                  </div>
                </div>
                <p className="body-sm" style={{ margin: 0, padding: "16px 18px 20px" }}>{c.body}</p>
                {i === ACTIVITY_CARDS.length - 1 && null}
              </article>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 26, flexWrap: "wrap" }}>
            <p className="body-sm" style={{ margin: 0, flex: 1, minWidth: 260 }}>
              รอบ Specials จะย่นเวลาเหลือ 48 ชั่วโมง เร่งเครื่องกว่าเดิม — ทีมงานจะแจ้งวันเวลาที่แน่นอนทางอีเมลและ LINE อีกครั้ง
            </p>
            <a className="btn btn-orange" href="https://www.hamsterhub.co/gamejam" target="_blank" rel="noopener noreferrer">
              ดูกิจกรรมทั้งหมด
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ ทำไมต้อง HamsterHub ═══════════ */}
      <section style={{ padding: "40px 28px 90px", position: "relative" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: 40, alignItems: "center" }} className="why-grid">
          {/* ตัวละคร */}
          <div className="slot float" style={{ minHeight: 340, backgroundImage: `url(${IMG.why})`, backgroundSize: "contain", backgroundColor: "transparent", borderRadius: 8 }}>
            <span style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(23,120,158,.35), transparent 70%)", zIndex: 0 }} />
          </div>

          <div>
            <h2 className="display-th" style={{ fontSize: "clamp(24px,3.4vw,34px)", margin: "0 0 14px", textAlign: "center" }}>
              ทำไมต้อง HamsterHub?
            </h2>
            <div className="rule" style={{ marginBottom: 24 }}>
              <Diamond />
            </div>

            <p className="body-sm" style={{ margin: "0 0 14px" }}>
              เราคือ<span style={{ color: "var(--gold)" }}>ชมรมเท่ ๆ สำหรับคนครีเอทีฟ</span> ที่เชื่อว่าการเรียนเขียนโค้ดและทำเกม
              ควรได้ลงมือทำจริงตั้งแต่วันแรก ไม่ใช่แค่นั่งฟังทฤษฎี
            </p>
            <p className="body-sm" style={{ margin: "0 0 26px" }}>
              ตั้งแต่ปูพื้นฐาน ไปจนถึงส่งผลงานขึ้นเวทีระดับประเทศ มีพี่ Mentor และเพื่อนร่วมทางที่สนใจเรื่องเดียวกันคอยดันตลอดทาง
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {WHY_POINTS.map((w) => (
                <div key={w.l1} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", border: "1px solid var(--line-soft)", background: "rgba(7,38,57,.5)", flex: "1 1 200px" }}>
                  <span style={{ flexShrink: 0 }}>{w.icon === "shield" ? <ShieldIcon /> : <TrophyIcon />}</span>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "var(--gold-lit)" }}>{w.l1}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--muted)" }}>{w.l2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ คอร์สอื่น ๆ (ฟีเจอร์ + แท็บ) ═══════════ */}
      <section style={{ padding: "0 28px 90px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2 className="display-th" style={{ fontSize: "clamp(24px,3.4vw,34px)", margin: "0 0 12px" }}>
            คอร์สอื่น ๆ ที่น่าสนใจ
          </h2>
          <div className="rule rule-left" style={{ marginBottom: 34, maxWidth: 320 }}>
            <Diamond />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 34, alignItems: "start" }} className="feat-grid">
            {/* ซ้าย: ภาพใหญ่ */}
            <a href={COURSES[0].href} target="_blank" rel="noopener noreferrer" className="framed" style={{ display: "block", textDecoration: "none" }}>
              <div className="slot" style={{ aspectRatio: "16/9", backgroundImage: `url(${IMG.trailer})`, position: "relative", display: "grid", placeItems: "center" }}>
                <span className="tag" style={{ position: "absolute", top: 12, left: 12, background: "var(--tag-green)", zIndex: 3 }}>
                  แนะนำ
                </span>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(3,16,26,.2) 40%,rgba(3,16,26,.92))", zIndex: 1 }} />
                <span className="play" style={{ zIndex: 2 }}>
                  <PlayIcon />
                </span>
                <div style={{ position: "absolute", left: 18, right: 18, bottom: 14, zIndex: 2 }}>
                  <p className="display-th" style={{ fontSize: 17, margin: 0 }}>[แนะนำคอร์ส] Starways</p>
                  <p className="eyebrow" style={{ margin: "5px 0 0", fontSize: 8.5 }}>
                    รายเดือน · ยกเลิกได้ทุกเมื่อ
                  </p>
                </div>
              </div>
            </a>

            {/* ขวา: รายละเอียด + แท็บ */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <StarIcon />
                <h3 className="display" style={{ fontSize: 19, margin: 0, letterSpacing: ".1em" }}>
                  {COURSES[0].title}
                </h3>
              </div>

              <p className="body-sm" style={{ margin: "0 0 24px" }}>{COURSES[0].body}</p>

              {/* แท็บคอร์ส */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <Arrow dir="left" />
                <div className="tabs">
                  {COURSES.map((c, i) => (
                    <a key={c.key} href={c.href} target="_blank" rel="noopener noreferrer" className={`tab${i === 0 ? " on" : ""}`} style={{ textDecoration: "none" }}>
                      <span style={{ display: "block", fontFamily: "var(--font-cinzel), serif", fontSize: 9.5, letterSpacing: ".12em" }}>{c.tab1}</span>
                      <span style={{ display: "block", marginTop: 3 }}>{c.tab2}</span>
                    </a>
                  ))}
                </div>
                <Arrow dir="right" />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <a className="btn btn-orange" href={COURSES[0].href} target="_blank" rel="noopener noreferrer">
                  ดูรายละเอียด
                </a>
                <a className="eyebrow" href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "var(--gold)" }}>
                  ทักแชทสอบถาม
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ เป้าหมายในอนาคต (แถวการ์ดล่าง) ═══════════ */}
      <section style={{ padding: "0 28px 90px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2 className="display-th" style={{ fontSize: "clamp(24px,3.4vw,34px)", margin: "0 0 12px" }}>
            เป้าหมายในอนาคต
          </h2>
          <div className="rule rule-left" style={{ marginBottom: 34, maxWidth: 320 }}>
            <Diamond />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(272px,1fr))", gap: 20 }}>
            {GOALS.map((g) => (
              <article
                key={g.title}
                className="framed lift"
                style={{
                  background: "rgba(7,38,57,.55)",
                  border: g.highlight ? "1px solid rgba(240,145,63,.5)" : "1px solid var(--line-soft)",
                }}
              >
                <div className="slot" style={{ height: 176, backgroundImage: `url(${g.img})`, position: "relative", display: "grid", placeItems: "center" }}>
                  <span className="tag" style={{ position: "absolute", top: 10, left: 10, background: g.highlight ? "var(--orange)" : "var(--tag-blue)", zIndex: 3 }}>
                    {g.tag}
                  </span>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 45%,rgba(3,16,26,.92))", zIndex: 1 }} />
                  <span className="play" style={{ zIndex: 2, width: 46, height: 46 }}>
                    <PlusIcon />
                  </span>
                  <div style={{ position: "absolute", left: 16, right: 16, bottom: 12, zIndex: 2 }}>
                    <p className="display-th" style={{ fontSize: 16, margin: 0 }}>{g.title}</p>
                  </div>
                </div>
                <p className="body-sm" style={{ margin: 0, padding: "16px 18px 20px" }}>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER NAV ═══════════ */}
      <div style={{ padding: "0 28px" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            borderTop: "1px solid var(--line-soft)",
            padding: "26px 0",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 8px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {FOOTER_NAV.map((f, i) => (
            <span key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a className="navlink" href="https://www.hamsterhub.co/" style={{ fontSize: 12.5, color: i === 1 ? "var(--gold)" : undefined }}>
                {f}
              </a>
              {i < FOOTER_NAV.length - 1 && <Diamond size={8} />}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{ padding: "34px 28px 46px" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <Crest size={38} />
            <p className="display" style={{ fontSize: 21, margin: 0 }}>HamsterHub</p>
          </div>

          <p className="body-sm" style={{ margin: 0, flex: 1, minWidth: 260, fontSize: 12.5, borderLeft: "1px solid var(--line-soft)", paddingLeft: 24 }}>
            ชมรมเท่ ๆ สำหรับคนครีเอทีฟ — เรียนเขียนโค้ดและสร้างเกมแบบลงมือทำจริง
            ตั้งแต่<span style={{ color: "var(--gold)" }}>ปูพื้นฐาน</span>จนถึงส่งผลงานขึ้นเวทีระดับประเทศ
          </p>

          <span className="eyebrow" style={{ fontSize: 10 }}>TH</span>

          <a className="btn btn-orange" href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", fontSize: 12.5 }}>
            <ChatIcon /> ทักแชท
          </a>
        </div>

        <div
          style={{
            maxWidth: 1240,
            margin: "26px auto 0",
            paddingTop: 18,
            borderTop: "1px solid var(--line-soft)",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ margin: 0, fontSize: 11.5, color: "rgba(125,148,166,.7)" }}>
            © 2026 Hamster Hub · All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { l: "Facebook", h: "https://www.facebook.com/HamsterHubThailand/" },
              { l: "Instagram", h: "https://www.instagram.com/hamsterhub_ig/" },
              { l: "LINE", h: "https://page.line.me/jkm4247u" },
              { l: "X", h: "https://x.com/HamsterHub_" },
            ].map((s) => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11.5, color: "rgba(125,148,166,.7)", textDecoration: "none" }}>
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* responsive collapses that need media queries */}
      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Marks & icons
   ───────────────────────────────────────────── */

/** โลโก้แฮมสเตอร์ในกรอบโล่ */
function Crest({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 3 L58 13 v22 c0 14-11 22-26 26 C17 57 6 49 6 35 V13 Z" fill="rgba(4,22,35,.85)" stroke="var(--gold)" strokeWidth="1.6" />
      <circle cx="23" cy="24" r="5" stroke="var(--gold)" strokeWidth="2" />
      <circle cx="41" cy="24" r="5" stroke="var(--gold)" strokeWidth="2" />
      <circle cx="32" cy="35" r="12" stroke="var(--gold)" strokeWidth="2" />
      <circle cx="27.6" cy="33" r="1.9" fill="var(--gold)" />
      <circle cx="36.4" cy="33" r="1.9" fill="var(--gold)" />
      <path d="M32 38v1.8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
      <path d="M28.6 41.6c1 1 2.1 1.5 3.4 1.5s2.4-.5 3.4-1.5" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Diamond({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="var(--gold)" strokeWidth="1.4" opacity=".85" />
      <path d="M12 7 L17 12 L12 17 L7 12 Z" fill="var(--gold)" opacity=".5" />
    </svg>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.6 }}>
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="var(--gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.5l8 3v6.5c0 4.6-3.4 7.4-8 9.5-4.6-2.1-8-4.9-8-9.5V5.5z" stroke="var(--gold)" strokeWidth="1.5" />
      <path d="M8.6 12.2l2.4 2.4 4.4-4.8" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" stroke="var(--gold)" strokeWidth="1.5" />
      <path d="M7 5.5H4.5V8a3 3 0 0 0 3 3M17 5.5h2.5V8a3 3 0 0 1-3 3" stroke="var(--gold)" strokeWidth="1.5" />
      <path d="M12 14v3.5M8.5 20.5h7" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.4 6.1L21 9.8l-4.9 4.2L17.6 21 12 17.4 6.4 21l1.5-7L3 9.8l6.6-.7z" stroke="var(--orange)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 11.5a8 8 0 0 1-8 8H7l-3.5 2.5V11.5a8 8 0 0 1 8-8h1a8 8 0 0 1 8 8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
