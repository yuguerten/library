const CACHE = 'left-library-imgs-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('left-library-imgs-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  const isImage =
    event.request.destination === 'image' ||
    /\.(jpe?g|png|gif|webp|avif|svg)$/i.test(url.pathname);

  if (!isImage || event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;

      try {
        const response = await fetch(event.request);
        if (response.ok || response.type === 'opaque') {
          await cache.put(event.request, response.clone()).catch(() => {});
        }
        return response;
      } catch (err) {
        return cached || new Response('', { status: 504 });
      }
    })
  );
});
