<template>
  <div class="pokemon-type-list">
    <h3>Types de Pokémon et leurs occurrences :</h3>
    <ul>
      <li v-for="(count, type) in typeCounts" :key="type" :style="{ backgroundColor: getTypeColor(type) }" class="type-item">
        <span class="type-name" >{{ type }} :</span> 
        <span class="type-count">{{ count }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pokemon-type-list {
  font-family: 'Arial', sans-serif;
}

.type-item {
  list-style: none;
  margin-bottom: 8px;
  border: 1px solid black;
  margin-left: 500px;
  margin-right: 500px;
  color: #000;
}
.type-name {
  font-weight: bold;
  margin-right: 8px;
}

.type-count {
  color: #000;
  font-weight: bold;

}


</style>

<script>
export default {
  name: 'ListeTypesPokemon',
  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  },
  methods: {
    getTypeColor(type) {
      switch (type) {
        case 'Plante':
          return 'green';
        case 'Feu':
          return 'red';
        case 'Psy':
          return 'palevioletred';
        case 'Poison':
          return 'purple';
        case 'Combat':
          return 'brown';
        case 'Vol':
          return 'skyblue';
        case 'Insecte':
          return 'greenyellow';
        case 'Fée':
          return 'pink'
        case 'Roche':
          return 'peru';
        case 'Électrik':
          return 'gold';
        case 'Spectre':
          return 'blueviolet'
        case 'Acier':
          return 'lightgrey';
        case 'Glace':
          return 'aqua';
        case 'Dragon':
          return 'crimson';
        case 'Ténèbres':
          return '#444';
        case 'Sol':
          return 'orange';
        case 'Eau':
          return 'blue';

        
        default:
          return 'gray';
      }
    }
  },
  computed: {
    typeCounts() {
      const counts = {};
      this.pokemonList.forEach(pokemon => {
        const type = pokemon.apiTypes[0].name; 
        if (!counts[type]) {
          counts[type] = 0;
        }
        counts[type]++;
      });
      return counts;
    }
  }
};
</script>
