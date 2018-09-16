<template>
  <div>
    <h2>Games</h2>
    <div>Source: <a href="http://prwolfe.bol.ucla.edu/cfootball/scores.htm">Wolfe Scores</a></div>
    <div align="center" class="buttons">
      <button class="btn" v-on:click="games.back()"><font-awesome-icon icon="angle-left" /> Back</button>
      <span>Page {{ games.page }} of {{ games.pages }}</span>
      <button class="btn" v-on:click="games.forward()">Forward <font-awesome-icon icon="angle-right" /></button>
    </div>
    <table cellspacing="10" border="1" class="score-table">
      <tr v-for="game in games.items">
        <td>{{ game.date.toString() }}</td>
        <td :class="teamStyle(game.homeTeam, game.awayTeam)">
          <router-link :to="{ name: 'Team', params: { id: game.homeTeam.slug } }">{{ game.homeTeam.name }}</router-link>
        </td>
        <td :class="teamStyle(game.homeTeam, game.awayTeam)" class="number">{{ unsetOr(game.homeTeam.score, '-') }}</td>
        <td :class="teamStyle(game.awayTeam, game.homeTeam)">
          <router-link :to="{ name: 'Team', params: { id: game.awayTeam.slug } }">{{ game.awayTeam.name }}</router-link>
        </td>
        <td :class="teamStyle(game.awayTeam, game.homeTeam)" class="number">{{ unsetOr(game.awayTeam.score, '-') }}</td>
      </tr>
    </table>
    <div class="text-danger" v-if="error"><b>Error:</b> {{ error }}</div>
  </div>
</template>

<script>
import api from '@/modules/api';
import { unsetOr } from '@/modules/util';
import { Paginator } from '@/modules/pagination';

export default {
  data: () => {
    const result = {
      games: new Paginator([]),
      error: '',
      unsetOr: unsetOr,
      teamStyle: (currentTeam, otherTeam) => {
        if(currentTeam.score > otherTeam.score) {
          return { 'winner': true };
        }

        if(currentTeam.score < otherTeam.score) {
          return { 'loser': true };
        }
      },
    };

    api.getGames().then(games => {
      result.games = new Paginator(games.sort((a, b) => b.date.unix - a.date.unix));
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
