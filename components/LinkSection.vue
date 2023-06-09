<template>
  <section class="space-y-2">
    <h2>Links</h2>
    <div class="flex flex-col justify-start items-start space-y-4">
      <a
        v-for="(link, index) in links"
        :key="index"
        class="text-secondary bg-white bg-opacity-5 w-full py-3 rounded-lg hover-underline-animation flex items-center space-x-2 justify-start"
        :href="link.url"
        target="_blank"
      >
        <p class="text-left mx-5 font-bold">{{ index + 1 }}</p>
        <div class="text-left mx-auto w-full">
          <h3 class="line-clamp-1">
            {{ link.title }}
          </h3>
          <p class="text-secondary text-opacity-50 text-clip">
            {{ link.url }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Link } from "@/types/Shared";
export default {
  props: {
    links: {
      type: Object as PropType<Link[]>,
      required: true,
    },
  },
};
</script>
