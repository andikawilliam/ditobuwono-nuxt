<template>
  <nav class="design-bar" :class="{ 'on-dark': dark }" aria-label="Post page designs">
    <NuxtLink to="/posts" class="design-link" exact>All designs</NuxtLink>
    <NuxtLink
      v-for="(design, i) in designs"
      :key="design.to"
      :to="design.to"
      class="design-link"
      :title="design.name"
    >
      {{ i + 1 }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { designs } from "~/data/instagramPosts";

// Review-only switcher shown on every /posts design. Remove it once a design is picked.
export default Vue.extend({
  name: "PostsDesignBar",
  props: { dark: { type: Boolean, default: false } },
  data() {
    return { designs };
  },
});
</script>

<style scoped>
.design-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.25rem;
  justify-content: center;
  padding: 0 1.5rem 2rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-muted);
}

.design-bar.on-dark {
  color: var(--color-on-dark-soft);
}

.design-link {
  position: relative;
  padding: 0.25rem 0.125rem;
  color: inherit;
  text-decoration: none;
}

/* The site's nav hover: a line grows across the middle of the text. */
.design-link::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.design-link:hover::after,
.design-link.nuxt-link-exact-active::after {
  transform: scaleX(1);
}

.design-link.nuxt-link-exact-active {
  color: var(--color-ink);
}

.on-dark .design-link.nuxt-link-exact-active {
  color: var(--color-on-dark);
}

@media (prefers-reduced-motion: reduce) {
  .design-link::after {
    transition: none;
  }
}
</style>
