<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    </head>
    <footer>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
      <button v-bind:class="item.style" @click="navigate(item.link)">{{ item.text }}</button>
    </footer>
  </template>

  <script>
  export default {
    data() {
        return {
            items: [
                {text:'Sign Up', link: '/signup' , style: 'signup-button'}
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
  }
  </style>