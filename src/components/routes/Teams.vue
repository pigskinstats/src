<template>
  <div>
    <page-title title="Teams"/>
    <pagination-controls :paginator="teams"/>
    <table cellspacing="10" border="1" class="data-table">
      <tr v-for="team in teams.items">
        <td><router-link :to="{ name: 'Team', params: { id: team.slug } }">{{ team.name }}</router-link></td>
      </tr>
    </table>
    <alert-message v-if="error" level="error">{{ error }}</alert-message>
  </div>
</template>

<script>
import api from '@/modules/api';
import { unsetOr, alphaSort } from '@/modules/util';
import { Paginator } from '@/modules/pagination';

export default {
  data: () => {
    const result = {
      teams: new Paginator([]),
      error: '',
    };

    api.getTeams().then(teams => {
      result.teams = new Paginator(teams.sort(alphaSort(x => x.name)));
    }).catch(e => result.error = e);

    return result;
  },
};
</script>

<style scoped>
</style>
