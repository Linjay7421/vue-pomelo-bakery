<template>
  <div class="slideShow">
    <div class="content container">
      <h1 class="title">本月主打</h1>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/product.png" alt="" />
            <p>柚子花麵包</p>
            <span>$ 240</span>
            <button class="rounded-3xl">放入購物車</button>
          </div>
          <div class="swiper-slide page2">page 2</div>
          <div class="swiper-slide page3">page 3</div>
          <div class="swiper-slide page4">page 4</div>
        </div>
        <!-- <button class="next">next</button>
        <button class="prev">prev</button> -->
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Swiper from "swiper";
import "swiper/css";

export default {
  name: "SlideShow",
  setup() {
    const swiper = reactive();
    onMounted(() => {
      swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    });
  },
};
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 0.2em;
  img {
    background: transparent;
    max-width: 60%;
  }
  p {
    margin-bottom: 0.5rem;
  }
  span {
    color: #dba855;
    margin-bottom: 0.5rem;
  }
  button {
    background-color: #23a36b;
    color: #fff;
    padding: 0.5rem 1.5rem;
  }
}
.next, .prev {
  background: #23a36b;
  color: #fff;
  padding: 1rem;
}
.slideShow {
  position: relative;
  > .bg {
    position: absolute;
    top: 0;
    z-index: -1;
    height: fill-available;
    width: 100%;
    background-image: url("@/assets/images/leaves.webp");
    background-repeat: repeat;
    mask-image: linear-gradient(
      -180deg,
      rgb(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgb(255, 255, 255, 0) 100%
    );
    -webkit-mask-image: linear-gradient(
      -180deg,
      rgb(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgb(255, 255, 255, 0) 100%
    );
  }
  > .content {
    padding-top: 4rem;
    padding-bottom: 4rem;
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