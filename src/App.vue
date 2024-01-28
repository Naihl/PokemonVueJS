<script setup>
import Pokedex from './components/Pokedex.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>
