<template>
  <div>
    <div
      class="
        text-xl
        font-extralight
        mx-auto
        text-left
        mb-16
        sm:text-2xl sm:mb-24 sm:w-3/4
        xl:text-3xl
      "
    >
      <p class="pb-4">"{{ selectedBook.reviews[0].review }}"</p>
      <p class="italic">- {{ selectedBook.reviews[0].by }}</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-12">
      <div class="sm:px-4">
        <a :href="selectedBook.link" target="_blank" rel="noopener noreferrer">
          <img class="shadow" :src="selectedBook.cover" />
        </a>
      </div>
      <div class="text-lg sm:text-xl font-light xl:pt-16 lg:px-12">
        <h1 class="text-3xl sm:text-4xl mb-6">{{ selectedBook.title }}</h1>
        <p>{{ selectedBook.detail }}</p>
        <a :href="selectedBook.link">
          <button class="mt-4 underline text-purple-600 hover:opacity-80">
            Get it now
          </button>
        </a>
        <div class="mt-4 text-gray-dito-text">
          <div
            class="italic font-light pb-1"
            v-for="accolade in selectedBook.accolades"
            :key="accolade"
          >
            {{ accolade }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BookDetail",
  props: ["selectedBook"],
});
</script>