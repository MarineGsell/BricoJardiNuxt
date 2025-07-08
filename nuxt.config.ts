// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;',
        },
      },
    },
  },

  modules: ['@nuxthub/core', 'nuxt-auth-utils', 'nuxt-nodemailer'],
  hub: {
    database: true
  },
  nodemailer: {
    from: process.env.NUXT_NODEMAILER_FROM,
    host: process.env.NUXT_NODEMAILER_HOST,
    port: process.env.NUXT_NODEMAILER_PORT,
    secure: process.env.NUXT_NODEMAILER_SECURE,
    auth: {
      user: process.env.NUXT_NODEMAILER_AUTH_USER,
      pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
    },
  },
})