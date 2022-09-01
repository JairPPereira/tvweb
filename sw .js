'use strict';

let swVer = '1';

function versionedURL(url) {
  if (typeof (url) == 'undefined') {
    return ''
  }

  let q = '?';
  if (url.indexOf('?') > 0) {
    q = '&';
  }

  return url + q + 'v=' + swVer
}

self.addEventListener('push', function (event) {
  let data = event.data.json();

  if (data.hasOwnProperty('ntf')) {
    event.waitUntil(fetch(data.ntf, {cache: "no-store"}));
  }

  self.registration.showNotification(data.tit || 'Notification', {
    body: data.bdy || '',
    image: versionedURL(data.img),
    icon: versionedURL(data.icn),
    badge: versionedURL(data.bdg),
    requireInteraction: true,
    vibrate: [500, 100, 400, 100, 300],
    renotify: true,
    tag: data.tag || '1',
    data: data
  });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(versionedURL(event.notification.data.url)).then(windowClient => windowClient ? windowClient.focus() : null));
});

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

