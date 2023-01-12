<template>
    <div class="navbar">
    <img src="../assets/optikos-logo.png" alt="optikos text logo">
      
      <div class="navbar-buttons">
      <button v-for="button in buttons" :key="button.id" :class="[button.style,'nav-button']" @click="button.action">
        {{ button.text }}
      </button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttons: [
        { id: 1, text: 'Login', style: 'primary-button', action: () => console.log('Login clicked') },
        { id: 2, text: 'Sign Up', style: 'primary-button', action: () => console.log('Sign Up clicked') },
    ],
   }
 }
}
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: aquamarine;
  }
  
  .navbar-buttons {
  display: flex;
  margin-left: auto;
}

.nav-button {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  margin-left: 0.5rem;
}

.primary-button {
  background-color: #4CAF50;
  color: white;
}
.primary-button:hover {
  background-color: #3e8e41;
}

.secondary-button {
  background-color: #007bff;
  color: white;
}
.secondary-button:hover {
  background-color: #0069d9;
}
  </style>