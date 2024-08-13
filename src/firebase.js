

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyASz0eEthjtdywOGBt431sylQws0KWU86M",
    authDomain: "solution-for-next-generation.firebaseapp.com",
    projectId: "solution-for-next-generation",
    storageBucket: "solution-for-next-generation.appspot.com",
    messagingSenderId: "915116344314",
    appId: "1:915116344314:web:a979deeed73a8dd1cf9a43",
    measurementId: "G-NHK9V0LD4V"
 
};
//init firebase app
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);




export default app;