<template>
  <label for="pokemonCount">Nombre de Pokémon :</label>
  <input type="number" id="pokemonCount" v-model="numberOfPokemons" />


  <select v-model="selectedGeneration">
      <option value="">Toutes les générations</option>
      <option v-for="gen in generations" :key="gen" :value="gen">
        Génération {{ gen }}
      </option>
    </select>

  <button @click="fetchPokemons">Afficher les Pokémon</button>
  <ListeTypesPokemon :pokemonList="pokemonList" />


  <div class="pokedex">
    <pokemon-card
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      :pokemon-data="pokemon"
    />
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from './Pokemon.vue';
import ListeTypesPokemon from './ListeTypesPokemon.vue';

export default {
  components: {
    PokemonCard,
    ListeTypesPokemon,

  },
  data() {
    return {
      pokemonList: [],
      numberOfPokemons: 20, 
      generations: [1, 2, 3, 4, 5, 6, 7, 8],
      selectedGeneration: '',

    };
  },
  methods: {
  fetchPokemons() {
    let apiUrl = `https://pokebuildapi.fr/api/v1/pokemon`;

      if (this.selectedGeneration) {
        apiUrl += `/generation/${this.selectedGeneration}`;
      }

      axios.get(apiUrl)
        .then((response) => {
          this.pokemonList = response.data.slice(0, this.numberOfPokemons);
        })
        .catch((error) => {
          console.log(error);
        });
  },
},
mounted() {
    this.fetchPokemons(); 
  },
};
</script>

<style scoped>
.pokedex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
}

label {
  margin-bottom: 10px;
}

input {
  padding: 5px;
  margin-bottom: 10px;

}

button {
  padding: 10px;
  background-color: #4c87af;
  color: white;
  border: none;
  cursor: pointer;

}

button:hover {
  background-color: #6caad3;
}</style>
