<template>
  <h1>{{ name }}</h1>
  <p class="my-3" v-for="paragraph in paragraphs">
    {{ paragraph.text }}
  </p>
  <v-divider :thickness="3" length="50px" ></v-divider>
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

</script>