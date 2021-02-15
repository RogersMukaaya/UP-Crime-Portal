<template>
  <div class="case-card-container">
    <case-lead-card
      v-for="(card, index) in cards"
      :key="index"
      @show-lead-details="$emit('show-lead-details')"
    />
  </div>
</template>

<script>
import CaseLeadCard from "@/components/cases/CaseLeadCard.vue";

export default {
  name: "CaseLeads",

  components: {
    "case-lead-card": CaseLeadCard
  },

  data: function() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.11, 12],
      isCreateNewCase: false
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
  margin-top: 28px;
}
</style>
