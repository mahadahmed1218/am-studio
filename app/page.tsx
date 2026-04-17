"use client";

/*
 * AM Studios — Home Page
 * Design: Precision Editorial — warm off-white bg, Playfair headlines, red accents
 * Sections: Hero, Stats, Services Preview, Portfolio Preview, Testimonials, CTA
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Film, Cpu, Layers } from "lucide-react";
import VideoTile from "@/components/VideoTile";
import { PORTFOLIO, HOME_ROW_1, HOME_ROW_2 } from "@/data/portfolio";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663549779214/jbDR64QUCbzPJiDzPktCcD/am-studios-hero-bpXEfSwBvANQFEyCVtcmV8.webp";
const HERO_VIDEO = "/hero-video.mp4";

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

export default function Home() {
  const revealRef = useReveal();

  return (
    <div className="min-h-screen bg-[#FAF9F7]" ref={revealRef}>
      {/* ─── HERO ─── */}
      <section className="relative mt-16 lg:mt-20 aspect-[3/4] md:aspect-auto md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={HERO_VIDEO}
            poster={HERO_IMG}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
        </div>

        {/* Red letterbox lines */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#CC0000] z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#CC0000] z-10" />

        {/* Content */}
        <div className="container relative z-10 py-8 md:py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-white text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 md:mb-6">
              Cinema for <em className="text-[#CC0000] not-italic">brands.</em>
            </h1>

            <p className="hidden md:block text-[#D0CEC9] text-xl font-body font-light leading-relaxed mb-10 max-w-xl">
              You&apos;ve seen what AI can do. You want someone who knows how to{" "}
              <em className="not-italic">direct</em> it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/work">
                <button className="btn-ghost-white">
                  View Work
                  <ArrowRight size={16} />
                </button>
              </Link>
              <a
                href="https://calendly.com/mahadautonexai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                Start Project
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
          <span className="font-mono-am text-[10px] text-[#888] tracking-[0.2em] rotate-90 origin-center">
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#888] to-transparent" />
        </div>
      </section>

      {/* ─── TAGLINE STRIP ─── */}
      <div className="bg-[#FAF9F7] border-b border-[#E8E6E3] py-3 overflow-hidden">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-mono-am text-[10px] text-[#888] tracking-[0.3em] uppercase shrink-0"
            >
              Ads that look like films&nbsp;&nbsp;·&nbsp;&nbsp;Built with
              AI&nbsp;&nbsp;·&nbsp;&nbsp;AM Studios
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#111111] py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#333]">
            {[
              { num: "10+", label: "Campaigns Delivered" },
              { num: "48hr", label: "Turnaround Time" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.num} className="flex flex-col items-center py-8 px-6">
                <span className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.num}
                </span>
                <span className="font-mono-am text-[#888] text-xs tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section className="py-24 bg-[#111111]">
        <div className="container">
          <div className="reveal mb-10">
            <div className="section-label-light mb-4">Selected Work</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
                Stories that sell.
              </h2>
              <Link href="/work">
                <button className="btn-ghost-white shrink-0">
                  View All Work <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>

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

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-24 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal mb-16">
            <div className="section-label mb-4">What We Do</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111111] max-w-lg leading-tight">
                Production that moves at the speed of ideas.
              </h2>
              <Link href="/services">
                <button className="btn-ghost shrink-0">
                  All Services <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E8E6E3]">
            {[
              {
                icon: <Film size={28} />,
                num: "01",
                title: "Cinematic Video Ads",
                desc: "Film-quality video campaigns crafted for luxury brands. Every frame is intentional, every cut is precise.",
              },
              {
                icon: <Cpu size={28} />,
                num: "02",
                title: "AI Production",
                desc: "We leverage cutting-edge AI tools to produce premium content at a fraction of traditional production costs.",
              },
              {
                icon: <Layers size={28} />,
                num: "03",
                title: "Brand Strategy",
                desc: "From concept to campaign — we define your visual identity and craft narratives that command attention.",
              },
            ].map((service, i) => (
              <div
                key={service.num}
                className="reveal py-8 px-0 md:px-10 first:pl-0 last:pr-0 border-t border-[#E8E6E3] md:border-t-0 first:border-t-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-[#CC0000] p-3 bg-[#CC0000]/5">{service.icon}</div>
                  <span className="font-mono-am text-[#DDD] text-xs">{service.num}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#111111] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#666] font-body text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal mb-14">
            <div className="section-label mb-4">Client Words</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111111] max-w-lg leading-tight">
              What our clients say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "AM Studios delivered a campaign that looked like a Hollywood production. The quality was extraordinary — and they turned it around in 48 hours. Our brand has never looked better.",
                name: "James R.",
                role: "Founder, Luxury Fragrance Brand",
                delay: "0ms",
              },
              {
                quote:
                  "I was skeptical about AI production, but AM Studios completely changed my perspective. The final video was cinematic, polished, and exactly on-brand. Exceptional work.",
                name: "Sarah M.",
                role: "Marketing Director, Premium Automotive",
                delay: "120ms",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal bg-white border border-[#E8E6E3] p-8 relative"
                style={{ transitionDelay: t.delay }}
              >
                <div className="text-[#CC0000] text-5xl font-display leading-none mb-4 select-none">
                  &quot;
                </div>
                <p className="text-[#333] font-body text-base leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8E6E3]">
                  <div className="w-10 h-10 bg-[#111111] flex items-center justify-center">
                    <span className="text-white font-display font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[#111111] text-sm">{t.name}</p>
                    <p className="font-mono-am text-[#888] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES STRIP ─── */}
      <section className="py-12 bg-[#F2F0ED] border-t border-b border-[#E8E6E3]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase shrink-0">
              Industries We Serve
            </span>
            <div className="w-px h-8 bg-[#DDD] hidden md:block" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center md:justify-start">
              {[
                "Luxury Automotive",
                "Premium Fragrance",
                "High-End Real Estate",
                "Fashion & Apparel",
                "Premium Beverages",
              ].map((ind) => (
                <span key={ind} className="font-body text-sm text-[#555] font-medium">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-28 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#CC0000]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CC0000]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container relative z-10 text-center">
          <div className="reveal">
            <div className="flex justify-center mb-6">
              <div className="section-label">Let&apos;s Work Together</div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to elevate
              <br />
              your brand?
            </h2>
            <p className="text-[#888] font-body text-lg mb-10 max-w-md mx-auto">
              Let&apos;s create something extraordinary together. Book a free 30-minute strategy
              call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/mahadautonexai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-base px-8 py-4"
              >
                Book a Call <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/61435781363"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-white text-base px-8 py-4"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
