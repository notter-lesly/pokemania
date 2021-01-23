<template>
  <div id="Detail">
    <h1>{{ poke1.name }}</h1>
    <img :src="image" />
    <ul>
      <li>Name: {{ poke1.name }}</li>
      <li>Id: {{ poke1.id }}</li>
      <li>Height:{{ poke1.height }}</li>
      <li>Weight:{{ poke1.weight }}</li>
    </ul>
    <div class="line"></div>
    <h2>{{ pokemonType }} TYPE POKEMONS</h2>
    <div class="others">
      <section v-for="item in items" :key="item.name">
        <router-link :to="{ name: 'Detail', params: { name: item.name } }" @click="scrollBehavior">
          <img :src="item.image" />
          <ul>
            <li>{{ item.name }}</li>
            <li>{{ item.number }}</li>
          </ul>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  el: "Detail",
  data() {
    return {
      poke1: {
        name:"",
        types: [] as any 
      },
      index:String,
      image: "",
      image2: "",
      items:[] as any,
      pokemonType: "",
      name: "",
      h1: "WHO IS THIS POKEMON?",
      button: "TRY",
    };
  },
  methods: {
    searchPoke(name:any) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((poke1) => {
          this.poke1 = poke1;
          this.image = poke1.sprites.other["official-artwork"].front_default;
          this.pokemonType = poke1.types[0].type.name.toUpperCase();
          this.detailPoke(this.poke1.types[0].type);
        });
    },
    detailPoke(type: { name: string; }) {
      for (let i = 0; i < 3; i++) {
        fetch(`https://pokeapi.co/api/v2/type/${type.name}`)
          .then((response) => response.json())
          .then((data) => {
            let pokemons = data.pokemon.filter(
              (index:any) =>
                index.pokemon.url && !index.pokemon.name.includes("minior")
            );
            let randomPosition = Math.ceil(Math.random() * pokemons.length);
            this.requestDetailPokes(pokemons[randomPosition].pokemon.url);
          });
      }
    },
    requestDetailPokes(url:string) {
      fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
          this.items.push({
            name: pokemon.name,
            number: pokemon.id,
            image: pokemon.sprites.other["official-artwork"].front_default,
          });
        });
    },
  },
  created() {
    this.searchPoke(this.$route.params.name);
  },
};
</script>

<style scoped>
#Detail h1 {
  padding-top: 10vw;
  color: rgb(167, 110, 4);
  font-family: Montserrat;
  font-size: 4vw;
  text-align: center;
  font-weight: unset;
}
#Detail li {
  line-height: 5vw;
  text-align: center;
  color: rgb(156, 156, 156);
  font-size: 1.5vw;
  font-family: Montserrat;
  color: rgb(180, 180, 180);
}
#Detail img {
  width: 15vw;
  height: 15vw;
  border: none;
  display: block;
  margin: auto;
}
#Detail h2 {
  padding: 2vw;
  color: rgb(167, 110, 4);
  text-align: center;
  font-family: Montserrat;
  font-size: 2vw;
  font-weight: unset;
}
.others {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.line {
  border: 1px solid white;
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 4vw;
  margin-bottom: 4vw;
}
</style>