<template>
  <div class="p-4 bg-base-200 relative">
    <!--ボタン制御-->
    <div class="grid grid-cols-1 gap-x-4 gap-y-2 py-4">
      <!--ボタンクラス-->
      <ul class="menu peer-checked:bg-green-400 w-full p-4 rounded-box">
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
  { name: "ホーム", path: "/assets/icons/home.svg", url: "/", value: "home" },
  { name: "イベント", path: "/assets/icons/information-circle.svg", url: "/event", value: "event" },
  { name: "ガチャ", path: "/assets/icons//gacha.svg", url: "/gacha", value: "gacha" },
  { name: "初心者", path: "/assets/icons/beginner.svg", url: "/beginner", value: "beginner" },
  { name: "その他", path: "/assets/icons/view-grid.svg", url: "/other", value: "other" },
];

const quest = [
  { name: "アリーナ", path: "/assets/icons/shield.svg", url: "/arena", value: "arena" },
  { name: "アリーナEX", path: "/assets/icons/shield.svg", url: "/arena", value: "arenaex" },
  {
    name: "ダンジョン",
    path: "/assets/icons/dungeon-svgrepo-com.svg",
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
</script>
