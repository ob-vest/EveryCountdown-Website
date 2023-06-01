<template>
  <!-- Needs to be evaluated on the client side, and not SSR -->
  <client-only>
    <VueCountdown
      :time="time"
      :interval="100"
      v-slot="{ days, hours, minutes, seconds }"
    >
      <div
        class="select-none rounded-b-2xl flex justify-center gap-4 w-full from-black to-transparent bg-gradient-to-t via-black pb-2"
      >
        <div class="w-fit h-10 text-center">
          <h4 class="font-bold">{{ days }}</h4>
          <p>DAYS</p>
        </div>
        <div class="w-fit h-10 text-center">
          <h4 class="font-bold">{{ hours }}</h4>
          <p>HOURS</p>
        </div>
        <div class="w-fit h-10 text-center">
          <h4 class="font-bold">{{ minutes }}</h4>
          <p>MINS</p>
        </div>
        <div class="w-fit h-10 text-center">
          <h4 class="font-bold">{{ seconds }}</h4>
          <p>SECS</p>
        </div>
      </div>
      <!-- New Year Countdown：{{ days }} days, {{ hours }} hours,
      {{ minutes }} minutes, {{ seconds }}.{{ Math.floor(milliseconds / 100) }}
      seconds. -->
    </VueCountdown>
  </client-only>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  components: {
    VueCountdown,
  },
  props: {
    releaseDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    const now = new Date();

    return {
      time: this.releaseDate - now,
    };
  },
};
</script>

<style scoped>
p {
  @apply text-zinc-300 text-sm font-light;
}
</style>
