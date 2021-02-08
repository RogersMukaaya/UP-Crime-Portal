<template>
  <div class="content-container">
    <div class="filter-container">
      <div class="filter-items">
        <div class="current-item">
          <p>Cases</p>
        </div>
        <span class="material-icons">
          expand_more
        </span>
      </div>
      <div class="search-items">
        <span class="material-icons">
          search
        </span>
        <div class="current-item">
          <p>Search</p>
        </div>
      </div>
    </div>
    <div class="add-class" @click="$emit('create-case')">
      <span class="material-icons">
        add
      </span>
      ADD CASE
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent"
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.content-container {
  height: 84px;
  display: flex;
  justify-content: space-between;
  font-family: $display-font;
  border-bottom: 1px solid $border;

  .filter-container {
    display: flex;
    align-items: flex-end;

    div {
      height: 35px;
      display: flex;
      align-items: center;
      padding: 10px 15px;

      span {
        color: $secondary;
      }
    }

    .filter-items,
    .search-items {
      border: 1px solid $border;
      border-radius: 4px;
    }

    .filter-items {
      width: 560px;
      justify-content: space-between;

      p {
        color: $black;
        font-size: 25px;
        font-weight: bold;
      }
    }

    .search-items {
      width: 339px;
      margin-left: 77px;
      p {
        color: $tertiary;
        font-size: 14px;
      }
    }

    .filter-items:hover {
      cursor: pointer;
    }
  }

  .add-class {
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
</style>
