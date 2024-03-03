// main.js

const firebaseConfig = {
    apiKey: "AIzaSyCqZEqorxifElrv-rQ0oHGMOO6Mry2zx6U",
    authDomain: "event-manager-3ec1c.firebaseapp.com",
    databaseURL: "https://event-manager-3ec1c-default-rtdb.firebaseio.com",
    projectId: "event-manager-3ec1c",
    storageBucket: "event-manager-3ec1c.appspot.com",
    messagingSenderId: "741804287188",
    appId: "1:741804287188:web:13b704a18fca1964d68741",
    measurementId: "G-WZKGQPXE23"
  };

// main.js

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements from the login form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('login-form');

// Add event listener for form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get email and password values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Sign in the user
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
            // Redirect to a new page or perform any other action upon successful login
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login error:', errorMessage);
            // Display error message to the user, e.g., show it on the login form
        });
});
