<template>
    <div class="card-two">
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
    name: 'CardTwo',
  };
  </script>
  
  <style scoped>
  .card-two {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    perspective: 1000px;
    position: relative;
    margin: 10px;
    display: inline-block;
    padding: 10px;
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
  