// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPHcT3UGLPGgDQ3CYM7FqTBLihstebnAI",
  authDomain: "my-news-portal-project.firebaseapp.com",
  projectId: "my-news-portal-project",
  storageBucket: "my-news-portal-project.appspot.com",
  messagingSenderId: "68050375355",
  appId: "1:68050375355:web:88dd19426e8cd94b020f9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;