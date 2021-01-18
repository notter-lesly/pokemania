<template>
  <div id="myRandom">
    <h1>{{ h1 }}</h1>

    <img class="randomImage" :src="image" />

    <ul>
      <button @click="randomPoke()">{{ button }}</button>
      <h2>IT IS: {{ random.name }}</h2>
      <li>Id:{{ random.id }}</li>
      <li>Height:{{ random.height }}</li>
      <li>Weight: {{ random.weight }}</li>
    </ul>

    <div class="line"></div>
    <h2>SHINY VERSION</h2>

    <img class="randomImage" :src="image2" />
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      poke1: "",
      subtitle: "CHOOSE YOUR POKEMON",
      link: "detailedPage.html",
      name: "",
      companyName: "PokeMania",
      random: "",
      image: "",
      image2: "",
      h1: "WHO IS THIS POKEMON?",
      button: "TRY",
      home: "pokemania.html",
    };
  },

  methods: {
    randomPoke() {
      let number = Math.ceil(Math.random() * 151);

      fetch("https://pokeapi.co/api/v2/pokemon/" + number)
        .then((response) => response.json())
        .then((random) => {
          this.random = random;
          this.image = random.sprites.front_default;
          this.image2 = random.sprites.front_shiny;
          this.random.name = this.random.name.toUpperCase();
        });
    },

    searchPoke(name) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then((response) => response.json())
        .then((poke1) => {
          this.poke1 = poke1;
          this.image = poke1.sprites.front_default;
          this.poke1.name = this.poke1.name.toUpperCase();
        });
    },
  },
  beforeMount() {
    this.randomPoke();
  },
};
</script>

<style>
header {
  width: 100%;
}

#myRandom {
  background-color: rgb(46, 46, 95);
}
#myRandom h1 {
  font-size: 4vw;
  padding-top: 5vw;
  text-align: center;
  color: rgba(255, 255, 255, 0.801);
}

#myRandom h2 {
  font-size: 3vw;
  padding-top: 2vw;
  text-align: center;
  color: white;
}
#myRandom button {
  background-color: rgb(250, 133, 0);
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
}

#myRandom ul {
  text-align: center;
  line-height: 3vw;
}

.randomImage {
  width: 15vw;
  height: 15vw;
  border: none;
  cursor: auto;
  margin: auto;
  display: block;
  padding-top: 4vw;
  margin-top: 3vw;
}

#myRandom li {
  font-size: 2vw;
  list-style: none;
  line-height: 5vw;
  text-align: center;
  color: rgb(156, 156, 156);
}

.line {
  border: 1px solid white;
  width: 50%;
  display: block;
  margin: auto;
}

@media only screen and (min-width: 600px) {
  footer {
    min-height: 10vw;
  }
  #myRandom {
    min-height: 100vh;
  }
  #myRandom h1 {
    font-size: 4vw;
    padding-top: 10vw;
  }
  .randomImage {
    width: 20vw;
    height: 20vw;
  }

  footer {
    min-height: 10vw;
  }
  #myRandom {
    min-height: 50vh;
  }
}

@media only screen and (max-width: 600px) {
  header a {
    font-size: 7vw;
  }

  .randomImage {
    width: 30vw;
    height: 30vw;
  }

  #myRandom {
    min-height: 100vh;
  }
  #myRandom h1 {
    font-size: 4vw;
    padding-top: 30vw;
  }

  .randomImage {
    padding: 10vw;
  }
}
</style>
