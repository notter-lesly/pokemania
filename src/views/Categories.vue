<template>
  <div id="Categories">
    <h1>Pokemon's categories</h1>
    <ul class="categories" v-for="item in items" :key="item.name">
      <li>
        <h2>{{ item.name }}</h2>
        <img :src="item.img" />
        <p>{{ item.defense }}</p>
        <p>{{ item.ofense }}</p>
        <p>{{ item.contest }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import pikachu from "../assets/imgs/pika.png";
import gengar from "../assets/imgs/gengar.png";
import bulbasaur from "../assets/imgs/bulba.png";
import squirtle from "../assets/imgs/squirtle.png";
import charmander from "../assets/imgs/char.png";
export default {
  el: "Categories",
  data() {
    return {
    
      items: [
        {
          name: "Eletric Pokemons",
          img: pikachu,
          defense:
            "Electric is tied with the Normal type for having the fewest weaknesses",
          ofense:
            "The Electric type pairs well with other common attacking types, especially Ice because it is super-effective against Ground",
          contest:
            "When used in Contests, Electric-type moves tend to be Cool moves, though they can also be other conditions.",
        },
        {
          name: "Ghost Pokemons",
          img: gengar,
          defense: "Ghost is the only type with more than one immunity.",
          ofense: "Ghost is tied with Dragon for the least resisted type",
          contest:
            "In Contests, Ghost-type moves are typically Clever moves, but some may be any of the other Contest conditions.",
        },
        {
          name: "Grass Pokemons ",
          img: bulbasaur,
          defense:
            "Grass types are tied with Rock in having the most weaknesses out of all types with five",
          ofense:
            "Grass-type attacks are resisted by seven types, so they're tied with Bug as the most resisted type.",
          contest:
            "In contests, Grass-type moves are typically Clever moves, but can also be any of the other four contest conditions.",
        },
        {
          name: "Water Pokemons",
          img: squirtle,
          defense:
            "Water-type Pokémon fares well defensively, being weak to only Electric and Grass-type moves.",
          ofense:
            "Almost all Water-type Pokémon can learn strong Ice-type moves to deal with Dragon and Grass types.",
          contest:
            "In Contests, Water-type moves are typically Beautiful moves, but they can be from any other Contest type.",
        },
        {
          name: "Fire Pokemons",
          img: charmander,
          defense:
            "Very few Fire-type Pokémon have a secondary type that negates their weakness to Water-type attacks",
          ofense: "Fire is super effective against Grass and Bug",
          contest:
            "In Contests, Fire-type moves are typically Beautiful moves.",
        },
      ],
    };
  },
};
</script>

<style scoped>
#Categories {
  background-color: rgb(46, 46, 95);
}
#Categories h1 {
  padding-top: 10vw;
  text-align: center;
  font-size: 4vw;
  color: rgba(255, 255, 255, 0.801);
  font-family: Montserrat;
}
.categories {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.categories li {
  padding: 4vw;
}
.categories img {
  margin: auto;
  display: block;
  border: none;
  padding: 2vw;
  cursor: auto;
  width: 12vw;
  height: 12vw;
}
.categories h2 {
  color: rgb(167, 110, 4);
  font-family: Montserrat;
  font-size: 3.5vw;
  font-weight: bold;
  text-align: center;
}
.categories p {
  font-size: 2.5vw;
  text-align: center;
  margin-right: 15vw;
  margin-left: 15vw;
  padding: 2vw;
  color: rgb(197, 197, 197);
}
</style>