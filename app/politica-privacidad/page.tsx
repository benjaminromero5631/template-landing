import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · Isabella SpA",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 40px)",
            color: "var(--white)",
            marginBottom: 8,
          }}
        >
          Política de Privacidad
        </h1>

        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--white)", marginTop: 24, marginBottom: 4 }}>
          Isabella SpA
        </p>
        <p style={{ color: "var(--txt-2)", fontSize: 14, marginBottom: 32 }}>
          Última actualización: 20 de julio de 2026
        </p>

        <div style={{ color: "var(--txt-2)", fontSize: 15, lineHeight: 1.7 }}>
          <p style={{ marginBottom: 24 }}>
            En Isabella SpA (RUT 77.901.467-3) valoramos tu privacidad. Este documento explica cómo tratamos
            los datos personales que nos entregas al contactarnos o agendar una consulta a través de este sitio.
          </p>

          <h2 style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 10 }}>
            ¿Qué datos recopilamos?
          </h2>
          <p style={{ marginBottom: 24 }}>
            Nombre, teléfono, correo electrónico y, si aplica, información sobre el tratamiento o servicio de
            tu interés.
          </p>

          <h2 style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 10 }}>
            ¿Para qué los usamos?
          </h2>
          <p style={{ marginBottom: 24 }}>
            Para contactarte, coordinar tu agendamiento y darte seguimiento respecto a los servicios que
            ofrecemos. No usamos tus datos para fines distintos a estos sin tu autorización.
          </p>

          <h2 style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 10 }}>
            ¿Con quién los compartimos?
          </h2>
          <p style={{ marginBottom: 24 }}>
            No vendemos ni compartimos tus datos con terceros ajenos a la operación de Isabella SpA, salvo
            obligación legal.
          </p>

          <h2 style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 10 }}>
            ¿Cómo los protegemos?
          </h2>
          <p style={{ marginBottom: 24 }}>
            Almacenamos tu información en sistemas con acceso restringido y medidas de seguridad razonables
            para evitar accesos no autorizados.
          </p>

          <h2 style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 10 }}>
            Tus derechos
          </h2>
          <p style={{ marginBottom: 24 }}>
            Puedes solicitar acceso, rectificación, cancelación u oposición al tratamiento de tus datos
            (derechos ARCO) escribiendo a{" "}
            <a href="mailto:clinica.isabella@icloud.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>
              clinica.isabella@icloud.com
            </a>
            .
          </p>

          <h2 style={{ color: "var(--white)", fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 10 }}>
            Contacto
          </h2>
          <p>
            Isabella SpA —{" "}
            <a href="mailto:clinica.isabella@icloud.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>
              clinica.isabella@icloud.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
