export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          rel: "stylesheet"
        },
      ]
    }
  },
  css: [
    "~/assets/index.scss",
  ],
  modules: [
    "@pinia/nuxt",
  ],
  axios: {
    credentials: true,
  }
})
