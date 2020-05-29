<template>
  <table cellspacing="10" border="1" class="data-table">
    <slot/>
  </table>
</template>

<style scoped>
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
</style>
