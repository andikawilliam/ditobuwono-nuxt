<template>
  <div>
    <TheNav :headerColor="headerColor" />
    <div class="max-w-screen-2xl mx-auto p-16">
      <slot />
    </div>
    <TheNotification />
    <div class="mx-auto text-center mb-16 text-gray-dito-text xl:-mt-8">
      <a href="mailto:hanindito.arief@gmail.com"> 📧 Contact Dito </a>
    </div>
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
