// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_TCXVvdtTNr3dl8FKOxOUMbukQJlLJxo",
    authDomain: "car-geeks-aec3f.firebaseapp.com",
    projectId: "car-geeks-aec3f",
    storageBucket: "car-geeks-aec3f.appspot.com",
    messagingSenderId: "888829532341",
    appId: "1:888829532341:web:9dd979b0c7f9d01580c6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;