  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMv4QCufMyzIRBKjHnq_8Un_JBCyfAgW0",
    authDomain: "gsfdkshop-c14a5.firebaseapp.com",
    databaseURL: "https://gsfdkshop-c14a5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gsfdkshop-c14a5",
    storageBucket: "gsfdkshop-c14a5.appspot.com",
    messagingSenderId: "344497801514",
    appId: "1:344497801514:web:0f0eb24cf441e7f1067653",
    measurementId: "G-VNBDEHJM6M"
  };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;

    // For new registration
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Registration successful!!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  });
});