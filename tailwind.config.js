module.exports = {
  purge: {
    enable: true,
    content: ["./public/**/*.html", "./src/**/*.html", "./src/**/*.vue"],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [
        "md:row-span-1",
        "md:row-span-2",
        "md:row-span-3",
        "md:row-span-4",
        "md:row-span-5",
        "md:col-span-1",
        "md:col-span-2",
        "md:col-span-3",
        "md:col-span-4",
        "md:col-span-5",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brown-ivory': '#f0f0f0',
        'gray-ivory': '#e7e7e7',
        'dark-gray-ivory': '#e9e9e9',
        'black-onyx': '#0f0f0f',
        'gray-background': '#121217',
        'light-gray-dito': '#393939',
        'gray-dito': '#262626',
        'gray-dito-text': '#767676'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
