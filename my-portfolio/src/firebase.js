// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD3x9YLDcmlZ5WL9HB5Vcpf5J1WIcLo-o",
  authDomain: "my-portfolio-4914a.firebaseapp.com",
  projectId: "my-portfolio-4914a",
  storageBucket: "my-portfolio-4914a.appspot.com",
  messagingSenderId: "1077957069148",
  appId: "1:1077957069148:web:aa3c0c8169bed7e101d999",
  measurementId: "G-0LBZE3VRXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);