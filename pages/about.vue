<template>
<div>
<Header/>
<Background/>

  <h1 class="z-30">Blog</h1>
  <ul>
    <li v-for="{ _path: slug, title } in blogPosts" :key="slug">
      <NuxtLink :to="slug" class="bg-white btn">{{ title }}</NuxtLink>
    </li>
  </ul>
  <Footer/>
  </div>
</template>

<script setup>

const {data: blignav} = await useAsyncData("navigation", () => { return fetchContentNavigation(queryContent("blog"));
});

</script>