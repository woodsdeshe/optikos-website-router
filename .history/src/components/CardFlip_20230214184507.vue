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
  }
  
  .card-front,
  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid #ccc;
    padding: 1rem;
  }
  
  .card-back {
    transform: rotateY(180deg);
  }
  
  .flipped .card-front {
    transform: rotateY(180deg);
  }
  
  .flipped .card-back {
    transform: rotateY(0);
  }
  </style>
  