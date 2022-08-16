<template>
  <router-view />
</template>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css);
@font-face {
  font-family: "TaipeiSansTCBeta-Regular";
  src: url(@/assets/fonts/TaipeiSansTCBeta-Regular.ttf) format("opentype");
}
@font-face {
  font-family: "TaipeiSansTCBeta-Bold";
  src: url(@/assets/fonts/TaipeiSansTCBeta-Bold.ttf) format("opentype");
}
html {
  font-size: 12px;
}
body {
  overflow-x: hidden;
  font-family: Arial, TaipeiSansTCBeta-Regular,sans-serif;
}
h1, h2, h3, h4 , h5 {
  font-family: "TaipeiSansTCBeta-Bold";
  display: block;
}
</style>
