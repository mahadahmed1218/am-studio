"use client";

/*
 * AM Studios — Contact Page
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, MessageCircle, Mail, MapPin } from "lucide-react";

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

export default function Contact() {
  const revealRef = useReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]" ref={revealRef}>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container">
          <div className="reveal">
            <div className="section-label mb-5">Get In Touch</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.05] max-w-3xl">
              Let&apos;s create
              <br />
              something <em className="text-[#CC0000] not-italic">extraordinary.</em>
            </h1>
            <p className="text-[#666] font-body text-lg mt-6 max-w-xl leading-relaxed">
              Ready to elevate your brand with cinematic AI production? We&apos;d love to hear
              about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-4 reveal">
              {/* Primary CTAs */}
              <div className="space-y-4 mb-12">
                <a
                  href="https://calendly.com/mahadautonexai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#CC0000] text-white group hover:bg-[#AA0000] transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm">Book a Free Call</p>
                    <p className="font-mono-am text-xs text-white/70 mt-0.5">
                      30-min strategy session
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="opacity-70 group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <a
                  href="https://wa.me/61435781363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#111111] text-white group hover:bg-[#222] transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm">WhatsApp Us</p>
                    <p className="font-mono-am text-xs text-white/50 mt-0.5">+61 435 781 363</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="opacity-70 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 pt-8 border-t border-[#E8E6E3]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-[#E8E6E3] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={14} className="text-[#CC0000]" />
                  </div>
                  <div>
                    <p className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase mb-1">
                      Email
                    </p>
                    <p className="font-body text-sm text-[#333]">hello@amstudios.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-[#E8E6E3] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-[#CC0000]" />
                  </div>
                  <div>
                    <p className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase mb-1">
                      Location
                    </p>
                    <p className="font-body text-sm text-[#333]">Australia — Serving Globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-[#E8E6E3] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={14} className="text-[#CC0000]" />
                  </div>
                  <div>
                    <p className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase mb-1">
                      WhatsApp
                    </p>
                    <p className="font-body text-sm text-[#333]">+61 435 781 363</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-10 p-5 bg-[#F2F0ED] border-l-2 border-[#CC0000]">
                <p className="font-mono-am text-[10px] text-[#CC0000] tracking-widest uppercase mb-2">
                  Response Time
                </p>
                <p className="font-body text-sm text-[#555] leading-relaxed">
                  We typically respond within 2 hours during business hours. For urgent projects,
                  WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-8 reveal" style={{ transitionDelay: "100ms" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-[#CC0000] flex items-center justify-center mb-6">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#111111] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[#666] font-body max-w-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 2 hours. In the
                    meantime, feel free to book a call directly.
                  </p>
                  <a
                    href="https://calendly.com/mahadautonexai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-red mt-8"
                  >
                    Book a Call <ArrowRight size={15} />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-[#E8E6E3] bg-white px-4 py-3 font-body text-sm text-[#111] placeholder-[#BBB] focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@brand.com"
                        className="w-full border border-[#E8E6E3] bg-white px-4 py-3 font-body text-sm text-[#111] placeholder-[#BBB] focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase block mb-2">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Your Brand Name"
                        className="w-full border border-[#E8E6E3] bg-white px-4 py-3 font-body text-sm text-[#111] placeholder-[#BBB] focus:outline-none focus:border-[#CC0000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase block mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-[#E8E6E3] bg-white px-4 py-3 font-body text-sm text-[#111] focus:outline-none focus:border-[#CC0000] transition-colors appearance-none"
                      >
                        <option value="">Select a range</option>
                        <option value="under-2k">Under $2,000</option>
                        <option value="2k-5k">$2,000 – $5,000</option>
                        <option value="5k-10k">$5,000 – $10,000</option>
                        <option value="10k-25k">$10,000 – $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono-am text-[10px] text-[#888] tracking-widest uppercase block mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Describe your brand, campaign goals, and what you're looking to achieve..."
                      className="w-full border border-[#E8E6E3] bg-white px-4 py-3 font-body text-sm text-[#111] placeholder-[#BBB] focus:outline-none focus:border-[#CC0000] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button type="submit" className="btn-red text-base px-8 py-4">
                      Send Message <ArrowRight size={16} />
                    </button>
                    <span className="font-mono-am text-[10px] text-[#888] tracking-wider">
                      Or book a call directly →{" "}
                      <a
                        href="https://calendly.com/mahadautonexai/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CC0000] hover:underline"
                      >
                        Calendly
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-16 bg-[#111111]">
        <div className="container">
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#333]">
            {[
              {
                q: "How fast can you deliver?",
                a: "Our standard turnaround is 48 hours for most projects. Rush delivery available.",
              },
              {
                q: "What industries do you serve?",
                a: "We specialize in luxury automotive, fragrance, fashion, real estate, and premium brands.",
              },
              {
                q: "Do you work internationally?",
                a: "Yes. We're based in Australia but work with brands globally, fully remote.",
              },
            ].map((faq, i) => (
              <div key={i} className="px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0">
                <p className="font-display text-white font-semibold text-base mb-3">{faq.q}</p>
                <p className="text-[#888] font-body text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
