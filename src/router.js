import Vue from "vue"
import Router from "vue-router"
import Login from "./views/Login.vue"
import SignUp from "./views/SignUp.vue"
import Chat from "./views/Chat.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next()
        } else {
          next({ name: "Login" })
        }
      }
    }
  ]
})
