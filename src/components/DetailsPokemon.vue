<template>
    <div v-if="pokemon">
      <div>
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" alt="Image de Pokémon">
        <p>Hauteur: {{ pokemon.height * 10 }} cm | Poids: {{ pokemon.weight / 10 }} kg</p>
        <p>Statistiques de base:</p>
        <ul>
          <li v-for="(baseStat, index) in pokemon.stats" :key="index">
            {{ baseStat.stat.name }}: {{ baseStat.base_stat }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Chargement des détails du Pokémon...</p>
    </div>
  </template>

  <style scoped>
    img {
        width: 200px;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 8px;
        border: 1px solid #ccc;
    }

    li:last-child {
        margin-bottom: 0;
    }

    p {
        margin-bottom: 8px;
    }

    h2 {
        margin-bottom: 16px;
    }

    div {
        margin-bottom: 32px;
        text-align: center;
        width: 400px;
        border: 1px solid #ccc;
        padding: 16px;
    }

    div:last-child {
        margin-bottom: 0;
        border: none;
        width: auto;
    }

  

    

   
   

    
    </style>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pokemon: null,
      };
    },
    watch: {
      '$route'() {
        this.getPokemonDetails();
      },
    },
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    mounted() {
      this.getPokemonDetails();
    },
    methods: {
      getPokemonDetails() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
          .then(response => {
            this.pokemon = {
              name: response.data.name,
              sprites: response.data.sprites,
              height: response.data.height,
              weight: response.data.weight,
              stats: response.data.stats, // Nouvelle ligne pour récupérer les statistiques de base
            };
          })
          .catch(error => console.error(error));
      },
    },
  };
  </script>

