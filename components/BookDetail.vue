<template>
  <div class="relative">
    <div class="mx-auto text-left mb-24 w-3/4">
      <p class="text-xl sm:text-3xl font-extralight pb-4">
        "{{ selectedBook.reviews[0].review }}"
        <span class="italic">- {{ selectedBook.reviews[0].by }}</span>
      </p>
    </div>

    <div class="grid sm:grid-cols-2 gap-12">
      <div class="sm:px-4">
        <a :href="selectedBook.link" target="_blank" rel="noopener noreferrer">
          <img class="shadow" :src="selectedBook.cover" />
        </a>
      </div>
      <div class="text-lg sm:text-xl font-light sm:pt-16 sm:px-12">
        <h1 class="text-xl sm:text-4xl mb-6">{{ selectedBook.title }}</h1>
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