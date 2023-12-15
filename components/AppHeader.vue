<template>
  <v-app-bar :elevation="4" scroll-behavior="collapse" class="bg-grey">
    <v-app-bar-title>Hello World</v-app-bar-title>
    <template v-slot:append>
      <!-- Colocar um for aqui pra cada página do header -->
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">

const section = ref([
  { name: 'About me' },
  { name: 'Projects' },
])

</script>