<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Pokemania/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemania from '@/components/Pokemania.vue'

export default {
  name: 'Home',
  components: {
    Pokemania
  }
}
</script>
