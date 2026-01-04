// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr0XGekMsMDd6T2gNt3kUfiWO5-26mJk0",
  authDomain: "greencoloreddino.firebaseapp.com",
  projectId: "greencoloreddino",
  storageBucket: "greencoloreddino.firebasestorage.app",
  messagingSenderId: "54156735750",
  appId: "1:54156735750:web:0df729a95280f6f1b1da87",
  measurementId: "G-Q5TPWYNLR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


