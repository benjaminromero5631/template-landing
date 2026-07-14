const defaultConfig = {
  clinica: {
    nombre: "Clínica Isabella",
    ciudad: "Chile",
    logoUrl: "/logo-isabella.png",
  },
  entrada: {
    tarjetaOtomodelacion: {
      titulo: "Otomodelación Definitiva",
      descripcion: "Evento exclusivo en Puerto Montt · Cupos limitados",
      imagenUrl: "/otomodelacion/caso-destacado.png",
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
      mostrarBloqueConsulta: false,
      hero: {
        badge: "Solo para quienes quieren cambiar la forma de sus orejas — Puerto Montt",
        tituloLinea1: "El Cambio en Tus Orejas Que Buscas, en 1 Sola Sesión —",
        tituloLinea2Destacado: "Sin Cirugía",
        subtitulo:
          "Resultado visible desde el primer día, sin que sea un proceso extenso. Solo en Puerto Montt del 11 al 13 de agosto.",
        heroTrustLine:
          "Pionera en traer la Otomodelación a Chile, con experiencia dedicada a esta técnica.",
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
        titulo: "Resultados reales de nuestras pacientes",
        imagenes: [
          "/otomodelacion/testimonio-01.png",
          "/otomodelacion/testimonio-02.png",
          "/otomodelacion/testimonio-03.png",
          "/otomodelacion/testimonio-04.png",
          "/otomodelacion/testimonio-05.png",
          "/otomodelacion/testimonio-06.png",
          "/otomodelacion/testimonio-07.png",
        ],
      },
      ctaIntermedio: {
        ctaTexto: "Reserva tu hora",
        parrafos: [
          "Estaré en Puerto Montt solo el 11, 12 y 13 de agosto — máximo 20 cupos para todo el viaje. Agenda tu evaluación ahora.",
        ],
      },
      casoDestacado: {
        imagenUrl: "/otomodelacion/caso-destacado.png",
        caption: "+20.000 pacientes atendidos · Pionera en Otomodelación Definitiva",
      },
      bioProfesional: {
        fotoUrl: "/otomodelacion/isabella-perfil.png",
        nombre: "Isabella Sanquea",
        rol: "Enfermera especialista en Otomodelación",
        stats: [
          { valor: "5", label: "años de experiencia" },
          { valor: "+20.000", label: "pacientes atendidos" },
        ],
        historia: [
          "Soy Isabella, enfermera de profesión — trabajé en la urgencia y UPCA del Hospital Regional antes de dedicarme por completo a la estética. Llevo 5 años especializada en Otomodelación, la técnica que ayudé a traer a Chile, y ya son más de 20.000 pacientes.",
          "Lo que más me apasiona es verlos felices con los resultados — por eso me dedico a esto. Sin cirugía, sin miedo, sin vueltas.",
          "Iquiqueña de corazón, viajo hasta Puerto Montt porque no todos pueden llegar a mi sucursal — y a ti quiero conocerte en persona.",
        ],
        ctaTexto: "Reserva tu hora",
      },
      leadForm: {
        modalTitulo: "Reserva tu hora",
        modalSubtitulo: "Déjanos tus datos y te confirmamos disponibilidad. Cupos limitados en Puerto Montt.",
        botonSubmit: "Quiero mi hora",
        mensajeExito: "¡Listo! Pronto te contactaremos para confirmar tu evaluación en Puerto Montt.",
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
      mostrarBloqueConsulta: true,
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
        titulo: "Resultados reales de nuestras pacientes",
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
