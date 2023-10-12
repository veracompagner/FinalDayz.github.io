
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.NetworkFirst({
    casheName: 'EEN_VOORBEELD_CASH_KEY'
      })
    );

// Gebruik `workbox.routing.registerRoute()`...

