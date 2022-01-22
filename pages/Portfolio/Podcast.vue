<template>
  <div
    class="
      relative
      px-8
      md:px-16
      lg:px-20
      pt-32
      pb-16
      sm:py-20
      lg:pt-40
      xl:pb-0
    "
  >
    <PortfolioHeading :title="title" :description="description" />
    <div class="lg:w-2/3 mx-auto">
      <div class="podcast-grid-container w-full">
        <div
          v-for="podcast in podcasts"
          :key="podcast.id"
          class="podcast-grid grayscale"
        >
          <transition name="podcast-fade">
            <div
              v-show="!podcast.show"
              class="podcast-text font-cormorant"
              @click="podcast.show = !podcast.show"
            >
              {{ podcast.name }}
            </div>
          </transition>
          <iframe
            v-if="podcast.show"
            :src="podcast.src[podcast.active - 1]"
            loading="lazy"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <div v-show="podcast.show" class="my-2 text-center text-sm">
            <div
              v-show="podcast.src.length > 1"
              class="inline-block mr-2 lg:mx-4 cursor-pointer"
              @click="
                podcast.active = loopNext(
                  podcast.active - 1,
                  podcast.src.length
                )
              "
            >
              Prev
            </div>
            <div
              v-for="(link, index) in podcast.src"
              :key="`podcast.name-${index}`"
              class="podcast-index"
              :class="{ 'podcast-active': index == podcast.active - 1 }"
              @click="podcast.active = index + 1"
            >
              {{ index + 1 }}
            </div>
            <div
              v-show="podcast.src.length > 1"
              class="inline-block ml-2 lg:mx-4 cursor-pointer"
              @click="
                podcast.active = loopNext(
                  podcast.active + 1,
                  podcast.src.length
                )
              "
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PortfolioHeading from "../../components/PortfolioHeading.vue";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "Podcast",
  components: {
    PortfolioHeading,
  },
  data() {
    return {
      title: "talks",
      description: `
        Dito started his own podcast in 2018 with 
        <span class="italic">Dara Dan Pemuda</span>,
        then within the same year, 
        <span class="italic">Loka Bersua</span> 
        was made with his friends as the guest star. Both podcast talks about 
        sharing the perspective and experience in listening to variant music 
        genres.
        In 2019, he was entrusted to manage the
        <span class="italic">EksotisMerauke</span> 
        podcast, where it tells about the experiences when he and his 
        college friends participated in social services in Merauke, Papua.
      `,
      podcasts: [
        {
          id: 1,
          show: false,
          name: "EksotisMerauke",
          type: "spotify",
          src: [
            "https://open.spotify.com/embed-podcast/episode/4t7sqCp8WUWrBPQMxxIwn9",
            "https://open.spotify.com/embed-podcast/episode/0Yi88NzUtsbTtoWTAFIRCM",
            "https://open.spotify.com/embed-podcast/episode/1EHnsS90cf8GrxbxWPtwj6",
            "https://open.spotify.com/embed-podcast/episode/14fE8Q1JiaXRwm9LQAPuSX",
            "https://open.spotify.com/embed-podcast/episode/28yLAnbOHFlNOq5zMIh6V7",
            "https://open.spotify.com/embed-podcast/episode/1RUbojWjWv4wnDLESMbcq7",
            "https://open.spotify.com/embed-podcast/episode/3mnaUMwIP0Sa3wmB71psFc",
          ],
          active: 1,
        },
        {
          id: 2,
          show: false,
          name: "Loka Bersua",
          type: "soundcloud",
          src: [
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440655900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
          ],
          active: 1,
        },
        {
          id: 3,
          show: false,
          name: "Dara Dan Pemuda",
          type: "mixcloud",
          src: [
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol1%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol2%2F",
            "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fbuvv%2Fdara-dan-pemuda-vol4%2F",
          ],
          active: 1,
        },
      ],
    };
  },
  mounted() {
    gsap.fromTo(
      ".podcast-grid",
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: ".podcast-grid-container",
          start: "top 80%",
          end: "20% 30%",
          toggleActions: "play none none none",
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
  },
  methods: {
    loopNext(id: number, length: number) {
      const len = length;
      if (id > len) {
        id = 1;
      } else if (id < 1) {
        id = len;
      }
      return id;
    },
  },
});
</script>

<style scoped>
.podcast-grid {
  margin-top: 5px;
  height: 160px;
}
.podcast-text {
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 2.4vw;
  font-style: italic;
  font-weight: 500;
  box-shadow: 0.5px 0.5px 3px 0px rgba(26, 26, 26, 0.596);
}

.podcast-text:hover {
  transform: translateY(-2%);
}

.podcast-fade-enter-active,
.podcast-fade-leave-active {
  position: absolute;
  transition: all 0.5s;
}
.podcast-fade-enter,
.podcast-fade-leave-to {
  opacity: 0;
}

.podcast-index {
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 100%;
  display: inline-block;
  padding: 0 0.5em;
  margin: 0 0.2em;
  color: #404040;
}

.podcast-index:hover {
  background-color: #f7f7f2;
  opacity: 0.5;
}

.podcast-active {
  background-color: #c7c7c7;
  color: #fafafa;
}

@media screen and (max-width: 1279px) {
  .podcast-text {
    font-size: 2.8vw;
    border-radius: 0.2em;
  }
}

@media screen and (max-width: 639px) {
  .podcast-grid {
    height: 150px;
  }
  .podcast-text {
    font-size: 6vw;
    border-radius: 0.2em;
  }

  .podcast-index {
    display: inline-block;
    padding: 0 0.4em;
    margin: 0 0.015em;
  }
}
</style>
