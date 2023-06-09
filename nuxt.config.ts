// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: "http://127.0.0.1:3001",
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
