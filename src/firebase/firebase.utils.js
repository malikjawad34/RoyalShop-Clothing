import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCphxfTt0Gj4TL0LtVkxbbf0B0pihqX4o0",
    authDomain: "royalshop-db.firebaseapp.com",
    projectId: "royalshop-db",
    storageBucket: "royalshop-db.appspot.com",
    messagingSenderId: "673499352862",
    appId: "1:673499352862:web:0da7a3e9bc87ccc0e7030f",
    measurementId: "G-7F917FG2JV"
  };

  export const createUserProfileDocument = async (userAuth, displayName) => {
    if( !userAuth ) return;

    const userRef = firestore.doc(`user/ ${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {  email} = userAuth;
      const createdAt = new Date();

      try {
        userRef.set({
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;