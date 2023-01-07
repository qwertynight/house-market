import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFxggJ8qyOFey_Ihsg_G6AE0bRsRu02Cc",
  authDomain: "house-market-44557.firebaseapp.com",
  projectId: "house-market-44557",
  storageBucket: "house-market-44557.appspot.com",
  messagingSenderId: "235610066373",
  appId: "1:235610066373:web:b791c4a9e81083636f0fac",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
