import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FC } from 'react';


const config = {
    apiKey: "AIzaSyD9sw-ihS_brvAuVDE_QXF5Sh4k2AhuC8M",
    authDomain: "next-js-typescript.firebaseapp.com",
    projectId: "next-js-typescript",
    storageBucket: "next-js-typescript.appspot.com",
    messagingSenderId: "279404076500",
    appId: "1:279404076500:web:cd36a254e2c1751e1d0a41",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = ():Promise<firebase.auth.UserCredential> => auth.signInWithPopup(provider);
