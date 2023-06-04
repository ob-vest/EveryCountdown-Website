<template>
  <section class="space-y-2" v-if="videos">
    <h2>Video</h2>
    <!-- https://swiperjs.com/element -->
    <swiper-container
      class="py-10 swiper-container"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
    >
      <swiper-slide class="px-0" v-for="(video, index) in videos" :key="index">
        <div class="iframe-container">
          <iframe
            class="rounded-2xl"
            :src="video.url"
            :title="video.title"
            frameborder="1"
            allow="picture-in-picture; fullscreen"
          ></iframe>
        </div>

        <p>{{ video.title }}</p>
      </swiper-slide>
    </swiper-container>
  </section>
</template>
<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { Video } from "~/types/Shared";
register();
const props = defineProps({
  videos: {
    type: Object as PropType<Video[]>,
    required: false,
  },
});
</script>
<style>
.swiper-container {
  --swiper-navigation-color: #fff;
  --swiper-pagination-color: #fff;
  --swiper-pagination-bullet-inactive-color: #fff;
}
.iframe-container {
  /* https://www.youtube.com/watch?v=9YffrCViTVk&t=67s */
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
