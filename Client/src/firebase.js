// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b6727.firebaseapp.com",
  projectId: "mern-estate-b6727",
  storageBucket: "mern-estate-b6727.firebasestorage.app",
  messagingSenderId: "646718898185",
  appId: "1:646718898185:web:8316a503100259aaccf8d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);