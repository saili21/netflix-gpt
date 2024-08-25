// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAse6Ei0S12iaDtG9ZHGGL6w8xaqGInuBU",
  authDomain: "netflixgpt-fb675.firebaseapp.com",
  projectId: "netflixgpt-fb675",
  storageBucket: "netflixgpt-fb675.appspot.com",
  messagingSenderId: "438151988011",
  appId: "1:438151988011:web:cf4c45f6e85b0a7108fb6e",
  measurementId: "G-GGRS21ZTHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
