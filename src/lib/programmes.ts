import { plantScholarPhotos } from "./initiatives";
import { youthActivities } from "./youth";

export type ProgrammePhoto = { src: string; alt: string };
export type Programme = {
  id: string;
  title: string;
  category: string;
  description: string;
  photos: ProgrammePhoto[];
};

function photos(event: string, files: string[]): ProgrammePhoto[] {
  return files.map((file, index) => ({
    src: `/images/newimages/${file}.jpg`,
    alt: `${event} — photograph ${index + 1}`,
  }));
}

// Group supplied photographs by event; no unconfirmed dates or roles are added.
export const programmes: Programme[] = [
  {
    id: "bcdp", title: "BCDP Knowledge Conference 2026", category: "Conference",
    description: "Conference sessions, conversations, and moments with fellow participants.",
    photos: photos("BCDP Knowledge Conference 2026", ["BCDP_con", ...Array.from({ length: 6 }, (_, i) => `BCDP_conf_${i + 1}`)]),
  },
  {
    id: "climate-summit", title: "Climate & Environment Summit · Thailand", category: "International engagement",
    description: "An international gathering around climate and environmental issues.",
    photos: photos("Climate and Environment Summit in Thailand", ["climate_and_env_summit_on_thai4", "climate_and_env_summit_on_thai", "climate_and_env_summit_on_thai.jpg1", "climate_and_env_summit_on_thai2", "climate_and_env_summit_on_thai3"]),
  },
  {
    id: "plantscholar", title: "PlantScholar · Announcements & Agreements", category: "Tree stewardship",
    description: "International announcement and signing-ceremony photographs from the PlantScholar initiative.",
    photos: [
      ...photos("International announcement of PlantScholar", ["International Announcement of Plant Scholar 1", "International Announcement of Plant Scholar ", "International Announcement of Plant Scholar2", "International Announcement of Plant Scholar3"]),
      ...plantScholarPhotos.filter((photo) => photo.src.startsWith("/images/plantscholar/")),
    ],
  },
  {
    id: "lst", title: "Livestock Services Transformation Workshop", category: "Workshop",
    description: "Sessions and participation at the Livestock Services Transformation (LST) workshop.",
    photos: photos("Livestock Services Transformation workshop", ["Workshop of the Livestock Services Transformation (LST) 3", "Workshop of the Livestock Services Transformation (LST) ", ...[1, 2, 4, 5].map((n) => `Workshop of the Livestock Services Transformation (LST) ${n}`)]),
  },
  {
    id: "psc", title: "Public Service Commission Study Presentation", category: "Presentation",
    description: "A presentation on feasibility and associated studies for the Public Service Commission (PSC).",
    photos: photos("Public Service Commission study presentation", ["Presentation on Feasibility and others accociated study of Public Service Commission  (PSC)  1", "Presentation on Feasibility and others accociated study of Public Service Commission  (PSC)  "]),
  },
  {
    id: "career-expo", title: "Stamford Career Expo 2026", category: "Youth & careers",
    description: "SRCL’s booth and conversations with participants at the Stamford career expo.",
    photos: photos("Stamford Career Expo 2026", ["Carrier Expo 2026_stamford2", "Carrier Expo 2026_stamford", "Carrier Expo 2026_stamford1", "Carrier Expo 2026_stamford3"]),
  },
  {
    id: "mongla", title: "Mongla Port Project Visit", category: "Field visit",
    description: "Photographs from a project visit in Mongla.",
    photos: photos("Mongla Port project visit", ["mongla_port_projects", "mongla_port_projects1", "mongla_port_projects2", "mongla_port_projects3"]),
  },
  {
    id: "legacy-srcl", title: "Legacy of SRCL", category: "Team & community",
    description: "Team gatherings and shared moments from SRCL’s Legacy programme.",
    photos: photos("Legacy of SRCL", ["Legacy of SRCL", "Legacy of SRCL1", "Legacy of SRCL2", "Legacy of SRCL3"]),
  },
  {
    id: "climate-camp", title: "Second International Climate Camp · Nepal", category: "International engagement",
    description: "A photograph from the international climate camp in Nepal.",
    photos: photos("Second International Climate Camp in Nepal", ["Partner_2nd_Internationa_Climate_Camp_(Nepal)"]),
  },
  {
    id: "tree-planting", title: "Tree Planting & Community Action", category: "Environment",
    description: "Working together to plant and care for a tree.",
    photos: photos("Tree planting with colleagues", ["tree_planting_on_compect_foundation_jubayere"]),
  },
  {
    id: "youth-challenge", title: "Youth Sustainability Challenge", category: "Youth & community",
    description: "Speaking and presenting plants at SRCL’s Youth Sustainability Challenge ceremony.",
    photos: youthActivities.photos.filter((photo) => photo.src.startsWith("/images/youth activities/")),
  },
];
