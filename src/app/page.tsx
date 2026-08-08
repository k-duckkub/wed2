/* ─────────────────────────────────────────────
   Thank-you page
   ───────────────────────────────────────────── */

const DETAILS = [
  { label: "วันที่", value: "9 กุมภาพันธ์ 2569", icon: "calendar" },
  { label: "เวลา", value: "19:30 – 21:30 น.", icon: "clock" },
  { label: "รูปแบบ", value: "ออนไลน์ · ลิงก์ส่งทางอีเมล", icon: "portal" },
  { label: "ขั้นตอนถัดไป", value: "รอการยืนยันภายใน 24 ชม.", icon: "scroll" },
] as const;

const HIGHLIGHTS = [
  {
    tag: "Update",
    title: "กิจกรรมเปิดฤดูกาล",
    desc: "รวมกิจกรรมพิเศษช่วงเปิดตัว พร้อมรางวัลสำหรับผู้ที่ลงทะเบียนในรอบแรก",
  },
  {
    tag: "Guide",
    title: "คู่มือเริ่มต้น",
    desc: "สรุปทุกอย่างที่ต้องรู้ก่อนวันงาน ตั้งแต่การเตรียมตัวจนถึงขั้นตอนเข้าร่วม",
  },
  {
    tag: "Community",
    title: "เข้าร่วมชุมชน",
    desc: "พูดคุยกับผู้เข้าร่วมคนอื่น ถามคำถาม และรับประกาศสำคัญก่อนใคร",
  },
] as const;

const ROADMAP = [
  { phase: "I", title: "ยืนยันการลงทะเบียน", desc: "ตรวจสอบข้อมูลและส่งอีเมลยืนยันพร้อมลิงก์เข้าร่วม" },
  { phase: "II", title: "เตรียมความพร้อม", desc: "รับเอกสารแนะนำและเข้ากลุ่มชุมชนเพื่อเตรียมตัวก่อนวันงาน" },
  { phase: "III", title: "วันจริง", desc: "เข้าร่วมกิจกรรมสด พร้อมช่วงถาม–ตอบกับทีมงานตลอดงาน" },
  { phase: "IV", title: "ต่อยอดหลังจบงาน", desc: "รับสรุปเนื้อหาย้อนหลัง และสิทธิ์เข้าร่วมกิจกรรมรอบถัดไป" },
] as const;

