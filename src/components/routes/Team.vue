<template>
  <div>
    <page-title :title="`Team: ${team.name} (${record})`"/>
    <table cellspacing="10" border="1" class="data-table">
      <tr v-for="game in team.games">
        <td>{{ game.date.toString() }}</td>
        <td>{{ game.homeTeam.name }}</td>
        <td>{{ game.homeTeam.score }}</td>
        <td>{{ game.awayTeam.name }}</td>
        <td>{{ game.awayTeam.score }}</td>
      </tr>
    </table>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';

export default {
  data: function() {
    const result = {
      team: {},
      record: '',
      error: '',
    };

    api.getTeam(this.$route.params.id).then(team => {
      result.team = team;
      result.record = `${team.record.wins}-${team.record.losses}`;
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
