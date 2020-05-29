<template>
  <div>
    <page-title title="Seasons"/>
    <DataTable>
      <tr v-for="season in seasons">
        <td><router-link :to="{ name: 'Season', params: { season } }">{{ season }}</router-link></td>
      </tr>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable';
import api from '@/modules/api';

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      seasons: api.getSeasons(),
    };
  },
};
</script>
