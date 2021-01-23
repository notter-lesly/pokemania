import axios from "axios";
export default {
  data() {
    return {
      random: "",
      image: "",
      h1: "WHO IS THIS POKEMON?",
      button: "TRY",
    };
  },
  methods: {
    /*randomPokemon generates a random number that will be used to bring a pokemon from the api according to
    that number which is used in the html tags in the vue to bring some specifics like weight and height. */
    getRandomPokemon() {
      let number = Math.ceil(Math.random() * 714);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then((response) => {
          this.random = response.data;
          this.image =
            response.data.sprites.other["official-artwork"].front_default;
          this.random.name = this.random.name.toUpperCase();
        });
    },
  },
};
