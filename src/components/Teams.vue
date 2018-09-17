<template>
  <div>
    <page-title title="Teams"/>
    <div align="center" class="data-table-controls">
      <button class="btn" v-on:click="teams.back()"><font-awesome-icon icon="angle-left" /> Back</button>
      <span>Page {{ teams.page }} of {{ teams.pages }}</span>
      <button class="btn" v-on:click="teams.forward()">Forward <font-awesome-icon icon="angle-right" /></button>
    </div>
    <table cellspacing="10" border="1" class="data-table">
      <tr v-for="team in teams.items">
        <td><router-link :to="{ name: 'Team', params: { id: team.slug } }">{{ team.name }}</router-link></td>
      </tr>
    </table>
    <div class="text-danger" v-if="error"><b>Error:</b> {{ error }}</div>
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
