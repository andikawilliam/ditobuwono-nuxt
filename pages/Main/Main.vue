<template>
  <div>
    <TheNav :headerColor="headerColor" />
    <div class="pt-16">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TheNav from "../../components/TheNav.vue";
// import TheFooter from '../../components/TheFooter.vue'

export default Vue.extend({
  name: "Main",
  props: ["headerColor"],
  components: {
    TheNav,
    // TheFooter
  },
});
</script>
