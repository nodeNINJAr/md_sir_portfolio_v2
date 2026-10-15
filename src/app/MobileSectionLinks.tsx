"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const links = [
  { id: "bps", label: "BPS" },
  { id: "bmdf", label: "BMDF" },
  { id: "about", label: "About" },
  { id: "plantscholar", label: "PlantScholar" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "honors", label: "Awards" },
  { id: "expertise", label: "Expertise" },
  { id: "research", label: "Research" },
  { id: "speaking", label: "Speaking" },
  { id: "credentials", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function MobileSectionLinks() {
  const [active, setActive] = useState("bps");
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = links[0].id;
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= 185)
          current = link.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const tab = nav.current?.querySelector<HTMLAnchorElement>(
      `a[href="#${active}"]`,
    );
    if (tab && nav.current)
      nav.current.scrollTo({
        left:
          tab.offsetLeft - nav.current.clientWidth / 2 + tab.offsetWidth / 2,
        behavior: "instant",
      });
  }, [active]);

  return (
    <nav
      ref={nav}
      className={styles.mobileSectionLinks}
      aria-label="Explore portfolio sections"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          aria-current={active === link.id ? "location" : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
