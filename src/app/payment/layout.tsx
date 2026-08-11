import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ชำระเงิน — SciGame Lab Camp | HamsterHub",
  description: "เตรียมเสบียงก่อนออกเดินทาง โอนเงินผ่าน QR หรือบัญชีธนาคาร แล้วแจ้งทีมงานผ่าน LINE",
};

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
