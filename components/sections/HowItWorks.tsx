import FadeIn from "@/components/FadeIn";
import { config } from "@/lib/config";

const stages = [
  {
    label: "Evaluación gratuita",
    desc: "Analizamos tu piel, tus objetivos y tu historial sin costo ni compromiso.",
  },
  {
    label: "Protocolo personalizado",
    desc: "Diseñamos el plan exacto para tu tipo de piel y tu meta.",
  },
  {
    label: "Sesión(es) del tratamiento",
    desc: "Realizamos el tratamiento con equipos de última generación.",
  },
  {
    label: "Seguimiento post-tratamiento",
    desc: "Te acompañamos después para asegurar resultados visibles y duraderos.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full px-4 py-24" style={{ backgroundColor: "#0F0F0F" }}>
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-[42px] leading-tight text-center mb-14">
            ¿Cómo es el proceso?
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {stages.map((stage, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex gap-5">
                {/* Left: number + connector */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-body text-[14px] font-bold"
                    style={{
                      border: `1px solid ${config.accentColor}`,
                      color: config.accentColor,
                      backgroundColor: "#0A0A0A",
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < stages.length - 1 && (
                    <div
                      className="flex-1 w-px my-1"
                      style={{
                        backgroundColor: config.accentColor,
                        opacity: 0.3,
                        minHeight: "40px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 pt-1">
                  <h3 className="font-body text-[16px] font-bold text-fg mb-1">
                    {stage.label}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-secondary">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
