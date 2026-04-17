/*
 * AM Studios — Portfolio Data
 * Single source of truth for all portfolio categories and videos.
 * Video `src` fields are empty until files are uploaded — poster shows in the meantime.
 */

const FRAGRANCE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-portfolio-fragrance-dEa6A4RvBLC83TNJT5QLXj.webp";
const AUTOMOTIVE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-portfolio-automotive-5WPpQTmSSgy9fxBVfZBiZt.webp";
const BEVERAGE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-portfolio-beverage-Km6U7WMMfaJ2oFurHoAf69.webp";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-hero-bpXEfSwBvANQFEyCVtcmV8.webp";
const ABOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-about-Hky4UhH7Q6RFX3vhVpwqvE.webp";

export type CategorySlug = "automotive" | "real-estate" | "fashion" | "fragrance" | "action";

export interface PortfolioVideo {
  title: string;
  context: string; // short description shown on the case study page
  src: string;     // local path e.g. "/videos/automotive-the-commute.mp4" — leave "" until uploaded
  poster: string;
}

export interface PortfolioCategory {
  slug: CategorySlug;
  label: string;
  featured: string;  // subtitle shown on homepage tile
  tagline: string;   // hero headline on the category page
  poster: string;    // homepage tile background (used until video is ready)
  videos: PortfolioVideo[];
}

export const PORTFOLIO: Record<CategorySlug, PortfolioCategory> = {
  automotive: {
    slug: "automotive",
    label: "Automotive",
    featured: "The Commute",
    tagline: "Every departure is a story.",
    poster: AUTOMOTIVE_IMG,
    videos: [
      {
        title: "The Commute",
        context:
          "Spec concept for luxury SUV dealerships. Golden hour to blue hour — a single continuous departure sequence crafted to sell the feeling of leaving.",
        src: "",
        poster: AUTOMOTIVE_IMG,
      },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    label: "Real Estate",
    featured: "Brick by Brick",
    tagline: "Every home has a story worth telling.",
    poster: HERO_IMG,
    videos: [
      {
        title: "Brick by Brick",
        context:
          "Architectural storytelling for premium residential developments. Crafted to sell the lifestyle, not just the property — morning light, texture, space.",
        src: "",
        poster: HERO_IMG,
      },
    ],
  },
  fashion: {
    slug: "fashion",
    label: "Fashion",
    featured: "The Tailor",
    tagline: "Precision, craft, identity.",
    poster: ABOUT_IMG,
    videos: [
      {
        title: "The Tailor",
        context:
          "A cinematic short for an independent fashion label. Slow motion, texture, and silence — letting the craft speak without a single word.",
        src: "",
        poster: ABOUT_IMG,
      },
    ],
  },
  fragrance: {
    slug: "fragrance",
    label: "Fragrance",
    featured: "Mr AM",
    tagline: "Invisible. Unforgettable.",
    poster: FRAGRANCE_IMG,
    videos: [
      {
        title: "Mr AM",
        context:
          "Luxury fragrance campaign concept. Shot to evoke memory, desire, and character — the invisible product made visceral through light and shadow.",
        src: "",
        poster: FRAGRANCE_IMG,
      },
    ],
  },
  action: {
    slug: "action",
    label: "Action",
    featured: "The Studio",
    tagline: "Intensity. Frame by frame.",
    poster: BEVERAGE_IMG,
    videos: [
      {
        title: "The Studio",
        context:
          "High-energy concept reel showcasing AM Studios' action and movement capabilities. Built to anchor a bold launch campaign with pace and precision.",
        src: "",
        poster: BEVERAGE_IMG,
      },
    ],
  },
};

// Homepage tile order
// HOME_ROW_1: Real Estate first in DOM = first on mobile. On desktop they appear side-by-side.
// Automotive gets md:order-1 (left) via CSS; Real Estate gets md:order-2 (right).
export const HOME_ROW_1: CategorySlug[] = ["real-estate", "automotive"];
export const HOME_ROW_2: CategorySlug[] = ["fashion", "fragrance", "action"];
