import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hamster Pop Camp — ลงทะเบียน",
  description: "ลงทะเบียนเข้าร่วม Hamster Pop Camp สร้างโปรเจกต์จบใน 5 วัน",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={poppins.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ background: "var(--page-bg)", fontFamily: "'IBM Plex Sans Thai', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
