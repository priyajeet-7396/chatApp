// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyCjJlwGXEF6JpmiSesq0u_pjbEzSh5ghek",
  authDomain: "chat-939f2.firebaseapp.com",
  projectId: "chat-939f2",
  storageBucket: "chat-939f2.appspot.com",
  messagingSenderId: "127283766617",
  appId: "1:127283766617:web:d7a174056c8a8bba7c5848"
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

