<template>
  <a
    class="twitter-timeline"
    data-height="500"
    data-chrome="nofooter noheader"
    href="https://twitter.com/konosubafd?ref_src=twsrc%5Etfw"
    >Tweets by konosubafd</a
  >
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          type: "text/javascript",
          async: true,
          body: true,
          src: "https://platform.twitter.com/widgets.js",
          charset: "utf-8",
        },
      ],
    };
  },
  mounted() {
    //window.twttr.widgets.load();
  },
};
</script>