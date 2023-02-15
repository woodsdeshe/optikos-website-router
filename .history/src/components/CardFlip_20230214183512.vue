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
    props: {
      frontText: {
        type: String,
        required: true,
      },
      backText: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        currentSide: 'front',
      };
    },
    methods: {
      flipCard() {
        this.currentSide = this.currentSide === 'front' ? 'back' : 'front';
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