<template>
  <footer>
    <h2>Site map</h2>
    <div class="footerOrg">
      <ul>
        <li class="h3">LINKS</li>
        <li>
          <a> <router-link to="/" @click="scrollBehavior">Home</router-link></a>
        </li>
        <li>
          <a> <router-link to="/random" @click="scrollBehavior">Random</router-link></a>
        </li>
        <li>
          <a> <router-link to="/categories" @click="scrollBehavior"> Categories </router-link></a>
        </li>
      </ul>
      <ul>
        <li class="h3">CONTACT</li>
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
  el: "Footer",
   methods:{
    scrollBehavior() {
     return { x: 0, y: 0 }
   }
}
}
</script>

<style scoped>
footer {
  background-color: rgb(26, 26, 26);
  color: white;
  font-size: 1vw;
  font-family: montserrat;
  line-height: 2.5vw;
  width: 100%;
  padding-bottom: 1vw;
  overflow: hidden;
  
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
.h3 {
  color: white;
}
.footerOrg {
  display: flex;
  justify-content: space-around;
  margin-top: 2vw;
}
</style>
