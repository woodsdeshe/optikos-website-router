<template>
    <div class="navbar">
      <nav>
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
nav button{
  margin-right: 10px;
}

</style>