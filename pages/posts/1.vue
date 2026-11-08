<template>
  <!-- Design 1: a straight copy of pages/Publications.vue, fed the Instagram list. -->
  <Main class="bg-scroll bg-publications posts-page on-dark" headerColor="white">
    <div class="relative px-8 md:px-20 lg:px-20 xl:pb-0 xl:right-12">
      <div class="text-white text-left mx-auto">
        <div
          v-for="account in accounts"
          :key="account.id"
          class="lg:w-1/2 mx-auto mb-10"
        >
          <div class="text-xl italic font-bold">
            {{ account.name }}
          </div>
          <div
            v-for="item in account.posts"
            :key="item.link"
            class="underline pt-2 pb-1 text-opacity-75"
          >
            <a :href="item.link">
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <PostsDesignBar dark />
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../Main/Main.vue";
import PostsDesignBar from "~/components/PostsDesignBar.vue";
import { accounts } from "~/data/instagramPosts";

export default Vue.extend({
  name: "PostsDesign1",
  components: { Main, PostsDesignBar },
  head() {
    return { meta: [{ hid: "robots", name: "robots", content: "noindex" }] };
  },
  data() {
    return { accounts };
  },
});
</script>

<style>
@import "~/assets/posts.css";
</style>

<style scoped>
.bg-publications {
  background-image: url("~/assets/bg-sands.jpg");
}
</style>
