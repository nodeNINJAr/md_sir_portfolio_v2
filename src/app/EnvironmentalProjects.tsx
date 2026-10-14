"use client";

import { useState } from "react";
import Image from "next/image";
import { categorizedProjects, projectCategories, type ProjectCategory } from "@/lib/portfolio";
import styles from "./page.module.css";

export function EnvironmentalProjects() {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const visible = categorizedProjects.filter((project) => category === "All" || project.categories.includes(category));

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter professional assignments by subject">
        {(["All", ...projectCategories] as const).map((label) => (
          <button key={label} type="button" aria-pressed={category === label} onClick={() => setCategory(label)}>{label}</button>
        ))}
      </div>
      <p className={styles.resultCount} role="status">{visible.length} {visible.length === 1 ? "assignment" : "assignments"}{category !== "All" ? ` · ${category}` : " · Professional consulting and applied research"}</p>
      <div className={styles.cardGrid}>
        {visible.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.cardImage}><Image src={project.image} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw" className={styles.coverImage} /></div>
            <p className={styles.imageCaption}>Image from the wider portfolio</p>
            <p className={styles.projectCategory}>{project.categories[0]}</p>
            <h3>{project.title}</h3>
            <dl className={styles.projectMeta}><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Timeline</dt><dd>{project.period ?? "Not specified in the project record"}</dd></div></dl>
            <p className={styles.projectBrief}>{project.description}</p>
            <details className={styles.details}>
              <summary aria-label={`Read details: ${project.title}`}>Read project details</summary>
              <p><strong>Assignment category:</strong> {project.category}</p>
              {project.organization && <p><strong>Organisation:</strong> {project.organization}</p>}
              {project.location && <p><strong>Location:</strong> {project.location}</p>}
              <p>{project.description}</p>
              {project.contributions && <ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>}
            </details>
          </article>
        ))}
      </div>
    </>
  );
}
