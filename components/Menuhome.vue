<template>

    <div class="bg-base-200 rounded-lg p-4">
      <h2 class="konosuba-title-green">クイックメニュー</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:row-start-2 lg:col-start-2 lg:col-end-2 place-items-center gap-4 py-4">
        <a v-for="n in mobileimages" :key="n"  href="https://konosubafd.jp/">
        <picture>
          <img :src=n :alt="n" width="128" height="128"/>
        </picture>
        </a>
      </div>
    </div>

</template>

<script>
export default {
    data(){
     return{
       images: [
       "assets/img/pc table/ホーム.png",
       "assets/img/pc table/イベント.png",
       "assets/img/pc table/キャラクタ.png",
       "assets/img/pc table/アリーナ.png",
       "assets/img/pc table/ガチャ.png",
       "assets/img/pc table/武器装飾.png",
       "assets/img/pc table/ダンジョン.png",
       "assets/img/pc table/名声クエスト.png",
     ],

     mobileimages: [
       "assets/img/mobile/ホーム.png",
       "assets/img/mobile/イベント.png",
       "assets/img/mobile/キャラクタ.png",
       "assets/img/mobile/アリーナ.png",
       "assets/img/mobile/ガチャ.png",
       "assets/img/mobile/武器装飾.png",
       "assets/img/mobile/ダンジョン.png",
       "assets/img/mobile/名声クエスト.png",
     ],
   }
  }
};
</script>