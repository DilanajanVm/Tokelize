/**
 * Created by WebStorm.
 * User: athukorala
 * Date: 17/10/22
 * Time: 3:51 PM
 */
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyBmyf2hWoZHWkwz0lQfsJ3aoFeeqASTAKs",
    authDomain: "mydonate-dev.firebaseapp.com",
    projectId: "mydonate-dev",
    storageBucket: "mydonate-dev.appspot.com",
    messagingSenderId: "487456778072",
    appId: "1:487456778072:web:14a7c773dccafce601e72d",
    measurementId: "G-M2748EMZK4"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
if (firebase.messaging.isSupported()){
    const messaging = firebase.messaging();
}
