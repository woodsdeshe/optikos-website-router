<template>
    <div class="navbar">
    <img src="../assets/optikos-logo.png" alt="optikos text logo">
    <ul>
      <li v-for="item in items" :key="item.text">
        <button @click="navigate(item.link)">{{ item.text }}</button>
      </li>
    </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      items: [
        { text: 'Home', link: '/', style: 'home-button'},
        { text: 'About', link: '/about', style: 'sign' },
        { text: 'Contact', link: '/contact' },
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

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    box-shadow: 0 4px 2px -2px gray;
  }
  
  .navbar-buttons {
  display: flex;
  margin-left: auto;
}

.nav-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
}

.primary-button {
  background-color: white;
  font-family: 'Josefin Sans';
  font-size: 13px;
  font-weight: bold;
  color: #384D48;
  border: 2px solid #384D48;
  box-shadow: 0 4px 2px -2px gray;
}
.primary-button:hover {
  border: none;
  background-color: #83C5BE;
  color: black;
}

.secondary-button {
  background-color: #384D48;
  color: white;
  font-family: 'Josefin Sans';
  box-shadow: 0 4px 2px -2px gray;
}
.secondary-button:hover {
    background-color: #E29578;
    color: black;
    font-weight: bold;
}
  </style>