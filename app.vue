<template>
  <div class="bg-blue-100">
    <div
      class="grid overflow-hidden container auto-cols-auto auto-rows-auto gap-1 mx-auto"
    >
      <div class="bg-slate-300 col-start-1 col-end-8"><Header /></div>
      <nav>
        <div class="bg-blue-500 row-start-2 col-start-1 hidden lg:inline-block">
          <SideMenu />
        </div>
      </nav>
      <main>
        <div class="bg-green-500 col-start-2 col-end-5"><Carousel /></div>
      </main>

      <div class="bg-red-700 col-start-5 col-end-7">
        <h2>ゲーム著作権権限</h2>
        <p>
          ©2019 暁なつめ・三嶋くろね/KADOKAWA/映画このすば制作委員会<br />
          ©Sumzap, Inc. <br />
          当サイト上で使用しているゲーム画像の著作権および商標権、その他知的財産権は、当該コンテンツの提供元に帰属します。<br />
          このファン公式サイト
        </p>
      </div>
      <div class="bg-yellow-500 col-start-7 col-end-8">
        <a
          class="twitter-timeline"
          data-height="400"
          data-width="150"
          href="https://twitter.com/konosubafd?ref_src=twsrc%5Etfw"
          >Tweets by konosubafd</a
        >
      </div>
      <div class="bg-red-500 row-start-3 col-start-1 col-end-8"><Footer /></div>
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
import Footer1 from "@/components/Footer.vue";

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
  components: { Footer1 },
};
</script>
