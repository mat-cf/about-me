export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/global.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
