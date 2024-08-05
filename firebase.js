// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqtlpNbDD5j7wBpoS0MNcWRNBBnF_b89Q",
  authDomain: "pantry-management-fd0b0.firebaseapp.com",
  projectId: "pantry-management-fd0b0",
  storageBucket: "pantry-management-fd0b0.appspot.com",
  messagingSenderId: "511337449573",
  appId: "1:511337449573:web:05ece1fc83b5be4282de8c",
  measurementId: "G-YPJMZSNMPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}