<template>
  <data-table>
    <tr v-for="team in teams">
      <td><router-link :to="{ name: 'Team', params: { id: team.slug } }">{{ team.name }}</router-link></td>
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
