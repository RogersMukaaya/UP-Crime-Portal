<template>
  <div class="page-container">
    <sidebar />
    <div class="main-content">
      <div class="navigation-container">
        <div class="header">
          <h1>Robery in Kireka</h1>
          <div class="add-class"
            @click="showAddSceneModel = true"
          >
            <span class="material-icons">
              add
            </span>
            ADD SCENE
          </div>
        </div>
        <ul>
          <li>
            Cases
            <p>3</p>
          </li>
          <li class="disabled">
            People
          </li>
          <li class="disabled">
            Files
          </li>
          <li class="disabled">
            Settings
          </li>
          <li class="disabled">
            Warrant
          </li>
        </ul>
      </div>
      <case-scenes />
    </div>
    <create-scene  v-if="showAddSceneModel" />
  </div>
</template>

<script>
// @ is an alias to /src
import CaseDetailsSidebar from "@/components/cases/CaseDetailsSidebar.vue";
import CaseScenes from "@/components/cases/CaseScenes.vue";
import CreateNewScene from "@/components/cases/CreateNewScene.vue";

export default {
  name: "Home",

  components: {
    sidebar: CaseDetailsSidebar,
    "case-scenes": CaseScenes,
    "create-scene": CreateNewScene,
  },

  data() {
    return {
      showAddSceneModel: false
    }
  }
};
</script>

<style lang="scss">
  @import "@/stylesheets/sass/abstract/up-crime-pad.scss";

  .page-container {
    font-family: $display-font;
    display: flex;
    height: 100vh;

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 77px 46px;

      .navigation-container {
        border-bottom: 1px solid $quaternary;

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

            span {
              margin-right: 10px;
            }
            }
        }

        ul {
          display: flex;
          margin: 0;
          list-style-type: none;
          padding: 0;

          li {
            display: flex;
            align-items: center;
            font-size: 20px;
            color: $black;
            padding: 12px;
            border-bottom: 3px solid $black;
            font-size: 14px;
            color: $lead;
            font-weight: 600;

            p {
              background: $lead;
              color: $white;
              height: 20px;
              min-width: 24px;
              padding: 0 4px;
              border-radius: 50px;
              font-size: 12px;
              line-height: 150%;
              letter-spacing: 0em;
              margin-left: 12px;
              text-align: center;
            }
          }

          li:hover {
            cursor: pointer;
            opacity: 1;
          }

          .disabled {
            opacity: 0.5;
            border-bottom: none;
            color: $tertiary
          }
        }
      }
    }
  }
</style>
