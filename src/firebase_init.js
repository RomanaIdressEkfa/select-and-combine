// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5DjTQfHuwR-RTkGSwIl46RY0PmGVYnBA",
    authDomain: "select-and-combine.firebaseapp.com",
    projectId: "select-and-combine",
    storageBucket: "select-and-combine.appspot.com",
    messagingSenderId: "735903626164",
    appId: "1:735903626164:web:75461498097e4cd67538e1"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;