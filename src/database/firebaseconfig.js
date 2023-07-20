import {initializeApp} from '@firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; 

export const firebaseConfig = {
  apiKey: "AIzaSyBABDliC9jbplJLUgblm2ZpNhY5gt8kUlU",
  authDomain: "team-1-radiant-vuelo.firebaseapp.com",
  projectId: "team-1-radiant-vuelo",
  storageBucket: "team-1-radiant-vuelo.appspot.com",
  messagingSenderId: "804112127680",
  appId: "1:804112127680:web:a4aab0ec38976b01cebf25"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);