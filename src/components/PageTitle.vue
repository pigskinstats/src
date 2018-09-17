<template>
  <div class="page-title">
    <h2>{{ title }}</h2>
    <div>Source: <a href="http://prwolfe.bol.ucla.edu/cfootball/scores.htm">Wolfe Scores</a></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
</style>
