<template>
  <Main>
    <div class="relative px-8 lg:px-12 pt-8 pb-32 sm:pb-20 lg:pb-40">
      <div
        class="
          mx-auto
          sm:grid sm:grid-cols-3
          sm:gap-2
          md:gap-12
          lg:gap-16
          xl:gap-20
        "
      >
        <div
          v-for="book in books"
          :key="book.id"
          class="lg:row-span-1 lg:col-span-1 px-0 mb-32 sm:my-0"
        >
          <a :href="book.src">
            <div class="cover-container relative mx-auto">
              <img :src="book.cover" class="mx-auto publication-cover w-full" />
            </div>
          </a>
        </div>
      </div>
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
        {
          id: 2,
          src: "https://issuu.com/matilampu/docs/mati_lampu_vol4_7f301e70bf19a9",
          cover: require("~/assets/cover-toleransi-hd.png"),
          title: "Mati Lampu Vol.4: Toleransi",
        },
        {
          id: 3,
          src: "https://issuu.com/haninditobuwono9413/docs/kaput_rev",
          cover: require("~/assets/cover-kaput-hd.png"),
          title: "Kaput",
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
