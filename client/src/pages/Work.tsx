/*
 * AM Studios — Work Page
 * Design: Full portfolio grid with cinematic hover effects
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const FRAGRANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-portfolio-fragrance-dEa6A4RvBLC83TNJT5QLXj.webp";
const AUTOMOTIVE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-portfolio-automotive-5WPpQTmSSgy9fxBVfZBiZt.webp";
const BEVERAGE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-portfolio-beverage-Km6U7WMMfaJ2oFurHoAf69.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-hero-bpXEfSwBvANQFEyCVtcmV8.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-about-Hky4UhH7Q6RFX3vhVpwqvE.webp";

const projects = [
  {
    id: 1,
    title: "Mr AM",
    subtitle: "Luxury Fragrance Campaign",
    category: "Fragrance / Luxury",
    tags: ["Cinematic", "Product", "AI Production"],
    image: FRAGRANCE_IMG,
    size: "large",
    year: "2024",
  },
  {
    id: 2,
    title: "Toyota Corolla",
    subtitle: "Cinematic Automotive Series",
    category: "Automotive",
    tags: ["Cinematic", "Automotive", "Brand"],
    image: AUTOMOTIVE_IMG,
    size: "medium",
    year: "2024",
  },
  {
    id: 3,
    title: "Global Beverage Brand",
    subtitle: "Concept Campaign",
    category: "Beverage / FMCG",
    tags: ["Concept", "AI Production", "Campaign"],
    image: BEVERAGE_IMG,
    size: "medium",
    year: "2024",
  },
  {
    id: 4,
    title: "Vertical Series",
    subtitle: "Fragrance Content",
    category: "Fragrance / Social",
    tags: ["Vertical", "Social", "Fragrance"],
    image: ABOUT_IMG,
    size: "large",
    year: "2024",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Work() {
  const revealRef = useReveal();

  return (
    <div className="min-h-screen bg-[#FAF9F7]" ref={revealRef}>
      {/* Page Header */}
      <section className="pt-36 pb-16 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal">
            <div className="section-label mb-5">Our Portfolio</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.05] max-w-3xl">
              Work that speaks<br />
              <em className="text-[#CC0000] not-italic">louder</em> than words.
            </h1>
            <p className="text-[#666] font-body text-lg mt-6 max-w-xl leading-relaxed">
              Every project is a film. Every frame is intentional. Here's a selection of campaigns we've crafted for premium brands.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container">
          {/* Featured Large Project */}
          <div className="reveal mb-6">
            <div className="portfolio-card relative aspect-[16/7] overflow-hidden group">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
              <div className="overlay" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase mb-3 block">
                      {projects[0].category}
                    </span>
                    <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-2">
                      {projects[0].title}
                    </h2>
                    <p className="text-[#CCC] font-body text-base">{projects[0].subtitle}</p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {projects[0].tags.map((tag) => (
                        <span key={tag} className="font-mono-am text-[10px] text-[#888] border border-[#444] px-2 py-1 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono-am text-xs tracking-widest">VIEW</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 z-10">
                <span className="font-mono-am text-[#888] text-xs">{projects[0].year}</span>
              </div>
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {projects.slice(1, 3).map((project, i) => (
              <div
                key={project.id}
                className="reveal portfolio-card relative aspect-[4/3] overflow-hidden group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="overlay" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-white text-2xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[#CCC] font-body text-sm">{project.subtitle}</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono-am text-[10px] text-[#888] border border-[#444] px-2 py-0.5 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="font-mono-am text-[#888] text-xs">{project.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Last Large Project */}
          <div className="reveal">
            <div className="portfolio-card relative aspect-[16/7] overflow-hidden group">
              <img
                src={projects[3].image}
                alt={projects[3].title}
                className="w-full h-full object-cover"
              />
              <div className="overlay" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase mb-3 block">
                      {projects[3].category}
                    </span>
                    <h2 className="font-display text-white text-3xl md:text-5xl font-bold mb-2">
                      {projects[3].title}
                    </h2>
                    <p className="text-[#CCC] font-body text-base">{projects[3].subtitle}</p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {projects[3].tags.map((tag) => (
                        <span key={tag} className="font-mono-am text-[10px] text-[#888] border border-[#444] px-2 py-1 tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono-am text-xs tracking-widest">VIEW</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 z-10">
                <span className="font-mono-am text-[#888] text-xs">{projects[3].year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111]">
        <div className="container text-center">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Your brand deserves a film.
            </h2>
            <p className="text-[#888] font-body mb-8 max-w-md mx-auto">
              Let's create your next campaign together.
            </p>
            <a
              href="https://calendly.com/mahadautonexai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-base px-8 py-4"
            >
              Book a Call <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
