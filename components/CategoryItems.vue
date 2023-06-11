<template>
  <div class="space-y-5">
    <h1 class="mx-auto text-center">{{ title }}</h1>
    <slot />

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-5 sm:mx-0"
    >
      <div v-for="item in items" :key="item.id">
        <nuxt-link :to="'/' + item.type + '/' + item.id">
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
// Could also just be simpler with script setup
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    headerTitle: {
      type: String,
      required: false,
    },
  },
  async setup(props) {
    const items = ref(null as CategoryItem[] | null);
    const route = useRoute();
    const config = useRuntimeConfig();
    // console.log(route.path);
    const { data } = await useFetch(route.path, {
      baseURL: config.public.baseURL,
    });
    useSeoMeta({
      title:
        props.headerTitle == null
          ? "Discover Upcoming " + props.title + " and Their Release Dates"
          : props.headerTitle,

      description:
        "Explore all countdowns related to " +
        props.title.toLowerCase() +
        " and sorted by when they are airing. Get to know all the details about release date, description, and more.",
    });
    items.value = data.value as CategoryItem[];
    return {
      items: items,
    };
  },
};
</script>
