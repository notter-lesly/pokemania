import { defineComponent } from 'vue';
import axios from "axios";
import Pokemon from "@/models/Pokemon"

interface PageData{
  random: Pokemon;
}

export default defineComponent({
  data() {
    return {
      random: {
        name: '', 
        id: 0, 
        image: ''
      }
    } as PageData 
  },
  methods: {
    /*randomPokemon generates a random number that will be used to bring a pokemon from the api according to
    that number which is used in the html tags in the vue to bring some specifics like weight and height. */
    async getRandomPokemon() {
      let number = Math.ceil(Math.random() * 714);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
      const { name, id, weight, height } = response.data;
      this.random = {
        name: name.toUpperCase(),
        id,
        weight,
        height,
        image: response.data.sprites.other["official-artwork"].front_default,
      };
    },
  },
  /* renders the randomPokemon function before assembling the page*/
  created() {
    this.getRandomPokemon();
  },
});