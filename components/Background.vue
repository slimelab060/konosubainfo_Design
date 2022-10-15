<template>
  <div
    class="relative bg-fixed pointer-events-none flex-none flex justify-center bg-cover select-none">
    <!--<nuxt-picture src="/images/bg_pc_top_2.5th.webp" loading="lazy" width="4500" height="1500" />-->

    <picture>
      <source
        srcset="assets/images/headerback/1500x500_hellowin.webp"
        media="(min-width: 1024px)"
        alt="wallpaper"
        width="2560"
        height="1440" />
      <img src="assets/images/other/none.webp" alt="none" />
    </picture>

    <div class="absolute mx-auto">
      <!--  <div class="flex relative justify-center mx-auto lg:mb-[24.5rem]">
      非表示用
    -->
      <picture>
        <source
          srcset="assets/images/headerback/logol.png"
          media="(min-width: 1024px)"
          alt="logo"
          width="392"
          height="392" />
        <img src="assets/images/other/none.webp" alt="none" />
      </picture>
    </div>
  </div>
</template>
