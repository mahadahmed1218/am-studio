"use client";

/*
 * AM Studios · About Page
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const MAHAD_SRC = "/mahad-ahmed.mp4";
const AFHAM_SRC = "/afham-kamran.mp4";

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

const values = [
  {
    num: "01",
    title: "Cinematic First",
    desc: "Every project begins with the question: does this look like a film? If the answer isn't yes, we go back to the drawing board.",
  },
  {
    num: "02",
    title: "AI-Powered Precision",
    desc: "We use the most advanced AI production tools available · not to cut corners, but to achieve a level of precision that traditional production can't match.",
  },
  {
    num: "03",
    title: "Brand Obsession",
    desc: "We don't make generic content. Every campaign is built from a deep understanding of your brand's identity, audience, and competitive landscape.",
  },
  {
    num: "04",
    title: "Speed Without Compromise",
    desc: "48-hour turnaround is our standard · not because we rush, but because our AI-powered pipeline is built for speed without sacrificing quality.",
  },
];

const targetClients = [
  "Luxury Automotive",
  "Premium Fragrance",
  "High-End Real Estate",
  "Fashion & Apparel",
  "Premium Beverages",
  "Luxury Hospitality",
  "Premium Cosmetics",
  "High-End Technology",
];

export default function About() {
  const revealRef = useReveal();

  return (
    <div className="min-h-screen bg-[#FAF9F7]" ref={revealRef}>

      {/* Page Header */}
      <section className="pt-36 pb-20 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal">
            <div className="section-label mb-5">About AM Studios</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.05] max-w-4xl">
              Built for brands that
              <br />
              <em className="text-[#CC0000] not-italic">refuse</em> to look ordinary.
            </h1>
          </div>
        </div>
      </section>

      {/* ─── FOUNDERS ─── */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container">
          <div className="reveal mb-20">
            <div className="section-label-light mb-4">The Founders</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              The people
              <br />
              behind the lens.
            </h2>
          </div>

          {/* Mahad Ahmed */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 pb-24 border-b border-[#1E1E1E]">
            <div className="aspect-square bg-[#111] overflow-hidden">
              <video
                src={MAHAD_SRC}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase block mb-4">
                Co-Founder · Head of Strategy
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Mahad Ahmed
              </h3>
              <p className="text-[#888] font-body text-base leading-relaxed">
                Mahad runs strategy and delivery at AM Studios. He works directly with brand
                clients on campaign planning, production timelines, and performance outcomes.
                Based in Sydney, he operates the studio&apos;s international client pipeline.
                Focused on making AI advertising a reliable business outcome, not a novelty.
              </p>
            </div>
          </div>

          {/* Afham Kamran */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-square bg-[#111] overflow-hidden lg:order-2">
              <video
                src={AFHAM_SRC}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="reveal lg:order-1" style={{ transitionDelay: "120ms" }}>
              <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase block mb-4">
                Co-Founder · Creative Director
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Afham Kamran
              </h3>
              <p className="text-[#888] font-body text-base leading-relaxed">
                Afham leads the creative direction at AM Studios. Before founding AM, he spent
                years building content systems and directing video work for brands across multiple
                markets. He writes, directs, and oversees every campaign the studio ships.
                Obsessed with the intersection of AI, craft, and cinema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F2F0ED]">
        <div className="container">
          <div className="reveal mb-14">
            <div className="section-label mb-4">Our Principles</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111111] max-w-lg leading-tight">
              How we think.
              <br />
              How we work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0">
            {values.map((value, i) => (
              <div
                key={value.num}
                className="reveal py-10 px-0 md:px-8 first:pl-0 border-b border-[#DDD] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-mono-am text-[#CC0000] text-xs tracking-widest block mb-4">
                  {value.num}
                </span>
                <h3 className="font-display text-xl font-semibold text-[#111111] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#666] font-body text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-24 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal mb-12">
            <div className="section-label mb-4">Who We Work With</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111111] max-w-lg leading-tight">
              Premium brands.
              <br />
              Extraordinary campaigns.
            </h2>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y divide-[#E8E6E3] border border-[#E8E6E3]">
            {targetClients.map((client, i) => (
              <div
                key={client}
                className="p-6 flex items-center justify-center text-center"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="font-body text-sm text-[#555] font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container">
          <div className="reveal max-w-2xl">
            <div className="section-label mb-5">Work With Us</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to create
              <br />
              something cinematic?
            </h2>
            <p className="text-[#888] font-body text-lg mb-8 leading-relaxed">
              Book a free 30-minute discovery call and let&apos;s discuss how AM Studios can
              elevate your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/amstudioai-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-base px-8 py-4"
              >
                Book a Call <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/61493300023"
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
