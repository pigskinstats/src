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
    async updateTeams() {
      try {
        const teams = await api.getTeams();
        this.teams = new Paginator(teams.sort(alphaSort(x => x.name)));
      } catch(e) {
        this.error = e;
      }
    },
  },
  async created() {
    await this.updateTeams();
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
