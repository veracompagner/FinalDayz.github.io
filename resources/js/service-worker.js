// This is the "Offline copy of pages" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

function showNotification() {
  const timestamp = new Date().getTime() + 20 * 1000; // now plus 5000ms

  const options = {
    tag: timestamp,
    body: 'Hello World',
    showTrigger: new TimestampTrigger(timestamp),
    data: {
      url: 'https://finaldayz.github.io/',
    },
    badge: './resources/icon.png',
    icon: './resources/icon.png',
  };
  console.log("goint to call showNotification: ", { title: 'Demo Push Notification', options });
  self.registration.showNotification('Demo Push Notification', options);
  console.log("Called showNotification");
}
