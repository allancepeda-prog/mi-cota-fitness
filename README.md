# Mi Cota Fitness

App personal para contar calorías con foto, registrar ejercicio y estimar las calorías quemadas, llevar el ayuno, el agua y el peso, y recibir sugerencias de comida saludable.

**Hecho por Allan Cepeda.**

Es una app web instalable (PWA): se publica gratis con GitHub Pages, se instala en el celular como una app y funciona sin conexión (salvo la IA y el escáner de productos).

## Descargar para Android (APK)

Página de descarga: `https://allancepeda-prog.github.io/mi-cota-fitness/descargar.html`
El APK (`descargas/mi-cota-fitness.apk`) abre la versión publicada, así que se actualiza solo cuando se sube una nueva versión de la app web. Solo hay que generar un APK nuevo si cambia el nombre, el ícono o el paquete.

## Publicar en GitHub Pages (una sola vez)

1. En GitHub, crea un repositorio nuevo llamado `mi-cota-fitness` (público).
2. Entra al repositorio → **Add file → Upload files** y arrastra **todos los archivos de esta carpeta** (no la carpeta, su contenido). Luego **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)** y guarda.
4. En 1 a 2 minutos la app queda en: `https://TU-USUARIO.github.io/mi-cota-fitness/`
5. Abre ese link en el celular e instálala:
   - **Android (Chrome):** menú ⋮ → *Instalar app*.
   - **iPhone (Safari):** botón Compartir → *Agregar a inicio*.

## Actualizar la app

1. Cambia los archivos que necesites.
2. Sube la versión en **dos lugares** (por ejemplo de `3.1.0` a `3.1.1`):
   - `sw.js` → `const VERSION = "3.1.1";`
   - `index.html` → `const APP_VERSION = "3.1.1";`
3. En GitHub: **Add file → Upload files**, arrastra los archivos cambiados y haz **Commit**.
4. En uno o dos minutos, al abrir la app en el celular aparece **"Nueva versión disponible · Actualizar"**.

Tus datos no se pierden al actualizar: viven en el teléfono, no en GitHub.

## Cómo se calculan las calorías del ejercicio

Se usa el método MET (equivalente metabólico) del Compendio de Actividad Física:
**kcal = MET × peso (kg) × horas**. El peso es el último que registres en *Progreso* (si no hay, se usan 70 kg).
En *Perfil* eliges si esas calorías se suman a tu meta diaria (0%, 50% o 100%).

## Datos y privacidad

- Comidas, agua, ayunos y peso se guardan solo en el teléfono. Usa *Perfil → Descargar respaldo* de vez en cuando.
- La clave de Google Gemini se guarda solo en el teléfono, nunca en el código de GitHub.
- Los productos escaneados se consultan en Open Food Facts (base de datos abierta).

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa (pantallas, estilos y lógica) |
| `sw.js` | Permite instalarla, abrirla sin internet y avisar actualizaciones |
| `manifest.webmanifest` | Nombre, colores, ícono y accesos directos de la app |
| `logo.svg`, `icon-*.png`, `apple-touch-icon.png`, `favicon-32.png` | Logo e íconos |
| `.nojekyll` | Le indica a GitHub Pages que publique los archivos tal cual |

## Avisos motivacionales (push)

Los envía GitHub Actions (`.github/workflows/avisos.yml` + `push/enviar.mjs`) cada hora; el script decide el mensaje según la hora de Chile (8, 10, 13, 14, 16, 19 y 21 h).
Secretos en **Settings → Secrets and variables → Actions**:
- `VAPID_PRIVATE_KEY`: clave privada de avisos (la pública está en `index.html` y en `push/enviar.mjs`).
- `PUSH_SUBSCRIPTIONS`: códigos de activación copiados desde la app (Perfil → Avisos motivacionales), uno por línea.

Para probar: pestaña **Actions → Avisos motivacionales → Run workflow**.
Para cambiar mensajes u horarios: edita `SLOTS` en `push/enviar.mjs`.

## Contenido de Aprende

Lecturas, recetas, enlaces y consejos del día están en `contenido.js`.
