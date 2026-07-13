const defaultConfig = {
  clinica: {
    nombre: "Clínica Isabella",
    ciudad: "Chile",
    logoUrl: "/logo.png",
  },
  entrada: {
    tarjetaOtomodelacion: {
      titulo: "Otomodelación Definitiva",
      descripcion: "Evento exclusivo en Puerto Montt · Cupos limitados",
      imagenUrl: "[Imagen del tratamiento Otomodelación]",
      ctaTexto: "Ver más",
    },
    tarjetaMetodoRegenerativo: {
      titulo: "Método Regenerativo",
      descripcion: "Disponible en Iquique · Sin límite de cupos",
      imagenUrl: "[Imagen del tratamiento Método Regenerativo]",
      ctaTexto: "Ver más",
    },
  },
  servicios: {
    otomodelacion: {
      hero: {
        badge: "Solo para pacientes que buscan resultados reales",
        tituloLinea1: "Tu piel merece",
        tituloLinea2Destacado: "resultados reales",
        subtitulo:
          "Otomodelación Definitiva en Puerto Montt. Cupos limitados, resultados que se notan desde la primera sesión.",
        ctaTexto: "Reserva tu hora",
        vslCaption: "Mira cómo lo lograron nuestras pacientes →",
      },
      beneficios: {
        titulo: "Tu primera consulta incluye",
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
            media: "[Antes/Después o video de la paciente]",
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
        badgeStats: "[+N pacientes atendidas]",
        nombreResultado: "[Nombre de paciente] · [Resultado]",
      },
      bioProfesional: {
        fotoUrl: "[Foto de la profesional]",
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
        modalSubtitulo: "Déjanos tus datos y te confirmamos disponibilidad. Cupos limitados en Puerto Montt.",
        botonSubmit: "Quiero mi hora",
        mensajeExito: "Tu piel merece resultados reales.",
      },
      urls: {
        webhookN8n:
          "https://godkeys-n8n1.djq22s.easypanel.host/webhook/clinica-lead",
        redirectAgendar: "https://estetica-crm.vercel.app/agendar",
      },
      footer: {
        copyright: "Clínica Isabella · Otomodelación Definitiva · Puerto Montt",
      },
    },
    metodoRegenerativo: {
      hero: {
        badge: "Sin límite de cupos · Disponible en Iquique",
        tituloLinea1: "Devuélvele a tu piel",
        tituloLinea2Destacado: "su luminosidad real",
        subtitulo:
          "Método Regenerativo: un protocolo completo de renovación cutánea que combina tecnología y principios activos para una piel visiblemente más limpia y luminosa.",
        ctaTexto: "Reserva tu hora",
        vslCaption: "Mira cómo lo lograron nuestras pacientes →",
      },
      beneficios: {
        titulo: "Tu primera consulta incluye",
        checks: [
          "Evaluación profesional de tu piel y objetivos",
          "Protocolo personalizado según tu tipo de piel",
          "Resolución de dudas con una especialista",
        ],
      },
      testimonios: {
        titulo: "Lo que dicen nuestras pacientes",
        cards: [
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
          "Postergar el cuidado de tu piel no te acerca a los resultados que quieres.",
          "El Método Regenerativo elimina impurezas, mejora la textura y estimula la regeneración de la piel en una sola sesión de 2 horas, sin listas de espera.",
          "Agenda tu consulta y da el primer paso hacia una piel renovada.",
        ],
      },
      casoDestacado: {
        badgeStats: "[+N pacientes atendidas]",
        nombreResultado: "[Nombre de paciente] · [Resultado]",
      },
      bioProfesional: {
        fotoUrl: "[Foto de la profesional]",
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
        modalSubtitulo: "Déjanos tus datos y te confirmamos disponibilidad en Iquique.",
        botonSubmit: "Quiero mi hora",
        mensajeExito: "Tu piel merece resultados reales.",
      },
      urls: {
        webhookN8n:
          "https://godkeys-n8n1.djq22s.easypanel.host/webhook/clinica-lead",
        redirectAgendar: "https://estetica-crm.vercel.app/agendar",
      },
      footer: {
        copyright: "Clínica Isabella · Método Regenerativo · Iquique",
      },
    },
  },
};

const config = process.env.NEXT_PUBLIC_CLINIC_CONFIG
  ? ({ ...defaultConfig, ...JSON.parse(process.env.NEXT_PUBLIC_CLINIC_CONFIG) } as typeof defaultConfig)
  : defaultConfig;

export { config };
