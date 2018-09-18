<template>
  <div class="page-title">
    <h2>{{ title }}</h2>
    <div v-for="item in each(info)">{{ item.key }}: {{ item.value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    info: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  methods: {
    each(o) {
      return Object.keys(o).map(k => ({ key: k, value: o[k] }));
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0;
}

.page-title {
  margin-bottom: 20px;
}
</style>
