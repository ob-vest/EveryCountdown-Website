<template>
  <div class="w-full text-center space-y-10 px-5" v-if="movie">
    <section
      class="bg-[url('/matrix-template.png')] h-96 bg-blend-multiply bg-black bg-opacity-60 rounded-3xl"
    >
      <div class="flex flex-col h-full justify-center items-center my-auto">
        <h1>{{ movie.headline }}</h1>
        <h2 class="text-secondary">{{ movie.subheadline }}</h2>
      </div>
    </section>
    <section v-if="movie.description" class="space-y-2">
      <h2>Storyline</h2>
      <p class="text-secondary text-left">{{ movie.description }}</p>
    </section>
    <!-- <swiper-container>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container> -->
    <section class="space-y-2" v-if="movie.videos">
      <h2>Video</h2>
      <swiper-container
        class="py-10"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      >
        <!-- <div> -->
        <swiper-slide
          class="px-12"
          v-for="(video, index) in movie.videos"
          :key="index"
        >
          <iframe
            class="w-full h-96 rounded-2xl"
            :src="video.url"
            :title="video.title"
            frameborder="1"
            allow="picture-in-picture; fullscreen"
          ></iframe>
          <p>{{ video.title }}</p>
        </swiper-slide>

        <!-- </div> -->
      </swiper-container>
    </section>
    <section v-if="movie.links" class="space-y-2">
      <h2>Links</h2>
      <div class="flex flex-col justify-start items-start space-y-4">
        <a
          v-for="(link, index) in movie.links"
          :key="index"
          class="text-secondary bg-white bg-opacity-10 w-full py-3 rounded-lg hover-underline-animation flex items-center space-x-2 justify-start"
          :href="link.url"
          target="_blank"
        >
          <p class="text-left ml-5">{{ index + 1 }}</p>
          <div class="text-center mx-auto w-full">
            <h3 class="line-clamp-1">
              {{ link.title }}
            </h3>
            <p class="text-secondary text-opacity-50">{{ link.url }}</p>
          </div>
        </a>
      </div>
    </section>
    <!-- <section>
      <h1>Official Twitter Posts</h1>
    </section> -->
  </div>
</template>
<script setup lang="ts">
import { Movie, Link } from "@/types/Movie";
import { register } from "swiper/element/bundle";

register();

const route = useRoute();
const movie = ref(null as Movie | null);
// const links = ref(null as Link[] | null);

const data = await $fetch(
  "https://everycountdown-apiservice-production.up.railway.app/movies/" +
    route.params.id
).catch((error) => error.data);

movie.value = data as Movie;
</script>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ffffff;
}
</style>
