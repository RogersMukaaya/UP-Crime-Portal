<template>
  <div class="case-card-container">
    <case-scene-card v-for="(card, index) in cards" :key="index" />
  </div>
</template>

<script>
import CaseSceneCard from "@/components/cases/CaseSceneCard.vue";

export default {
  name: "CasesScenes",

  components: {
    "case-scene-card": CaseSceneCard,
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
  margin-top: 28px;
}
</style>
