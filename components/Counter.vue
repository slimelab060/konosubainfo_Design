<template>

<span class="countdown font-mono text-2xl">
  <span id="counterdays"></span>:
  <span id="counterhours"></span>:
  <span id="counterminutes"></span>:
  <span id="counterseconds"></span>
</span>

<!--
<div class="card w-96 mx-auto bg-base-100 shadow-xl">
  <figure><img src="img/k-02.png" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">ダンまちアクア
      <div class="badge badge-secondary">コラボ限定</div>
    </h2>

    <p>どうしてヘスティアは神様だって信じてもらえるの！？私だって女神なのに！！</p>
        <div class="card-actions  justify-end">

      <div class="badge badge-outline">物理</div> 
      <div class="badge badge-outline">光属性</div>
    </div>
    <div class="items-center max-w-sm card-actions justify-end">

  <Counter
  :year="2022"
  :month="5"
  :date="19"
  :hour="0"
  :mintue="0"
  :second="0"
  :millisecond="0"
  />

      <button class="btn btn-primary">もっと見る</button>
    </div>
  </div>
</div>
-->

</template>

<script>

    export default {
    inheritAttrs: false,
    props: ["year", "month", "date", "hour", "mintue", "second", "millisecond"],
    data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    loaded: false
  }),

  computed: {
      _seconds:() => 1000,
      _minutes(){
          return this._seconds * 60;
      },
      _hours(){
          return this._minutes * 60;
      },
      _days(){
          return this._hours * 24;
      },
      end(){
          return new Date(
              this.year,
              this.month - 1,
              this.date,
              this.hour,
              this.mintue,
              this.second,
              this.millisecond
          );
      }
  },

  mounted(){
      this.showRemaining()
  },

  methods:{

    //三項演算子 10よりnum値が小さければ0追加
    formatNum: num => (num < 10 ? "0" + num : num),

    showRemaining(){
      const timer = setInterval(() => {
          const now = new Date();
          const distance = this.end.getTime() - now.getTime();

          if(distance < 0){
              clearInterval(timer);
              return;
          }

          //コードが長くなっていますが、日、時、分、秒をカウントダウン計算処理し結果を反映する。
          const days = Math.floor(distance / this._days);
          const hours = Math.floor((distance % this._days) / this._hours);
          const minutes = Math.floor((distance % this._hours) / this._minutes);
          const seconds = Math.floor((distance % this._minutes) / this._seconds);
          this.displayDays = this.formatNum(days);
          this.displayHours = this.formatNum(hours);
          this.displayMinutes = this.formatNum(minutes);
          this.displaySeconds = this.formatNum(seconds);
          document.getElementById('counterdays').style.setProperty('--value', this.displayDays);
          document.getElementById('counterhours').style.setProperty('--value', this.displayHours);
          document.getElementById('counterminutes').style.setProperty('--value', this.displayMinutes);
          document.getElementById('counterseconds').style.setProperty('--value', this.displaySeconds);

          //console.log(distance, this._days, days+"日", this.month, now.getTime());
          this.loaded = true;
      }, 1000)
    }
  }  
};
</script>

<style lang="scss" scoped>
</style>