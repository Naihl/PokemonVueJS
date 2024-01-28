import { createRouter, createWebHistory } from 'vue-router';
import DetailsPokemon from '../components/DetailsPokemon.vue';
import Pokedex from '../components/Pokedex.vue';

const routes = [
  {
    path: '/',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/:id',
    name: 'DetailsPokemon',
    component: DetailsPokemon,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
