<template>
      <div class="fixed z-0 inset-x-0 hidden lg:inline-block overflow-hidden pointer-events-none">
        <div class="flex-none flex justify-center bg-cover">
          <picture>
            <img src="/img/headerback/bg_pc_top_01.png"/>
          </picture>
        </div>
      </div>

      <Header />

       <div class="flex justify-center relative z-10 mx-auto rounded-b-lg  m-4">
         <picture><img src="/img/headerback/logol.png" alt="logo" width="392" height="392" class="hidden lg:block"/></picture>
       </div>

    <div class="sticky grid z-20 overflow-hidden xl:max-w-[80rem] mx-auto px-4 gap-4 auto-rows-max grid-cols-1 lg:grid-cols-test lg:grid-rows-auto-fit">

      <div class="lg:rounded-lg lg:col-start-1 lg:col-end-3">
        <Carousel />
      </div>

      <div class="lg:col-start-1 lg:col-end-3">
        <div class="bg-base-200 rounded-lg p-4">
          <h2 class="konosuba-title-green">クイックメニュー</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:row-start-2 lg:col-start-2 lg:col-end-2 place-items-center gap-4	py-4 ">
          <a href="https://konosubafd.jp/"><img src="/img/ホーム.png" alt="1" width="92" height="92"><p class="text-center font-bold ">ホーム</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/イベント過去.png" alt="2" width="92" height="92"><p class="text-center font-bold">イベント</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/キャラクタ.png" alt="4" width="92" height="92"><p class="text-center font-bold">キャラクタ</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/アリーナ＆EX.png" alt="5" width="92" height="92"><p class="text-center font-bold">アリーナ&EX</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/ガチャ.png" alt="6" width="92" height="92"><p class="text-center font-bold">ガチャ</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/武器装飾.png" alt="7" width="92" height="92"><p class="text-center font-bold">武器</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/ダンジョン.png" alt="8" width="92" height="92"><p class="text-center font-bold">ダンジョン</p></a>
          <a href="https://konosubafd.jp/"><img src="/img/名声クエスト.png" alt="9" width="92" height="92"><p class="text-center font-bold">名声クエスト</p></a>
          </div>
        </div>
      </div>

      <div class="lg:col-start-1 lg:col-end-3">
        <div class="bg-base-200 rounded-lg p-4">
          <h2 class="konosuba-title-orange">最新情報</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:row-start-2 lg:col-start-2 lg:col-end-2 place-items-center gap-4	py-4 ">
          <a href="https://konosubafd.jp/"><img src="/img/pc table/ホーム.png" alt="1" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/イベント.png" alt="2" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/キャラクタ.png" alt="4" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/アリーナ.png" alt="5" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/ガチャ.png" alt="6" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/武器装飾.png" alt="7" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/ダンジョン.png" alt="8" width="192" height="192"></a>
          <a href="https://konosubafd.jp/"><img src="/img/pc table/名声クエスト.png" alt="9" width="192" height="192"></a>
          </div>
        </div>
      </div>

      <div class="bg-base-200 rounded-lg lg:col-start-3 lg:row-start-1 p-4">
        <h2 class="konosuba-title-blue">ゲーム権利表示</h2>
        <p class="py-4 text-sm overflow-auto h-20">
          ©2019 暁なつめ・三嶋くろね/KADOKAWA/映画このすば制作委員会
          ©Sumzap, Inc. <br />
          当サイト上で使用しているゲーム画像の著作権および商標権、その他知的財産権は、当該コンテンツの提供元に帰属します。<br />
        </p>
        <a href="https://konosubafd.jp/" class="btn btn-info mt-4">このファン公式サイト</a>
      </div>

        <div class="lg:col-start-3 lg:row-start-2 lg:row-end-4">
          <div class="bg-base-200 rounded-lg h-full ">
            <a class="twitter-timeline tw-align-center" data-width="100%" data-height="100%" data-chrome="nofooter" href="https://twitter.com/konosubafd?ref_src=twsrc%5Etfw">Tweets by konosubafd</a>
          </div>
        </div>
    </div>

    <Footer />

</template>

<script>
import Counter from "@/components/Counter.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel.vue";
import SideMenu from "@/components/SideMenu.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  componets: {
    Counter,
    Header,
    Footer,
    Carousel,
    SideMenu,
  },
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
