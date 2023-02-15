<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <div class="card-container">
      <card :front-text="card.frontText" :back-text="card.backText"></ca>
    </div>
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
  data() {
    return {
      card: {
        frontText: 'Card front',
        backText: 'Card back',
        currentSide: 'front',
      },
    };
  },
}
</script>

<style>
.card-container {
  display: flex;
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
