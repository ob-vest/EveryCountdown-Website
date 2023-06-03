<template>
  <div class="space-y-5">
    <h1 class="mx-auto text-center">Movies</h1>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="movie in movies" :key="movie.id">
        <nuxt-link :to="'/movies/' + movie.id">
          <MovieCard :movie="movie" />
        </nuxt-link>
      </div>
    </div>
    <!-- <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.headline }}</li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { Movie } from "@/types/Movie";
// Could also just be simpler with script setup
export default {
  async setup() {
    const movies = ref(null as Movie[] | null);

    const data = await $fetch(
      "https://everycountdown-apiservice-production.up.railway.app/movies"
    ).catch((error) => error.data);

    movies.value = data as Movie[];
    return { movies };
  },
};
</script>
