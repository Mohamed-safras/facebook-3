import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAb_SCjjQ4zBhrkjVqYhXKPFZXoENNDvgs",
  authDomain: "facebook-4b9e8.firebaseapp.com",
  projectId: "facebook-4b9e8",
  storageBucket: "facebook-4b9e8.appspot.com",
  messagingSenderId: "612804857443",
  appId: "1:612804857443:web:dcd933e5cd03cd3b077256",
  measurementId: "G-PE6CVNWV2E",
});

const auth  = firebase.auth();

export {auth};