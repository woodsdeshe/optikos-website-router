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