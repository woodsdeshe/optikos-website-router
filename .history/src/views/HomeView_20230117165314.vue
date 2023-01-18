<template>
  <div class="home">
    <NavBar></NavBar>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
