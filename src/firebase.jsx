import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCz8EHcjH7rivbY3DV86f5GU59CyiFV7G0",
    authDomain: "promptquizapp.firebaseapp.com",
    projectId: "promptquizapp",
    storageBucket: "promptquizapp.firebasestorage.app",
    messagingSenderId: "566792558836",
    appId: "1:566792558836:web:c9042a27a5b5dee14526a1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);