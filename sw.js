// sw.js

const CACHE_NAME = "biodata-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "foto1.jpg", // Tambahkan gambar yang ingin Anda cache di sini
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
