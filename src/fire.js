import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDY8UFd4g9wK_I-lBGGXAGzp7eN3ByA8Rw",
    authDomain: "moneymanager-2b723.firebaseapp.com",
    databaseURL: "https://moneymanager-2b723.firebaseio.com",
    projectId: "moneymanager-2b723",
    storageBucket: "moneymanager-2b723.appspot.com",
    messagingSenderId: "697362081148",
    appId: "1:697362081148:web:c55f8dd45cd72d486b70f9",
    measurementId: "G-Z5G4K60J0Q"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;