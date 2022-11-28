<template>
  <select v-model="colorMode.preference" class="select select-bordered max-w-xs">
    <option v-for="theme in themes" :key="theme" :value="theme.value">
      {{ theme.name }}
    </option>
  </select>
</template>

<script setup>
//import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
//const selectedPerson = ref(themes[0]);
const colorMode = useColorMode();

const themes = [
  { name: "ライト", value: "light" },
  { name: "ダーク", value: "dark" },
  { name: "ダークブルー", value: "night" },
  { name: "システム", value: "system" },
];
</script>
