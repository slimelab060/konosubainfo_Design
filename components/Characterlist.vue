<template>
  <div class="bg-base-200 rounded-lg p-4">
    <h2 class="konosuba-title-blue">キャラクター</h2>
    <div class="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <NuxtLink to="/">
        <Card />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const charalistimg = [
  "~assets/images/charalist/chara_001.png",
  "~assets/images/charalist/chara_002.png",
  "~assets/images/charalist/chara_003.png",
  "~assets/images/charalist/chara_004.png",
  "~assets/images/charalist/chara_005.png",
  "~assets/images/charalist/chara_006.png",
  "~assets/images/charalist/chara_007.png",
  "~assets/images/charalist/chara_008.png",
  "~assets/images/charalist/chara_009.png",
  "~assets/images/charalist/chara_010.png",
  "~assets/images/charalist/chara_011.png",
  "~assets/images/charalist/chara_012.png",
  "~assets/images/charalist/chara_013.png",
  "~assets/images/charalist/chara_014.png",
  "~assets/images/charalist/chara_015.png",
  "~assets/images/charalist/chara_016.png",
  "~assets/images/charalist/chara_017.png",
  "~assets/images/charalist/chara_018.png",
  "~assets/images/charalist/chara_019.png",
  "~assets/images/charalist/chara_020.png",
  "~assets/images/charalist/chara_021.png",
  "~assets/images/charalist/chara_022.png",
  "~assets/images/charalist/chara_023.png",
  "~assets/images/charalist/chara_100.png",
  "~assets/images/charalist/chara_101.png",
  "~assets/images/charalist/chara_102.png",
  "~assets/images/charalist/chara_103.png",
  "~assets/images/charalist/chara_104.png",
  "~assets/images/charalist/chara_105.png",
  "~assets/images/charalist/chara_106.png",
  "~assets/images/charalist/chara_107.png",
  "~assets/images/charalist/chara_108.png",
  "~assets/images/charalist/chara_109.png",
  "~assets/images/charalist/chara_110.png",
];
</script>
