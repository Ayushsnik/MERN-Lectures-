// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtV1WhZllVXUVsquCO_DCRyz1Ug5_z-7Y",
  authDomain: "authentication-15-05.firebaseapp.com",
  projectId: "authentication-15-05",
  storageBucket: "authentication-15-05.firebasestorage.app",
  messagingSenderId: "211888954849",
  appId: "1:211888954849:web:4916a902c0bd89150486a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // This initializes the Firebase app with the provided configuration
export default app;