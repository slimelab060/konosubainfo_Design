<script setup lang="ts">
import { useNow, useDateFormat, useTimeAgo } from "@vueuse/core";

const timeAgo = useTimeAgo(new Date(2022, 9, 7, 21, 59, 59));
const formatted = useDateFormat(useNow(), "HH:mm:ss", { locales: "ja-JP" });
console.log(timeAgo);
</script>

<template>
  <span class="countdown font-mono text-2xl"> {{ formatted }} </span>
</template>
