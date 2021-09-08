import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCnUZyn5ELr0lgz2Xwm5JP4V5LmzD8MjDk",
  authDomain: "crwn-react-project-edda4.firebaseapp.com",
  projectId: "crwn-react-project-edda4",
  storageBucket: "crwn-react-project-edda4.appspot.com",
  messagingSenderId: "991216961138",
  appId: "1:991216961138:web:0e8bb0e2b17fcd2ff3e4eb",
  measurementId: "G-89T5JQXDX4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
