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
export default {
  data() {
    return {
      seasons: [ 2018, 2019 ],
    };
  },
};
</script>
