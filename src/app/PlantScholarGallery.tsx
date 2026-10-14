"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { plantScholarPhotos } from "@/lib/initiatives";
import styles from "./PlantScholarGallery.module.css";

export function PlantScholarGallery() {
  const [selected, setSelected] = useState(0);
  const photo = plantScholarPhotos[selected];

  return (
    <figure className={styles.gallery}>
      <div className={styles.frame}><Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1440px) 620px, (min-width: 900px) 42vw, 90vw" className={styles.image} /></div>
      <figcaption><span>{photo.caption}</span><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.caption} — view full photo (opens in a new tab)`}>View photo <ArrowUpRight size={15} aria-hidden="true" /></a></figcaption>
      <div className={styles.thumbnails} role="group" aria-label="Choose a PlantScholar signing ceremony photo">
        {plantScholarPhotos.map((item, index) => <button key={item.src} type="button" aria-pressed={selected === index} aria-label={`Show photo ${index + 1}: ${item.caption}`} onClick={() => setSelected(index)}><Image src={item.src} alt="" width={1280} height={960} sizes="(min-width: 900px) 200px, 30vw" /></button>)}
      </div>
    </figure>
  );
}
