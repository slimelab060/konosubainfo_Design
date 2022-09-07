<template>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">ソート</span>
    </label>
    <select class="select select-bordered">
      <option disabled selected>属性</option>
      <option>火属性</option>
      <option>水属性</option>
      <option>風属性</option>
      <option>地属性</option>
      <option>雷属性</option>
      <option>光属性</option>
      <option>闇属性</option>
    </select>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">ソート</span>
    </label>
    <select class="select select-bordered">
      <option disabled selected>レアリティ</option>
      <option>火属性</option>
      <option>水属性</option>
      <option>風属性</option>
      <option>地属性</option>
      <option>雷属性</option>
      <option>光属性</option>
      <option>闇属性</option>
    </select>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">ソート</span>
    </label>
    <select class="select select-bordered">
      <option disabled selected>キャラ</option>
      <option>火属性</option>
      <option>水属性</option>
      <option>風属性</option>
      <option>地属性</option>
      <option>雷属性</option>
      <option>光属性</option>
      <option>闇属性</option>
    </select>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">ソート</span>
    </label>
    <select class="select select-bordered">
      <option disabled selected>特性</option>
      <option>火属性</option>
      <option>水属性</option>
      <option>風属性</option>
      <option>地属性</option>
      <option>雷属性</option>
      <option>光属性</option>
      <option>闇属性</option>
    </select>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js",
        },
      ],

      filterCounter: 0,
      reset: false,
      resetCounter: false,
      open() {
        this.show = true;
      },
      close() {
        this.show = false;
      },

      isOpen() {
        return this.show === true;
      },

      count() {
        this.show = false;
        this.checked = !this.checked;
        if (this.checked) {
          this.counter = this.counter + 1;
          this.filterCounter = this.filterCounter + 1;
        } else if (!this.checked) {
          this.counter = this.counter - 1;
          this.filterCounter = this.filterCounter - 1;
        }
      },
    };
  },
};
</script>
