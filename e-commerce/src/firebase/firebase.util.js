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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return false;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    return userRef;
};
firebase.initializeApp(config);


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach(obj=>{
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef,obj);
    });
    return await batch.commit();
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;