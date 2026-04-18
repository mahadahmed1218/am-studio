"use client";

/*
 * DevPreview · Development-only viewport toggle
 * Floating bar at bottom-center to switch between Desktop and Mobile (390px) views.
 * Only renders in development mode · stripped from production builds.
 */
import { useState, useEffect } from "react";
import { Monitor, Smartphone } from "lucide-react";

type Mode = "desktop" | "mobile";

export default function DevPreview() {
  const [mode, setMode] = useState<Mode>("desktop");

  useEffect(() => {
    const html = document.documentElement;
    if (mode === "mobile") {
      html.setAttribute("data-dev-preview", "mobile");
    } else {
      html.removeAttribute("data-dev-preview");
    }
    return () => html.removeAttribute("data-dev-preview");
  }, [mode]);

  // Stripped from production
  if (process.env.NODE_ENV !== "development") return null;

  const btnBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "9px 16px",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    transition: "background 0.15s, color 0.15s",
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99999,
        display: "flex",
        alignItems: "stretch",
        background: "#0D0D0D",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 7,
        overflow: "hidden",
        boxShadow: "0 4px 28px rgba(0,0,0,0.55)",
        userSelect: "none",
      }}
    >
      <button
        onClick={() => setMode("desktop")}
        style={{
          ...btnBase,
          background: mode === "desktop" ? "#CC0000" : "transparent",
          color: mode === "desktop" ? "#fff" : "#666",
        }}
      >
        <Monitor size={12} />
        Desktop
      </button>

      <div style={{ width: 1, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

      <button
        onClick={() => setMode("mobile")}
        style={{
          ...btnBase,
          background: mode === "mobile" ? "#CC0000" : "transparent",
          color: mode === "mobile" ? "#fff" : "#666",
        }}
      >
        <Smartphone size={12} />
        Mobile · 390px
      </button>
    </div>
  );
}
