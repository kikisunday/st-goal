// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: ['assets/style.scss'],
  devtools: { enabled: true },
});
