// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'portfolio-next07.firebaseapp.com',
	projectId: 'portfolio-next07',
	storageBucket: 'portfolio-next07.appspot.com',
	messagingSenderId: '253135795521',
	appId: '1:253135795521:web:1d6182e7e15882cb1addc0',
	measurementId: 'G-VLKVMR860B',
};

console.log(process.env.FIREBASE_API_KEY);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const userRef = collection(db, 'contact_form');
