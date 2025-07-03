<template>
  <div
    class="
      lg:flex lg:justify-center lg:items-center
      px-8
      md:px-0
      pb-16
      md:py-16
      lg:px-24 lg:pt-32 lg:pb-48
      xl:pb-16
    "
  >
    <div
      class="
        about-content
        image-container
        pb-10
        pt-8
        lg:pt-8 lg:w-1/2 lg:mr-12
        xl:mr-8
      "
    >
      <img class="w-full md:w-1/2 lg:w-3/5 xl:w-1/2 mx-auto" :src="picture" />
      <div class="font-cormorant mt-2 text-sm text-center lg:text-base">
        <span class="italic"> Photo by: Novianti N. </span>
      </div>
    </div>
    <div class="about-content about-container mx-auto text-left">
      <div
        class="about-text font-light md:font-normal md:opacity-75 text-current"
      >
        <p v-for="text in texts" :key="text" v-html="text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "PageAbout",
  data() {
    return {
      title: "About",
      picture: require("~/assets/dito-picture-3.jpeg"),
      texts: [
        `
          During his creative process, Dito always raises
          <span class="">the meaning of honesty and hope</span>
          from a sense of loss. Because according to him, those feelings
          <span class="">depict a complete human figure.</span>
        `,
        `
          This concept has evolved into one of Dito's intellectual quests,
          <span class="">a testament to his insatiable curiosity and open-mindedness.</span>
          He seeks to delve into various mediums, each offering a unique perspective,
          <span class="">in his ongoing endeavor to capture and preserve the essence of human existence.</span>
        `,
        `
          Dito has graduated with his master's degree in Political Science: Environmental Governance and Behavior
          <span class="">from the University of Gothenburg and is looking to explore his interest in climate</span>
          and health policy advocacy.
        `,
      ],
    };
  },
  mounted() {
    this.aboutScroll();
  },
  methods: {
    aboutScroll() {
      gsap.fromTo(
        ".about-content",
        { autoAlpha: 0, y: 30 },
        {
          scrollTrigger: {
            id: "about-content",
            trigger: ".image-container",
            start: "top 60%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
          y: 0,
          autoAlpha: 1,
          stagger: 0.4,
          duration: 0.5,
          rotation: 0.01,
        }
      );
    },
  },
});
</script>

<style scoped>
p {
  padding-top: 1em;
}

.bolded {
  font-weight: 500;
}

.about-container {
  width: 35%;
}

.about-text {
  font-size: 1vw;
  letter-spacing: 0.02em;
}

@media screen and (max-width: 1440px) {
  .about-text {
    font-size: 1.1vw;
    letter-spacing: 0.01em;
    line-height: 1.8em;
  }
}

@media screen and (max-width: 1279px) {
  .about-text {
    font-size: 1.5vw;
    letter-spacing: 0.01em;
    line-height: 1.4em;
  }
}

@media screen and (max-width: 1023px) {
  .about-container {
    width: 75%;
  }

  .about-text {
    font-size: 2.2vw;
    letter-spacing: 0.03em;
    line-height: 1.5em;
  }
  .about-line {
    border-top: 3.5px solid currentColor;
  }
}

@media screen and (max-width: 639px) {
  .about-container {
    width: 100%;
  }

  .about-text {
    font-size: 4.3vw;
    letter-spacing: 0.03em;
    line-height: 1.5em;
  }
  .about-line {
    border-top: 3.5px solid currentColor;
  }
}
</style>
