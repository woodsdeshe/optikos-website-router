<template>
    <div class="container">
      <form @submit.prevent="submitForm" class="form">
        <div class="logo-container">
            <router-link v-bind:to="{name: 'home'}"></router-link>
            <img class="logo" src="../assets/optikos-logo.png" alt="logo">
        </div>
        <h2>Sign Up</h2>
        <label>
          Email:
          <input type="email" placeholder="Email" v-model="form.email" required>
        </label>
        <br>
        <label>
          Password:
          <input type="password" placeholder="Password" v-model="form.password" required>
        </label>
        <br>
        <label>
          Confirm Password:
          <input type="password" placeholder="Confirm Password" v-model="form.confirmPassword" required>
        </label>
        <br>
        <button type="submit" class="signup">Sign Up</button>
        <p>Have an account?<router-link >Sign In!</router-link></p>
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
        },
        link: '/'
      }
    },
    methods: {
      submitForm() {
        // validation
        if (this.form.password !== this.form.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
      }
    },
    components: {

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
    justify-content: space-around;
 }

 .logo-container{
    display: flex;
    justify-content: center;
    align-items: center;
 }

  h2{
    font-family: Selino;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

label {
    font-family: 'Josefin Sans', sans-serif;

}

.signup{
    border-radius: 5px;
    font-family: 'Josefin Sans';
    color: white;
    background-color: #384D48;
    border-color: #384D48;
    width: 315px;
    height: 57px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 30px 15px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #83C5BE;
    
}

.form {
  width: 350px;
  height: 550px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ccc;
background-color: white;
}

input{
    width: 309px;
    height: 57px;
    border-radius: 8px;
    margin: 5px 15px;
    font-family: 'Josefin Sans', sans-serif;
}

p{
   padding: auto;
   display: flex;
   justify-content: center;
}


  </style>