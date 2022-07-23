<template>
  <select
    v-model="colorMode.preference"
    class="select select-bordered max-w-xs">
    <option v-for="theme in themes" :key="theme" :value="theme.value">
      {{ theme.name }}
    </option>
  </select>
  <!--
    <div class="w-full px-4 py-16">
      <div class="mx-auto w-full max-w-md">
        <RadioGroup v-model="selectedPerson">
          <div class="space-y-2">
            <RadioGroupOption
              as="template"
              v-for="theme in themes"
              :key="theme.name"
              :value="theme"
              @click="colorMode.preference = theme.value"
              v-slot="{ active, checked }">
              <div
                :class="[
                  active ? 'ring-2 ring-white ring-opacity-60' : '',
                  checked
                    ? 'bg-blue-900 bg-opacity-75 text-white '
                    : 'bg-white ',
                ]"
                class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none">
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel
                        as="p"
                        :class="checked ? 'text-white' : 'text-gray-900'"
                        class="font-medium">
                        {{ theme.name }}
                      </RadioGroupLabel>
                    </div>
                  </div>
                  <div v-show="checked" class="shrink-0 text-white">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        fill-opacity="0.2" />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </div>
    -->
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
