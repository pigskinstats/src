<template>
  <div>
    <page-title title="Games"/>
    <pagination-controls :paginator="games"/>
    <games-table :games="games.items"/>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';
import { Paginator } from '@/modules/pagination';

export default {
  methods: {
    updateGames() {
      api.getGames().then(games => {
        this.games = new Paginator(games.sort((a, b) => b.date.unix - a.date.unix));
      }).catch(e => result.error = e);
    },
  },
  created() {
    this.updateGames();
  },
  data() {
    return {
      games: new Paginator([]),
      error: '',
    };
  },
};
</script>

<style scoped>
</style>
