import { projects, publications } from "./data";

export const experienceLogos = [
  "/images/organizations/Logo_of_PKSF.svg",
  undefined,
  "/images/organizations/lged.png",
  undefined,
  "/images/organizations/buet.svg",
  "/images/organizations/jica.svg",
];

// These are portfolio illustrations, rather than photos of each named project.
export const projectImages = [
  "/images/story/research-analysis.jpg",
  "/images/story/selected-projects.jpg",
  "/images/profile/aerial-drone-survey.jpg",
  "/images/story/services-advisory.jpg",
  "/images/story/expertise-notes.jpg",
  "/images/story/capacity-building.jpeg",
  "/images/story/kuaa-skill-session.png",
  "/images/story/projects.jpg",
  "/images/profile/haor.jpg",
  "/images/story/selected-projects.jpg",
  "/images/profile/aerial-drone-survey.jpg",
  "/images/profile/haor.jpg",
  "/images/story/projects.jpg",
];

export const awardPhotos = [
  {
    image: "/images/awards/1.jpeg",
    title: "International Climate Camp",
    description: "Recognition plaques from the International Climate Camp.",
    alt: "Three framed International Climate Camp plaques in wooden presentation boxes",
  },
  {
    image: "/images/awards/2.jpeg",
    title: "Environmental Recognition",
    description:
      "National Environmental Olympiad 2023 and Greenman Award 2026 plaques.",
    alt: "SRCL silver sponsor appreciation plaque beside Abu Jubayer’s Greenman Award 2026",
  },
  {
    image: "/images/awards/3.jpeg",
    title: "Conservation & Environmental Engagement",
    description:
      "A display of conservation and environmental olympiad recognition plaques.",
    alt: "Excellence in Conservation Award display and a National Environmental Olympiad plaque",
  },
  {
    image: "/images/awards/4.jpeg",
    title: "Manifesto Talk Appreciation",
    description:
      "Token of appreciation from the May 31, 2025 event at the Department of Environment.",
    alt: "Manifesto Talk token of appreciation in a green presentation box",
  },
];

export const speaking = [
  {
    title: "Environmental Training",
    description:
      "Applied environmental management, safeguards, and compliance.",
    image: "/images/story/kuaa-skill-session.png",
  },
  {
    title: "Climate & Policy Conversations",
    description:
      "Knowledge sharing on climate resilience and evidence-based planning.",
    image: "/images/profile/abu-jubayer-speaking-edited.jpg",
  },
  {
    title: "Professional Capacity Building",
    description:
      "Practical training for institutions, teams, and decision makers.",
    image: "/images/story/capacity-building.jpeg",
  },
];

export const projectCategories = [
  "Environmental Management",
  "Climate Change and Sustainability",
  "Water Resources and Disaster Risk",
  "GIS and Spatial Analysis",
  "Environmental Research",
  "Development Planning and Advisory",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

// Classification follows existing descriptions; original project fields stay intact.
export const categorizedProjects = projects.map((project, index) => {
  const categories: ProjectCategory[] = [];
  if (project.category === "Environmental Management")
    categories.push("Environmental Management");
  if (
    ["Climate & Sustainability", "Carbon & Climate Finance"].includes(
      project.category,
    )
  )
    categories.push("Climate Change and Sustainability");
  if (project.category === "Water & Disaster Risk")
    categories.push("Water Resources and Disaster Risk");
  if (project.category === "Development Planning & Advisory")
    categories.push("Development Planning and Advisory");
  if (/\bGIS\b|spatial database|land-use mapping/i.test(project.description))
    categories.push("GIS and Spatial Analysis");
  if (project.role === "Researcher") categories.push("Environmental Research");
  return {
    ...project,
    image: projectImages[index],
    categories,
    kind: "Professional consulting / research assignment",
  };
});

export const publicationSubjects = [
  "Water and Sanitation",
  "Environmental Management",
  "Climate and Disaster Risk",
  "Waste Management",
  "Environmental Research",
] as const;

// Subject grouping supplements, rather than edits, the academic titles.
export const groupedPublications = publicationSubjects.map((subject) => ({
  subject,
  publications: publications.filter((publication, index) => {
    const subjects = [
      "Environmental Management",
      "Climate and Disaster Risk",
      "Water and Sanitation",
      "Water and Sanitation",
      "Water and Sanitation",
      "Climate and Disaster Risk",
      "Water and Sanitation",
      "Climate and Disaster Risk",
      "Waste Management",
      "Waste Management",
      "Environmental Research",
    ];
    return subjects[index] === subject;
  }),
}));
