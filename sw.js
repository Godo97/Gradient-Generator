const CACHE_NAME = "v1_cache_gradient_generator";
const urlsTuCache = [
    "./",
    "./?umt_source=web_app_manifest",
    "./IMG/favicon.png",
    "./IMG/icon32.png",
    "./IMG/icon64.png",
    "./IMG/icon128.png",
    "./IMG/icon192.png",
    "./IMG/icon256.png",
    "./IMG/icon512.png",
    "./IMG/icon1024.png",
    "https://unpkg.com/vue@next",
    "./JS/main.js",
    "./JS/mountApp.js",
    "./CSS/style.css",
    "./manifesf.json",
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsTuCache).then(
                () => self.skipWaiting()
            ).catch((err) => console.log(err))
        )
    );
});

self.addEventListener("activate", (e) => {
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                return res;
            }
            return fetch(e.request);
        })
    );
});