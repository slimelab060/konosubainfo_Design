<template>

  <header class="sticky top-0 w-full bg-base-100 z-30 mb-4 shadow-sm">
    <div class="navbar">
      <div class="flex-1 gap-2">
        <!-- ホームページリンクは仮です-->
        <nuxt-link class="btn btn-ghost normal-case text-xl gap-2" to="/">
          <div class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
            <span class="font-title text-lg font-extrabold sm:text-2xl">このファンまとめ</span>
          </div>
          <span class="font-mono text-xs text-opacity-50">α1.9.1 b20220701-196</span>
        </nuxt-link>

        <div class="form-control">
          <input type="text" placeholder="検索…" class="input input-bordered" />
        </div>
      </div>

      <div class="flex gap-4">
        <select class="select w-full max-w-xs" v-model="colorMode.preference">
          <option disabled selected>Theme</option>
          <option v-for="theme of themes" :key="theme">{{ theme }}</option>
        </select>
      </div>

      <div class="dropdown dropdown-end">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        <ul
          tabindex="0"
          class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li><nuxt-link to="/privacypolicy">プライバシーポリシー</nuxt-link></li>
          <li><nuxt-link to="/about">このサイトについて</nuxt-link></li>
          <li><nuxt-link to="http://localhost:3000/_tailwind/">プロパティ(デバッグ)</nuxt-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];
</script>

<style lang="scss" scoped></style>
