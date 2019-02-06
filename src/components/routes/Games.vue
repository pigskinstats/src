<template>
  <div>
    <page-title title="Games"/>
    <pagination-controls :paginator="games"/>
    <games-table :season="season" :games="games.items"/>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';
import { Paginator } from '@/modules/pagination';

function gameSorter(a, b) {
  return b.date.unix - a.date.unix;
}

export default {
  methods: {
    async updateGames() {
      try {
        const games = await api.getGames();
        this.games = new Paginator(games.sort(gameSorter));
      } catch(e) {
        this.error = e;
      }
    },
  },
  async created() {
    await this.updateGames();
  },
  data() {
    return {
      season: Number(this.$route.params['season']),
      games: new Paginator([]),
      error: '',
    };
  },
};
</script>

<style scoped>
</style>
