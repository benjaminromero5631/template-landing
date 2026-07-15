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
        badge: "Solo para quienes buscan cambiar la amplitud de sus orejas",
        tituloLinea1: "El cambio que buscas en tus orejas en una sola sesión —",
        tituloLinea2Destacado: "Sin Cirugía",
        subtitulo:
          "Resultados visibles desde el primer día y con reincorporación inmediata a tu rutina habitual, salvo algunos cuidados puntuales durante la recuperación.",
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
          "/otomodelacion/testimonio-08.png",
          "/otomodelacion/testimonio-09.png",
        ],
      },
      comoFunciona: {
        titulo: "Cómo funciona la Otomodelación",
        bloques: [
          {
            titulo: "Sin Cortes",
            texto: "Para el procedimiento se utiliza un hilo de sutura que permite trabajar el cartílago sin atravesar la oreja. La sutura se realiza por sobre el lóbulo y se dirige hacia el antihélix, logrando corregir la proyección de la oreja de forma precisa y natural.",
          },
          {
            titulo: "Diseño Personalizado",
            texto: "Una vez realizada la sutura, te entrego un espejo para que puedas escoger con calma y seguridad qué tan hacia atrás deseas tus orejitas. Este momento es clave, ya que permite ajustar el resultado a tu gusto personal y a lo que esperas ver en ti, logrando un resultado armónico, natural y profundamente personalizado.",
          },
        ],
        fotos: [
          { src: "/otomodelacion/recuperacion-post-inmediato.jpg", label: "Post inmediato" },
          { src: "/otomodelacion/recuperacion-post-2-dias.jpg", label: "Post 2 días" },
          { src: "/otomodelacion/recuperacion-post-2-semanas.jpg", label: "Post 2 semanas" },
        ],
      },
      mitosRealidad: {
        titulo: "Mitos y realidades",
        pares: [
          {
            mito: "Si me golpeo o me jalan fuerte la oreja se corta el hilo",
            realidad: "Falso. No se corta el hilo, pero sí puede ocasionar que se inflame tu oreja.",
          },
          {
            mito: "Son hilos que se reabsorben y después de un tiempo se pierde el resultado",
            realidad: "Falso. Los hilos que se utilizan no se reabsorben ni se degradan por el cuerpo.",
          },
          {
            mito: "Te cosen la oreja a la parte posterior del cuello o atraviesan la oreja y se ve por detrás",
            realidad: "Falso. Se cose sin traspasar la oreja, con una técnica de abanico. No hay cicatriz ni costuras que se vean ni por delante ni por detrás.",
          },
          {
            mito: "Una vez que te las haces no puedes intervenirlas de nuevo",
            realidad: "Falso. Se puede entrar con bisturí haciendo una pequeña incisión para revertir el resultado si hiciera falta.",
          },
          {
            mito: "No podré hacer más deportes de contacto o extremos",
            realidad: "Esto es solo por las primeras 2 semanas de cicatrización, luego puedes retomar con normalidad.",
          },
        ],
        cuidados:
          "Cuidados reales: banda protectora durante 2 semanas (incluso para dormir), antiinflamatorios la primera semana, evitar mojar la zona la primera noche, y evitar playa o piscina durante las primeras 2 semanas.",
      },
      testimonioDestacado: {
        cita: "Hoy puedo decirte que no duele, que el proceso es mucho más simple de lo que imaginamos y que el resultado vale totalmente la pena.",
        nombre: "Yessy Solange Hormazabel Flores",
        contexto:
          "Yessy vivió bullying en el colegio por su oreja despegada. Lo pensó 2 años antes de decidirse y hoy se siente tranquila y feliz con el resultado.",
      },
      pasosParaTuCupo: [
        {
          numero: 1,
          texto:
            "Reserva ahora tu evaluación online (precio normal $30.000, pero SOLO para Puerto Montt: $15.000)",
        },
        {
          numero: 2,
          texto:
            "Conoce a la profesional a cargo, resuelve tus dudas y confirma si eres candidata a la Otomodelación",
        },
        {
          numero: 3,
          texto: "Deja agendado tu cupo en las fechas disponibles en Puerto Montt",
        },
        {
          numero: 4,
          texto: "Los $15.000 se descuentan de tu total al momento del procedimiento",
        },
      ],
      resenasGoogle: [
        {
          nombre: "Valentina Rodríguez",
          texto: "La verdad tenía la doctora fue muy amable y me explicó cada paso y cada cosa lo cual me tranquilizó mucho, el procedimiento la verdad no me dolió nada muy detallista y delicada la verdad me encantó el resultado y sin duda volveré por otro retoque",
          estrellas: 5,
        },
        {
          nombre: "Daniela Guamán",
          texto: "Excelente, atención muy buen recibimiento y todo muy buena calidad. El especialista explica todo con detalle y su calidez es única. Mi hija quedó feliz y emocionada. Muchas gracias por todo, sin duda volveremos!",
          estrellas: 5,
        },
        {
          nombre: "Victoria Pazmiño Jorratt",
          texto: "Excelente profesional, logra dar a conocer cada detalle de los procedimientos de manera específica, bajo un leguaje entendible que permite comprender lo que uno se realiza, otorga grato ambiente de confianza, monitoreando a cada instante cómo se siente el paciente... muy recomendado excelente experiencia!",
          estrellas: 5,
        },
        {
          nombre: "Nicolás Zurita",
          texto: "Buena buena y grata experiencia, donde te entregan la seguridad necesaria para no dudar de realizar el procedimiento, ambiente cómodo y confiable, todo muy prolijo. muy feliz con el resultado",
          estrellas: 5,
        },
        {
          nombre: "Roberto Zenteno",
          texto: "La recomiendo exelente atención profesional por parte de su personal, muy satisfecho por la intervención efectuada.",
          estrellas: 5,
        },
      ],
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

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T>(base: T, override: unknown): T {
  if (Array.isArray(override)) {
    return override as unknown as T;
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      result[key] = key in base ? deepMerge(base[key], override[key]) : override[key];
    }
    return result as T;
  }

  return override === undefined ? base : (override as T);
}

const config = process.env.NEXT_PUBLIC_CLINIC_CONFIG
  ? deepMerge(defaultConfig, JSON.parse(process.env.NEXT_PUBLIC_CLINIC_CONFIG))
  : defaultConfig;

export { config };
