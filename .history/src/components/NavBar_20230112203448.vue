<template>
    <div class="navbar-component">
      <nav>
        <img src="../assets/optikos-logo.png"></img>
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
        { text: 'Home', link: '/', style: 'home-button'},
        { text: 'About', link: '/about', style: 'sign-in-button' },
        { text: 'Contact', link: '/contact' , style: 'sign-up-button'},
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

  .navbar{
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
}
nav {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
}
nav li {
  display: inline-block;
}
.home-button {
  background-color: blue;
  color: #fff;
  border: none;
  padding: 1rem;
  display: block;
}
.about-button {
  background-color: red;
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