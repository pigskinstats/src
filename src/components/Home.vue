<template>
  <div>
    <h2>Links</h2>
    <ul><li v-for="link in links"><a :href="link.href" target="_blank">{{ link.text }}</a></li></ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { href: "https://www.google.com/", text: 'Google' },
    ],
  }),
};
</script>

<style scoped>
</style>
