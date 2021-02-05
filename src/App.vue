<template>
  <div id="app">
    <app-navbar />
    <div class="page-container">
      <app-sidebar />
      <app-main-content />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import SideNavbar from "@/components/SideNavbar.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  name: "Home",

  components: {
    "app-navbar": Navbar,
    "app-sidebar": SideNavbar,
    "app-main-content": MainContent
  }
};
</script>

<style lang="scss">
.page-container {
  display: flex;
}
</style>
