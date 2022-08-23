<template>
  <div class="slideShow">
    <div class="container">
      <h1 class="title">本月主打</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SlideShow',
    components: {
    }
  };
</script>

<style lang="scss">
.slideShow {
  background-image: url("@/assets/images/leaves.webp");
  background-repeat: repeat;
  -webkit-mask-image: linear-gradient(
    -180deg,
    rgb(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 60%,
    rgb(255, 255, 255, 0) 100%
  );
  box-sizing: border-box;
  > .container {
    padding-top: 4rem;
    padding-bottom: 4rem;
    height: 100%;
    > .title {
      font-size: 1.2rem;
      padding: 1rem 0;
      display: block;
      width: 100%;
      text-align: center;
      letter-spacing: 1rem;
    }
  }
}
</style>