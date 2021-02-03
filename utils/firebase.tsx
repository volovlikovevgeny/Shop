import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9sw-ihS_brvAuVDE_QXF5Sh4k2AhuC8M",
    authDomain: "next-js-typescript.firebaseapp.com",
    projectId: "next-js-typescript",
    storageBucket: "next-js-typescript.appspot.com",
    messagingSenderId: "279404076500",
    appId: "1:279404076500:web:cd36a254e2c1751e1d0a41",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();

export { auth, db, now, storage };

console.log(app.name ? 'Firebase modal Activated!' : 'Firebase not working');





