// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: ['assets/style.scss'],
  devtools: { enabled: true },
});
