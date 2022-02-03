// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSF4zTFWcsKv8ZJG1K_b1oVUEb-kwuxx8",
  authDomain: "sparta-react-basic-b8a83.firebaseapp.com",
  projectId: "sparta-react-basic-b8a83",
  storageBucket: "sparta-react-basic-b8a83.appspot.com",
  messagingSenderId: "757905351986",
  appId: "1:757905351986:web:07aa38e0ee54040ff6232b",
  measurementId: "G-G1ZKB241K6",
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
