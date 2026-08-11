"use client";

import { useEffect } from "react";

/**
 * props สำหรับของที่ต้องเผยตัวตอนเลื่อนถึง
 * cls   คลาสเดิมของ element
 * delay หน่วงกี่ ms หลังจากตัวแรกของกลุ่มเริ่ม
 * kind  "" จางพร้อมลอยขึ้น | "fade" จางเฉย ๆ | "draw" ลากเส้น | "wipe" กวาดซ้ายไปขวา
 *
 * ใช้ร่วมกันทั้งหน้า thank you และหน้าจ่ายเงิน คลาส .rv/.rv-* มาจาก globals.css
 */
export function rv(
  cls = "",
  delay = 0,
  kind: "" | "fade" | "draw" | "wipe" = "",
  extra?: React.CSSProperties,
) {
  const k = kind ? ` rv-${kind}` : "";
  return {
    className: `${cls}${cls ? " " : ""}rv${k}`.trim(),
    style: { transitionDelay: `${delay}ms`, ...extra },
  };
}

/**
 * เผยตัวทีละชิ้นตอนเลื่อนถึง แล้วเลิกเฝ้า — เลื่อนกลับขึ้นไปไม่เล่นซ้ำ
 * ตั้ง rootMargin ล่าง -12% เพื่อให้เริ่มตอนโผล่พ้นขอบล่างมานิดหนึ่ง
 * ไม่ใช้ threshold เพราะบล็อกที่สูงกว่าจอจะไม่มีวันถึงเกณฑ์
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
