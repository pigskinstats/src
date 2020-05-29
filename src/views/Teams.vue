<template>
  <div>
    <PageTitle title="Teams" :info="{ 'Season': season }"/>
    <PaginationControls :paginator="teams"/>
    <TeamsTable :teams="teams.items"/>
    <AlertMessage v-if="error" level="error">{{ error }}</AlertMessage>
  </div>
</template>

<script>
import api from '@/modules/api';
import { alphaSort } from '@/modules/util';
import { Paginator } from '@/modules/pagination';
import { AlertMessage, PageTitle, PaginationControls } from '@/components/common';
import TeamsTable from '@/components/TeamsTable';

export default {
  components: {
    AlertMessage,
    PageTitle,
    PaginationControls,
    TeamsTable,
  },
  methods: {
    async updateTeams() {
      try {
        const teams = await api.getTeams({ season: this.season });
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
      season: Number(this.$route.params['season']),
      error: '',
    };
  },
};
</script>

<style scoped>
</style>
