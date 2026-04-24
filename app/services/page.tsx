"use client";

/*
 * AM Studios · Services Page
 */
import { useEffect, useRef } from "react";
import { ArrowRight, Film, Cpu, Layers } from "lucide-react";

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
    icon: <Film size={28} />,
    title: "Cinematic Video Ads",
    description:
      "Film-quality video campaigns built for premium brands. We direct, produce, and deliver ads that look like they belong in a cinema · not a social feed. Every frame intentional. Every cut precise.",
    features: [
      "Full campaign concept & storyboard",
      "Cinematic direction & AI production",
      "Professional colour grading & sound design",
      "Multi-format delivery (16:9, 9:16, 1:1)",
      "48-hour turnaround",
      "2 rounds of revisions included",
    ],
    industries: ["Luxury Automotive", "Fragrance", "Fashion", "Real Estate"],
  },
  {
    num: "02",
    icon: <Cpu size={28} />,
    title: "AI Production",
    description:
      "We use advanced AI production tools to create premium video content that is indistinguishable from high-budget traditional production · delivered faster and at a fraction of the cost.",
    features: [
      "AI-assisted cinematic video generation",
      "Photorealistic product visualisation",
      "AI voiceover & professional sound design",
      "Rapid iteration with same-day revisions",
      "Scalable content production for ongoing campaigns",
    ],
    industries: ["Premium Brands", "E-Commerce", "Startups", "FMCG"],
  },
  {
    num: "03",
    icon: <Layers size={28} />,
    title: "Brand Strategy & Direction",
    description:
      "We don\u2019t just produce content. We define the visual language your brand speaks. From narrative concept to campaign direction, we make sure every piece of content builds a consistent, premium identity.",
    features: [
      "Brand narrative & visual identity direction",
      "Campaign concept development",
      "Audience & positioning strategy",
      "Content calendar planning",
      "Ongoing creative direction retainer available",
    ],
    industries: ["All Industries", "New Brands", "Rebrands"],
  },
];


const socialStats = [
  { num: "100M+", label: "Organic Views Generated" },
  { num: "30.9K", label: "Instagram Followers" },
  { num: "48hrs", label: "Average Delivery Time" },
  { num: "5", label: "Industries Served" },
];

const pricing = [
  {
    label: "STARTER",
    price: "From $149 AUD",
    ideal: "Single product or brand launch content",
    popular: false,
    includes: [
      "1 cinematic video ad",
      "3 format exports (16:9, 9:16, 1:1)",
      "1 round of revisions",
      "48hr delivery",
    ],
  },
  {
    label: "STANDARD",
    price: "From $289 AUD",
    ideal: "Campaign-ready brands wanting multi-use content",
    popular: true,
    includes: [
      "1 cinematic video ad",
      "All format exports",
      "2 rounds of revisions",
      "48hr delivery",
      "Basic brand direction included",
    ],
  },
  {
    label: "CAMPAIGN",
    price: "From $499 AUD",
    ideal: "Brands running paid ads or launching a full campaign",
    popular: false,
    includes: [
      "3 cinematic video ads",
      "All format exports",
      "Unlimited revisions",
      "Full campaign concept & storyboard",
      "Brand strategy session included",
    ],
  },
];

