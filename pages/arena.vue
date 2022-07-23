<template>
  <div calss="min-h-screen h-screen">
    <Header />
    <div
      class="pt-10 pb-16 px-3 lg:px-10 lg:pt-24 text-center lg:pb-32 relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h1 class="text-7xl mb-4">About</h1>
      </div>
    </div>
    <div
      class="w-full max-w-[97.5rem] px-4 mx-auto grid grid-cols-1 lg:grid-cols-[18em_1fr] gap-4">
      <div
        class="lt-lg:opacity-0 transition lt-lg:fixed lt-lg:inset-0 lt-lg:z-100 duration-200 relative">
        <div class="p-4 bg-base-200 relative">
          <div
            class="grid grid-cols-1 gap-x-4 gap-y-2 py-4 overflow-x-auto sm:flex-wrap sm:justify-center">
            <h2 class="text-2xl font-extrabold tracking-tight">メニュー</h2>
            <button class="btn btn-outline max-w-[10rem]">Button</button>
            <button class="btn btn-outline max-w-[10rem]">Button</button>
            <button class="btn btn-outline max-w-[10rem]">Button</button>
          </div>
        </div>
      </div>

      <div class="bg-base-200"></div>
    </div>
    <Footer />
  </div>
</template>

<script setup></script>
