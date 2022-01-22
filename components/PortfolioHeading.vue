<template>
  <div class="mb-4 md:w-9/10 lg:w-3/5 lg:mx-auto">
    <PortfolioTitle :title="title" :titleId="titleId" />
    <div v-if="description">
      <PortfolioDescription
        :description="description"
        :descriptionId="descriptionId"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import PortfolioTitle from "../components/PortfolioTitle.vue";
import PortfolioDescription from "../components/PortfolioDescription.vue";

gsap.registerPlugin(ScrollTrigger);
export default Vue.extend({
  name: "PortfolioHeading",
  props: ["title", "description"],
  components: {
    PortfolioTitle,
    PortfolioDescription,
  },
  data() {
    return {
      titleId: this.title,
      lineId: "line-" + this.title,
      descriptionId: "desc-" + this.title,
    };
  },
});
</script>

<style scoped></style>
