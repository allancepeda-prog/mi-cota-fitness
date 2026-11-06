// Mi Cota Fitness — service worker
// Para publicar una actualización: cambia VERSION (y APP_VERSION en index.html), sube los archivos.
// La app mostrará "Nueva versión disponible · Actualizar".
const VERSION = "3.2.0";
const CACHE = "miplato-" + VERSION;
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./logo.svg", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))));
});
self.addEventListener("message", e => { if (e.data === "skipWaiting") self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("miplato") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Archivos propios: caché primero (abre instantáneo y sin internet); se renuevan al instalar una versión nueva.
// Fuentes de Google: se guardan la primera vez. La IA y Open Food Facts siempre van a internet.
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return r;
    }).catch(() => req.mode === "navigate" ? caches.match("./index.html") : Response.error())));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(CACHE + "-fonts").then(c => c.match(req).then(hit => hit || fetch(req).then(r => { c.put(req, r.clone()); return r; }))));
  }
});

// Al tocar la notificación de fin de ayuno, abre la app.
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow("./#ayuno")));
});
