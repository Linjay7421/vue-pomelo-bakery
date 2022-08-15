<template>
  <footer>
    <h1>柚子麵包坊</h1>
    <ul>
      <li>0938-388-388</li>
      <li>10 AM ~ 10 PM</li>
      <li>台中市文心路上的某戶窗台上會有結石累累的柚子樹。</li>
    </ul>
    <span>Copyright © 2022 Chin-Chieh, Lin . All rights reserved.</span>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background-color: #3f3f3f;
  color: #fff;
  padding: 0px 40px;
  > h1 {
    text-align: center;
    font-size: 1.5rem;
    padding: 37px 0 28px 0;
  }
  > ul {
    > li {
      font-size: 0.75rem;
      margin-bottom: 20px;
      max-width: 200px;
      word-wrap: break-word;
      &:nth-child(1) {
        &:before {
            content: "電話："
        }
      }
      &:nth-child(2) {
        &:before {
            content: "營業時間："
        }
      }
      &:last-of-type {
        &:before {
            content: "地址："
        }
      }
    }
  }
  > span {
    font-size: 5px;
    line-height: 1;
  }
}
</style>