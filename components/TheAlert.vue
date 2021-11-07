<template>
  <div
    v-show="alertOpen"
    class="flextext-white px-6 py-4 border-0 rounded relative mb-4 bg-gray-dito"
  >
    <span class="flex items-center mr-8">
      <span class="p-2 rounded-lg">
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
      <span class="md:hidden">
        <a :href="alertLink">
          {{ this.alertText }}
        </a>
      </span>
      <span class="hidden md:inline">
        {{ this.alertText }}
      </span>
    </span>
    <button
      class="
        absolute
        bg-transparent
        text-2xl
        font-semibold
        leading-none
        right-0
        top-0
        mt-4
        mr-6
        outline-none
        focus:outline-none
      "
      v-on:click="closeAlert()"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TheAlert",
  data() {
    return {
      alertOpen: true,
      alertText: `
        "Because the End Is Really
        the Beginning" book is available now!
      `,
      alertLink: "https://linktr.ee/EndIsBeginning",
    };
  },
  methods: {
    closeAlert: function () {
      this.alertOpen = false;
    },
  },
});
</script>