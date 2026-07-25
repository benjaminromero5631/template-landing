# Pendientes — Otomodelación WhatsApp Flow

Rama original: `feature/otomodelacion-whatsapp-flow` (ya mergeada y pusheada a `main` — commits `ff9dab4`, `ee1afcd`, `f83371a`, `660c693`, más "4 cupos" en más CTAs en `05b5a33`, directo en `main`).

Rama actual: `feature/otomodelacion-oferta-reorden-2` (creada desde `main` actualizado tras el merge anterior). Sin push.

## a) Commits

- `ff9dab4` feat(otomodelacion): agregar seccion de oferta con precio tachado y escasez
  - `lib/config.ts`: agrega bloque `servicios.otomodelacion.oferta` (escasez "Últimos 4 cupos", precioAnterior "$699.990", precioFinal "$450.000"). Mantiene intacto `pasosParaTuCupo.notaPrecio` existente.
  - `app/otomodelacion/page.tsx`: nuevo componente `Oferta` con jerarquía visual de e-commerce (badge de escasez, precio anterior tachado en gris, precio final grande en `--accent`), insertado entre `PasosParaTuCupo` y `CtaIntermedio`.

- `f83371a` refactor(otomodelacion): mover seccion Oferta antes de resenas de Google
  - `app/otomodelacion/page.tsx`: solo cambio de orden de renderizado, sin tocar contenido de ninguna sección.
  - Orden ANTES: Hero → Beneficios/Testimonios → ComoFunciona → BioProfesional → TestimonioDestacado → ReseñasGoogle → PasosParaTuCupo → Oferta → CtaIntermedio → CasoDestacado → MitosRealidad → Footer.
  - Orden DESPUÉS: Hero → Beneficios/Testimonios → ComoFunciona → BioProfesional → TestimonioDestacado → Oferta → ReseñasGoogle → PasosParaTuCupo → CtaIntermedio → CasoDestacado → MitosRealidad → Footer.

- `9f34fe3` refactor(otomodelacion): mover seccion Oferta justo despues del Hero
  - `app/otomodelacion/page.tsx`: solo cambio de orden de renderizado, sin tocar contenido de la sección Oferta. Benjamín confirmó por captura que la quería más arriba, inmediatamente después del botón "Reserva tu hora" bajo el video del Hero.
  - Orden ANTES: Hero → Beneficios/Testimonios → ComoFunciona → BioProfesional → TestimonioDestacado → Oferta → ReseñasGoogle → PasosParaTuCupo → CtaIntermedio → CasoDestacado → MitosRealidad → Footer.
  - Orden DESPUÉS: Hero → Oferta → Beneficios/Testimonios → ComoFunciona → BioProfesional → TestimonioDestacado → ReseñasGoogle → PasosParaTuCupo → CtaIntermedio → CasoDestacado → MitosRealidad → Footer.

- `660c693` fix(otomodelacion): mejorar contraste y tamano del precio tachado en Oferta
  - `app/otomodelacion/page.tsx`: precio anterior ($699.990 tachado) pasó de `20px`/`var(--txt-3)` (rgba blanco 45%, bajo contraste) a `clamp(24px, 4vw, 32px)`/`font-weight:600`/`var(--txt-2)` (#888888 sólido). Sigue siendo claramente secundario frente al precio final (48-76px, `var(--accent)`), pero ahora legible de un vistazo. Solo tokens ya existentes en `app/globals.css`.

- `ee1afcd` feat(otomodelacion): CTA redirige a WhatsApp con pixel Lead en vez de /agendar
  - `components/LeadForm.tsx`: extrae la lógica post-submit a `goToNext(leadId?)`, condicionada por `servicio`:
    - `servicio === "otomodelacion"` → dispara `fbq('track','Lead',...)` y redirige a `https://wa.me/56945592667?text=...` con el mensaje URL-encoded pedido.
    - cualquier otro servicio (`metodo_regenerativo`) → comportamiento sin cambios: redirige a `urls.redirectAgendar` con `lead_id` si vino en la respuesta del webhook.
  - Campo email del formulario oculto solo cuando `servicio === "otomodelacion"` (`{servicio !== "otomodelacion" && <Field email>}`). Se ajustó la lectura de `email` con optional chaining para no romper cuando el input no existe en el DOM.
  - El guardado del lead vía `fetch(urls.webhookN8n, ...)` no se tocó — sigue siendo el mismo POST con los mismos campos (nombre, telefono, email, servicio, texto_legal_version, texto_legal_timestamp).

## b) Meta Pixel

Ya estaba inicializado como pixel de navegador en `app/layout.tsx` (script `fbq('init', ...)` + `fbq('track','PageView')`), y `LeadForm.tsx` ya llamaba `fbq('track','Lead', ...)` antes de este cambio — solo se reubicó dentro de `goToNext` para que se dispare también en el flujo de WhatsApp. No fue necesario agregar ninguna integración nueva.

## c) Verificación `grep -rn "agendar" app/otomodelacion/`

```
sin coincidencias
```

(El único uso de `redirectAgendar` que queda activo en código es dentro de `components/LeadForm.tsx`, condicionado a `servicio !== "otomodelacion"` — es decir, sigue sirviendo a Método Regenerativo, no a esta página.)

## Flujo verificado (lectura de código, no browser)

1. Usuario hace clic en cualquier CTA de `/otomodelacion` (Hero, BioProfesional, CtaIntermedio, MitosRealidad, Oferta) → todos llaman `setFormOpen(true)`, abriendo el mismo `LeadForm`.
2. Completa nombre + teléfono (sin email, campo oculto para esta página) y envía.
3. `handleSubmit` hace `fetch(urls.webhookN8n, ...)` con los mismos datos de siempre — el guardado del lead en n8n no cambió.
4. Si el POST responde OK (o falla, vía `fallback`): se llama `goToNext(leadId)`.
5. `goToNext` dispara `fbq('track','Lead', { content_name: 'otomodelacion' })`.
6. Redirige a `https://wa.me/56945592667?text=Hola!%20me%20interesa%20la%20Otomodelacion...` (mensaje URL-encoded).

`npm run build`: compiló sin errores (un warning preexistente de `<img>` en `app/layout.tsx`, no relacionado a este cambio).

## d) Recordatorio

`/agendar` y los archivos de Flow.cl siguen intactos en el repo — no se tocó ni eliminó nada de esa ruta. Método Regenerativo sigue usando `redirectAgendar` exactamente igual que antes. La limpieza de esos archivos queda pendiente para cuando se decida el destino de Método Regenerativo.
