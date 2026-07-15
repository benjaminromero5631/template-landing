# Estetica Landing — Instrucciones del proyecto

## Flujo obligatorio tras cada cambio de codigo

Despues de cualquier modificacion a archivos del proyecto, siempre ejecutar en este orden:

1. `npm run build` — verificar que compila sin errores
2. `git add <archivos> && git commit -m "..."` — commitear los cambios
3. `git push origin main`
4. `vercel --prod` — deploy a produccion
5. Compartir el link de produccion al usuario

No declarar el trabajo como terminado hasta haber compartido el link de Vercel.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Paleta: esmeralda (#2D6A4F / #52B788) + dorado (#C4A97D) sobre fondo oscuro (#050B08)

## Proyecto en Vercel

- Proyecto: `isabella-landing`
- URL produccion: https://isabella-landing-chi.vercel.app
