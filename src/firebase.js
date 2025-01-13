import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyDfmFpCgNsm2WlNuHWC40YI26Gq1hOZGsc",
  authDomain: "flowboard-7cec1.firebaseapp.com",
  projectId: "flowboard-7cec1",
  storageBucket: "flowboard-7cec1.firebasestorage.app",
  messagingSenderId: "174057006225",
  appId: "1:174057006225:web:ebe80ec615f5b81976cb30",
  measurementId: "G-JCDG4HKCTC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}