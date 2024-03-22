// Import the functions you need from the SDKs you need
require('dotenv').config()
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const admin = require('firebase-admin');
const API_KEY = process.env.API_KEY
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "blink-ede74.firebaseapp.com",
  projectId: "blink-ede74",
  storageBucket: "blink-ede74.appspot.com",
  messagingSenderId: "1083754799127",
  appId: "1:1083754799127:web:ff7790d59ee0154fb8fc52",
  measurementId: "G-3W8M3688E3"
};

const serviceAccount = require('./blink-ede74-firebase-adminsdk-oawf9-b6cf51a021'); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = admin.firestore()
const auth = getAuth(app)

module.exports = {db, auth}