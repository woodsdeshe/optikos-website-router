<template>
    <div class="container">
      <form v-on:submit.prevent="login" class="form">
        <div class="logo-container">
        <router-link v-bind:to="{name: 'home'}"></router-link>
            <img class="logo" src="../assets/optikos-logo.png" alt="logo">
        </div>
        <h2>Sign In</h2>
        <div id="fields">
          <label for="username">Username:
            <input
            type="text"
            id="username"
            placeholder="Username"
            v-model="user.username"
            required
            autofocus
          /></label>
          
          <label for="password">Password:
            <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="user.password"
            required
          />
          </label>
          
          <div><button type="submit" class="signin">Sign in</button></div>
        </div>
        <br>
        <p>Need an account? <router-link v-bind:to="{ name: 'register' }">Register!</router-link></p>
      </form>
    </div>
  </template>

  <script>
  import authService from '../services/AuthService';
  export default {
  name: "LoginView",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;
          if (!response) {
            alert(error);
          } else if (response.status === 401) {
            alert("Invalid username and password!");
          } else {
            alert(response.message);
          }
        });
    },
  },
}
</script>

<style>

</style>