<template>
  <div>
    <page-title :title="`${team.name}`" :info="{ 'Season': season, 'Record': `(${record})` }"/>
    <games-table :season="season" :games="team.games"/>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';

export default {
  methods: {
    async updateTeam(teamId) {
      try {
        const team = await api.getTeam(teamId);
        this.team = team;
        this.record = `${team.record.wins}-${team.record.losses}`;
      } catch(e) {
        this.error = e;
      }
    },
  },
  async beforeRouteUpdate(to, from, next) {
    await this.updateTeam(to.params.id);
    next();
  },
  async created() {
    await this.updateTeam(this.$route.params.id);
  },
  data() {
    return {
      season: Number(this.$route.params['season']),
      team: {},
      record: '',
      error: '',
    };
  },
};
</script>

<style scoped>
</style>
