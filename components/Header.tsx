"use client";

import { config } from "@/lib/config";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full flex items-center justify-center px-4 py-3"
      style={{
        backgroundColor: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div className="w-full max-w-5xl flex items-center justify-center md:justify-start">
        <span
          className="font-display text-[18px]"
          style={{ color: "var(--accent)", fontWeight: 700 }}
        >
          {config.clinica.nombre}
        </span>
      </div>
    </header>
  );
}
