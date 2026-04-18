"use client";

/*
 * AM Studios — Services Page
 */
import { useEffect, useRef } from "react";
import { ArrowRight, Film, Cpu, Layers, Zap, Target, Eye } from "lucide-react";

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

const services = [
  {
    num: "01",
    icon: <Film size={32} />,
    title: "Cinematic Video Ads",
    description:
      "Film-quality video campaigns crafted for luxury brands. We direct, produce, and deliver ads that look like they belong in a cinema — not a social feed. Every frame is intentional, every cut is precise.",
    features: [
      "Full campaign concept & storyboard",
      "Cinematic direction & production",
      "Professional color grading",
      "Multi-format delivery (16:9, 9:16, 1:1)",
      "48-hour turnaround available",
    ],
    industries: ["Luxury Automotive", "Fragrance", "Fashion", "Real Estate"],
  },
  {
    num: "02",
    icon: <Cpu size={32} />,
    title: "AI Production",
    description:
      "We leverage the most advanced AI production tools to create premium video content at a fraction of traditional costs. The result is indistinguishable from high-budget productions — but faster and more scalable.",
    features: [
      "AI-assisted video generation",
      "Photorealistic product visualization",
      "AI voiceover & sound design",
      "Rapid iteration & revision",
      "Scalable content production",
    ],
    industries: ["Premium Brands", "E-Commerce", "Startups", "FMCG"],
  },
  {
    num: "03",
    icon: <Layers size={32} />,
    title: "Brand Strategy",
    description:
      "Before a single frame is shot, we define your brand's visual language. From positioning to visual identity, we craft the strategic foundation that makes every campaign cohesive and compelling.",
    features: [
      "Brand positioning & messaging",
      "Visual identity development",
      "Campaign concept creation",
      "Competitor analysis",
      "Content strategy roadmap",
    ],
    industries: ["New Brands", "Rebrands", "Luxury", "Premium Lifestyle"],
  },
  {
    num: "04",
    icon: <Zap size={32} />,
    title: "Social Content Packages",
    description:
      "Consistent, high-quality content for Instagram, TikTok, and YouTube. We create monthly content packages that maintain your brand&apos;s premium aesthetic across every platform.",
    features: [
      "Monthly content calendar",
      "Platform-optimized formats",
      "Reels, Stories & Feed content",
      "Consistent brand aesthetic",
      "Performance-driven creative",
    ],
    industries: ["Fashion", "Beauty", "Lifestyle", "Hospitality"],
  },
  {
    num: "05",
    icon: <Target size={32} />,
    title: "Campaign Production",
    description:
      "End-to-end campaign production from brief to delivery. We handle concept, production, post-production, and asset delivery — so you can focus on launching, not managing.",
    features: [
      "Full brief-to-delivery service",
      "Creative concept development",
      "Production management",
      "Post-production & editing",
      "Final asset delivery package",
    ],
    industries: ["All Premium Brands", "Agencies", "In-House Teams"],
  },
  {
    num: "06",
    icon: <Eye size={32} />,
    title: "Product Visualization",
    description:
      "Photorealistic AI-powered product visualization for brands that need stunning visuals without a physical shoot. Perfect for launches, e-commerce, and campaign assets.",
    features: [
      "Photorealistic 3D-style renders",
      "Multiple angles & environments",
      "Lifestyle context placement",
      "E-commerce ready assets",
      "Fast turnaround",
    ],
    industries: ["Fragrance", "Cosmetics", "Automotive", "Luxury Goods"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn about your brand, goals, and vision in a focused 30-minute strategy session.",
  },
  {
    step: "02",
    title: "Concept & Strategy",
    desc: "Our team develops a cinematic concept tailored to your brand identity and campaign objectives.",
  },
  {
    step: "03",
    title: "Production",
    desc: "We execute the production using our AI-powered pipeline, maintaining film-quality standards throughout.",
  },
  {
    step: "04",
    title: "Review & Delivery",
    desc: "You review the work, we refine based on feedback, and deliver final assets within 48 hours.",
  },
];

export default function Services() {
  const revealRef = useReveal();

  return (
    <div className="min-h-screen bg-[#FAF9F7]" ref={revealRef}>
      {/* Page Header */}
      <section className="pt-36 pb-16 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal">
            <div className="section-label mb-5">What We Offer</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.05] max-w-3xl">
              Premium production.
              <br />
              <em className="text-[#CC0000] not-italic">Extraordinary</em> results.
            </h1>
            <p className="text-[#666] font-body text-lg mt-6 max-w-xl leading-relaxed">
              From concept to delivery, we offer a complete suite of cinematic production services
              designed for brands that refuse to look ordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="container">
          <div className="divide-y divide-[#E8E6E3]">
            {services.map((service, i) => (
              <div
                key={service.num}
                className="reveal py-12 grid grid-cols-1 lg:grid-cols-12 gap-8"
                style={{ transitionDelay: `${Math.min(i * 60, 300)}ms` }}
              >
                {/* Number + Icon */}
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                  <span className="font-mono-am text-[#CCC] text-sm">{service.num}</span>
                  <div className="text-[#CC0000]">{service.icon}</div>
                </div>

                {/* Title + Description */}
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#111111] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#555] font-body text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.industries.map((ind) => (
                      <span
                        key={ind}
                        className="font-mono-am text-[10px] text-[#888] border border-[#DDD] px-2 py-1 tracking-wider"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="lg:col-span-6 lg:pl-8">
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="w-4 h-px bg-[#CC0000] mt-2.5 shrink-0" />
                        <span className="text-[#444] font-body text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#111111]">
        <div className="container">
          <div className="reveal mb-16">
            <div className="section-label mb-4">How It Works</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
              From brief to
              <br />
              cinematic delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#333]">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="reveal px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-mono-am text-[#CC0000] text-xs tracking-widest block mb-4">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#888] font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal max-w-2xl">
            <div className="section-label mb-5">Ready to Start?</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111111] mb-6 leading-tight">
              Let&apos;s build something
              <br />
              extraordinary.
            </h2>
            <p className="text-[#666] font-body text-lg mb-8 leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll discuss your brand, your goals, and
              how we can create a cinematic campaign that sets you apart.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/amstudioai-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-base px-8 py-4"
              >
                Book a Free Call <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/61493300023"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base px-8 py-4"
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
