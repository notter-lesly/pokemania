<template>
  <div id="myDetail">
    <div class="detail">
      <h1>{{ poke1.name }}</h1>
      <ul>
        <li><img :src="image" /></li>
        <li>Name: {{ poke1.name }}</li>
        <li>Id: {{ poke1.id }}</li>
        <li>Height:{{ poke1.height }}</li>
        <li>Weight:{{ poke1.weight }}</li>
      </ul>

      <div class="line"></div>

      <h2 class="detailH2">{{ pokemonType }} TYPE POKEMONS</h2>
      <div class="others">
        <ul>
          <li><img :src="image2" /></li>
          <li>Name: {{ poke2.name }}</li>
          <li>Id: {{ poke2.id }}</li>
          <li>Height:{{ poke2.height }}</li>
          <li>Weight:{{ poke2.weight }}</li>
        </ul>

        <ul>
          <li><img :src="image3" /></li>
          <li>Name: {{ poke3.name }}</li>
          <li>Id: {{ poke3.id }}</li>
          <li>Height:{{ poke3.height }}</li>
          <li>Weight:{{ poke3.weight }}</li>
        </ul>
        <ul>
          <li><img :src="image4" /></li>
          <li>Name: {{ poke4.name }}</li>
          <li>Id: {{ poke4.id }}</li>
          <li>Height:{{ poke4.height }}</li>
          <li>Weight:{{ poke4.weight }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      poke1: "",
      poke2: "",
      poke3: "",
      poke4: "",
      image: "",
      image2: "",
      image3: "",
      image4: "",
      pokemonType: "",
      subtitle: "CHOOSE YOUR POKEMON",
      link: "detailedPage.html",
      name: "",
      companyName: "PokeMania",
      random: "",
      h1: "WHO IS THIS POKEMON?",
      button: "TRY",
      home: "pokemania.html",
    };
  },

  methods: {
    searchPoke(name) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then((response) => response.json())
        .then((poke1) => {
          this.poke1 = poke1;
          this.image = poke1.sprites.front_default;
          this.pokemonType = poke1.types[0].type.name.toUpperCase();
          this.detailPoke(this.poke1.types[0].type);
        });
    },
    detailPoke(type) {
      fetch("https://pokeapi.co/api/v2/type/" + type.name)
        .then((response) => response.json())
        .then((poke2) => {
          this.requestDetailPokes1(poke2.pokemon[1].pokemon.url);
          this.requestDetailPokes2(poke2.pokemon[3].pokemon.url);
          this.requestDetailPokes3(poke2.pokemon[5].pokemon.url);
        });
    },
    requestDetailPokes1(url) {
      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
          this.poke2 = pokemon;
          this.image2 = pokemon.sprites.front_default;
        });
    },
    requestDetailPokes2(url) {
      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
          this.poke3 = pokemon;
          this.image3 = pokemon.sprites.front_default;
        });
    },
    requestDetailPokes3(url) {
      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
          this.poke4 = pokemon;
          this.image4 = pokemon.sprites.front_default;
        });
    },
  },
  beforeMount() {
    this.searchPoke(this.$route.params.name);
  },
};
</script>

<style>
#myDetail {
  background-color: rgb(46, 46, 95);
}
#myDetail h1 {
  padding-top: 8vw;
  padding-bottom: 0;
  color: rgb(167, 110, 4);
  font-family: Segoe;
  font-weight: bold;
  font-size: 6vw;
  text-align: center;
}

.detail li {
  list-style: none;
  line-height: 5vw;
  text-align: center;
  color: rgb(156, 156, 156);
  padding: 0;
  font-size: 1.5vw;
  font-family: Montserrat;
  color: rgb(180, 180, 180);
}

.detail img {
  width: 10vw;
  height: 10vw;
  border: none;

  margin-top: 3vw;
}
.detailH2 {
  padding: 2vw;
  color: rgb(167, 110, 4);
  text-align: center;
  font-family: montserrat;
  font-size: 3vw;
}
.others {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.others img {
  width: 5vw;
  height: 5vw;
}

.line {
  border: 1px solid white;
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 4vw;
  margin-bottom: 4vw;
}

@media only screen and (min-width: 600px) {
  #myApp {
    min-height: 90vw;
  }
  .detail img {
    width: 15vw;
    height: 15vw;
    margin: 0;

    padding-bottom: 0;
  }
  .detail {
    min-height: 90vw;
  }
  .others {
    padding: 5vw;
    padding-bottom: 8vw;
  }
  .others img {
    width: 10vw;
    height: 10vw;
    padding-top: 3vw;
    padding-bottom: 2vw;
  }
}
@media only screen and (max-width: 600px) {
  .detail img {
    width: 22vw;
    height: 22vw;
  }

  #myDetail h1 {
    padding-top: 20vw;
  }
  #myDetail {
    min-height: 100vw;
  }
  .others {
    padding: 7vw;
  }
  .others img {
    width: 17vw;
    height: 17vw;
    padding: 5vw;
  }
  .others h2 {
    text-align: center;
  }
  .line {
    margin-top: 8vw;
    margin-bottom: 6vw;
  }
  footer {
    padding-bottom: 3vw;
  }
}
</style>