<template>
  <Main>
    <div class="posts-page hub">
      <h1 class="hub-title">Instagram posts</h1>
      <p class="hub-lede">
        Five drafts of the same page, all using the same
        {{ postCount }} posts from {{ accountCount }} accounts. This page is
        not linked from the site.
      </p>
      <ol class="hub-list">
        <li v-for="(design, i) in designs" :key="design.to" class="hub-item">
          <NuxtLink :to="design.to" class="hub-link">
            <span class="hub-num">{{ i + 1 }}</span>
            <span class="hub-name">{{ design.name }}</span>
          </NuxtLink>
          <p class="hub-note">{{ design.note }}</p>
        </li>
      </ol>
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../Main/Main.vue";
import { accounts, designs } from "~/data/instagramPosts";

export default Vue.extend({
  name: "PostsHub",
  components: { Main },
  head() {
    return { meta: [{ hid: "robots", name: "robots", content: "noindex" }] };
  },
  data() {
    return {
      designs,
      accountCount: accounts.length,
      postCount: accounts.reduce((n, a) => n + a.posts.length, 0),
    };
  },
});
</script>

<style>
@import "~/assets/posts.css";
</style>

<style scoped>
.hub {
  max-width: 40rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 6rem;
  font-family: var(--font-body);
  color: var(--color-ink);
}

.hub-title {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 500;
  line-height: 1.1;
  opacity: 0.85;
  overflow-wrap: break-word;
  min-width: 0;
}

.hub-lede {
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.hub-list {
  list-style: none;
  padding: 0;
  margin-top: 3rem;
}

.hub-item {
  padding: 1.25rem 0;
  border-top: 1px solid var(--color-rule);
}

.hub-link {
  display: inline-flex;
  align-items: baseline;
  gap: 1rem;
  color: var(--color-ink);
  text-decoration: none;
}

.hub-num {
  font-size: 1rem;
  color: var(--color-muted);
  min-width: 1ch;
}

.hub-name {
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

.hub-link:hover .hub-name {
  text-decoration-thickness: 2px;
}

.hub-note {
  margin: 0.4rem 0 0 2rem;
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--color-muted);
}
</style>
