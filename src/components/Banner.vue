<template>
  <div class="Banner">
    <div class="container">
      <div class="title w-8/12">
        <span>
          <b>柚</b>
          子是色胚，他真的很色 小心他去你家會跑來督你 。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {},
  computed: {
    elementHeight: function () {},
  },
};
</script>

<style lang="scss">
.Banner {
  width: 100vw;
  height: 512px;
  background: no-repeat;
  background-size: 280%;
  background-position: 50% 90%;
  background-image: url("@/assets/images/banner.jpg");
  -webkit-mask-image: linear-gradient(-180deg, rgba(255, 255, 255, 1) 68%, rgb(255, 255, 255, 0) 100%);
  > .container {
    .title {
      font-size: 1.5rem;
      b {
        font-size: 2.5rem;
      }
    }
  }
}
</style>