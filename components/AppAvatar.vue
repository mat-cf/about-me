<template>
    <v-avatar size="200">
      <v-img :src="avatar.image"></v-img>
    </v-avatar>
    <v-list-item class="text-grey text-center mx-auto mt-8">
      <v-card-title class="">
        {{ avatar.title }}
      </v-card-title>
      <p class="">
        {{ avatar.subtitle }}
      </p>
    </v-list-item>

</template>

<script setup lang="ts">

const avatar = {
  image: '/avatar.png',
  title: "I'm a coelacanth",
  subtitle: 'Oldest fish yay'
}

</script>