<template>
  <Main>
    <div class="relative px-8 md:px-20 lg:px-20 xl:pb-0">
      <div class="posts mx-auto">
        <div class="posts-head">
          <h1 class="posts-title font-cormorant">Posts</h1>
          <p class="posts-lede">
            Instagram posts and reels by Dito. Scroll each row sideways.
          </p>
        </div>

        <div
          v-for="(account, a) in accounts"
          :key="account.name"
          ref="rows"
          class="row"
        >
          <div class="row-head">
            <h2 class="row-name">{{ account.name }}</h2>
            <div v-if="account.posts.length > 2" class="row-controls">
              <button
                type="button"
                class="row-btn"
                :aria-label="`Previous ${account.name} posts`"
                @click="scrollRow(a, -1)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                type="button"
                class="row-btn"
                :aria-label="`Next ${account.name} posts`"
                @click="scrollRow(a, 1)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <ul ref="tracks" class="track">
            <li
              v-for="(post, i) in account.posts"
              :key="post.link"
              class="track-item"
            >
              <a :href="post.link" class="card" target="_blank" rel="noopener">
                <span class="card-index">
                  {{ i + 1 }} of {{ account.posts.length }}
                </span>
                <span class="card-title">{{ post.title }}</span>
                <span class="card-kind">
                  {{ isReel(post.link) ? "Watch the reel" : "Open the post" }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Main from "./Main/Main.vue";

gsap.registerPlugin(ScrollTrigger);

export default Vue.extend({
  name: "Posts",
  components: {
    Main,
  },
  data() {
    return {
      accounts: [
        {
          name: "CISDI",
          posts: [
            {
              title:
                "Kita Butuh Langit Biru, Bukan Kelabu",
              link: "https://www.instagram.com/p/DfHWYVBHY_L/",
            },
            {
              title:
                "Penanganan Karhutla oleh Pemerintah yang Tersendat-sendat Bisa Membebani Sistem Kesehatan",
              link: "https://www.instagram.com/p/DeeQ6wgieSz/",
            },
          ],
        },
        {
          name: "TRACK SDGs",
          posts: [
            {
              title:
                "Sebagai Warga, Kita Juga Bisa memberitakan Isu Kesehatan di Sekitar Kita",
              link: "https://www.instagram.com/p/DaNRurjmNb2/",
            },
            {
              title:
                "Dari Data Menjadi Cerita: Memahami Isu Polusi Udara Lebih Utuh",
              link: "https://www.instagram.com/p/Dc3LBZrmCF7/",
            },
          ],
        },
        {
          name: "Pencerah Nusantara",
          posts: [
            {
              title:
                "POV Nakes ketika tahu super flu terdeteksi di Indonesia",
              link: "https://www.instagram.com/p/DTxMNwtk85a/",
            },
            {
              title:
                "2 Menit Belajar El Nino: Fenomena Panas yang Bikin Nakes Mesti Waspada DBD",
              link: "https://www.instagram.com/p/DYmIhakE6Xy/",
            },
            {
              title:
                "2 Menit Belajar Virus Nipah",
              link: "https://www.instagram.com/p/DUYC5chE-xh/",
            },
          ],
        },
        {
          name: "Primary Healthcare Impact Lab",
          posts: [
            {
              title:
                "Kunci Ketahanan Sistem Kesehatan: Pelibatan Komunitas",
              link: "https://www.instagram.com/p/DZ9TeRRDw08/",
            },
            {
              title:
                "Belajar dari Rwanda: Bagaimana Mereka Memangkas Waktu Tempuh Masyarakat ke Layanan Kesehatan?",
              link: "https://www.instagram.com/p/DbR8M62Dy0w/",
            },
            {
              title:
                "Merancang Ulang Layanan Kesehatan Primer: Dari Fasilitas Hingga Layanan yang Memahami Komunitas",
              link: "https://www.instagram.com/p/DcsbE3tD6hB/",
            },
          ],
        },
        {
          name: "Raoul Wallenberg Institute",
          posts: [
            {
              title:
                "Right Livelihood Award Laureate",
              link: "https://www.instagram.com/p/C6Gf3mHNgF0/",
            },
            {
              title:
                "#RWIAt40 - Interview with Göran Melander, the first director of the Raoul Wallenberg Institute",
              link: "https://www.instagram.com/reel/C4ih8OTC9cL/",
            },
            {
              title:
                "New Podcast Episode: Humaira Rasuli, Research Fellow with RWI Afghanistan Program for 2024",
              link: "https://www.instagram.com/reel/C-K4wcuKqeO/",
            },
            {
              title:
                "New Podcast Episode: Kobra Moradi, Research Fellow with RWI Afghanistan Program",
              link: "https://www.instagram.com/reel/C9U6-rgoo-p/",
            },
            {
              title:
                "Meet the Team RWI",
              link: "https://www.instagram.com/reel/C-HuIiyOjU-/",
            },
            {
              title:
                "How do you say ‘human rights for all’ in your local language?",
              link: "https://www.instagram.com/reel/C-uopErO78n/",
            },
          ],
        },
        {
          name: "MyEduSolve",
          posts: [
            {
              title:
                "Habis Lulus, Kok Belum Dapat Fulus",
              link: "https://www.instagram.com/p/CihmIwwtbkQ/",
            },
            {
              title:
                "First Day Kerja Malah Telat Bangun?",
              link: "https://www.instagram.com/p/CjAf1c-vStk/",
            },
            {
              title:
                "Basic Skill Terasah, Mimpi Jadi Video Editor Semakin Nyata!",
              link: "https://www.instagram.com/p/CmicxJ5y9pm/",
            },
            {
              title:
                "Bukan Sulap, Bukan Sihir!",
              link: "https://www.instagram.com/reel/CighAOXvvop/",
            },
            {
              title:
                "Gaji Fresh Graduate Bisa Sampe 8 Juta?!",
              link: "https://www.instagram.com/p/CiSd74VP1Ty/",
            },
            {
              title:
                "4 Teknik Kuatkan Hati Saat Merasa Tertinggal dari Orang Lain",
              link: "https://www.instagram.com/p/Cicx0xaNBVh/",
            },
            {
              title:
                "5 Tools Wajib Bagi Freelancer Agar Kerja Jadi Mudah!",
              link: "https://www.instagram.com/p/Ci6s0apjGwW/",
            },
            {
              title:
                "Buat Apa Ngerjain Kerjaan di Luar Jobdesc Posisimu?",
              link: "https://www.instagram.com/p/CjFqN3ZPv5Q/",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // Each row fades up once it reaches the lower part of the screen.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (this.$refs.rows as Element[]).forEach((row) => {
      gsap.from(row, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: row, start: "top 85%", once: true },
      });
    });
  },
  methods: {
    // Reels have /reel/ in their link, everything else is a post.
    isReel(link: string): boolean {
      return link.includes("/reel/");
    },
    // Moves a row sideways by one card.
    scrollRow(index: number, direction: number) {
      const track = (this.$refs.tracks as HTMLElement[])[index];
      const card = track.querySelector(".track-item") as HTMLElement | null;
      const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollBy({ left: direction * step, behavior: reduce ? "auto" : "smooth" });
    },
  },
});
</script>

<style scoped>
.posts {
  max-width: 64rem;
  padding-bottom: 3rem;
}

.posts-head {
  max-width: 36rem;
  margin-bottom: 3.5rem;
}

.posts-title {
  font-size: 3vw;
  font-weight: 500;
  line-height: 1;
  opacity: 0.85;
}

.posts-lede {
  margin-top: 1rem;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #767676;
}

.row {
  margin-bottom: 3.5rem;
}

.row-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.row-name {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 700;
  overflow-wrap: break-word;
  min-width: 0;
}

.row-controls {
  display: flex;
  flex: none;
  gap: 0.5rem;
}

.row-btn {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: #262626;
  background: transparent;
  border: 1px solid #262626;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease,
    transform 0.15s ease;
}

.row-btn svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
}

.row-btn:hover {
  color: white;
  background: #262626;
}

.row-btn:active {
  transform: scale(0.94);
}

.track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(13rem, 16rem);
  gap: 1rem;
  padding: 0 0 1rem;
  margin: 0;
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #e7e7e7 transparent;
}

/* Each card stretches to the tallest card in its row, so a row is one even height. */
.track-item {
  display: flex;
  scroll-snap-align: start;
}

/* 4:5 portrait, the shape of an Instagram feed post. */
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  aspect-ratio: 4 / 5;
  padding: 1.25rem;
  color: white;
  text-decoration: none;
  background: #262626;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  background: #393939;
  transform: translateY(-3px);
}

.card:active {
  transform: translateY(0);
}

.card-index {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.72);
}

.card-title {
  flex: 1;
  font-size: 1.35rem;
  line-height: 1.3;
  overflow-wrap: break-word;
  min-width: 0;
}

.card-kind {
  font-size: 0.95rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.row-btn:focus-visible,
.card:focus-visible {
  outline: 2px solid #262626;
  outline-offset: 3px;
}

@media screen and (max-width: 1023px) {
  .posts-title {
    font-size: 6vw;
  }
}

@media screen and (max-width: 639px) {
  .posts-title {
    font-size: 8.4vw;
  }
}

@media (prefers-reduced-motion: reduce) {
  .row-btn,
  .card {
    transition: none;
  }

  .card:hover {
    transform: none;
  }
}
</style>
