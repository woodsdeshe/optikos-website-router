<template>
    <footer>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
      <button @click="signUp()">Sign Up</button>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
      signUp() {
        // Add code for sign up functionality here
      }
    }
  }
  </script>
  
  <style>
  .social-icons {
    display: flex;
    justify-content: center;
  }
  
  .social-icons a {
    margin-right: 10px;
    font-size: 30px;
    color: #333;
  }

  footer{
    background-color:#006D77 ;
    position: absolute;
    width: 1440px;
    height: 295px;
    left: 0px;
    top: 3371px;
  }

  
  </style>