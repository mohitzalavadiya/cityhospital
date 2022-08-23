// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQk5ISWLqjSO-zil0GLw5Oo06QjTMT-0",
  authDomain: "mohitfirebase-b2974.firebaseapp.com",
  projectId: "mohitfirebase-b2974",
  storageBucket: "mohitfirebase-b2974.appspot.com",
  messagingSenderId: "739920108545",
  appId: "1:739920108545:web:7b4d38f0ed941d043f3400",
  measurementId: "G-ZVMELKELL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);