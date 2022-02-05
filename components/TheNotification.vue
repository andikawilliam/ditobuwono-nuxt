<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    id="notification"
    class="fixed w-full lg:w-2/5 px-6 mx-auto lg:right-0 bottom-2"
    v-show="notifState && notifText"
  >
    <div
      class="py-2 px-2 sm:px-4 border-2 bg-white border-gray-dito rounded-xl"
    >
      <div class="flex items-center justify-between flex-wrap">
        <div
          class="w-0 flex-1 flex items-center text-gray-dito text-xs md:text-sm"
        >
          <p class="ml-1 font-medium">
            <span class="inline">
              <a :href="notifLink">
                {{ this.notifText }}
              </a>
            </span>
          </p>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="
              -mr-1
              flex
              p-2
              rounded-md
              hover:opacity-50
              focus:outline-none focus:ring-2 focus:ring-white
              sm:-mr-2
            "
            v-on:click="closeNotification"
          >
            <span class="sr-only">Dismiss</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";

export default Vue.extend({
  name: "TheNotification",
  data() {
    return {
      // to turn off change notifState to : false
      notifState: true,
      notifText: `
        "Because the End Is Really
        the Beginning" book is available now!
      `,
      notifLink: "https://linktr.ee/EndIsBeginning",
    };
  },
  methods: {
    closeNotification() {
      const tl = gsap.timeline();
      tl.to("#notification", { autoAlpha: 0, y: 60, duration: 0.5 });
    },
  },
});
</script>

<style scoped>
#notification {
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  font-size: 0.9em;
}
</style>
