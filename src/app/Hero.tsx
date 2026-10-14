"use client";

import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Pause, Play } from "lucide-react";
import { site } from "@/lib/data";
import { heroSlides, heroTimerReducer, HERO_SLIDE_SECONDS } from "@/lib/hero";
import styles from "./Hero.module.css";

export function Hero() {
  const [{ active, remaining, cycle }, dispatch] = useReducer(heroTimerReducer, { active: 0, remaining: HERO_SLIDE_SECONDS, cycle: 0 });
  const [rotating, setRotating] = useState(true);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const currentSlide = heroSlides[active];

  useEffect(() => {
    if (!rotating || focused || reducedMotion !== false) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) dispatch({ type: "tick" });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [rotating, focused, reducedMotion, cycle]);

  function move(direction: number) {
    dispatch({ type: "move", direction });
  }

  return (
    <section
      id="summary"
      className={styles.hero}
      aria-labelledby="v2-title"
      aria-roledescription="carousel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      {heroSlides.map((slide, index) => (
        <div key={slide.src} className={`${styles.slide} ${index === active ? styles.activeSlide : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${heroSlides.length}: ${slide.label}`} aria-hidden={index !== active}>
          <Image src={slide.src} alt={slide.alt} fill sizes="100vw" preload={index === 0} className={styles.image} style={{ objectPosition: slide.position }} />
        </div>
      ))}
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.gradient} aria-hidden="true" />
      <div className={styles.content}>
        <h1 id="v2-title">{currentSlide.heading}</h1>
        <p className={styles.role}>{currentSlide.tagline}</p>
        {"leadership" in currentSlide && <p className={`${styles.role} ${styles.leadershipBadge}`}>{currentSlide.leadership}</p>}
        <p className={styles.introduction}>{currentSlide.description}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={site.cvHref} download>Download CV <Download size={18} aria-hidden="true" /></a>
          <a className={styles.contactButton} href="#contact">Contact Me <ChevronRight size={19} aria-hidden="true" /></a>
        </div>
      </div>
      <div
        className={styles.controls}
        role="group"
        aria-label="Hero slideshow controls"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className={styles.dots} role="group" aria-label="Choose a hero slide">
          {heroSlides.map((slide, index) => <button key={slide.src} type="button" aria-label={`Show slide ${index + 1}: ${slide.label}`} aria-pressed={active === index} onClick={() => dispatch({ type: "select", index })}><span /></button>)}
        </div>
        <span className={styles.slideCount} aria-live={!rotating || focused ? "polite" : "off"} aria-atomic="true">{String(active + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span>
        <span className={styles.countdown} role="timer" aria-live="off" aria-label={`${remaining} seconds until the next slide`} title={!rotating || focused || reducedMotion !== false ? "Countdown paused" : "Time until the next slide"}>{remaining}s</span>
        <button type="button" onClick={() => move(-1)} aria-label="Previous hero slide"><ChevronLeft size={20} aria-hidden="true" /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next hero slide"><ChevronRight size={20} aria-hidden="true" /></button>
        {reducedMotion !== true && <button type="button" onClick={() => { setRotating(!rotating); if (!rotating) setFocused(false); }} aria-label={rotating ? "Pause automatic slideshow" : "Start automatic slideshow"}>{rotating ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}</button>}
      </div>
    </section>
  );
}
