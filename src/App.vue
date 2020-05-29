<template>
  <div id="app">
    <PageHeading/>
    <router-view class="content"/>
  </div>
</template>

<script>
import { PageHeading } from '@/components/common';

export default {
  components: {
    PageHeading,
  },
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
