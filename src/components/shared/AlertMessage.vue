<template>
  <div class="alert" :class="styleClass"><b v-if="label">{{ label }}:</b> <slot/></div>
</template>

<script>
const levels = {
  error: {
    label: 'Error',
    styleClass: 'alert-danger',
  },
  warning: {
    label: 'Warning',
    styleClass: 'alert-warning',
  },
  success: {
    label: 'Success',
    styleClass: 'alert-success',
  },
  info: {
    label: 'Info',
    styleClass: 'alert-info',
  },
};

export default {
  props: {
    level: {
      type: String,
      required: true,
      validator: (v) => Object.keys(levels).includes(v),
    },
  },
  computed: {
    label() {
      return levels[this.level].label;
    },
    styleClass() {
      return levels[this.level].styleClass;
    },
  },
};
</script>

<style scoped>
</style>
