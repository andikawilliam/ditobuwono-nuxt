<template>
  <Main>
    <div class="relative px-8 md:px-16 lg:px-20 pb-32 sm:pb-20 lg:pb-40">
      <PortfolioHeading :title="title" :description="description" />
      <div
        class="mx-auto sm:grid sm:grid-cols-3 lg:w-4/5 sm:gap-2 md:gap-12 lg:gap-16 xl:gap-24"
      >
        <div
          v-for="book in books"
          :key="book.id"
          class="lg:row-span-1 lg:col-span-1 px-0 mb-32 sm:my-0"
        >
          <a :href="book.src">
            <div class="cover-container relative grayscale mx-auto lg:px-4">
              <img
                :src="book.cover"
                class="mx-auto publication-cover w-full grayscale"
              >
            </div>
          </a>
          <div class="lg:px-2 pt-6 lg:pt-4">
            <p class="title-text text-center font-medium font-cormorant pb-2">
              {{ book.title }}
            </p>
            <p
              class="description-text text-center font-light pb-4"
              v-html="book.description"
            />
            <div
              v-if="book.accolades"
              class="description-text text-center font-light italic pb-4"
            >
              <p v-for="accolade in book.accolades" :key="accolade">
                {{ accolade }}
              </p>
            </div>
            <div v-if="book.orderLink" class="flex justify-center">
              <button
                class="order-text button mx-auto p-1 lg:px-4 underline rounded-lg hover:bg-white hover:text-black"
              >
                <a :href="book.orderLink">
                  Order Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeading from '../components/PortfolioHeading.vue'
import Main from './Main/Main.vue'

export default Vue.extend({
  name: 'Books',
  components: {
    Main,
    PortfolioHeading
  },
  data () {
    return {
      title: 'books',
      description: `
        Dito started writing short stories from junior high school.
        Since then he has been happy to write whenever he has free time, with some
        of his writings still not published. In 2017, Dito was invited by 
        his college friend to become a contributor for his campus independent 
        zine, 
        <span class="italic">Mati Lampu</span>. 
        And finally, on the 20th of January 2021, he published his first book called
        <span class="italic">Because the End Is Really the Beginning</span>.
      `,
      books: [
        {
          id: 1,
          src: 'https://linktr.ee/EndIsBeginning',
          cover: require('~/assets/cover-the-end.webp'),
          title: 'Because the End Is Really the Beginning',
          description: `
          Dito wrote a short story book about regrets.
          Where according to him, a mistake will remain forever
          and it is part of our life. <br>
          It cannot be forced to
          be erased, we must embraced it in
          our body and soul. With the illustration and audio
          in this book, Dito hopes that his readers can feel
          the feelings that he has felt during his life until now.
          `,
          accolades: [
            "Editors' Choice at bukuindie.com",
            'Book Talks at “Bedah Buku Madania“'
          ],
          orderLink: 'https://linktr.ee/EndIsBeginning'
        },
        {
          id: 2,
          src:
            'https://issuu.com/matilampu/docs/mati_lampu_vol4_7f301e70bf19a9',
          cover: require('~/assets/cover-toleransi.webp'),
          title: 'Mati Lampu Vol.4: Toleransi',
          description: `
            Became a contributor to the fourth volume of “Mati Lampu” zine.
            This zine raises about tolerance, where it is moved to see a "reality of
            tolerance" with differences as a principle of analysis: seeing the
            distance from idealization of tolerance, with empirical reality.
          `
        },
        {
          id: 3,
          src: 'https://issuu.com/haninditobuwono9413/docs/kaput_rev',
          cover: require('~/assets/cover-kaput.webp'),
          title: 'Kaput',
          description: `
            Kaput is one of Dito’s cathartic medium in the midst of this pandemic. 
            Where he tries to maintain his sanity with a choice of songs, 
            which he thinks can help him to get through this uncertainty.
          `
        }
      ]
    }
  }
})
</script>

<style scoped>
.grid-container {
  width: 1024px;
}

.publication-cover {
  width: 100%;
  height: auto;
}

.cover-container {
  transition: transform 0.5s;
}
.cover-container:hover {
  transform: translateY(-1vw);
}

.cover-container:hover .description-text {
  height: 100%;
}

.title-text {
  font-size: 1.3vw;
}

.description-text {
  font-size: 0.9vw;
  letter-spacing: 0.02em;
}
.order-text {
  font-size: 0.9vw;
}

@media screen and (max-width: 1280px) {
  .grid-container {
    width: 800px;
  }
}

@media screen and (max-width: 1023px) {
  .grid-container {
    width: 720px;
  }
  .cover-container {
    width: 200px;
  }
  .title-text {
    font-size: 2vw;
  }

  .description-text {
    font-size: 1vw;
    height: auto;
  }

  .order-text {
    font-size: 1vw;
  }
}

@media screen and (max-width: 768px) {
  .grid-container {
    width: 600px;
  }
  .cover-container {
    width: 150px;
  }
}

@media screen and (max-width: 639px) {
  .grid-container {
    width: 100%;
  }
  .cover-container {
    width: 100%;
  }
  .title-text {
    font-size: 5vw;
  }
  .description-text {
    font-size: 3.5vw;
  }

  .order-text {
    font-size: 3.5vw;
  }
}
</style>
