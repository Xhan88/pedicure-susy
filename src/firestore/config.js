// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9wR_1aXThqPqVvd-Ujgyi4KKbyYD7KOo",
  authDomain: "pedicure-susy.firebaseapp.com",
  projectId: "pedicure-susy",
  storageBucket: "pedicure-susy.appspot.com",
  messagingSenderId: "540414611146",
  appId: "1:540414611146:web:b46ab512b2fa5183582e33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
  return app
}