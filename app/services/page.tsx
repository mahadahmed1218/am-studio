"use client";

/*
 * AM Studios · Services Page
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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

const socialStats = [
  { num: "100M+", label: "Organic Views Generated" },
  { num: "30.9K", label: "Instagram Followers" },
  { num: "48hrs", label: "Average Delivery Time" },
  { num: "5", label: "Industries Served" },
];

const pricing = [
  {
    label: "STARTER",
    price: "From $229 AUD",
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
    price: "From $369 AUD",
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
    price: "From $579 AUD",
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

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-[#111111]">
        <div className="container">
          <div className="reveal mb-10 lg:mb-16">
            <div className="section-label mb-4">How It Works</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
              From brief to
              <br />
              cinematic delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#333]">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="reveal px-0 md:px-8 first:pl-0 last:pr-0 py-7 md:py-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-mono-am text-[#CC0000] text-xs tracking-widest block mb-3">
                  {step.step}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#888] font-body text-sm leading-relaxed">{step.desc}</p>
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
