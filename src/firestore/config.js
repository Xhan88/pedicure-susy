import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9wR_1aXThqPqVvd-Ujgyi4KKbyYD7KOo",
  authDomain: "pedicure-susy.firebaseapp.com",
  projectId: "pedicure-susy",
  storageBucket: "pedicure-susy.appspot.com",
  messagingSenderId: "540414611146",
  appId: "1:540414611146:web:b46ab512b2fa5183582e33"
};

const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
  return app
}