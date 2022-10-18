<template>
  <Header />
  <div class="grid place-items-center h-screen">
    <div class="text-center">
      <p class="sticky text-8xl md:text-[8rem] cursor-pointer mb-8" @click="handleError">
        {{ error.statusCode }} :(
      </p>
      <p class="sticky text-2xl md:text-4xl sm:px-0 font-light mb-4 leading-tight">
        {{ error.message }}<br />
      </p>

      <div class="hidden xl:block">
        <div class="flex-none flex justify-center bg-cover">
          <img src="assets/images/error/bg_error.webp" width="1280px" class="absolute" />
        </div>
      </div>

      <div class="sticky flex-none flex justify-center bg-cover mb-4">
        <img :src="imgrand" width="340px" height="340px" />
      </div>

      <p class="text-lg mb-4">エラー発生した場合は「ホームへ戻る」を押してください。</p>
      <div class="w-full sticky flex items-center justify-center">
        <button class="btn" @click="handleError">ホームへ戻る</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
//画像アドレス一覧
const images = reactive([
  "assets/images/error/E01.png",
  "assets/images/error/E02.png",
  "assets/images/error/E03.png",
  "assets/images/error/E04-2.png",
  "assets/images/error/E05.png",
  "assets/images/error/E06.png",
  "assets/images/error/E07.png",
  "assets/images/error/E08.png",
  "assets/images/error/E09.png",
  "assets/images/error/E10.png",
  "assets/images/error/E11.png",
  "assets/images/error/E12.png",
  "assets/images/error/E13.png",
  "assets/images/error/E14.png",
  "assets/images/error/E15.png",
  "assets/images/error/E16.png",
  "assets/images/error/E17.png",
  "assets/images/error/E18.png",
  "assets/images/error/E19.png",
  "assets/images/error/E20.png",
  "assets/images/error/E21.png",
  "assets/images/error/E22.png",
  "assets/images/error/E23.png",
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
