// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASaqK0EqBtcga75z7QQOrsO8fK8SnJgbk',
  authDomain: 'insta-2-yt-e4036.firebaseapp.com',
  projectId: 'insta-2-yt-e4036',
  storageBucket: 'insta-2-yt-e4036.appspot.com',
  messagingSenderId: '419931092604',
  appId: '1:419931092604:web:5d533812243a5e86453bf9',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
