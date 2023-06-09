<template>
  <footer class="bg-white rounded-lg shadow dark:bg-black m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-center">
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <!-- <li>
            <a href="#" class="mr-4 hover:text-white md:mr-6">About</a>
          </li> -->

          <li>
            <nuxt-link
              class="mr-4 hover:text-white md:mr-6"
              to="/privacy-policy"
            >
              Privacy Policy
            </nuxt-link>
          </li>

          <li>
            <a href="mailto: everycountdown@invoke.dk" class="hover:text-white"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <p class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 Onur Bas. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
