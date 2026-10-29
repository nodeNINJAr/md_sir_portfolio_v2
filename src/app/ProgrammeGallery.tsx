"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { Programme } from "@/lib/programmes";
import styles from "./Programmes.module.css";

export function ProgrammeGallery({ programme }: { programme: Programme }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = programme.photos[selected];
  function move(direction: number) {
    setSelected((current) => (current + direction + programme.photos.length) % programme.photos.length);
  }
  return (
    <div className={styles.gallery}>
      <button type="button" className={styles.galleryMain} onClick={() => dialog.current?.showModal()} aria-label={`Enlarge photo ${selected + 1}: ${programme.title}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" />
        <span className={styles.enlarge}><Expand size={18} aria-hidden="true" /> View full photo</span>
      </button>
      <div className={styles.thumbnails} role="group" aria-label={`${programme.title} photos`}>
        {programme.photos.map((item, index) => (
          <button key={item.src} type="button" aria-label={`Show photo ${index + 1}: ${programme.title}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <Image src={item.src} alt="" fill sizes="80px" />
          </button>
        ))}
      </div>
      <p className={styles.photoCount}>{selected + 1} / {programme.photos.length} photos</p>
      <dialog ref={dialog} className={styles.lightbox} aria-label={`${programme.title} photo viewer`} onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
        <div className={styles.lightboxHeader}>
          <p>{programme.title} · {selected + 1} / {programme.photos.length}</p>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close photo viewer"><X aria-hidden="true" /></button>
        </div>
        <div className={styles.fullPhoto}><Image src={photo.src} alt={photo.alt} fill sizes="95vw" /></div>
        {programme.photos.length > 1 && <div className={styles.lightboxControls}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft aria-hidden="true" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next photo"><ChevronRight aria-hidden="true" /></button>
        </div>}
      </dialog>
    </div>
  );
}
