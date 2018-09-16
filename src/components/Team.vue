<template>
  <div>
    <h2>Team: {{ team.name }}</h2>
    <div>Source: <a href="http://prwolfe.bol.ucla.edu/cfootball/scores.htm">Wolfe Scores</a></div>
    <table cellspacing="10" border="1" class="score-table">
      <tr v-for="game in team.games">
        <td>{{ game.date.toString() }}</td>
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
import api from '@/modules/api';
import { unsetOr, alphaSort } from '@/modules/util';

export default {
  data: function() {
    const result = {
      team: {},
      error: '',
    };

    api.getTeam(this.$route.params.id).then(team => {
      result.team = team;
    }).catch(e => result.error = e);

    return result;
  },
};
</script>

<style scoped>
.buttons {
  margin: 10px;
  text-align: center;
}

.score-table {
  width: 100%;
}

.score-table tr:nth-child(odd) {
  background-color: #ccc;
}

.score-table tr td {
  padding: 4px;
}

.number {
  text-align: right;
}

.winner {
  background-color: #cec;
}

.loser {
  background-color: #fff;
}
</style>
