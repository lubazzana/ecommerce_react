// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-gjqFd_rHHapkVIXTZVFB6WIOGSt7kpE",
    authDomain: "ecommerce-react-coderhou-74767.firebaseapp.com",
    projectId: "ecommerce-react-coderhou-74767",
    storageBucket: "ecommerce-react-coderhou-74767.appspot.com",
    messagingSenderId: "750531504016",
    appId: "1:750531504016:web:d9d79b8217bd7503ddb515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)