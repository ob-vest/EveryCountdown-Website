<template>
  <div class="w-full text-center space-y-10 px-5">
    <section
      class="bg-[url('/matrix-template.png')] h-96 bg-blend-multiply bg-black bg-opacity-60 rounded-3xl"
    >
      <div class="flex flex-col h-full justify-center items-center my-auto">
        <h1>{{ movie?.headline }}</h1>
        <h2 class="text-secondary">{{ movie?.subheadline }}</h2>
      </div>
    </section>
    <section v-if="movie?.description" class="space-y-2">
      <h2>Storyline</h2>
      <p class="text-secondary text-left">{{ movie?.description }}</p>
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

// data() {
//   return {
//     movie: null as Movie | null,
//     links: null as Link[] | null,
//   };
// },
// data() {
//   return {
//     movie: null as Movie | null,
//     links: null as Link[] | null,
//   };
// },

const route = useRoute();
const movie = ref(null as Movie | null);

// nextTick(async () => {
const { data, error } = useFetch(
  "https://everycountdown-apiservice-production.up.railway.app/movies/2"
);

if (error.value) {
  console.error(error.value);
} else {
  movie.value = data.value as Movie;
}
// });

// const movie = computed(() => {
//   if (data.value) {
//     return ref(data.value) as Ref<Movie>;
//   } else {
//     return null;
//   }
// });

// const links = computed(() => {
//   if (data.value) {
//     return ModifyLinkArray("54545");
//   } else {
//     return [];
//   }
// });

// this.movie = data.value;
// return { data, error };
// if (error.value) {
//   console.error(error.value);
// } else if (data.value) {
//   this.movie = data.value;
//   links = this.ModifyLinkArray(data.value.link);
// }
// console.log("THIS IS USEFETCH DATA: ", data.value);
// methods: {
//   ModifyLinkArray(link: string) {
//     // EXAMPLE STRING
//     // {"(\"The Matrix SPOILERS\",https://twitter.com/NoMansSky/status/1664257765349498880,2023-06-02)","(\"The Matrix Revolutions: The IMAX Experience\",https://twitter.com/NoMansSky/status/1664257765349498880,2023-06-02)"}
//     const originString = link;

//     // Remove the surrounding parentheses
//     const trimmedString = originString.slice(1, -1).slice(2, -2);

//     console.log("This is origin link:", originString);
//     console.log("This is trimmed link:", trimmedString);

//     // Split the string into individual link strings
//     const linkStrings = trimmedString.split(')","(');

//     console.log("This is array1:", linkStrings);
//     // Process each link string
//     const processedLinks = linkStrings.map((linkString) => {
//       // Remove the surrounding parentheses and escape characters
//       const cleanedLinkString = linkString.replace(/[\\"()]/g, "");
//       const parts = cleanedLinkString.split(",");
//       const linkTitle = parts[0];
//       const linkUrl = parts[1];
//       const linkDateAdded = parts[2];

//       return {
//         title: linkTitle,
//         url: linkUrl,
//         dateAdded: linkDateAdded,
//       } as Link;
//     });
//     console.log("This is array2:", processedLinks);
//     return processedLinks;
//   },
// },
</script>

<!-- <script setup lang="ts">
import { Movie, Link } from "@/types/Movie";
let movie = ref<Movie | null>(null);
const links = ref<Link[] | null>(null);
const route = useRoute();

const { data: Movie, error } = await useFetch(
  "https://everycountdown-apiservice-production.up.railway.app/movies/" +
    route.params.id
);

if (error.value) {
  console.error(error.value);
} else if (data.value) {
  movie = data;
  links = this.ModifyLinkArray(data.value.link);
}
console.log("THIS IS USEFETCH DATA: ", data.value);
</script> -->
<!-- <script lang="ts">
import { Movie, Link } from "@/types/Movie";
export default {
  data() {
    return {
      movie: null as Movie | null,
      links: null as Link[] | null,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    fetch(
      "https://everycountdown-apiservice-production.up.railway.app/movies/" + id
    )
      .then((response) => response.json())
      .then((data: Movie) => {
        this.movie = data;
        this.links = this.ModifyLinkArray(data.link);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    ModifyLinkArray(link: string) {
      // EXAMPLE STRING
      // {"(\"The Matrix SPOILERS\",https://twitter.com/NoMansSky/status/1664257765349498880,2023-06-02)","(\"The Matrix Revolutions: The IMAX Experience\",https://twitter.com/NoMansSky/status/1664257765349498880,2023-06-02)"}
      const originString = link;

      // Remove the surrounding parentheses
      const trimmedString = originString.slice(1, -1).slice(2, -2);

      console.log("This is origin link:", originString);
      console.log("This is trimmed link:", trimmedString);

      // Split the string into individual link strings
      const linkStrings = trimmedString.split(')","(');

      console.log("This is array1:", linkStrings);
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
      console.log("This is array2:", processedLinks);
      return processedLinks;
    },
  },
};
</script> -->
