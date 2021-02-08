<template>
  <div class="page-container">
    <cases-sidebar />
    <cases />
  </div>
</template>

<script>
// @ is an alias to /src
import casesSideNavbar from "@/components/casesSideNavbar.vue";
import cases from "@/components/cases.vue";

export default {
  name: "Home",

  components: {
    "cases-sidebar": casesSideNavbar,
    cases: cases
  }
};
</script>

<style lang="scss">
.page-container {
  display: flex;
  height: 100vh;
}
</style>
