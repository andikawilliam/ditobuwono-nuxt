<template>
  <Main>
    <Music />
    <Podcast />
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./Main/Main.vue";
import Music from "./Portfolio/Music.vue";
import Podcast from "./Portfolio/Podcast.vue";

export default Vue.extend({
  name: "Audio",
  components: {
    Main,
    Music,
    Podcast,
  },
});
</script>

<style scoped>
</style>
