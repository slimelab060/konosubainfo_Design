<template>
<Header/>
  <div class="grid place-items-center h-screen">
    <div class="text-center">
      <p class="sticky text-8xl md:text-[9rem] cursor-pointer mb-8" @click="handleError">{{ error.statusCode }} :(</p>
      <p class="sticky text-2xl md:text-4xl  sm:px-0 font-light mb-4 leading-tight">
        {{ error.message }}<br/>
      </p>

      <div class="hidden xl:block">
        <div class="flex-none flex justify-center bg-cover ">
          <img src="assets/img/error/bg_error.webp" width="1280px" class="absolute"/>
        </div>
      </div>

      <div class="sticky flex-none flex justify-center bg-cover mb-4">
        <img :src="imgrand" width="340px" height="340px"/>
      </div>

      <p class="text-lg mb-4">
        おっと！ページが見つかりません<br/>
        お探しのページは、移動または削除されて可能性がありますね！<br/>
      </p>
      <div class="w-full sticky flex items-center justify-center">
        <button class="btn" @click="handleError">ホームへ戻る</button>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script setup>

//画像アドレス一覧
const images = reactive([
  "assets/img/error/E01.png",
  "assets/img/error/E02.png",
  "assets/img/error/E03.png",
  "assets/img/error/E04-2.png",
  "assets/img/error/E05.png",
  "assets/img/error/E06.png",
  "assets/img/error/E07.png",
  "assets/img/error/E08.png",
  "assets/img/error/E09.png",
  "assets/img/error/E10.png",
  "assets/img/error/E11.png",
  "assets/img/error/E12.png",
  "assets/img/error/E13.png",
  "assets/img/error/E14.png",
  "assets/img/error/E15.png",
  "assets/img/error/E16.png",
  "assets/img/error/E17.png",
  "assets/img/error/E18.png",
  "assets/img/error/E19.png",
  "assets/img/error/E20.png",
  "assets/img/error/E21.png",
  "assets/img/error/E22.png",
  "assets/img/error/E23.png",
]);

//キャラごとのエラーメッセージ(未使用)
const charamessage = reactive([
  "これはカズマメッセージ",
  "これはアクアメッセージ",
  "これはめぐみんメッセージ",
  "これはダクネスメッセージ",
  "これはクリスメッセージ",
  "これはウィズメッセージ",
  "これはゆんゆんメッセージ",
  "これはアイリスメッセージ",
  "これはセシリーメッセージ",
  "これはあるえメッセージ",
  "これはミツルギメッセージ",
  "これはダストメッセージ",
  "これはリーンメッセージ",
  "これはリアメッセージ",
  "これはシエロメッセージ",
  "これはエーリカメッセージ",
  "これはメリッサメッセージ",
  "これはミーアメッセージ",
  "これはエイミーメッセージ",
  "これはこめっこメッセージ",
  "これはメルメッセージ",
  "これはバニルメッセージ",
  "これはロリーサメッセージ",
]);

const props = defineProps({
  error: Object,
});

// エラーステータス取得
const error = useError();

// エラーをクリアにしてホームに戻る
const handleError = () => clearError({ redirect: "/" });

//画像URLを1枚ランダムに取得
  const index = Math.floor(Math.random() * images.length);
  const imgrand = images[index];
  //const message = charamessage[index];

</script>
