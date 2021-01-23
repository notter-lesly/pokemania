import axios from "axios";

/*getMainPagePokemons starts with a loop to fill the array. The looping starts by generating a random number 
that will be used to bring a pokemon from the api according to that number. The statuses that will be 
brought are image, number and name.*/

export default{

  data() {  
        return {
          subtitle: "CHOOSE YOUR POKEMON",
     pokemons: []
    }
  },
  methods:{
    getPokemon() {
      for (let i = 0; i < 10; i++) {
        let number = Math.ceil(Math.random() * 714);
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
          .then((response) => {
            this.pokemons.push({
              name: response.data.name,
              number: response.data.id,
              image:
                response.data.sprites.other["official-artwork"]
                  .front_default,
            
          });
        });
      }
    },
    /* rearrange pokemon in alphabetical order*/
    sortByName() {
      this.pokemons.sort((a, b) => (a.name > b.name) ? 1 : -1)
    },
    /*rearranges pokemon in numerical order*/
    sortByNumber() {
      this.pokemons.sort((a, b) => (a.number > b.number) ? 1 : -1)
    },
  }
}
  
