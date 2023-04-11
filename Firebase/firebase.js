import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig={
    apiKey:"AIzaSyBYd48Ew-cGzoNP_HXntFffIMt2pmoJPDo",
    projectId: "finalidea-c1e0f",
    storageBucket:"finalidea-c1e0f.appspot.com",
    appId: "1:1027257867399:android:aab593f006193a77f36c22",
    

}

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
