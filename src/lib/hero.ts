import { site } from "./data";

// Concise slide copy describes the supplied photographs without inventing outcomes.
export const heroSlides = [
  {
    src: "/images/profile/abu-jubayer-speaking-edited.jpg",
    alt: "Md. Abu Jubayer speaking during a professional engagement",
    label: "Professional engagement",
    caption: "Environmental science in practice",
    heading: site.name,
    tagline:
      "Environmentalist | Senior Environmental Specialist | Managing Director, SRCL",
    leadership: "- President, Bangladesh Poribeshbid Society (BPS)",
    description:
      "Connecting environmental science, climate resilience, and practical solutions for a more sustainable future.",
    position: "75% 62%",
    mobilePosition: "70% 65%",
  },
  {
    src: "/images/newimages/BCDP_con.jpg",
    alt: "Md. Abu Jubayer standing behind the BCDP display at the BCDP Knowledge Conference 2026",
    label: "BCDP conference",
    caption: "BCDP Knowledge Conference 2026",
    heading: "BCDP 2026",
    tagline: "BCDP Knowledge Conference 2026",
    description:
      "A moment from the BCDP Knowledge Conference, connecting with the wider climate and development community.",
    position: "48% 50%",
    mobilePosition: "48% 45%",
  },
  // {
  //   src: "/images/newimages/visiting_pokhra_nepal.jpg",
  //   alt: "Md. Abu Jubayer beside boats on the lakeshore in Pokhara at night",
  //   label: "Personal photograph",
  //   caption: "An evening in Pokhara, Nepal",
  //   heading: "People, Places & Perspective",
  //   tagline: "Beyond the professional profile",
  //   description: "An evening by the lakeshore in Pokhara, Nepal.",
  //   position: "48% 45%",
  //   mobilePosition: "48% 40%",
  // },
  // {
  //   src: "/images/newimages/single_photo_of_jubaer.jpg",
  //   alt: "Md. Abu Jubayer beside a lake with green hills and clouds in the background",
  //   label: "Nature portrait",
  //   caption: "Connected with nature",
  //   heading: "Connected With Nature",
  //   tagline: "Rivers, landscapes & environmental perspective",
  //   description: "A moment beside the water, with wooded hills on the horizon.",
  //   position: "48% 45%",
  //   mobilePosition: "48% 40%",
  // },
  {
    src: "/images/newimages/tree_planting_on_compect_foundation_jubayere.jpg",
    alt: "Md. Abu Jubayer and colleagues planting a tree sapling",
    label: "Tree planting",
    caption: "Planting for tomorrow",
    heading: "Planting For Tomorrow",
    tagline: "Tree planting & environmental stewardship",
    description:
      "Working together to plant a sapling and connect with the natural world.",
    position: "48% 65%",
    mobilePosition: "48% 60%",
  },
  {
    src: "/images/hero/4.jpeg",
    alt: "Md. Abu Jubayer and colleagues holding a PlantScholar tree-planting banner",
    label: "PlantScholar engagement",
    caption: "PlantScholar · People, plants & nature",
    heading: "PlantScholar",
    tagline: "Connecting people with plants and nature",
    description:
      "SRCL’s tree-stewardship initiative connects planting with sustained care and monitoring.",
    position: "50% 60%",
    mobilePosition: "50% 50%",
  },
] as const;

export const HERO_SLIDE_SECONDS = 5;
export type HeroTimerState = {
  active: number;
  remaining: number;
  cycle: number;
};
export type HeroTimerAction =
  | { type: "tick" }
  | { type: "move"; direction: number }
  | { type: "select"; index: number };

export function heroTimerReducer(
  state: HeroTimerState,
  action: HeroTimerAction,
): HeroTimerState {
  if (action.type === "tick" && state.remaining > 1)
    return { ...state, remaining: state.remaining - 1 };
  const active =
    action.type === "select"
      ? action.index
      : (state.active +
          (action.type === "move" ? action.direction : 1) +
          heroSlides.length) %
        heroSlides.length;
  return { active, remaining: HERO_SLIDE_SECONDS, cycle: state.cycle + 1 };
}
