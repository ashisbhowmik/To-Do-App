import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnljap5PavNwylM0Dl40RiLtMaRtbQhoU",
  authDomain: "todo-app-aed5e.firebaseapp.com",
  projectId: "todo-app-aed5e",
  storageBucket: "todo-app-aed5e.appspot.com",
  messagingSenderId: "118887166865",
  appId: "1:118887166865:web:eba6e723a5cb90aa866030",
  measurementId: "G-Z04T5F6JZ3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
