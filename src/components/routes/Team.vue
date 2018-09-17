<template>
  <div>
    <page-title :title="`Team: ${team.name} (${record})`"/>
    <games-table :games="team.games"/>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';

export default {
  methods: {
    updateTeam(teamId) {
      api.getTeam(teamId).then(team => {
        this.team = team;
        this.record = `${team.record.wins}-${team.record.losses}`;
      }).catch(e => result.error = e);
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.updateTeam(to.params.id);
    next();
  },
  created() {
    this.updateTeam(this.$route.params.id);
  },
  data() {
    return {
      team: {},
      record: '',
      error: '',
    };
  },
};
</script>

<style scoped>
</style>
