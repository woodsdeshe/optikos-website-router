<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <CardFlip>
      <div class="card-container">
    <card v-for="(card, index) in cards" :key="index" :front-text="card.frontText" :back-text="card.backText" />
  </div>
    </CardFlip>
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

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  position: relative;
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.card-flip-enter-active,
.card-flip-leave-active {
  transition: transform 0.5s;
}

.card-flip-enter,
.card-flip-leave-to {
  transform: rotateY(-180deg);
}
</style>