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


  
   <div id="myRandom">

<h1> {{h1}}</h1>    
<div class="image">
<img class="randomImage" :src="image"/>
</div>
<ul >
    <button @click= 'randomPoke()'> {{button}}</button>
    <h1>IT IS: {{random.name}}</h1>
    <li>Id:{{random.id}}</li>
    <li>Height:{{random.height}}</li>
    <li>Weight: {{random.weight}}</li>
   
  </ul>









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
          
        })
  
  
  }
  }
}
</script>

<style>

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

#myPoke {
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

</style>