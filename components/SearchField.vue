<template>
  <!-- <div class="absolute w-full h-full bg-black bg-opacity-50"></div> -->
  <div class="relative z-10 mx-2 sm:mx-10">
    <form @submit.prevent="onSubmit">
      <label
        for="default-search"
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
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm rounded-2xl appearance-none bg-black border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
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
    <div
      v-if="items"
      class="absolute mt-5 space-y-5 w-full p-3 bg-gray-800 rounded-2xl"
    >
      <nuxt-link
        :to="'/' + item.type + '/' + item.id"
        @click="toggleSearch"
        class="flex justify-between"
        v-for="(item, index) in items"
        :key="index"
      >
        <p class="font-semibold">{{ item.headline }}</p>
        <p class="text-gray-400">{{ item.subheadline }}</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const searchText = ref("");
import { CategoryItem } from "@/types/CategoryItem";

const items = ref(null as CategoryItem[] | null);
const emits = defineEmits(["toggle-search"]);
const toggleSearch = () => {
  emits("toggle-search", false);
};
const onSubmit = async () => {
  console.log(searchText.value);
  const config = useRuntimeConfig();
  const { data } = await useFetch(`/search?text=${searchText.value}`, {
    baseURL: config.public.baseURL,
  });
  items.value = data.value as CategoryItem[];
  console.log(data);
};
</script>
