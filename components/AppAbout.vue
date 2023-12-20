<template>
  <div>
    <div class="m-auto mb-8">
      <h1 class="mb-0">{{ name }}</h1>
    </div>
    <article>
      <div class="prose m-auto">
        <p class="my-3" v-for="paragraph in paragraphs">
          {{ paragraph.text }}    
        </p>
      </div>
      <hr class="w-16 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-brand-text">
      <p>Find me on</p>
      <div class="flex gap-4">
        <p class="my-3" v-for="link in links">
          <a class="underline hover:no-underline" :href="link.url" target="_blank">
            {{ link.title }}
          </a>
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">

const name = ref('Matheus Costa');
const paragraphs = ref([
  {
    text: "Hey, I'm Matheus, a aspiring Software Engineer.",
  },
  {
    text: 'My goal is to always dream bigger and bigger, and explore where I can get more knowledge. This is why I have explored multiple fields, such as fullstack web-dev and data handling with AI. Learning is a passion.',
  },
  {
    text: 'Outside of programming, I enjoy video-games, travelling and playing bass. I have a band too, which can be found on Instagram. Sometimes we do shows too, it is pretty fun.',
  },
]);

const links = ref([
  {
    url: "https://github.com/bluz1n",
    title: "Github",
    icon: "bi bi-github"
  },
  {
    url: "https://www.linkedin.com/in/matheus-arruda-3a5657181/",
    title: "LinkedIn",
    icon: "bi bi-linkedin"
  },
  {
    url: "https://www.instagram.com/_matcf/",
    title: "Instagram",
    icon: "bi bi-instagram"
  },
])

</script>
