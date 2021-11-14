<template>
  <Main>
    <div class="relative px-8 lg:px-12 pt-8 pb-32 sm:pb-20 lg:pb-40">
      <transition name="fade">
        <BookDetail key="1" v-if="selectedBook" :selected-book="selectedBook" />
      </transition>
      <transition name="fade">
        <BookList
          key="2"
          v-show="!selectedBook"
          :books="books"
          v-on:set-selected-book="setSelectedBook"
        />
      </transition>
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./Main/Main.vue";
import BookDetail from "../components/BookDetail.vue";
import BookList from "../components/BookList.vue";

declare interface Book {
  id: number;
  link: string;
  cover: string;
  title: string;
  detail: string;
  reviews: { review: string; by: string }[];
  accolades: string[];
}

declare interface BaseComponentData {
  selectedBook: undefined | Book;
  books: Book[];
}

export default Vue.extend({
  name: "Books",
  components: {
    Main,
    BookDetail,
    BookList,
  },
  data(): BaseComponentData {
    return {
      selectedBook: undefined,
      books: [
        {
          id: 1,
          link: "https://linktr.ee/EndIsBeginning",
          cover: require("~/assets/cover-the-end-hd.png"),
          title: "Because the End Is Really the Beginning",
          detail: `Dito wrote a short story book about regrets
          Where according to him, a mistake will remain forever
          and it is part of our life.
          It cannot be forced to
          be erased, we must embraced it in
          our body and soul. With the illustration and audio
          in this book, Dito hopes that his readers can feel
          the feelings that he has felt during his life until now.`,
          reviews: [
            {
              review: `Experience baru banget sih ini!! Ada visual, ada teks, ada audio. Gue baca dua kali, pertama 
              pake audio, kedua ga pake audio, Dan bener audio emphasize the feelings sih. Gue suka banget visual 
              di chapter 2! Berasa marahnya.`,
              by: "Firnita Taufick, penulis buku 'Strings Attached'",
            },
          ],
          accolades: [
            "Editors' Choice at bukuindie.com",
            "Book Talks at “Bedah Buku Madania“",
          ],
        },
      ],
    };
  },
  methods: {
    setSelectedBook: function (bookId: number) {
      this.selectedBook = this.books[bookId - 1];
    },
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>