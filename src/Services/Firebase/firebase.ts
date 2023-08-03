// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const envImport = import.meta.env;
const firebaseConfig = {
  apiKey: envImport.VITE_API_FIREBASE_API_KEY,
  authDomain: envImport.VITE_API_FIREBASE_AUTH_DOMAIN,
  projectId: envImport.VITE_API_FIREBASE_PROJECT_ID,
  storageBucket: envImport.VITE_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envImport.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: envImport.VITE_API_FIREBASE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
