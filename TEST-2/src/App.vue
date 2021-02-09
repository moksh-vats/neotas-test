<template>
  <div id="main">
    <landing-page />
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage/LandingPage.vue";
export default {
  components: { LandingPage },
  name: "Main",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: $primaryFontFamily;
}
</style>
