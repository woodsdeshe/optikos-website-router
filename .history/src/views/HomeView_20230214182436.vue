<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <CardFlip></CardFlip>
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

