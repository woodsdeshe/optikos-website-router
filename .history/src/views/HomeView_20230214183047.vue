<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <Card :front-text="card.frontText" :back-text="card.backText"
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/LaguageSection.vue'
import Card from '@/components/CardFlip.vue'
import TheFooter from '@/components/TheFooter.vue'

export default { 
  components: {
    NavBar,
    MainPage,
    Card,
    TheFooter
  },
}
</script>

