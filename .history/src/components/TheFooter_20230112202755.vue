<template>
    <div class="footer-component">
      <footer>
        <div class="container">
          <p>Copyright &copy; {{ currentYear }} {{ companyName }}</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        companyName: 'Optikos',
        currentYear: new Date().getFullYear(),
      }
    }
  }
  </script>
  
  <style>
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem 0;
  }
  </style>