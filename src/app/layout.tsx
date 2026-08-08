import type { Metadata } from "next";
import { Archivo, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

/* หัวข้อ THANK YOU! ตัวหนามาก */
const archivo = Archivo({
  weight: ["800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ขอบคุณที่เลือก Hamster Hub",
  description:
    "ขอบคุณที่สั่งซื้อคอร์สกับ Hamster Hub — ดูคอร์สที่คุณสั่งซื้อ คอร์สเรียนแนะนำ กิจกรรมสำหรับคุณ และ Hamster Hub ในอนาคต",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${archivo.variable} ${notoThai.variable}`}>
      <body style={{ fontFamily: "var(--font-thai), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
