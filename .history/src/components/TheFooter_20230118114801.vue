<template>
    <footer>
        <img src="@/assets/logo-white.png" alt="optikos logo white" class="logo-white">
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
      <ul class="footer-button">
          <li v-for="item in items" :key="item.text">
            <button v-bind:class="item.style" @click="navigate(item.link)">{{ item.text }}</button>
          </li>
        </ul>
        <div
    </footer>
  </template>

<script>
export default {
  data() {
  return {
    items: [
      { text: 'Sign Up', link: '/signup' , style: 'signup-button'},
    ],
  };
},
methods: {
  navigate(link) {
    this.$router.push(link);
  },
},
};
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
    width: 100%;
    height: 295px;
    left: 0px;
    top: 3371px;
  }

  .logo-white{
   
  }

  ul{
    list-style: none;
  }

  .signup-button {
  background-color: #384D48;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  box-shadow: 0 4px 2px -2px black;
  margin-right: 10px;padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
}
.signup-button:hover {
    background-color: #E29578;
    color: black;
    font-weight: bold;
}
  </style>