export default{
    data() {
        return {
          chosenPokemon: "",
          image: "",
          image2: "",
          items: [],
          pokemonType: "",
          name: "",
          h1: "WHO IS THIS POKEMON?",
          button: "TRY",
        };
      },
      methods: {
        /* this function receives the name parameter passed through the route (when you clicked on a pokemon on
        the main page) and searches the api for the pokemon related to that name and also the element(type), 
        related to that name, to use in the function below. */
        getChosenPokemon(name) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((chosenPokemon) => {
              this.chosenPokemon = chosenPokemon;
              this.image =
                chosenPokemon.sprites.other["official-artwork"].front_default;
              this.pokemonType = chosenPokemon.types[0].type.name.toUpperCase();
              this.getPokemonsByType(this.chosenPokemon.types[0].type);
            });
        },
        /* this function receives the type parameter received in the chosenPoke and looks for the api by the 
         pokemon related to that element (type). after the return, the list is filtered to bring only pokemons 
         that have url and then, with the result of that list, a random function is made to generate 3 urls of 
         random pokemons. these urls will be passed on to the next function to render these pokemons. */
        getPokemonsByType(type) {
          for (let i = 0; i < 3; i++) {
            fetch(`https://pokeapi.co/api/v2/type/${type.name}`)
              .then((response) => response.json())
              .then((data) => {
                let pokemons = data.pokemon.filter((index) => index.pokemon.url);
                let randomPosition = Math.ceil(Math.random() * pokemons.length);
                let url = pokemons[randomPosition].pokemon.url;
    
                this.getPokemonByUrl(url);
              });
          }
        },
        /*this function receives the url of the previous function and fills the array with name, id and image*/
        getPokemonByUrl(url) {
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
}