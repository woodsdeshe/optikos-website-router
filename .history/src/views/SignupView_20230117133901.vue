<template>
    <div>
      <form @submit.prevent="submitForm">
        <img class="logo" src="../assets/optikos-logo.png" alt="logo">
        
        <label>
          Email:
          <input type="email" v-model="form.email" required>
        </label>
        <br>
        <label>
          Password:
          <input type="password" v-model="form.password" required>
        </label>
        <br>
        <label>
          Confirm Password:
          <input type="password" v-model="form.confirmPassword" required>
        </label>
        <br>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      submitForm() {
        // validation
        if (this.form.password !== this.form.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        // send request to server
      }
    }
  }
  </script>

  <style>
    .logo{
        height: 4em;
display: flex;
align-items: center;
    }
  </style>