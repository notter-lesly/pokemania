<template>
  <div id="myApp">
    <div id="myRandom">
      <h1>{{ h1 }}</h1>
      <div class="image">
        <img class="randomImage" :src="image" />
      </div>
      <ul>
        <button @click="randomPoke()">{{ button }}</button>
        <h1>IT IS: {{ random.name }}</h1>
        <li>Id:{{ random.id }}</li>
        <li>Height:{{ random.height }}</li>
        <li>Weight: {{ random.weight }}</li>
      </ul>

      <footer>
        <h2>Site map</h2>
        <div class="footerOrg">
          <ul>
            <li><a> Home</a></li>
            <li><a> Pokemons</a></li>
            <li><a> Random Pokemon</a></li>
          </ul>

          <ul>
            <li>Contact us</li>
            <li>Adress: noonono</li>
            <li>Telephone: 00000</li>
          </ul>
        </div>
      </footer>
    </div>
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
        });
    },

    searchPoke(name) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then((response) => response.json())
        .then((poke1) => {
          this.poke1 = poke1;
          this.image = poke1.sprites.front_default;
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
  position: fixed;
  margin: auto;
  background-color: white;
  height: 3.5vw;
  display: flex;
  justify-content: space-between;
}

#myApp {
  background-color: rgb(46, 46, 95);
}

#myRandom {
  background-color: rgb(46, 46, 95);
  display: flex;
  flex-direction: column;
}
#myRandom h1 {
  padding-top: 5vw;
  text-align: center;
  color: white;
}
#myRandom button {
  width: 7vw;
  background-color: rgb(255, 255, 255);
  margin: auto;
  text-align: center;
  color: black;
  font-family: montserrat;
  font-weight: bold;
  border-radius: 0.5vw;
  cursor: pointer;
}

#myRandom ul {
  text-align: center;
  line-height: 3vw;
}

.image {
  margin: auto;
  border: none;
}

.randomImage {
  width: 15vw;
  height: 15vw;
  border: none;
  cursor: auto;
}

footer {
  background-color: black;
  color: white;
  font-size: 1.5vw;
  font-family: montserrat;
  line-height: 2.5vw;
  width: 100vw;
}
footer h2 {
  text-decoration: underline;
}

footer a,
li {
  text-decoration: none;
  color: rgb(156, 151, 151);
}

.footerOrg {
  display: flex;
  justify-content: space-around;
}
</style>
