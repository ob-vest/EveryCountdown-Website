<!-- <template>
  <span class="countdown font-mono text-6xl">
    <span :style="{ '--value': time }" ref="progress"></span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      time: 50, // in seconds
    };
  },
  computed: {
    formatTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.time > 0) {
        this.time--;
        this.$refs.progress.style.setProperty(
          "--value",
          `${(this.time / 50) * 100}%`
        );
      }
    }, 1000);
  },
};
</script> -->

<template>
  <span class="countdown font-mono text-6xl">
    <span :style="{ '--value': days }"></span>
    <!-- <span>days</span> -->
    <span :style="{ '--value': hours }"></span>
    <!-- <span>hours</span> -->
    <span :style="{ '--value': minutes }"></span>
    <!-- <span>min</span> -->
    <span :style="{ '--value': seconds }" :key="seconds"></span>
    <!-- <span>sec</span> -->
  </span>
  <h1>{{ seconds }}</h1>
  <h2>
    days: {{ days }} hours: {{ hours }} mins: {{ minutes }} secs: {{ seconds }}
  </h2>
  <h1>{{ remainingTime }}</h1>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date("2023-06-05"), // set the target date here
      remainingTime: 0,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  computed: {
    // progress() {
    //   return `${(1 - this.remainingTime / this.totalTime) * 100}%`;
    // },
    updateCountdown() {
      console.log(this.remainingTime);
      this.remainingTime = Math.max(this.totalTime, 0);
      this.days = this.getDays;
      this.hours = this.getHours;
      this.minutes = this.getMinutes;
      this.seconds = this.getSeconds;
    },
    getDays() {
      return Math.floor(this.remainingTime / (1000 * 60 * 60 * 24));
    },
    getHours() {
      return Math.floor(
        (this.remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    },
    getMinutes() {
      return Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    },
    getSeconds() {
      return Math.floor((this.remainingTime % (1000 * 60)) / 1000);
    },
    totalTime() {
      return this.targetDate.getTime() - new Date().getTime();
    },
    formatTime() {
      const totalSeconds = Math.round(this.remainingTime / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    },
  },
  mounted() {
    setInterval(() => {
      this.updateCountdown;
      // this.$refs.progress.style.setProperty("--value", `${this.seconds}`);
      // }
    }, 1000);
    // setInterval(() => {
    //   this.remainingTime = Math.max(this.totalTime, 0);
    // }, 1000);
  },
};
</script>
