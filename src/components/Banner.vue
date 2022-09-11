<template>
  <!-- Banner背景換成當月麵包輪播圖fade-in -->
  <!-- https://sanki-ota.com/ -->
  <div class="Banner">
    <!-- Content -->
    <div class="content container">
      <!-- Title -->
      <div class="title w-9/12 tracking-wide">
        <span class="text-lg">
          <b class="text-4xl mr-1">柚</b>子是色胚，他真的很色 小心他去你家會跑來督你 。
        </span>
      </div>
      <!-- Button to category -->
      <router-link to="/category">
        <button class="btn-view rounded-3xl shadow-xsm px-5 py-2 bg-white">麵包一覽</button>
      </router-link>
    </div>
    <!-- Background -->
    <div class="background"></div>
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
  .content {
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 100%;
    .btn-view {
      position: absolute;
      bottom: 3rem;
      right: 2rem;
      &:after {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f061";
        margin-left: 5px;
      }
    }
  }
  .background {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: -1;
    height: -webkit-fill-available;
    background: no-repeat;
    background-size: 280%;
    background-position: 50% 90%;
    background-image: url("@/assets/images/banner.jpg");
    -webkit-mask-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 1) 80%,
      rgb(255, 255, 255, 0) 100%
    );
  }
}
</style>