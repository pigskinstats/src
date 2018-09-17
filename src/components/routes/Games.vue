<template>
  <div>
    <page-title title="Games"/>
    <div align="center" class="data-table-controls">
      <button class="btn" v-on:click="games.back()"><font-awesome-icon icon="angle-left" /> Back</button>
      <span>Page {{ games.page }} of {{ games.pages }}</span>
      <button class="btn" v-on:click="games.forward()">Forward <font-awesome-icon icon="angle-right" /></button>
    </div>
    <table cellspacing="10" border="1" class="data-table">
      <tr v-for="game in games.items">
        <td>{{ game.date.toString() }}</td>
        <td :class="teamStyle(game.homeTeam, game.awayTeam)">
          <router-link :to="{ name: 'Team', params: { id: game.homeTeam.slug } }">{{ game.homeTeam.name }}</router-link>
        </td>
        <td :class="teamStyle(game.homeTeam, game.awayTeam)" class="number-cell">{{ scoreValue(game.homeTeam.score) }}</td>
        <td :class="teamStyle(game.awayTeam, game.homeTeam)">
          <router-link :to="{ name: 'Team', params: { id: game.awayTeam.slug } }">{{ game.awayTeam.name }}</router-link>
        </td>
        <td :class="teamStyle(game.awayTeam, game.homeTeam)" class="number-cell">{{ scoreValue(game.awayTeam.score) }}</td>
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
  methods: {
    scoreValue: (value) => unsetOr(value, '-'),
    teamStyle: (currentTeam, otherTeam) => {
      if(currentTeam.score > otherTeam.score) {
        return { 'winner': true };
      }

      if(currentTeam.score < otherTeam.score) {
        return { 'loser': true };
      }
    },
  },
  data: () => {
    const result = {
      games: new Paginator([]),
      error: '',
    };

    api.getGames().then(games => {
      result.games = new Paginator(games.sort((a, b) => b.date.unix - a.date.unix));
    }).catch(e => result.error = e);

    return result;
  },
};
</script>

<style scoped>
.winner {
  background-color: #cec;
}

.loser {
  background-color: #fff;
}
</style>
