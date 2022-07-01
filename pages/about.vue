<template>
<Header/>
  <h1>Blog</h1>
  <ul>
    <li v-for="{ _path: slug, title } in blogPosts" :key="slug">
      <NuxtLink :to="slug" class="bg-white btn">{{ title }}</NuxtLink>
    </li>
  </ul>
  <Footer/>
</template>

<script setup lang="ts">

const blogPosts = await queryContent('/')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find();
</script>