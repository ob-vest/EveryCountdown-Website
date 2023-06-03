<template>
  <nav>
    <div class="flex justify-between items-center py-5 mx-5">
      <nuxt-link to="/">
        <div
          class="flex items-center space-x-3 hover:cursor-pointer hover:rotate-180 duration-500 transition-transform"
        >
          <img class="h-14 w-14" src="/logo.svg" alt="" />
          <!-- <h1 class="text-2xl font-semibold">
          <span class="text-secondary">Every</span>Countdown
        </h1> -->
        </div>
      </nuxt-link>
      <div class="flex items-center space-x-5">
        <nuxt-link
          to="/movies"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Movies</button></nuxt-link
        >
        <nuxt-link
          to="/tv"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">TV</button>
        </nuxt-link>
        <nuxt-link
          to="/anime"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Anime</button>
        </nuxt-link>
        <nuxt-link
          to="/tech"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Tech</button>
        </nuxt-link>
        <nuxt-link
          to="/politics"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Politics</button>
        </nuxt-link>
        <nuxt-link
          to="/other"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Other</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* SOURCE: https://www.30secondsofcode.org/css/s/hover-underline-animation/ */
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1.5px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
