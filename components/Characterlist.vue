<template>
    <div>
      <div class="bg-base-200 rounded-lg p-4">
        <h2 class="konosuba-title-blue">キャラクター</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:row-start-2 lg:col-start-2 lg:col-end-2 place-items-center gap-4 py-4">
          <NuxtLink v-for="n in charalistimg" :key="n" to="/"><img :src=n alt="charalist" width="160px" height="160px" /></NuxtLink>
      </div>
    </div>
    </div>
</template>

<script setup>

const charalistimg = reactive([
"/assets/img/charalist/chara_001.png",
"/assets/img/charalist/chara_002.png",
"/assets/img/charalist/chara_003.png",
"/assets/img/charalist/chara_004.png",
"/assets/img/charalist/chara_005.png",
"/assets/img/charalist/chara_006.png",
"/assets/img/charalist/chara_007.png",
"/assets/img/charalist/chara_008.png",
"/assets/img/charalist/chara_009.png",
"/assets/img/charalist/chara_010.png",
"/assets/img/charalist/chara_011.png",
"/assets/img/charalist/chara_012.png",
"/assets/img/charalist/chara_013.png",
"/assets/img/charalist/chara_014.png",
"/assets/img/charalist/chara_015.png",
"/assets/img/charalist/chara_016.png",
"/assets/img/charalist/chara_017.png",
"/assets/img/charalist/chara_018.png",
"/assets/img/charalist/chara_019.png",
"/assets/img/charalist/chara_020.png",
"/assets/img/charalist/chara_021.png",
"/assets/img/charalist/chara_022.png",
"/assets/img/charalist/chara_023.png",
"/assets/img/charalist/chara_100.png",
"/assets/img/charalist/chara_101.png",
"/assets/img/charalist/chara_102.png",
"/assets/img/charalist/chara_103.png",
"/assets/img/charalist/chara_104.png",
"/assets/img/charalist/chara_105.png",
"/assets/img/charalist/chara_106.png",
"/assets/img/charalist/chara_107.png",
"/assets/img/charalist/chara_108.png",
"/assets/img/charalist/chara_109.png",
"/assets/img/charalist/chara_110.png",
]);

</script>