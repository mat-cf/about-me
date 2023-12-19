export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
