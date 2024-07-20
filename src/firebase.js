// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtSJwNuN1wqU_NMXjsHIIJNPfUcQN-oiY",
  authDomain: "baselink-academy.firebaseapp.com",
  projectId: "baselink-academy",
  storageBucket: "baselink-academy.appspot.com",
  messagingSenderId: "861433301955",
  appId: "1:861433301955:web:106f741d206415fce3cb76",
  measurementId: "G-REGX7GLLCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

export { auth }; // Export the initialized Auth
