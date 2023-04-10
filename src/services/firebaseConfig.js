import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, RecaptchaVerifier } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQC3N0JsyFYKBK6e7GcUeDGF86KZYRKbw",
  authDomain: "transportation-4d382.firebaseapp.com",
  projectId: "transportation-4d382",
  storageBucket: "transportation-4d382.appspot.com",
  messagingSenderId: "227306026863",
  appId: "1:227306026863:web:1e9a0d89508d5aa88e1a9a"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);

export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();

export const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => { }
  }, authentication);
};