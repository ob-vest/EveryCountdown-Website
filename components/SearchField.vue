<template>
  <div class="z-40 px-2 sm:px-10 animate-fade-in w-full">
    <form @submit.prevent="onSubmit">
      <label
        for="countdown-search"
        class="mb-2 text-sm font-medium sr-only text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          v-model="searchText"
          ref="searchInput"
          type="search"
          id="countdown-search"
          class="block w-full p-4 pl-10 text-sm rounded-2xl appearance-none outline-none bg-black border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for a movie, tv show, game..."
          required
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 top-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
    <section
      class="space-y-5 mt-5 w-full p-3 bg-gray-800 border border-gray-600 rounded-2xl max-h-[50vh] overflow-y-scroll"
      v-if="items"
    >
      <h2 class="mx-auto text-2xl font-semibold">Search results</h2>
      <div class="space-y-3">
        <nuxt-link
          :to="'/' + item.type + '/' + item.id"
          @click="toggleSearch"
          class="flex justify-between"
          v-for="(item, index) in items"
          :key="index"
        >
          <p class="font-semibold text-left">{{ item.headline }}</p>
          <p class="text-gray-400 text-right">{{ item.subheadline }}</p>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { CategoryItem } from "@/types/CategoryItem";
import { debounce } from "~/helper";

const searchText = ref("");
const searchInput = ref(null);
const items = ref(null as CategoryItem[] | null);
const emits = defineEmits(["toggle-search"]);
const toggleSearch = () => {
  emits("toggle-search", false);
};
const onSubmit = debounce(async () => {
  console.log(searchText.value);
  const config = useRuntimeConfig();
  const { data } = await useFetch(`/search?text=${searchText.value}`, {
    baseURL: config.public.baseURL,
  });
  items.value = data.value as CategoryItem[];
  console.log(data);
}, 500);
watch(searchText, (newValue, oldValue) => {
  if (newValue != "" && newValue.length > 2) {
    onSubmit();
  } else {
    items.value = null;
  }
});
onMounted(async () => {
  searchInput.value.focus();
});
</script>
