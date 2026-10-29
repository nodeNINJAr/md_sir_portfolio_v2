import type { Metadata } from "next";
import Link from "next/link";
import { programmes } from "@/lib/programmes";
import { Navigation } from "../Navigation";
import { ProgrammeGallery } from "../ProgrammeGallery";
import pageStyles from "../page.module.css";
import styles from "../Programmes.module.css";

export const metadata: Metadata = {
  title: "Programmes & Events — Md. Abu Jubayer",
  description: "Explore programme, conference, workshop, and field-visit photo galleries from Abu Jubayer’s professional and community engagements.",
};

export default function ProgrammesPage() {
  return (
    <div className={pageStyles.page}>
      <a href="#programme-content" className={pageStyles.skipLink}>Skip to content</a>
      <Navigation homePage={false} />
      <main id="programme-content" className={styles.archive}>
        <div className={pageStyles.container}>
          <header className={styles.archiveHeader}>
            <p className={pageStyles.eyebrow}>Conferences · Workshops · Community</p>
            <h1>Programmes &amp; Events</h1>
            <p>A photographic record of professional exchanges, field visits, and community initiatives. Choose a programme to explore its gallery.</p>
          </header>
          <nav className={styles.eventIndex} aria-label="Choose a programme">
            {programmes.map((programme) => <a key={programme.id} href={`#${programme.id}`}>{programme.title}</a>)}
          </nav>
          <div className={styles.programmeGrid}>
            {programmes.map((programme) => (
              <article key={programme.id} id={programme.id} className={styles.programme}>
                <p className={styles.category}>{programme.category}</p>
                <h2>{programme.title}</h2>
                <p className={styles.description}>{programme.description}</p>
                <ProgrammeGallery programme={programme} />
              </article>
            ))}
          </div>
          <Link href="/" className={styles.backLink}>← Back to the portfolio</Link>
        </div>
      </main>
    </div>
  );
}
