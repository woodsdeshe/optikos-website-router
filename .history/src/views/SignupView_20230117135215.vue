<template>
    <div class="container">
      <form @submit.prevent="submitForm" class="form">
        <img class="logo" src="../assets/optikos-logo.png" alt="logo">
        <h1>Sign Up</h1>
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

@font-face {
    font-family: Selino;
    src: url(../assets/fonts/Selino.otf);
  }

@font-face {
    font-family: 'Josefin Sans';
    src: url(../assets/fonts/JosefinSans-VariableFont_wght.ttf);
  }

.logo{
    height: 4em;
    display: flex;
    align-items: center;
    }

    h1{
        font-family: Selino;
        text-transform: uppercase;
    }

    div{
        background-color: #83C5BE;
    }
  </style>