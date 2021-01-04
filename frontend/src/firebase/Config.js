import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxQI_getusBetS8Xm1obT4-pKCLp5P35s",
  authDomain: "recommercexd.firebaseapp.com",
  projectId: "recommercexd",
  storageBucket: "recommercexd.appspot.com",
  messagingSenderId: "1088272690093",
  appId: "1:1088272690093:web:20260db0008ccc00f18f24",
};

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage();

export { storage };
