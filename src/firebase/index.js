// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCGaMM2do8_t0-g897dzZUQuQ2fOt0zQIY",
  authDomain: "the-finder-auth.firebaseapp.com",
  projectId: "the-finder-auth",
  storageBucket: "the-finder-auth.appspot.com",
  messagingSenderId: "1050144514592",
  appId: "1:1050144514592:web:deb4ffd687708466265245",
  measurementId: "G-FGZMEFMQXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export { auth }
 