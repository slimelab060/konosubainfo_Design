<template>
  <!--内部ドロワー-->
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <div class="menu px-4 w-80 bg-base-100">
      <div
        class="z-20 bg-base-100 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 flex">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
        <!--ロゴ&このファンタイトル-->
        <nuxt-link class="btn btn-ghost no-animation normal-case gap-2" to="/">
          <div
            class="font-title text-primary inline-flex flex-wrap text-lg transition-all duration-200 md:text-3xl">
            <span
              class="font-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 font-extrabold sm:text-2xl"
              >このファンまとめ</span
            >
          </div>
        </nuxt-link>
      </div>

      <div class="relative p-1">
        <!--ボタン制御-->
        <div class="grid grid-cols-1 gap-x-4 gap-y-2 py-4">
          <!--ボタンクラス-->
          <ul class="menu bg-base-100 w-56 p-2 rounded-box">
            <span class="font-normal border-l-[4px] border-konosuba-red p-1">メニュー</span>
            <li v-for="menu in menutitle" :key="menu">
              <NuxtLink :to="menu.url">
                <img :src="menu.path" :alt="menu.value" />
                <span class="font-semibold">{{ menu.name }}</span>
              </NuxtLink>
            </li>
            <li></li>
            <span class="font-normal border-l-[4px] border-konosuba-orange p-1">クエスト</span>
            <li v-for="menu in quest" :key="menu">
              <NuxtLink :to="menu.url">
                <img :src="menu.path" :alt="menu.value" />
                <span class="font-semibold">{{ menu.name }}</span>
              </NuxtLink>
            </li>
            <li></li>
            <span class="font-normal border-l-[4px] border-konosuba-green p-1">キャラ</span>
            <li v-for="menu in chara" :key="menu">
              <NuxtLink :to="menu.url">
                <img :src="menu.path" :alt="menu.value" />
                <span class="font-semibold">{{ menu.name }}</span>
              </NuxtLink>
            </li>
            <li></li>
            <span class="font-normal border-l-[4px] border-konosuba-blue p-1">鍛冶</span>
            <li v-for="menu in blacksmith" :key="menu">
              <NuxtLink :to="menu.url">
                <img :src="menu.path" :alt="menu.value" />
                <span class="font-semibold">{{ menu.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup>
//ダンジョンのアイコンは CC BY4.0ライセンスなのでクレジット表記必要
/**
# Icons: CC BY 4.0 License (https://creativecommons.org/licenses/by/4.0/)
The Font Awesome Free download is licensed under a Creative Commons
Attribution 4.0 International License and applies to all icons packaged
as SVG and JS file types.
*/

const menutitle = [
  { name: "ホーム", path: "_nuxt/assets/images/icons/home.svg", url: "/", value: "home" },
  {
    name: "イベント",
    path: "/assets/icons/information-circle.svg",
    url: "/event",
    value: "event",
  },
  { name: "ガチャ", path: "~assets/icons/gacha.svg", url: "/gacha", value: "gacha" },
  { name: "初心者", path: "~/assets/icons/beginner.svg", url: "/beginner", value: "beginner" },
  { name: "その他", path: "~/assets/icons/view-grid.svg", url: "/other", value: "other" },
];

const quest = [
  { name: "アリーナ", path: "/assets/icons/shield.svg", url: "/arena", value: "arena" },
  { name: "アリーナEX", path: "/assets/icons/shield.svg", url: "/arena", value: "arenaex" },
  {
    name: "ダンジョン",
    path: "~/assets/icons/dungeon-svgrepo-com.svg",
    url: "/dungeon",
    value: "dungeon",
  },
  {
    name: "名声クエスト",
    path: "/assets/icons//famequest.svg",
    url: "/famequest",
    value: "famequest",
  },
];

const chara = [
  {
    name: "キャラクタ",
    path: "/assets/icons/character.svg",
    url: "/character",
    value: "character",
  },
  { name: "アシスト", path: "/assets/icons/assist.svg", url: "/assists", value: "assists" },
];

const blacksmith = [
  { name: "武器", path: "/assets/icons//sword.svg", url: "/weapon", value: "weapons" },
  {
    name: "装飾",
    path: "/assets/icons/earrings.svg",
    url: "/weapon",
    value: "jewelry",
  },
];

const category = ["ホーム", "クエスト", "キャラ", "鍛冶"];
</script>
