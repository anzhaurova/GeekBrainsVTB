//указываем ключ для кеширования
const cacheName = 'rchat-v1';
//указываем то что хотим кэшировать из статики
const staticAssets = [
    './',
    './main.css',
    './bundle.js',
    './api/chats.json',
];

//описываем событие
self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', event => {

});