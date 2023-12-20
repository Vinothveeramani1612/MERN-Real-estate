// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c0528.firebaseapp.com",
  projectId: "mern-estate-c0528",
  storageBucket: "mern-estate-c0528.appspot.com",
  messagingSenderId: "42148052669",
  appId: "1:42148052669:web:f7c5f8d16a49f9c16b41d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);