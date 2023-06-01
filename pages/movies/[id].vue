<template>
  <div class="w-full text-center space-y-10 px-5">
    <section
      class="bg-[url('/matrix-template.png')] h-96 bg-blend-multiply bg-black bg-opacity-60 rounded-3xl"
    >
      <div class="flex flex-col h-full justify-center items-center my-auto">
        <h1>Battle Through The Heavens</h1>
        <h2 class="text-secondary">Season 10</h2>
      </div>
    </section>
    <section class="space-y-2">
      <h2>Storyline</h2>
      <p class="text-secondary text-left">
        Battle Through the Heavens is a 2018 Chinese television series adapted
        from the eponymous novel Doupo Cangqiong by Tiancan Tudou. It stars Leo
        Wu, Lin Yun, Baron Chen, Li Qin, Xin Zhilei and Liu Meitong. The series
        aired on Hunan TV from 3 September to 25 October 2018.
      </p>
    </section>

    <section class="space-y-2">
      <h2>Video</h2>
      <!-- <div class="flex justify-center w-full"> -->
      <!-- <VideoPlayer /> -->
      <iframe
        class="w-full h-96 rounded-2xl"
        src="https://www.youtube.com/embed/aJLdLb9dwAY"
        title="YouTube video player"
        frameborder="1"
        allow="picture-in-picture; fullscreen"
      ></iframe>
      <!-- </div> -->
    </section>
    <section class="space-y-2">
      <h2>Links</h2>
      <div class="flex flex-col justify-start items-start space-y-4">
        <a
          v-for="(item, index) in 5"
          :key="index"
          class="text-secondary bg-white bg-opacity-10 w-full py-3 rounded-lg hover-underline-animation flex items-center space-x-2 justify-start"
          href="https://www.netflix.com/title/80199625"
          target="_blank"
        >
          <p class="text-left ml-5">1</p>
          <div class="text-center mx-auto w-full">
            <h3 class="line-clamp-1">
              One-Punch Man season 3 potential release date, cast, plot and
              everything you need to know
            </h3>
            <p>
              <span class="text-secondary text-opacity-50">https://www.</span
              >netflix.com<span class="text-secondary text-opacity-50"
                >/title/80199625</span
              >
            </p>
          </div>
        </a>
      </div>
    </section>
    <section>
      <h1>Official Twitter Posts</h1>

      <!-- 
      <Tweet id="14"></Tweet> -->
    </section>
  </div>
</template>
