<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/LaguageSection.vue'
import TheFooter from '@/'

export default { 
  components: {
    NavBar,
    MainPage
  }
}
</script>
