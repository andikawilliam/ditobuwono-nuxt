<template>
  <Main>
    <div class="relative px-8 md:px-20 lg:px-20 pb-40">
      <PortfolioHeading :title="title" :description="description" />
      <div class="relative">
        <div class="sm:w-2/3 md:w-4/5 lg:w-1/2 mx-auto overflow-hidden">
          <FilmWork
            v-for="film in films"
            :id="film.id"
            :key="film.id"
            :image="film.image"
            :title="film.title"
            :type="film.type"
            :role="film.role"
            :accolades="film.accolades"
            :href="film.href"
          />
        </div>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeading from '../components/PortfolioHeading.vue'

import FilmWork from '../components/FilmWork.vue'
import Main from './Main/Main.vue'

export default Vue.extend({
  name: 'Filmography',
  components: {
    // TheNav,
    Main,
    PortfolioHeading,
    FilmWork
  },
  data () {
    return {
      title: 'filmography',
      description: `
        Dito's passion for cinema has existed since early childhood influenced  
        by his father.
        He started by making short films with his friends when 
        he was in high school.
        <span class="italic"> Terbelenggu </span> (2014)
        and 
        <span class="italic"> Menyusulmu Bisa Menunggu </span> (2015)
        are short films that he has starred in. After a long time, on the 1st of September 2020, 
        <span class="italic">Belrusak</span> has been premiered as
        Dito's directorial debut in the form of a short documentary.
      `,
      activeFilm: 0,
      films: [
        {
          id: 1,
          image: require('~/assets/ss-gerajak.jpeg'),
          title: 'Gerajak (2021)',
          type: 'Short Surrealist Dance Film',
          role: 'Roles: Script Continuity, Still Photographer',
          accolades: [
          'MIP Awards Moving Image of the Year 2021',
          'Official Selection Himafisi Film Festival 2021',
          'Top 20 Fiction Short Film Category Balimakarya Short Film & Documentary Festival 2021'
          ],
          href: 'https://www.instagram.com/agterplaasproduction/'
        },
        {
          id: 2,
          image: require('~/assets/ss-belrusak.webp'),
          title: 'Belrusak (2020)',
          type: 'Short Documentary Film',
          role: 'Role: Director',
          accolades: [
            'Best Documentary October Edition Feel The Reel International Film Festival 2020',
            'Top 25 Short Documentaries Recommended by Associations from Festival Film Indonesia 2021',
            'Official Selection Feel The Reel International Film Festival 2020',
            'Official Selection Lift-Off Global Network First-Time Filmmaker Sessions 2020',
            'Official Selection Lift-Off Global Network Lift-Off Sessions 2020',
            'Official Selection Viddsee Juree Awards Indonesia 2020'
          ],
          href: 'https://www.viddsee.com/video/belrusak/ywxkh'
        },
        {
          id: 3,
          image: require('~/assets/ss-menyusulmu.webp'),
          title: 'Menyusulmu Bisa Menunggu (2015)',
          type: 'Short Fiction Film',
          role: 'Roles: Actor, Producer',
          accolades: ['Winner SMA Global Jaya Film Festival 2015'],
          href: 'https://youtu.be/BMIpvCrxou4'
        },
        {
          id: 4,
          image: require('~/assets/ss-terbelenggu.webp'),
          title: 'Terbelenggu (2014)',
          type: 'Short Fiction Film',
          role: 'Roles: Actor, Music Director',
          accolades: ['Winner 8Schoolastic SMAN 8 Jakarta Film Festival 2014'],
          href: 'https://youtu.be/_Q2Xg5CHHf8'
        }
      ]
    }
  }
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
