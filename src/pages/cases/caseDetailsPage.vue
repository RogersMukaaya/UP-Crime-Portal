<template>
  <div class="page-container">
    <sidebar />
    <div class="main-content">
      <div class="navigation-container">
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
        </ul>
      </div>
      <case-scenes />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import caseDetailsSidebar from "@/components/cases/caseDetailsSidebar.vue";
import caseScenes from "@/components/cases/caseScenes.vue";

export default {
  name: "Home",

  components: {
    sidebar: caseDetailsSidebar,
    "case-scenes": caseScenes
  }
};
</script>

<style lang="scss">
  @import "@/stylesheets/sass/abstract/up-crime-pad.scss";

  .page-container {
    display: flex;
    height: 100vh;

    .main-content {
      display: flex;
      flex-direction: column;

      .navigation-container {
        ul {
          display: flex;
          margin: 0;
          list-style-type: none;

          li {
            display: flex;
            align-items: center;
            font-size: 20px;
            color: $black;
            padding: 12px;
            border-bottom: 3px solid $black;

            p {
              background: $danger;
              color: $black;
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
          }
        }
      }
    }
  }
</style>
