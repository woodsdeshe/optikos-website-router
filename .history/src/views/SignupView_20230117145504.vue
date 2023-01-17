<template>
    <div class="container">
      <form @submit.prevent="submitForm" class="form">
        <img class="logo" src="../assets/optikos-logo.png" alt="logo">
        <h2>Sign Up</h2>
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
    justify-content: space-around;
 }

h2{
    font-family: Selino;
    text-transform: uppercase;
}

label {
    font-family: 'Josefin Sans';
    padding: 15px;
}

button{
    border-radius: 5px;
    font-family: 'Josefin Sans';
    color: white;
    background-color: #384D48;
    border-color: #384D48;
    width: 309px;
    height: 57px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem auto;
}

.container:not(.form) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

    
}

.form {
  width: 350px;
  height: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ccc;

}

input{
    width: 309px;
    height: 56px;
    border-radius: 8px;
}


  </style>