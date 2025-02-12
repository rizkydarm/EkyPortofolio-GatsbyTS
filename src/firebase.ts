import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    // authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.GATSBY_FIREBASE_APP_ID,
    apiKey: "AIzaSyCf3-psRLr6vk1X0paoDUSg7lAMn-bKrvo",
    authDomain: "myportofolio-ba25e.firebaseapp.com",
    projectId: "myportofolio-ba25e",
    storageBucket: "myportofolio-ba25e.appspot.com",
    messagingSenderId: "1098346421759",
    appId: "1:1098346421759:web:645ce354bed983cfe69bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);