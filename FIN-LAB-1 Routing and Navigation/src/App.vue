<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <span>
    <a class="navbar-brand" href="">
      <img src="./assets/logo.png" alt="shutter logo" width="30" height="24" class="d-inline-block align-text-top">
      Shutter
       </a>
       </span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script> 
import home from './components/home.vue'


export default {
  components: { home },
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gruppo');
span{
  font-family: Gruppo;
  font-style: italic;
  
}
</style>
