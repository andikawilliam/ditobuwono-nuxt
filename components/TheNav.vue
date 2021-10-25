<template>
  <header id="header" class="sticky w-full top-0 z-20 header-portfolio">
    <TheNotification />
    <div
      class="
        flex
        justify-between
        font-cormorant font-medium
        px-6
        md:px-12
        pt-4
        md:pt-8
      "
      :class="[headerColor === 'white' ? 'text-white' : 'text-gray-dito']"
    >
      <NuxtLink to="/" class="flex md:text-2xl cursor-pointer opacity-90">
        <div class="font-black">DITO</div>
        <div class="font-base">BUWONO</div>
      </NuxtLink>
      <div
        class="nav-burger z-10 right-6 sm:hidden"
        v-on:click="activeSidebar = !activeSidebar"
      >
        <span
          class="burger-line opacity-75"
          :class="[
            headerColor === 'white' ? 'bg-white' : 'bg-black',
            activeSidebar && 'top-bun-active',
          ]"
          id="top-bun"
        />
        <span
          class="burger-line opacity-75"
          :class="[
            headerColor === 'white' ? 'bg-white' : 'bg-black',
            activeSidebar && 'bot-bun-active',
          ]"
          id="bot-bun"
        />
      </div>
      <div
        class="sidebar desktopbar sm:w-auto sm:h-auto transition-width"
        :class="[
          activeSidebar ? 'w-full' : 'w-0',
          headerColor === 'white' ? 'bg-gray-dito' : 'bg-gray-ivory',
        ]"
      >
        <div class="text-3xl sm:text-lg sm:flex">
          <NuxtLink
            v-for="menu in menus"
            :key="menu.text"
            :to="menu.to"
            class="navline ml-8 my-4 sm:my-0"
          >
            {{ menu.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import TheNotification from "./TheNotification.vue";

import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// :class="{ 'bot-bun-active': activeSidebar }"
export default Vue.extend({
  name: "TheNav",
  props: ["isMain", "headerColor"],
  components: {
    TheNotification,
  },
  data() {
    return {
      activeSidebar: false,
      menus: [
        {
          to: "/filmography",
          text: "Films",
        },
        {
          to: "/books",
          text: "Books",
        },
        {
          to: "/publications",
          text: "Publications",
        },
        {
          to: "/otherworks",
          text: "Other Works",
        },
      ],
    };
  },
  methods: {
    goTo: function (destination: string) {
      this.activeSidebar = false;
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: destination,
          offsetY: 150,
        },
        ease: "power2",
      });
    },
  },
});
</script>

<style scoped>
.sidebar {
  @apply absolute h-screen bg-opacity-95 overflow-hidden right-0 top-0 flex items-center;
}

@screen sm {
  .desktopbar {
    @apply h-auto static bg-transparent block;
  }
}

header {
  transition: all 0.4s ease-in-out;
}

@media screen and (max-width: 960px) {
  .header-portfolio {
    backdrop-filter: blur(1.5px);
  }
}

.nav-burger {
  position: fixed;
  cursor: pointer;
  height: 1em;
  width: 1.5em;
}

.burger-line {
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  transition: all;
  transition-duration: 0.2s;
  height: 1px;
}

#top-bun {
  top: 0;
  margin-top: 4px;
}
#bot-bun {
  bottom: 0;
  margin-bottom: 2px;
}

.top-bun-active {
  transform: rotate(45deg) translateY(0.4rem);
}
.bot-bun-active {
  transform: rotate(-45deg) translateY(-0.4rem);
}

.transition-width {
  transition: width;
  transition-duration: 0.5s;
}

.navline {
  text-decoration: none;
  position: relative;
  cursor: pointer;
  display: block;
}

.navline::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  left: 0;
  height: 5%;
  background: currentColor;
  transition: width 0.25s ease;
}

.navline:hover::after {
  width: 100%;
}
</style>
