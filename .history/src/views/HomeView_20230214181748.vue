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
  data() {
    return {
      cards: [
        {
          frontText: 'Card 1 front',
          backText: 'Card 1 back',
          currentSide: 'front',
        },
        {
          frontText: 'Card 2 front',
          backText: 'Card 2 back',
          currentSide: 'front',
        },
        {
          frontText: 'Card 3 front',
          backText: 'Card 3 back',
          currentSide: 'front',
        },
      ],
    };
  }
}
</script>
