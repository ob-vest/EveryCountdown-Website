<template>
  <div class="w-full text-center space-y-10 px-5" v-if="item">
    <section
      :style="{
        backgroundImage: `url('${item.image_url}')`,
      }"
      class="h-96 bg-blend-multiply bg-cover bg-black bg-opacity-60 rounded-3xl"
    >
      <div
        class="relative flex flex-col h-full justify-center items-center my-auto gap-5"
      >
        <div class="space-y-3">
          <h1 class="text-3xl md:text-4xl">{{ item.headline }}</h1>
          <h2 class="text-2xl md:text-3xl text-secondary">
            {{ item.subheadline }}
          </h2>
          <UnconfirmedBadge v-if="!item.confirmed" />
        </div>
        <h2 class="text-xl">
          {{ formatDate(item.release_date) }}
        </h2>

        <CountdownTimer
          class="absolute bottom-0"
          :isSelected="true"
          :releaseDate="item.release_date"
        />
      </div>
    </section>
    <section v-if="item.description" class="space-y-2">
      <h2>Description</h2>
      <p class="text-secondary text-left">{{ item.description }}</p>
    </section>
    <VideoSection v-if="item.videos" :videos="item.videos" />
    <LinkSection v-if="item.links != null" :links="item.links" />
    <!-- <section>
        <h1>Official Twitter Posts</h1>
      </section> -->
  </div>
</template>
<script setup lang="ts">
import { CategoryItem } from "@/types/CategoryItem";

const config = useRuntimeConfig();
const route = useRoute();
const item = ref(null as CategoryItem | null);

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const language =
    typeof navigator !== "undefined" ? navigator.language : "en-US"; // use "en-US" as default language
  return date.toLocaleDateString(language, options);
}
const { data } = await useFetch(route.path, {
  baseURL: config.public.baseURL,
}).catch((error) => error.data);
item.value = data.value as CategoryItem;

useSeoMeta({
  title: item.value.headline + " | " + item.value.subheadline + " Countdown",
  description:
    "Counting down to " +
    item.value.headline +
    ". Find all the relevant information, including the release date, description, and more.",
});
</script>
