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
    <div style={{ width: "100%", maxWidth: 680, margin: "36px auto 0" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          border: "2px solid var(--celeste)",
          background: "radial-gradient(ellipse at 50% 50%, #0d1f2d 0%, var(--bg) 70%)",
          overflow: "hidden",
        }}
      >
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#04080F">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
        </div>
      </div>
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

/* ─── Hero ─── */
function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section
      className="w-full flex flex-col items-center text-center px-4"
      style={{
        backgroundColor: "var(--bg)",
        padding: "88px 16px 104px",
      }}
    >
      <FadeIn>
        <p
          className="font-body text-[11px] tracking-[0.28em] uppercase mb-7"
          style={{ color: "var(--celeste)" }}
        >
          Clínica Estética &middot; Santiago
        </p>
        <h1
          className="max-w-[720px] mx-auto mb-5"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "clamp(40px, 9vw, 68px)",
            lineHeight: 1.05,
            color: "var(--white)",
          }}
        >
          Tu piel merece resultados reales
        </h1>
        <p
          className="font-display text-[18px] mx-auto mb-5"
          style={{
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--dorado)",
            maxWidth: 480,
          }}
        >
          Sin dolor · sin cirugías · sin tiempo de recuperación
        </p>
        <p
          className="font-body text-[15px] leading-relaxed max-w-[460px] mx-auto mb-10"
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
            borderRadius: 0,
            transition: "background .3s ease, color .3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--white)";
            e.currentTarget.style.color = "var(--bg)";
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
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        padding: "56px 16px",
      }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="flex flex-col items-center text-center gap-4 py-4">
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
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="font-display text-[42px] leading-tight text-center mb-14"
            style={{ fontWeight: 400 }}
          >
            Lo que dicen nuestras pacientes
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="flex flex-col h-full"
                style={{
                  backgroundColor: "var(--bg-alt)",
                  border: "1px solid var(--hairline)",
                }}
              >
                {/* Image placeholder 4:3 */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "75%",
                    background: "linear-gradient(160deg, #0d1a22 0%, var(--bg-alt) 100%)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      padding: "4px 10px",
                      background: "rgba(4,8,15,0.75)",
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
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(126,200,227,0.18)" strokeWidth="1" strokeLinecap="round">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex flex-col gap-3 flex-1"
                  style={{ padding: "30px 28px 28px" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 46,
                      lineHeight: 1,
                      color: "var(--celeste)",
                      fontWeight: 400,
                    }}
                  >
                    {t.result}
                  </p>
                  <p className="font-body text-[13px]" style={{ color: "var(--txt-2)" }}>
                    {t.desc}
                  </p>
                  <p
                    className="font-display text-[16px] flex-1"
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
                border: "2px solid var(--dorado)",
                color: "var(--dorado)",
                background: "transparent",
                cursor: "pointer",
                borderRadius: 0,
                transition: "background .3s ease, color .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--dorado)";
                e.currentTarget.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--dorado)";
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
