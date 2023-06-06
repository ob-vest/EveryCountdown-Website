<template>
  <div class="w-full text-center space-y-10 px-5" v-if="item">
    <section
      :style="{
        backgroundImage: `url('${item.image_url}')`,
      }"
      class="h-96 bg-blend-multiply bg-black bg-opacity-60 rounded-3xl"
    >
      <div
        class="relative flex flex-col h-full justify-center items-center my-auto gap-5"
      >
        <div>
          <h1>{{ item.headline }}</h1>
          <h2 class="text-secondary">{{ item.subheadline }}</h2>
        </div>
        <h2>
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

    <VideoSection :videos="item.videos" />
    <LinkSection :links="item.links" />
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

// request a weekday along with a long date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
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
</script>
