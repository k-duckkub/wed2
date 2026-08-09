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
      <body>{children}</body>
    </html>
  );
}
