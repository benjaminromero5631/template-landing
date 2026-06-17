import FadeIn from "@/components/FadeIn";
import { config } from "@/lib/config";

const painPoints = [
  {
    title: "Sin seguimiento real",
    desc: "La mayoría de clínicas cobra y desaparece. Sin protocolo post-sesión, los resultados no duran.",
  },
  {
    title: "Tratamiento genérico",
    desc: "Un protocolo igual para todas no funciona. Tu piel, tu edad y tu objetivo son únicos.",
  },
  {
    title: "Expectativas mal gestionadas",
    desc: "Prometen resultados inmediatos. Cuando no llegan, la frustración se lleva tu dinero y tu confianza.",
  },
];

export default function Problem() {
  return (
    <section className="w-full px-4 py-24" style={{ backgroundColor: "#0F0F0F" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2
            className="font-display text-[42px] leading-tight text-center mb-16 mx-auto max-w-[640px]"
          >
            ¿Por qué tantas mujeres invierten en tratamientos y no ven resultados reales?
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="p-8 h-full flex flex-col gap-4"
                style={{
                  backgroundColor: "#111116",
                  border: `1px solid ${config.accentColor}26`,
                }}
              >
                <span
                  className="font-display text-[48px] leading-none"
                  style={{ color: config.accentColor, opacity: 0.6 }}
                >
                  0{i + 1}
                </span>
                <h3 className="font-body text-[16px] font-bold text-fg">
                  {point.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.7] text-secondary">
                  {point.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
