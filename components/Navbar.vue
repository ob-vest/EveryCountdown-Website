<template>
  <nav class="relative">
    <div class="flex justify-between items-center py-5 mx-5">
      <nuxt-link class="flex items-center space-x-3" to="/">
        <div
          class="hover:cursor-pointer hover:rotate-180 duration-500 transition-transform"
        >
          <img class="h-14 w-14" src="/logo.svg" alt="Home" />
        </div>
        <div class="text-2xl font-semibold hidden md:block">
          <span class="text-secondary">Every</span>Countdown
        </div>
      </nuxt-link>

      <!-- THIS IS MOBILE NAV BAR -->
      <div
        class="flex sm:hidden items-center justify-end w-full text-right z-40"
      >
        <div class="relative w-full">
          <div class="ml-auto flex justify-end items-center">
            <svg
              @click="toggleSearch"
              class="w-10 mr-5 h-7 text-gray-400 hover:cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <img
              class="h-10 w-8 touch-manipulation"
              @click="toggleMenu"
              src="/burgermenu.svg"
              alt="Category menu"
            />
          </div>

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
              Movies</nuxt-link
            >
            <nuxt-link
              @click="toggleMenu"
              to="/tv/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              TV
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/anime/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              Anime
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/tech/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              Tech
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/game/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              Games
            </nuxt-link>
            <nuxt-link
              @click="toggleMenu"
              to="/other/catalog"
              class="text-2xl text-secondary transition-colors duration-1000"
              active-class="text-white"
            >
              Other
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- THIS IS DESKTOP NAV BAR -->
      <div class="hidden sm:flex items-center space-x-5">
        <svg
          @click="toggleSearch"
          class="w-10 mr-0 h-5 text-gray-400 hover:cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <nuxt-link
          to="/movie/catalog"
          class="text-secondary transition-colors duration-1000 hover-underline-animation"
          active-class="text-white"
        >
          Movies</nuxt-link
        >
        <nuxt-link
          to="/tv/catalog"
          class="text-secondary transition-colors duration-1000 hover-underline-animation"
          active-class="text-white"
        >
          TV
        </nuxt-link>
        <nuxt-link
          to="/anime/catalog"
          class="text-secondary transition-colors duration-1000 hover-underline-animation"
          active-class="text-white"
        >
          Anime
        </nuxt-link>
        <nuxt-link
          to="/tech/catalog"
          class="text-secondary transition-colors duration-1000 hover-underline-animation"
          active-class="text-white"
        >
          Tech
        </nuxt-link>
        <nuxt-link
          to="/game/catalog"
          class="text-secondary transition-colors duration-1000 hover-underline-animation"
          active-class="text-white"
        >
          Games
        </nuxt-link>
        <nuxt-link
          to="/other/catalog"
          class="text-secondary transition-colors duration-1000 hover-underline-animation"
          active-class="text-white"
        >
          Other
        </nuxt-link>
      </div>
    </div>
    <SearchField
      class="absolute"
      v-if="showSearch"
      @toggle-search="showSearch = $event"
    />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showSearch: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.showSearch = false;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
      this.showMenu = false;
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
