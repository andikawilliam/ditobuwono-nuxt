<template>
  <div
    id="home"
    class="pb-24 pt-12 md:pt-16 md:pb-24 lg:pt-24 lg:pb-24 xl:pt-32"
  >
    <div class="flex px-6 md:px-24">
      <div class="portfolios-main text-current text-left mx-auto">
        <div class="font-playfair-display">
          <p class="main-text">
            Hanindito Buwono is a
            <span class="text-typed text-black" />
          </p>
          <p class="main-text">He is from Jakarta, Indonesia.</p>
        </div>
        <!-- <font-awesome-icon
          class="text-lg sm:text-xl lg:text-32xl down-notice animate-bounce"
          :icon="['fas', 'chevron-down']"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollToPlugin, TextPlugin);

let offsetScroll = 220;
const isMobile = window.matchMedia(
  "only screen and (max-width: 760px)"
).matches;
if (isMobile) {
  offsetScroll = 150;
}

export default Vue.extend({
  name: "Home",
  mounted() {
    const tl = gsap.timeline();
    tl.fromTo(
      ".main-text",
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, stagger: 3, delay: 0.8 }
    );
    tl.to(".down-notice", { autoAlpha: 1, y: 10, duration: 1 });
    tl.fromTo(
      "#notification",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: -20, duration: 0.5 }
    );

    const textArr = ["Communications Specialist.","Researcher."];

    const getAnimFromIndex = (index: number) => ({
      duration: 1.5,
      repeat: 1,
      repeatDelay: 1.5,
      yoyo: true,
      text: {
        value: textArr[index],
        delimiter: "",
      },
      ease: "ease.in",
    });

    const getKeyFrames = () => {
      const keyframes = [];
      for (let i = 0; i < textArr.length; i++) {
        keyframes.push(getAnimFromIndex(i));
      }
      return keyframes;
    };

    const tl1 = gsap.timeline();

    tl1.to(".text-typed", {
      delay: 1.5,
      keyframes: getKeyFrames(),
      repeat: -1,
    });

    // cursor logic
    // blink only when not typing or deleting

    const tl2 = gsap.timeline();

    tl2.to(".cursor", {
      keyframes: [
        { "--typeCursorOpacity": 1, duration: 1.5, delay: 0 },
        { "--typeCursorOpacity": 0, duration: 0, delay: 0.55 },
        { "--typeCursorOpacity": 1, duration: 0, delay: 0.55 },
        { "--typeCursorOpacity": 0, duration: 0, delay: 0.55 },
        { "--typeCursorOpacity": 1, duration: 0, delay: 0.55 },
        { "--typeCursorOpacity": 1, duration: 1.5, delay: 0 },
      ],
      repeat: -1,
    });
  },
  methods: {
    goTo(destination: string) {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: destination,
          offsetY: offsetScroll,
        },
        ease: "power2",
      });
    },
  },
});
</script>

<style scoped>
.portfolios-main {
  width: 100%;
  font-size: 3vw;
  color: rgba(0, 0, 0, 0.75);
}

.down-notice {
  position: absolute;
  opacity: 0;
  left: 50%;
  margin-top: 10%;
}

@media screen and (max-width: 1440px) {
  .portfolios-main {
    font-size: 4.5vw;
  }
}

@media screen and (max-width: 1023px) {
  .portfolios-main {
    font-size: 5.2vw;
  }
  .down-notice {
    margin-top: 15%;
  }
}

@media screen and (max-width: 639px) {
  .portfolios-main {
    width: 80%;
    font-size: 8vw;
  }
  .down-notice {
    margin-top: 15%;
  }
}

.text-animated::after {
  content: "|";
  margin-left: 0.2em;
  animation: blinkCursor 1.2s linear infinite;
}

@keyframes blinkCursor {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
