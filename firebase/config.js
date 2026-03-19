import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr9uNUORjTw35oDu05Rqf08ipAY-TlhCM",
  authDomain: "calynk-35f71.firebaseapp.com",
  projectId: "calynk-35f71",
  storageBucket: "calynk-35f71.firebasestorage.app",
  messagingSenderId: "146555468261",
  appId: "1:146555468261:web:517e87f77d69632d64170c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };