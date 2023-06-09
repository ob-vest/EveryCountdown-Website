<template>
  <nav>
    <div class="flex justify-between items-center py-5 mx-5">
      <nuxt-link to="/">
        <div
          class="flex items-center space-x-3 hover:cursor-pointer hover:rotate-180 duration-500 transition-transform"
        >
          <img class="h-14 w-14" src="/logo.svg" alt="Home" />
          <!-- <h1 class="text-2xl font-semibold">
          <span class="text-secondary">Every</span>Countdown
        </h1> -->
        </div>
      </nuxt-link>
      <!-- THIS IS MOBILE NAV BAR -->
      <div class="flex sm:hidden items-center justify-end w-full text-right">
        <div class="relative w-full">
          <img
            class="ml-auto h-10 touch-manipulation"
            @click="toggleMenu"
            src="/burgermenu.svg"
            alt="Category menu"
          />
          <div
            v-if="showMenu"
            class="animate-fade-in max-w-full flex flex-col space-y-5 w-56 right-0 absolute mt-5 bg-stone-800 rounded-lg p-5"
          >
            <nuxt-link
              @click="toggleMenu"
              to="/movie/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              <a>Movies</a></nuxt-link
            >
            <nuxt-link
              @click="toggleMenu"
              to="/tv/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              <a>TV</a>
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/anime/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              <a>Anime</a>
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/tech/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              <a>Tech</a>
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/game/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              <a>Games</a>
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/other/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              <a>Other</a>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- THIS IS DESKTOP NAV BAR -->
      <div class="hidden sm:flex items-center space-x-5">
        <nuxt-link
          to="/movie/catalog"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Movies</button></nuxt-link
        >
        <nuxt-link
          to="/tv/catalog"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">TV</button>
        </nuxt-link>
        <nuxt-link
          to="/anime/catalog"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Anime</button>
        </nuxt-link>
        <nuxt-link
          to="/tech/catalog"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Tech</button>
        </nuxt-link>
        <nuxt-link
          to="/game/catalog"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Games</button>
        </nuxt-link>
        <nuxt-link
          to="/other/catalog"
          class="text-secondary transition-colors duration-1000"
          active-class="text-white"
        >
          <button class="hover-underline-animation">Other</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
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
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
