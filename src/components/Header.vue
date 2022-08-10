<template>
  <header class="text-center shadow-xl p-4 mb-10">
    <div id="logo" class="bg-slate-300"></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  #logo {
    width: 50px;
    height: 50px;
  }
}
</style>
