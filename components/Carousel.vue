<template>
  <Swiper
    @swiper="onSwiper"
    :slides-per-view="1.2"
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
    grab-cursor
    :preload-images="false"
    lazy
    :thumbs="{ swiper: thumbs }"
    class="container p-4 w-[20rem] sm:w-[20rem] md:w-[30rem] xl:w-[44rem]"
  >
    <SwiperSlide v-for="n in images" :key="n" class="mx-auto">
      <img :src="n" class="swiper-lazy rounded-2xl lg:h-48 h-36 w-full object-cover object-center" />
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.custom {
  padding: 0px;
  width: 740px;
  height: 210px;
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
        "/img/k-01.png",
        "/img/k-02.png",
        "/img/k-03.png",
        "/img/k-04.png",
        "/img/k-05.png",
        "/img/k-06.png",
        "/img/k-07.png",
        "/img/testimg1.jpg",
        "/img/testimg2.png",
      ],
      Navigation,
      Pagination,
      A11y,
      Lazy,
      Thumbs,
    };
  },
};
</script>
