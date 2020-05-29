<template>
  <div class="data-table-controls">
    <button class="btn" v-on:click="paginator.back()"><font-awesome-icon icon="angle-left" /> Back</button>
    <span>Page {{ paginator.page }} of {{ paginator.pages }}</span>
    <button class="btn" v-on:click="paginator.forward()">Forward <font-awesome-icon icon="angle-right" /></button>
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
