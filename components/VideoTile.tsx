"use client";

/*
 * VideoTile — portfolio card used on Home and Work pages.
 * Autoplays muted when scrolled 40%+ into view (if a video src is provided).
 * Falls back to poster image until a video is uploaded.
 * Clicking navigates to the category case study page.
 */
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface VideoTileProps {
  href: string;
  category: string;
  title: string;
  src: string;
  poster: string;
  className?: string;
}

export default function VideoTile({
  href,
  category,
  title,
  src,
  poster,
  className = "",
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !src) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
          el.currentTime = 0;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <Link href={href}>
      <div className={`relative overflow-hidden group cursor-pointer ${className}`}>
        {src ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/85 via-[#0D0D0D]/20 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

        {/* Play ring on hover */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-14 h-14 border border-white/50 flex items-center justify-center">
            <Play size={18} className="text-white ml-1" />
          </div>
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
          <span className="font-mono-am text-white text-[10px] tracking-widest uppercase block mb-2">
            {category}
          </span>
          <h3 className="font-display text-[#CC0000] text-xl md:text-2xl font-semibold leading-tight mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-[#AAA] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="font-mono-am text-[10px] tracking-widest uppercase">
              View Case Study
            </span>
            <ArrowRight size={11} />
          </div>
        </div>
      </div>
    </Link>
  );
}
