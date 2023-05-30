<template>
  <nav>
    <div class="flex justify-between items-center py-5 mx-5">
      <div
        class="flex items-center space-x-3 hover:cursor-pointer hover:rotate-180 duration-500 transition-transform"
      >
        <img class="h-14 w-14" src="/logo.svg" alt="" />
        <!-- <h1 class="text-2xl font-semibold">
          <span class="text-secondary">Every</span>Countdown
        </h1> -->
      </div>
      <div class="flex items-center space-x-5">
        <button class="text-secondary hover-underline-animation">Movies</button>
        <button class="text-secondary hover-underline-animation">TV</button>
        <button class="text-secondary hover-underline-animation">Anime</button>
        <button class="text-secondary hover-underline-animation">Tech</button>
        <button class="text-secondary hover-underline-animation">
          Politics
        </button>
        <button class="text-secondary hover-underline-animation">Other</button>
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
