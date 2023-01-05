// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpNxYcjYQD9vWl8II4rnFFpFvKdU4dT_U",
    authDomain: "genius-car-services-e6644.firebaseapp.com",
    projectId: "genius-car-services-e6644",
    storageBucket: "genius-car-services-e6644.appspot.com",
    messagingSenderId: "600796614409",
    appId: "1:600796614409:web:85bb39f4a45370c5300dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;