<template>
  <div id="navbar" class="site-navbar">
    <div class="navbar-wrapper">
      <div class="navbar-image">
        <!-- <img
                    class="site-navbar-logo"
                    src="~assets/logo.png"
                > -->
      </div>
      <div class="top-nav">
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
// import TabContainer from "./_generics/TabContainer.vue";
import Navbar from "./Navbar.vue";

export default {
  name: "TabItem",

  components: {
    Navbar
  }

  // components: {
  //   TabContainer,
  //   TabItem
  // }
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/variables.scss";
@import "@/stylesheets/sass/abstract/bpo-variables.scss";
@import "@/stylesheets/sass/abstract/mixins.scss";
div {
  background-color: $red;
}
</style>
