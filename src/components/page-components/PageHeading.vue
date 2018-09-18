<template>
  <div class="heading" style="display: flex;">
    <div>
      <font-awesome-icon class="football-icon" icon="football-ball"/>
    </div>
    <div>
      <h1>PigskinStats.com</h1>
      <div class="subheading">Powered by: <a href="http://prwolfe.bol.ucla.edu/cfootball">Wolfe Scores</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeading',
};
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
}

.football-icon {
  margin: 6px;
  color: #933;
  font-size: 2.2rem;
}

.heading {
  background-color: #336;
  color: #ccc;
  padding: 12px;
}

.subheading {
  font-style: italic;
}

.subheading a {
  color: #ccc;
  text-decoration: underline;
}
</style>
