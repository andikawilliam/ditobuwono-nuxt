<template>
  <Main class="bg-scroll bg-publications" headerColor="white">
    <div class="relative px-8 md:px-20 lg:px-20 xl:pb-0 xl:right-12">
      <div class="text-white text-left mx-auto">
        <div
          v-for="publisher in publishers"
          :key="publisher.id"
          class="lg:w-1/2 mx-auto mb-10"
        >
          <div class="text-xl italic font-bold">
            {{ publisher.name }}
          </div>
          <div
            v-for="article in publisher.articles"
            :key="article.title"
            class="underline pt-2 pb-1 text-opacity-75"
          >
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
import Vue from "vue";
import Main from "./Main/Main.vue";

export default Vue.extend({
  name: "Publication",
  components: {
    Main,
  },
  data() {
    return {
      publishers: [
      {
          id: 6,
          name: "Wonderwhy",
          articles: [
            {
              title:
                "Rejecting Aging: Reflecting Upon the Decline of the Human Population",
              link: "https://www.wonderwhysea.com/detail/rejecting-aging-reflecting-upon-the-decline-of-the-human-population?utm_campaign=later-linkinbio-wonderwhysea&utm_content=later-37295462&utm_medium=social&utm_source=linkin.bio",
            },
          ],
        },
       {
          id: 5,
          name: "MyEduSolve",
          articles: [
          {
              title:
                "Mudah! 4 Cara Menghapus Halaman Kosong di Word yang Tidak Bisa Dihapus",
              link: "https://myedusolve.com/blog/4-cara-menghapus-halaman-kosong-di-word-secara-mudah",
          },
            {
              title:
                "3 Cara Menghilangkan Garis Merah di Word Secara Mudah",
              link: "https://myedusolve.com/blog/3-cara-menghilangkan-garis-merah-di-word-secara-mudah",
            },
          {
              title:
                "Mengenal Bjorka dan Pentingnya Cyber Security Nasional",
              link: "https://myedusolve.com/blog/mengenal-bjorka-dan-pentingnya-cyber-security-nasional",
            },
            {
              title:
                "Fenomena Quiet Quitting, Apakah Itu dan Mengapa Bisa Terjadi?",
              link: "https://myedusolve.com/blog/fenomena-quiet-quitting-apakah-itu-dan-mengapa-bisa-terjadi",
            },
            {
              title:
                "Jarang Diketahui, Kenali 5 Tanda Kamu Mengalami Burnout",
              link: "https://myedusolve.com/blog/jarang-diketahui-kenali-5-tanda-kamu-mengalami-burnout",
            },
            {
              title:
                "Hustle Culture, Pengertian dan Cara Menghindarinya",
              link: "https://myedusolve.com/blog/hustle-culture-pengertian-dan-cara-menghindarinya",
            },
          ],
        },
        {
          id: 4,
          name: "Jurnal Psikologi",
          articles: [
            {
              title:
                "Understanding the Importance of Sexual Consent among University Students",
              link: "https://jurnal.ugm.ac.id/jpsi/article/view/64969",
            },
          ],
        },
        {
          id: 3,
          name: "ALSA Indonesia Specialized Research Team",
          articles: [
            {
              title:
                "Reformasi Keadilan Melalui Optimalisasi Restorative Justice dan Proyeksi Implementasi Neurolaw dalam Sistem Hukum Indonesia",
              link: "https://3f44e3af-b3b9-4d16-81b2-8d46625d8b63.filesusr.com/ugd/dbad2d_eee645835a334bd1b8f1fa364b514343.pdf",
            },
          ],
        },
        {
          id: 2,
          name: "Whiteboard Journal",
          articles: [
            {
              title:
                "Terkadang yang Kita Perlukan Hanya Kerja Secukupnya",
              link: "https://www.whiteboardjournal.com/column/terkadang-yang-kita-perlukan-hanya-kerja-secukupnya/",
            },
            {
              title:
                "Finding Solutions During a Pandemic Through Five Designers at the Online Talk Event DOOR to ASIA",
              link: "https://www.whiteboardjournal.com/ideas/design/finding-solutions-during-a-pandemic-through-five-designers-at-the-online-talk-event-door-to-asia/",
            },
            {
              title:
                "Database Ketersediaan Oksigen, Hingga Pendampingan Isolasi Mandiri, Kami Merangkum Inisiatif Warga untuk Membantu Kita Menghadapi Pandemi",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/database-ketersediaan-oksigen-hingga-pendampingan-isolasi-mandiri-kami-merangkum-inisiatif-warga-untuk-membantu-kita-menghadapi-pandemi/",
            },
            {
              title:
                "Kabar dari Tenaga Medis di Saat Pandemi Kembali Memasuki Fase Kritis",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/kabar-dari-tenaga-medis-di-saat-pandemi-kembali-memasuki-fase-kritis/",
            },
            {
              title: "Ngakalin Jakarta Bersama Lomba Sihir",
              link: "https://www.whiteboardjournal.com/ideas/music/ngakalin-jakarta-bersama-lomba-sihir/",
            },
            {
              title:
                "Tentang New York, Figur Ibu, dan Di Antaranya Bersama Cast “Ali & Ratu Ratu Queens”",
              link: "https://www.whiteboardjournal.com/ideas/film/tentang-new-york-figur-ibu-dan-di-antaranya-bersama-cast-ali-ratu-ratu-queens/",
            },
            {
              title:
                "Suara Diaspora Indonesia di Tengah Hiruk Pikuk Pelaksanaan Olimpiade Tokyo",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/suara-diaspora-indonesia-di-tengah-hiruk-pikuk-pelaksanaan-olimpiade-tokyo/",
            },
            {
              title:
                "Budaya Sepeda: Apakah Kesadaran Lingkungan, Tren atau Adu Gengsi?",
              link: "https://www.whiteboardjournal.com/living/sports/budaya-sepeda-apakah-kesadaran-lingkungan-tren-atau-adu-gengsi/",
            },
            {
              title:
                "Film “Seperti Dendam, Rindu Harus Dibayar Tuntas” Akan Berkompetisi di Program Paling Bergengsi Locarno Film Festival 2021",
              link: "https://www.whiteboardjournal.com/ideas/film/film-seperti-dendam-rindu-harus-dibayar-tuntas-akan-berkompetisi-di-program-paling-bergengsi-locarno-film-festival-2021/",
            },
            {
              title:
                "Melihat Bagaimana Video Musik Menjadi Arsip Sejarah Kita di Diskusi Online Kineforum",
              link: "https://www.whiteboardjournal.com/ideas/film/melihat-bagaimana-video-musik-menjadi-arsip-sejarah-kita-di-diskusi-online-kineforum/",
            },
            {
              title:
                "Travis Scott Hadir di Indonesia dengan Rilisan Eksklusif Cactus Jack dan Astroworld Lewat Sonderlab",
              link: "https://www.whiteboardjournal.com/ideas/travis-scott-hadir-di-indonesia-dengan-rilisan-eksklusif-cactus-jack-dan-astroworld-lewat-sonderlab/",
            },
            {
              title:
                "Aesthetic Pleasure dan Sonderlab Keluarkan Koleksi Terbaru dengan Tema “Buy Less, Wear More”",
              link: "https://www.whiteboardjournal.com/ideas/fashion/aesthetic-pleasure-dan-sonderlab-keluarkan-koleksi-terbaru-dengan-tema-buy-less-wear-more/",
            },
            {
              title:
                "“24 Jam Bersama Gaspar” Karangan Sabda Armandio akan Dijadikan Film Terbaru oleh Yosep Anggi Noen",
              link: "https://www.whiteboardjournal.com/ideas/film/24-jam-bersama-gaspar-karangan-sabda-armandio-akan-dijadikan-film-terbaru-oleh-yosep-anggi-noen/",
            },
            {
              title:
                "Di Season Terbaru “Master of None”, Aziz Ansari Semakin Berani Bereksperimen",
              link: "https://www.whiteboardjournal.com/ideas/film/di-season-terbaru-masters-of-none-aziz-ansari-semakin-berani-bereksperimen/",
            },
            {
              title:
                "Berbincang Dengan Psikolog tentang Mekanisme Coping Stres Di Saat Pandemi",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/berbincang-dengan-psikolog-tentang-mekanisme-coping-stres-di-saat-pandemi/",
            },
            {
              title:
                "Tantangan Baru untuk Iga Massardi, Kunto Aji hingga Sal Priadi dalam Berkarya di Collabonation Series 3.0",
              link: "https://www.whiteboardjournal.com/ideas/music/tantangan-baru-untuk-iga-massardi-kunto-aji-hingga-sal-priadi-dalam-berkarya-di-collabonation-series-3-0/",
            },
            {
              title:
                "Kami Mengumpulkan Tanggapan Masyarakat tentang Keputusan Perpanjangan PPKM",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/kami-mengumpulkan-tanggapan-masyarakat-tentang-keputusan-perpanjangan-ppkm/",
            },

            {
              title: "Who, What, Why: Rebricks",
              link: "https://www.whiteboardjournal.com/ideas/design/who-what-why-rebricks/",
            },
            {
              title:
                "Suara Orang Papua Tentang Permasalahan Rasisme yang Sering Terjadi di Indonesia",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/suara-orang-papua-tentang-permasalahan-rasisme-yang-sering-terjadi-di-indonesia/",
            },
            {
              title:
                "Mempertanyakan Relevansi Nasionalisme pada Generasi Terkini",
              link: "https://www.whiteboardjournal.com/ideas/human-interest/mempertanyakan-relevansi-nasionalisme-pada-generasi-terkini/",
            },
            {
              title:
                "Mengingat Persatuan dan Menemukan Makna Barunya Bersama Iwan Fals, Hindia hingga Rendy Pandugo",
              link: "https://www.whiteboardjournal.com/ideas/music/mengingat-persatuan-dan-menemukan-makna-barunya-bersama-iwan-fals-hindia-hingga-rendy-pandugo/",
            },
          ],
        },
        {
          id: 1,
          name: "Issuu",
          articles: [
            {
              title: "Mati Lampu Vol.4",
              link: "https://issuu.com/matilampu/docs/mati_lampu_vol4_7f301e70bf19a9",
            },
            {
              title: "Kaput",
              link: "https://issuu.com/haninditobuwono9413/docs/kaput_rev",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style scoped>
.bg-publications {
  background-image: url("~/assets/bg-sands.jpg");
}
</style>
