<template>
    <div class="navbar">
      <nav>
        <img 
        <ul class="nav-right">
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
        { text: 'Sign In', link: '/about', style: 'primary-button' },
        { text: 'Sign Up', link: '/contact' , style: 'secondary-button'},
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

nav {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}
nav li {
  display: inline-block;
}

.navbar-right {
  margin-left: auto;
}

nav button{
  margin-right: 10px;padding: 0.5rem 1rem;
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
  border: 2px solid #384D48;
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