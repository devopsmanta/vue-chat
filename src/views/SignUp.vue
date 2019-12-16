<template>
  <div class="container">
    <div class="card signup">
      <div class="body">
        <h2 class="card-title text-center">
          SignUp
        </h2>
        <form @submit.prevent="signup" class="text-center">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              name="name"
              v-model="name"
            />
            <br />
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              name="email"
              v-model="email"
            />
            <br />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              v-model="password"
            />
            <br />
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <button class="btn btn-primary">Sign Up</button>
          <p class="text-center">
            or go back to <router-link to="login">login</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errorText: null
    }
  },
  methods: {
    signup() {
      if (this.name && this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              user.updateProfile({
                displayname: this.name
              })
              this.$router.replace("chat")
            },
            err => {
              this.errorText = err.message
            }
          )
        // this.$router.push({ name: "Chat", params: { name: this.name } })
      } else {
        this.errorText = "Please enter credential!"
      }
    }
  }
}
</script>

<style>
.signup {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}
</style>
