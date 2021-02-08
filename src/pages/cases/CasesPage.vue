<template>
  <div class="page-container">
    <cases-sidebar />
    <cases />
  </div>
</template>

<script>
// @ is an alias to /src
import CasesSideNavbar from "@/components/CasesSideNavbar.vue";
import Cases from "@/components/Cases.vue";

export default {
  name: "Home",

  components: {
    "cases-sidebar": CasesSideNavbar,
    cases: Cases
  }
};
</script>

<style lang="scss">
.page-container {
  display: flex;
  height: 100vh;
}
</style>
