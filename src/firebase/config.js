import * from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';


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

export { projectFirestore, projectStorage };
    
