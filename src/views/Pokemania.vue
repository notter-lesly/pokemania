
<template>
  <div id="Home">
    <h1 class="subtitle">{{ subtitle }}</h1>
    <button value="name" @click="sortByName()">Name</button>
    <button value="value" @click="sortByNumber()">Number</button>
    <div class="pokes">
      <section v-for="item in items" :key="item.name">
        <div>
          <router-link :to="{ name: 'Detail', params: { name: item.name }}" @click="scrollBehavior" >
            <img :src="item.image" />
            <h2>{{ item.name }}</h2>
            <h2>{{ item.number }}</h2>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  el:"Home",
 
  data() {  
     return {
  
      items: [],

      subtitle: "CHOOSE YOUR POKEMON",
   
    }
      },
        methods:{
    initPoke() {
        for (let i = 0; i < 10; i++) {
          let number = Math.ceil(Math.random() * 714);
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then((response) => {
              this.items.push({
                name: response.data.name,
                number: response.data.id,
                image: response.data.sprites.other["official-artwork"].front_default,
              }) ;
            })
        }
      },
      sortByName() {
      this.items = _.sortBy(this.items, [
        function (item) {
          return item.name;
        },
      ]);
    },
    sortByNumber() {
      this.items = _.sortBy(this.items, [
        function (item) {
          return item.number;
        },
      ]);
    },
     scrollBehavior() {
     return { x: 0, y: 0 }
   }
        },

  
  beforeMount() {
    this.initPoke()
  },
  
}

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