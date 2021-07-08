<template>
  <Main>
    <div class="relative px-8 md:px-20 lg:px-20 pb-40">
      <div class="text-center lg:w-1/2 mx-auto">
        <div class="font-bold no-underline text-gray-dito">Whiteboardjournal</div>
        <div class="text-gray-600 underline lg:w-1/2 mx-auto">
          <div v-for="article in whiteboard" :key="article.title" class="py-2">
            <a :href="article.link">
              {{ article.title }}
            </a>
          </div>
        </div>

        <div class="font-bold no-underline text-gray-dito mt-12">Issuu</div>
        <div class="text-gray-600 underline lg:w-1/2 mx-auto">
          <div v-for="article in issuu" :key="article.title" class="py-2">
            <a :href="article.link">
              {{ article.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import Vue from 'vue';
import Main from './Main/Main.vue';

export default Vue.extend({
  name: "Publications",
  components: {
    Main,
  },
  data: function () {
    return {
      whiteboard: [
        {
          title: "Database Ketersediaan Oksigen, Hingga Pendampingan Isolasi Mandiri, Kami Merangkum Inisiatif Warga untuk Membantu Kita Menghadapi Pandemi",
          link: "https://www.whiteboardjournal.com/ideas/human-interest/database-ketersediaan-oksigen-hingga-pendampingan-isolasi-mandiri-kami-merangkum-inisiatif-warga-untuk-membantu-kita-menghadapi-pandemi/"
        },
        {
          title: "Kabar dari Tenaga Medis di Saat Pandemi Kembali Memasuki Fase Kritis",
          link: "https://www.whiteboardjournal.com/ideas/human-interest/kabar-dari-tenaga-medis-di-saat-pandemi-kembali-memasuki-fase-kritis/"
        },
        {
          title: "Ngakalin Jakarta Bersama Lomba Sihir",
          link: "https://www.whiteboardjournal.com/ideas/music/ngakalin-jakarta-bersama-lomba-sihir/"
        },
        {
          title: "Tentang New York, Figur Ibu, dan Di Antaranya Bersama Cast “Ali & Ratu Ratu Queens”",
          link: "https://www.whiteboardjournal.com/ideas/film/tentang-new-york-figur-ibu-dan-di-antaranya-bersama-cast-ali-ratu-ratu-queens/"
        },
        {
          title: "Suara Diaspora Indonesia di Tengah Hiruk Pikuk Pelaksanaan Olimpiade Tokyo",
          link: "https://www.whiteboardjournal.com/ideas/human-interest/suara-diaspora-indonesia-di-tengah-hiruk-pikuk-pelaksanaan-olimpiade-tokyo/"
        },
        {
          title: "Budaya Sepeda: Apakah Kesadaran Lingkungan, Tren atau Adu Gengsi?",
          link: "https://www.whiteboardjournal.com/living/sports/budaya-sepeda-apakah-kesadaran-lingkungan-tren-atau-adu-gengsi/"
        },
        {
          title: "Film “Seperti Dendam, Rindu Harus Dibayar Tuntas” Akan Berkompetisi di Program Paling Bergengsi Locarno Film Festival 2021",
          link: "https://www.whiteboardjournal.com/ideas/film/film-seperti-dendam-rindu-harus-dibayar-tuntas-akan-berkompetisi-di-program-paling-bergengsi-locarno-film-festival-2021/"
        },
        {
          title: "Melihat Bagaimana Video Musik Menjadi Arsip Sejarah Kita di Diskusi Online Kineforum",
          link: "https://www.whiteboardjournal.com/ideas/film/melihat-bagaimana-video-musik-menjadi-arsip-sejarah-kita-di-diskusi-online-kineforum/"
        },
        {
          title: "Travis Scott Hadir di Indonesia dengan Rilisan Eksklusif Cactus Jack dan Astroworld Lewat Sonderlab",
          link: "https://www.whiteboardjournal.com/ideas/travis-scott-hadir-di-indonesia-dengan-rilisan-eksklusif-cactus-jack-dan-astroworld-lewat-sonderlab/"
        },
        {
          title: "Aesthetic Pleasure dan Sonderlab Keluarkan Koleksi Terbaru dengan Tema “Buy Less, Wear More”",
          link: "https://www.whiteboardjournal.com/ideas/fashion/aesthetic-pleasure-dan-sonderlab-keluarkan-koleksi-terbaru-dengan-tema-buy-less-wear-more/"
        },
        {
          title: "“24 Jam Bersama Gaspar” Karangan Sabda Armandio akan Dijadikan Film Terbaru oleh Yosep Anggi Noen",
          link: "https://www.whiteboardjournal.com/ideas/film/24-jam-bersama-gaspar-karangan-sabda-armandio-akan-dijadikan-film-terbaru-oleh-yosep-anggi-noen/"
        },
        {
          title: "Di Season Terbaru “Master of None”, Aziz Ansari Semakin Berani Bereksperimen",
          link: "https://www.whiteboardjournal.com/ideas/film/di-season-terbaru-masters-of-none-aziz-ansari-semakin-berani-bereksperimen/"
        },
      ],
      issuu: [
        {
          title: "Mati Lampu vol4",
          link: "https://issuu.com/matilampu/docs/mati_lampu_vol4_7f301e70bf19a9"
        },
        {
          title: "Kaput",
          link: "https://issuu.com/haninditobuwono9413/docs/kaput_rev"
        },
      ]
    }
  }
})
</script>

<style scoped>

</style>