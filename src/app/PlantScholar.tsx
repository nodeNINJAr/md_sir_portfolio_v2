import { ArrowUpRight } from "lucide-react";
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
        <p className={styles.eyebrow}>
          Featured SRCL initiative · বৃক্ষ বৃত্তি
        </p>
        <div className={styles.initiativeGrid}>
          <div>
            <h2 id="plantscholar-title">{profile.heading}</h2>
            <p
              className={
                profile.overview
                  ? styles.initiativeOverview
                  : styles.placeholder
              }
            >
              {profile.overview ??
                "Project overview awaiting verified information."}
            </p>
            <div className={styles.initiativePartner}>
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
            </div>
            <div className={styles.initiativeTopics}>
              {topics.map(([title, content]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p className={content ? undefined : styles.placeholder}>
                    {content ?? "Verified details to be added."}
                  </p>
                </div>
              ))}
            </div>
            <h3 className={styles.featureTitle}>
              Programme &amp; monitoring features
            </h3>
            {profile.features.length ? (
              <ul>
                {profile.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : (
              <p className={styles.placeholder}>
                Confirmed platform features to be added.
              </p>
            )}
            <a
              className={`${styles.button} ${styles.darkButton}`}
              href={profile.website ?? "#contact"}
              {...(profile.website
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {profile.website
                ? "Explore PlantScholar"
                : "Ask about PlantScholar"}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <PlantScholarGallery />
        </div>
      </div>
    </section>
  );
}
