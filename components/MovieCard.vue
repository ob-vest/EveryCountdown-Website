<template>
  <div>
    <div
      class="hover:scale-110 transition-transform btn-gradient-1 w-full h-56 sm:w-64 sm:h-44 mx-auto"
    >
      <div
        class="w-full h-full rounded-2xl bg-[url('https://firebasestorage.googleapis.com/v0/b/everycountdown-888.appspot.com/o/Apple-WWDC-2023.png?alt=media&token=319adf96-5ae0-44c8-a7ac-e68175480bb4')] bg-cover bg-no-repeat bg-blend-multiply bg-black bg-opacity-60"
        @error="handleError"
      >
        <div class="w-full h-full justify-center flex flex-col items-center">
          <div class="my-auto text-center">
            <h2 class="text-2xl text-center font-semibold line-clamp-2 mx-2">
              {{ item.headline }}
            </h2>
            <p class="text-zinc-300">{{ item.subheadline }}</p>
          </div>

          <CountdownTimer :releaseDate="item.release_date" />
        </div>
      </div>
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
  methods: {
    handleError(event: Event) {
      const backgroundImage = event.target as HTMLDivElement;
      backgroundImage.style.backgroundImage = `url('/bg-fallback.png')`;
    },
  },
};
</script>
<style scoped>
/* method 1 -> use border-image */
.bg {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/everycountdown-888.appspot.com/o/Apple-WWDC-2023.png?alt=media&token=319adf96-5ae0-44c8-a7ac-e68175480bb4"),
    url("/bg-fallback.png");
}
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
