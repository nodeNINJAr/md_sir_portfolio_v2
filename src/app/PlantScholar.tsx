import { ArrowUpRight, Sprout } from "lucide-react";
import { plantScholar, plantScholarPartner } from "@/lib/initiatives";
import { PlantScholarGallery } from "./PlantScholarGallery";
import styles from "./page.module.css";

export function PlantScholar() {
  const profile = plantScholar;
  const highlightedPhrase = "Germany-based company headquartered in Darmstadt";
  const partnerDescription =
    plantScholarPartner.description.split(highlightedPhrase);
  const topics = [
    ["Purpose & objectives", profile.purpose],
    ["Plant & environmental knowledge", profile.knowledge],
    ["Biodiversity & nature education", profile.biodiversity],
    ["Environmental & educational value", profile.value],
  ];

  return (
    <section
      id="plantscholar"
      className={`${styles.section} ${styles.initiativeSection}`}
      aria-labelledby="plantscholar-title"
    >
      <div className={styles.container}>
        <div className={styles.initiativeHeader}>
          <div>
            <p className={styles.eyebrow}>
              <Sprout size={18} aria-hidden="true" /> Featured SRCL initiative ·
              বৃক্ষ বৃত্তি
            </p>
            <h2 id="plantscholar-title">
              Plant<span className={styles.headingAccent}>Scholar</span>
              <span className={styles.initiativeTagline}>
                — Connecting People With Plants and Nature
              </span>
            </h2>
          </div>
          <a
            className={`${styles.button} ${styles.darkButton}`}
            href={profile.website ?? "#contact"}
            {...(profile.website
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Explore PlantScholar <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <p className={styles.initiativeLead}>
          {profile.overview ??
            "Project overview awaiting verified information."}
        </p>
        <div className={styles.initiativeShowcase}>
          <PlantScholarGallery />
          <aside
            className={styles.initiativePartner}
            aria-label="PlantScholar agreement with Spacenus"
          >
            <p className={styles.eyebrow}>An international connection</p>
            <h3>{plantScholarPartner.heading}</h3>
            <p>{plantScholarPartner.agreement}</p>
            <p>
              {partnerDescription[0]}
              {partnerDescription.length > 1 && (
                <>
                  <mark className={styles.partnerHighlight}>
                    {highlightedPhrase}
                  </mark>
                  {partnerDescription.slice(1).join(highlightedPhrase)}
                </>
              )}
            </p>
            <a
              className={styles.textLink}
              href={plantScholarPartner.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              About Spacenus · {plantScholarPartner.location}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
        </div>
        <div className={styles.initiativePillars}>
          {topics.map(([title, content], index) => (
            <div key={title}>
              <span className={styles.pillarIndex} aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{title}</h3>
              <p>{content ?? "Verified details to be added."}</p>
            </div>
          ))}
        </div>
        <div className={styles.programmeFeatures}>
          <h3>Programme &amp; monitoring features</h3>
          {profile.features.length ? (
            <ul>
              {profile.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p>Confirmed platform features to be added.</p>
          )}
        </div>
      </div>
    </section>
  );
}
