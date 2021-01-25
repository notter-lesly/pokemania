<template>
  <div id="Detail">
     <div class="loading" v-if =isLoading>
      <PageLoading/>
      </div>
 <div  v-else>
    <h1>{{ chosenPokemon.name }}</h1>
    <img :src="chosenPokemon.image" />
   
     
    <ul>
      <li>Name: {{ chosenPokemon.name }}</li>
      <li>Id: {{ chosenPokemon.id }}</li>
      <li>Height: {{ chosenPokemon.height }}</li>
      <li>Weight: {{ chosenPokemon.weight }}</li>
    </ul>
   
    <div class="line"></div>
    <h2>{{ chosenPokemon.type }} TYPE POKEMONS</h2>
    <div class="others">
      <section v-for="item in additionalPokemons" :key="item.name">
        <router-link :to="{ name: 'Detail', params: { name: item.name } }">
          <img :src="item.image" />
          <ul>
            <li>{{ item.name }}</li>
            <li>{{ item.id }}</li>
          </ul>
        </router-link>
      </section>
    </div>
  </div>
   </div>
</template>

<script lang="ts">
import getDetailsPagePokemon from "../services/getDetailsPagePokemons";
export default {
  el: "Detail",
  mixins: [getDetailsPagePokemon],
  mounted() {
    window.scrollTo(0, 0);
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
.loading{
  padding-top:5vw;
}
</style>
