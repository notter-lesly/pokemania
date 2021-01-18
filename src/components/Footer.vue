<template>
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
</template>

<script>
export default{
  name: "Footer"
}

</script>

<style scoped>


footer {
  background-color: black;
  color: white;
  font-size: 1.5vw;
  font-family: montserrat;
  line-height: 2.5vw;
  width: 100%;
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