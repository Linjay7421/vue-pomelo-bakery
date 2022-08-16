<template>
  <footer>
    <div class="title">
      <h1>柚子麵包坊</h1>
    </div>
    <ul class="informations">
      <li>0938-388-388</li>
      <li>10 AM ~ 10 PM</li>
      <li>台中市文心路上的某戶窗台上會有結石累累的柚子樹。</li>
    </ul>
    <div class="copyRight">
      <span>Copyright © 2022 Chin-Chieh, Lin . All rights reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<style lang="scss">
footer {
  position: relative;
  background-color: #3f3f3f;
  color: #fff;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  .title {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 28px;
  }
  .informations {
    > li {
      margin-bottom: 20px;
      max-width: 200px;
      word-wrap: break-word;
      &:nth-child(1) {
        &:before {
          font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f095";
          margin-right: 5px;
        }
      }
      &:nth-child(2) {
        &:before {
          font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f017";
          margin-right: 5px;
        }
      }
      &:last-of-type {
        &:before {
          font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f3c5";
          margin-right: 5px;
        }
      }
    }
  }
  .copyRight {
    text-align: center;
    width: 100%;
    > span {
      font-size: 12px;
      transform: scale(0.66);
      display: inline-block;
    } 
  }
}
</style>