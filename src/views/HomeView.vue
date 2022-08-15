<template>
  <Header></Header>
  <div class="container"></div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
Header {
  position: fixed;
  width: 100%;
  top: 0;
}
Footer {
  margin-top: 200px;
}
</style>
