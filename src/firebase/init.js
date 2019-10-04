import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCI8ru4tmdLXBjX-KGjAiKjdUreDPKnSJ0",
    authDomain: "chatroom-firebase-fecb3.firebaseapp.com",
    databaseURL: "https://chatroom-firebase-fecb3.firebaseio.com",
    projectId: "chatroom-firebase-fecb3",
    storageBucket: "chatroom-firebase-fecb3.appspot.com",
    messagingSenderId: "310072651314",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
