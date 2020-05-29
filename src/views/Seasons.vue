<template>
  <div>
    <PageTitle title="Seasons"/>
    <SeasonsTable :seasons="seasons"/>
  </div>
</template>

<script>
import { PageTitle } from '@/components/common';
import { SeasonsTable } from '@/components/tables';
import api from '@/modules/api';

export default {
  components: {
    PageTitle,
    SeasonsTable,
  },
  data() {
    return {
      seasons: api.getSeasons(),
    };
  },
};
</script>
