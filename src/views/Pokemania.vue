

<template>
  <div id="myApp">
    <h1 class="subtitle">{{ subtitle }}</h1>
    <button>Sort</button>


    <section class="pokes">
      <div>
        <router-link :to="{ name: 'Detail', params: { name: 'pikachu' } }"
          ><img src="../assets/imgs/pika.png" />
        </router-link>
      </div>
      <div name="gengar" >
        <router-link :to="{ name: 'Detail', params: { name: 'gengar' } }"
          ><img src="../assets/imgs/gengar.png" />
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Detail', params: { name: 'bulbasaur' } }">
          <img src="../assets/imgs/bulba.png" />
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Detail', params: { name: 'squirtle' } }">
          <img src="../assets/imgs/squirtle.png" />
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Detail', params: { name: 'charmander' } }">
          <img src="../assets/imgs/char.png" />
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Detail', params: { name: 'chikorita' } }">
          <img src="../assets/imgs/chicorita.png" />
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Detail', params: { name: 'eevee' } }">
          <img src="../assets/imgs/eeve.png" />
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Detail', params: { name: 'jigglypuff' } }">
          <img src="../assets/imgs/jiggly.png" />
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Detail', params: { name: 'psyduck' } }">
          <img src="../assets/imgs/psy.png" />
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Detail', params: { name: 'pidgeot' } }">
          <img src="../assets/imgs/pigeot.png" />
        </router-link>
      </div>
  
    </section>
        </div>
 
</template>

<script>
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
      
        
  },
};
</script>

<style>
html, body,
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
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  height: 3.5vw;
  display: flex;
  justify-content: space-between;
}
.subtitle {
  text-align: center;
  padding-top: 5vw;
  margin-bottom: 2vw;
  font-size: 2.5vw;
  color: rgba(255, 255, 255, 0.801);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#myApp {
  background-color: rgb(46, 46, 95);
}

button {
  width: 50px;
  background-color: rgb(250, 133, 0);
  color: black;
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
</style>
