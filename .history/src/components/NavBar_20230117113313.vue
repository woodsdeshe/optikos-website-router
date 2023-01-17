<template>
    <div class="navbar-component">
      <nav class="navbar">
        <img src="../assets/optikos-logo.png">
        <ul>
          <li v-for="item in items" :key="item.text">
            <button v-bind:class="item.style" @click="navigate(item.link)">{{ item.text }}</button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      items: [
        { text: 'Sign In', link: '/about', style: 'sign-in-button' },
        { text: 'Sign Up', link: '/contact' , style: 'sign-up-button'},
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

  @font-face {
    font-family: Selino;
    src: url(../assets/fonts/Selino.otf);
  }

  @font-face {
    font-family: 'Josefin Sans';
    src: url(../assets/fonts/JosefinSans-VariableFont_wght.ttf);
  }

nav ul {
  display: flex;
  color: #fff;
  border: none;
  padding: 1rem;
  display: block;
}
.contact-button {
  background-color: green;
  color: #fff;
  border: none;
  padding: 1rem;
  display: block;
}
</style>