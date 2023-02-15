<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <CardFlip <div class="card-container">
    <card :front-text="card.frontText" :back-text="card.backText" />
  </div>></CardFlip>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/LaguageSection.vue'
import CardFlip from '@/components/CardFlip.vue'
import TheFooter from '@/components/TheFooter.vue'

export default { 
  components: {
    NavBar,
    MainPage,
    CardFlip,
    TheFooter
  },
}
</script>

