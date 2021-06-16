import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });

console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);

const auth = app.auth();
var firestore = app.firestore();

const database = {
  games: firestore.collection('Games'),
  getTime: () => {
    return firebase.firestore.FieldValue.serverTimestamp()
  },
  docData: doc => {
    return {...doc.data()}
  },
  messages: firestore.collection('messages'),
  persona: firestore.collection('Persona'),
  rmstory: firestore.collection('Games').doc(`Repair-Merchant`).collection(`story`)
}

export {
    app,
    auth,
    database,
    firestore
}
