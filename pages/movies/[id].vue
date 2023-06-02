<template>
  <div class="w-full text-center space-y-10 px-5" v-if="movie">
    <section
      class="bg-[url('/matrix-template.png')] h-96 bg-blend-multiply bg-black bg-opacity-60 rounded-3xl"
    >
      <div class="flex flex-col h-full justify-center items-center my-auto">
        <h1>{{ movie.headline }}</h1>
        <h2 class="text-secondary">{{ movie.subheadline }}</h2>
      </div>
    </section>
    <section v-if="movie.description" class="space-y-2">
      <h2>Storyline</h2>
      <p class="text-secondary text-left">{{ movie.description }}</p>
    </section>

    <section class="space-y-2">
      <h2>Video</h2>
      <iframe
        class="w-full h-96 rounded-2xl"
        src="https://www.youtube.com/embed/aJLdLb9dwAY"
        title="YouTube video player"
        frameborder="1"
        allow="picture-in-picture; fullscreen"
      ></iframe>
    </section>
    <section v-if="links" class="space-y-2">
      <h2>Links</h2>
      <div class="flex flex-col justify-start items-start space-y-4">
        <a
          v-for="(link, index) in links"
          :key="index"
          class="text-secondary bg-white bg-opacity-10 w-full py-3 rounded-lg hover-underline-animation flex items-center space-x-2 justify-start"
          :href="link.url"
          target="_blank"
        >
          <p class="text-left ml-5">{{ index + 1 }}</p>
          <div class="text-center mx-auto w-full">
            <h3 class="line-clamp-1">
              {{ link.title }}
            </h3>
            <p class="text-secondary text-opacity-50">{{ link.url }}</p>
          </div>
        </a>
      </div>
    </section>
    <section>
      <h1>Official Twitter Posts</h1>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Movie, Link } from "@/types/Movie";

const route = useRoute();
const movie = ref(null as Movie | null);
const links = ref(null as Link[] | null);

const data = await $fetch(
  "https://everycountdown-apiservice-production.up.railway.app/movies/" +
    route.params.id
).catch((error) => error.data);

movie.value = data as Movie;
const linkString = movie.value.link;
if (linkString != '{"(,,)"}') {
  // If the link string is not empty
  links.value = modifyLinkArray(linkString) as Link[];
}

function modifyLinkArray(link: string) {
  // EXAMPLE STRING
  // {"(\"The Matrix SPOILERS\",https://twitter.com/NoMansSky/status/1664257765349498880,2023-06-02)","(\"The Matrix Revolutions: The IMAX Experience\",https://twitter.com/NoMansSky/status/1664257765349498880,2023-06-02)"}
  const originString = link;

  // Remove the surrounding parentheses
  const trimmedString = originString.slice(1, -1).slice(2, -2);

  // Split the string into individual link strings
  const linkStrings = trimmedString.split(')","(');

  // Process each link string
  const processedLinks = linkStrings.map((linkString) => {
    // Remove the surrounding parentheses and escape characters
    const cleanedLinkString = linkString.replace(/[\\"()]/g, "");
    const parts = cleanedLinkString.split(",");
    const linkTitle = parts[0];
    const linkUrl = parts[1];
    const linkDateAdded = parts[2];

    return {
      title: linkTitle,
      url: linkUrl,
      dateAdded: linkDateAdded,
    } as Link;
  });
  return processedLinks;
}
</script>
