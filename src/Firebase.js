import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig= firebase.initializeApp({
    apiKey: "AIzaSyCh_nQwJU0DoemWfhGCpUk0pGNpQUPO7R0",
    authDomain: "todolist-6c4aa.firebaseapp.com",
    databaseURL: "https://todolist-6c4aa.firebaseio.com",
    projectId: "todolist-6c4aa",
    storageBucket: "todolist-6c4aa.appspot.com",
    messagingSenderId: "254734374455",
    appId: "1:254734374455:web:61cc51348b3bfcd76591b2"
})

export {firebaseConfig as firebase}