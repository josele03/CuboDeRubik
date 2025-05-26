// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4BHmHGcMtqp-Pta_ACdpSE_gGn4Escjg",
  authDomain: "backendtfg-61851.firebaseapp.com",
  projectId: "backendtfg-61851",
  storageBucket: "backendtfg-61851.firebasestorage.app",
  messagingSenderId: "321269265174",
  appId: "1:321269265174:web:1765ebb0afe54b24e95637",
  measurementId: "G-NBYRKFLLQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
