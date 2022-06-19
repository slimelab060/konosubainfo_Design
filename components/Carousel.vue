<template>
  <Swiper
    @swiper="onSwiper"
    :slides-per-view="1"
    :navigation="swiperNavigation"
    :centeredSlides="true"
    :space-between="10"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :clickable="true"
    :loop="true"
    :modules="[Navigation, Pagination, A11y, Lazy, Thumbs, Autoplay]"
    navigation
    :pagination="{
      clickable: true,
      dynamicBullets: false,
    }"
    :preload-images="false"
    lazy
    :thumbs="{ swiper: thumbs }"
  >
    <SwiperSlide
      v-for="n in images"
      :key="n"
      class="mx-auto swiper-lazy-preloader"
    >
      <img
        :src="n"
        class="swiper-lazy w-full rounded-3xl object-cover object-center"
      />
    </SwiperSlide>

    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </Swiper>
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

  background-image:url("/img/nextprev.svg");
  transform: scale(-1, 1);
}

.swiper-button-next {

  background-image:url("/img/nextprev.svg");
}

/*カスタムナビゲーション色変更 */
.swiper-pagination-bullet {
  width: 14px !important;
  height: 14px !important;
  margin: 0 0 0 10px !important;
  background: rgb(255, 255, 255) !important;
  border: 2px solid rgb(25, 25, 25);
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
        "/img/testimg01.jpg",
        "/img/testimg02.jpg",
        "/img/testimg03.jpg",
        "/img/testimg04.jpg",
        "/img/testimg05.jpg",
      ],
      Navigation,
      Pagination,
      A11y,
      Lazy,
      Thumbs,

        swiperNavigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    };
  },
};
</script>
