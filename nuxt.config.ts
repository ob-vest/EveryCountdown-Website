// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "nuxt-simple-sitemap"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [{ name: "darkreader-lock" }],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "https://everycountdown-apiservice-production.up.railway.app",
      email: "everycountdown@invoke.dk",
      siteUrl: "https://everycountdown.com",
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    // https://github.com/cpreston321/nuxt-swiper/issues/55#issuecomment-1519865502
    compilerOptions: {
      isCustomElement: (tag: string) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },
});
