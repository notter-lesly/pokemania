<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}
</style>
