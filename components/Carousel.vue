<template>
  <ClientOnly>
    <Swiper
      :slides-per-view="1"
      :centeredSlides="true"
      :space-between="10"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :clickable="true"
      :loop="true"
      :navigation="swiperNavigation"
      :pagination="swiperPagination"
      :modules="swiperModules"
      :preload-images="false"
      lazy>
      <SwiperSlide v-for="n in images" :key="n" class="mx-auto swiper-lazy-preloader">
        <img :src="n" class="swiper-lazy w-full rounded-lg object-cover object-center" />
      </SwiperSlide>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </Swiper>
    <div slot="pagination" class="swiper-pagination"></div>
  </ClientOnly>
</template>

<style>
/* デフォルトの矢印を消す */
.swiper-button-prev::after,
.swiper-button-next::after {
  content: none !important;
}

@media screen and (min-width: 1024px) {
  /*カスタム矢印 */
  .swiper-button-prev,
  .swiper-button-next {
    width: 27px;
    height: 46px;
    background-size: 27px 45px;
  }

  /*カスタム矢印 */
  .swiper-button-prev {
    background-image: url("~/assets/images/nextprev.svg");
    transform: scale(-1, 1);
  }

  .swiper-button-next {
    background-image: url("assets/images/nextprev.svg");
  }
}

/*カスタムナビゲーション色変更 */
.swiper-pagination-bullet {
  width: 14px !important;
  height: 14px !important;
  background: rgb(255, 255, 255) !important;
  border: 2px solid rgb(25, 25, 25);
}

/*位置調整*/
.swiper-pagination {
  position: relative !important;
  text-align: center !important;
  bottom: -10px !important;
  z-index: 10 !important;
}
</style>

<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Lazy, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

//Swiperのモジュール読み込み
const swiperModules = [Navigation, Pagination, Lazy, Autoplay];

//画像バーナー(試験運用)
const images = [
  "/_nuxt/assets/images/infomationbanner/20220731/banner_1.png",
  "/_nuxt/assets/images/test/banner_test.png",
  "/_nuxt/assets/images/test/banner_test.png",
];

//カスタムPagination
const swiperPagination = {
  el: ".swiper-pagination",
  clickable: true,
};

//カスタムNavigation
const swiperNavigation = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};
</script>