export default function ThankYouPage() {
  return (
    <main style={{ position: "relative" }}>
      {/* ══════════ HERO ══════════ */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "96px 24px 72px",
        }}
      >
        <div className="rise">
          <Seal />
        </div>

        <p className="eyebrow rise" style={{ margin: "34px 0 0", animationDelay: "0.1s" }}>
          Registration Complete
        </p>

        <h1
          className="display rise"
          style={{
            fontSize: "clamp(44px, 10vw, 104px)",
            lineHeight: 1,
            margin: "18px 0 0",
            animationDelay: "0.18s",
          }}
        >
          Thank You
        </h1>

        <div className="rule rise" style={{ margin: "30px 0", animationDelay: "0.26s" }}>
          <Diamond />
        </div>

        <p
          className="rise"
          style={{
            maxWidth: 560,
            margin: 0,
            fontSize: 16,
            lineHeight: 1.9,
            color: var_muted,
            animationDelay: "0.32s",
          }}
        >
          การลงทะเบียนของคุณเสร็จสมบูรณ์แล้ว
          <br />
          เราได้ส่งอีเมลยืนยันไปให้เรียบร้อย โปรดตรวจสอบกล่องจดหมายของคุณ
        </p>

        <div
          className="rise"
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 40,
            animationDelay: "0.4s",
          }}
        >
          <a className="btn btn-primary" href="#details">
            ดูรายละเอียด
          </a>
          <a className="btn btn-ghost" href="#community">
            เข้าร่วมชุมชน
          </a>
        </div>
      </section>

      {/* ══════════ DETAILS ══════════ */}
      <Section id="details" eyebrow="Your Registration" title="รายละเอียดกิจกรรม">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(228px, 1fr))",
            gap: 18,
          }}
        >
          {DETAILS.map((d) => (
            <div key={d.label} className="panel panel-hover" style={{ padding: "26px 22px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                <Glyph name={d.icon} />
              </div>
              <p className="eyebrow" style={{ margin: "0 0 9px", fontSize: 9.5 }}>
                {d.label}
              </p>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "var(--gold-bright)", lineHeight: 1.6 }}>
                {d.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════ HIGHLIGHTS ══════════ */}
      <Section id="community" eyebrow="What's Next" title="สิ่งที่น่าสนใจ">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(272px, 1fr))",
            gap: 20,
          }}
        >
          {HIGHLIGHTS.map((h) => (
            <article key={h.title} className="panel panel-hover" style={{ overflow: "hidden" }}>
              {/* illustrative header band */}
              <div
                style={{
                  height: 132,
                  position: "relative",
                  background:
                    "radial-gradient(70% 100% at 50% 0%, rgba(255,164,86,0.34), transparent 70%), linear-gradient(180deg, #0d3a55, #061c2e)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <span className="tag" style={{ position: "absolute", top: 12, left: 12 }}>
                  {h.tag}
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
                  <Diamond size={22} />
                </div>
              </div>

              <div style={{ padding: "22px 22px 26px" }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--gold-bright)",
                  }}
                >
                  {h.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: var_muted }}>{h.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ══════════ ROADMAP ══════════ */}
      <Section eyebrow="The Road Ahead" title="เป้าหมายในอนาคต">
        <div style={{ display: "grid", gap: 0 }}>
          {ROADMAP.map((r, i) => (
            <div key={r.phase} style={{ display: "flex", gap: 22 }}>
              {/* rail */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    display: "grid",
                    placeItems: "center",
                    transform: "rotate(45deg)",
                    border: "1px solid var(--gold)",
                    background: "linear-gradient(135deg, rgba(255,164,86,0.20), rgba(4,20,34,0.9))",
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
                      minHeight: 46,
                      background: "linear-gradient(180deg, var(--line), transparent)",
                    }}
                  />
                )}
              </div>

              {/* body */}
              <div style={{ paddingBottom: i < ROADMAP.length - 1 ? 34 : 0, paddingTop: 6 }}>
                <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700, color: "var(--gold-bright)" }}>
                  {r.title}
                </h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: var_muted, maxWidth: 520 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════ FOOTER ══════════ */}
      <footer
        style={{
          borderTop: "1px solid var(--line)",
          marginTop: 40,
          padding: "48px 24px 56px",
          textAlign: "center",
        }}
      >
        <div className="rule" style={{ marginBottom: 26 }}>
          <Diamond size={14} />
        </div>
        <p style={{ margin: "0 0 22px", fontSize: 13.5, lineHeight: 1.9, color: var_muted }}>
          มีคำถามเพิ่มเติม? ทีมงานพร้อมช่วยเหลือคุณเสมอ
        </p>
        <a className="btn btn-ghost" href="#">
          ติดต่อทีมงาน
        </a>
        <p style={{ margin: "36px 0 0", fontSize: 11.5, color: "rgba(123,147,165,0.6)" }}>
          © 2026 · สงวนลิขสิทธิ์
        </p>
      </footer>
    </main>
  );
}

/* ─────────────────────────────────────────────
   Building blocks
   ───────────────────────────────────────────── */

const var_muted = "var(--muted)";

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
    <section id={id} style={{ padding: "76px 24px", maxWidth: 1080, margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: 46 }}>
        <p className="eyebrow" style={{ margin: "0 0 14px" }}>
          {eyebrow}
        </p>
        <h2 className="display-th" style={{ fontSize: "clamp(25px, 4.4vw, 40px)", margin: "0 0 22px" }}>
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
      {/* glow */}
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
        {/* outer diamond */}
        <path d="M66 6 L126 66 L66 126 L6 66 Z" stroke="var(--gold)" strokeWidth="1.2" opacity="0.55" />
        {/* inner diamond */}
        <path
          d="M66 20 L112 66 L66 112 L20 66 Z"
          stroke="var(--gold)"
          strokeWidth="1.4"
          fill="rgba(255,164,86,0.09)"
        />
        {/* corner ticks */}
        {[
          "M66 0 L66 12", "M66 120 L66 132",
          "M0 66 L12 66", "M120 66 L132 66",
        ].map((d) => (
          <path key={d} d={d} stroke="var(--gold)" strokeWidth="1.2" opacity="0.75" />
        ))}
        {/* check */}
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

/** Small line glyphs for the detail panels. */
function Glyph({ name }: { name: "calendar" | "clock" | "portal" | "scroll" }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--gold)",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "calendar")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="1" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    );

  if (name === "clock")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
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
