import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD3Xf7DbI0gYB-SpfH7-UiWh7vdEidVnEk",
   authDomain: "firegram-54e50.firebaseapp.com",
   projectId: "firegram-54e50",
   storageBucket: "firegram-54e50.appspot.com",
   messagingSenderId: "756541350734",
   appId: "1:756541350734:web:651f6dd1e119be7d2b341f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
