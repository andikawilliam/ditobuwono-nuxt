<template>
  <!-- Design 5: one sideways row of portrait cards per account, the carousel idea without images. -->
  <Main>
    <div class="posts-page carousel-page">
      <header class="carousel-head">
        <h1 class="carousel-title">Posts</h1>
        <p class="carousel-lede">
          Instagram posts and reels by Dito. Scroll each row sideways.
        </p>
      </header>

      <section
        v-for="(account, a) in accounts"
        :key="account.id"
        ref="groups"
        class="row"
        :aria-labelledby="`row-${account.id}`"
      >
        <div class="row-head">
          <h2 :id="`row-${account.id}`" class="row-name">{{ account.name }}</h2>
          <div v-if="account.posts.length > 2" class="row-controls">
            <button
              type="button"
              class="row-btn"
              :aria-label="`Previous ${account.name} posts`"
              @click="scrollRow(a, -1)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button
              type="button"
              class="row-btn"
              :aria-label="`Next ${account.name} posts`"
              @click="scrollRow(a, 1)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <ul ref="tracks" class="track">
          <li v-for="(item, i) in account.posts" :key="item.link" class="track-item">
            <a :href="item.link" class="card" target="_blank" rel="noopener">
              <span class="card-index">{{ i + 1 }} of {{ account.posts.length }}</span>
              <span class="card-title">{{ item.title }}</span>
              <span class="card-kind">{{ item.kind === "reel" ? "Watch the reel" : "Open the post" }}</span>
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
  name: "PostsDesign5",
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
  methods: {
    // Moves the row by one card width, smooth unless the visitor asked for less motion.
    scrollRow(index: number, dir: number) {
      const track = (this.$refs.tracks as HTMLElement[])[index];
      const card = track.querySelector(".track-item") as HTMLElement | null;
      const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
    },
  },
});
</script>

<style>
@import "~/assets/posts.css";
</style>

<style scoped>
.carousel-page {
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  font-family: var(--font-body);
  color: var(--color-ink);
}

.carousel-head {
  max-width: 36rem;
  margin-bottom: 3.5rem;
}

.carousel-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 1;
  opacity: 0.85;
  overflow-wrap: break-word;
  min-width: 0;
}

.carousel-lede {
  margin-top: 1rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.row {
  margin-bottom: 3.5rem;
}

.row-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.row-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 700;
  overflow-wrap: break-word;
  min-width: 0;
}

.row-controls {
  display: flex;
  flex: none;
  gap: 0.5rem;
}

.row-btn {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-ink);
  background: transparent;
  border: 1px solid var(--color-ink);
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
}

.row-btn svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
}

.row-btn:hover {
  color: var(--color-on-dark);
  background: var(--color-ink);
}

.row-btn:active {
  transform: scale(0.94);
}

.track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(13rem, 16rem);
  gap: 1rem;
  padding: 0 0 1rem;
  margin: 0;
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--color-rule) transparent;
}

.track-item {
  scroll-snap-align: start;
}

/* 4:5 portrait, the shape of an Instagram feed post. Dark like the site's audio tiles. */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  aspect-ratio: 4 / 5;
  padding: 1.25rem;
  color: var(--color-on-dark);
  text-decoration: none;
  background: var(--color-ink);
  border-radius: 0.375rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  background: var(--color-ink-soft);
  transform: translateY(-3px);
}

.card:active {
  transform: translateY(0);
}

.card-index {
  font-size: 0.9rem;
  color: var(--color-on-dark-soft);
}

.card-title {
  flex: 1;
  font-family: var(--font-display);
  font-size: 1.35rem;
  line-height: 1.3;
  overflow-wrap: break-word;
  min-width: 0;
}

.card-kind {
  font-size: 0.95rem;
  font-style: italic;
  color: var(--color-on-dark-soft);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

@media (prefers-reduced-motion: reduce) {
  .row-btn,
  .card {
    transition: none;
  }

  .card:hover {
    transform: none;
  }
}
</style>
