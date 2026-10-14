import Image from "next/image";
import { bpsLeadership, leadership } from "@/lib/initiatives";
import { site } from "@/lib/data";
import styles from "./page.module.css";

export function Leadership() {
  return (
    <section id="bmdf" className={`${styles.section} ${styles.leadershipSection}`} aria-labelledby="leadership-title">
      <div className={styles.container}>
      <div className={styles.leadershipGrid}>
        <div><p className={styles.eyebrow}>Institutional leadership</p><h2 id="leadership-title">Leadership &amp; Institutional Contributions</h2><p className={styles.leadershipIntro}>Public representation alongside environmental consulting, research, and professional practice.</p></div>
        <article className={styles.leadershipRole}>
          {leadership.logo && <Image src={leadership.logo} alt="BMDF logo" width={160} height={90} className={styles.logo} />}
          <p className={styles.term}>{leadership.term} / Executive Committee</p>
          <h3>{leadership.role}<span>{leadership.organization}</span></h3>
          <p className={styles.leadershipName}>{site.name}</p>
          <p>{leadership.description}</p>
          {leadership.photo && <Image src={leadership.photo.src} alt={leadership.photo.alt} width={800} height={500} className={styles.awardImage} />}
          {leadership.contributions.length > 0 && <ul>{leadership.contributions.map((item) => <li key={item.title}><h4>{item.title}</h4><p>{item.description}</p>{item.href && <a href={item.href} target="_blank" rel="noopener noreferrer">View contribution</a>}</li>)}</ul>}
        </article>
      </div>
      <article className={styles.bpsRole} aria-labelledby="bps-title">
        <a href={bpsLeadership.image} target="_blank" rel="noopener noreferrer" aria-label="View BPS election announcement (opens in a new tab)">
          <Image src={bpsLeadership.image} alt={bpsLeadership.alt} width={1440} height={1440} sizes="(min-width: 900px) 430px, 90vw" className={styles.bpsImage} />
        </a>
        <div>
          <p className={styles.eyebrow}>Documented election announcement</p>
          <h3 id="bps-title">{bpsLeadership.role}</h3>
          <p className={styles.bpsOrganization}>{bpsLeadership.organization}</p>
          <p className={styles.leadershipName}>{site.name}</p>
          <p className={styles.bpsDescription}>{bpsLeadership.description}</p>
        </div>
      </article>
      </div>
    </section>
  );
}
