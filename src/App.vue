<template>
  <div id="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",

  components: {
    "app-navbar": Navbar
  }
};
</script>

<style lang="scss">
.page-container {
  display: flex;
  height: 100vh;
}
</style>
