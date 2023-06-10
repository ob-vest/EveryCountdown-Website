<template>
  <footer class="mb-4 mt-14">
    <div class="w-full max-w-screen-xl mx-auto p-4 space-y-5">
      <div class="flex items-center justify-center">
        <ul
          class="flex flex-wrap items-center mb-0 text-sm font-medium text-gray-400 space-x-5"
        >
          <li>
            <nuxt-link class="hover:text-white md:mr-6" to="/faq">
              FAQ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="hover:text-white md:mr-6" to="/privacy-policy">
              Privacy Policy
            </nuxt-link>
          </li>

          <li>
            <a :href="'mailto:' + email" class="hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="border-gray-200 mx-auto dark:border-gray-700" />
      <p class="block text-sm text-gray-600 text-center">
        © 2023 Onur Bas. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig();
const email = config.public.email;
</script>
