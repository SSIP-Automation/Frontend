import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
   apiKey: "AIzaSyDPaXupfaFnuQwoZRf2-LVYczJqFFjBCdI",
  authDomain: "ssip-fad50.firebaseapp.com",
  projectId: "ssip-fad50",
  storageBucket: "ssip-fad50.appspot.com",
  messagingSenderId: "815509915904",
  appId: "1:815509915904:web:2a43e6ccdacec8f9968be5",
  measurementId: "G-M57GHYDDZR"
  }
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider()
export default db
