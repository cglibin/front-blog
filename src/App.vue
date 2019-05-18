<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import homePage from "./components/homePage";

export default {
  name: "App",
  components: {
    homePage
  }
};
</script>

<style>

</style>
