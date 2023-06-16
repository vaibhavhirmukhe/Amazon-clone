import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCwaeIwgYFPsKyl9lZ-MsMPj1nHGRvXD6I",
    authDomain: "clone-ddac7.firebaseapp.com",
    projectId: "clone-ddac7",
    storageBucket: "clone-ddac7.appspot.com",
    messagingSenderId: "749589864654",
    appId: "1:749589864654:web:c50da21fb460c29995b09f",
    measurementId: "G-TDDS2385D5"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
