<template>
  <div class="main-content">
    <filter-container />
    <div class="case-card-container">
      <case-card v-for="(card, index) in cards" :key="index" />
    </div>
  </div>
</template>

<script>
import FilterContainer from "@/components/FilterContainer.vue";
import CaseCard from "@/components/CaseCard.vue";

export default {
  name: "FilterContainer",

  components: {
    "filter-container": FilterContainer,
    "case-card": CaseCard
  },

  data: function() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.11, 12]
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.case-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  margin-top: 12px;
}

.main-content {
  width: 100%;
  margin: 77px 46px;

  display: flex;
  flex-direction: column;
}
</style>
