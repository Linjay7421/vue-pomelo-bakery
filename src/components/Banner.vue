<template>
  <!-- Banner背景換成當月麵包輪播圖fade-in -->
  <!-- https://sanki-ota.com/ -->
  <div class="Banner">
    <div class="container">
      <div class="title w-8/12">
        <span>
          <b>柚</b>
          子是色胚，他真的很色 小心他去你家會跑來督你 。
        </span>
      </div>
      <button class="btn-view rounded-3xl shadow-xl">種類一覽</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {},
};
</script>

<style lang="scss">
.Banner {
  position: relative;
  width: 100vw;
  height: 512px;
  background: no-repeat;
  background-size: 280%;
  background-position: 50% 90%;
  background-image: url("@/assets/images/banner.jpg");
  -webkit-mask-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 1) 80%,
    rgb(255, 255, 255, 0) 100%
  );
  > .container {
    padding-top: 4rem;
    padding-bottom: 4rem;
    height: 100%;
    .title {
      font-size: 1.5rem;
      b {
        font-size: 2.5rem;
      }
    }
    .btn-view {
      color: #000;
      padding: 0.5rem 1.5rem;
      position: absolute;
      bottom: 6rem;
      right: 2rem;
      background-color: #fff;
      &:after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f061";
        margin-left: 5px;
      }
    }
  }
}
</style>