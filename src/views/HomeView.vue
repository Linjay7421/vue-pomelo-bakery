<template>
  <Header></Header>
  <Banner></Banner>
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
  }
};
</script>
