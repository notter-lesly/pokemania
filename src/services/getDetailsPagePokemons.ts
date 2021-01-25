import { defineComponent } from 'vue';
import axios from "axios";
import Pokemon from "@/models/Pokemon"
import PageLoading from "../components/pageLoading.vue";

interface PageData{
  additionalPokemons: Pokemon[];
  chosenPokemon: Pokemon,
  isLoading:boolean,

 }

export default defineComponent({
    data() {
        return {
          chosenPokemon: {
            name: '', 
            id: 0, 
            image: ''
          },
          isLoading:true,
          additionalPokemons: [],
        } as PageData;
      },
      components:{
        PageLoading
      },
    methods: {
      /* this function receives the name parameter passed through the route (when you clicked on a pokemon on
      the main page) and searches the api for the pokemon related to that name and also the element(type), 
      related to that name, to use in the function below. */
      async getChosenPokemon(pokemonName: string) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        const { name, id, weight, height } = response.data;
        this.chosenPokemon = {
          name: name.toUpperCase(),
          id,
          weight,
          height,
          image: response.data.sprites.other["official-artwork"].front_default,
          type: response.data.types[0].type.name.toUpperCase()
        }
        if(this.chosenPokemon.type){
          await this.getPokemonsByType(this.chosenPokemon.type);
        }
      },
      /* this function receives the type parameter received in the chosenPoke and looks for the api by the 
        pokemon related to that element (type). after the return, the list is filtered to bring only pokemons 
        that have url and then, with the result of that list, a random function is made to generate 3 urls of 
        random pokemons. these urls will be passed on to the next function to render these pokemons. */
      async getPokemonsByType(type: string) {          
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`)
        const { data } = response;
        let pokemons = data.pokemon.filter((index: any) => index.pokemon.url);
        while (this.additionalPokemons.length < 3){
          let randomPosition = Math.floor(Math.random() * pokemons.length);
          let url = pokemons[randomPosition].pokemon.url;
          await this.getPokemonByUrl(url);
        }
        this.isLoading=false
      },
      /*this function receives the url of the previous function and fills the array with name, id and image*/
      async getPokemonByUrl(url: string) {
        const response = await axios.get(url)
        const { data: pokemon } = response;
        if (pokemon.sprites.other["official-artwork"].front_default){
          return this.additionalPokemons.push({
            name: pokemon.name.toUpperCase(),
            id: pokemon.id,
            image: pokemon.sprites.other["official-artwork"].front_default,
          });
        }
      },
    },
     /* renders the chosenPoke function before assembling the page*/
  created() {
    this.getChosenPokemon(this.$route.params.name as string);
  },
})