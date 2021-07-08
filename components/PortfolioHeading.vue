<template>
  <div class="mb-4 md:w-9/10 lg:w-3/5 lg:mx-auto">
    <PortfolioTitle :title="title" :titleId="titleId" />
    <div v-if="description" class="mb-10 lg:mb-12">
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
    PortfolioDescription
  },
  data() {
    return {
      titleId: this.title,
      lineId: "line-" + this.title,
      descriptionId: "desc-" + this.title
    };
  }
  // mounted: function() {
  //   this.headerAnimation();
  // },
  // methods: {
  //   headerAnimation() {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#" + this.titleId,
  //         start: "bottom 80%",
  //         end: "bottom 80%",
  //         // markers: true,
  //         toggleActions: "play none none reverse"
  //       }
  //     });
  //     tl.fromTo(
  //       "#" + this.descriptionId,
  //       { autoAlpha: 0, y: "-2vw" },
  //       { autoAlpha: 1, y: 0, ease: "power2" }
  //     );
  //   }
  // }
});
</script>

<style scoped></style>
