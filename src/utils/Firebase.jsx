// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO3sRsAhkF2aPQEoEFbGpS4hfR2uiimt8",
  authDomain: "freegamesfiesta.firebaseapp.com",
  projectId: "freegamesfiesta",
  storageBucket: "freegamesfiesta.appspot.com",
  messagingSenderId: "126916381974",
  appId: "1:126916381974:web:c5ffa9e4cf78de4516d437",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
