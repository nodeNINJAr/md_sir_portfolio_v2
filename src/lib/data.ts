export const site = {
  name: "Md. Abu Jubayer",
  title: "Environmentalist | Senior Environmental Specialist",
  subtitle: "Environmental & Climate Consultant",
  currentPosition: "Managing Director, SRCL",
  organizationWebsite: "https://www.srclgroup.com/en/",
  location: "Dhaka, Bangladesh",
  email: "Jubayer.buet.bd@gmail.com",
  phone: "+880 1711 459 532",
  linkedin: "https://linkedin.com/in/abujubayer",
  cvHref: "/cv/CV_Abu%20Jubayer_Details.docx",
};

export const navLinks = [
  { label: "Home", href: "#summary" },
  { label: "About", href: "#about" },
  { label: "Environmental Work", href: "#projects" },
  { label: "PlantScholar", href: "#plantscholar" },
  { label: "Experience", href: "#experience" },
  { label: "BMDF", href: "#bmdf" },
  { label: "Research", href: "#research" },
  { label: "Recognition", href: "#honors" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  {
    value: "15+",
    number: 15,
    suffix: "+",
    label: "Years",
    detail: "Professional experience",
  },
  {
    value: "Environmental & Climate",
    label: "Specialization",
    detail: "Focus area",
  },
  {
    value: "Government & Development",
    label: "Project Experience",
    detail: "Working context",
  },
  {
    value: "11",
    number: 11,
    label: "Publications",
    detail: "Published and ongoing research",
  },
];

export const expertiseAreas = [
  {
    number: "01",
    title: "Environmental Management",
    items: [
      "EIA / IEE",
      "Environmental Management Systems",
      "Environmental Compliance",
      "Environmental Monitoring",
      "Pollution Control",
      "Environmental Impact Assessment",
      "Environmental Management System Auditing",
      "Air Quality & Water Quality Modeling",
    ],
  },
  {
    number: "02",
    title: "Climate & Sustainability",
    items: [
      "Climate Risk & Vulnerability",
      "Climate Adaptation",
      "Climate Resilience",
      "ESG",
      "Sustainability Planning",
      "Training Module Development",
    ],
  },
  {
    number: "03",
    title: "Carbon & Climate Finance",
    items: [
      "Carbon Accounting",
      "Carbon Footprint",
      "Carbon Markets",
      "Carbon Credit Mechanisms",
      "MRV Systems",
      "Climate Finance",
      "ESG Framework Integration",
    ],
  },
  {
    number: "04",
    title: "Water & Disaster Risk",
    items: [
      "Water Resources",
      "Flood Inundation Modelling",
      "Drought Risk",
      "Disaster Risk Reduction",
      "Multi-Hazard Risk Assessment",
      "Hydrological Analysis",
    ],
  },
  {
    number: "05",
    title: "GIS & Spatial Analysis",
    items: [
      "GIS",
      "Remote / Spatial Analysis",
      "Thematic Mapping",
      "Environmental Spatial Analysis",
      "DGPS / RTK Ground Truthing",
    ],
  },
  {
    number: "06",
    title: "Development Planning & Advisory",
    items: [
      "DPP Preparation",
      "DPP Review & Appraisal",
      "Feasibility Studies",
      "Policy Analysis",
      "Institutional Planning",
      "Monitoring & Evaluation",
      "Quantitative Analysis — SPSS & Excel",
    ],
  },
];

export type Project = {
  title: string;
  organization?: string;
  role: string;
  period?: string;
  location?: string;
  description: string;
  contributions?: string[];
  category: string;
};

export const projects: Project[] = [
  {
    title: "Carbon Credit Mechanism Development in Bangladesh",
    organization: "Palli Karma-Sahayak Foundation (PKSF)",
    role: "Technical Member",
    period: "March 2025 – Present",
    location: "Bangladesh · National framework",
    description:
      "Supporting the development of a national carbon credit framework for Bangladesh, including registry design and sectoral emission reduction planning.",
    contributions: [
      "National carbon credit framework",
      "MRV systems",
      "Carbon registry development",
      "Sectoral emission reduction",
      "Carbon project methodologies",
      "Stakeholder consultation",
      "Capacity development",
      "Policy alignment",
    ],
    category: "Carbon & Climate Finance",
  },
  {
    title:
      "Establishment of 1,000-bed Bangladesh–China Friendship General Hospital",
    role: "Development & Appraisal Expert",
    location: "Northern region, Bangladesh",
    description:
      "Led preparation and finalization of the DPP, defined objectives, scope and costs, and conducted technical, financial, economic and environmental feasibility assessments. Prepared procurement plans, implementation schedules and monitoring frameworks to support appraisal of the proposed hospital.",
    category: "Development Planning & Advisory",
  },
  {
    title: "Bangladesh Fisheries Survey Project",
    role: "DPP Expert",
    location: "Bangladesh · National survey",
    description:
      "Prepared and finalized the DPP, including survey scope, methodology, cost estimates, procurement and monitoring plans. Coordinated with the Department of Fisheries and stakeholders to support appraisal and approval processes.",
    category: "Development Planning & Advisory",
  },
  {
    title:
      "Establishment of 250-bed General Hospital at Karnaphuli Upazila, Chattogram",
    role: "DPP Expert",
    location: "Karnaphuli Upazila, Chattogram, Bangladesh",
    description:
      "Prepared and finalized the hospital DPP with scope, cost estimates, implementation schedule, procurement plan and monitoring framework. Coordinated with ministries, local authorities and technical stakeholders to support appraisal.",
    category: "Development Planning & Advisory",
  },
  {
    title: "Calf Health Care and Management Project",
    organization: "Sustainable Research & Consultancy Ltd.",
    role: "Senior Environmental Expert",
    period: "January – June 2025",
    location: "Bangladesh",
    description:
      "Reviewed livestock and environmental policies, collected baseline data, and assessed waste, water-use, contamination and emissions risks. Recommended mitigation measures, integrated safeguards into project design, and presented assessment findings to stakeholders.",
    category: "Environmental Management",
  },
  {
    title: "Control of Reproductive Diseases in Crossbred Cattle Project",
    organization: "Sustainable Research & Consultancy Ltd.",
    role: "Senior Environmental Expert",
    period: "February – July 2025",
    location: "Bangladesh",
    description:
      "Screened disease-control operations, analysed environmental and socio-economic baseline data, and assessed waste, chemical-use and water-contamination risks. Consulted farmers and veterinary experts and prepared mitigation and safeguard recommendations for project design.",
    category: "Environmental Management",
  },
  {
    title: "Climate Change Policy & Capacity Building",
    organization: "Sustainable Research & Consultancy Ltd.",
    role: "National Policy Expert",
    period: "January – March 2025",
    location: "Bangladesh",
    description:
      "Supported training-module preparation for the CBOP & SIA project. Reviewed policy gaps, consulted institutions, developed policy frameworks and implementation roadmaps, and prepared briefs and training inputs for evidence-based climate planning.",
    category: "Climate & Sustainability",
  },
  {
    title: "UGIIP-III",
    organization: "SMEC-AQUA-RCC JV / LGED / ADB",
    role: "Environmental Specialist",
    period: "April 2016 – March 2017",
    location: "Municipalities across Bangladesh",
    description:
      "Updated drainage masterplans for 16 municipalities and prepared solid-waste management masterplans for 30 municipalities. Conducted WASH demand analysis, gathered environmental baseline data, and supported the Department of Environment clearance process.",
    category: "Environmental Management",
  },
  {
    title: "ESPA Research Project",
    organization: "IWFM, BUET + University of Southampton",
    role: "Researcher",
    period: "January 2013 – December 2014",
    location: "Bangladesh",
    description:
      "Conducted groundwater and ecosystem-services assessments, environmental modelling and field visits. Produced GIS maps and statistical analyses using SPSS and Excel, and supported drinking-water technology selection and long-term environmental planning.",
    category: "Water & Disaster Risk",
  },
  {
    title: "Satellite Town Masterplan — Chakpara, Rajshahi",
    location: "Chakpara, Rajshahi City, Bangladesh",
    organization: "Sustainable Research & Consultancy Ltd.",
    role: "Environmental Specialist",
    description:
      "Supported feasibility and masterplan preparation with environmental screening, baseline assessment, stakeholder consultation, and safeguard integration.",
    category: "Development Planning & Advisory",
  },
  {
    title: "Narayanganj Comprehensive Transport Master Plan",
    location: "Narayanganj City Corporation, Bangladesh",
    organization: "Sustainable Research & Consultancy Ltd.",
    role: "Environmental Specialist",
    description:
      "Contributed to transport demand assessment, mass transit pre-feasibility, multimodal hub planning, and environmental and social impact review.",
    category: "Development Planning & Advisory",
  },
  {
    title: "Haor Infrastructure and Livelihood Improvement Project (HILIP)",
    location: "Haor region, Bangladesh",
    organization: "Government of Bangladesh / Development Partners",
    role: "Environmental Specialist",
    description:
      "Prepared IEE and ESIA inputs, supported GIS-based agricultural mapping, and contributed to training and environmental safeguards for wetland infrastructure.",
    category: "Water & Disaster Risk",
  },
  {
    title: "N-06 National Highway Improvement — Chapai Nawabganj",
    location: "N-06 corridor, Chapai Nawabganj, Bangladesh",
    organization: "Roads and Highways Department",
    role: "Environmental Specialist",
    description:
      "Supported feasibility, IEE, EIA, spatial database development, land-use mapping, and environmental planning for a national highway corridor.",
    category: "Environmental Management",
  },
];

export const caseStudies = [
  {
    title: "Municipal drainage & solid-waste planning",
    project: "UGIIP-III",
    organization: "SMEC-AQUA-RCC JV · LGED / ADB",
    location: "Bangladesh",
    period: "April 2016 – March 2017",
    problem:
      "Municipal infrastructure planning needed environmental baseline evidence, WASH demand analysis, and coordinated drainage and waste-management inputs.",
    approach:
      "As Environmental Specialist, Abu Jubayer gathered baseline data, analysed WASH demand, updated drainage plans, prepared solid-waste plans, and supported environmental clearance processes.",
    output:
      "Drainage masterplan updates for 16 municipalities and solid-waste management masterplans for 30 municipalities, alongside environmental baseline and clearance inputs.",
  },
  {
    title: "Environmental evidence for water-resource decisions",
    project: "Ecosystem Services for Poverty Alleviation (ESPA)",
    organization: "IWFM, BUET · University of Southampton",
    location: "Bangladesh",
    period: "January 2013 – December 2014",
    problem:
      "Water-resource and development planning required a clearer understanding of groundwater, ecosystem services, and suitable drinking-water technologies.",
    approach:
      "As Researcher, Abu Jubayer conducted environmental modelling, groundwater assessments and field visits, prepared GIS maps, and analysed data using SPSS and Excel.",
    output:
      "Spatial maps, statistical assessments, and drinking-water technology selection inputs supporting the research team's long-term environmental planning work.",
  },
  {
    title: "Technical foundations for a carbon-credit mechanism",
    project: "Carbon Credit Mechanism Development in Bangladesh",
    organization: "Palli Karma-Sahayak Foundation (PKSF)",
    location: "Bangladesh · National framework",
    period: "March 2025 – Present",
    problem:
      "A national carbon-credit mechanism requires credible accounting, registry arrangements, sectoral methodologies, and alignment with climate policy.",
    approach:
      "As Technical Member, Abu Jubayer contributes framework, MRV and registry inputs, reviews carbon-accounting documentation, and supports sectoral assessment, consultation and capacity development.",
    output:
      "Ongoing technical inputs to the framework, registry mechanisms and carbon-project methodologies, with documentation review and stakeholder consultation support.",
  },
];

export const journey = [
  {
    period: "March 2025 — Present",
    organization: "Palli Karma-Sahayak Foundation (PKSF)",
    role: "Technical Member",
    note: "Carbon Credit Mechanism Development in Bangladesh",
  },
  {
    period: "January 2015 — Present",
    organization: "Sustainable Research & Consultancy Ltd.",
    role: "Environmental Specialist / Senior Environmental Expert / National Policy Expert",
    note: "Environmental consultancy from 2015 onward, including satellite-town and transport masterplans, land acquisition feasibility, HILIP safeguards, highway assessments, and GIS. This continuing role covers 2017–2025. Additional 2025 assignments: climate-policy training modules (January–March), calf health feasibility (January–June), and cattle disease-control feasibility (February–July).",
  },
  {
    period: "April 2016 — March 2017",
    organization: "SMEC-AQUA-RCC JV",
    role: "Environmental Specialist",
    note: "UGIIP-III, LGED / ADB: drainage masterplans for 16 municipalities, solid-waste masterplans for 30 municipalities, WASH demand analysis, baseline surveys, and environmental clearance support.",
  },
  {
    period: "November 2011 — June 2017 · Multiple assignments",
    organization: "Resource Control Company Ltd.",
    role: "Environmental Monitoring Expert / Environmental Specialist / Environmental Coordinator",
    note: "Separate assignments: environmental monitoring and survey quality assurance (April 2016–June 2017); IEE and EMP inputs for five LGED / BWDB subprojects under JICA (June 2015–January 2016); housing EIA coordination (January 2012–April 2013, intermittent); and livelihood-project monitoring in the Chittagong Hill Tracts (November 2011–June 2012, intermittent).",
  },
  {
    period: "January 2013 — December 2014",
    organization: "IWFM, BUET + University of Southampton",
    role: "Researcher",
    note: "ESPA research: groundwater assessment, environmental modelling, ecosystem services analysis, GIS maps, drinking-water technology selection, and SPSS / Excel analysis.",
  },
  {
    period: "March 2011 — December 2012 · Intermittent",
    organization: "JICA Bangladesh",
    role: "Field Officer",
    note: "Japan–NUGELP WASH project: field and industry visits with the international team and technical environmental support.",
  },
];

export const publications: {
  title: string;
  venue: string;
  year: string;
  href?: string;
}[] = [
  {
    title:
      "A Study into Causes and Consequences of Waterlogging Problem in Southwestern Bangladesh",
    venue: "International Journal of Environmental Science and Technology",
    year: "2022",
  },
  {
    title: "Impact of Cyclone Amphan on WASH facilities of coastal Bangladesh",
    venue: "Journal of Water, Sanitation and Hygiene for Development",
    year: "2021",
    href: "https://doi.org/10.2166/washdev.2021.170",
  },
  {
    title:
      "WASH Condition for Small Shopkeepers: Comparative Study from Bangladesh",
    venue: "Journal of Water, Sanitation and Hygiene for Development",
    year: "2020",
  },
  {
    title:
      "Evaluation of drinking water technologies in southwestern coastal area",
    venue: "6th ICWFM",
    year: "2017",
  },
  {
    title:
      "Water, Sanitation, and Hygiene for Small Shopkeepers: A Perspective from Bangladesh",
    venue: "JSM Environmental Science & Ecology",
    year: "2017",
    href: "https://doi.org/10.47739/2333-7141/1041",
  },
  {
    title:
      "Chronological History and Destruction Pattern of Tornados in Bangladesh",
    venue: "American Journal of Environmental Protection",
    year: "2016",
    href: "https://doi.org/10.11648/j.ajep.20160504.11",
  },
  {
    title: "WASH Condition of Small Shopkeepers in Dhaka City",
    venue: "International Conference of Sustainable Development",
    year: "2015",
  },
  {
    title: "Destruction Pattern of Tornado in Bangladesh",
    venue: "International Conference on Water and Flood Management",
    year: "2015",
  },
  {
    title:
      "Characterization and Management of Solid Waste in Pharmaceutical Companies",
    venue: "WASTE Safe, KUET",
    year: "2013",
  },
  {
    title:
      "Waste Management Procedure in Pharmaceutical Companies in Bangladesh",
    venue: "ICETCSD, SUST",
    year: "2012",
  },
  {
    title: "CATA Earth — Catalyzing Transformative Health Education",
    venue: "European Education and Culture Executive Agency",
    year: "Ongoing",
  },
];

export const education = [
  {
    degree: "PhD Fellow in Environmental Management",
    institution: "Cyberjaya University, Malaysia",
  },
  {
    degree: "M.Sc. in Water Resources Development",
    institution: "Institute of Water and Flood Management (IWFM), BUET",
  },
  {
    degree: "B.Sc. in Environmental Science",
    institution: "Khulna University",
  },
];

export const trainings = [
  "Sustainable Fundamentals: ESG and GHG Emission for Corporate Compliance and Growth",
  "Sustainable Environmental Management and Pollution Control",
  "EIA and IEE",
  "Disaster Risk Reduction and Climate Resilience",
  "UAV-based Data Acquisition for GIS and Remote Sensing",
  "ISO 14001 Environmental Management Systems",
  "Monitoring and Evaluation of Environmental Projects",
  "DPP Preparation, Review and Appraisal",
];

export const affiliations = [
  "National Environmental Lawyers Association",
  "Bangladesh Paribeshbid Society",
  "Curriculum Development Committee — Department of Geo-Information Science and Earth Observation, Patuakhali Science and Technology University",
];

// Add local public-file paths when the profile photos and video are ready.
export const aboutMedia: {
  portrait?: string;
  fieldPortrait?: string;
  video?: string;
  videoPoster?: string;
} = {
  portrait: "/images/profile/abu-jubayer-impact.jpg",
  fieldPortrait: "/images/profile/haor.jpg",
};
