"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/sections/Footer";
import LeadForm from "@/components/LeadForm";
import { config } from "@/lib/config";

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
        {config.hero.vslCaption}
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
          {config.hero.tituloLinea1}{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {config.hero.tituloLinea2Destacado}
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
          {config.hero.subtituloItalica}
        </p>

        <p
          className="font-body text-[15px] leading-relaxed max-w-[460px] mx-auto mb-10"
          style={{ color: "var(--txt-2)", fontWeight: 300 }}
        >
          {config.hero.parrafo}
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
            {config.hero.ctaTexto}
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
            {config.testimoniosVideo.badge}
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
            {config.testimoniosVideo.titulo}{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {config.testimoniosVideo.tituloDestacado}
            </span>
          </h2>

          <p
            className="font-body text-[15px] leading-relaxed mb-14"
            style={{ color: "var(--txt-2)", maxWidth: 480, margin: "0 auto 56px" }}
          >
            {config.testimoniosVideo.subtitulo}
          </p>
        </FadeIn>

        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {config.testimoniosVideo.nombres.map(
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
            {config.reconocidos.badge}:{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {config.reconocidos.subtitulo}
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
              {config.reconocidos.stats.map((s, i) => (
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
                    {s.valor}
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
              {config.reconocidos.ctaTexto}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


/* ─── El problema ─── */
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
          <Badge>{config.problema.badge}</Badge>

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
            {config.problema.tituloLinea1}{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {config.problema.tituloDestacado}
            </span>
          </h2>

          <p
            className="font-body text-[15px] leading-relaxed mb-14"
            style={{ color: "var(--txt-2)", maxWidth: 480, margin: "0 auto 56px" }}
          >
            {config.problema.subtitulo}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {config.problema.cards.map((p, i) => (
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
                  {p.descripcion}
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
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-center mb-12">
            <Badge>{config.solucion.badge}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Panel mockup — columna izquierda */}
            <div
              style={{
                backgroundColor: "var(--bg-alt)",
                border: "1px solid var(--hairline)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {/* Header del panel */}
              <div
                style={{
                  borderBottom: "1px solid var(--hairline)",
                  padding: "16px 20px",
                  display: "flex",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                {config.solucion.panelMock.sidebarItems.map((item, i) => (
                  <span
                    key={i}
                    className="font-body text-[12px] tracking-[0.1em]"
                    style={{
                      color: i === 0 ? "var(--esmeralda-claro)" : "var(--txt-3)",
                      borderBottom: i === 0 ? "1px solid var(--esmeralda-claro)" : "none",
                      paddingBottom: i === 0 ? 2 : 0,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Contenido del panel */}
              <div style={{ padding: "24px 20px" }}>
                <p
                  className="font-body text-[11px] tracking-[0.14em] uppercase mb-4"
                  style={{ color: "var(--txt-3)" }}
                >
                  Progreso de piel
                </p>

                {/* Sparkline SVG */}
                <svg
                  viewBox="0 0 200 60"
                  width="100%"
                  style={{ display: "block", marginBottom: 20 }}
                >
                  <polyline
                    points="0,55 30,48 60,42 90,35 120,28 150,18 200,8"
                    fill="none"
                    stroke="var(--esmeralda-claro)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="0,55 30,48 60,42 90,35 120,28 150,18 200,8 200,60 0,60"
                    fill="rgba(82,183,136,0.08)"
                    stroke="none"
                  />
                  <circle cx="200" cy="8" r="4" fill="var(--esmeralda-claro)" />
                </svg>

                {/* Mini cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {config.solucion.panelMock.miniCards.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: "var(--bg)",
                        border: "1px solid var(--hairline)",
                        borderRadius: 8,
                        padding: "14px 16px",
                      }}
                    >
                      <p
                        className="font-body text-[10px] tracking-[0.12em] uppercase mb-1"
                        style={{ color: "var(--txt-3)" }}
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 28,
                          lineHeight: 1,
                          color: "var(--esmeralda-claro)",
                          fontWeight: 400,
                        }}
                      >
                        {c.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Próxima evaluación */}
                <div
                  style={{
                    borderTop: "1px solid var(--hairline)",
                    paddingTop: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      className="font-body text-[10px] tracking-[0.12em] uppercase mb-1"
                      style={{ color: "var(--txt-3)" }}
                    >
                      Próxima evaluación
                    </p>
                    <p
                      className="font-body text-[13px]"
                      style={{ color: "var(--white)" }}
                    >
                      {config.solucion.panelMock.proximaEvaluacion}
                    </p>
                  </div>
                  <span
                    className="font-body text-[11px] tracking-[0.1em] uppercase px-3 py-2"
                    style={{
                      border: "1px solid var(--esmeralda)",
                      color: "var(--esmeralda-claro)",
                      borderRadius: 4,
                      cursor: "default",
                    }}
                  >
                    Ver ficha
                  </span>
                </div>
              </div>
            </div>

            {/* Texto — columna derecha */}
            <div className="flex flex-col gap-6">
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 5vw, 44px)",
                  lineHeight: 1.15,
                  color: "var(--white)",
                }}
              >
                {config.solucion.titulo}{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--white) 0%, var(--esmeralda-claro) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {config.solucion.tituloDestacado}
                </span>
              </h2>

              <p
                className="font-body text-[15px] leading-relaxed"
                style={{ color: "var(--txt-2)" }}
              >
                {config.solucion.parrafo}
              </p>

              <div className="flex flex-col gap-4">
                {config.solucion.checks.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "var(--esmeralda-claro)",
                        fontSize: 18,
                        lineHeight: 1.5,
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
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Clientes galeria ─── */
function ClientesGaleria() {
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
          <p
            className="font-body text-[11px] tracking-[0.28em] uppercase mb-4 text-center"
            style={{ color: "var(--esmeralda-claro)" }}
          >
            Resultados reales
          </p>
          <h2
            className="font-display text-[36px] md:text-[44px] leading-tight text-center mb-14"
            style={{ fontWeight: 400 }}
          >
            +Clientes {config.clinica.nombre}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <FadeIn key={i} delay={i * 70}>
              {/* TODO: insertar captura/screenshot real de cliente */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--hairline)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--txt-3)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </FadeIn>
          ))}
        </div>
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
      <LaSolucion />
      <ClientesGaleria />
      <Footer />
      <LeadForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
