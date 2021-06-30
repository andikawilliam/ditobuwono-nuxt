<template>
  <div>
    <TheNav />
    <div class="pt-16">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TheNav from "../components/TheNav.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Main",
  components: {
    TheNav,
    Footer
  }
})
</script>