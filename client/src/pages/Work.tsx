/*
 * AM Studios — Work Page (/work)
 * Full portfolio grid: 2 large tiles (Row 1) + 3 medium tiles (Row 2).
 * Clicking a tile goes to the category case study page (/work/:category).
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import VideoTile from "../components/VideoTile";
import { PORTFOLIO, HOME_ROW_1, HOME_ROW_2 } from "../data/portfolio";

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
            <div className="section-label mb-5">Selected Work</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.05] max-w-3xl">
              Work that speaks<br />
              <em className="text-[#CC0000] not-italic">louder</em> than words.
            </h1>
            <p className="text-[#666] font-body text-lg mt-6 max-w-xl leading-relaxed">
              Every project is a film. Every frame is intentional. Select a category to see the full case study.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 bg-[#111111]">
        <div className="container py-16">
          {/* Row 1 — 2 large tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {HOME_ROW_1.map((slug) => {
              const cat = PORTFOLIO[slug];
              return (
                <VideoTile
                  key={slug}
                  href={`/work/${slug}`}
                  category={cat.label}
                  title={cat.featured}
                  src={cat.videos[0].src}
                  poster={cat.poster}
                  className={`aspect-[4/3] ${slug === "real-estate" ? "md:order-2" : "md:order-1"}`}
                />
              );
            })}
          </div>

          {/* Row 2 — 3 medium tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HOME_ROW_2.map((slug) => {
              const cat = PORTFOLIO[slug];
              return (
                <VideoTile
                  key={slug}
                  href={`/work/${slug}`}
                  category={cat.label}
                  title={cat.featured}
                  src={cat.videos[0].src}
                  poster={cat.poster}
                  className="aspect-[4/3]"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] border-t border-[#1E1E1E]">
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
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
