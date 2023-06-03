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

    <section class="space-y-2" v-if="movie.videos">
      <h2>Video</h2>

      <iframe
        class="w-full h-96 rounded-2xl"
        :src="movie.videos[0].url"
        :title="movie.videos[0].title"
        frameborder="1"
        allow="picture-in-picture; fullscreen"
      ></iframe>
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

const route = useRoute();
const movie = ref(null as Movie | null);
// const links = ref(null as Link[] | null);

const data = await $fetch(
  "https://everycountdown-apiservice-production.up.railway.app/movies/" +
    route.params.id
).catch((error) => error.data);

movie.value = data as Movie;
</script>
