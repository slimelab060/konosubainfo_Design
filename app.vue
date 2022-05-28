<template>
  <div class="bg-slate-100">
    <div
      class="min-h-screen container md:flex flex-col max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <header class="p-2"><Header /></header>
      <div class="flex-1 flex flex-col sm:flex-row">
        <main class="flex-1 bg-indigo-500 flex-grow">
          <div class="flex-1 md:flex md:flex-row bg-red-100 p-4">
            <Carousel />
          </div>
          <div class="flex flex-row flex-wrap gap-2 bg-blue-600 rounded-lg p-4">
            <h2 class="text-xl font-extrabold text-white">クイックメニュー</h2>
            <div class="flex flex-wrap gap-2">
            <button class="btn">アリーナ</button>
            <button class="btn">アリーナEX</button>
            <button class="btn">アシスト</button>
            <button class="btn">アイテム素材</button>
            <button class="btn">イベント</button>
            <button class="btn">ガチャ</button>
            <button class="btn">キャラクタ</button>
            <button class="btn">ダンジョン</button>
            <button class="btn">初心者</button>
            <button class="btn">メインクエスト</button>
            <button class="btn">装飾品</button>
            <button class="btn">武器</button>
            <button class="btn">その他</button>
          </div>
          </div>
        </main>
        <nav class="order-first bg-purple-200 p-4 hidden lg:inline-block">
          <SideMenu />
        </nav>
        <aside class="bg-yellow-500 content-center p-4">
        <h2 class="text-xl font-extrabold text-white mb-4">公式Twitter</h2>
          <a
            class="twitter-timeline"
            data-height="400"
            data-width="150"
            href="https://twitter.com/konosubafd?ref_src=twsrc%5Etfw"
            >Tweets by konosubafd</a
          >
        </aside>
      </div>
      <footer><Footer /></footer>
    </div>
  </div>
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
