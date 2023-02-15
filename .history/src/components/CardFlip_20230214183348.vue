<template>
    <transition name="card-flip">
      <div class="card" v-if="currentSide === 'front'" @click="flipCard">
        <p>{{ frontText }}</p>
      </div>
      <div class="card" v-if="currentSide === 'back'" @click="flipCard">
        <p>{{ backText }}</p>
      </div>
    </transition>
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