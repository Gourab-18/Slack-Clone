import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBQdbDwTBg58_HkyyU-CA2w6f6FLK5ct10",
  authDomain: "slack-clone-ec639.firebaseapp.com",
  projectId: "slack-clone-ec639",
  storageBucket: "slack-clone-ec639.appspot.com",
  messagingSenderId: "695832914663",
  appId: "1:695832914663:web:e104434bb839b30e3b1042",
};

// The below lines
const firebaseApp = firebase.initializeApp(firebaseConfig);
// This has a no sequel structure
const db = firebaseApp.firestore();
const auth = firebase.auth();
// Google sign in
const provider = new firebase.auth.GoogleAuthProvider();
// We will be exporting these stuff from this file
export { auth, provider, db };
