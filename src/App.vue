<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu.vue";

export default {
  name: "app",
  components: {
    HeaderMenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 5px;
}
</style>
