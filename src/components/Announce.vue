<template>
  <!-- 改前三個、然後要有公告頁面 -->
  <div class="announce">
    <b class="title text-xl">公告</b>
    <div class="item">
      <span class="date">2022.3</span>
      <p class="content">
        柚子要交女朋友了，究竟他能不能成功脫魯呢，就讓我們好好的看下去，所以柚子烘焙坊推出，魯蛇限定款麵包，現正發售中。
      </p>
    </div>
    <router-link to="/announce">
      <button class="btn_more rounded-3xl px-5 py-2">更多公告</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Announce",
};
</script>

<style lang="scss">
.announce {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .title {
    font-size: 1.2rem;
    margin: 1rem 0;
    display: block;
    width: 100%;
    text-align: center;
    letter-spacing: 1rem;
  }
  > .item {
    padding: 0 1rem;
    .date {
      color: #dba855;
    }
    .content {
      letter-spacing: 0.4em;
    }
  }
  .btn_more {
    color: #dba855;
    border: 1px solid#dba855;
    margin-top: 2rem;
    &:after {
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f061";
      margin-left: 5px;
    }
  }
}
</style>