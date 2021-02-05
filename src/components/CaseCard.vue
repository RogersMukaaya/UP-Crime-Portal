<template>
  <div class="card-container">
    <div class="header">
      <div class="header-left">
        <h1>Robbery in Kireka</h1>
        <p>#33467</p>
      </div>
      <div class="date-badge">
        <p>1/25/2021</p>
      </div>
    </div>
    <div class="body">
      <div class="left-content">
        <span class="material-icons">
          attachment
        </span>
        <p>5</p>
      </div>
      <div class="warning">
        <span class="material-icons">
          people
        </span>
        <p>6</p>
      </div>
      <div class="error">
        <span class="material-icons">
          people
        </span>
        <p>7</p>
      </div>
      <div class="success">
        <span class="material-icons">
          map
        </span>
        <p>8</p>
      </div>
      <div class="primary">
        <span class="material-icons">
          directions_walk
        </span>
        <p>9</p>
      </div>
    </div>
    <div class="footer">
      <div class="avatar-wrapper">
        <div class="avatar">
          <i class="mdi mdi-account-circle"></i>
        </div>
        <div class="avatar-info">
          <p>Opio Gideon</p>
          <small>Officer</small>
        </div>
      </div>
      <div class="pending-badge">
        <p>pending</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DepartmentCard"
};
</script>

<style scoped lang="scss">
@import "@/stylesheets/sass/abstract/up-crime-pad.scss";

.card-container {
  overflow: hidden;
  padding: 16px 26px;
  box-shadow: $shadow-card;
  transition-duration: 0.2s;
  border-radius: 4px;
  cursor: pointer;
  background: $white;
  font-family: $display-font;

  &:hover {
    box-shadow: $shadow-card-hover;
  }

  .header {
    display: flex;
    justify-content: space-between;

    .header-left {
      h1 {
        margin-top: 0;
        margin-bottom: 4px;
        padding: 0;
        font-size: 22px;
      }

      p {
        margin: 0;
        padding: 0;
        color: $secondary;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .date-badge {
      width: 120.37px;
      height: 33.07px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(74, 142, 255, 0.2);
      border-radius: 14px;

      p {
        color: #4a8eff;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .body {
    display: flex;
    align-items: center;
    margin: 20px 0;

    div {
      display: flex;
      align-items: center;
      margin-right: 14px;

      span {
        margin-right: 4px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .avatar-wrapper {
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 8px;

        i {
          font-size: 50px;
          color: $secondary;
        }
      }

      .avatar-info {
        display: flex;
        flex-direction: column;
        color: $secondary;

        p {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        small {
          font-size: 12px;
          text-align: left;
        }
      }
    }

    .pending-badge {
      width: 98.66px;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 178, 54, 0.2);
      border-radius: 14px;

      p {
        color: #ffb236;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
}
</style>
