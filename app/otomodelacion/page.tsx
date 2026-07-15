"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/sections/Footer";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import { config } from "@/lib/config";

const svc = config.servicios.otomodelacion;

/* ─── Helpers ─── */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block font-body text-[12px] tracking-[0.14em] uppercase mb-6 px-5 py-2"
      style={{
        color: "var(--accent)",
        background: "rgba(196,151,74,0.08)",
        border: "1px solid rgba(196,151,74,0.4)",
        borderRadius: 999,
      }}
    >
      {children}
    </span>
  );
}

function CtaButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="font-body text-[15px] font-semibold px-9 py-4"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #C4974A 100%)",
        color: "#FFFFFF",
        border: "none",
        borderRadius: 11,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function Glow() {
  return <div className="bg-glow" aria-hidden />;
}

function GlowSoft() {
  return <div className="bg-glow-soft" aria-hidden />;
}

function FadeBottom({ to }: { to: string }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 140,
        background: `linear-gradient(to bottom, transparent, ${to})`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

/* ─── Hero ─── */
function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section
      className="w-full flex flex-col items-center text-center px-4 pt-10 pb-16 md:pt-24 md:pb-20"
      style={{
        backgroundColor: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Glow />
      <FadeBottom to="var(--bg-alt)" />
      <FadeIn style={{ position: "relative", zIndex: 1 }}>
        <Badge>{svc.hero.badge}</Badge>

        <h1
          className="max-w-[720px] mx-auto mb-5"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(32px, 6vw, 48px)",
            lineHeight: "1.25",
            color: "var(--white)",
          }}
        >
          {svc.hero.tituloLinea1}{" "}
          <span style={{ color: "var(--accent)" }}>
            {svc.hero.tituloLinea2Destacado}
          </span>
        </h1>

        <p
          className="font-body text-[16px] leading-relaxed max-w-[480px] mx-auto mb-4"
          style={{ color: "var(--txt-2)" }}
        >
          {svc.hero.subtitulo}
        </p>

        <p
          className="font-body text-[14px] leading-relaxed max-w-[480px] mx-auto mb-10"
          style={{ color: "var(--accent)" }}
        >
          {svc.hero.heroTrustLine}
        </p>

        {/* Espacio para video/VSL */}
        <div style={{ width: "100%", maxWidth: 680, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              border: "1px solid var(--hairline)",
              borderRadius: 12,
              background: "var(--bg-alt)",
              overflow: "hidden",
            }}
          >
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
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(196,151,74,0.12)",
                  border: "2px solid var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--accent)">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
              </div>
            </div>
          </div>
          <p
            className="font-body text-[13px] mt-4"
            style={{ color: "var(--txt-2)" }}
          >
            {svc.hero.vslCaption}
          </p>
        </div>

        <div style={{ marginTop: 40 }}>
          <CtaButton onClick={onCta}>{svc.hero.ctaTexto}</CtaButton>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Beneficios / Checklist ─── */
function Beneficios() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--hairline)",
        padding: "80px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowSoft />
      <FadeBottom to="var(--bg)" />
      <div className="max-w-2xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(26px, 5vw, 36px)",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            {svc.beneficios.titulo}
          </h2>

          <div className="flex flex-col gap-5 text-left max-w-[440px] mx-auto">
            {svc.beneficios.checks.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: 18,
                    lineHeight: 1.5,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <p
                  className="font-body text-[15px] leading-relaxed"
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

/* ─── Testimonios ─── */
function Testimonios({ afterHero = false }: { afterHero?: boolean }) {
  return (
    <section
      className="px-2 md:px-4"
      style={{
        width: "100%",
        backgroundColor: afterHero ? "var(--bg-alt)" : "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        paddingTop: 96,
        paddingBottom: 96,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowSoft />
      <FadeBottom to="var(--bg)" />
      <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            className="text-center mb-14 px-2"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            {svc.testimonios.titulo}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
          {svc.testimonios.imagenes.map((src, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div
                className="aspect-[3/4] md:aspect-square"
                style={{
                  border: "1px solid var(--hairline)",
                  borderRadius: 12,
                  overflow: "hidden",
                  backgroundColor: "var(--bg-alt)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Antes y después de paciente de Otomodelación"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cómo funciona ─── */
function ComoFunciona() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowSoft />
      <FadeBottom to="var(--bg-alt)" />
      <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            {svc.comoFunciona.titulo}
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {svc.comoFunciona.bloques.map((bloque, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  {bloque.titulo}
                </p>
                <p
                  className="font-body text-[15px] leading-relaxed"
                  style={{ color: "var(--txt-2)" }}
                >
                  {bloque.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-14">
          {svc.comoFunciona.fotos.map((foto, i) => (
            <FadeIn key={i} delay={i * 90}>
              <div>
                <div
                  className="aspect-square"
                  style={{
                    border: "1px solid var(--hairline)",
                    borderRadius: 12,
                    overflow: "hidden",
                    backgroundColor: "var(--bg-alt)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={foto.src}
                    alt={foto.label}
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
                <p
                  className="font-body text-[11px] md:text-[13px] text-center mt-2"
                  style={{ color: "var(--txt-2)" }}
                >
                  {foto.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mitos y realidades ─── */
function MitosRealidad() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <GlowSoft />
      <FadeBottom to="var(--bg)" />
      <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            {svc.mitosRealidad.titulo}
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {svc.mitosRealidad.pares.map((par, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 60}>
                <div
                  style={{
                    border: "1px solid var(--hairline)",
                    borderRadius: 12,
                    overflow: "hidden",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left font-body text-[15px] font-semibold"
                    style={{
                      padding: "18px 20px",
                      background: "none",
                      border: "none",
                      color: "var(--white)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>&ldquo;{par.mito}&rdquo;</span>
                    <span
                      style={{
                        color: "var(--accent)",
                        flexShrink: 0,
                        fontSize: 20,
                        lineHeight: 1,
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 20px 18px" }}>
                      <p
                        className="font-body text-[14px] leading-relaxed"
                        style={{ color: "var(--accent)" }}
                      >
                        {par.realidad}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={svc.mitosRealidad.pares.length * 60 + 60}>
          <p
            className="font-body text-[13px] leading-relaxed text-center mt-10"
            style={{ color: "var(--txt-2)" }}
          >
            {svc.mitosRealidad.cuidados}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Testimonio destacado ─── */
function TestimonioDestacado() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Glow />
      <FadeBottom to="var(--bg-alt)" />
      <div className="max-w-2xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(20px, 4vw, 26px)",
                lineHeight: 1.4,
                color: "var(--white)",
                marginBottom: 20,
              }}
            >
              &ldquo;{svc.testimonioDestacado.cita}&rdquo;
            </p>
          </blockquote>
          <p className="font-body text-[14px] font-semibold" style={{ color: "var(--accent)" }}>
            {svc.testimonioDestacado.nombre}
          </p>
          {svc.testimonioDestacado.contexto && (
            <p
              className="font-body text-[13px] leading-relaxed mt-4 max-w-[480px] mx-auto"
              style={{ color: "var(--txt-2)" }}
            >
              {svc.testimonioDestacado.contexto}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Reseñas de Google ─── */
function ReseñasGoogle() {
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
      <GlowSoft />
      <FadeBottom to="var(--bg-alt)" />
      <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            Lo que dicen en Google
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {svc.resenasGoogle.map((resena, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div
                style={{
                  backgroundColor: "var(--bg)",
                  border: "1px solid var(--hairline)",
                  borderRadius: 12,
                  padding: "24px 22px",
                  height: "100%",
                }}
              >
                <p style={{ color: "var(--accent)", fontSize: 16, letterSpacing: 2, marginBottom: 12 }}>
                  {"★".repeat(resena.estrellas)}
                </p>
                <p
                  className="font-body text-[14px] leading-relaxed mb-4"
                  style={{ color: "var(--white)" }}
                >
                  {resena.texto}
                </p>
                <p className="font-body text-[13px] font-semibold" style={{ color: "var(--accent)" }}>
                  {resena.nombre}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pasos para tu cupo ─── */
function PasosParaTuCupo() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("linea-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Glow />
      <FadeBottom to="var(--bg-alt)" />
      <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: 1.2,
              color: "var(--white)",
            }}
          >
            Pasos para tu cupo
          </h2>
        </FadeIn>

        <div style={{ position: "relative" }}>
          <div
            ref={lineRef}
            className="linea-hidden"
            style={{
              position: "absolute",
              left: 23,
              top: 24,
              bottom: 24,
              width: 2,
              background: "linear-gradient(to bottom, var(--accent), rgba(196,151,74,0.15))",
            }}
          />
          <div className="flex flex-col gap-8">
            {svc.pasosParaTuCupo.map((paso, i) => (
              <FadeIn key={paso.numero} delay={i * 120}>
                <div className="flex items-start gap-5">
                  <div
                    style={{
                      flexShrink: 0,
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "var(--bg-alt)",
                      border: "1px solid var(--accent)",
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: 18,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {paso.numero}
                  </div>
                  <p
                    className="font-body text-[15px] leading-relaxed pt-2"
                    style={{ color: "var(--white)" }}
                  >
                    {paso.texto}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA intermedio + copy persuasivo ─── */
function CtaIntermedio({ onCta }: { onCta: () => void }) {
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
      <Glow />
      <FadeBottom to="var(--bg)" />
      <div className="max-w-2xl mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div className="flex flex-col gap-5 mb-10">
            {svc.ctaIntermedio.parrafos.map((p, i) => (
              <p
                key={i}
                className="font-body text-[16px] leading-relaxed"
                style={{ color: i === 0 ? "var(--white)" : "var(--txt-2)" }}
              >
                {p}
              </p>
            ))}
          </div>
          <CtaButton onClick={onCta}>{svc.ctaIntermedio.ctaTexto}</CtaButton>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Caso destacado / badges de confianza ─── */
function CasoDestacado() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
        padding: "96px 16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlowSoft />
      <FadeBottom to="var(--bg-alt)" />
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div
            style={{
              width: "100%",
              border: "1px solid var(--hairline)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={svc.casoDestacado.imagenUrl}
              alt="Caso destacado de Otomodelación"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <p
            className="font-body text-[15px] font-semibold mt-6"
            style={{ color: "var(--white)" }}
          >
            {svc.casoDestacado.caption}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Bio de la profesional ─── */
function BioProfesional({ onCta }: { onCta: () => void }) {
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
      <Glow />
      <FadeBottom to="var(--bg)" />
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: "#1A1A1A",
              border: "1px solid var(--hairline)",
              overflow: "hidden",
              margin: "0 auto 24px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={svc.bioProfesional.fotoUrl}
              alt={svc.bioProfesional.nombre}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 24,
              color: "var(--white)",
              marginBottom: 4,
            }}
          >
            {svc.bioProfesional.nombre}
          </p>
          <p
            className="font-body text-[14px] mb-10"
            style={{ color: "var(--accent)" }}
          >
            {svc.bioProfesional.rol}
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-10">
            {svc.bioProfesional.stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 26, color: "var(--accent)" }}>
                  {s.valor}
                </p>
                <p className="font-body text-[12px]" style={{ color: "var(--txt-2)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-left mb-10">
            {svc.bioProfesional.historia.map((p, i) => (
              <p key={i} className="font-body text-[15px] leading-relaxed" style={{ color: "var(--txt-2)" }}>
                {p}
              </p>
            ))}
          </div>

          <CtaButton onClick={onCta}>{svc.bioProfesional.ctaTexto}</CtaButton>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Page() {
  const [formOpen, setFormOpen] = useState(false);
  const mostrarBloqueConsulta = svc.mostrarBloqueConsulta;

  return (
    <>
      <Header />
      <Hero onCta={() => setFormOpen(true)} />
      {mostrarBloqueConsulta ? (
        <>
          <Beneficios />
          <Testimonios />
        </>
      ) : (
        <Testimonios afterHero />
      )}
      <ComoFunciona />
      <MitosRealidad />
      <TestimonioDestacado />
      <ReseñasGoogle />
      <PasosParaTuCupo />
      <CtaIntermedio onCta={() => setFormOpen(true)} />
      <CasoDestacado />
      <BioProfesional onCta={() => setFormOpen(true)} />
      <Footer copyright={svc.footer.copyright} />
      <LeadForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        servicio="otomodelacion"
        leadForm={svc.leadForm}
        urls={svc.urls}
      />
    </>
  );
}
