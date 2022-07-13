<template>

    <div class="bg-base-200 rounded-lg p-4">
      <h2 class="konosuba-title-green">クイックメニュー</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:row-start-2 lg:col-start-2 lg:col-end-2 place-items-center gap-4 py-4">
          <nuxt-link to="/arena"><img src="assets/img/pc_table/Arena.png"/></nuxt-link>
          <nuxt-link to="/event"><img src="assets/img/pc_table/Event.png"/></nuxt-link>
          <nuxt-link to="/character"><img src="assets/img/pc_table/Character.png"/></nuxt-link>
          <nuxt-link to="/dungeon"><img src="assets/img/pc_table/Dungeon.png"/></nuxt-link>
          <nuxt-link to="/gacha"><img src="assets/img/pc_table/Gacha.png"/></nuxt-link>
          <nuxt-link to="/weapon"><img src="assets/img/pc_table/Weapon_decoration.png"/></nuxt-link>
          <nuxt-link to="/beginner"><img src="assets/img/pc_table/Beginner.png"/></nuxt-link>
          <nuxt-link to="/famequest"><img src="assets/img/pc_table/Fame_Quest.png"/></nuxt-link>
      </div>
    </div>

</template>

<script>
export default {
    data(){
     return{
       images: [
        "assets/img/pc_table/Event.png",
        "assets/img/pc_table/Character.png",
        "assets/img/pc_table/Arena.png",
        "assets/img/pc_table/Gacha.png",
        "assets/img/pc_table/Weapon_decoration.png",
        "assets/img/pc_table/Dungeon.png",
        "assets/img/pc_table/Fame_Quest.png",
     ],
     mobileimages: [
       "assets/img/mobile/Event.png",
       "assets/img/mobile/Character.png",
       "assets/img/mobile/Arena.png",
       "assets/img/mobile/Gacha.png",
       "assets/img/mobile/Weapon_decoration.png",
       "assets/img/mobile/Dungeon.png",
       "assets/img/mobile/Fame_Quest.png",
     ],
   }
  }
};
</script>