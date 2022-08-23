<template>
  <Header @get-height="getHeaderHeight"></Header>
  <Banner v-bind:style="{'margin-top': height+'px'}"></Banner>
  <Announce></Announce>
  <SlideShow></SlideShow>  
  <Footer></Footer>

</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Announce from "@/components/Announce.vue";
import SlideShow from "@/components/SlideShow.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Announce,
    SlideShow,
    Footer
},
  data() {
    return {
      height: 0 
    }
  },
  methods: {
    getHeaderHeight: function(height) {
      this.height = height;
    }
  }
};
</script>

<style lang="scss">

Footer {
  margin-top: 200px;
}
</style>
