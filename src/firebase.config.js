// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK5hQtauXwWIoY1tdDgk6Sj4Vk6fcHBqw",
  authDomain: "social-f745c.firebaseapp.com",
  projectId: "social-f745c",
  storageBucket: "social-f745c.firebasestorage.app",
  messagingSenderId: "11555826480",
  appId: "1:11555826480:web:497072032d77b9b1e576f5",
  measurementId: "G-DK1HPL6VKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);