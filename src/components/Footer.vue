<template>
  <footer>
    <h2>Site map</h2>
    <div class="footerOrg">
      <ul>
        <h3>LINKS</h3>
        <li>
          <a> <router-link to="/">Home</router-link></a>
        </li>
        <li>
          <a> <router-link to="/random">Random</router-link></a>
        </li>
        <li>
          <a> <router-link to="/categories"> Categories </router-link></a>
        </li>
      </ul>
      <ul>
        <h3>CONTACT</h3>
        <li><a href="https://github.com/notter-lesly">Github</a></li>
        <li><a href="https://www.linkedin.com/in/leslynotter">Linkedin</a></li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=310627586099"
            >Whatsapp</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: rgb(26, 26, 26);
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
  list-style-type: none;
}
footer h3 {
  font-size: 1.5vw;
}

.footerOrg {
  display: flex;
  justify-content: space-around;
  margin-left: -10vw;
  margin-right: -10vw;
  margin-top: 2vw;
}
</style>