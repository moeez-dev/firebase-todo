import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDRpfZV-Ggp2d_kDrbGa0EvPcZSWj9X528",
    authDomain: "todo-app-87442.firebaseapp.com",
    projectId: "todo-app-87442",
    storageBucket: "todo-app-87442.appspot.com",
    messagingSenderId: "159823433783",
    appId: "1:159823433783:web:1ce7181b97d876a3e4efb2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)