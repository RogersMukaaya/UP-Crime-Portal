<template>
  <div class="page-container">
    <sidebar />
    <div class="main-content">
      <div class="navigation-container">
        <div class="header">
          <h1>Robery in Kireka</h1>
          <div class="add-class" @click="whichAddModel">
            <span class="material-icons">
              add
            </span>
            <template v-if="showCaseScenes">ADD SCENE</template>
            <template v-if="showCaseLeads">ADD LEAD</template>
            <template v-if="showCaseInterviews">ADD INTERVIEW</template>
          </div>
        </div>
        <tab-container 
          v-model="tab"
          @input="selectedTab"
        >
          <tab-item
            id="scenes"
            :checked="tab == 'scenes'"
            :is-active="tab == 'scenes'"
            value="scenes"
            :count="23"
            badge-color="lead"
            label="Scenes"
          />
          <tab-item
            id="leads"
            :checked="tab == 'leads'"
            :is-active="tab == 'leads'"
            value="leads"
            :count="23"
            badge-color="lead"
            label="Leads"
          />
          <tab-item
            id="interviews"
            :checked="tab == 'interviews'"
            :is-active="tab == 'interviews'"
            value="interviews"
            :count="33"
            badge-color="lead"
            label="Interviews" 
          />
          <tab-item
            id="warranties"
            :is-active="false"
            value="war"
            :count="23"
            badge-color="lead"
            label="Warranties" 
          />
          <tab-item
            id="photos"
            :is-active="false"
            value="emp"
            :count="40"
            badge-color="lead"
            label="Photos" 
          />
        </tab-container>
      </div>
      <div class="case-scene-container">
        <case-scenes
          v-if="showCaseScenes"
          @show-scene-details="showSceneDetailsModel = true"
        />
        <case-leads
          v-if="showCaseLeads"
          @show-lead-details="showLeadDetailsModel = true"
        />
        <case-interviews
          v-if="showCaseInterviews"
          @show-interview-details="showInterviewDetailsModel = true"
        />
        <create-scene
          v-if="showAddSceneModel"
          state="create"
          @close-modal="showAddSceneModel = false"
        />
        <scene-details
          v-if="showSceneDetailsModel"
          state="details"
          @close-modal="showSceneDetailsModel = false"
        />
        <create-lead
          v-if="showAddLeadModel"
          state="create"
          @close-modal="showAddLeadModel = false"
        />
        <lead-details
          v-if="showLeadDetailsModel"
          state="details"
          @close-modal="showLeadDetailsModel = false"
        />
        <create-interview
          v-if="showAddInterviewModel"
          state="create"
          @close-modal="showAddInterviewModel = false"
        />
        <interview-details
          v-if="showInterviewDetailsModel"
          state="details"
          @close-modal="showInterviewDetailsModel = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CaseDetailsSidebar from "@/components/cases/CaseDetailsSidebar.vue";
import TabContainer from "@/components/generics/TabContainer.vue";
import TabItem from "@/components/generics/TabItem.vue";
import CaseScenes from "@/components/cases/CaseScenes.vue";
import CaseLeads from "@/components/cases/CaseLeads.vue";
import CaseInterviews from "@/components/cases/CaseInterviews.vue";
import CreateOrViewScene from "@/components/cases/CreateOrViewScene.vue";
import CreateOrViewLead from "@/components/cases/CreateOrViewLead.vue";
import CreateOrViewInterview from "@/components/cases/CreateOrViewInterview.vue";

export default {
  name: "Home",

  components: {
    sidebar: CaseDetailsSidebar,
    "tab-container": TabContainer,
    "tab-item": TabItem,
    "case-scenes": CaseScenes,
    "case-leads": CaseLeads,
    "case-interviews": CaseInterviews,
    "create-scene": CreateOrViewScene,
    "scene-details": CreateOrViewScene,
    "create-lead": CreateOrViewLead,
    "lead-details": CreateOrViewLead,
    "create-interview": CreateOrViewInterview,
    "interview-details": CreateOrViewInterview
  },


    computed: {
      tab: {
        get() {
          let tab = this.activeTab;
          return tab;
        },

        set(value) {
          this.activeTab = value
        }
      },
    },

  data() {
    return {
      showCaseScenes: true,
      showCaseLeads: false,
      showCaseInterviews: false,
      showAddSceneModel: false,
      showSceneDetailsModel: false,
      showAddLeadModel: false,
      showLeadDetailsModel: false,
      showAddInterviewModel: false,
      showInterviewDetailsModel: false,
      activeTab: 'scenes'
    };
  },

  methods: {
    showScenes() {
      this.showCaseScenes = true;
      this.showCaseLeads = false;
      this.activeTab = 'scenes';
      console.log();
    },

    showLeads() {
      this.showCaseScenes = false;
      this.showCaseLeads = true;
      this.activeTab = 'leads';
      console.log();
    },

    showInterviews() {
      this.showCaseScenes = false;
      this.showCaseLeads = false;
      this.showCaseInterviews = true;
      this.activeTab = 'interviews';
      console.log();
    },

    whichAddModel() {
      if (this.showCaseScenes == true) {
        this.showAddSceneModel = true;
      } else if (this.showCaseLeads == true) {
        this.showAddLeadModel = true;
      } else if (this.showCaseInterviews == true) {
        this.showAddInterviewModel = true;
      }
    },

    selectedTab(value) {
      if(value == 'scenes') {
        this.showScenes();
      } else if(value == 'leads') {
        this.showLeads();
      } else if(value == 'interviews') {
        this.showInterviews();
      } 
    }
  }
};
</script>

<style lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.page-container {
  font-family: $display-font;
  display: flex;

  .main-content {
    margin: 77px 46px;
    display: flex;
    flex-direction: column;
    width: 100%;

    .navigation-container {
      .header {
        display: flex;
        justify-content: space-between;
        height: 64px;

        h1 {
          margin: 0;
          font-size: 25px;
          font-weight: 700;
          align-self: flex-start;
        }
        .add-class {
          align-self: flex-end;
          width: 155px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid $lead;
          font-size: 14px;
          font-weight: 600;
          color: $lead;
          border-radius: 4px;
          cursor: pointer;
          padding: 0 12px;

          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
