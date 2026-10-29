"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./HeroLeaves.module.css";

const leaves = [
  { size: 28, angle: -35, depth: -.08, sway: .025, duration: 9 },
  { size: 38, angle: 25, depth: -.12, sway: -.035, duration: 12 },
  { size: 24, angle: -65, depth: -.06, sway: .02, duration: 10 },
  { size: 36, angle: 50, depth: -.1, sway: .035, duration: 14 },
  { size: 30, angle: -15, depth: -.14, sway: -.025, duration: 11 },
];

export function HeroLeaves() {
  const layer = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = layer.current;
    const hero = element?.parentElement;
    if (!element || !hero || reducedMotion !== false) return;
    let frame = 0;
    let flights: Animation[] = [];

    const updateScroll = () => {
      frame = 0;
      const distance = Math.max(0, Math.min(-hero.getBoundingClientRect().top, hero.offsetHeight));
      element.style.setProperty("--hero-scroll", `${distance}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || (event.target instanceof Element && event.target.closest("a, button"))) return;
      flights.forEach((flight) => flight.cancel());
      flights = Array.from(element.querySelectorAll<HTMLElement>(`.${styles.impulse}`)).map((leaf, index) => {
        const bounds = leaf.getBoundingClientRect();
        const dx = bounds.left + bounds.width / 2 - event.clientX;
        const dy = bounds.top + bounds.height / 2 - event.clientY;
        const distance = Math.max(Math.hypot(dx, dy), 1);
        const strength = Math.max(18, 65 - distance * .05);
        const x = dx / distance * strength;
        const y = dy / distance * strength - 12;
        const turn = index % 2 === 0 ? 24 : -24;
        return leaf.animate([
          { transform: "translate(0, 0) rotate(0deg)" },
          { transform: `translate(${x}px, ${y}px) rotate(${turn}deg)`, offset: .35 },
          { transform: "translate(0, 0) rotate(0deg)" },
        ], { duration: 1500 + index * 100, easing: "cubic-bezier(.22,.68,.3,1)" });
      });
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    hero.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      hero.removeEventListener("pointerdown", onPointerDown);
      window.cancelAnimationFrame(frame);
      flights.forEach((flight) => flight.cancel());
      element.style.removeProperty("--hero-scroll");
    };
  }, [reducedMotion]);

  return (
    <div ref={layer} className={styles.layer} aria-hidden="true">
      {leaves.map((leaf, index) => (
        <span key={index} className={styles.parallax} style={{
          "--leaf-size": `${leaf.size}px`,
          "--leaf-angle": `${leaf.angle}deg`,
          "--leaf-depth": leaf.depth,
          "--leaf-sway": leaf.sway,
          "--leaf-duration": `${leaf.duration}s`,
          "--leaf-delay": `${index * -2}s`,
        } as CSSProperties}>
          <span className={styles.impulse}>
            <svg className={styles.leaf} viewBox="0 0 72 108" fill="none">
              <path className={styles.blade} d="M36 4C16 15 5 34 8 55c3 22 17 39 28 48 11-9 25-26 28-48C67 34 56 15 36 4Z" />
              <path className={styles.vein} d="M36 99V12M36 76 17 55m19 8 19-21M36 52 19 34m17 8 13-17M36 88l17-19" />
              <path className={styles.veinSoft} d="m17 55 12 3m26-16-12 5M19 34l11 4m19-13-9 8M53 69l-11 7" />
              <path className={styles.edge} d="M36 4C16 15 5 34 8 55c3 22 17 39 28 48 11-9 25-26 28-48C67 34 56 15 36 4Z" />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
