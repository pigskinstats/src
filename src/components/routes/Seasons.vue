<template>
  <div>
    <page-title title="Seasons"/>
    <data-table>
      <tr v-for="season in seasons">
        <td><router-link :to="{ name: 'Season', params: { season } }">{{ season }}</router-link></td>
      </tr>
    </data-table>
  </div>
</template>

<script>
import api from '@/modules/api';

export default {
  data() {
    return {
      seasons: api.getSeasons(),
    };
  },
};
</script>
