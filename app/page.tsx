"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/sections/Footer";
import LeadForm from "@/components/LeadForm";

/* ─── Helpers ─── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block font-body text-[11px] tracking-[0.22em] uppercase mb-6 px-5 py-2"
      style={{
        color: "var(--esmeralda-claro)",
        background: "rgba(82,183,136,0.08)",
        borderRadius: 999,
        textShadow: "0 0 18px rgba(82,183,136,0.6)",
      }}
    >
      {children}
    </span>
  );
}

/* ─── VSL Box ─── */
function VslBox() {
  return (
    <div style={{ width: "100%", maxWidth: 680, margin: "36px auto 0" }}>
      <div
        className="vsl-outer"
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          border: "4px solid var(--esmeralda-claro)",
          borderRadius: 12,
          background:
            "radial-gradient(ellipse at 50% 50%, #0d2318 0%, var(--bg) 70%)",
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes vslGlow {
            0%, 100% { box-shadow: 0 0 40px 6px rgba(82,183,136,0.25); }
            50%       { box-shadow: 0 0 80px 10px rgba(82,183,136,0.4); }
          }
          .vsl-outer { animation: vslGlow 3.4s ease-in-out infinite; }
        `}</style>
        <div
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#050B08">
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spotlight superior */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60%",
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(82,183,136,0.22) 0%, rgba(5,11,8,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <FadeIn>
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
          Tu piel merece{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            resultados reales
          </span>
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
          Tratamientos personalizados con seguimiento real. Sin protocolos
          genéricos. Sin promesas vacías.
        </p>

        <VslBox />

        <div style={{ marginTop: 40 }}>
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
            Agenda tu evaluación gratuita
          </button>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Testimonios en video (debajo del Hero) ─── */
function TestimoniosHero() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Spotlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(82,183,136,0.18) 0%, rgba(10,26,18,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <p
            className="font-body text-[11px] tracking-[0.28em] uppercase mb-5"
            style={{ color: "var(--esmeralda-claro)" }}
          >
            NO me creas a mí como especialista
          </p>

          <h2
            className="max-w-[640px] mx-auto mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(32px, 7vw, 52px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            Resultados que hablan{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              por sí solos
            </span>
          </h2>

          <p
            className="font-body text-[15px] leading-relaxed mb-14"
            style={{ color: "var(--txt-2)", maxWidth: 480, margin: "0 auto 56px" }}
          >
            Antes de agendar, mira los resultados reales de quienes ya
            confiaron en nosotros.
          </p>
        </FadeIn>

        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {["Paciente 1", "Paciente 2", "Paciente 3", "Paciente 4", "Paciente 5", "Paciente 6"].map(
            (nombre, i) => (
              <FadeIn key={i} delay={i * 80}>
                {/* TODO: insertar testimonio real - nombre, video, cita */}
                <div className="flex flex-col">
                  {/* Thumbnail */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "9/16",
                      background:
                        "linear-gradient(160deg, #0d2318 0%, var(--bg) 100%)",
                      border: "1px solid var(--hairline)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* Play button */}
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "rgba(82,183,136,0.15)",
                        border: "2px solid var(--esmeralda-claro)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 24px rgba(82,183,136,0.3)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="var(--esmeralda-claro)"
                      >
                        <polygon points="6,4 20,12 6,20" />
                      </svg>
                    </div>

                    {/* Barra de progreso falsa */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 14,
                        left: 16,
                        right: 16,
                        height: 2,
                        background: "rgba(82,183,136,0.15)",
                        borderRadius: 2,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: `${28 + i * 11}%`,
                          height: "100%",
                          background: "var(--esmeralda-claro)",
                          borderRadius: 2,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: `${28 + i * 11}%`,
                          transform: "translate(-50%, -50%)",
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--esmeralda-claro)",
                          boxShadow: "0 0 6px var(--esmeralda-claro)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Nombre */}
                  <p
                    className="font-body text-[13px] mt-3 text-left"
                    style={{ color: "var(--txt-2)" }}
                  >
                    {nombre}
                  </p>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Reconocidos por ─── */
function Reconocidos({ onCta }: { onCta: () => void }) {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <h2
            className="max-w-[680px] mx-auto mb-12"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(30px, 6vw, 48px)",
              lineHeight: 1.15,
              color: "var(--white)",
            }}
          >
            Reconocidos por la Sociedad Chilena de Medicina Estética:{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Un Protocolo Validado
            </span>
          </h2>

          {/* Imagen placeholder */}
          {/* TODO: insertar foto del equipo médico real */}
          <div
            style={{
              width: "100%",
              maxWidth: 700,
              margin: "0 auto",
              border: "1px solid var(--hairline)",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                background: "linear-gradient(160deg, #0d2318 0%, #050B08 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--txt-3)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>

            {/* Stats integradas */}
            <div
              className="grid grid-cols-3"
              style={{ backgroundColor: "var(--bg-alt)" }}
            >
              {[
                { value: "+850", label: "Pacientes tratadas" },
                { value: "97%", label: "Tasa de satisfacción" },
                { value: "8", label: "Años de trayectoria" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-8 gap-2"
                  style={{
                    borderTop: "1px solid var(--hairline)",
                    borderRight: i < 2 ? "1px solid var(--hairline)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(32px, 6vw, 48px)",
                      lineHeight: 1,
                      color: "var(--esmeralda-claro)",
                      fontWeight: 400,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="font-body text-[11px] tracking-[0.12em] uppercase"
                    style={{ color: "var(--txt-3)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 48 }}>
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
              Agenda tu evaluación gratuita
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Features (4 columnas) ─── */
const features = [
  {
    title: "Tecnología certificada",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sin cirugías",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Resultados garantizados",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "+500 pacientes tratadas",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
              <div style={{ color: "var(--esmeralda-claro)" }}>{f.icon}</div>
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

/* ─── Certificacion / Avalado ─── */
function Avalado() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <h2
            className="font-display text-[36px] md:text-[44px] leading-tight mb-12"
            style={{ fontWeight: 400, maxWidth: 640, margin: "0 auto 48px" }}
          >
            Resultados Avalados Por Especialistas: Un Tratamiento Probado
          </h2>

          {/* Imagen placeholder */}
          <div
            style={{
              width: "100%",
              maxWidth: 680,
              aspectRatio: "16/9",
              border: "2px solid var(--esmeralda)",
              background:
                "linear-gradient(160deg, #0d2318 0%, var(--bg-alt) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 56px",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(82,183,136,0.25)"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-2xl mx-auto">
            {[
              { value: "+500", label: "Pacientes tratadas" },
              { value: "98%", label: "Satisfacción" },
              { value: "12", label: "Años de experiencia" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(36px,7vw,54px)",
                    lineHeight: 1,
                    color: "var(--esmeralda-claro)",
                    fontWeight: 400,
                  }}
                >
                  {s.value}
                </p>
                <p
                  className="font-body text-[12px] tracking-[0.12em] uppercase"
                  style={{ color: "var(--txt-3)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── El problema ─── */
const problemas = [
  {
    titulo: "Protocolos genéricos",
    desc: "El mismo tratamiento para todas, sin considerar tu tipo de piel ni tus necesidades específicas.",
  },
  {
    titulo: "Resultados inconsistentes",
    desc: "Cada sesión se siente distinta. No hay forma de saber si realmente estás progresando.",
  },
  {
    titulo: "Sin seguimiento real",
    desc: "Te dejan sola después de la sesión, sin acompañamiento ni revisión de cómo evoluciona tu piel.",
  },
];

function ElProblema() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <Badge>El problema..</Badge>

          <h2
            className="max-w-[620px] mx-auto mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(30px, 6vw, 48px)",
              lineHeight: 1.15,
              color: "var(--white)",
            }}
          >
            ¿Cansada de probar tratamientos que no muestran{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              resultados reales?
            </span>
          </h2>

          <p
            className="font-body text-[15px] leading-relaxed mb-14"
            style={{ color: "var(--txt-2)", maxWidth: 480, margin: "0 auto 56px" }}
          >
            Has invertido tiempo y dinero en tratamientos que prometen mucho
            pero entregan poco, dejándote con la misma sensación de siempre.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {problemas.map((p, i) => (
            <FadeIn key={i} delay={i * 110}>
              <div
                style={{
                  backgroundColor: "var(--bg-alt)",
                  border: "1px solid var(--hairline)",
                  borderRadius: 8,
                  padding: "36px 28px",
                  textAlign: "left",
                }}
              >
                <p className="text-[22px] mb-4">❌</p>
                <p
                  className="font-body font-semibold text-[15px] mb-3"
                  style={{ color: "var(--esmeralda-claro)" }}
                >
                  {p.titulo}
                </p>
                <p
                  className="font-body text-[13px] leading-relaxed"
                  style={{ color: "var(--txt-2)" }}
                >
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── La solución ─── */
function LaSolucion() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <Badge>La solución..</Badge>
          <h2
            className="font-display text-[36px] md:text-[44px] leading-tight mb-6"
            style={{ fontWeight: 400, maxWidth: 560, margin: "0 auto 24px" }}
          >
            Un protocolo personalizado que se adapta a tu piel
          </h2>
          <p
            className="font-body text-[15px] leading-relaxed mb-10"
            style={{ color: "var(--txt-2)", maxWidth: 480, margin: "0 auto 40px" }}
          >
            Cada paciente es única. Por eso diseñamos un plan específico para tu
            tipo de piel, tu ritmo de vida y tus objetivos reales.
          </p>

          <div className="flex flex-col gap-4 items-start text-left max-w-md mx-auto">
            {[
              "Evaluación profesional antes de cada sesión",
              "Seguimiento fotográfico de tus resultados",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  style={{
                    color: "var(--esmeralda-claro)",
                    fontSize: 18,
                    lineHeight: 1.4,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <p
                  className="font-body text-[14px] leading-relaxed"
                  style={{ color: "var(--white)" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Video testimonios ─── */
function VideoTestimonios({ onCta }: { onCta: () => void }) {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-14">
            <Badge>Pero no me creas a mí..</Badge>
            <h2
              className="font-display text-[36px] md:text-[44px] leading-tight"
              style={{ fontWeight: 400 }}
            >
              Testimonios De Pacientes Reales
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeIn key={i} delay={i * 80}>
              {/* TODO: insertar testimonio real */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "9/16",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--hairline)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: "1px solid rgba(82,183,136,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="rgba(82,183,136,0.5)"
                  >
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
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

/* ─── Testimonials con stats ─── */
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

function TestimonialsStats({ onCta }: { onCta: () => void }) {
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
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "75%",
                    background:
                      "linear-gradient(160deg, #0d2318 0%, var(--bg-alt) 100%)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      padding: "4px 10px",
                      background: "rgba(5,11,8,0.75)",
                      border: "1px solid rgba(82,183,136,0.3)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <span
                      className="font-body text-[10px] tracking-[0.14em] uppercase"
                      style={{ color: "var(--esmeralda-claro)" }}
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
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(82,183,136,0.18)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-3 flex-1"
                  style={{ padding: "30px 28px 28px" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 46,
                      lineHeight: 1,
                      color: "var(--esmeralda-claro)",
                      fontWeight: 400,
                    }}
                  >
                    {t.result}
                  </p>
                  <p
                    className="font-body text-[13px]"
                    style={{ color: "var(--txt-2)" }}
                  >
                    {t.desc}
                  </p>
                  <p
                    className="font-display text-[16px] flex-1"
                    style={{
                      color: "var(--white)",
                      fontStyle: "italic",
                      fontWeight: 300,
                    }}
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
      <TestimoniosHero />
      <Reconocidos onCta={() => setFormOpen(true)} />
      <ElProblema />
      <Features />
      <Avalado />
      <LaSolucion />
      <VideoTestimonios onCta={() => setFormOpen(true)} />
      <TestimonialsStats onCta={() => setFormOpen(true)} />
      <Footer />
      <LeadForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
