import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnljap5PavNwylM0Dl40RiLtMaRtbQhoU",
  authDomain: "todo-app-aed5e.firebaseapp.com",
  projectId: "todo-app-aed5e",
  storageBucket: "todo-app-aed5e.appspot.com",
  messagingSenderId: "118887166865",
  appId: "1:118887166865:web:eba6e723a5cb90aa866030",
  measurementId: "G-Z04T5F6JZ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
