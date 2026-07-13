"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import { config } from "@/lib/config";

function ServiceCard({
  titulo,
  descripcion,
  imagenUrl,
  ctaTexto,
  href,
}: {
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  ctaTexto: string;
  href: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="w-full text-left flex flex-col"
      style={{
        backgroundColor: "var(--bg-alt)",
        border: "1px solid var(--hairline)",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          backgroundColor: "#1A1A1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          textAlign: "center",
        }}
      >
        <p className="font-body text-[13px]" style={{ color: "var(--txt-2)" }}>
          {imagenUrl}
        </p>
      </div>
      <div style={{ padding: "28px 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--white)",
            marginBottom: 8,
          }}
        >
          {titulo}
        </h2>
        <p
          className="font-body text-[14px] leading-relaxed mb-6"
          style={{ color: "var(--txt-2)" }}
        >
          {descripcion}
        </p>
        <span
          className="inline-block font-body text-[13px] font-semibold px-7 py-3"
          style={{
            background: "linear-gradient(135deg, #000000 0%, #C4974A 100%)",
            color: "#FFFFFF",
            borderRadius: 9,
          }}
        >
          {ctaTexto}
        </span>
      </div>
    </button>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main
        className="w-full flex flex-col items-center px-4"
        style={{ backgroundColor: "var(--bg)", padding: "72px 16px 96px" }}
      >
        <FadeIn>
          <h1
            className="text-center max-w-[560px] mx-auto mb-12"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: 1.25,
              color: "var(--white)",
            }}
          >
            {config.clinica.nombre}
          </h1>
        </FadeIn>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          style={{ maxWidth: 900 }}
        >
          <FadeIn>
            <ServiceCard
              {...config.entrada.tarjetaOtomodelacion}
              href="/otomodelacion"
            />
          </FadeIn>
          <FadeIn delay={90}>
            <ServiceCard
              {...config.entrada.tarjetaMetodoRegenerativo}
              href="/metodo-regenerativo"
            />
          </FadeIn>
        </div>
      </main>
    </>
  );
}
