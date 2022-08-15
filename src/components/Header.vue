<template>
  <header class="text-center shadow-xl p-4 mb-10">
    <ul class="grid grid-cols-5 gap-5">
      <li>介紹</li>
      <li>種類</li>
      <li><img src="@/assets/images/logo.png" /></li>
      <li>搜尋</li>
      <li>訂單</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  padding-top: 49px;
  background-color: #fff;
  > ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: flex-end;
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
