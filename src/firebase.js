import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAzehfdYmxip1_4cyGz_OcBUjFrAZlKrjs',
  authDomain: 'slack-clone-40414.firebaseapp.com',
  projectId: 'slack-clone-40414',
  storageBucket: 'slack-clone-40414.appspot.com',
  messagingSenderId: '1004212652633',
  appId: '1:1004212652633:web:bb536237183869ebcf7f48',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
