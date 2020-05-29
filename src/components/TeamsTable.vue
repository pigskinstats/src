<template>
  <DataTable>
    <tr v-for="{ slug, name } in teams">
      <td><router-link :to="{ name: 'Team', params: { id: slug } }">{{ name }}</router-link></td>
    </tr>
  </DataTable>
</template>

<script>
import DataTable from '@/components/DataTable';

export default {
  components: {
    DataTable,
  },
  props: {
    teams: Array,
  },
};
</script>
