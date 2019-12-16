<template>
  <div class="container">
    <div class="card login">
      <div class="body">
        <h2 class="card-title text-center">
          Login
        </h2>
        <div class="text-center">
          <div class="form-group">
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
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>
          <button @click="login" class="btn btn-primary">Enter Chat</button>
          <p>
            or Sign In with <br />
            <button @click="googleLogin" class="social-button">
              <img
                alt="Google Logo"
                src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
              />
            </button>
            <button @click="facebookLogin" class="social-button">
              <img
                alt="Facebook Logo"
                src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"
              />
            </button>
          </p>
          <p>
            You don't have an account? You can
            <router-link to="/signup">create one</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "home",
  data() {
    return {
      email: "",
      password: "",
      errorText: null
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              var currentUser = firebase.auth().currentUser

              currentUser.updateProfile({
                displayName: this.name
              })
              this.$router.push({ name: "Chat" })
            },
            err => {
              alert("Oops. " + err.message)
            }
          )
      } else {
        this.errorText = "Please enter credential!"
      }
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope("profile")
      provider.addScope("email")

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace("chat")
        })
        .catch(err => {
          alert("Oops. " + err.message)
        })
    },
    facebookLogin() {
      const provider = new firebase.auth.FacebookAuthProvider()
      provider.addScope("user_birthday")
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace("chat")
        })
        .catch(err => {
          alert("Oops. " + err.message)
        })
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
}
.social-button {
  width: 50px;
  bottom: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
  margin-left: 5px;
  margin-right: 5px;
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgb(0, 0, 0, 1);
}
.social-button img {
  width: 100%;
}
</style>
