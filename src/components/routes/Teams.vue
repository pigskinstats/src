<template>
  <div>
    <page-title title="Teams"/>
    <pagination-controls :paginator="teams"/>
    <teams-table :teams="teams.items"/>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';
import { alphaSort } from '@/modules/util';
import { Paginator } from '@/modules/pagination';

export default {
  methods: {
    updateTeams() {
      api.getTeams().then(teams => {
        this.teams = new Paginator(teams.sort(alphaSort(x => x.name)));
      }).catch(e => result.error = e);
    },
  },
  created() {
    this.updateTeams();
  },
  data() {
    return {
      teams: new Paginator([]),
      error: '',
    };
  },
};
</script>

<style scoped>
</style>
