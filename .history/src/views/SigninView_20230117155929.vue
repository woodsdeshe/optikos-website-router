<template>
    <div class="container">
      <form @submit.prevent="submitForm" class="form">
        <div class="logo-container">
            <img class="logo" src="../assets/optikos-logo.png" alt="logo">
        </div>
        <h2>Sign Up</h2>
        <label>
          Email:
          <input type="email" placeholder="Email" v-model="form.email" required>
        </label>
        <br>
        <label>
          Password:
          <input type="password" placeholder="Password" v-model="form.password" required>
        </label>
        <br>
        <label>
          Confirm Password:
          <input type="password" placeholder="Confirm Password" v-model="form.confirmPassword" required>
        </label>
        <br>
        <button type="submit" class="signup">Sign Up</button>
        <p>Have an account?<router-link >Sign In!</router-link></p>
      </form>
    </div>
  </template>