<template>
  <div class="data-table-controls">
    <b-button pill size="sm" variant="outline-dark" v-on:click="paginator.back()"><font-awesome-icon icon="angle-left" /> Back</b-button>
    &nbsp;<span>Page {{ paginator.page }} of {{ paginator.pages }}</span>&nbsp;
    <b-button pill size="sm" variant="outline-dark" v-on:click="paginator.forward()">Forward <font-awesome-icon icon="angle-right" /></b-button>
  </div>
</template>

<script>
export default {
  props: {
    paginator: Object,
  },
};
</script>

<style scoped>
.data-table-controls {
  margin: 10px;
  text-align: center;
}
</style>
