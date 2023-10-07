// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW8mrO0O7KwJFrdVW-g9_s7KJS8UqixTs",
  authDomain: "moviesboxgpt.firebaseapp.com",
  projectId: "moviesboxgpt",
  storageBucket: "moviesboxgpt.appspot.com",
  messagingSenderId: "288497175682",
  appId: "1:288497175682:web:4efb19337fe9a9ae59f89b",
  measurementId: "G-13VXPYRF9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();