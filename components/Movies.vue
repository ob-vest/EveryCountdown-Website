<template>
  <div class="space-y-5">
    <h1 class="mx-auto text-center">Movies</h1>
    <div class="grid grid-cols-3 gap-5">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <!-- <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.headline }}</li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { Movie } from "@/types/Movie";
export default {
  data() {
    return {
      movies: [] as Movie[],
    };
  },
  mounted() {
    fetch("https://everycountdown-apiservice-production.up.railway.app/movies")
      .then((response) => response.json())
      .then((data: Movie[]) => {
        this.movies = data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
