import type { Metadata } from "next";
import { Cinzel, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ขอบคุณที่ลงทะเบียน — HamsterHub",
  description:
    "ลงทะเบียนกับ HamsterHub สำเร็จแล้ว — ดูข้อมูลกิจกรรม คอร์สอื่น ๆ ที่น่าสนใจ และเป้าหมายในอนาคต",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${cinzel.variable} ${notoThai.variable}`}>
      <body style={{ fontFamily: "var(--font-thai), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
