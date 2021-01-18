

<template>
  <div id="myApp">
    <h1 class="subtitle">{{ subtitle }}</h1>

    <button value="name" @click="sortByName()">Name</button>
    <button value="value" @click="sortByNumber()">Number</button>

    <div class="wrapper">
      <section class="pokes" v-for="item in items" :key="item.name">
        <div>
          <router-link :to="{ name: 'Detail', params: { name: item.name } }">
            <img :src="item.img" />
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import pikachu from "../assets/imgs/pika.png";
import gengar from "../assets/imgs/gengar.png";
import bulbasaur from "../assets/imgs/bulba.png";
import squirtle from "../assets/imgs/squirtle.png";
import charmander from "../assets/imgs/char.png";
import chicorita from "../assets/imgs/chicorita.png";
import eevee from "../assets/imgs/eeve.png";
import jigglypuff from "../assets/imgs/jiggly.png";
import psyduck from "../assets/imgs/psy.png";
import pidgeot from "../assets/imgs/pigeot.png";

export default {
  name: "myApp",

  data() {
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
      currentOrder: "value",
      items: [
        { name: "pikachu", number: "1", img: pikachu },
        { name: "gengar", number: "2", img: gengar },
        { name: "bulbasaur", number: "3", img: bulbasaur },
        { name: "squirtle", number: "4", img: squirtle },
        { name: "charmander", number: "5", img: charmander },
        { name: "chikorita", number: "6", img: chicorita },
        { name: "eevee", number: "7", img: eevee },
        { name: "jigglypuff", number: "8", img: jigglypuff },
        { name: "psyduck", number: "9", img: psyduck },
        { name: "pidgeot", number: "10", img: pidgeot },
      ],
    };
  },

  methods: {
    randomPoke() {
      let number = Math.ceil(Math.random() * 151);

      fetch("https://pokeapi.co/api/v2/pokemon/" + number)
        .then((response) => response.json())
        .then((random) => {
          this.$store.state.random = random;
          console.log(this.$store.state.random);
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
  },
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

header {
  position: fixed;
  margin: auto;
  background-color: white;

  display: flex;
  justify-content: space-between;
}
.subtitle {
  text-align: center;
  padding-top: 5vw;
  margin-bottom: 2vw;
  font-size: 3vw;
  color: rgba(255, 255, 255, 0.801);
  font-family: Montserrat;
}

#myApp {
  background-color: rgb(46, 46, 95);
}

button {
  text-align: center;
  width: 8vw;
  background-color: rgb(167, 110, 4);
  color: black;
  margin: 0.5vw;
  border: solid black 0.1vw;
  border-radius: 0.2vw;
  font-family: montserrat;
  font-weight: bold;
  font-size: 1vw;
}

img {
  width: 15vw;
  height: 15vw;
  cursor: pointer;
  padding: 3vw;
  margin: 1vw;
  border: 2px solid black;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  flex-direction: row;
}
.select {
  background-color: orange;
  color: black;
}

/*extra small*/
@media only screen and (max-width: 600px) {
  .subtitle {
    padding-top: 10vw;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    min-height: 90vh;
  }

  .pokedesign {
    height: 2px;
    margin-top: 4vw;
    margin-bottom: 1vw;
  }
  .pokes img {
    padding-top: 3vw;
    width: 20vw;
    height: 20vw;
    cursor: pointer;
    padding: 3vw;

    border: 0.2vw solid black;
  }

  footer {
    min-height: 5vh;
    background-color: black;
    color: white;
    font-size: 1.5vw;
    font-family: montserrat;
  }

  #myRandom {
    min-height: 90vh;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .subtitle {
    padding-top: 10vw;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    min-height: 90vh;
  }

  .pokedesign {
    height: 2px;
    margin-top: 3vw;
    margin-bottom: 1vw;
  }
  .pokes img {
    padding-top: 3vw;
    width: 12vw;
    height: 12vw;
    cursor: pointer;
    padding: 3vw;

    border: 0.2vw solid black;
  }

  footer {
    min-height: 5vh;
  }
}

/* Medium devices (landscape tablets, 768px and up) 
@media only screen and (min-width: 768px) {...}
 */
</style>