<template>
  <div>
    <PageTitle title="Games" :info="{ 'Season': season }"/>
    <pagination-controls :paginator="games"/>
    <games-table :season="season" :games="games.items"/>
    <AlertMessage v-if="error" level="error">{{ error }}</AlertMessage>
  </div>
</template>

<script>
import api from '@/modules/api';
import { Paginator } from '@/modules/pagination';
import AlertMessage from '@/components/AlertMessage';
import PageTitle from '@/components/PageTitle';

function gameSorter(a, b) {
  return b.date.unix - a.date.unix;
}

export default {
  components: {
    AlertMessage,
    PageTitle,
  },
  methods: {
    async updateGames() {
      try {
        const games = await api.getGames({ season: this.season });
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
