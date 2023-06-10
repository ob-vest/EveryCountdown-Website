<template>
  <div class="space-y-5">
    <section class="w-full text-center">
      <h1 class="text-3xl py-20 mx-5">
        Explore Exciting Release Dates <br />
        and Upcoming Events
      </h1>
      <!-- <div class="flex gap-3 overflow-x-scroll no-scrollbar scrolling-auto">
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
      </div> -->
    </section>

    <section class="space-y-5 mx-5">
      <h2>Popular</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center"
      >
        <div v-for="(item, index) in popularItems">
          <!-- Hides last element, to make it look even when its small size, -->
          <nuxt-link
            :class="{
              'hidden md:block': index == 8,
            }"
            :to="item.type + '/' + item.id"
          >
            <MovieCard :item="item" />
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="space-y-5">
      <h2>Ending soon</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center"
      >
        <div v-for="item in endingSoonItems">
          <nuxt-link :to="item.type + '/' + item.id">
            <MovieCard :item="item" />
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- <section class="space-y-5">
      <h2>Recently added</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center"
      >
        <div v-for="item in recentItems">
          <nuxt-link :to="item.type + '/' + item.id">
            <MovieCard :item="item" />
          </nuxt-link>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script setup lang="ts">
import { CategoryItem } from "@/types/CategoryItem";
const config = useRuntimeConfig();
const popularItems = ref(null as CategoryItem | null);
const endingSoonItems = ref(null as CategoryItem | null);
const { data: recentData } = await useFetch("/ending", {
  baseURL: config.public.baseURL,
});
const { data: popularData } = await useFetch("/popular", {
  baseURL: config.public.baseURL,
});
// console.log(recentData.value);
// console.log(popularData.value);
popularItems.value = popularData.value as CategoryItem;
endingSoonItems.value = recentData.value as CategoryItem;

useSeoMeta({
  title: "EveryCountdown",
  description:
    "Discover exciting release dates and upcoming events spanning from movies to tech events, with countdowns and access to videos and news coverage for the event.",
});
</script>
<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrolling-touch {
  -webkit-overflow-scrolling: touch;
}
.scrolling-auto {
  -webkit-overflow-scrolling: auto;
}
</style>
