import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 

const firebaseConfig = {
  apiKey: "AIzaSyBDGnoEMx21e4OS2N-AOnXlzTe8dNliYE4",
  authDomain: "chatgpt-messenger-clone-864e3.firebaseapp.com",
  projectId: "chatgpt-messenger-clone-864e3",
  storageBucket: "chatgpt-messenger-clone-864e3.appspot.com",
  messagingSenderId: "647745365460",
  appId: "1:647745365460:web:c50b8d73afb00e0a53e241"
};

// Initialize Firebase
const app =  getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };