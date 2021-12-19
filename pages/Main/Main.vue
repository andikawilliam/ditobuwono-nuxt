<template>
  <div>
    <TheNav :headerColor="headerColor" />
    <div class="max-w-screen-2xl mx-auto py-16">
      <slot />
    </div>
    <TheNotification />
    <!-- <TheFooter /> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TheNav from "../../components/TheNav.vue";
import TheNotification from "../../components/TheNotification.vue";
// import TheFooter from '../../components/TheFooter.vue'

export default Vue.extend({
  name: "Main",
  props: ["headerColor"],
  components: {
    TheNav,
    TheNotification,
    // TheFooter
  },
});
</script>
