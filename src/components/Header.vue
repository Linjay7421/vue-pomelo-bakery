<template>
  <header class="shadow-xl" v-bind:class="{ 'dispend': active }" ref="infoBox">
    <ul class="grid grid-cols-5 content-center">
      <li>介紹</li>
      <li>種類</li>
      <li><img src="@/assets/images/logo.png" /></li>
      <li>購物車</li>
      <li>訂單</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      active: false,
      height: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.active = window.scrollY > this.height ? true : false;
    },
  },
  mounted() {
    this.height = this.$refs.infoBox.clientHeight;
    this.$emit("get-height", this.height);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dispend {
  padding-top: 11px;
}
header {
  width: 100vw;
  height: auto;
  background-color: #fff;
  padding: 49px 0 11px 0;
  transition: 0.15s all ease;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  > ul {
    width: 100%;
    list-style: none;
    align-items: flex-end;
    justify-items: center;
    padding: 0;
    margin: 0;
    > li {
      padding: 2px 5px;
      > img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
