<template>
  <div
    class="hover:scale-110 transition-transform btn-gradient-1 w-fit mx-auto"
  >
    <button
      class="rounded-2xl bg-[url('/matrix-template.png')] bg-cover bg-no-repeat bg-blend-multiply bg-black bg-opacity-60"
    >
      <div class="w-64 h-44 justify-center flex flex-col items-center">
        <div class="my-auto text-center">
          <h2 class="text-2xl text-center font-semibold line-clamp-2 mx-2">
            Battle Through The Heavens
          </h2>
          <p class="text-zinc-300">Season 10</p>
        </div>
        <CountdownTimer />
      </div>
    </button>
  </div>
</template>

<style scoped>
/* method 1 -> use border-image */
.btn-gradient-1 {
  /* Border */
  border: 0.5px solid transparent;
  border-radius: 1rem;
  background: linear-gradient(to right bottom, #ff000000, #b9b9b982),
    linear-gradient(to right bottom, #ff000000, #b9b9b982);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
</style>
