import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import CONFIG from './global/config';

precacheAndRoute(self.__WB_MANIFEST);

const cacheExpiration = new ExpirationPlugin({
  maxEntries: CONFIG.CACHE_MAX_ENTRIES,
  maxAgeSeconds: CONFIG.CACHE_EXPIRATION_TIME,
});

const restaurantAPI = new Route(
  ({ url }) => /^https:\/\/restaurant-api\.dicoding\.dev\/(?!images\/)/.test(url.href),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  }),
);

const restaurantImageAPI = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-api',
    plugins: [cacheExpiration],
  }),
);

const googleFonts = new Route(
  ({ url }) => url.href.startsWith('https://fonts.gstatic.com/s/'),
  new CacheFirst({
    cacheName: 'fonts',
  }),
);

registerRoute(restaurantAPI);
registerRoute(restaurantImageAPI);
registerRoute(googleFonts);

self.addEventListener('install', () => {
  console.log('ServiceWorker : installed');
});

// self.addEventListener('push', (event) => {
//   console.log('ServiceWorker : pushed');
//   const notificationData = {
//     title: 'Push Notification',
//     options: {
//       body: 'This is a push notification',
//       icon: './favicon.png',
//       image: '/icon-512x512/icon-512x512.jpg',
//     },
//   };

//   const showNotification = self.registration.showNotification(
//     notificationData.title,
//     notificationData.options,
//   );

//   event.waitUntil(showNotification);
// });
