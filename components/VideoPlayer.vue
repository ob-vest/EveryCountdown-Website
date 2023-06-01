<template>
  <ClientOnly>
    <vue-plyr>
      <div
        style="--plyr-color-main: #ff0000"
        src="https://www.youtube.com/embed/aJLdLb9dwAY"
        data-plyr-provider="youtube"
      ></div>
    </vue-plyr>
  </ClientOnly>
</template>

<script setup>
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
</script>
<style>
.plyr {
  @apply rounded-2xl;
}
</style>
