<template>
  <div class="case-card-container">
    <case-interview-card
      v-for="(card, index) in cards"
      :key="index"
      @show-interview-details="$emit('show-interview-details')"
    />
  </div>
</template>

<script>
import CaseInterviewCard from "@/components/cases/CaseInterviewCard.vue";

export default {
  name: "CaseInterviews",

  components: {
    "case-interview-card": CaseInterviewCard
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
  margin-top: 28px;
}
</style>
