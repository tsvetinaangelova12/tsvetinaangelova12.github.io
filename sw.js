const cacheName = "word-app-v1";
const assets = [
    "./word.html",
    "./words.js",
    "./icon.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(assets))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