export default function Services() {
  const revealRef = useReveal();

  return (
    <div className="min-h-screen bg-[#FAF9F7]" ref={revealRef}>

      {/* Page Header */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal">
            <div className="section-label mb-4 md:mb-5">What We Offer</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#111111] leading-[1.05] max-w-3xl">
              Premium production.
              <br />
              <em className="text-[#CC0000] not-italic">Extraordinary</em> results.
            </h1>
            <p className="text-[#666] font-body text-base md:text-lg mt-5 md:mt-6 max-w-xl leading-relaxed">
              From concept to delivery in 48 hours. AI-powered production for premium brands across
              fragrance, automotive, fashion, and real estate. Our content has generated 100M+
              organic views across platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="divide-y divide-[#E8E6E3]">
            {services.map((service, i) => (
              <div
                key={service.num}
                className="reveal py-9 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
                style={{ transitionDelay: `${Math.min(i * 60, 300)}ms` }}
              >
                {/* Number + Icon — desktop sidebar only */}
                <div className="hidden lg:flex lg:col-span-1 lg:flex-col items-start gap-4">
                  <span className="font-mono-am text-[#CCC] text-sm">{service.num}</span>
                  <div className="text-[#CC0000]">{service.icon}</div>
                </div>

                {/* Title + Description */}
                <div className="lg:col-span-5">
                  {/* Mobile: icon + number in one clean row */}
                  <div className="flex items-center gap-3 mb-4 lg:hidden">
                    <div className="text-[#CC0000]">{service.icon}</div>
                    <span className="font-mono-am text-[#CC0000] text-[10px] tracking-[0.2em] uppercase">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-[#111111] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#555] font-body text-sm md:text-base leading-relaxed">
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

                {/* Features — with mobile separator + label */}
                <div className="lg:col-span-6 lg:pl-8 mt-1 pt-5 border-t border-[#EBEBEB] lg:border-0 lg:mt-0 lg:pt-0">
                  <span className="font-mono-am text-[10px] text-[#AAA] tracking-widest uppercase block mb-4 lg:hidden">
                    What&apos;s included
                  </span>
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="w-4 h-px bg-[#CC0000] mt-[9px] shrink-0" />
                        <span className="text-[#444] font-body text-sm leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Social Proof Stats Bar */}
      <section className="bg-[#0D0D0D] border-t border-[#1E1E1E]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1E1E1E]">
            {socialStats.map((stat) => (
              <div key={stat.num} className="flex flex-col items-center py-8 px-4 md:px-6">
                <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {stat.num}
                </span>
                <span className="font-mono-am text-[#666] text-[10px] tracking-widest uppercase text-center leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-[#0D0D0D]">
        <div className="container">
          <div className="reveal mb-10 md:mb-14">
            <div className="section-label mb-4">Investment</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
              Transparent pricing.
              <br />
              No surprises.
            </h2>
            <p className="text-[#888] font-body text-base md:text-lg mt-4 max-w-xl leading-relaxed">
              Every project is scoped to your brief. These packages are our starting points.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {pricing.map((plan, i) => (
              <div
                key={plan.label}
                className={`relative flex flex-col p-6 md:p-8 border ${
                  plan.popular ? "border-[#CC0000]" : "border-[#1E1E1E]"
                } bg-[#111111]`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-px left-6 md:left-8">
                    <span className="font-mono-am text-[10px] tracking-widest bg-[#CC0000] text-white px-3 py-1 uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-5 ${plan.popular ? "pt-4" : "pt-1"}`}>
                  <span className="font-mono-am text-[#CC0000] text-[10px] tracking-widest uppercase block mb-3">
                    {plan.label}
                  </span>
                  <div className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <p className="text-[#555] font-body text-xs leading-relaxed">{plan.ideal}</p>
                </div>

                <div className="w-8 h-px bg-[#2A2A2A] mb-5" />

                <ul className="space-y-3 mb-7 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-3 h-px bg-[#CC0000] mt-[9px] shrink-0" />
                      <span className="text-[#999] font-body text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/amstudioai-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 px-5 font-mono-am text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                    plan.popular
                      ? "bg-[#CC0000] text-white hover:bg-[#AA0000]"
                      : "border border-[#2A2A2A] text-[#777] hover:border-[#444] hover:text-white"
                  }`}
                >
                  Book a Call <ArrowRight size={11} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-[#444] font-body text-xs mt-8 text-center leading-relaxed">
            All prices in AUD · Custom quotes available for ongoing retainers and larger campaigns ·{" "}
            <span className="text-[#666]">Contact us to discuss your project.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#FAF9F7]">
        <div className="container">
          <div className="reveal max-w-2xl">
            <div className="section-label mb-4 md:mb-5">Ready to Start?</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-5 md:mb-6 leading-tight">
              Let&apos;s build something
              <br />
              extraordinary.
            </h2>
            <p className="text-[#666] font-body text-base md:text-lg mb-7 md:mb-8 leading-relaxed">
              Book a free 30-minute discovery call. We&apos;ll discuss your brand, your goals, and
              how we can create a cinematic campaign that sets you apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://calendly.com/amstudioai-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-base px-8 py-4"
              >
                Book a Free Call <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/61456007795"
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
