<template>
  <div>
    <header>
      <nav class="container p-8 flex justify-between">
        <NuxtLink to="/" class="font-bold">
          <Icon name="bi:dice-3" />
        </NuxtLink>
        <ul class="flex gap-4">
          <!-- use a for loop here for the li -->
          <!-- <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">

/* 
  put some section/link logic here, so the template keeps clean
  or maybe in the future use a different file just for the links? backlog
*/

</script>