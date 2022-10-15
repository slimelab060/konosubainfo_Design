<template>
  <Multiselect
    v-model="value"
    mode="tags"
    placeholder="ソート選択"
    label="name"
    :close-on-select="false"
    :options="options">
    <template v-slot:tag="{ option, handleTagRemove, disabled }">
      <div
        class="multiselect-tag is-user rounded-lg"
        :class="{
          'is-disabled': disabled,
        }">
        <img :src="option.image" class="w-6 h-6 rounded-full mx-auto multiselect-green" />
        {{ option.name }}
        <span
          v-if="!disabled"
          class="multiselect-tag-remove"
          @click="handleTagRemove(option, $event)">
          <span class="multiselect-tag-remove-icon"></span>
        </span>
      </div>
    </template>
  </Multiselect>
</template>

<style>
@import "../../assets/css/multiselect/tailwind.css";
</style>

<script setup>
const options = [
  { value: "judy", name: "Judy", image: "https://randomuser.me/api/portraits/med/women/1.jpg" },
  { value: "jane", name: "Jane", image: "https://randomuser.me/api/portraits/med/women/2.jpg" },
  { value: "john", name: "John", image: "https://randomuser.me/api/portraits/med/men/1.jpg" },
  { value: "joe", name: "Joe", image: "https://randomuser.me/api/portraits/med/men/2.jpg" },
];

const value = [];
console.log(value);
</script>
