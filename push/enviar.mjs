// Envía los avisos motivacionales de Mi Cota Fitness.
// Lo ejecuta GitHub Actions cada hora (.github/workflows/avisos.yml).
// Secretos necesarios en GitHub (Settings → Secrets and variables → Actions):
//   VAPID_PRIVATE_KEY   → la clave privada de avisos
//   PUSH_SUBSCRIPTIONS  → uno o más códigos de activación (uno por línea), copiados desde la app (Perfil → Avisos)
import webpush from "web-push";

const VAPID_PUBLIC = "BG6Rqm918V3V5RbtzdSrEEhbF5TyJKcbtXROs-sHZ97WrhZy7W2uCZzM8fOzH67fVi6czf-iw4A4rNsCpkPbJOE";
const SITE = "https://allancepeda-prog.github.io/mi-cota-fitness/";

// Mensajes por hora (hora de Chile). Cada vez se elige uno al azar del grupo.
const SLOTS = {
  8: { tag: "agua", url: "./#hoy", msgs: [
    ["Buenos días ☀️", "Empieza con un vaso de agua. Tu cuerpo te lo agradece."],
    ["Nuevo día, nueva oportunidad 💚", "Un vaso de agua y a darle. Hoy suma cada paso."],
    ["¡Arriba! 🌱", "Hidrátate primero: un vaso de agua antes del desayuno."]
  ]},
  10: { tag: "agua", url: "./#hoy", msgs: [
    ["Pausa de agua 💧", "¿Cuántos vasos llevas? Marca uno más en la app."],
    ["Recordatorio amable 💧", "Un vaso de agua ahora te ayuda a evitar antojos más tarde."]
  ]},
  13: { tag: "comida", url: "./#registrar", msgs: [
    ["Hora de almorzar 🥗", "Medio plato de verduras, un cuarto de proteína y un cuarto de carbohidrato. ¡Sácale una foto!"],
    ["¿Qué hay de almuerzo? 📸", "Registra tu plato con una foto y la app calcula las calorías."],
    ["Almuerzo consciente 🍽️", "Come sin apuro y registra tu plato en Mi Cota Fitness."]
  ]},
  14: { tag: "mover", url: "./#hoy", msgs: [
    ["Después de almorzar 🚶‍♀️", "Una caminata de 10 minutos ayuda a tu digestión y a tu glicemia."]
  ]},
  16: { tag: "agua", url: "./#hoy", msgs: [
    ["Media tarde 💧", "Un vaso de agua y estira un poco. ¡Vas muy bien!"],
    ["¿Hambre o sed? 🤔", "Muchas veces es sed: prueba un vaso de agua primero."],
    ["Snack inteligente 🍓", "Si te da hambre: yogur natural, fruta o un puñado de nueces."]
  ]},
  19: { tag: "mover", url: "./#hoy", msgs: [
    ["Hora de moverse 💪", "20 o 30 minutos de caminata, baile o sentadillas. Todo cuenta."],
    ["Tu cuerpo lo agradece 🏃‍♀️", "Un poco de movimiento hoy y regístralo en Ejercicio."],
    ["Pequeños pasos 🌟", "No tiene que ser perfecto: 15 minutos de movimiento ya suman."]
  ]},
  21: { tag: "cierre", url: "./#hoy", msgs: [
    ["Cierre del día 🌙", "¿Registraste tu cena y tus vasos de agua? Revisa cómo te fue hoy."],
    ["¡Buen trabajo hoy! ⭐", "Revisa tu resumen del día y prepara mañana con calma."],
    ["Antes de dormir 😴", "Dormir 7 horas o más ayuda a controlar los antojos. ¡Descansa!"]
  ]}
};

function horaChile(d = new Date()) {
  return +new Intl.DateTimeFormat("es-CL", { timeZone: "America/Santiago", hour: "2-digit", hour12: false }).format(d);
}
function leerSuscripciones(raw) {
  return (raw || "").split(/[\s,]+/).map(x => x.trim()).filter(Boolean).map(code => {
    try { return JSON.parse(code); } catch {}
    const b64 = code.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  });
}

const prueba = process.env.MENSAJE === "prueba";
const hora = horaChile();
const slot = prueba
  ? { tag: "prueba", url: "./#hoy", msgs: [["¡Los avisos funcionan! 🎉", "Así te llegarán los recordatorios de Mi Cota Fitness."]] }
  : SLOTS[hora];
if (!slot) { console.log(`Hora de Chile ${hora}: no hay aviso programado.`); process.exit(0); }

const priv = process.env.VAPID_PRIVATE_KEY;
const subs = leerSuscripciones(process.env.PUSH_SUBSCRIPTIONS);
if (!priv || !subs.length) { console.log("Faltan los secretos VAPID_PRIVATE_KEY o PUSH_SUBSCRIPTIONS."); process.exit(0); }

webpush.setVapidDetails(SITE, VAPID_PUBLIC, priv);
const [title, body] = slot.msgs[Math.floor(Math.random() * slot.msgs.length)];
const payload = JSON.stringify({ title, body, tag: slot.tag, url: slot.url });

let ok = 0;
for (const sub of subs) {
  try { await webpush.sendNotification(sub, payload, { TTL: 3 * 3600, urgency: "normal" }); ok++; }
  catch (e) {
    const gone = e.statusCode === 404 || e.statusCode === 410;
    console.log(gone ? "Un teléfono ya no está suscrito: hay que pegar su nuevo código." : `Error al enviar: ${e.statusCode || ""} ${e.body || e.message}`);
  }
}
console.log(`Hora de Chile ${hora}: "${title}" enviado a ${ok} de ${subs.length} teléfono(s).`);
