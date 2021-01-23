<template>
  <div id="Home">
    <h1 class="subtitle">{{ subtitle }}</h1>
    <button value="name" @click="sortByName()">Name</button>
    <button value="value" @click="sortByNumber()">Number</button>
    <div class="pokes">
      <section v-for="pokemon in pokemons" :key="pokemon.name">
        <div>
          <router-link :to="{ name: 'Detail', params: { name: pokemon.name } }">
            <img :src="pokemon.image" />
            <h2>{{ pokemon.name }}</h2>
            <h2>{{ pokemon.number }}</h2>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import getPokemon from "../services/getPokemon";
export default {
  el: "Home",
  mixins: [getPokemon],
  /* renders the getPokemon function before assembling the page*/
  created() {
    this.getPokemon();
  },
};
</script>

<style scoped>
#Home {
  background-color: rgb(46, 46, 95);
}
.subtitle {
  text-align: center;
  padding-top: 10vw;
  padding-bottom: 2vw;
  margin-bottom: 3vw;
  font-size: 3vw;
  color: rgba(255, 255, 255, 0.801);
  font-family: Montserrat;
}
button {
  width: 8vw;
  background-color: rgb(167, 110, 4);
  color: black;
  margin-left: 4vw;
  border: solid black 0.1vw;
  border-radius: 0.2vw;
  font-family: montserrat;
  font-weight: bold;
  font-size: 1vw;
  text-align: center;
  margin-bottom: 2vw;
}
button :focus {
  background-color: pink;
}
.pokes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pokes h2 {
  text-align: center;
  color: rgb(150, 148, 148);
  font-size: 1.5vw;
  font-family: Montserrat;
  padding-bottom: 1vw;
}
.pokes img {
  margin: 3vw;
  width: 12vw;
  height: 12vw;
  cursor: pointer;
  padding: 3vw;
  border: 0.2vw solid black;
}
@media only screen and (max-width: 600px) {
  .pokes img {
    margin: 10vw;
    width: 15vw;
    height: 15vw;
  }
}
@media only screen and (min-width: 600px) {
  section img {
    padding: 30vw;
    width: 15vw;
    height: 15vw;
  }
}
@media only screen and (min-width: 768px) {
  section img {
    margin: 8vw;
    width: 15vw;
    height: 15vw;
  }
}
section img {
  margin: 3vw;
  width: 12vw;
  height: 12vw;
  cursor: pointer;
  padding: 3vw;
  border: 0.2vw solid black;
}
</style>
