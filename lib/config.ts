export const config = {
  clinica: {
    nombre: "Clínica Estética",
    ciudad: "Santiago",
    tratamiento: "Morpheus8",
  },
  hero: {
    tituloLinea1: "Tu piel merece",
    tituloLinea2Destacado: "resultados reales",
    subtituloItalica: "Sin dolor · sin cirugías · sin tiempo de recuperación",
    parrafo:
      "Tratamientos personalizados con seguimiento real. Sin protocolos genéricos. Sin promesas vacías.",
    ctaTexto: "Reserva tu hora",
    vslCaption: "Mira cómo lo lograron nuestras pacientes →",
  },
  testimoniosVideo: {
    badge: "NO me creas a mí como especialista",
    titulo: "Resultados que hablan",
    tituloDestacado: "por sí solos",
    subtitulo:
      "Antes de agendar, mira los resultados reales de quienes ya confiaron en nosotros.",
    nombres: [
      "Paciente 1",
      "Paciente 2",
      "Paciente 3",
      "Paciente 4",
      "Paciente 5",
      "Paciente 6",
    ],
  },
  reconocidos: {
    badge: "Reconocidos por la Sociedad Chilena de Medicina Estética",
    subtitulo: "Un Protocolo Validado",
    stats: [
      { valor: "+850", label: "Pacientes tratadas" },
      { valor: "97%", label: "Tasa de satisfacción" },
      { valor: "8", label: "Años de trayectoria" },
    ],
    ctaTexto: "Reserva tu hora",
  },
  problema: {
    badge: "El problema..",
    tituloLinea1: "¿Cansada de probar tratamientos que no muestran",
    tituloDestacado: "resultados reales?",
    subtitulo:
      "Has invertido tiempo y dinero en tratamientos que prometen mucho pero entregan poco, dejándote con la misma sensación de siempre.",
    cards: [
      {
        titulo: "Protocolos genéricos",
        descripcion:
          "El mismo tratamiento para todas, sin considerar tu tipo de piel ni tus necesidades específicas.",
      },
      {
        titulo: "Resultados inconsistentes",
        descripcion:
          "Cada sesión se siente distinta. No hay forma de saber si realmente estás progresando.",
      },
      {
        titulo: "Sin seguimiento real",
        descripcion:
          "Te dejan sola después de la sesión, sin acompañamiento ni revisión de cómo evoluciona tu piel.",
      },
    ],
  },
  solucion: {
    badge: "La solución..",
    titulo: "Un protocolo personalizado que se adapta a",
    tituloDestacado: "tu piel",
    parrafo:
      "Olvídate de los tratamientos genéricos. Cada sesión se ajusta según cómo está evolucionando tu piel, con seguimiento real de tus resultados.",
    checks: [
      "Evaluación profesional antes de cada sesión",
      "Seguimiento fotográfico de tus resultados",
    ],
    panelMock: {
      sidebarItems: ["Resumen", "Evaluaciones", "Progreso"],
      miniCards: [
        { label: "Hidratación", value: "+34%" },
        { label: "Firmeza", value: "+28%" },
      ],
      proximaEvaluacion: "15 de julio, 2025",
    },
  },
  howItWorks: {
    titulo: "¿Cómo es el proceso?",
    etapas: [
      {
        label: "Evaluación inicial",
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
    ],
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
