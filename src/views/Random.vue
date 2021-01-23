<template>
  <div id="Random">
    <h1>{{ h1 }}</h1>
    <img class="randomImage" :src="image" />
    <ul>
      <button @click="randomPoke()">{{ button }}</button>
      <li class="h2">IT IS: {{ random.name }}</li>
      <li>Id:{{ random.id }}</li>
      <li>Height:{{ random.height }}</li>
      <li>Weight: {{ random.weight }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  el: "Random",
  data() {
    return {
      random:"",
      image: "",
      h1: "WHO IS THIS POKEMON?",
      button: "TRY",
    };
  },
  methods: {
    randomPoke() {
      
      let number = Math.ceil(Math.random() * 714);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => {
          this.random = response.data;
          this.image =
            response.data.sprites.other["official-artwork"].front_default;
          this.random.name= this.random.name.toUpperCase();
        });
    },
     scrollBehavior() {
     return { x: 0, y: 0 }
   }
  },
  beforeMount() {
    this.randomPoke();
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

