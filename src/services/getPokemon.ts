import { defineComponent } from 'vue';
import axios from "axios";
import Pokemon from "@/models/Pokemon"

interface PageData{
  pokemons: Pokemon[];
  sortByNameClicked: boolean;
  sortByNumberClicked: boolean;
}

export default defineComponent({
  data() {  
    return {
      pokemons: [],
      sortByNameClicked: false,
      sortByNumberClicked: false,
    } as PageData
  },
  methods: {
    /*getMainPagePokemons starts with a loop to fill the array. The looping starts by generating a random 
    number that will be used to bring a pokemon from the api according to that number. The statuses that 
    will be rought are image, number and name.*/
    getPokemon() {
      for (let i = 0; i < 10; i++) {
        let number = Math.ceil(Math.random() * 714);
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
          .then((response) => {
            this.pokemons.push({
              name: response.data.name.toUpperCase(),
              id: response.data.id,
              image:response.data.sprites.other["official-artwork"].front_default,
          });
        });
      }
    },
    /* rearrange pokemon in alphabetical order*/
    sortByName() {
      this.sortByNameClicked = true;
      this.sortByNumberClicked = false;
      this.pokemons.sort((a, b) => (a.name > b.name) ? 1 : -1)
    },
    /* rearranges pokemon in numerical order*/
    sortByNumber() {
      this.sortByNameClicked = false;
      this.sortByNumberClicked = true;
      this.pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1)
    },
  },
   /* renders the getPokemon function before assembling the page*/
   created() {
    this.getPokemon()
  },
})
  
