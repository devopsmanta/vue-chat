import Vue from "vue"
import Router from "vue-router"
import firebase from "firebase"
import Login from "./views/Login.vue"
import SignUp from "./views/SignUp.vue"
import Chat from "./views/Chat.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      meta: {
        requiresAuth: true
      },
      // beforeEnter: (to, from, next) => {
      //   if (to.params.name) {
      //     next()
      //   } else {
      //     next({ name: "Login" })
      //   }
      // }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next("login")
  else if (!requiresAuth && currentUser) next("chat")
  else {
    next()
  }
})

export default router
