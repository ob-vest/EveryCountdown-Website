<template>
  <div class="space-y-5">
    <h1 class="mx-auto text-center">Movies</h1>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="item in items" :key="item.id">
        <nuxt-link :to="path + item.id">
          <MovieCard :item="item" />
        </nuxt-link>
      </div>
    </div>
    <!-- <ul>
        <li v-for="movie in movies" :key="movie.id">{{ movie.headline }}</li>
      </ul> -->
  </div>
</template>

<script lang="ts">
import { CategoryItem } from "@/types/CategoryItem";
import BASE_URL from "@/services/api";
// Could also just be simpler with script setup
export default {
  async setup() {
    const items = ref(null as CategoryItem[] | null);
    const route = useRoute();
    console.log(route.path);
    const data = await $fetch(BASE_URL + route.path).catch(
      (error) => error.data
    );

    items.value = data as CategoryItem[];
    return { items: items };
  },
  computed: {
    path() {
      console.log(this.$route.path);
      return this.$route.path + "/";
    },
  },
};
</script>
