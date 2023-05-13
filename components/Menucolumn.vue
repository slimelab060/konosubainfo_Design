<template>
          <div class="relative p-1">
        <!--ボタン制御-->
          <!--ボタンクラス-->
          <ul class="menu p-2">
            <span class="font-normal border-l-[4px] border-konosuba-red p-1">メニュー</span>
            <li>
            <NuxtLink to="/">
                <img src="~/assets/images/icons/home.svg" alt="home" />
                <span class="font-semibold">ホーム</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/information-circle.svg" alt="event" />
                <span class="font-semibold">イベント</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/gacha.svg" alt="gacha" />
                <span class="font-semibold">ガチャ</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/beginner.svg" alt="beginner" />
                <span class="font-semibold">初心者</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/view-grid.svg" alt="other" />
                <span class="font-semibold">その他</span>
            </NuxtLink>
            </li>
            <li></li>

            <span class="font-normal border-l-[4px] border-konosuba-orange p-1">クエスト</span>

            <li>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/shield.svg" alt="arena" />
                <span class="font-semibold">アリーナ</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/shield.svg" alt="arenaex" />
                <span class="font-semibold">アリーナEX</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/dungeon-svgrepo-com.svg" alt="dungeon" />
                <span class="font-semibold">ダンジョン</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/famequest.svg" alt="famequest" />
                <span class="font-semibold">名声クエスト</span>
            </NuxtLink>
            </li>
            <li></li>

            <span class="font-normal border-l-[4px] border-konosuba-green p-1">キャラ</span>
            <li>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/character.svg" alt="character" />
                <span class="font-semibold">キャラクタ</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/assist.svg" alt="assists" />
                <span class="font-semibold">アシスト</span>
            </NuxtLink>
            </li>
            <li></li>

            <span class="font-normal border-l-[4px] border-konosuba-blue p-1">鍛冶</span>
            <li>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/sword.svg" alt="weapons" />
                <span class="font-semibold">武器</span>
            </NuxtLink>
            <NuxtLink to="/datalist">
                <img src="~/assets/images/icons/earrings.svg" alt="jewelry" />
                <span class="font-semibold">装飾</span>
            </NuxtLink>
            </li>
          </ul>
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


const imageName = 'home'

let image = {}
try {
  image = await import(`~/assets/images/icons/${imageName}.svg`) 
} catch (e) {
  console.log(e)
}


const menutitle = [
  { name: "ホーム", path: "~/assets/images/icons/home.svg", url: "/", value: "home" },
  { name: "イベント", path: "~/assets/images/icons/information-circle.svg", url: "/datalist", value: "event",},
  { name: "ガチャ", path: "~/assets/icons/gacha.svg", url: "/datalist", value: "gacha" },
  { name: "初心者", path: "~/assets/icons/beginner.svg", url: "/datalist", value: "beginner" },
  { name: "その他", path: "~/assets/icons/view-grid.svg", url: "/datalist", value: "other" },
];

const quest = [
  { name: "アリーナ", path: "/_nuxt/assets/icons/shield.svg", url: "/datalist", value: "arena" },
  { name: "アリーナEX", path: "/_nuxt/assets/icons/shield.svg", url: "/datalist", value: "arenaex" },
  { name: "ダンジョン", path: "/_nuxt/assets/icons/dungeon-svgrepo-com.svg", url: "/datalist", value: "dungeon",},
  { name: "名声クエスト", path: "/_nuxt/assets/icons/famequest.svg", url: "/datalist", value: "famequest",
  },
];

const chara = [
  { name: "キャラクタ", path: "~/assets/icons/character.svg", url: "/datalist", value: "character",},
  { name: "アシスト", path: "~/assets/icons/assist.svg", url: "/datalist", value: "assists" },
];

const blacksmith = [
  { name: "武器", path: "~/assets/icons//sword.svg", url: "/datalist", value: "weapons" },
  { name: "装飾", path: "~/assets/icons/earrings.svg", url: "/datalist", value: "jewelry",
  },
];

const category = ["ホーム", "クエスト", "キャラ", "鍛冶"];
</script>