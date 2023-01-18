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
import TheFooter from '@/components/TheFooter.vue'

export default { 
  components: {
    NavBar,
    MainPage,
    TheFooter
  }
}
</script>
