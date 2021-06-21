<template>
  <div>
    <TheNav />
    <PageMain />
    <PageAbout id="about-section" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNav from "../components/TheNav.vue";
import PageMain from "./PageMain.vue";
import PageAbout from "./PageAbout.vue";

export default Vue.extend({
  name: "App",
  components: {
    TheNav,
    PageMain,
    PageAbout,
  }
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
@import url("https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Playfair+Display:wght@400;500;600;700;800&display=swap");

html {
  background: rgb(255, 255, 255);
}

body {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgb(231, 231, 231) 20%,
    rgb(233, 233, 233) 100%
  );
}

#app {
  font-family: "Open Sans", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
}
.grayscale {
  -webkit-filter: grayscale(25%);
  filter: grayscale(25%);
}
</style>
