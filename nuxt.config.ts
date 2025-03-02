// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      omDBApiKey: process.env.NUXT_OMDB_API_KEY
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-svgo', 'nuxt-snackbar'],
  snackbar: {
    top: true,
    left: true,
    duration: 5000
  },
  vite: {
    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/abstract/index";'
        }
      }
    },
    vue: {
      /* options for vite-plugin-vue2 */
    }
  }
});
