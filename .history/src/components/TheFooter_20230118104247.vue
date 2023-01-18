<template>
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
    methods
  }
</script>