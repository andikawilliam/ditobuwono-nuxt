<template>
  <div class="text-center font-cormorant md:text-2xl pt-12 pb-24">
    <div>
      <a href="mailto:hanindito.arief@gmail.com?subject=Hi Dito!">
        <p class="font-semibold italic my-1">Say Hello</p>
        <p>hanindito.arief@gmail.com</p>
      </a>
    </div>
    <div class="pt-4">
      <a href="https://www.instagram.com/ditobuwono/">
        <font-awesome-icon
          class="mx-2 md:text-xl lg:text-2xl"
          :icon="['fab', 'instagram']"
        />
      </a>
      <a href="https://www.linkedin.com/in/hanindito-buwono-98437a179/">
        <font-awesome-icon
          class="ml-1 lg:ml-2 md:text-xl lg:text-2xl"
          :icon="['fab', 'linkedin']"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped></style>
