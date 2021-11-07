<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    id="notification"
    class="fixed w-5/6 lg:w-3/4 mx-auto left-0 right-0 bottom-2"
    v-show="notifState && notifText"
  >
    <div class="py-3 px-3 sm:px-6 lg:px-10 bg-gray-dito rounded-xl">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center text-white text-xs md:text-sm">
          <span class="hidden md:flex p-2 rounded-lg">
            <!-- Heroicon name: outline/speakerphone -->
            <svg
              class="h-6 w-6"
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
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </span>
          <p class="ml-3 font-medium">
            <span class="md:hidden">
              <a :href="notifLink">
                {{ this.notifText }}
              </a>
            </span>
            <span class="hidden md:inline">
              {{ this.notifText }}
            </span>
          </p>
        </div>
        <div
          class="
            order-3
            mt-2
            flex-shrink-0
            w-full
            hidden
            sm:order-2 sm:mt-0 sm:w-auto
            md:inline
          "
        >
          <a
            :href="notifLink"
            class="
              flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              bg-white
              hover:bg-gray-50
            "
          >
            Get it now
          </a>
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
  overflow: hidden;
  font-size: 0.9em;
}
</style>
