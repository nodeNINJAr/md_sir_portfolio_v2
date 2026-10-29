import { projects, publications } from "./data";

export const experienceLogos = [
  undefined,
  "/images/organizations/lged.png",
  undefined,
  "/images/organizations/buet.svg",
  "/images/organizations/jica.svg",
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
    title: "BCDP Knowledge Conference 2026",
    description:
      "Conference participation and conversations with fellow attendees.",
    image: "/images/newimages/BCDP_conf_5.jpg",
    alt: "Three attendees standing in front of the BCDP Knowledge Conference 2026 backdrop",
  },
  {
    title: "Climate & Environment Summit · Thailand",
    description:
      "An international gathering around climate and environmental issues.",
    image: "/images/newimages/climate_and_env_summit_on_thai4.jpg",
    alt: "Summit attendees posing for a group photograph in a conference hall",
  },
  {
    title: "Livestock Services Transformation Workshop",
    description:
      "A workshop session for the Livestock Services Transformation (LST) project.",
    image: "/images/newimages/Workshop of the Livestock Services Transformation (LST) 3.jpg",
    alt: "A speaker addressing attendees at the Livestock Services Transformation workshop",
  },
  {
    title: "Public Service Commission Study Presentation",
    description:
      "A presentation on feasibility and associated studies for the Public Service Commission (PSC).",
    image: "/images/newimages/Presentation on Feasibility and others accociated study of Public Service Commission  (PSC)  1.jpg",
    alt: "Participants seated around a conference table during a Public Service Commission study presentation",
  },
  {
    title: "Mongla Port Project Visit",
    description:
      "A group photograph from a project visit in Mongla.",
    image: "/images/newimages/mongla_port_projects.jpg",
    alt: "A group of visitors standing outside a building during the Mongla Port project visit",
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
export const categorizedProjects = projects.map((project) => {
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
