<template>
<div class="h-screen">

  <!--ヘッダー-->
  <Header/>

  <!--バックグラウンド背景-->
  <Background/>

  <!--このすばのロゴ-->
  <Konosubalogo/>

    <!--メインコンテンツ-->
  <div class="sticky grid gap-4 grid-cols-1 lg:grid-cols-content lg:bg-base-200 lg:bg-opacity-70 lg:rounded-lg max-w-[96rem] mx-auto p-4">

    <!--お知らせバナー-->
    <div class="lg:rounded-lg lg:col-start-1">
      <Carousel/>
  </div>

    <!--クイックメニュー-->
  <div class="lg:col-start-1">
    <Menuhome/>
  </div>

    <!--最新情報-->
  <div class="lg:col-start-1 lg:">
    <Infoside/>
  </div>

    <!--キャラクター-->
  <div class="lg:col-start-1">
    <Characterlist/>
  </div>

      <!--補足情報-->
  <div class="bg-base-200 rounded-lg lg:col-start-2 lg:row-start-1 p-4">
   <Infokonosuba/>
  </div>

      <!--著作権表記-->
  <div class="bg-base-200 lg:col-start-1 rounded-lg p-4">
    <Copylight/>
  </div>

    <!--Twitterこのファン公式埋め込み-->
    <div class="lg:col-start-2 lg:row-start-2 lg:row-end-5">
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