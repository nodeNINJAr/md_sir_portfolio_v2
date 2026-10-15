import { site } from "./data";

// Concise slide copy describes the supplied photographs without inventing outcomes.
export const heroSlides = [
  {
    src: "/images/profile/abu-jubayer-speaking-edited.jpg",
    alt: "Md. Abu Jubayer speaking during a professional engagement",
    label: "Professional engagement",
    heading: site.name,
    tagline:
      "Environmentalist | Senior Environmental Specialist | Managing Director, SRCL",
    leadership: "- President, Bangladesh Poribeshbid Society (BPS)",
    description:
      "Connecting environmental science, climate resilience, and practical solutions for a more sustainable future.",
    position: "90% 65%",
    mobilePosition: "38% 60%",
  },
  {
    src: "/images/hero/1.jpeg",
    alt: "Md. Abu Jubayer standing in front of a historic building",
    label: "Personal photograph",
    heading: "People, Places & Perspective",
    tagline: "Beyond the professional profile",
    description: "A personal moment alongside historic architecture.",
    position: "50% 65%",
    mobilePosition: "30% 65%",
  },
  {
    src: "/images/hero/5.jpeg",
    alt: "Md. Abu Jubayer standing beside green water with wooded hills in the background",
    label: "Nature portrait",
    heading: "Connected With Nature",
    tagline: "Rivers, landscapes & environmental perspective",
    description: "A moment beside the water, with wooded hills on the horizon.",
    position: "60% 50%",
    mobilePosition: "42% 45%",
  },
  {
    src: "/images/hero/3.jpeg",
    alt: "Md. Abu Jubayer and colleagues planting a tree sapling",
    label: "Tree planting",
    heading: "Planting For Tomorrow",
    tagline: "Tree planting & environmental stewardship",
    description:
      "Working together to plant a sapling and connect with the natural world.",
    position: "65% 50%",
    mobilePosition: "54% 45%",
  },
  {
    src: "/images/hero/4.jpeg",
    alt: "Md. Abu Jubayer and colleagues holding a PlantScholar tree-planting banner",
    label: "PlantScholar engagement",
    heading: "PlantScholar",
    tagline: "Connecting people with plants and nature",
    description:
      "SRCL’s tree-stewardship initiative connects planting with sustained care and monitoring.",
    position: "50% 60%",
    mobilePosition: "33% 45%",
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
