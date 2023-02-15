<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <div>
    <card>
      <template v-slot:front>
        <h2>Front of card</h2>
        <p>Some content for the front of the card</p>
      </template>
      <template v-slot:back>
        <h2>Back of card</h2>
        <p>Some content for the back of the card</p>
      </template>
    </card>
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
  margin: 1rem;
}

.card-flip-enter-active,
.card-flip-leave-active {
  transition: transform 0.5s;
}

.card-flip-enter,
.card-flip-leave-to {
  transform: rotateY(-180deg);
}

.card p {
  color: black;
}


</style>
