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
  data: () => {
    const result = {
      games: new Paginator([]),
      error: '',
    };

    api.getGames().then(games => {
      result.games = new Paginator(games.sort((a, b) => b.date.unix - a.date.unix));
    }).catch(e => result.error = e);

    return result;
  },
};
</script>

<style scoped>
</style>
