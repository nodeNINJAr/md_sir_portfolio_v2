export type InitiativeProfile = {
  name: string;
  heading: string;
  overview: string | null;
  purpose: string | null;
  knowledge: string | null;
  biodiversity: string | null;
  features: string[];
  value: string | null;
  website: string | null;
  screenshot: { src: string; alt: string; caption: string } | null;
};

// Verified programme information: https://www.srclgroup.com/en/impact/plant-scholar
// Programme details are sourced above; the gallery below uses supplied ceremony photos.
export const plantScholar: InitiativeProfile = {
  name: "PlantScholar",
  heading: "PlantScholar — Connecting People With Plants and Nature",
  overview:
    "PlantScholar (Brikkho Britti) is an SRCL tree-stewardship initiative involving students and young people in planting, sustained care, and monitoring. It launched on 25 June 2026 at Jatiya Press Club, Dhaka, with Abu Jubayer, Managing Director of SRCL, as keynote speaker.",
  purpose:
    "Move beyond planting day by giving young participants responsibility for tree care and survival.",
  knowledge:
    "Sapling care guidance and species information accompany participation in the programme.",
  biodiversity:
    "Tree stewardship connects youth participation with planting, protection, and species-aware monitoring.",
  features: [
    "Tree geotagging with species and participant records",
    "Periodic photographs and care reports through a mobile app",
    "GIS and SAT-MRV monitoring of survival and growth",
    "Scholarship recognition for successful care and survival",
  ],
  value:
    "The programme combines practical tree care, youth engagement, and environmental monitoring.",
  website: "https://www.srclgroup.com/en/impact/plant-scholar",
  screenshot: null,
};

export const plantScholarPhotos = [
  {
    src: "/images/plantscholar/1.jpeg",
    alt: "Md. Abu Jubayer and attendees holding documents at the PlantScholar signing ceremony",
    caption: "Group photograph at the signing ceremony",
  },
  {
    src: "/images/plantscholar/2.jpeg",
    alt: "Md. Abu Jubayer and another representative signing documents at the PlantScholar ceremony",
    caption: "Signing the agreement",
  },
  {
    src: "/images/newimages/International Announcement of Plant Scholar 1.jpg",
    alt: "A speaker presenting PlantScholar beside a projected slide at an international event",
    caption: "International announcement of PlantScholar",
  },
  {
    src: "/images/newimages/International Announcement of Plant Scholar2.jpg",
    alt: "Participants gathered for a group photograph at the international PlantScholar announcement",
    caption: "Participants at the international announcement",
  },
];

// Location verified via https://spacenus.com/imprint; company focus via /about.
// The supplied ceremony banner identifies SRCL and Spacenus as the signing parties.
export const plantScholarPartner = {
  name: "Spacenus GmbH",
  location: "Darmstadt, Germany",
  heading: "SRCL × Spacenus — PlantScholar agreement",
  agreement:
    "The ceremony photographs document a PlantScholar contract signing between SRCL and Spacenus GmbH.",
  description:
    "Spacenus is a Germany-based company headquartered in Darmstadt, developing satellite-based agricultural verification and monitoring, reporting, and verification (MRV) technology.",
  website: "https://spacenus.com/about",
};

// Current role verified on SRCL's homepage. No appointment date is asserted.
export const srclLeadership = {
  organization: "Sustainable Research and Consultancy Ltd. (SRCL)",
  role: "Managing Director",
  status: "Current leadership role",
  website: "https://www.srclgroup.com/en/",
  description:
    "A Dhaka-based multidisciplinary environmental research and engineering consultancy working across environmental assessment, geoinformatics, feasibility studies, and infrastructure.",
};

// The supplied SRCL announcement documents this election; no term dates are given.
export const bpsLeadership = {
  role: "President",
  organization: "Bangladesh Poribeshbid Society (BPS)",
  description:
    "SRCL’s announcement congratulates Abu Jubayer on his election as President of Bangladesh Poribeshbid Society.",
  image: "/images/profile/poribesh_bidh.jpg",
  alt: "SRCL announcement congratulating Abu Jubayer on his election as President of Bangladesh Poribeshbid Society",
};

// Role and representation description supplied by the portfolio owner.
export const leadership = {
  organization: "BMDF (Bangladesh Migration Development Forum)",
  role: "Senior Vice President",
  committee: "BMDF Executive Committee",
  term: "2026–2029",
  description:
    "Represents BMDF's Executive Committee for the 2026–2029 term at government, partner, and public events.",
  contributions: [] as { title: string; description: string; href?: string }[],
  logo: null as string | null,
  photo: null as { src: string; alt: string } | null,
};
