import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyZ2uLVKBB8h6xLSR7z3lFfCu8KSQNwhQ",
  authDomain: "holiday-photos-f42d0.firebaseapp.com",
  projectId: "holiday-photos-f42d0",
  storageBucket: "holiday-photos-f42d0.appspot.com",
  messagingSenderId: "616750509179",
  appId: "1:616750509179:web:678414d4ded5697b5f86de",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
