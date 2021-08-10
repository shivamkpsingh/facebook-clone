import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBFZc89bXuhcO-v9kqdP1MooOZFN2R53qk",
  authDomain: "facebook-clone-28888.firebaseapp.com",
  projectId: "facebook-clone-28888",
  storageBucket: "facebook-clone-28888.appspot.com",
  messagingSenderId: "554561203833",
  appId: "1:554561203833:web:cd9eeb4f606c3d819feea8",
  measurementId: "G-PMKPQP29GD",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
export {auth,storage,db};
