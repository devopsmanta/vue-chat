import Vue from "vue"
import firebase from "firebase"

import App from "./App.vue"
import router from "./router"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import VueChatScroll from "vue-chat-scroll"

Vue.config.productionTip = false

let app = ""

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCI8ru4tmdLXBjX-KGjAiKjdUreDPKnSJ0",
  authDomain: "chatroom-firebase-fecb3.firebaseapp.com",
  databaseURL: "https://chatroom-firebase-fecb3.firebaseio.com",
  projectId: "chatroom-firebase-fecb3",
  storageBucket: "chatroom-firebase-fecb3.appspot.com",
  messagingSenderId: "310072651314"
}
firebase.initializeApp(firebaseConfig)

Vue.use(VueChatScroll)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app")
  }
})
