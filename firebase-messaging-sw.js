// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
  apiKey: "AIzaSyCYv1F_JXhjv93TWI6chRJg8PqkTwKCAbo",
  authDomain: "notifyme-465e4.firebaseapp.com",
  projectId: "notifyme-465e4",
  storageBucket: "notifyme-465e4.appspot.com",
  messagingSenderId: "975817642381",
  appId: "1:975817642381:web:b4e7896b65eea0d762adc4",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log("Message received 2.", payload);

  const options = {
    body: payload.body,
    icon: "https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg",
    vibrate: [200, 100, 100],
  };

  return self.registration.showNotification(payload.title, options);
});
