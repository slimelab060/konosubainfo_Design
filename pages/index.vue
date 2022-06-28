<template>
<div>
  <!--バックグラウンド背景-->
  <div class="fixed z-0 inset-x-0 hidden lg:inline-block overflow-hidden pointer-events-none">
    <div class="flex-none flex justify-center bg-cover">
      <picture>
        <img src="assets/img/headerback/bg_pc_top_01.png" />
      </picture>
    </div>
  </div>

  <Header />

  <!--このすばのロゴ-->
  <div class="flex justify-center relative z-10 mx-auto rounded-b-lg m-4">
    <picture>
      <img
        src="assets/img/headerback/logol.png"
        alt="logo"
        width="392"
        height="392"
        class="hidden lg:block"/>
    </picture>
  </div>

    <!--メインコンテンツ-->
  <div class="sticky grid z-20 overflow-hidden xl:max-w-[80rem] mx-auto px-4 gap-4 auto-rows-max grid-cols-1 lg:grid-cols-test lg:grid-rows-auto-fit">

    <!--お知らせバナー-->
    <div class="lg:rounded-lg lg:col-start-1 lg:col-end-3">
      <Carousel />
  </div>

    <!--クイックメニュー-->
  <div class="lg:col-start-1 lg:col-end-3">
     <Menuhome />
  </div>

    <!--最新情報-->
  <div class="lg:col-start-1 lg:col-end-3">
     <Infoside/>
  </div>

    <!--著作権表記-->
  <div class="bg-base-200 rounded-lg lg:col-start-3 lg:row-start-1 p-4">
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

<Footer />
  </div>
</template>

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
