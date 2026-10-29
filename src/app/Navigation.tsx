"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import styles from "./Navigation.module.css";

const primaryIds = [
  "#summary",
  "#about",
  "#experience",
  "#credentials",
  "/programmes",
];
const primaryLinks = primaryIds.map((href) =>
  navLinks.find((link) => link.href === href)!,
);
const moreLinks = [
  ...navLinks.filter((link) => !primaryIds.includes(link.href)),
  { label: "Expertise", href: "#expertise" },
  { label: "Knowledge Sharing & Youth", href: "#speaking" },
];

export function Navigation({ homePage = true }: { homePage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<"more" | "all">("more");
  const [scrolled, setScrolled] = useState(false);
  const drawer = useRef<HTMLDialogElement>(null);
  const navigationHref = (href: string) =>
    !homePage && href.startsWith("#") ? `/${href}` : href;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function openDrawer(mode: "more" | "all") {
    setDrawerMode(mode);
    drawer.current?.showModal();
    setOpen(true);
  }

  function closeDrawer() {
    drawer.current?.close();
    setOpen(false);
  }

  return (
    <>
      <header
        className={`${styles.header} ${!homePage || scrolled || open ? styles.headerSolid : ""}`}
      >
        <div className={styles.navBar}>
          <Link
            href={navigationHref("#summary")}
            className={styles.brand}
            aria-label={`${site.name} — Home`}
          >
            <span className={styles.brandMark} aria-hidden="true">
              AJ
            </span>
            <span className={styles.brandName}>
              <span>Abu</span>
              <strong>
                Jubaye<span className={styles.leafLetter}>r<Leaf className={styles.brandLeaf} aria-hidden="true" /></span>
              </strong>
            </span>
          </Link>
          <button
            className={styles.menuToggle}
            aria-expanded={open && drawerMode === "all"}
            aria-controls="v2-navigation-drawer"
            aria-haspopup="dialog"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => openDrawer("all")}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav
            id="v2-navigation"
            aria-label="Main navigation"
            className={styles.navigation}
          >
            {primaryLinks.map(({ label, href }) => (
              <Link key={href} href={navigationHref(href)} aria-current={!homePage && href === "/programmes" ? "page" : undefined} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <button
              className={styles.moreButton}
              type="button"
              aria-expanded={open && drawerMode === "more"}
              aria-controls="v2-navigation-drawer"
              aria-haspopup="dialog"
              onClick={() => openDrawer("more")}
            >
              More <ChevronDown size={16} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>
      <dialog
        ref={drawer}
        id="v2-navigation-drawer"
        className={styles.drawer}
        aria-labelledby="v2-drawer-title"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            closeDrawer();
        }}
      >
        <div className={styles.drawerHeader}>
          <h2 id="v2-drawer-title">
            {drawerMode === "all" ? "Navigation" : "Explore more"}
          </h2>
          <button
            className={styles.drawerClose}
            type="button"
            aria-label="Close navigation drawer"
            onClick={closeDrawer}
          >
            <X size={25} aria-hidden="true" />
          </button>
        </div>
        <nav
          className={styles.drawerLinks}
          aria-label={
            drawerMode === "all" ? "Mobile navigation" : "Additional navigation"
          }
        >
          {(drawerMode === "all"
            ? [...primaryLinks, ...moreLinks]
            : moreLinks
          ).map(({ label, href }) => (
            <Link key={href} href={navigationHref(href)} aria-current={!homePage && href === "/programmes" ? "page" : undefined} onClick={closeDrawer}>
              {label}
            </Link>
          ))}
        </nav>
      </dialog>
    </>
  );
}
