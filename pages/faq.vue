<template>
  <section class="mx-auto mt-10">
    <h1 class="font-bold mb-4 text-center">FAQ</h1>

    <div class="mb-8" v-for="item in faqItems" :key="item.question">
      <h2>{{ item.question }}</h2>
      <p class="text-secondary">{{ item.answer }}</p>
    </div>
    <div>
      <h2>
        Do you have any feedback or questions about this website that didn't get
        answered?
      </h2>
      <p class="text-secondary">
        Please contact me at
        <a :href="'mailto:' + email" class="text-blue-500">{{ email }}</a
        >.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const config = useRuntimeConfig();
    return {
      email: config.public.email,
      faqItems: [
        {
          question: "Why are some items marked as 'Expected'?",
          answer:
            "Sometimes the date is not known publicly, but a timeframe or period may have been given - such as a release date of 'next winter'. In those cases, we will either put the date in the middle of the winter or at the end and mark it as 'Expected'. (More often than not, things get released later than earlier) There are also cases where no date or period is hinted at, but it is confirmed that a sequel is in production. In those cases, we will make a qualified guess and adjust it when we know more.",
        },
        {
          question: "Is the countdown the exact time of release?",
          answer:
            "Despite the date being correct, the time is not. It is just the beginning of the day. This is because in many cases, it's just not known or differs by country or region when it gets released. In cases where the event or release vary more than one day in other countries - such as if a product might get released on Monday in the United States but Wednesday in Europe - it will show the date for where it appears first.",
        },
        {
          question: "Why are there so many missing countdowns?",
          answer:
            "EveryCountdown is just a quick hobby project that exist to test the waters in the web development space. There is no automatic system that uploads new content - it's all done manually. Maybe in the future.",
        },
        {
          question: "The date of release is now known or wrong.",
          answer: `Sometimes delays happen or a date is announced after it's been uploaded to the database. If that is the case, you are welcome to send an email to ${config.public.email}. A button will be added in the future to make the process easier.`,
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  @apply text-xl font-semibold mb-2;
}
</style>
