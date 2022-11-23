<template>
  <div class="bg-base-200 rounded-lg p-4">
    <h2 class="konosuba-title-green">クイックメニュー</h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/information-circle.svg" /><span>イベント</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/character.svg" /><span>キャラクタ</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/gacha.svg" /><span>ガチャ</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/sword.svg" /><span>武器</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/shield.svg" /><span>アリーナ</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/famequest.svg" /><span>名声クエスト</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/dungeon-svgrepo-com.svg" /><span>ダンジョン</span>
        </button></nuxt-link
      >
      <nuxt-link to="/datalist"
        ><button
          class="btn btn-block btn-outline px-4 py-3 flex justify-start gap-2 cursor-pointer">
          <img src="~/assets/icons/beginner.svg" /><span>初心者</span>
        </button></nuxt-link
      >
    </div>
  </div>
</template>
