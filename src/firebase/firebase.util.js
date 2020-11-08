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
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items,
        };
    });
    return transformCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;