<template>
  <div>
    <button
      class="hover:scale-110 transition-transform border-b-[0.5px] border-r-[0.5px] border-secondary rounded-2xl w-fit pt-2 bg-[url('/matrix-template.png')] bg-cover bg-no-repeat bg-blend-multiply bg-black bg-opacity-60"
    >
      <div class="w-56 h-40 justify-center flex flex-col items-center">
        <div class="my-auto text-center">
          <h2 class="text-2xl text-center font-bold line-clamp-2 mx-2">
            Battle Through The Heavens
          </h2>
          <p class="text-zinc-300">Season 10</p>
        </div>
        <CountdownTimer />
      </div>
    </button>
  </div>
</template>
