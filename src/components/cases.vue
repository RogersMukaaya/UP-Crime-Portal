<template>
  <div class="main-content">
    <filter-container @create-case="createNewCase" />
    <div class="case-card-container">
      <case-card v-for="(card, index) in cards" :key="index" />
      <create-case v-if="isCreateNewCase" @close-modal="closeCreateCaseModal" />
    </div>
  </div>
</template>

<script>
import filterContainer from "@/components/filterContainer.vue";
import caseCard from "@/components/caseCard.vue";
import createCase from "@/components/createCase.vue";

export default {
  name: "cases",

  components: {
    "filter-container": filterContainer,
    "case-card": caseCard,
    "create-case": createCase
  },

  data: function() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.11, 12],
      isCreateNewCase: false
    };
  },

  methods: {
    createNewCase() {
      this.isCreateNewCase = true;
    },

    closeCreateCaseModal() {
      this.isCreateNewCase = false;
    }
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
