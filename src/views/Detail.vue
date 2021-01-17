<template>
  <div id="myApp">
    <div class="detail">
      <ul>
        <li><img src="" /></li>
        <li>Name: {{ poke1.name }}</li>
        <li>Id: {{ poke1.id }}</li>
        <li>Height:{{ poke1.height }}</li>
        <li>Weight:{{ poke1.weight }}</li>
      </ul>
    </div>

    <footer>
      <h2>Site map</h2>
      <div class="footerOrg">
        <ul>
          <li><a> Home</a></li>
          <li><a> Pokemons</a></li>
          <li><a> Random Pokemon</a></li>
        </ul>

        <ul>
          <li>Contact us</li>
          <li>Adress: noonono</li>
          <li>Telephone: 00000</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    console.log(poke1.name)
    return {
      poke1: "",
      subtitle: "CHOOSE YOUR POKEMON",
      link: "detailedPage.html",
      name: "",
      companyName: "PokeMania",
      random: "",
      image: "",
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
        });
    },
    beforeMount(){
      
    }
  },
};
</script>

<style>


#myApp {
  background-color: rgb(46, 46, 95);
}

.detail li {
  list-style: none;
  line-height: 5vw;
  text-align: center;
}

.detail img {
  width: 20vw;
  height: 20vw;
  border: none;
  padding-top: 5vw;
  margin-top: 3vw;
}

footer {
  background-color: black;
  color: white;
  font-size: 1.5vw;
  font-family: montserrat;
  line-height: 2.5vw;
  width: 100vw;
}
footer h2 {
  text-decoration: underline;
}

footer a,
li {
  text-decoration: none;
  color: rgb(156, 151, 151);
}

.footerOrg {
  display: flex;
  justify-content: space-around;
}
</style>
