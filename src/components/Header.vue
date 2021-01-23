<template>
  <header>
    <div class="logo">
      <router-link to="/"
        ><img class="pokeball" src="../assets/imgs/pokeball.png"
      /></router-link>
      <h1>Pokemania</h1>
    </div>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/random">Random</router-link></li>
      <li><router-link to="/categories"> Categories </router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  el: "Header",
};
</script>
<style scoped>
body {
  overflow-x: hidden;
}
header {
  width: 100%;
  position: fixed;
  margin: auto;
  background-color: white;
  height: 6vw;
  display: flex;
  justify-content: space-between;
}
.pokeball {
  width: 3.5vw;
  height: 3.5vw;
  border: none;
  padding: 1vw;
}
.logo {
  display: flex;
  padding-bottom: 1vw;
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
.menu li {
  color: black;
  font-size: 1.5vw;
  padding: 0.5vw;
  padding-top: 2vw;
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
  font-family: montserrat;
}
@media only screen and (max-width: 600px) {
  a {
    font-size: 2vw;
  }
}
</style>


