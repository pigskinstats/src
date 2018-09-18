<template>
  <data-table>
    <tr v-for="game in games">
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
  </data-table>
</template>

<script>
import { unsetOr } from '@/modules/util';

export default {
  props: {
    games: Array,
  },
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
