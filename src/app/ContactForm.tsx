"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";
import styles from "./page.module.css";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="v2-name">Your name</label>
      <input
        id="v2-name"
        name="name"
        autoComplete="name"
        required
        placeholder="Full name"
      />
      <label htmlFor="v2-email">Email address</label>
      <input
        id="v2-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@example.com"
      />
      <label htmlFor="v2-message">How can I help?</label>
      <textarea
        id="v2-message"
        name="message"
        rows={4}
        required
        placeholder="Tell me about your project or collaboration."
      />
      <p className={styles.formNote}>
        This opens a draft in your email app for you to send.
      </p>
      <button className={`${styles.button} ${styles.darkButton}`} type="submit">
        Open email draft <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      {prepared && (
        <p role="status" className={styles.formNote}>
          Email draft requested. If your email app did not open, write directly
          to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
