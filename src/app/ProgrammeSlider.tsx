"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { programmes } from "@/lib/programmes";
import pageStyles from "./page.module.css";
import styles from "./Programmes.module.css";

function moveTrack(element: HTMLDivElement | null, direction: number, reduced: boolean) {
  if (!element) return;
  const card = element.firstElementChild as HTMLElement | null;
  const step = (card?.offsetWidth ?? element.clientWidth) + 24;
  const end = element.scrollWidth - element.clientWidth;
  const left = direction > 0
    ? element.scrollLeft >= end - 2 ? 0 : Math.min(end, element.scrollLeft + step)
    : element.scrollLeft <= 2 ? end : Math.max(0, element.scrollLeft - step);
  element.scrollTo({ left, behavior: reduced ? "instant" : "smooth" });
}

export function ProgrammeSlider() {
  const track = useRef<HTMLDivElement>(null);
  const pauseUntil = useRef(0);
  const drag = useRef({ active: false, moved: false, x: 0, left: 0 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!playing || hovered || focused || interacting || reducedMotion !== false) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && Date.now() >= pauseUntil.current)
        moveTrack(track.current, 1, false);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, interacting, reducedMotion]);

  function finishInteraction() {
    drag.current.active = false;
    setInteracting(false);
    pauseUntil.current = Date.now() + 5000;
  }

  return (
    <section
      id="programmes"
      className={`${pageStyles.section} ${pageStyles.creamSection}`}
      aria-labelledby="programmes-title"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className={pageStyles.container}>
        <div className={styles.heading}>
          <div>
            <p className={pageStyles.eyebrow}>Programmes & field notes</p>
            <h2 id="programmes-title">Programmes &amp; <span className={pageStyles.headingAccent}>Events</span></h2>
          </div>
          <Link href="/programmes" className={pageStyles.textLink}>View all programmes <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div
          className={`${styles.slider} ${interacting ? styles.dragging : ""}`}
          ref={track}
          id="programme-slides"
          tabIndex={0}
          aria-label="Programme previews"
          onWheel={() => { pauseUntil.current = Date.now() + 5000; }}
          onDragStart={(event) => event.preventDefault()}
          onPointerDown={(event) => {
            if (event.pointerType === "mouse" && event.button !== 0) return;
            setInteracting(true);
            drag.current = {
              active: event.pointerType === "mouse",
              moved: false,
              x: event.clientX,
              left: event.currentTarget.scrollLeft,
            };
          }}
          onPointerMove={(event) => {
            if (!drag.current.active) return;
            const distance = event.clientX - drag.current.x;
            if (!drag.current.moved && Math.abs(distance) < 6) return;
            drag.current.moved = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.currentTarget.scrollLeft = drag.current.left - distance;
          }}
          onPointerUp={finishInteraction}
          onPointerCancel={finishInteraction}
          onLostPointerCapture={finishInteraction}
          onPointerLeave={() => {
            if (drag.current.active && !drag.current.moved) finishInteraction();
          }}
          onClickCapture={(event) => {
            if (drag.current.moved) {
              event.preventDefault();
              event.stopPropagation();
              drag.current.moved = false;
            }
          }}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              moveTrack(track.current, event.key === "ArrowLeft" ? -1 : 1, reducedMotion === true);
            }
          }}
        >
          {programmes.map((programme) => (
            <article className={styles.preview} key={programme.id}>
              <Link href={`/programmes#${programme.id}`} className={styles.previewLink}>
                <div className={styles.cover}>
                  <Image src={programme.photos[0].src} alt={programme.photos[0].alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" />
                </div>
                <div className={styles.previewCopy}>
                  <p className={styles.category}>{programme.category}</p>
                  <h3>{programme.title}</h3>
                  <span className={styles.galleryLink}>View gallery · {programme.photos.length} photos <ArrowUpRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.controls} role="group" aria-label="Programme slider controls">
          <span>Swipe or drag to explore</span>
          <button type="button" aria-label="Previous programmes" aria-controls="programme-slides" onClick={() => moveTrack(track.current, -1, reducedMotion === true)}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Next programmes" aria-controls="programme-slides" onClick={() => moveTrack(track.current, 1, reducedMotion === true)}><ChevronRight aria-hidden="true" /></button>
          {reducedMotion !== true && (
            <button
              type="button"
              aria-label={playing ? "Pause programme slideshow" : "Play programme slideshow"}
              aria-controls="programme-slides"
              onClick={() => {
                setPlaying(!playing);
                if (!playing) {
                  setFocused(false);
                  setHovered(false);
                }
              }}
            >
              {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
