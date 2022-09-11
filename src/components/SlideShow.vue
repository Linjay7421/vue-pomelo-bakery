<template>
  <div class="slideShow">
    <div class="content container">
      <b class="title text-xl">本月主打</b>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/product.png" alt="" />
            <p>柚子花麵包</p>
            <span>$ 240</span>
            <button class="rounded-3xl shadow-xsm text-white px-5 py-2">放入購物車</button>
          </div>
        </div>
        <button class="next"><i class="fa-solid fa-angle-right"></i></button>
        <button class="prev"><i class="fa-solid fa-angle-left"></i></button>
      </div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Swiper, { Navigation } from "swiper";
import "swiper/css";

Swiper.use([Navigation]);

export default {
  name: "SlideShow",
  setup() {
    const swiper = ref();
    onMounted(() => {
      swiper.value = new Swiper(".mySwiper", {
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
.slideShow {
  position: relative;
  > .background {
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
      padding: 1rem 0;
      display: block;
      width: 100%;
      text-align: center;
      letter-spacing: 1rem;
    }
    .swiper {
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-slide {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.2em;
        padding: 20px 0px;
        > img {
          background: transparent;
          max-width: 60%;
          -webkit-filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
          filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
        }
        > p {
          margin-bottom: 0.5rem;
        }
        > span {
          color: #dba855;
          margin-bottom: 0.5rem;
        }
        > button {
          background-color: #23a36b;
        }
      }
      > button {
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        padding: 1rem;
        position: absolute;
        top: 30%;
        z-index: 99;
        &.next {
          right: 0;
        }
        &.prev {
          left: 0;
        }
      }
    }
  }
}
</style>