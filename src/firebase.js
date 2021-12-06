// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Config to previus page
const firebaseConfig = {
	apiKey: "AIzaSyA0dQaug5J0WW6ZlXJAWlY46WwWOOFKG9Q",
	authDomain: "school-study-a01d2.firebaseapp.com",
	projectId: "school-study-a01d2",
	storageBucket: "school-study-a01d2.appspot.com",
	messagingSenderId: "570346424592",
	appId: "1:570346424592:web:a21229f1046428b98afd95",
	measurementId: "G-PGJH2EBGKQ",
};
// const firebaseConfig = {
// 	apiKey: "AIzaSyCYto5FVDamGLKG8RWz7UGp9s7y3-4iycc",
// 	authDomain: "estudia-ebau.firebaseapp.com",
// 	projectId: "estudia-ebau",
// 	storageBucket: "estudia-ebau.appspot.com",
// 	messagingSenderId: "815374386456",
// 	appId: "1:815374386456:web:a5e8d85c7e44831d8dca6d",
// 	measurementId: "G-LENQ5GF371",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
//const analytics = getAnalytics(app);

export { app, auth, db };
