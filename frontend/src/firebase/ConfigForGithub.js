import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  // Your config will be here
};

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage();

export { storage };
