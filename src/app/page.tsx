"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ═════════════════════════════════════════════
   HamsterHub — แผนที่ทัวร์
   เลื่อนหน้าจอ = รถวิ่งไปตามถนน ผ่านจุดจอดทีละจุด
   ═════════════════════════════════════════════ */

/**
 * เส้นถนน อยู่ในระบบพิกัดของ SVG (0 0 1200 700)
 * ใช้ preserveAspectRatio=meet เพื่อให้เห็นแผนที่ครบทุกจอเสมอ
 * (slice จะครอบขอบไม่เท่ากันในแต่ละสัดส่วนจอ จนป้ายหลุดออกนอกเฟรม)
 * การ์ดจุดจอดกินพื้นที่ล่างกลาง เส้นทางจึงเลี่ยงโซนนั้นไว้
 */
const ROAD =
  "M 150 570 C 205 570 245 430 300 372 S 430 300 545 288 S 690 232 780 262 S 900 322 975 264 S 1045 182 1075 148";

/**
 * จุดจอด — ตำแหน่ง at คือสัดส่วนบนเส้นถนน (0 = ต้นทาง, 1 = ปลายทาง)
 * เนื้อหาเรียงตามลำดับที่ทำให้คนรู้สึกปลอดภัยพอจะยิ้มจริง
 */
const STOPS = [
  {
    at: 0.1,
    tag: "จุดที่ 1",
    name: "ลานเรื่องเล่า",
    title: "เริ่มจากเรื่องสนุก ไม่ได้เริ่มจากการขายของ",
    body: "พี่ไอดินเต้นให้เด็กดูจนทั้งห้องหัวเราะ — เราเปิดวงด้วยความทรงจำดี ๆ ก่อนเสมอ ไม่ใช่ด้วยสไลด์แนะนำบริษัท",
    note: "ชวนนึกถึงความทรงจำที่ดี สมองจะดึงอารมณ์ตอนนั้นกลับมาด้วย เกือบทุกครั้งจะได้ยิ้มแบบตาหยี",
  },
  {
    at: 0.37,
    tag: "จุดที่ 2",
    name: "หมู่บ้านผลงาน",
    title: "เล่าว่าเด็กทำอะไรได้ ไม่ใช่เล่าว่าเราดีแค่ไหน",
    body: "พาเดินดูเกมที่เด็กทำเอง คลิปที่เด็กตัดเอง งานที่ส่งขึ้นเวทีจริง ความเชื่อมั่นมาจากของที่จับต้องได้",
    note: "หลักฐานสร้างความเชื่อมั่นได้มากกว่าคำโฆษณา เพราะคนตัดสินใจจากสิ่งที่เห็น ไม่ใช่สิ่งที่ถูกบอก",
  },
  {
    at: 0.64,
    tag: "จุดที่ 3",
    name: "โค้งเซอร์ไพรส์",
    title: "ยิ้มก่อน แล้วสบตา",
    body: "ส่งคลิปตอนลูกหัวเราะให้ผู้ปกครองดู ในวันธรรมดาที่ไม่มีโอกาสอะไรรองรับ — แค่อยากให้เห็นว่าวันนี้เขาสนุกแค่ไหน",
    note: "เซอร์ไพรส์เชิงบวกให้การตอบสนองแรงกว่าสิ่งดีที่คาดไว้แล้ว ของเล็ก ๆ ที่ไม่มีวาระมักได้ผลกว่าของแพงในวันเกิด",
  },
  {
    at: 0.92,
    tag: "จุดที่ 4",
    name: "ปลายทาง: บ้านที่ปลอดภัย",
    title: "หัวเราะไปด้วยกัน ไม่ใช่หัวเราะใส่",
    body: "ห้องที่ไม่มีใครโดนล้อ คือห้องที่เด็กกล้าตอบผิด กล้าลองใหม่ และกล้าถามคำถามที่กลัวว่าจะดูโง่",
    note: "รอยยิ้มจริงเกิดยากมากถ้าคนยังตั้งการ์ด ถ้ารู้สึกว่าจะถูกตัดสิน สิ่งที่ได้จะเป็นยิ้มมารยาททันที",
  },
];

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/HamsterHubThailand/", icon: "facebook" },
  { name: "YouTube", href: "https://www.hamsterhub.co/", icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/hamsterhub_ig/", icon: "instagram" },
  { name: "LINE", href: "https://page.line.me/jkm4247u", icon: "line" },
];

/** ความสูงที่ต้องเลื่อนต่อหนึ่งจุดจอด */
const VH_PER_STOP = 105;

const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));

