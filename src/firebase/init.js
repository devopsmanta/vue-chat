import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCI8ru4tmdLXBjX-KGjAiKjdUreDPKnSJ0',
  authDomain: '...',
  databaseURL: 'https://chatroom-firebase-fecb3.firebaseio.com/',
  projectId: 'chatroom-firebase-fecb3',
  storageBucket: '...',
  messagingSenderId: '310072651314'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
