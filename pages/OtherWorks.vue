<template>
  <Main>
    <Music />
    <Podcast />
  </Main>
</template>

<style scoped>

</style>

<script lang="ts">
import Vue from 'vue';
import Main from './Main.vue'
import Music from './Music.vue';
import Podcast from './Podcast.vue'

export default Vue.extend({
  name: "OtherWorks",
  components: {
    Main,
    Music,
    Podcast
  },
})
</script>