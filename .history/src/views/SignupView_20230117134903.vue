<template>
    <div v-bind:style="{'background-color': firstBgColor}">
        <div v-bind:style="{'background-color': secondBgColor}">
            <form @submit.prevent="submitForm">
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
        firstBgColor: '#83C5BE',
        secondBgColor: '#fffff'
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

    form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #ccc;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
  </style>