<template>
  <!-- Design 2: design 1 with a button that cycles the page background. -->
  <Main
    class="bg-scroll posts-page"
    :class="[current.className, { 'on-dark': current.dark }]"
    :headerColor="current.dark ? 'white' : undefined"
  >
    <div class="relative px-8 md:px-20 lg:px-20 xl:pb-0 xl:right-12">
      <div class="text-left mx-auto" :class="current.dark ? 'text-white' : 'text-ink'">
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
    <PostsDesignBar :dark="current.dark" />

    <button
      type="button"
      class="bg-toggle"
      :class="{ 'on-dark': current.dark }"
      @click="next"
    >
      <span class="bg-toggle-label">Background</span>
      <span class="bg-toggle-name">{{ current.name }}</span>
      <span class="bg-toggle-count">{{ index + 1 }} of {{ backgrounds.length }}</span>
    </button>
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "../Main/Main.vue";
import PostsDesignBar from "~/components/PostsDesignBar.vue";
import { accounts } from "~/data/instagramPosts";

const backgrounds = [
  { key: "sands", name: "Sands (current Publications)", className: "bg-sands", dark: true },
  { key: "sands-dim", name: "Sands, darkened", className: "bg-sands-dim", dark: true },
  { key: "charcoal", name: "Charcoal", className: "bg-charcoal", dark: true },
  { key: "dusk", name: "Dusk", className: "bg-dusk", dark: true },
  { key: "sage", name: "Sage", className: "bg-sage", dark: true },
  { key: "ivory", name: "Ivory (site default)", className: "bg-ivory", dark: false },
];

export default Vue.extend({
  name: "PostsDesign2",
  components: { Main, PostsDesignBar },
  head() {
    return { meta: [{ hid: "robots", name: "robots", content: "noindex" }] };
  },
  data() {
    // ?bg=<key> opens a given background, so a pick can be shared as a link.
    const asked = backgrounds.findIndex((b) => b.key === this.$route.query.bg);
    return { accounts, backgrounds, index: asked >= 0 ? asked : 0 };
  },
  computed: {
    current(): typeof backgrounds[number] {
      return this.backgrounds[this.index];
    },
  },
  methods: {
    next() {
      this.index = (this.index + 1) % this.backgrounds.length;
      this.$router.replace({ query: { bg: this.current.key } });
    },
  },
});
</script>

<style>
@import "~/assets/posts.css";
</style>

<style scoped>
.text-ink {
  color: var(--color-ink);
}

.bg-sands {
  background-image: url("~/assets/bg-sands.jpg");
}

/* Same photo with a scrim, for steadier contrast behind the white text. */
.bg-sands-dim {
  background-image: linear-gradient(var(--color-scrim), var(--color-scrim)),
    url("~/assets/bg-sands.jpg");
}

.bg-charcoal {
  background-color: var(--color-night);
  background-image: radial-gradient(
    circle at 50% 0%,
    var(--color-ink-soft) 0%,
    var(--color-night) 60%,
    var(--color-onyx) 100%
  );
}

/* Warm browns taken from the sand photo, without the photo. */
.bg-dusk {
  background-color: var(--color-dusk-b);
  background-image: linear-gradient(
    170deg,
    var(--color-dusk-a) 0%,
    var(--color-dusk-b) 70%
  );
}

.bg-sage {
  background-color: var(--color-sage-b);
  background-image: linear-gradient(
    170deg,
    var(--color-sage-a) 0%,
    var(--color-sage-b) 70%
  );
}

.bg-ivory {
  background-color: var(--color-paper);
  background-image: radial-gradient(
    var(--color-paper) 20%,
    var(--color-paper-edge) 100%
  );
}

.bg-toggle {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  padding: 0.6rem 1rem;
  font-family: var(--font-body);
  text-align: left;
  color: var(--color-ink);
  background: var(--color-paper-edge);
  border: 1px solid var(--color-ink);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease;
}

.bg-toggle:hover {
  background: var(--color-tile);
}

.bg-toggle:active {
  transform: translateY(1px);
}

.bg-toggle-label,
.bg-toggle-count {
  font-size: 0.85rem;
  color: var(--color-muted);
}

.bg-toggle-name {
  white-space: nowrap;
  font-size: 1.05rem;
  font-style: italic;
  font-weight: 700;
}

@media (prefers-reduced-motion: reduce) {
  .bg-toggle {
    transition: none;
  }
}
</style>
