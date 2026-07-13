const defaultConfig = {
  clinica: {
    nombre: "Clínica Estética",
    ciudad: "Santiago",
    tratamiento: "Morpheus8",
    logoUrl: "/logo.png",
  },
  hero: {
    badge: "Solo para pacientes que buscan resultados reales", // texto de la píldora superior
    tituloLinea1: "Tu piel merece", // primera línea del headline
    tituloLinea2Destacado: "resultados reales", // segunda línea, en color de acento
    subtitulo:
      "Tratamientos personalizados con seguimiento real. Sin protocolos genéricos. Sin promesas vacías.",
    ctaTexto: "Reserva tu hora",
    vslCaption: "Mira cómo lo lograron nuestras pacientes →", // texto bajo el espacio de video/VSL
  },
  beneficios: {
    titulo: "Tu primera consulta incluye", // título de la sección de checklist
    checks: [
      "Evaluación profesional de tu piel y objetivos",
      "Plan de tratamiento personalizado, sin costo",
      "Resolución de dudas con una especialista",
    ],
  },
  testimonios: {
    titulo: "Lo que dicen nuestras pacientes",
    cards: [
      {
        media: "[Antes/Después o video de la paciente]", // placeholder visual
        nombre: "[Nombre de la paciente]",
        texto: "[Testimonio — agregar reseña real de Google]",
      },
      {
        media: "[Antes/Después o video de la paciente]",
        nombre: "[Nombre de la paciente]",
        texto: "[Testimonio — agregar reseña real de Google]",
      },
      {
        media: "[Antes/Después o video de la paciente]",
        nombre: "[Nombre de la paciente]",
        texto: "[Testimonio — agregar reseña real de Google]",
      },
    ],
  },
  ctaIntermedio: {
    ctaTexto: "Reserva tu hora",
    parrafos: [
      "Postergar tu tratamiento no te acerca a los resultados que quieres.",
      "Cada semana que pasa sin un plan claro es una semana más lejos de la piel que buscas. No necesitas otra promesa genérica, necesitas un protocolo pensado para ti.",
      "Agenda tu consulta y da el primer paso hacia un cambio real.",
    ],
  },
  casoDestacado: {
    badgeStats: "[+N pacientes atendidas]", // badge de confianza
    nombreResultado: "[Nombre de paciente] · [Resultado]", // card de caso destacado
  },
  bioProfesional: {
    fotoUrl: "[Foto de la profesional]", // placeholder de imagen circular
    nombre: "[Nombre]",
    rol: "[Especialidad/Rol]",
    stats: [
      { valor: "[X]", label: "[años de experiencia]" },
      { valor: "[X]", label: "[pacientes atendidas]" },
      { valor: "[X]", label: "[certificaciones]" },
      { valor: "[X]", label: "[tratamientos realizados]" },
    ],
    historia: [
      "[Historia y trayectoria de la profesional — completar]",
      "[Historia y trayectoria de la profesional — completar]",
      "[Historia y trayectoria de la profesional — completar]",
    ],
    ctaTexto: "Reserva tu hora",
  },
  leadForm: {
    modalTitulo: "Reserva tu hora",
    modalSubtitulo: "Déjanos tus datos y te confirmamos disponibilidad.",
    botonSubmit: "Quiero mi hora",
    mensajeExito: "Tu piel merece resultados reales.",
  },
  urls: {
    webhookN8n:
      "https://godkeys-n8n1.djq22s.easypanel.host/webhook/clinica-lead",
    redirectAgendar: "https://estetica-crm.vercel.app/agendar",
  },
  footer: {
    copyright: "Clínica Estética · Santiago",
  },
};

const config = process.env.NEXT_PUBLIC_CLINIC_CONFIG
  ? ({ ...defaultConfig, ...JSON.parse(process.env.NEXT_PUBLIC_CLINIC_CONFIG) } as typeof defaultConfig)
  : defaultConfig;

export { config };
