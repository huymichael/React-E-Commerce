import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCtUUs9gGK-jQRykh0_UJsvzRoIsoD0PhQ',
    authDomain: 'ecommerce-db-1dfd3.firebaseapp.com',
    databaseURL: 'https://ecommerce-db-1dfd3.firebaseio.com',
    projectId: 'ecommerce-db-1dfd3',
    storageBucket: 'ecommerce-db-1dfd3.appspot.com',
    messagingSenderId: '612124871690',
    appId: '1:612124871690:web:89bd3c5cdcb13cfaf1e3f3'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export  default firebase;