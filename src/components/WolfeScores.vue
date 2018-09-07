<template>
  <div>
    <h2>Scores</h2>
    <div>Source: <a href="http://prwolfe.bol.ucla.edu/cfootball/scores.htm">Wolfe Scores</a></div>
    <table cellspacing="10" border="1" class="score-table">
      <tr v-for="game in games">
        <td>{{ game.date }}</td>
        <td>{{ game.homeTeam.name }}</td>
        <td>{{ game.homeTeam.score }}</td>
        <td>{{ game.awayTeam.name }}</td>
        <td>{{ game.awayTeam.score }}</td>
      </tr>
    </table>
    <div class="text-danger" v-if="error"><b>Error:</b> {{ error }}</div>
  </div>
</template>

<script>
import api from '../modules/api';
import parser from '../modules/wolfe-parser';

export default {
  data: () => {
    const result = {
      games: [],
      error: '',
    };

    api.wolfeScores.then(r => {
      result.games = parser.parse(r);
    }).catch(e => result.error = e);

    return result;
  },
};
</script>

<style scoped>
.score-table {
  width: 100%;
}

.score-table tr:nth-child(odd) {
  background-color: #ccc;
}
</style>
