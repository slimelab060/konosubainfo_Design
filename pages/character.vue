<template>
  <div>
    <div class="w-full px-4 py-16">
      <div class="mx-auto w-full max-w-md"></div>
    </div>
  </div>
</template>

<script setup>
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

const colors = [
  {
    name: "ライト",
    value: "light",
  },
  {
    name: "ダークブルー",
    value: "night",
  },
  {
    name: "ダーク",
    value: "dark",
  },
  {
    name: "システム",
    value: "system",
  },
];

const selected = ref(colors[0]);

const colorMode = useColorMode();
</script>
