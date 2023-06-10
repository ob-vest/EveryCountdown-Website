<template>
  <div>
    <div
      class="relative sm:hover:scale-110 transition-transform btn-gradient-1 w-full h-56 sm:w-64 sm:h-64 mx-auto"
    >
      <div
        class="absolute z-10 w-full h-full rounded-2xl bg-cover bg-no-repeat bg-blend-multiply bg-black bg-opacity-60"
      >
        <div class="w-full h-full justify-center flex flex-col items-center">
          <div class="my-auto text-center space-y-3">
            <h2 class="text-2xl text-center font-semibold line-clamp-2 mx-2">
              {{ item.headline }}
            </h2>
            <p class="text-zinc-300">{{ item.subheadline }}</p>
            <UnconfirmedBadge v-if="!item.confirmed" />
          </div>

          <CountdownTimer :releaseDate="item.release_date" />
        </div>
      </div>
      <nuxt-img
        class="absolute w-full h-full rounded-2xl"
        :src="item.image_url"
        :alt="item.headline"
        loading="lazy"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { CategoryItem } from "@/types/CategoryItem";
export default {
  props: {
    item: {
      type: Object as PropType<CategoryItem>,
      required: true,
    },
  },
};
</script>
<style scoped>
.btn-gradient-1 {
  /* Border */
  border: 0.5px solid transparent;
  border-radius: 1rem;
  background: linear-gradient(to right bottom, #ff000000, #b9b9b982),
    linear-gradient(to right bottom, #ff000000, #b9b9b982);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
</style>
