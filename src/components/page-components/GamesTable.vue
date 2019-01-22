<template>
  <data-table>
    <tr v-for="{ homeTeam, awayTeam, date } in games">
      <td style="white-space: nowrap;">{{ date.toString() }}</td>
      <td :class="teamStyle(homeTeam, awayTeam)">
        <router-link :to="{ name: 'Team', params: { id: homeTeam.slug } }">{{ homeTeam.name }}</router-link>
      </td>
      <td :class="teamStyle(homeTeam, awayTeam)" class="number-cell">{{ scoreValue(homeTeam.score) }}</td>
      <td :class="teamStyle(awayTeam, homeTeam)">
        <router-link :to="{ name: 'Team', params: { id: awayTeam.slug } }">{{ awayTeam.name }}</router-link>
      </td>
      <td :class="teamStyle(awayTeam, homeTeam)" class="number-cell">{{ scoreValue(awayTeam.score) }}</td>
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

tr {
  vertical-align: top;
}
</style>
