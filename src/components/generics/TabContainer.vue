<template>
  <ul class="tab-group">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "TabContainer"
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

ul {
  list-style-type: none;
  display: flex;
  border-bottom: 1px solid $quaternary;
  margin: 0;
  padding: 0;
}
</style>
