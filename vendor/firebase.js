/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {initializeApp, getApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBgCcj4gwH7D2xzCpILQ3-6XwFrhW3cmIY',
  authDomain: 'hious-f79f3.firebaseapp.com',
  projectId: 'hious-f79f3',
  storageBucket: 'hious-f79f3.appspot.com',
  messagingSenderId: '194675669571',
  appId: '1:194675669571:web:e13a9a0742b33075f972f6',
  measurementId: 'G-L4DGXGK5Y0',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};
