// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@nuxt/eslint',
        'nuxt-icons'
    ],
    eslint: {
      checker: true
    }
})
