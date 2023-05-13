<template>
  <!--内部ドロワー-->
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <div class="menu px-4 w-80 bg-base-100">
      <div
        class="z-20 bg-base-100 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 flex">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
        <!--ロゴ&このファンタイトル-->
        <nuxt-link class="btn btn-ghost no-animation normal-case gap-2" to="/">
          <div class="font-title text-primary inline-flex flex-wrap text-lg transition-all duration-200 md:text-3xl">
            <span class="font-title text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 font-extrabold sm:text-2xl" >このファンまとめ</span>
          </div>
        </nuxt-link>
      </div>
      <Menucolumn/>
      <Footer />
    </div>
  </div>
</template>
