<template>
  <!--外部ヘッダー-->
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <Header />
      <slot />
      <Footer />
    </div>
    <SideMenu />
  </div>
</template>
