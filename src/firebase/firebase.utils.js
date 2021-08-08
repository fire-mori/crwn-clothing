import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBY_Y-qqYzfmiU4XX5YcvA-s6xQ4V5buiQ',
  authDomain: 'crwn-db-ac995.firebaseapp.com',
  projectId: 'crwn-db-ac995',
  storageBucket: 'crwn-db-ac995.appspot.com',
  messagingSenderId: '1039527553854',
  appId: '1:1039527553854:web:7fa38a5f97c4af3a3bda6f',
  measurementId: 'G-6JGPCK75EN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return undefined;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
