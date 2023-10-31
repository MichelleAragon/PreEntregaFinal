// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI3Prlt3hFgCReSfNLOKe3HES3l4RlxwY",
  authDomain: "fb-nan.firebaseapp.com",
  projectId: "fb-nan",
  storageBucket: "fb-nan.appspot.com",
  messagingSenderId: "893767148513",
  appId: "1:893767148513:web:99dc609c90e00ce755a8a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);