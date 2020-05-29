<template>
  <DataTable>
    <tr v-for="{ homeTeam, awayTeam, date } in games">
      <td style="white-space: nowrap;">{{ date.toString() }}</td>
      <td :class="teamStyle(homeTeam, awayTeam)">
        <router-link :to="linkTo(homeTeam, season)">{{ homeTeam.name }}</router-link>
      </td>
      <td :class="teamStyle(homeTeam, awayTeam)" class="number-cell">{{ scoreValue(homeTeam.score) }}</td>
      <td :class="teamStyle(awayTeam, homeTeam)">
        <router-link :to="linkTo(awayTeam, season)">{{ awayTeam.name }}</router-link>
      </td>
      <td :class="teamStyle(awayTeam, homeTeam)" class="number-cell">{{ scoreValue(awayTeam.score) }}</td>
    </tr>
  </DataTable>
</template>

<script>
import DataTable from './DataTable';
import { unsetOr } from '@/modules/util';

export default {
  components: {
    DataTable,
  },
  props: {
    season: Number,
    games: Array,
  },
  methods: {
    linkTo: (team, season) => ({ name: 'Team', params: { season, id: team.slug } }),
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
