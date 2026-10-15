import Image from "next/image";
import { bpsLeadership } from "@/lib/initiatives";
import { site } from "@/lib/data";
import styles from "./page.module.css";

export function BPSLeadership() {
  return (
    <section
      id="bps"
      className={`${styles.section} ${styles.bpsSection}`}
      aria-labelledby="bps-title"
    >
      <div className={styles.container}>
        <article className={styles.bpsRole} aria-labelledby="bps-title">
          <div className={styles.bpsCopy}>
            <p className={styles.eyebrow}>Documented election announcement</p>
            <h2 id="bps-title">{bpsLeadership.role}</h2>
            <p className={styles.bpsOrganization}>
              {bpsLeadership.organization}
            </p>
            <p className={styles.leadershipName}>{site.name}</p>
            <p className={styles.bpsDescription}>{bpsLeadership.description}</p>
          </div>
          <figure className={styles.bpsAnnouncement}>
            <a
              href={bpsLeadership.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View BPS election announcement (opens in a new tab)"
            >
              <Image
                src={bpsLeadership.image}
                alt={bpsLeadership.alt}
                width={1440}
                height={1440}
                sizes="(min-width: 900px) 430px, 90vw"
                className={styles.bpsImage}
              />
            </a>
            <figcaption>
              Bangladesh Poribeshbid Society · Election announcement
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
