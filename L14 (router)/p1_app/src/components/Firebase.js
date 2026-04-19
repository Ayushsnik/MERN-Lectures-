// Import the functions you need from the SDKs you need
import {getDatabase} from "firebase/database"; 
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "paste your firebase key ",
  authDomain: "feedback-15-05.firebaseapp.com",
  databaseURL: "https://feedback-15-05-default-rtdb.firebaseio.com",
  projectId: "feedback-15-05",
  storageBucket: "feedback-15-05.firebasestorage.app",
  messagingSenderId: "71664628779",
  appId: "1:71664628779:web:c458817befc6982a14a66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
