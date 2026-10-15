import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import {
  affiliations,
  education,
  expertiseAreas,
  journey,
  site,
  trainings,
} from "@/lib/data";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { ContactForm } from "./ContactForm";
import { EnvironmentalProjects } from "./EnvironmentalProjects";
import { PlantScholar } from "./PlantScholar";
import { Leadership } from "./Leadership";
import { BPSLeadership } from "./BPSLeadership";
import { MobileSectionLinks } from "./MobileSectionLinks";
import { Engagements } from "./Engagements";
import {
  awardPhotos,
  experienceLogos,
  groupedPublications,
} from "@/lib/portfolio";
import { srclLeadership } from "@/lib/initiatives";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Md. Abu Jubayer — Environmentalist & Senior Environmental Specialist",
  description:
    "Md. Abu Jubayer: environmentalist, senior environmental specialist, environmental and climate consultant, and Managing Director of SRCL. Explore professional environmental work, PlantScholar, BMDF leadership, research, and recognition.",
};

export default function PortfolioV2() {
  return (
    <div className={styles.page}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Navigation />
      <Hero />

      <main id="main-content">
        <MobileSectionLinks />
        <BPSLeadership />
        <Leadership />
        <section
          id="about"
          className={`${styles.section} ${styles.aboutSection}`}
          aria-labelledby="about-title"
        >
          <div className={`${styles.container} ${styles.aboutGrid}`}>
            <div className={styles.portrait}>
              <Image
                src="/images/profile/abu-jubayer.jpg"
                alt="Abu Jubayer seated in his office"
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className={styles.coverImage}
              />
            </div>
            <div className={styles.aboutCopy}>
              <h2 id="about-title">
                An environmentalist working at the intersection of science,
                people, and nature.
              </h2>
              <p>
                Md. Abu Jubayer is an environmentalist (পরিবেশবিদ), Senior
                Environmental Specialist, and Environmental &amp; Climate
                Consultant. He works at the intersection of environmental
                science, climate policy, and development planning. His
                experience connects technical analysis with the decisions that
                shape communities, infrastructure, and natural resources.
              </p>
              <p>
                With more than 15 years of professional experience, his work
                spans government initiatives, development projects, applied
                research, and environmental advisory.
              </p>
              <p>
                He currently serves as{" "}
                <a
                  className={styles.textLink}
                  href={srclLeadership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Managing Director of Sustainable Research and Consultancy Ltd.
                  (SRCL) <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                .
              </p>
              <div className={styles.identityTags}>
                {[
                  "Environmentalist",
                  "Environmental & Climate Consultant",
                  "Green Innovation Advocate",
                  "Sustainability Professional",
                  "Environmental Researcher",
                ].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <a className={styles.button} href="#experience">
                Explore My Journey <ChevronRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.statement} aria-labelledby="statement-title">
          <div className={styles.container}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>
            <h2 id="statement-title">Professional Statement</h2>
            <p>
              Environmental decisions matter most when they work for the people
              and places they affect. The practice connects rigorous research
              with on-the-ground understanding, turning complex environmental
              questions into practical, informed action.
            </p>
          </div>
        </section>

        <PlantScholar />

        <section
          id="experience"
          className={`${styles.section} ${styles.experienceSection}`}
          aria-labelledby="experience-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Professional experience</p>
              <h2 id="experience-title">
                Experience that connects evidence to action.
              </h2>
              <p>
                Environmental advisory, applied research, and development
                planning across government, development, and academic settings.
              </p>
            </div>
            <article className={styles.currentLeadership}>
              <div>
                <p className={styles.eyebrow}>{srclLeadership.status}</p>
                <h3>{srclLeadership.role}</h3>
                <p>{srclLeadership.organization}</p>
              </div>
              <div>
                <p>{srclLeadership.description}</p>
                <a
                  className={styles.textLink}
                  href={srclLeadership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit SRCL <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
            <div className={styles.experienceTimeline}>
              {journey.map((item, index) => (
                <article
                  className={styles.experienceCard}
                  key={`${item.organization}-${item.period}`}
                >
                  <div className={styles.logoPanel}>
                    {experienceLogos[index] ? (
                      <Image
                        src={experienceLogos[index]}
                        alt=""
                        width={220}
                        height={100}
                        className={styles.logo}
                      />
                    ) : (
                      <span>
                        {item.organization ===
                        "Sustainable Research & Consultancy Ltd."
                          ? "SRCL"
                          : "RCC"}
                      </span>
                    )}
                  </div>
                  <h3>{item.organization}</h3>
                  <p>
                    <strong>Role:</strong> {item.role}
                  </p>
                  <p>
                    <strong>Timeline:</strong> {item.period}
                  </p>
                  <details className={styles.details}>
                    <summary>See Details</summary>
                    <p>{item.note}</p>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`${styles.section} ${styles.creamSection}`}
          aria-labelledby="projects-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Environmental work</p>
              <h2 id="projects-title">
                Professional projects &amp; environmental contributions
              </h2>
              <p>
                Consulting and research assignments across environmental
                management, climate, water, and development planning. These are
                professional assignments, presented separately from SRCL’s
                PlantScholar initiative. Portfolio images provide context and
                are not verified photographs of each assignment.
              </p>
            </div>
            <EnvironmentalProjects />
          </div>
        </section>

        <section
          id="honors"
          className={`${styles.section} ${styles.recognitionSection}`}
          aria-labelledby="honors-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <h2 id="honors-title">Honors &amp; Awards</h2>
              <p>
                A collection of awards, appreciation plaques, and recognition
                from environmental and professional engagements.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {awardPhotos.map((award) => (
                <figure className={styles.awardCard} key={award.image}>
                  <a
                    href={award.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${award.title} photo at full size (opens in a new tab)`}
                  >
                    <Image
                      src={award.image}
                      alt={award.alt}
                      width={1365}
                      height={768}
                      sizes="(min-width: 768px) 43vw, 90vw"
                      className={styles.awardImage}
                    />
                  </a>
                  <figcaption>
                    <h3>{award.title}</h3>
                    <p>{award.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className={`${styles.section} ${styles.paleSection}`}
          aria-labelledby="expertise-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <h2 id="expertise-title">Areas Of Expertise</h2>
              <p>
                Technical support from assessment and planning through
                implementation, monitoring, and learning.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {expertiseAreas.map((area) => (
                <article className={styles.expertiseCard} key={area.number}>
                  <span className={styles.areaNumber}>{area.number}</span>
                  <h3>{area.title}</h3>
                  <ul>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#contact" className={styles.textLink}>
                    Discuss a project{" "}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="research"
          className={`${styles.section} ${styles.researchSection}`}
          aria-labelledby="research-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <h2 id="research-title">Research &amp; Publications</h2>
              <p>
                Published and ongoing research on water, sanitation,
                environmental management, and disaster risk.
              </p>
            </div>
            <div className={styles.researchGroups}>
              {groupedPublications.map((group) => (
                <section
                  key={group.subject}
                  aria-label={group.subject}
                  className={styles.researchGroup}
                >
                  <h3>{group.subject}</h3>
                  <div>
                    {group.publications.map((publication) => (
                      <article
                        className={styles.publicationRow}
                        key={publication.title}
                      >
                        <p className={styles.publicationYear}>
                          {publication.year}
                        </p>
                        <div>
                          <h4>{publication.title}</h4>
                          <p>{publication.venue}</p>
                        </div>
                        {publication.href && (
                          <a
                            className={styles.textLink}
                            href={publication.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Read publication: ${publication.title}`}
                          >
                            Read publication{" "}
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section
          id="speaking"
          className={`${styles.section} ${styles.creamSection}`}
          aria-labelledby="speaking-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <h2 id="speaking-title">
                Knowledge Sharing &amp; Youth Engagements
              </h2>
              <p>
                Bringing environmental knowledge closer to institutions, teams,
                young people, and communities.
              </p>
            </div>
            <Engagements />
            <div className={styles.videoGrid}>
              <div>
                <h3>Meet Abu Jubayer</h3>
                <p>An introduction to the person behind the practice.</p>
              </div>
              <iframe
                src="https://www.youtube.com/embed/tu2uyGDKbfw"
                title="Meet Abu Jubayer — introduction"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section
          id="credentials"
          className={`${styles.section} ${styles.credentialsSection}`}
          aria-labelledby="credentials-title"
        >
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <h2 id="credentials-title">
                Education &amp; Professional Development
              </h2>
              <p>
                The academic foundation and continuing learning behind the
                practice.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {education.map((item) => (
                <article className={styles.researchCard} key={item.degree}>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
            <div className={styles.credentialsGrid}>
              <div>
                <h3>Training &amp; Development</h3>
                <ul>
                  {trainings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Professional Affiliations</h3>
                <ul>
                  {affiliations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`${styles.section} ${styles.paleSection}`}
          aria-labelledby="contact-title"
        >
          <div className={`${styles.container} ${styles.contactGrid}`}>
            <div>
              <h2 id="contact-title">Contact Me</h2>
              <p className={styles.contactLead}>
                Let’s work together on informed environmental decisions and a
                more resilient future.
              </p>
              <address className={styles.contactDetails}>
                <a href={`mailto:${site.email}`}>
                  <Mail size={19} aria-hidden="true" />
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <Phone size={19} aria-hidden="true" />
                  {site.phone}
                </a>
                <span>
                  <MapPin size={19} aria-hidden="true" />
                  {site.location}
                </span>
              </address>
              <a
                className={styles.textLink}
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className={styles.button} href={site.cvHref} download>
                Download CV <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <a href="#summary">Back to top ↑</a>
            <a href="#about">About Abu Jubayer</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
