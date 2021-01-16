<template>
  <div id="myApp">
    <header>
      <div class="logo">
        <img class="pokeball" src="../assets/imgs/pokeball.png" />
        <h1>{{ companyName }}</h1>
      </div>
      <ul class="menu">
        <a>home</a>
        <a>categories</a>
        <a>random</a>
      </ul>
    </header>

    <div>
      <h1 class="subtitle">{{ subtitle }}</h1>
      <button>Sort</button>

      <section class="pokes">
        <div name="poke1">
          <img src="../assets/imgs/pika.png" @click="searchPoke('pikachu')" />
        </div>
        <div class="poke2">
          <img src="../assets/imgs/gengar.png" @click="searchPoke('gengar')" />
        </div>
        <div class="poke3">
          <img
            src="../assets/imgs/bulba.png" @click="searchPoke('bulbasaur')"
          />
        </div>
        <div class="poke4">
          <img
            src="../assets/imgs/squirtle.png" @click="searchPoke('squirtle')"
          />
        </div>
        <div class="poke5">
          <img
            src="../assets/imgs/char.png" @click="searchPoke('charmander')"
          />
        </div>
        <div class="poke6">
          <img
            src="../assets/imgs/chicorita.png" @click="searchPoke('chikorita')"
          />
        </div>
        <div class="poke7">
          <img src="../assets/imgs/eeve.png" @click="searchPoke('eevee')" />
        </div>
        <div class="poke8">
          <img
            src="../assets/imgs/jiggly.png" @click="searchPoke('jigglypuff')"
          />
        </div>
        <div class="poke9">
          <img src="../assets/imgs/psy.png" @click="searchPoke('psyduck')" />
        </div>
        <div class="poke10">
          <img src="../assets/imgs/pigeot.png" @click="searchPoke('pidgeot')" />
        </div>
      </section>
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
  name:'app',

  data() {
    return{

    poke1: "",
    subtitle: "CHOOSE YOUR POKEMON",
    link: "detailedPage.html",
    name: "",
    companyName: "PokeMania",
    random: "",
    image: "",
    h1: "WHO IS THIS POKEMON?",
    button: "TRY",
    home: "pokemania.html"
    
  }},
  
  
  methods: {
    randomPoke() {
      let number = Math.ceil(Math.random() * 151);

      fetch("https://pokeapi.co/api/v2/pokemon/" + number)
        .then((response) => response.json())
        .then((random) => {
          this.$store.state.random = random;
          console.log(this.$store.state.random)
          console.log(this.random.sprites.front_default);
          this.$store.state.image = random.sprites.front_default;
        });
    },

    searchPoke(name) {
     
      fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then((response) => response.json())
        .then((poke1) => {
          this.poke1 = poke1;
          this.image = poke1.sprites.front_default;
          
        });
          
      
  
  
  }
  }
}
</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.logo {
  display: flex;
}
.logo h1 {
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.3vw;
}
.subtitle {
  text-align: center;
  padding-top: 5vw;
  margin-bottom: 2vw;
  font-size: 2.5vw;
  color: rgba(255, 255, 255, 0.801);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
header {
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  height: 3.5vw;
  display: flex;
  justify-content: space-between;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  font-size: 2vw;
  justify-content: space-around;
}
.menu a {
  text-decoration: none;
  color: black;
  font-size: 1.5vw;
  padding: 0.5vw;
  font-family: montserrat;
}

#myApp {
  background-color: rgb(46, 46, 95);
}

button {
  width: 50px;
}

button {
  color: pink;
}

img {
  width: 15vw;
  height: 15vw;
  cursor: pointer;
  padding: 3vw;
  margin: 1vw;
  border: 2px solid black;
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
}

.pokeball {
  width: 3.5vw;
  height: 3.5vw;
  border: none;
  margin-top: 0;
  padding: 0;
  margin: 0;
  cursor: auto;
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
