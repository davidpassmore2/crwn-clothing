import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDwvzXskaLSf3j19HFb8KNfKApHYUeTOpg",
  authDomain: "crown-db-1c22a.firebaseapp.com",
  projectId: "crown-db-1c22a",
  storageBucket: "crown-db-1c22a.appspot.com",
  messagingSenderId: "600789798101",
  appId: "1:600789798101:web:6c84749742a1b0eb97e65c",
  measurementId: "G-M7ELJQVFKX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
