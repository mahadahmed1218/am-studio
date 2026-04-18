"use client";

/*
 * AM Studios Navbar
 * Design: Fixed, white bg with subtle border, logo left, nav center, CTA right
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F7] shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-[#E8E6E3]"
            : "bg-[#FAF9F7]/95 backdrop-blur-sm border-b border-[#E8E6E3]/60"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <img
                  src="/d56c2706-15ab-457c-88f3-668ae44ba29f_removalai_preview.png"
                  alt="AM Studios logo"
                  className="h-14 w-14 object-contain"
                />
                <span className="font-display font-bold text-[#808080] text-xl tracking-tight leading-none">
                  AM Studios
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`nav-link ${pathname === link.href ? "active" : ""}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="w-px h-4 bg-[#E8E6E3]" />
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://calendly.com/amstudioai-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-sm"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#111111]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`dev-mobile-menu fixed inset-0 z-40 bg-[#FAF9F7] transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-1 mt-8">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <div
                  className="py-4 border-b border-[#E8E6E3] flex items-center justify-between group"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span
                    className={`font-display text-2xl font-semibold ${
                      pathname === link.href ? "text-[#CC0000]" : "text-[#111111]"
                    } group-hover:text-[#CC0000] transition-colors`}
                  >
                    {link.label}
                  </span>
                  <span className="text-[#888] text-sm font-mono-am">0{i + 1}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://calendly.com/amstudioai-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full justify-center text-base py-4"
            >
              Book a Call
            </a>
          </div>
          <div className="mt-4">
            <a
              href="https://wa.me/61493300023"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full justify-center text-base py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
