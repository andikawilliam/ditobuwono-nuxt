<template>
  <div class="relative">
    <div class="mx-auto text-center mb-16">
      <h2 class="text-4xl sm:text-5xl font-light pb-4">
        {{ selectedBook.title }}
      </h2>
    </div>

    <div class="grid sm:grid-cols-2 gap-12">
      <div class="sm:px-4">
        <a :href="selectedBook.link" target="_blank" rel="noopener noreferrer">
          <img class="shadow" :src="selectedBook.cover" />
        </a>
      </div>
      <div class="text-lg sm:text-xl font-light sm:pt-24 sm:px-12">
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