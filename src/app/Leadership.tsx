import Image from "next/image";
import { leadership } from "@/lib/initiatives";
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

      </div>
    </section>
  );
}
