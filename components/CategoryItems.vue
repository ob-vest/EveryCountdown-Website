<template>
  <div class="space-y-5">
    <h1 class="mx-auto text-center">{{ title }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
  },
  async setup(props) {
    const items = ref(null as CategoryItem[] | null);
    const route = useRoute();
    const config = useRuntimeConfig();
    console.log(route.path);
    const { data } = await useFetch(route.path, {
      baseURL: config.public.baseURL,
    });
    useSeoMeta({
      title: "List of " + props.title.toLowerCase() + " | EveryCountdown",
      description:
        "List of all " +
        props.title.toLowerCase() +
        " with their countdowns. Select to find all the relevant information, including the release date, description, and more.",
    });
    items.value = data.value as CategoryItem[];
    return {
      items: items,
    };
  },
};
</script>
