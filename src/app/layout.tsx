import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ขอบคุณที่ขึ้นขบวนเดียวกับพวกเรา — HamsterHub",
  description:
    "ชำระเงินสำเร็จแล้ว มาเจอกันที่สถานีแรก — เข้าคอมมูนิตี้ ดูสิ่งที่รออยู่บนเส้นทาง และคำถามที่พบบ่อย",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={notoThai.variable}>
      <head>
        {/* ไม่มี JS ก็ต้องอ่านได้ครบ — ปิดสถานะซ่อนของอนิเมชันทิ้ง */}
        <noscript>
          <style>{`.rv,.rv-fade,.rv-draw,.rv-wipe{opacity:1!important;transform:none!important;clip-path:none!important}
.rv-draw path{stroke-dashoffset:0!important}.rv-draw circle{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
