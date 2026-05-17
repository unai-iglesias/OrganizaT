importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAF4DVO6dixlCmuFzetWhJI09GShdJOxFI",
  authDomain: "organizat-ui.firebaseapp.com",
  projectId: "organizat-ui",
  storageBucket: "organizat-ui.firebasestorage.app",
  messagingSenderId: "775835679422",
  appId: "1:775835679422:web:71bc7fd3baad473e8fbcef"
});

const messaging = firebase.messaging();

// Notificación recibida con la app en segundo plano o cerrada
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/icono_app.png',
    badge: '/icono_app.png',
    vibrate: [200, 100, 200],
    tag: payload.data?.taskId || 'organizat',
    renotify: true,
  });
});
