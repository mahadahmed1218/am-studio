"use client";

/*
 * WorkCategory — Case study page for each portfolio category.
 * Route: /work/[category]  (e.g. /work/automotive, /work/real-estate)
 */
import { use, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { PORTFOLIO, CategorySlug, PortfolioVideo } from "@/data/portfolio";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="w-full h-full relative group cursor-pointer"
      aria-label={`Play ${title}`}
    >
      <img
        src={thumb}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0D0D0D]/40 group-hover:bg-[#0D0D0D]/25 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-[#CC0000] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play size={22} className="text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
}

function VideoBlock({ video, index }: { video: PortfolioVideo; index: number }) {
  return (
    <div className="reveal">
      {/* Player */}
      <div className="relative bg-[#111] w-full aspect-video overflow-hidden">
        {video.youtubeId ? (
          <YouTubeFacade videoId={video.youtubeId} title={video.title} />
        ) : video.src ? (
          <video
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            className="w-full h-full object-contain"
          />
        ) : (
          <>
            <img
              src={video.poster}
              alt={video.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 border border-[#444] flex items-center justify-center">
                <Play size={22} className="text-[#666] ml-1" />
              </div>
              <p className="font-mono-am text-[#555] text-xs tracking-widest uppercase">
                Video coming soon
              </p>
            </div>
          </>
        )}
      </div>

      {/* Description */}
      <div className="pt-7 pb-10 border-b border-[#1E1E1E]">
        <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase block mb-3">
          0{index + 1}
        </span>
        <h3 className="font-display text-white text-2xl md:text-3xl font-semibold mb-4">
          {video.title}
        </h3>
        <p className="text-[#888] font-body text-base leading-relaxed max-w-2xl">
          {video.context}
        </p>
      </div>
    </div>
  );
}

export default function WorkCategory({ params }: { params: Promise<{ category: string }> }) {
  const revealRef = useReveal();
  const { category } = use(params);
  const slug = category as CategorySlug;
  const cat = PORTFOLIO[slug];

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="text-center">
          <p className="font-mono-am text-[#888] text-sm tracking-widest mb-4">404</p>
          <h1 className="font-display text-4xl font-bold text-white mb-6">
            Category not found.
          </h1>
          <Link href="/work">
            <span className="btn-red inline-flex items-center gap-2 cursor-pointer">
              Back to Work <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D]" ref={revealRef}>
      {/* Page Header */}
      <section className="pt-36 pb-16 bg-[#0D0D0D]">
        <div className="container">
          <Link href="/work">
            <span className="inline-flex items-center gap-2 font-mono-am text-[#555] text-xs tracking-widest uppercase hover:text-[#CC0000] transition-colors cursor-pointer mb-10">
              <ArrowLeft size={12} />
              All Work
            </span>
          </Link>
          <div className="section-label-light mb-5">{cat.label}</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] max-w-3xl">
            {cat.tagline}
          </h1>
        </div>
      </section>

      {/* Videos */}
      <section className="pb-24 bg-[#0D0D0D]">
        <div className="container">
          <div className="flex flex-col gap-20">
            {cat.videos.map((video, i) => (
              <VideoBlock key={video.title} video={video} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111] border-t border-[#1E1E1E]">
        <div className="container text-center">
          <div className="reveal">
            <p className="font-mono-am text-[#CC0000] text-xs tracking-widest uppercase mb-5">
              Ready to begin?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start a similar project.
            </h2>
            <p className="text-[#888] font-body text-lg mb-10 max-w-sm mx-auto">
              Book a free 30-minute strategy call and let&apos;s talk about your brand.
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
