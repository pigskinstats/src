<template>
  <DataTable>
    <tr v-for="season in seasons">
      <td><router-link :to="{ name: 'Season', params: { season } }">{{ season }}</router-link></td>
    </tr>
  </DataTable>
</template>

<script>
import DataTable from './DataTable';

export default {
  components: {
    DataTable,
  },
  props: {
    seasons: Array,
  },
};
</script>
