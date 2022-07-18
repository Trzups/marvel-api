<template>
  <div>
    <Hero />
  </div>
</template>

<script>
import Hero from "./components/Characters.vue";

export default {
  name: "App",
  components: {
    Hero,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
