<template>
  <div>
    <h2>Wolfe Scores</h2>
    <div>Source: <a href="http://prwolfe.bol.ucla.edu/cfootball/scores.htm">Wolfe Scores</a></div>
    <pre>{{ scores }}</pre>
    <div class="text-danger" v-if="error"><b>Error:</b> {{ error }}</div>
  </div>
</template>

<script>
import api from '../modules/api';
import parser from '../modules/wolfe-parser';

export default {
  data: () => {
    const result = {
      scores: 'x',
      error: '',
    };

    api.wolfeScores.then(r => {
      result.scores = parser.parse(r);
    }).catch(e => result.error = e);

    return result;
  },
};
</script>

<style scoped>
</style>
