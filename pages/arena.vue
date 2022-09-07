<template>
  <div>
    <div class="py-20 px-4 lg:text-center relative">
      <div class="container mx-auto flex flex-col justify-between">
        <h1 class="text-6xl mb-4">アリーナ</h1>
        <Breadcrumbs />
      </div>
    </div>
    <div class="w-full max-w-[97.5rem] px-4 mx-auto grid grid-cols-1 lg:grid-cols-[18em_1fr] gap-4">
      <div class="duration-200 relative hidden lg:inline-block">
        <SideMenu2 />
      </div>

      <div class="bg-base-200">
        <div class="bg-base-300 gap-4 p-4 flex">
          <Dropfilter />
        </div>

        <div class="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
          <Card /><Card /><Card /><Card />
        </div>
      </div>
    </div>
  </div>
</template>
