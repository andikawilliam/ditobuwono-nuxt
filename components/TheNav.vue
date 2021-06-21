<template>
  <header id="header" class="sticky w-full top-0 z-20 header-portfolio">
    <TheNotification />
    <div
      class="flex justify-between text-gray-dito font-cormorant font-medium px-6 md:px-12 pt-4 md:pt-8"
    >
      <div>
        <h1
          class="flex md:text-2xl cursor-pointer opacity-90"
          v-on:click="goTo('#home')"
        >
          <div class="font-black">DITO</div>
          <div class="font-base">BUWONO</div>
        </h1>
      </div>
      <div
        class="nav-burger z-10 right-6 sm:hidden"
        v-on:click="activeSidebar = !activeSidebar"
      >
        <span
          class="burger-line bg-black opacity-75"
          id="top-bun"
          v-bind:class="{ 'top-bun-active': activeSidebar }"
        />
        <span
          class="burger-line bg-black opacity-75"
          id="bot-bun"
          v-bind:class="{ 'bot-bun-active': activeSidebar }"
        />
      </div>
      <div
        class="sidebar desktopbar sm:w-auto sm:h-auto transition-width"
        v-bind:class="[activeSidebar ? 'w-full' : 'w-0']"
      >
        <div class="text-3xl sm:text-lg sm:flex">
          <p
            class="navline ml-8 my-4 sm:my-0"
            v-on:click="goTo('#filmography')"
          >
            Films
          </p>
          <p
            class="navline ml-8 my-4 sm:my-0"
            v-on:click="goTo('#publications')"
          >
            Publications
          </p>
          <p class="navline ml-8 my-4 sm:my-0" v-on:click="goTo('#mixtapes')">
            Mixtapes
          </p>
          <p class="navline ml-8 my-4 sm:my-0" v-on:click="goTo('#talks')">
            Podcasts
          </p>
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

export default Vue.extend({
  name: "TheNav",
  props: ["isMain"],
  components: {
    TheNotification
  },
  data() {
    return {
      activeSidebar: false
    };
  },
  methods: {
    goTo: function(destination: string) {
      this.activeSidebar = false;
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: destination,
          offsetY: 150
        },
        ease: "power2"
      });
    }
  }
});
</script>

<style scoped>
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
