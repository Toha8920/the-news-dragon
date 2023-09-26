// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGKVQDhSKwpYOUR-lQLHGE2V1S35UdCxE",
    authDomain: "the-news-dragon-ff22d.firebaseapp.com",
    projectId: "the-news-dragon-ff22d",
    storageBucket: "the-news-dragon-ff22d.appspot.com",
    messagingSenderId: "97247015994",
    appId: "1:97247015994:web:5d7b3cfd1c23a64f253103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;