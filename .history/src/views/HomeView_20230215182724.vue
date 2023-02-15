<template>
  <div class="home">
    <NavBar></NavBar>
    <MainPage></MainPage>
    <div class="card-container">
      <card-two>
      <template v-slot:front>
        <h2>Card 1 Front</h2>
        <img src="@/assets/reading-girl.png" alt="Front image" >
      </template>
      <template v-slot:back>
        <h2>Card 1 Back</h2>
        <p>Some content for card 1 back</p>
      </template>
    </card-two>
    <card-two>
      <template v-slot:front>
        <h2>Card 2 Front</h2>
        <p>Some content for card 2 front</p>
      </template>
      <template v-slot:back>
        <h2>Card 2 Back</h2>
        <p>Some content for card 2 back</p>
      </template>
    </card-two>
    <card-two>
      <template v-slot:front>
        <h2>Card 3 Front</h2>
        <p>Some content for card 3 front</p>
      </template>
      <template v-slot:back>
        <h2>Card 3 Back</h2>
        <p>Some content for card 3 back</p>
      </template>
    </card-two>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import MainPage from '@/components/LaguageSection.vue'
import CardTwo from '@/components/CardFlip2.vue'
import TheFooter from '@/components/TheFooter.vue'

export default { 
  components: {
    NavBar,
    MainPage,
    CardTwo,
    TheFooter
  },
}
</script>

<style>
.card-container {
  display: flex;
  justify-content: space-around;
  background-color: #FFDDD2;

}

.card-two {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 1rem;
  background-color: white;
}

.card-flip-enter-active,
.card-flip-leave-active {
  transition: transform 0.5s;
}

.card-flip-enter,
.card-flip-leave-to {
  transform: rotateY(-180deg);
}

.card-two p, h2{
  color: black;
  text-align: center;
}


</style>
