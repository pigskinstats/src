<template>
  <div>
    <h2>Scores</h2>
    <div>Source: <a href="http://prwolfe.bol.ucla.edu/cfootball/scores.htm">Wolfe Scores</a></div>
    <table cellspacing="10" border="1" class="score-table">
      <tr v-for="game in games">
        <td>{{ game.date.toString() }}</td>
        <td :class="teamStyle(game.homeTeam, game.awayTeam)">{{ game.homeTeam.name }}</td>
        <td :class="teamStyle(game.homeTeam, game.awayTeam)">{{ game.homeTeam.score }}</td>
        <td :class="teamStyle(game.awayTeam, game.homeTeam)">{{ game.awayTeam.name }}</td>
        <td :class="teamStyle(game.awayTeam, game.homeTeam)">{{ game.awayTeam.score }}</td>
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
      teamStyle: (currentTeam, otherTeam) => {
        if(currentTeam.score > otherTeam.score) {
          return { 'winner': true };
        }

        if(currentTeam.score < otherTeam.score) {
          return { 'loser': true };
        }
      },
    };

    api.wolfeScores.then(r => {
      result.games = parser.parse(r).sort((a, b) => b.date.unix - a.date.unix);
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

.winner {
  background-color: #cec;
}

.loser {
  background-color: #fff;
}
</style>
