<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "min-h-screen",
  },
});
</script>
