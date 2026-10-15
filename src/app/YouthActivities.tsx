"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { youthActivities } from "@/lib/youth";
import styles from "./Engagements.module.css";
import pageStyles from "./page.module.css";

export function YouthActivities() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reducedMotion = useReducedMotion();
  const photo = youthActivities.photos[photoIndex];

  useEffect(() => {
    if (!playing || reducedMotion !== false) return;
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setPhotoIndex(
          (current) => (current + 1) % youthActivities.photos.length,
        );
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion, photoIndex]);

  return (
    <article
      id="youth-activities"
      className={styles.card}
      aria-labelledby="youth-title"
    >
      <div
        className={styles.image}
        aria-label="Youth engagement photo slideshow"
      >
        {youthActivities.photos.map((item, index) => (
          <div
            key={item.src}
            className={`${styles.photoSlide} ${index === photoIndex ? styles.photoActive : ""}`}
            aria-hidden={index !== photoIndex}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1440px) 460px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className={pageStyles.coverImage}
            />
          </div>
        ))}
        <div className={styles.photoControls}>
          {youthActivities.photos.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show youth photo ${index + 1}`}
              aria-pressed={photoIndex === index}
              onClick={() => setPhotoIndex(index)}
            >
              <span />
            </button>
          ))}
          <button
            type="button"
            aria-label={playing ? "Pause youth photos" : "Play youth photos"}
            onClick={() => setPlaying(!playing)}
          >
            {playing ? (
              <Pause size={14} aria-hidden="true" />
            ) : (
              <Play size={14} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <h3 id="youth-title">{youthActivities.title}</h3>
      <p>{photo.description}</p>
      <a
        className={pageStyles.textLink}
        href={photo.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${photo.caption} — view photo (opens in a new tab)`}
      >
        View photo <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </article>
  );
}
