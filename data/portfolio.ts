/*
 * AM Studios · Portfolio Data
 * Single source of truth for all portfolio categories and videos.
 */

export type CategorySlug = "automotive" | "real-estate" | "fashion" | "fragrance" | "action";

export interface PortfolioVideo {
  title: string;
  context: string;
  src: string;
  youtubeId?: string;
  poster: string;
}

export interface PortfolioCategory {
  slug: CategorySlug;
  label: string;
  featured: string;
  tagline: string;
  poster: string;
  videos: PortfolioVideo[];
}

export const PORTFOLIO: Record<CategorySlug, PortfolioCategory> = {
  fragrance: {
    slug: "fragrance",
    label: "Fragrance",
    featured: "Mr AM",
    tagline: "Invisible. Unforgettable.",
    poster: "https://img.youtube.com/vi/BUhxxPuCQX4/maxresdefault.jpg",
    videos: [
      {
        title: "Mr AM",
        context:
          "Luxury fragrance campaign concept. Shot to evoke memory, desire, and character · the invisible product made visceral through light and shadow.",
        src: "",
        youtubeId: "BUhxxPuCQX4",
        poster: "https://img.youtube.com/vi/BUhxxPuCQX4/maxresdefault.jpg",
      },
      {
        title: "Mr AM · Short",
        context:
          "A condensed cut of the fragrance world · atmosphere and identity distilled into a single moment.",
        src: "",
        youtubeId: "_GnYybIL3W4",
        poster: "https://img.youtube.com/vi/_GnYybIL3W4/maxresdefault.jpg",
      },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    label: "Real Estate",
    featured: "Brick by Brick",
    tagline: "Every home has a story worth telling.",
    poster: "https://img.youtube.com/vi/BGKWtKP35sU/maxresdefault.jpg",
    videos: [
      {
        title: "Brick by Brick",
        context:
          "Architectural storytelling for premium residential developments. Crafted to sell the lifestyle, not just the property · morning light, texture, space.",
        src: "",
        youtubeId: "BGKWtKP35sU",
        poster: "https://img.youtube.com/vi/BGKWtKP35sU/maxresdefault.jpg",
      },
    ],
  },
  fashion: {
    slug: "fashion",
    label: "Fashion",
    featured: "The Tailor",
    tagline: "Precision, craft, identity.",
    poster: "https://img.youtube.com/vi/1OYI47ju_B0/maxresdefault.jpg",
    videos: [
      {
        title: "The Tailor",
        context:
          "A cinematic short for an independent fashion label. Slow motion, texture, and silence · letting the craft speak without a single word.",
        src: "",
        youtubeId: "1OYI47ju_B0",
        poster: "https://img.youtube.com/vi/1OYI47ju_B0/maxresdefault.jpg",
      },
      {
        title: "The Tailor · Wear It Your Way",
        context:
          "See your garments come to life on the model that fits your brand.",
        src: "",
        youtubeId: "ayqxDRgswsU",
        poster: "https://img.youtube.com/vi/ayqxDRgswsU/maxresdefault.jpg",
      },
    ],
  },
  automotive: {
    slug: "automotive",
    label: "Automotive",
    featured: "The Commute",
    tagline: "Every departure is a story.",
    poster: "https://img.youtube.com/vi/rPEBi8npdbk/maxresdefault.jpg",
    videos: [
      {
        title: "The Commute",
        context:
          "Spec concept for luxury SUV dealerships. Golden hour to blue hour · a single continuous departure sequence crafted to sell the feeling of leaving.",
        src: "",
        youtubeId: "rPEBi8npdbk",
        poster: "https://img.youtube.com/vi/rPEBi8npdbk/maxresdefault.jpg",
      },
    ],
  },
  action: {
    slug: "action",
    label: "Cinema",
    featured: "The Studio",
    tagline: "Intensity. Frame by frame.",
    poster: "https://img.youtube.com/vi/0QMR2ySLGm0/maxresdefault.jpg",
    videos: [
      {
        title: "Cinema Action",
        context:
          "High-energy concept reel showcasing AM Studios' action and movement capabilities. Built to anchor a bold launch campaign with pace and precision.",
        src: "",
        youtubeId: "0QMR2ySLGm0",
        poster: "https://img.youtube.com/vi/0QMR2ySLGm0/maxresdefault.jpg",
      },
      {
        title: "Cinema Action · Vol. 2",
        context:
          "The second installment · pushing the limits of kinetic storytelling with raw momentum and cinematic rhythm.",
        src: "",
        youtubeId: "WnyqtzBtR-Y",
        poster: "https://img.youtube.com/vi/WnyqtzBtR-Y/maxresdefault.jpg",
      },
      {
        title: "Cinema Action · Vol. 3",
        context:
          "The third chapter in the Cinema Action series · intensity refined, every frame purposeful.",
        src: "",
        youtubeId: "emNvn09BzIY",
        poster: "https://img.youtube.com/vi/emNvn09BzIY/maxresdefault.jpg",
      },
    ],
  },
};

// Homepage tile order · Fragrance → Real Estate → Fashion → Automotive → Cinema
export const HOME_ROW_1: CategorySlug[] = ["fragrance", "real-estate"];
export const HOME_ROW_2: CategorySlug[] = ["fashion", "automotive", "action"];
