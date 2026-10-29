"use client";

import Image from "next/image";
import { useEffect, useReducer, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Download, Pause, Play } from "lucide-react";
import { site } from "@/lib/data";
import { heroSlides, heroTimerReducer, HERO_SLIDE_SECONDS } from "@/lib/hero";
import styles from "./Hero.module.css";
import { HeroLeaves } from "./HeroLeaves";

export function Hero() {
  const [{ active, cycle }, dispatch] = useReducer(heroTimerReducer, {
    active: 0, remaining: HERO_SLIDE_SECONDS, cycle: 0,
  });
  const [rotating, setRotating] = useState(true);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!rotating || focused || reducedMotion !== false) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) dispatch({ type: "tick" });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [rotating, focused, reducedMotion, cycle]);

  return (
    <section id="summary" className={styles.hero} aria-labelledby="v2-title">
      <HeroLeaves />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Environmental science. Human perspective.</p>
          <h1 id="v2-title">Md. Abu <span>Jubayer</span></h1>
          <p className={styles.role}>Environmentalist &amp;<br />Senior Environmental Specialist</p>
          <p className={styles.introduction}>
            Connecting science, people, and policy to build a more sustainable future.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={site.cvHref} download>
              Download CV <Download size={17} aria-hidden="true" />
            </a>
            <a className={styles.contact} href="#contact">
              Let’s connect <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className={styles.position}>Managing Director <span aria-hidden="true">/</span> SRCL</p>
          <p className={styles.leadership}>President <span>Bangladesh Poribeshbid Society</span></p>
        </div>
        <figure
          className={styles.gallery}
          aria-label="Professional and personal moments"
          aria-roledescription="carousel"
          onFocusCapture={(event) => setFocused(event.target.matches(":focus-visible"))}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
          }}
        >
          <div className={styles.frame}>
            {heroSlides.map((slide, index) => (
              <div
                key={slide.src}
                className={`${styles.slide} ${index === active ? styles.activeSlide : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${heroSlides.length}: ${slide.label}`}
                aria-hidden={index !== active}
                style={{
                  "--image-position": slide.position,
                  "--mobile-image-position": slide.mobilePosition,
                } as CSSProperties}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1600px) 720px, (min-width: 768px) 48vw, 90vw"
                  preload={index === 0}
                  className={styles.image}
                />
              </div>
            ))}
            <div className={styles.photoShade} aria-hidden="true" />
            <div className={styles.caption} aria-live={!rotating || focused ? "polite" : "off"} aria-atomic="true">
              <span className={styles.captionLabel}>In the field &amp; beyond</span>
              {heroSlides[active].caption}
            </div>
          </div>
          <div
            className={styles.controls}
            role="group"
            aria-label="Hero slideshow controls"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                dispatch({ type: "move", direction: event.key === "ArrowLeft" ? -1 : 1 });
              }
            }}
          >
            <div className={styles.dots} role="group" aria-label="Choose a hero photo">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.label}`}
                  aria-pressed={active === index}
                  onClick={() => dispatch({ type: "select", index })}
                ><span /></button>
              ))}
            </div>
            <div className={styles.arrows}>
              <button type="button" onClick={() => dispatch({ type: "move", direction: -1 })} aria-label="Previous hero slide"><ChevronLeft size={19} aria-hidden="true" /></button>
              <button type="button" onClick={() => dispatch({ type: "move", direction: 1 })} aria-label="Next hero slide"><ChevronRight size={19} aria-hidden="true" /></button>
              <button
                type="button"
                className={styles.autoplay}
                aria-label={rotating ? "Pause automatic slideshow" : "Start automatic slideshow"}
                onClick={() => {
                  setRotating(!rotating);
                  if (!rotating) setFocused(false);
                }}
              >{rotating ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}</button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
