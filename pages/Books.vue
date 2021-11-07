<template>
  <Main>
    <div class="relative px-8 lg:px-12 pt-8 pb-32 sm:pb-20 lg:pb-40">
      <div class="mx-auto sm:flex sm:justify-center sm:flex-wrap">
        <div
          v-for="book in books"
          :key="book.id"
          class="
            px-0
            mb-32
            sm:mb-10 sm:flex-none sm:w-1/2 sm:px-4
            xl:w-1/3 xl:px-10
          "
        >
          <div class="cover-container relative">
            <a :href="book.src">
              <img :src="book.cover" class="mx-auto w-full" />
            </a>
          </div>
        </div>
      </div>
      <Book />
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./Main/Main.vue";

export default Vue.extend({
  name: "Books",
  components: {
    Main,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          src: "https://linktr.ee/EndIsBeginning",
          cover: require("~/assets/cover-the-end-hd.png"),
          title: "Because the End Is Really the Beginning",
        },
      ],
    };
  },
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
