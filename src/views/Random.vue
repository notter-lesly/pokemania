<template>
  <div id="Random">
     <div class="content">
      <h1>WHO IS THIS POKEMON?</h1>
      <img class="randomImage" :src="random.image" />
      <ul>
        <button @click="getRandomPokemon()">Try</button>
        <li class="h2">IT IS: {{ random.name }}</li>
        <li>Id: {{ random.id }}</li>
        <li>Height: {{ random.height }}</li>
        <li>Weight: {{ random.weight }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import getRandomPokemon from "../services/getRandomPokemon"
export default {
  el: "Random",
  mixins:[getRandomPokemon],
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#Random {
  display: flex;
  flex-direction: column;
  background-color: rgb(46, 46, 95);
  min-height: 100%;
}
#Random h1 {
  font-size: 4vw;
  padding-top: 11vw;
  text-align: center;
  color: rgba(255, 255, 255, 0.801);
  font-size: 2.5vw;
}
.h2 {
  font-size: 2vw;
  padding-top: 2vw;
  text-align: center;
  color: white;
  margin: 2vw;
}
#Random h3 {
  font-size: 2vw;
  padding-top: 1vw;
  padding-bottom: 2vw;
  text-align: center;
  color: white;
}
#Random p {
  color: rgb(179, 179, 179);
  font-size: 2vw;
  text-align: center;
}
#Random button {
  background-color: rgb(167, 110, 4);
  color: black;
  margin: auto;
  text-align: center;
  font-size: 2vw;
  font-family: montserrat;
  font-weight: bold;
  border-radius: 0.5vw;
  border: 0.1vw;
  cursor: pointer;
  width: 8vw;
  text-align: center;
}
#Random ul {
  text-align: center;
  line-height: 3vw;
}
.randomImage {
  width: 12vw;
  height: 12vw;
  border: none;
  cursor: auto;
  margin: auto;
  display: block;
  padding-top: 4vw;
  margin-top: 3vw;
  padding-bottom: 3vw;
}
.shinyImage {
  width: 12vw;
  height: 12vw;
  border: none;
  cursor: auto;
  margin: auto;
  display: block;
  padding-top: 4vw;
  margin-top: 3vw;
  padding-bottom: 8vw;
}
#Random li {
  font-size: 2vw;
  line-height: 5vw;
  text-align: center;
  color: rgb(156, 156, 156);
}
#Random button {
  margin: 2vw;
}
</style>

