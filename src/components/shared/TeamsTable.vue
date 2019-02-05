<template>
  <data-table>
    <tr v-for="{ slug, name } in teams">
      <td><router-link :to="{ name: 'Team', params: { id: slug } }">{{ name }}</router-link></td>
    </tr>
  </data-table>
</template>

<script>
export default {
  props: {
    teams: Array,
  },
};
</script>
