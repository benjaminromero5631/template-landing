"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionDivider from "@/components/SectionDivider";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/sections/Footer";
import LeadForm from "@/components/LeadForm";

/* ─── VSL Box ─── */
function VslBox() {
  return (
    <div style={{ width: "100%", maxWidth: 680, margin: "52px auto 0" }}>
      {/* 16:9 container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          border: "2px solid var(--celeste)",
          background: "radial-gradient(ellipse at 50% 50%, #0d1f2d 0%, #0A0A0A 70%)",
          overflow: "hidden",
        }}
      >
        {/* Glow keyframe via inline style tag */}
        <style>{`
          @keyframes vslGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(126,200,227,0); }
            50%       { box-shadow: 0 0 32px 8px rgba(126,200,227,0.22); }
          }
          .vsl-glow { animation: vslGlow 3.4s ease-in-out infinite; }
        `}</style>
        <div
          className="vsl-glow"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Play circle */}
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              background: "rgba(245,240,235,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A0A0A">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
        </div>
      </div>
      {/* Caption row */}
      <p
        className="font-body text-[11px] tracking-[0.18em] uppercase text-center mt-4"
        style={{ color: "var(--txt-3)" }}
      >
        Video próximamente
      </p>
      <p
        className="font-display text-[17px] text-center mt-2"
        style={{ color: "var(--dorado)", fontStyle: "italic", fontWeight: 300 }}
      >
        Mira cómo lo lograron nuestras pacientes →
      </p>
    </div>
  );
}

/* ─── Features ─── */
const features = [
  {
    title: "Tecnología certificada",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sin cirugías",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Resultados garantizados",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "+500 pacientes tratadas",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function Features() {
  return (
    <section className="w-full px-4 py-20" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="flex flex-col items-center text-center gap-4 py-6">
              <div style={{ color: "var(--celeste)" }}>{f.icon}</div>
              <p
                className="font-body text-[13px] leading-snug font-medium"
                style={{ color: "var(--white)" }}
              >
                {f.title}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    badge: "Tratamiento facial intensivo",
    result: "−6 años",
    desc: "Reducción visible de arrugas y flacidez en solo 4 sesiones.",
    quote: "No lo podía creer cuando vi las fotos del antes y después.",
    name: "Valentina M.",
    age: "43 años",
  },
  {
    badge: "Protocolo anti-manchas",
    result: "+80% firmeza",
    desc: "Piel más uniforme y firme desde la segunda sesión.",
    quote: "Lo que más valoro es que no me dejaron sola después del tratamiento.",
    name: "Camila R.",
    age: "37 años",
  },
  {
    badge: "Protocolo personalizado",
    result: "3 sesiones",
    desc: "Plan exacto para su tipo de piel, sin protocolos genéricos.",
    quote: "Por fin encontré un lugar que trata mi piel de forma individual.",
    name: "Fernanda L.",
    age: "51 años",
  },
];

function Testimonials({ onCta }: { onCta: () => void }) {
  return (
    <section className="w-full px-4 py-24" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-[42px] leading-tight text-center mb-16">
            Lo que dicen nuestras pacientes
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="flex flex-col h-full"
                style={{
                  backgroundColor: "#111116",
                  border: "1px solid rgba(126,200,227,0.15)",
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "75%", /* 4:3 */
                    background: "linear-gradient(160deg, #0d1a22 0%, #111116 100%)",
                    overflow: "hidden",
                  }}
                >
                  {/* Treatment badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      padding: "4px 10px",
                      background: "rgba(10,10,10,0.75)",
                      border: "1px solid rgba(126,200,227,0.3)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <span
                      className="font-body text-[10px] tracking-[0.14em] uppercase"
                      style={{ color: "var(--celeste)" }}
                    >
                      {t.badge}
                    </span>
                  </div>
                  {/* Person icon */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(126,200,227,0.2)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p
                    className="font-display text-[48px] leading-none"
                    style={{ color: "var(--celeste)" }}
                  >
                    {t.result}
                  </p>
                  <p className="font-body text-[13px]" style={{ color: "var(--txt-2)" }}>
                    {t.desc}
                  </p>
                  <p
                    className="font-display text-[17px] flex-1"
                    style={{ color: "var(--white)", fontStyle: "italic", fontWeight: 300 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p
                    className="font-body text-[12px] tracking-[0.08em]"
                    style={{ color: "var(--dorado)" }}
                  >
                    {t.name} &middot; {t.age}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <button
              onClick={onCta}
              className="font-body text-[12px] tracking-[0.2em] uppercase px-10 py-5"
              style={{
                border: "2px solid var(--celeste)",
                color: "var(--celeste)",
                background: "transparent",
                cursor: "pointer",
                transition: "background .3s ease, color .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--celeste)";
                e.currentTarget.style.color = "#0A0A0A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--celeste)";
              }}
            >
              Quiero mi evaluación gratuita
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Hero ─── */
function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <FadeIn>
        <p
          className="font-body text-[11px] tracking-[0.28em] uppercase mb-8"
          style={{ color: "var(--celeste)" }}
        >
          Clínica Estética &middot; Santiago
        </p>
        <h1
          className="font-display text-[54px] md:text-[72px] leading-[1.05] max-w-[720px] mx-auto mb-6"
          style={{ color: "var(--white)", fontWeight: 400 }}
        >
          Tu piel merece resultados reales
        </h1>
        <p
          className="font-body text-[16px] leading-relaxed max-w-[480px] mx-auto mb-12"
          style={{ color: "var(--txt-2)", fontWeight: 300 }}
        >
          Tratamientos personalizados con seguimiento real. Sin protocolos genéricos. Sin promesas vacías.
        </p>
        <button
          onClick={onCta}
          className="font-body text-[12px] tracking-[0.2em] uppercase px-10 py-5"
          style={{
            border: "2px solid var(--white)",
            color: "var(--white)",
            background: "transparent",
            cursor: "pointer",
            transition: "background .3s ease, color .3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--white)";
            e.currentTarget.style.color = "#0A0A0A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--white)";
          }}
        >
          Agenda tu evaluación gratuita
        </button>
        <VslBox />
      </FadeIn>
    </section>
  );
}

/* ─── Page ─── */
export default function Page() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Hero onCta={() => setFormOpen(true)} />
      <Features />
      <SectionDivider label="El problema" />
      <Problem />
      <SectionDivider label="Cómo funciona" />
      <HowItWorks />
      <SectionDivider label="Testimonios" />
      <Testimonials onCta={() => setFormOpen(true)} />
      <Footer />
      <LeadForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
