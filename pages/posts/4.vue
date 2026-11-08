<template>
  <!-- Design 4: square tiles in an Instagram-style grid, with the title where the image would be. -->
  <Main>
    <div class="posts-page grid-page">
      <header class="grid-head">
        <h1 class="grid-title">Posts</h1>
        <p class="grid-lede">
          Instagram posts and reels by Dito. Each square opens the post.
        </p>
      </header>

      <section
        v-for="account in accounts"
        :key="account.id"
        ref="groups"
        class="account"
        :aria-labelledby="`account-${account.id}`"
      >
        <h2 :id="`account-${account.id}`" class="account-name">
          {{ account.name }}
        </h2>

        <ul class="tiles">
          <li v-for="item in account.posts" :key="item.link">
            <a
              :href="item.link"
              class="tile"
              :class="{ 'is-reel': item.kind === 'reel' }"
              target="_blank"
              rel="noopener"
            >
              <span class="tile-title">{{ item.title }}</span>
              <span class="tile-kind">{{ item.kind }}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <PostsDesignBar />
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../Main/Main.vue";
import PostsDesignBar from "~/components/PostsDesignBar.vue";
import { accounts } from "~/data/instagramPosts";
import { fadeUp } from "~/data/fadeUp";

export default Vue.extend({
  name: "PostsDesign4",
  components: { Main, PostsDesignBar },
  head() {
    return { meta: [{ hid: "robots", name: "robots", content: "noindex" }] };
  },
  data() {
    return { accounts };
  },
  mounted() {
    fadeUp(this.$refs.groups as Element[]);
  },
});
</script>

<style>
@import "~/assets/posts.css";
</style>

<style scoped>
.grid-page {
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  font-family: var(--font-body);
  color: var(--color-ink);
}

.grid-head {
  max-width: 36rem;
  margin-bottom: 3.5rem;
}

.grid-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 1;
  opacity: 0.85;
  overflow-wrap: break-word;
  min-width: 0;
}

.grid-lede {
  margin-top: 1rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.account {
  margin-bottom: 3.5rem;
}

.account-name {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 700;
  overflow-wrap: break-word;
  min-width: 0;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

@media (min-width: 768px) {
  .tiles {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
  }
}

.tile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  aspect-ratio: 1 / 1;
  padding: clamp(0.75rem, 2vw, 1.4rem);
  overflow: hidden;
  color: var(--color-ink);
  text-decoration: none;
  background: var(--color-tile);
  border-radius: 0.375rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

/* Reels read as the darker squares, like video thumbnails in a grid. */
.tile.is-reel {
  color: var(--color-on-dark);
  background: var(--color-ink);
}

.tile:hover {
  background: var(--color-tile-hover);
  transform: translateY(-2px);
}

.tile.is-reel:hover {
  background: var(--color-ink-soft);
}

.tile:active {
  transform: translateY(0);
}

.tile-title {
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 1.9vw, 1.3rem);
  line-height: 1.3;
  overflow-wrap: break-word;
  min-width: 0;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tile-kind {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-muted);
}

.tile.is-reel .tile-kind {
  color: var(--color-on-dark-soft);
}

.tile.is-reel:focus-visible {
  outline-color: var(--color-ink);
}

@media (prefers-reduced-motion: reduce) {
  .tile {
    transition: none;
  }

  .tile:hover {
    transform: none;
  }
}
</style>
