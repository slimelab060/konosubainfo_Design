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
          <img src="~/assets/images/error/bg_error.webp" width="1280px" class="absolute" />
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
  "_nuxt/assets/images/error/e01.png",
  "_nuxt/assets/images/error/e02.png",
  "_nuxt/assets/images/error/e03.png",
  "_nuxt/assets/images/error/e04-2.png",
  "_nuxt/assets/images/error/e05.png",
  "_nuxt/assets/images/error/e06.png",
  "_nuxt/assets/images/error/e07.png",
  "_nuxt/assets/images/error/e08.png",
  "_nuxt/assets/images/error/e09.png",
  "_nuxt/assets/images/error/e10.png",
  "_nuxt/assets/images/error/e11.png",
  "_nuxt/assets/images/error/e12.png",
  "_nuxt/assets/images/error/e13.png",
  "_nuxt/assets/images/error/e14.png",
  "_nuxt/assets/images/error/e15.png",
  "_nuxt/assets/images/error/e16.png",
  "_nuxt/assets/images/error/e17.png",
  "_nuxt/assets/images/error/e18.png",
  "_nuxt/assets/images/error/e19.png",
  "_nuxt/assets/images/error/e20.png",
  "_nuxt/assets/images/error/e21.png",
  "_nuxt/assets/images/error/e22.png",
  "_nuxt/assets/images/error/e23.png",
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
