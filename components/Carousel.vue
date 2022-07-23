<template>
  <div>
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="1"
      :centeredSlides="true"
      :space-between="10"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :clickable="true"
      :loop="true"
      :navigation="swiperNavigation"
      :modules="[Navigation, Pagination, A11y, Lazy, Thumbs, Autoplay]"
      :pagination="pagination"
      :preload-images="false"
      lazy
      :thumbs="{ swiper: thumbs }">
      <SwiperSlide
        v-for="n in images"
        :key="n"
        class="mx-auto swiper-lazy-preloader">
        <img
          :src="n"
          class="swiper-lazy w-full rounded-lg object-cover object-center" />
      </SwiperSlide>
      <div slot="button-prev" class="swiper-button-prev hidden md:inline"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </Swiper>
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
</template>

<style>
/* デフォルトの矢印を消す */
.swiper-button-prev::after,
.swiper-button-next::after {
  content: none !important;
}

/*カスタム矢印 */
.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  height: 50px;
  background-size: 27px 45px;
}

/*カスタム矢印 */
.swiper-button-prev {
  background-image: url("assets/img/nextprev.svg");
  transform: scale(-1, 1);
}

.swiper-button-next {
  background-image: url("assets/img/nextprev.svg");
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

<script>
import { ref, watch, toRefs } from "vue";
import { Navigation, Pagination, A11y, Lazy, Thumbs, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    currentSlide: Number,
    thumbs: Object,
  },

  setup(props) {
    const swiperRef = ref(null);

    const { currentSlide } = toRefs(props);

    watch(currentSlide, () => {
      if (swiperRef.value !== null) {
        swiperRef.value.slideTo(props.currentSlide);
      }
    });

    const onSwiper = (swiper) => {
      swiperRef.value = swiper;
    };

    return {
      swiperRef,
      onSwiper,
      Autoplay,
      images: [
        "assets/img/infomationbanner/20220714/banner_1.png",
        "assets/img/infomationbanner/20220714/banner_2.png",
        "assets/img/infomationbanner/20220714/banner_3.png",
        "assets/img/infomationbanner/20220714/banner_4.png",
        "assets/img/infomationbanner/20220714/banner_5.png",
        "assets/img/infomationbanner/20220714/banner_6.png",
        "assets/img/infomationbanner/20220714/banner_7.png",
        "assets/img/infomationbanner/20220714/banner_8.png",
      ],
      Navigation,
      Pagination,
      A11y,
      Lazy,
      Thumbs,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: false,
      },

      swiperNavigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  },
};
</script>
