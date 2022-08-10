<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      this is a test
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: { 
    Header
  }
}
</script>
