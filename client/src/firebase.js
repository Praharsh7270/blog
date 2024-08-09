// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-97c92.firebaseapp.com",
  projectId: "mern-blog-97c92",
  storageBucket: "mern-blog-97c92.appspot.com",
  messagingSenderId: "407498284309",
  appId: "1:407498284309:web:e42b83c83c6fe27cbfdd1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
