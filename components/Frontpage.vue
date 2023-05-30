<template>
  <div class="space-y-5 mx-5">
    <section class="w-full text-center">
      <h1 class="text-3xl py-20">
        Explore Exciting Release Dates <br />
        and Upcoming Events
      </h1>
      <div class="flex gap-3 overflow-x-scroll no-scrollbar scrolling-auto">
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
        <CategoryButton />
      </div>
    </section>

    <section class="space-y-5">
      <h2>Popular</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center"
      >
        <MovieCard v-for="movie in 6" />
      </div>
    </section>
    <section class="space-y-5">
      <h2>Ending soon</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center"
      >
        <MovieCard v-for="movie in 6" />
      </div>
    </section>
    <section class="space-y-5">
      <h2>Recently added</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center"
      >
        <MovieCard v-for="movie in 6" />
      </div>
    </section>
  </div>
</template>

<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrolling-touch {
  -webkit-overflow-scrolling: touch;
}
.scrolling-auto {
  -webkit-overflow-scrolling: auto;
}
</style>
