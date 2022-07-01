<template>
    <div>
  <Counter
  :year="2022"
  :month="5"
  :date="31"
  :hour="14"
  :mintue="59"
  :second="59"
  :millisecond="59"
  />
    </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
export default {
  componets: {
   Counter
  }
}
</script>

<style lang="scss" scoped>

</style>