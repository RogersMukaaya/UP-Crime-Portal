<template>
  <div class="side-navbar">
    <div class="work-name">
      <h1>#33467</h1>
    </div>
    <ul>
      <li>
        <div class="left-content">
          <span class="material-icons">
            sort
          </span>
          <p>Sort</p>
        </div>
        <div class="right-content">
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>

      <li>
        <div class="left-content">
          <span class="material-icons">
            insert_drive_file
          </span>
          <p>Type</p>
        </div>
        <div class="right-content">
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>

      <li>
        <div class="left-content">
          <span class="material-icons">
            date_range
          </span>
          <p>Range</p>
        </div>
        <div class="right-content">
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>

      <li>
        <div class="left-content">
          <span class="material-icons">
            account_circle
          </span>
          <p>Creator</p>
        </div>
        <div class="right-content">
          <i class="mdi mdi-chevron-down"></i>
        </div>
      </li>

      <li>
        <div class="left-content">
          <span class="material-icons">
            attach_file
          </span>
          <p>Report</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNavbar"
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.side-navbar {
  width: 321px;
  height: calc(100vh - 80px);
  margin-left: 31px;
  font-family: $display-font;

  .work-name {
    height: 121px;
    display: flex;
    align-items: center;
    margin-left: 16px;

    h1 {
      padding: 0;
      margin: 0;
      font-size: 27px;
      font-weight: 700;
      color: $secondary;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      display: flex;
      justify-content: space-between;
      padding: 10px 16px;

      .left-content {
        display: flex;
        align-items: center;

        span {
          color: $gray-30;
          margin-right: 28px;
        }
      }

      .right-content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      p {
        font-size: 14px;
        color: $secondary;
        margin: 0;
        line-height: 29px;
      }
    }

    li:hover {
      background-color: $primary-container;
      cursor: pointer;
    }
  }
}
</style>
