<template>
  <!-- Design 3: a book's table of contents. Account names stay pinned while their posts scroll past. -->
  <Main>
    <div class="posts-page contents">
      <header class="contents-head">
        <h1 class="contents-title">Posts</h1>
        <p class="contents-lede">
          Instagram posts and reels by Dito, grouped by account.
        </p>
      </header>

      <section
        v-for="account in accounts"
        :key="account.id"
        ref="groups"
        class="chapter"
        :aria-labelledby="`chapter-${account.id}`"
      >
        <div class="chapter-side">
          <h2 :id="`chapter-${account.id}`" class="chapter-name">
            {{ account.name }}
          </h2>
          <p class="chapter-count">{{ countLabel(account.posts) }}</p>
        </div>

        <ol class="entries">
          <li v-for="(item, i) in account.posts" :key="item.link">
            <a
              :href="item.link"
              class="entry"
              target="_blank"
              rel="noopener"
            >
              <span class="entry-num">{{ i + 1 }}</span>
              <span class="entry-title">{{ item.title }}</span>
              <span class="entry-leader" aria-hidden="true"></span>
              <span class="entry-kind">{{ item.kind }}</span>
            </a>
          </li>
        </ol>
      </section>
    </div>
    <PostsDesignBar />
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../Main/Main.vue";
import PostsDesignBar from "~/components/PostsDesignBar.vue";
import { accounts, InstagramPost } from "~/data/instagramPosts";
import { fadeUp } from "~/data/fadeUp";

export default Vue.extend({
  name: "PostsDesign3",
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
    countLabel(posts: InstagramPost[]): string {
      const reels = posts.filter((p) => p.kind === "reel").length;
      const rest = posts.length - reels;
      const parts = [];
      if (rest) parts.push(`${rest} ${rest === 1 ? "post" : "posts"}`);
      if (reels) parts.push(`${reels} ${reels === 1 ? "reel" : "reels"}`);
      return parts.join(", ");
    },
  },
});
</script>

<style>
@import "~/assets/posts.css";
</style>

<style scoped>
.contents {
  max-width: 64rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
  font-family: var(--font-body);
  color: var(--color-ink);
}

.contents-head {
  max-width: 36rem;
  margin-bottom: 4rem;
}

.contents-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 1;
  opacity: 0.85;
  overflow-wrap: break-word;
  min-width: 0;
}

.contents-lede {
  margin-top: 1rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.chapter {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  padding: 2rem 0 2.5rem;
  border-top: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .chapter {
    grid-template-columns: minmax(0, 15rem) minmax(0, 1fr);
    gap: 3rem;
  }

  .chapter-side {
    position: sticky;
    top: 6rem;
    align-self: start;
  }
}

.chapter-name {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: break-word;
  min-width: 0;
}

.chapter-count {
  margin-top: 0.4rem;
  font-size: 1rem;
  color: var(--color-muted);
}

.entries {
  list-style: none;
  padding: 0;
}

.entry {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.7rem 0;
  color: var(--color-ink);
  text-decoration: none;
}

.entry-num {
  flex: none;
  min-width: 1.5ch;
  font-size: 1rem;
  color: var(--color-muted);
}

.entry-title {
  font-size: 1.15rem;
  line-height: 1.45;
  text-decoration: underline;
  text-decoration-color: var(--color-rule);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
  transition: text-decoration-color 0.2s ease;
}

.entry:hover .entry-title {
  text-decoration-color: var(--color-ink);
}

/* Dotted leader between the title and its kind, as in a printed contents page. */
.entry-leader {
  flex: 1 1 2rem;
  min-width: 2rem;
  border-bottom: 1px dotted var(--color-muted);
  transform: translateY(-0.3em);
  opacity: 0.6;
}

.entry-kind {
  flex: none;
  font-size: 0.95rem;
  font-style: italic;
  color: var(--color-muted);
}

@media (prefers-reduced-motion: reduce) {
  .entry-title {
    transition: none;
  }
}
</style>
