<template>
  <div id="app">
    <page-heading/>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.content {
  padding: 20px;
}
</style>
