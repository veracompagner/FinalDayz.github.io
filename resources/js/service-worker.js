// This is the "Offline copy of pages" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

// General message listener
addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  // Opdracht 3: hier komen de messages binnen van main.js
  // TIP, zo kan je 10 seconden wachten in JavaScript
  /*
  setTimeout(() => {
    console.log('ik console log 10 seconden later');
  }, 10000)

  */
});