export default function TourPage() {
  const tourRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<SVGPathElement>(null);

  const [t, setT] = useState(0); // ความคืบหน้า 0..1
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);
  const [car, setCar] = useState({ x: -40, y: 640, a: 0 });

  /* หาพิกัดของจุดจอดบนเส้นถนน ทำครั้งเดียวหลัง mount */
  useEffect(() => {
    const path = roadRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    setPts(
      STOPS.map((s) => {
        const p = path.getPointAtLength(len * s.at);
        return { x: p.x, y: p.y };
      })
    );
  }, []);

  /* ผูกตำแหน่งรถกับการเลื่อนหน้าจอ */
  useEffect(() => {
    const el = tourRef.current;
    const path = roadRef.current;
    if (!el || !path) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const p = travel > 0 ? clamp(-r.top / travel, 0, 1) : 0;
      setT(p);

      const len = path.getTotalLength();
      const a = path.getPointAtLength(len * p);
      const b = path.getPointAtLength(Math.min(len, len * p + 2));
      setCar({ x: a.x, y: a.y, a: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* จุดจอดที่รถวิ่งถึงแล้ว */
  let active = 0;
  STOPS.forEach((s, i) => {
    if (t >= s.at - 0.1) active = i;
  });

  const goTo = useCallback((i: number) => {
    const el = tourRef.current;
    if (!el) return;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + travel * STOPS[i].at, behavior: "smooth" });
  }, []);

  const stop = STOPS[active];

  return (
    <>
      {/* ══════ ทัวร์ ══════ */}
      <div className="tour" ref={tourRef} style={{ height: `${STOPS.length * VH_PER_STOP + 60}vh` }}>
        <div className="stage">
          <div className="banner">
            <h1>ทัวร์รอบบ้าน HAMSTER HUB</h1>
            <p>เลื่อนลงเพื่อออกเดินทาง</p>
          </div>

          <div className="maparea">
            <div className="mapbox">
              <MapArt roadRef={roadRef} pts={pts} car={car} active={active} t={t} />
            </div>
          </div>

          <div className="cardzone">
            <article className="stopcard" key={active}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span className="num">{active + 1}</span>
                <div>
                  <span className="signtag">{stop.tag}</span>
                  <p style={{ margin: "5px 0 0", fontSize: 13.5, fontWeight: 800, color: "var(--brand-deep)" }}>
                    {stop.name}
                  </p>
                </div>
              </div>

              <h2 className="h2" style={{ fontSize: "clamp(19px,2.6vw,26px)" }}>
                {stop.title}
              </h2>
              <p className="sub" style={{ marginTop: 9 }}>
                {stop.body}
              </p>
              <p className="note">
                <strong style={{ color: "var(--ink)" }}>ทำไมถึงได้ผล — </strong>
                {stop.note}
              </p>
            </article>
          </div>

          {t < 0.04 && (
            <div className="scrollcue">
              เลื่อนลงเลย <ArrowDown />
            </div>
          )}

          <div className="hud">
            <div className="hudbar">
              {STOPS.map((s, i) => (
                <button
                  key={s.tag}
                  className="dot"
                  aria-current={i === active}
                  aria-label={`ไปจุดที่ ${i + 1} ${s.name}`}
                  onClick={() => goTo(i)}
                  type="button"
                >
                  {i + 1}
                </button>
              ))}
              <div className="rail" aria-hidden="true">
                <i style={{ width: `${t * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════ รายการอ่าน สำหรับคนที่ปิดอนิเมชัน ══════ */}
      <div className="plain wrap" style={{ padding: "50px 22px 10px" }}>
        <h1 className="h1" style={{ marginBottom: 10 }}>
          ทัวร์รอบบ้าน Hamster Hub
        </h1>
        <p className="sub" style={{ marginBottom: 26 }}>
          สี่จุดที่ทำให้ห้องเรียนของเราไม่เครียด
        </p>
        {STOPS.map((s, i) => (
          <div key={s.tag} style={{ marginBottom: 22 }}>
            <span className="signtag">{s.tag}</span>
            <h2 className="h2" style={{ marginTop: 8, fontSize: 22 }}>
              {s.title}
            </h2>
            <p className="sub" style={{ marginTop: 6 }}>
              {s.body}
            </p>
            <p className="note">{s.note}</p>
            {i < STOPS.length - 1 && <hr style={{ border: 0, borderTop: "1px solid var(--line-soft)", marginTop: 22 }} />}
          </div>
        ))}
      </div>

      {/* ══════ ท้ายทาง ══════ */}
      <section className="outro">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
            <span className="signtag">ถึงปลายทางแล้ว</span>
            <h2 className="h1" style={{ fontSize: "clamp(26px,4.4vw,44px)", marginTop: 14 }}>
              เราไม่ได้พยายามทำให้เด็กยิ้ม
            </h2>
            <p className="sub" style={{ marginTop: 14 }}>
              เราแค่ทำให้ห้องเรียนเป็นที่ที่รอยยิ้มเกิดขึ้นเองได้ — ถ้าเดินเข้าไปด้วยเป้าหมายว่าจะทำให้เขายิ้ม
              คนมักจับกลิ่นความพยายามได้แล้วตั้งการ์ด แต่ถ้าเข้าไปด้วยความสนใจในตัวเขาจริง ๆ
              รอยยิ้มมักตามมาเอง
            </p>
          </div>

          <div className="recap">
            {STOPS.map((s, i) => (
              <div className="recapcard" key={s.tag}>
                <span
                  style={{
                    display: "inline-grid",
                    placeItems: "center",
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background: "var(--brand-soft)",
                    color: "var(--brand-deep)",
                    fontWeight: 900,
                    fontSize: 14,
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ margin: "11px 0 0", fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>{s.name}</p>
                <p className="tiny" style={{ marginTop: 6 }}>
                  {s.title}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 40 }}>
            <a className="btn" href="https://www.hamsterhub.co/" target="_blank" rel="noopener noreferrer">
              มาลองเรียนกับเรา <ArrowRight />
            </a>
            <a className="btn-2" href="https://page.line.me/jkm4247u" target="_blank" rel="noopener noreferrer">
              ทักแชทถามก่อนได้
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 34 }}>
            {SOCIALS.map((s) => (
              <a key={s.name} className="social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Glyph name={s.icon} size={18} />
              </a>
            ))}
          </div>

          <p className="tiny" style={{ textAlign: "center", marginTop: 26 }}>
            © 2569 Hamster Hub · สงวนลิขสิทธิ์
          </p>
        </div>
      </section>
    </>
  );
}

/* ═════════════════════════════════════════════
   แผนที่
   ═════════════════════════════════════════════ */
function MapArt({
  roadRef,
  pts,
  car,
  active,
  t,
}: {
  roadRef: React.RefObject<SVGPathElement | null>;
  pts: { x: number; y: number }[];
  car: { x: number; y: number; a: number };
  active: number;
  t: number;
}) {
  return (
    <svg className="mapsvg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff3e2" />
          <stop offset="55%" stopColor="#ffeacf" />
          <stop offset="100%" stopColor="#ffe0bd" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd08a" />
          <stop offset="100%" stopColor="#ffb057" />
        </linearGradient>
      </defs>

      <rect width="1200" height="700" rx="20" fill="url(#sky)" />

      {/* ดวงอาทิตย์ */}
      <circle cx="1010" cy="120" r="52" fill="url(#sun)" opacity=".9" />
      <circle cx="1010" cy="120" r="74" fill="#ffbe74" opacity=".18" />

      {/* ภูเขาไกล */}
      <path d="M -20 300 L 150 170 L 260 268 L 360 196 L 470 300 Z" fill="#f6cfa4" />
      <path d="M 120 300 L 250 208 L 330 268 L 420 214 L 540 300 Z" fill="#eec091" opacity=".85" />
      <path d="M 760 300 L 880 214 L 960 272 L 1050 206 L 1210 300 Z" fill="#f3caa0" />

      {/* เนินหญ้า */}
      <path d="M -20 320 C 180 262 340 340 520 306 S 860 250 1220 312 L 1220 700 L -20 700 Z" fill="#e7d3ab" />
      <path d="M -20 392 C 200 344 380 420 600 384 S 980 330 1220 396 L 1220 700 L -20 700 Z" fill="#dcc79c" />
      <path d="M -20 470 C 240 430 420 500 660 462 S 1000 418 1220 476 L 1220 700 L -20 700 Z" fill="#d3bb8d" />

      {/* แม่น้ำ */}
      <path d="M 640 300 C 610 380 660 430 620 700" stroke="#bcd8e4" strokeWidth="26" fill="none" opacity=".75" strokeLinecap="round" />

      {/* ถนน */}
      <path d={ROAD} stroke="var(--road-edge)" strokeWidth="46" fill="none" strokeLinecap="round" />
      <path ref={roadRef} data-road="" d={ROAD} stroke="var(--road)" strokeWidth="36" fill="none" strokeLinecap="round" />
      <path d={ROAD} stroke="#fff" strokeWidth="3" strokeDasharray="16 20" fill="none" opacity=".8" strokeLinecap="round" />
      {/* ส่วนที่วิ่งผ่านมาแล้ว */}
      <path
        data-progress=""
        d={ROAD}
        stroke="var(--brand)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity=".55"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - t}
      />

      {/* ต้นไม้และบ้าน กระจายรอบเส้นทาง */}
      <Scenery />

      {/* ป้ายจุดจอด */}
      {pts.map((p, i) => {
        const on = i <= active;
        return (
          <g key={i} data-mark="stop" transform={`translate(${p.x} ${p.y - 24})`}>
            <line x1="0" y1="0" x2="0" y2="-42" stroke="#9a7248" strokeWidth="6" strokeLinecap="round" />
            <g transform="translate(0 -62)">
              <rect
                data-sign=""
                x="-40"
                y="-19"
                width="80"
                height="38"
                rx="7"
                fill={on ? "var(--brand)" : "#a98a68"}
                stroke="#fff"
                strokeWidth="3"
              />
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fill="#fff"
                fontSize="19"
                fontWeight="800"
                fontFamily="var(--font-display), system-ui, sans-serif"
              >
                #{i + 1}
              </text>
            </g>
            <circle data-pin="" cx="0" cy="0" r="9" fill="var(--brand)" stroke="#fff" strokeWidth="3" opacity={on ? 1 : 0} />
          </g>
        );
      })}

      {/* กรอบรูป วาดในระบบพิกัดเดียวกับภาพ จะได้แนบขอบเสมอ */}
      <g style={{ pointerEvents: "none" }}>
        <rect x="5" y="5" width="1190" height="690" rx="18" fill="none" stroke="var(--brand)" strokeWidth="10" />
        <rect x="17" y="17" width="1166" height="666" rx="11" fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="3" strokeDasharray="11 9" />
      </g>

      {/* รถบัส */}
      <g data-mark="bus" transform={`translate(${car.x} ${car.y}) rotate(${car.a})`}>
        <g transform="translate(0 -20)">
          <ellipse cx="0" cy="22" rx="34" ry="6" fill="#a8865f" opacity=".35" />
          <rect x="-34" y="-22" width="68" height="38" rx="11" fill="var(--brand)" stroke="#fff" strokeWidth="3" />
          <rect x="-26" y="-14" width="20" height="15" rx="4" fill="#ffe6c9" />
          <rect x="-2" y="-14" width="20" height="15" rx="4" fill="#ffe6c9" />
          <circle cx="-18" cy="18" r="8" fill="#3d2b1c" />
          <circle cx="18" cy="18" r="8" fill="#3d2b1c" />
          <circle cx="-18" cy="18" r="3" fill="#c9b28f" />
          <circle cx="18" cy="18" r="3" fill="#c9b28f" />
          {/* แฮมสเตอร์โผล่หลังคา */}
          <g transform="translate(6 -30)">
            <circle cx="-7" cy="-4" r="4" fill="#ffd7a8" stroke="#c98a4b" strokeWidth="1.6" />
            <circle cx="7" cy="-4" r="4" fill="#ffd7a8" stroke="#c98a4b" strokeWidth="1.6" />
            <circle cx="0" cy="2" r="9.5" fill="#ffe2bd" stroke="#c98a4b" strokeWidth="1.8" />
            <circle cx="-3.4" cy="0.6" r="1.5" fill="#3d2b1c" />
            <circle cx="3.4" cy="0.6" r="1.5" fill="#3d2b1c" />
            <path d="M -3 5 Q 0 7.6 3 5" stroke="#3d2b1c" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Scenery() {
  const trees: [number, number, number][] = [
    [90, 500, 1], [175, 590, 1.2], [330, 452, .9], [415, 600, 1.1],
    [560, 392, .95], [690, 470, 1.15], [815, 300, .85], [880, 470, 1.05],
    [1010, 430, 1.1], [1120, 300, .9], [250, 340, .8], [470, 250, .7],
  ];
  const houses: [number, number, number][] = [
    [150, 430, 1], [600, 560, 1.1], [900, 250, .9], [1080, 500, 1.05],
  ];
  return (
    <g>
      {trees.map(([x, y, s], i) => (
        <g key={`t${i}`} transform={`translate(${x} ${y}) scale(${s})`}>
          <rect x="-3.5" y="0" width="7" height="18" rx="3" fill="#9a7248" />
          <circle cx="0" cy="-8" r="16" fill="var(--leaf)" />
          <circle cx="-9" cy="0" r="11" fill="var(--leaf-dark)" />
          <circle cx="9" cy="-1" r="10" fill="var(--leaf-dark)" opacity=".85" />
        </g>
      ))}
      {houses.map(([x, y, s], i) => (
        <g key={`h${i}`} transform={`translate(${x} ${y}) scale(${s})`}>
          <rect x="-19" y="-14" width="38" height="28" rx="4" fill="#fff3e2" />
          <path d="M -24 -14 L 0 -33 L 24 -14 Z" fill="#ef8f4d" />
          <rect x="-6" y="-4" width="12" height="18" rx="2" fill="#c98a4b" />
        </g>
      ))}
    </g>
  );
}

/* ═════════════ ไอคอน ═════════════ */
function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
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
