<template>
    <footer>
        <div class="footer-container">
        <img src="@/assets/logo-white.png" alt="optikos logo white" class="logo-white">
        <ul class="footer-button">
          <li v-for="item in items" :key="item.text">
            <button v-bind:class="item.style" @click="navigate(item.link)">{{ item.text }}</button>
          </li>
        </ul>
        <div class="info">
            <p>(333)333-3333</p>
            <p>test@test.com</p>
        </div>
        <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        </div>
    </footer>
  </template>

<script>
export default {
  data() {
  return {
    items: [
      { text: 'Sign Up', link: '/signup' , style: 'signup-button-footer'},
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

  footer{
    background-color:#006D77 ;
    width: 100%;
    height: 200px;
    left: 0px;
    top: 3371px;
    margin: -20px ;
  }

  ul{
    list-style: none;
  }

  .signup-button-footer {
  background-color: #384D48;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  box-shadow: 0 4px 2px -2px black;
  margin-right: 10px;padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-left: -1rem;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  grid-area: button;
  
  
}

.signup-button-footer :hover {
    background-color: #E29578;
    color: black;
    font-weight: bold;
}

p{
    color: white;
    font-family: 'Josefin Sans'
}

.footer-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "logo button contact"
    ;
    justify-items: center;

}

.logo-white{
    grid-area: logo;
    padding: 60px;
    height: 4em
}

.info{
    grid-area: contact;
    padding: 50px;
}


  </style>