// Instagram posts Dito wrote or produced, grouped by the account that published them.
// Links are trimmed to the bare post URL (the share-sheet tracking params are dropped).
// `kind` comes from the URL: /p/ is a post or carousel, /reel/ is a video.

export type PostKind = "post" | "reel";

export interface InstagramPost {
  title: string;
  link: string;
  kind: PostKind;
}

export interface InstagramAccount {
  id: number;
  name: string;
  posts: InstagramPost[];
}

const post = (id: string, title: string): InstagramPost => ({
  title,
  link: `https://www.instagram.com/p/${id}/`,
  kind: "post",
});

const reel = (id: string, title: string): InstagramPost => ({
  title,
  link: `https://www.instagram.com/reel/${id}/`,
  kind: "reel",
});

export const accounts: InstagramAccount[] = [
  {
    id: 6,
    name: "CISDI",
    posts: [
      post("DfHWYVBHY_L", "Kita Butuh Langit Biru, Bukan Kelabu"),
      post(
        "DeeQ6wgieSz",
        "Penanganan Karhutla oleh Pemerintah yang Tersendat-sendat Bisa Membebani Sistem Kesehatan"
      ),
    ],
  },
  {
    id: 5,
    name: "TRACK SDGs",
    posts: [
      post(
        "DaNRurjmNb2",
        "Sebagai Warga, Kita Juga Bisa memberitakan Isu Kesehatan di Sekitar Kita"
      ),
      post(
        "Dc3LBZrmCF7",
        "Dari Data Menjadi Cerita: Memahami Isu Polusi Udara Lebih Utuh"
      ),
    ],
  },
  {
    id: 4,
    name: "Pencerah Nusantara",
    posts: [
      post(
        "DTxMNwtk85a",
        "POV Nakes ketika tahu super flu terdeteksi di Indonesia"
      ),
      post(
        "DYmIhakE6Xy",
        "2 Menit Belajar El Nino: Fenomena Panas yang Bikin Nakes Mesti Waspada DBD"
      ),
      post("DUYC5chE-xh", "2 Menit Belajar Virus Nipah"),
    ],
  },
  {
    id: 3,
    name: "Primary Healthcare Impact Lab",
    posts: [
      post(
        "DZ9TeRRDw08",
        "Kunci Ketahanan Sistem Kesehatan: Pelibatan Komunitas"
      ),
      post(
        "DbR8M62Dy0w",
        "Belajar dari Rwanda: Bagaimana Mereka Memangkas Waktu Tempuh Masyarakat ke Layanan Kesehatan?"
      ),
      post(
        "DcsbE3tD6hB",
        "Merancang Ulang Layanan Kesehatan Primer: Dari Fasilitas Hingga Layanan yang Memahami Komunitas"
      ),
    ],
  },
  {
    id: 2,
    name: "Raoul Wallenberg Institute",
    posts: [
      post("C6Gf3mHNgF0", "Right Livelihood Award Laureate"),
      reel(
        "C4ih8OTC9cL",
        "#RWIAt40 - Interview with Göran Melander, the first director of the Raoul Wallenberg Institute"
      ),
      reel(
        "C-K4wcuKqeO",
        "New Podcast Episode: Humaira Rasuli, Research Fellow with RWI Afghanistan Program for 2024"
      ),
      reel(
        "C9U6-rgoo-p",
        "New Podcast Episode: Kobra Moradi, Research Fellow with RWI Afghanistan Program"
      ),
      reel("C-HuIiyOjU-", "Meet the Team RWI"),
      reel(
        "C-uopErO78n",
        "How do you say ‘human rights for all’ in your local language?"
      ),
    ],
  },
  {
    id: 1,
    name: "MyEduSolve",
    posts: [
      post("CihmIwwtbkQ", "Habis Lulus, Kok Belum Dapat Fulus"),
      post("CjAf1c-vStk", "First Day Kerja Malah Telat Bangun?"),
      post(
        "CmicxJ5y9pm",
        "Basic Skill Terasah, Mimpi Jadi Video Editor Semakin Nyata!"
      ),
      reel("CighAOXvvop", "Bukan Sulap, Bukan Sihir!"),
      post("CiSd74VP1Ty", "Gaji Fresh Graduate Bisa Sampe 8 Juta?!"),
      post(
        "Cicx0xaNBVh",
        "4 Teknik Kuatkan Hati Saat Merasa Tertinggal dari Orang Lain"
      ),
      post(
        "Ci6s0apjGwW",
        "5 Tools Wajib Bagi Freelancer Agar Kerja Jadi Mudah!"
      ),
      post(
        "CjFqN3ZPv5Q",
        "Buat Apa Ngerjain Kerjaan di Luar Jobdesc Posisimu?"
      ),
    ],
  },
];

// The design variants under /posts, used by the hub page and the switcher bar.
export const designs = [
  { to: "/posts/1", name: "Publications copy", note: "The Publications page as it is, with these posts on the sand photo." },
  { to: "/posts/2", name: "Backgrounds", note: "Design 1 with a button that cycles through six backgrounds." },
  { to: "/posts/3", name: "Contents", note: "A book-style table of contents. Account names stay pinned on the left while you scroll." },
  { to: "/posts/4", name: "Grid", note: "Square tiles laid out like an Instagram grid, with the title in place of the image." },
  { to: "/posts/5", name: "Carousel", note: "One sideways-scrolling row of portrait cards per account, closest to the carousel idea." },
];
