<template>
<div>

  <!--ヘッダー-->
  <Header/>

  <!--バックグラウンド背景-->
  <Background/>

  <!--このすばのロゴ-->
  <Konosubalogo/>

    <!--メインコンテンツ-->
  <div class="sticky grid z-20 lg:bg-base-200 lg:bg-opacity-70 lg:rounded-lg overflow-hidden xl:max-w-[80rem] mx-auto p-4 gap-4 auto-rows-max grid-cols-1 lg:grid-cols-test lg:grid-rows-auto-fit">

    <!--お知らせバナー-->
    <div class="lg:rounded-lg lg:col-start-1 lg:col-end-3">
      <Carousel/>
  </div>

    <!--クイックメニュー-->
  <div class="lg:col-start-1 lg:col-end-3">
    <Menuhome/>
  </div>

    <!--最新情報-->
  <div class="lg:col-start-1 lg:col-end-3">
    <Infoside/>
  </div>

  <div class="lg:col-start-1 lg:col-end-3">
      <div class="bg-base-200 rounded-lg p-4">
        <h2 class="konosuba-title-blue">キャラクター</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:row-start-2 lg:col-start-2 lg:col-end-2 place-items-center gap-4 py-4">
          <NuxtLink v-for="n in charalistimg" :key="n" to="/"><img :src=n alt="charalist" width="160px" height="160px" /></NuxtLink>
      </div>
    </div>
  </div>

      <!--補足情報-->
  <div class="bg-base-200 rounded-lg lg:col-start-3 lg:row-start-1 p-4">
   <Infokonosuba/>
  </div>

      <!--著作権表記-->
  <div class="bg-base-200 lg:col-start-1 rounded-lg lg:col-end-4 p-4">
    <Copylight/>
  </div>

    <!--Twitterこのファン公式埋め込み-->
    <div class="lg:col-start-3 lg:row-start-2 lg:row-end-4">
      <div class="bg-base-200 rounded-lg h-full">
       <a
        class="twitter-timeline tw-align-center"
        data-width="100%"
        data-height="100%"
        data-chrome="nofooter"
        href="https://twitter.com/konosubafd?ref_src=twsrc%5Etfw"
      >Tweets by konosubafd</a>
      </div>
    </div>
  </div>

  <!--フッター-->
  <Footer/>
</div>
</template>

<script setup>

const charalistimg = reactive([
"/assets/img/charalist/chara_001.png",
"/assets/img/charalist/chara_002.png",
"/assets/img/charalist/chara_003.png",
"/assets/img/charalist/chara_004.png",
"/assets/img/charalist/chara_005.png",
"/assets/img/charalist/chara_006.png",
"/assets/img/charalist/chara_007.png",
"/assets/img/charalist/chara_008.png",
"/assets/img/charalist/chara_009.png",
"/assets/img/charalist/chara_010.png",
"/assets/img/charalist/chara_011.png",
"/assets/img/charalist/chara_012.png",
"/assets/img/charalist/chara_013.png",
"/assets/img/charalist/chara_014.png",
"/assets/img/charalist/chara_015.png",
"/assets/img/charalist/chara_016.png",
"/assets/img/charalist/chara_017.png",
"/assets/img/charalist/chara_018.png",
"/assets/img/charalist/chara_019.png",
"/assets/img/charalist/chara_020.png",
"/assets/img/charalist/chara_021.png",
"/assets/img/charalist/chara_022.png",
"/assets/img/charalist/chara_023.png",
"/assets/img/charalist/chara_100.png",
"/assets/img/charalist/chara_101.png",
"/assets/img/charalist/chara_102.png",
"/assets/img/charalist/chara_103.png",
"/assets/img/charalist/chara_104.png",
"/assets/img/charalist/chara_105.png",
"/assets/img/charalist/chara_106.png",
"/assets/img/charalist/chara_107.png",
"/assets/img/charalist/chara_108.png",
"/assets/img/charalist/chara_109.png",
"/assets/img/charalist/chara_110.png",
]);

</script>

<script>

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {

    head() {
        return {
            script: [
                {
                    type: "text/javascript",
                    async: true,
                    src: "https://platform.twitter.com/widgets.js",
                    charset: "utf-8",
                },
            ],
        };
    },
    mounted() {
        window.twttr.widgets.load();
    },

};
</script>