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

  // Show notification in 10 seconds if we recieved a message
  if (event?.data?.type === 'SEND_NOTIFICATION') {
    setTimeout(showNotification, 10000);
  }
});

function showNotification() {
  const options = {
    body: 'Hello World',
    icon: './resources/icon.png',
  };
  self.registration.showNotification('Demo Push Notification', options);
}
