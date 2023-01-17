<template>
    <div id="login">
      <form v-on:submit.prevent="login">
        <h1>Please Sign In</h1>
        <div id="fields">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            v-model="user.username"
            required
            autofocus
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="user.password"
            required
          />
          <div><button type="submit">Sign in</button></div>
        </div>
        <hr/>
        Need an account? <router-link v-bind:to="{ name: 'register' }">Register!</router-link>
      </form>
    </div>
  </template>

  <script>
  export default {
  name: "LoginView",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  };
}
</script>