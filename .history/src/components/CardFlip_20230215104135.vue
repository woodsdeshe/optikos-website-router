<template>
    <div class="card" @click="flipCard">
      <div class="card-front">
        <slot name="front"></slot>
      </div>
      <div class="card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    methods: {
      flipCard() {
        this.$el.classList.toggle('flipped');
      },
    },
  };
  </script>
  
<style>
.card {
  position: relative;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 1s;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}

.card-two:hover .card-front {
  transform: rotateY(-180deg);
}

.card-two:hover .card-back {
  transform: rotateY(0deg);
}
</style>
