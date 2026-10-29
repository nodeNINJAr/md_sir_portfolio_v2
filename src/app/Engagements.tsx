"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { speaking } from "@/lib/portfolio";
import { YouthActivities } from "./YouthActivities";
import styles from "./Engagements.module.css";
import pageStyles from "./page.module.css";

function moveCards(
  track: HTMLDivElement | null,
  direction: number,
  reduced: boolean,
) {
  if (!track) return;
  const card = track.firstElementChild as HTMLElement | null;
  const step = (card?.offsetWidth ?? track.clientWidth) + 24;
  const end = track.scrollWidth - track.clientWidth;
  const next =
    direction > 0
      ? track.scrollLeft >= end - 2
        ? 0
        : Math.min(end, track.scrollLeft + step)
      : track.scrollLeft <= 2
        ? end
        : Math.max(0, track.scrollLeft - step);
  track.scrollTo({ left: next, behavior: reduced ? "instant" : "smooth" });
}

export function Engagements() {
  const track = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!playing || hovered || focused || reducedMotion !== false) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) moveCards(track.current, 1, false);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, reducedMotion]);

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Knowledge sharing and youth engagement slideshow"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div ref={track} className={styles.track} id="engagement-cards">
        {speaking.map((item) => (
          <article className={styles.card} key={item.title}>
            <div className={styles.image}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1440px) 460px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className={pageStyles.coverImage}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a className={pageStyles.textLink} href="#contact">
              Discuss an engagement{" "}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
        <YouthActivities />
      </div>
      <div
        className={styles.controls}
        role="group"
        aria-label="Engagement slideshow controls"
      >
        <span>{speaking.length + 1} engagements</span>
        <button
          type="button"
          aria-label="Previous engagement cards"
          aria-controls="engagement-cards"
          onClick={() => moveCards(track.current, -1, reducedMotion === true)}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next engagement cards"
          aria-controls="engagement-cards"
          onClick={() => moveCards(track.current, 1, reducedMotion === true)}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={
            playing ? "Pause engagement slideshow" : "Play engagement slideshow"
          }
          onClick={() => {
            setPlaying(!playing);
            if (!playing) {
              setFocused(false);
              setHovered(false);
            }
          }}
        >
          {playing ? (
            <Pause size={17} aria-hidden="true" />
          ) : (
            <Play size={17} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
