import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig={
    apiKey:"AIzaSyBYd48Ew-cGzoNP_HXntFffIMt2pmoJPDo",
    projectId: "finalidea-c1e0f",
    storageBucket:"finalidea-c1e0f.appspot.com",
    appId: "1:1027257867399:android:aab593f006193a77f36c22",
    

}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)