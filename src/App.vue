<template>
  <div id="app">
    <div class="heading">
      <page-heading/>
    </div>
    <div class="content">
      <router-view/>
    </div>
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

.heading {
  background-color: #336;
  color: #ccc;
  padding: 20px;
}

.data-table {
  width: 100%;
}

.data-table tr:nth-child(odd) {
  background-color: #ccc;
}

.data-table tr td {
  padding: 4px;
}

.data-table .number-cell {
  text-align: right;
}

.data-table-controls {
  margin: 10px;
  text-align: center;
}
</style>
