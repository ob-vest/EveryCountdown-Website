<template>
  <div class="w-full">
    <!-- This is the small version of the countdown timer -->
    <div
      :class="{
        'from-black to-transparent bg-gradient-to-t via-black': !isSelected,
      }"
      class="w-full select-none rounded-b-2xl pb-2"
    >
      <div
        v-if="new Date(releaseDate) > new Date()"
        class="flex justify-center gap-4 w-full"
      >
        <div class="text-center w-fit">
          <h4
            :class="{
              'text-4xl': isSelected,
              'text-xl': !isSelected,
            }"
            class="font-bold"
          >
            {{ days }}
          </h4>
          <p
            :class="{
              'text-lg font-light': isSelected,
              'text-sm font-medium': !isSelected,
            }"
            class="text-zinc-300"
          >
            DAYS
          </p>
        </div>
        <div class="text-center w-fit mx-2">
          <h4
            :class="{
              'text-4xl': isSelected,
              'text-xl': !isSelected,
            }"
            class="font-bold"
          >
            {{ hours }}
          </h4>
          <p
            :class="{
              'text-lg font-light': isSelected,
              'text-sm font-medium': !isSelected,
            }"
            class="text-zinc-300"
          >
            HOURS
          </p>
        </div>
        <div class="text-center w-fit">
          <h4
            :class="{
              'text-4xl': isSelected,
              'text-xl': !isSelected,
            }"
            class="font-bold text-xl"
          >
            {{ minutes }}
          </h4>
          <p
            :class="{
              'text-lg font-light': isSelected,
              'text-sm font-medium': !isSelected,
            }"
            class="text-zinc-300"
          >
            MIN
          </p>
        </div>
        <div class="text-center w-fit mx-2">
          <h4
            :class="{
              'text-4xl': isSelected,
              'text-xl': !isSelected,
            }"
            class="font-bold"
          >
            {{ seconds }}
          </h4>
          <p
            :class="{
              'text-lg font-light': isSelected,
              'text-sm font-medium': !isSelected,
            }"
            class="text-zinc-300"
          >
            SEC
          </p>
        </div>
      </div>
      <h2 v-else class="text-center">The wait is over!</h2>
    </div>
  </div>
</template>
<script lang="ts">
interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default {
  props: {
    isSelected: {
      type: Boolean,
      default: false,
    },
    releaseDate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const countdown: Countdown = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    const days = ref(countdown.days.toString().padStart(2, "0"));
    const hours = ref(countdown.hours.toString().padStart(2, "0"));
    const minutes = ref(countdown.minutes.toString().padStart(2, "0"));
    const seconds = ref(countdown.seconds.toString().padStart(2, "0"));

    const updateCountdown = () => {
      const now = new Date();
      const releaseDate = new Date(props.releaseDate);
      const diff = releaseDate.getTime() - now.getTime();
      const daysValue = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursValue = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutesValue = Math.floor((diff / 1000 / 60) % 60);
      const secondsValue = Math.floor((diff / 1000) % 60);
      days.value = daysValue.toString().padStart(2, "0");
      hours.value = hoursValue.toString().padStart(2, "0");
      minutes.value = minutesValue.toString().padStart(2, "0");
      seconds.value = secondsValue.toString().padStart(2, "0");
    };
    updateCountdown();
    setInterval(() => {
      updateCountdown();
    }, 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
};
</script>

<!-- <script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    releaseDate: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const releaseDate = new Date(this.releaseDate);
      const diff = releaseDate.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      this.days = days.toString().padStart(2, "0");
      this.hours = hours.toString().padStart(2, "0");
      this.minutes = minutes.toString().padStart(2, "0");
      this.seconds = seconds.toString().padStart(2, "0");
    },
  },
});
</script> -->
