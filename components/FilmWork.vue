<template>
  <div
    :id="filmId"
    class="film-container font-cormorant pb-8 lg:pb-12 xl:pt-16"
  >
    <a :href="href" target="_blank" rel="noopener noreferrer">
      <div class="film-content text-shadow" v-on:click="showText = false">
        <img class="absolute w-full rounded-md grayscale" :src="image" />
        <div class="absolute inset-0 text-center">
          <!-- <font-awesome-icon
            class="play-icon text-2xl lg:text-5xl"
            :icon="['fas', 'play-circle']"
          /> -->
        </div>
        <div
          class="absolute text-right right-0 bottom-0 px-2 py-1 lg:px-4 lg:py-2"
        ></div>
      </div>
      <p class="title-text md:text-center font-semibold opacity-75 pt-2">
        {{ title }}
      </p>
      <p class="role-text md:text-center font-medium opacity-75 lg:pb-2">
        {{ role }}
      </p>
      <p
        class="accolade-text md:text-center font-light"
        v-for="accolade in accolades"
        :key="accolade"
      >
        ⬩{{ accolade }}⬩
      </p>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "FilmWork",
  props: {
    id: Number,
    image: String,
    title: String,
    type: String,
    role: String,
    accolades: Array,
    href: String,
  },
  data() {
    return {
      showText: true,
      filmId: "film-" + this.id,
    };
  },
  mounted: function () {
    const direction = this.id % 2 == 0 ? -80 : 80;
    this.filmAnimation(direction);
  },
  methods: {
    filmAnimation(direction: number) {
      gsap.fromTo(
        "#" + this.filmId,
        { autoAlpha: 0, x: direction },
        {
          scrollTrigger: {
            trigger: "#" + this.filmId,
            start: "top 90%",
            end: "top 90%",
            scrub: true,
          },
          autoAlpha: 1,
          x: 0,
          ease: "power4",
          duration: 0.4,
        }
      );
    },
  },
});
</script>

<style scoped>
.film-content {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.film-container {
  transition: all 0.5s ease;
}

.play-icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease;
}

.film-container:hover {
  transform: translateY(-1%);
}

.film-container:hover .play-icon {
  transform: translateY(-50%) scale(1.2);
  color: #af2538;
}

.title-text {
  font-size: 1.6vw;
}
.role-text {
  font-size: 1.2vw;
}
.accolade-text {
  font-size: 1vw;
  margin: 0.1em 0.2em;
}

.text-shadow {
  text-shadow: 1.5px 1.5px 4px rgba(15, 15, 15, 0.8);
}

@media screen and (max-width: 960px) {
  .title-text {
    font-size: 4vw;
  }
  .role-text {
    font-size: 3vw;
  }
  .accolade-text {
    font-size: 2.4vw;
    margin: 0.06em 0;
  }
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(15, 15, 15, 0.8);
  }
}
</style>
