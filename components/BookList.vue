<template>
  <div class="mx-auto sm:flex sm:justify-center sm:flex-wrap">
    <div
      v-for="book in books"
      :key="book.id"
      class="px-0 sm:mb-10 sm:flex-none sm:w-1/2 sm:px-4 xl:w-1/3 xl:px-10"
    >
      <div
        class="cover-container relative shadow-sm cursor-pointer"
        v-on:click="$emit('set-selected-book', book.id)"
      >
        <img :src="book.cover" class="mx-auto w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BookList",
  props: { books: Array },
});
</script>

<style scoped>
.cover-container {
  transition: transform 0.5s;
}
.cover-container:hover {
  transform: translateY(-1vw);
}
</style>
