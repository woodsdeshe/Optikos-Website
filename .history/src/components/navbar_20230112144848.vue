<template>
    <div class="navbar">
    <img src="../assets/optikos-logo.png" alt="optikos text logo">
      <ul class="navbar-nav">
        <li v-for="link in links" :key="link.id" class="nav-item">
          <router-link :to="link.path" class="nav-link">{{ link.text }}</router-link>
        </li>
      </ul>
      <div class="navbar-buttons">
      <button v-for="button in buttons" :key="button.id" class="nav-button" @click="button.action">
        {{ button.text }}
      </button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        links: [
          { id: 1, text: 'Home', path: '/' },
          { id: 2, text: 'About', path: '/about' },
          { id: 3, text: 'Contact', path: '/contact' },
        ],
        buttons: 
        { id: 1, text: 'Login', action: () => console.log('Login clicked') },
        { id: 2, text: 'Sign Up', action: () => console.log('Sign Up clicked') 
      };
    },
  };
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: aquamarine;
  }
  
  .navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin-right: 1rem;
  }
  
  .nav-link {
    color: #333;
    text-decoration: none;
  }
  </style>