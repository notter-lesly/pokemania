<template>
  <div id="app">
    <Header />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  el: "app",
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
body,
ul,
li,
h1,
h2,
h3,
p,
footer {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body {
  background-color: rgb(46, 46, 95);
  scroll-behavior: smooth;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
a.router-link-active {
  color: rgb(167, 110, 4);
  font-weight: bold;
}
</style>
