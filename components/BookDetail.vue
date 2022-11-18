<template>
  <div>
    <div
      class="
        text-xl
        font-light
        mx-auto
        text-left
        mb-16
        sm:font-extralight sm:text-2xl sm:mb-24 sm:w-3/4
        xl:text-3xl
      "
    >
      <div class="mb-16" :key="review" v-for="review in selectedBook.reviews">
        <p :key="text" v-for="text in review.reviewText" class="pb-4">
          "<span v-html="text"></span>"
        </p>
        <p class="italic text-gray-dito-text">- {{ review.by }}</p>
      </div>
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
