<template>

<header>
      <div class="logo">
         <router-link to="/"> <img class="pokeball" src="../assets/imgs/pokeball.png" /></router-link>
        <h1>Pokemania</h1>
      </div>
      <ul class="menu">
     <a><router-link to="/">Home</router-link> </a>
   <a> <router-link to="/random">Random</router-link></a>

      </ul>
      </header>

      </template>
      <script>

export default{
    name: 'Header'
}
          </script>
<style scoped>
header {
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  height: 3.5vw;
  display: flex;
  justify-content: space-between;
}
.pokeball {
  width: 3.5vw;
  height: 3.5vw;
  border: none;
  margin-top: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.logo {
  display: flex;
}
.logo h1 {
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.3vw;
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
</style>