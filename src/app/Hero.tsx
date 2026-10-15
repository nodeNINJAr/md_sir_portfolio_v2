"use client";

import Image from "next/image";
import { useEffect, useReducer, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Pause,
  Play,
  Waves,
  Mountain,
  Leaf,
  Sprout,
  Globe2,
  Users,
} from "lucide-react";
import { site } from "@/lib/data";
import { heroSlides, heroTimerReducer, HERO_SLIDE_SECONDS } from "@/lib/hero";
import styles from "./Hero.module.css";

export function Hero() {
  const [{ active, remaining, cycle }, dispatch] = useReducer(
    heroTimerReducer,
    { active: 0, remaining: HERO_SLIDE_SECONDS, cycle: 0 },
  );
  const [rotating, setRotating] = useState(true);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const currentSlide = heroSlides[active];
  const slideHeading = currentSlide.heading;
  const isNatureSlide = currentSlide.label === "Nature portrait";
  const isPlantingSlide = currentSlide.label === "Tree planting";
  const isPlacesSlide = currentSlide.label === "Personal photograph";
  const isProfileSlide = currentSlide.label === "Professional engagement";
  const isScholarSlide = currentSlide.label === "PlantScholar engagement";
  const isEditorialSlide =
    isNatureSlide ||
    isPlantingSlide ||
    isPlacesSlide ||
    isProfileSlide ||
    isScholarSlide;

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
      className={`${styles.hero} ${isEditorialSlide ? styles.natureHero : ""} ${isPlantingSlide ? styles.plantingHero : ""} ${isPlacesSlide ? styles.placesHero : ""} ${isProfileSlide ? styles.profileHero : ""} ${isScholarSlide ? styles.scholarHero : ""}`}
      aria-labelledby="v2-title"
      aria-roledescription="carousel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`${styles.slide} ${index === active ? styles.activeSlide : ""}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${heroSlides.length}: ${slide.label}`}
          aria-hidden={index !== active}
          style={
            {
              "--image-position": slide.position,
              "--mobile-image-position": slide.mobilePosition,
            } as CSSProperties
          }
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            preload={index === 0}
            className={styles.image}
          />
        </div>
      ))}
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.gradient} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.heroCopy}>
          {isEditorialSlide && (
            <p className={styles.natureKicker}>
              {isPlantingSlide
                ? "People · Trees · A greener tomorrow"
                : isPlacesSlide
                  ? "People · Places · Perspective"
                  : isProfileSlide
                    ? "Environmental science · Policy & practice · Sustainable solutions"
                    : isScholarSlide
                      ? "People · Trees · Sustainable future"
                      : currentSlide.tagline}
            </p>
          )}
          <h1 id="v2-title">
            {isNatureSlide ? (
              <>
                <span className={styles.natureTitleLine}>Connected</span>{" "}
                <span className={styles.natureTitleLine}>
                  With{" "}
                  <span className={styles.natureWord}>
                    Nature
                    <Leaf className={styles.titleLeaf} aria-hidden="true" />
                  </span>
                </span>
              </>
            ) : isPlantingSlide ? (
              <>
                <span className={styles.natureTitleLine}>Planting</span>{" "}
                <span className={styles.plantingFor}>For</span>{" "}
                <span
                  className={`${styles.natureTitleLine} ${styles.natureWord}`}
                >
                  Tomorrow
                  <Sprout className={styles.titleLeaf} aria-hidden="true" />
                </span>
              </>
            ) : isPlacesSlide ? (
              <>
                <span className={styles.natureTitleLine}>People,</span>{" "}
                <span className={styles.natureTitleLine}>Places &amp;</span>{" "}
                <span
                  className={`${styles.natureTitleLine} ${styles.natureWord}`}
                >
                  Perspective
                </span>
              </>
            ) : isProfileSlide ? (
              <>
                <span className={styles.natureTitleLine}>Md. Abu</span>{" "}
                <span
                  className={`${styles.natureTitleLine} ${styles.natureWord}`}
                >
                  Jubayer
                  <Leaf className={styles.titleLeaf} aria-hidden="true" />
                </span>
              </>
            ) : isScholarSlide ? (
              <>
                Plant
                <span className={styles.natureWord}>
                  Scholar
                  <Sprout className={styles.titleLeaf} aria-hidden="true" />
                </span>
              </>
            ) : (
              slideHeading
            )}
          </h1>
          {isProfileSlide ? (
            <ul className={styles.profileRoles}>
              {"leadership" in currentSlide && (
                <li>
                  <span className={styles.leadershipText}>
                    {currentSlide.leadership.replace(/^-\s*/, "")}
                  </span>
                </li>
              )}
              {currentSlide.tagline.split(" | ").map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          ) : (
            <p className={styles.role}>{currentSlide.tagline}</p>
          )}
          {(isPlantingSlide || isPlacesSlide || isScholarSlide) && (
            <p className={styles.plantingTagline}>{currentSlide.tagline}</p>
          )}
          {isScholarSlide && (
            <dl className={styles.scholarPillars}>
              <div>
                <Sprout aria-hidden="true" />
                <div>
                  <dt>Plant</dt>
                  <dd>Sapling care</dd>
                </div>
              </div>
              <div>
                <Users aria-hidden="true" />
                <div>
                  <dt>People</dt>
                  <dd>Youth engagement</dd>
                </div>
              </div>
              <div>
                <Globe2 aria-hidden="true" />
                <div>
                  <dt>Nature</dt>
                  <dd>Tree stewardship</dd>
                </div>
              </div>
            </dl>
          )}
          <p className={styles.introduction}>{currentSlide.description}</p>
          {currentSlide.label === "Nature portrait" && (
            <div
              className={styles.natureThemes}
              aria-label="Environmental interests"
            >
              <span>
                <Waves aria-hidden="true" />
                <span>Rivers</span>
              </span>
              <span>
                <Mountain aria-hidden="true" />
                <span>Landscapes</span>
              </span>
              <span>
                <Leaf aria-hidden="true" />
                <span>Environment</span>
              </span>
            </div>
          )}
        </div>
        <div className={styles.actions}>
          <a className={styles.primary} href={site.cvHref} download>
            Download CV <Download size={18} aria-hidden="true" />
          </a>
          <a className={styles.contactButton} href="#contact">
            Contact Me <ChevronRight size={19} aria-hidden="true" />
          </a>
        </div>
        {isPlantingSlide && (
          <div
            className={styles.plantingThemes}
            aria-label="Environmental interests"
          >
            <span>
              <Sprout aria-hidden="true" />
              <span>Tree planting</span>
            </span>
            <span>
              <Globe2 aria-hidden="true" />
              <span>Environmental stewardship</span>
            </span>
            <span>
              <Users aria-hidden="true" />
              <span>Community action</span>
            </span>
          </div>
        )}
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
        <div
          className={styles.dots}
          role="group"
          aria-label="Choose a hero slide"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.label}`}
              aria-pressed={active === index}
              onClick={() => dispatch({ type: "select", index })}
            >
              <span />
            </button>
          ))}
        </div>
        <span
          className={styles.slideCount}
          aria-live={!rotating || focused ? "polite" : "off"}
          aria-atomic="true"
        >
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(heroSlides.length).padStart(2, "0")}
        </span>
        <span
          className={styles.countdown}
          role="timer"
          aria-live="off"
          aria-label={`${remaining} seconds until the next slide`}
          title={
            !rotating || focused || reducedMotion !== false
              ? "Countdown paused"
              : "Time until the next slide"
          }
        >
          {remaining}s
        </span>
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous hero slide"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next hero slide"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
        {reducedMotion !== true && (
          <button
            type="button"
            onClick={() => {
              setRotating(!rotating);
              if (!rotating) setFocused(false);
            }}
            aria-label={
              rotating
                ? "Pause automatic slideshow"
                : "Start automatic slideshow"
            }
          >
            {rotating ? (
              <Pause size={17} aria-hidden="true" />
            ) : (
              <Play size={17} aria-hidden="true" />
            )}
          </button>
        )}
      </div>
    </section>
  );
}
