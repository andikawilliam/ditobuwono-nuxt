<template>
  <Main>
    <Home />
    <About id="about-section" />
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./Main/Main.vue";
import Home from "./Home/Home.vue";
import About from "./Home/About.vue";

export default Vue.extend({
  name: "App",
  components: {
    Main,
    Home,
    About,
  },
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

html {
  background: radial-gradient(
    circle,
    rgb(231, 231, 231) 20%,
    rgb(233, 233, 233) 100%
  );
}

#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
}
.grayscale {
  -webkit-filter: grayscale(25%);
  filter: grayscale(25%);
}
</style>
